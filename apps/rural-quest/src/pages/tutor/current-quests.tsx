import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql } from '@apollo/client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ApolloError } from '@apollo/client'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import {
    LockedStageStatus,
    UnlockedStageStatus,
    DocumentlessUnlockedStageStatus,
    UnlockedStage3Status,
    UnlockedStage3NoDocStatus,
    SubmittedStageStatus,
    DocumentlessSubmittedStageStatus,
    FailedStageStatus,
    CompletedStageStatus,
} from '../../components/tutor/CurrentQuest'
import { ReflectionQuestions } from '../../components/tutor/ReflectionQuestions'

import { useAuthQuery } from '../../utils/auth-utils'
import { POSITION_DISPLAY_NAME } from '../../utils/common-utils'
import { CurrentQuestsContext } from '../../utils/tutor-contexts'

import { TUTOR_CURRENT_QUEST_QUERY } from '../../gql/queries'

import {
    TutorCurrentQuestQuery,
    TutorCurrentQuestQueryVariables,
    TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options,
    TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students,
} from '../../gql/types/TutorCurrentQuestQuery'

import Tick from '../../assets/tick.svg'

import '../../scss/index.scss'
import 'react-tabs/style/react-tabs.css'

const TUTOR_CURRENT_QUEST_SUB = gql`
    subscription TutorCurrentQuestSub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            username
            email
            tutor {
                id
                school {
                    name
                }
                quests(where: { status: { _eq: active } }) {
                    id
                    teams {
                        id
                        name
                        students {
                            id
                            user {
                                full_name
                            }
                        }
                        stage_progresses {
                            id
                            team_id
                            stage_id
                            status
                            documents(order_by: { id: asc }) {
                                id
                                status
                                feedback
                            }
                        }
                    }
                }
            }
        }
    }
`

const getStageStatusDisplay = (
    stageId,
    stageProgresses,
    devOptions,
    teamId
) => {
    const stageProgress = stageProgresses.find(
        (stageProgress) => stageProgress.stage_id === stageId
    )

    const document = stageProgress?.documents[0] || null

    if (stageProgress) {
        if (document) {
            switch (document.status) {
                case 'submitted':
                    return (
                        <SubmittedStageStatus
                            documents={stageProgress.documents}
                            stageId={stageId}
                            stageProgressId={stageProgress.id}
                        />
                    )
                case 'marked_failed':
                    return (
                        <FailedStageStatus
                            documents={stageProgress.documents}
                        />
                    )
                case 'marked_passed':
                    return (
                        <CompletedStageStatus
                            stageId={stageId}
                            stageProgressId={stageProgress.id}
                        />
                    )
                default:
                    return stageId === 3 ? (
                        <UnlockedStage3Status
                            devOptions={devOptions}
                            doc={document}
                        />
                    ) : (
                        <UnlockedStageStatus />
                    )
            }
        } else {
            if (stageProgress.status === 'completed') {
                return (
                    <CompletedStageStatus
                        stageId={stageId}
                        stageProgressId={stageProgress.id}
                    />
                )
            } else if (stageProgress.status === 'submitted' && !document) {
                return (
                    <DocumentlessSubmittedStageStatus
                        stageProgressId={stageProgress.id}
                    />
                )
            } else if (stageId === 6 || stageId === 7 || stageId === 8) {
                return (
                    <DocumentlessUnlockedStageStatus
                        stageProgressId={stageProgress.id}
                    />
                )
            }

            return stageId === 3 ? (
                <UnlockedStage3NoDocStatus
                    stageProgressId={stageProgress.id}
                    devOptions={devOptions}
                />
            ) : (
                <UnlockedStageStatus />
            )
        }
    } else {
        return <LockedStageStatus teamId={teamId} stageId={stageId} />
    }
}

interface TeamInfoPanelProps {
    devOptions: Array<TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_team_development_options>
    students: Array<TutorCurrentQuestQuery_user_by_pk_tutor_quests_teams_students>
}

const TeamInfoPanel = ({ devOptions, students }: TeamInfoPanelProps) => (
    <>
        <div className="form-holder-border">
            <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                Team members:
            </p>
            {students.map(({ position, user: { full_name } }, i) => (
                <p key={i} className="sm-type-bigamp">
                    {full_name}
                    {position && ` - ${POSITION_DISPLAY_NAME[position]}`}
                </p>
            ))}
        </div>
        {devOptions.length > 0 && (
            <div className="form-holder-border">
                <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                    Development options:
                </p>
                {devOptions.map(
                    (
                        {
                            team_choice_name,
                            shortlist,
                            development_option: { display_name },
                        },
                        i
                    ) => (
                        <p key={i} className="sm-type-bigamp">
                            {team_choice_name
                                ? `${team_choice_name} (Team Choice)`
                                : display_name}{' '}
                            {shortlist && (
                                <span className="shortlist-tick">
                                    <Tick />
                                </span>
                            )}
                        </p>
                    )
                )}
            </div>
        )}
    </>
)

const TeamUserPassPanel = ({ students }: TeamInfoPanelProps) => (
    <>
        <div className="form-holder-border">
            <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                Team members:
            </p>
            {students.map(({ user: { full_name, username, password } }, i) => (
                <div key={i} className="sm-type-bigamp text-align-left">
                    <p className="sm-type-guitar green-highlight">
                        {full_name}
                    </p>
                    <p className="sm-type-guitar sm-type-guitar--medium">
                        Username: <strong>{username}</strong>
                        &nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp; Password:{' '}
                        <strong>{password}</strong>
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    </>
)

const StageInfoPanel = ({ stages, stageProgresses, devOptions, teamId }) => (
    <ul className="steps">
        {stages.map(({ id, title }, i) => (
            <li key={i}>
                <p className="steps-step sm-type-lead sm-type-lead--medium">
                    {`Stage ${id}: ${title}`}
                </p>
                <div className="form-holder-border">
                    {getStageStatusDisplay(
                        id,
                        stageProgresses,
                        devOptions,
                        teamId
                    )}
                </div>
            </li>
        ))}
    </ul>
)

const TutorCurrentQuestPage = () => {
    const { expanded, setExpanded, selectedTab, setSelectedTab } =
        useContext(CurrentQuestsContext)
    const [showUserPassModal, setShowUserPassModal] = useState(false)
    const [showReflectionModal, setShowReflectionModal] = useState(false)

    const { loading, error, data } = useAuthQuery<
        TutorCurrentQuestQuery,
        TutorCurrentQuestQueryVariables
    >(
        TUTOR_CURRENT_QUEST_QUERY,
        {
            fetchPolicy: 'network-only',
            pollInterval: 2000,
        },
        'userId'
    )

    if (loading) return <Loading />
    if (error || !data)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    // subscribeToMore({
    //     document: TUTOR_CURRENT_QUEST_SUB,
    //     variables: { user_id: userId },
    //     context: {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     },

    //     updateQuery: (prev, { subscriptionData }) => {
    //         if (!subscriptionData.data) return prev

    //         // TODO big check whether status of any stages has actually changed
    //         // const stageProgressesWithStatus =
    //         //     subscriptionData.data.user[0].student.team.stage_progresses

    //         // if (subscriptionData.)

    //         return {
    //             user_by_pk: {
    //                 ...prev.user_by_pk,
    //                 tutor: {
    //                     ...prev.user_by_pk.tutor,
    //                     quests: {
    //                         ...prev.user_by_pk.tutor.quests,
    //                         teams: subscriptionData.data.user_by_pk.tutor.teams,
    //                     },
    //                 },
    //             },
    //         }
    //     },
    // })

    const {
        user_by_pk: {
            tutor: { quests },
        },
        development_option: devOptions,
        stage,
    } = data

    if (quests.length === 0) {
        return (
            <>
                <Helmet>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Current Quests</title>
                    <meta name="description" content="The description" />
                </Helmet>

                <main className="notes">
                    <section className="container" id="currentquest">
                        <Breadcrumbs
                            previous={[
                                {
                                    displayName: 'Tutor Hub',
                                    url: '/tutor/hub',
                                },
                            ]}
                            currentDisplayName="Current Quests"
                        />
                        <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                            No current Quests at present! Start one from your{' '}
                            <Link to="/tutor/hub">hub</Link>
                        </p>
                    </section>
                </main>
            </>
        )
    }

    return (
        <>
            <Helmet key={0}>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Current Quests</title>
            </Helmet>

            <main className="notes">
                <section className="container" id="currentquest">
                    <Breadcrumbs
                        key={1}
                        previous={[
                            {
                                displayName: 'Tutor Hub',
                                url: '/tutor/hub',
                            },
                        ]}
                        currentDisplayName="Current Quests"
                    />

                    <Tabs
                        key={2}
                        selectedIndex={selectedTab}
                        onSelect={(index) => setSelectedTab(index)}
                    >
                        <TabList>
                            {quests.map((_, i) => (
                                <Tab key={i}>Current Quest {i + 1}</Tab>
                            ))}
                        </TabList>
                        <section className="mt-2">
                            {quests.map(({ id, teams }, i) => (
                                <TabPanel key={i}>
                                    {teams.map(
                                        (
                                            {
                                                id,
                                                name,
                                                students,
                                                team_development_options,
                                                stage_progresses,
                                            },
                                            i
                                        ) => (
                                            <>
                                                <Accordion
                                                    key={i}
                                                    allowMultipleExpanded
                                                    allowZeroExpanded
                                                    preExpanded={expanded}
                                                    onChange={(ids) =>
                                                        setExpanded(ids)
                                                    }
                                                >
                                                    <AccordionItem
                                                        className="side-grey"
                                                        uuid={id}
                                                    >
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                {name}
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <div className="row tutor">
                                                                <div className="col-lg-4">
                                                                    <TeamInfoPanel
                                                                        devOptions={
                                                                            team_development_options
                                                                        }
                                                                        students={
                                                                            students
                                                                        }
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="btn-solid-lg"
                                                                        onClick={() => {
                                                                            window.scrollTo(
                                                                                0,
                                                                                0
                                                                            )
                                                                            setShowUserPassModal(
                                                                                true
                                                                            )
                                                                        }}
                                                                    >
                                                                        Show
                                                                        Usernames
                                                                        and
                                                                        Passwords
                                                                    </button>
                                                                </div>
                                                                <div className="col-lg-8 mt-4">
                                                                    <StageInfoPanel
                                                                        stages={
                                                                            stage
                                                                        }
                                                                        stageProgresses={
                                                                            stage_progresses
                                                                        }
                                                                        devOptions={
                                                                            devOptions
                                                                        }
                                                                        teamId={
                                                                            id
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            {showUserPassModal && (
                                                                <div className="modal-window-large">
                                                                    <div>
                                                                        <button
                                                                            onClick={() => {
                                                                                setShowUserPassModal(
                                                                                    false
                                                                                )
                                                                            }}
                                                                            title="Close"
                                                                            className="modal-close"
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <TeamUserPassPanel
                                                                            devOptions={
                                                                                team_development_options
                                                                            }
                                                                            students={
                                                                                students
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </Accordion>
                                            </>
                                        )
                                    )}

                                    <button
                                        type="button"
                                        className="btn-solid-lg"
                                        onClick={() => {
                                            window.scrollTo(0, 0)
                                            setShowReflectionModal(true)
                                        }}
                                    >
                                        Complete Quest
                                    </button>

                                    {showReflectionModal && (
                                        <div className="modal-window-large">
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        setShowReflectionModal(
                                                            false
                                                        )
                                                    }}
                                                    title="Close"
                                                    className="modal-close"
                                                >
                                                    Close
                                                </button>

                                                <ReflectionQuestions
                                                    questId={id}
                                                    setShowReflectionModal={
                                                        setShowReflectionModal
                                                    }
                                                />
                                            </div>
                                        </div>
                                    )}
                                </TabPanel>
                            ))}
                        </section>
                    </Tabs>
                </section>
            </main>
        </>
    )
}

export default TutorCurrentQuestPage
