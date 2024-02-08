import { useContext, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ApolloError } from '@apollo/client'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

import {
    Loading,
    Error,
    Breadcrumbs,
    ReflectionQuestions,
} from '@community-land-quest/shared-ui'
import {
    LockedStageStatus,
    UnlockedStageStatus,
    DocumentlessUnlockedStageStatus,
    UnlockedStageWithModelAnswersStatus,
    UnlockedStageWithModelAnswersNoDocStatus,
    SubmittedStageStatus,
    DocumentlessSubmittedStageStatus,
    FailedStageStatus,
    CompletedStageStatus,
} from '@community-land-quest/shared-ui/components/tutor/CurrentGroup'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { CurrentGroupsContext } from '@community-land-quest/shared-data/contexts/tutor-contexts'
import { TUTOR_CURRENT_GROUP_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    TutorCurrentQuestQuery,
    TutorCurrentQuestQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import {
    POSITION_DISPLAY_NAME,
    buildExampleSWOT,
    buildExampleBusinessPlan,
} from '@community-land-quest/shared-utils/utils/common-utils'

import { ModelAnswer } from '@community-land-quest/shared-utils/utils/common-types'

import Tick from '../../assets/tick.svg'

import '../../scss/index.scss'
import 'react-tabs/style/react-tabs.css'

const getStageStatusDisplay = (
    stageId,
    stageProgresses,
    modelSwots,
    modelBusinessPlans,
    teamId
) => {
    const stageProgress = stageProgresses.find(
        (stageProgress) => stageProgress.stage_id === stageId
    )

    const document = stageProgress?.documents[0] || null

    const modelAnswers = stageId === 5 ? modelBusinessPlans : modelSwots

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
                    return stageId === 3 || stageId === 5 ? (
                        <UnlockedStageWithModelAnswersStatus
                            modelAnswers={modelAnswers}
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

            return stageId === 3 || stageId === 5 ? (
                <UnlockedStageWithModelAnswersNoDocStatus
                    stageProgressId={stageProgress.id}
                    modelAnswers={modelAnswers}
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
    devOptions: Array<any>
    students: Array<any>
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

interface TeamUserPassPanelProps {
    students: Array<any>
}

const TeamUserPassPanel = ({ students }: TeamUserPassPanelProps) => (
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

const StageInfoPanel = ({
    stages,
    stageProgresses,
    modelSwots,
    modelBusinessPlans,
    teamId,
}) => (
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
                        modelSwots,
                        modelBusinessPlans,
                        teamId
                    )}
                </div>
            </li>
        ))}
    </ul>
)

const TutorCurrentQuestPage = () => {
    const { expanded, setExpanded, selectedTab, setSelectedTab } =
        useContext(CurrentGroupsContext)
    const [showUserPassModal, setShowUserPassModal] = useState(false)
    const [showReflectionModal, setShowReflectionModal] = useState(false)

    const {
        allGraphCmsDevelopmentOption: { nodes: cmsDevelopmentOptions },
    } = useStaticQuery(graphql`
        query {
            allGraphCmsDevelopmentOption {
                nodes {
                    slug
                    modelSwot {
                        developmentOption
                        strengths {
                            html
                        }
                        weaknesses {
                            html
                        }
                        opportunities {
                            html
                        }
                        threats {
                            html
                        }
                    }
                    modelBusinessPlan {
                        developmentOption
                        setupCosts {
                            costItems {
                                item
                                cost
                            }
                            fundingSources {
                                funder
                                amount
                            }
                        }
                        runningCosts {
                            costs {
                                item
                                yearOne
                                yearTwo
                                yearThree
                                yearFour
                            }
                            incomes {
                                item
                                yearOne
                                yearTwo
                                yearThree
                                yearFour
                            }
                        }
                    }
                }
            }
        }
    `)

    const { loading, error, data } = useAuthQuery<
        TutorCurrentQuestQuery,
        Omit<TutorCurrentQuestQueryVariables, 'user_id'>
    >(
        TUTOR_CURRENT_GROUP_QUERY,
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
        stage,
    } = data

    const modelSwots: Array<ModelAnswer> = cmsDevelopmentOptions
        .map(({ slug, modelSwot }) => {
            const { developmentOption: title, ...rest } = modelSwot

            return {
                title,
                slug,
                modelAnswer: buildExampleSWOT(rest),
            }
        })
        .filter((swot: ModelAnswer) => swot !== null)

    const modelBusinessPlans: Array<ModelAnswer> = cmsDevelopmentOptions
        .map(({ slug, modelBusinessPlan }) => {
            const { developmentOption: title, ...rest } = modelBusinessPlan

            return {
                title,
                slug,
                modelAnswer: buildExampleBusinessPlan(rest),
            }
        })
        .filter((businessPlan: ModelAnswer) => businessPlan !== null)

    if (quests.length === 0) {
        return (
            <>
                <Helmet>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Active Quests</title>
                    <meta
                        name="description"
                        content="Currently Active Groups"
                    />
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
                            currentDisplayName="Active Groups"
                        />
                        <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                            No currently active groups at present! Start one
                            from your <Link to="/tutor/hub">hub</Link>
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
                <title>Active Groups</title>
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
                        currentDisplayName="Active Groups"
                    />

                    <Tabs
                        key={2}
                        selectedIndex={selectedTab}
                        onSelect={(index) => setSelectedTab(index)}
                    >
                        <TabList>
                            {quests.map(({ name }, i) => (
                                <Tab key={i}>{name || `Group ${i + 1}`}</Tab>
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
                                                                        modelSwots={
                                                                            modelSwots
                                                                        }
                                                                        modelBusinessPlans={
                                                                            modelBusinessPlans
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
