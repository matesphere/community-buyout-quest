import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'
import QueryString from 'query-string'

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

import { useAuthQuery } from '../../utils/auth-utils'
import { POSITION_DISPLAY_NAME } from '../../utils/common-utils'

import { TUTOR_PREVIOUS_QUEST_QUERY } from '../../gql/queries'

import {
    TutorPreviousQuestQuery,
    TutorPreviousQuestQueryVariables,
    TutorPreviousQuestQuery_quest_by_pk_teams_team_development_options,
    TutorPreviousQuestQuery_quest_by_pk_teams_students,
} from '../../gql/types/TutorPreviousQuestQuery'

import Tick from '../../assets/tick.svg'

import '../../scss/index.scss'
import 'react-tabs/style/react-tabs.css'

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
    devOptions: Array<TutorPreviousQuestQuery_quest_by_pk_teams_team_development_options>
    students: Array<TutorPreviousQuestQuery_quest_by_pk_teams_students>
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

const getDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const TutorCurrentQuestPage: FC<PageProps> = ({ location: { search } }) => {
    const { id } = QueryString.parse(search, {
        parseNumbers: true,
    }) as { id: string; num: number; from: string }

    const { loading, error, data } = useAuthQuery<
        TutorPreviousQuestQuery,
        TutorPreviousQuestQueryVariables
    >(
        TUTOR_PREVIOUS_QUEST_QUERY,
        {
            variables: {
                quest_id: id,
            },
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

    const {
        quest_by_pk: { started_at, completed_at, teams },
        development_option: devOptions,
        stage,
    } = data

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
                        currentDisplayName={`Previous Quest ${getDateFromTimestamp(
                            started_at
                        )} - ${getDateFromTimestamp(completed_at)}`}
                    />
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
                                                        students={students}
                                                    />
                                                </div>
                                                <div className="col-lg-8 mt-4">
                                                    <StageInfoPanel
                                                        stages={stage}
                                                        stageProgresses={
                                                            stage_progresses
                                                        }
                                                        devOptions={devOptions}
                                                        teamId={id}
                                                    />
                                                </div>
                                            </div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </>
                        )
                    )}
                </section>
            </main>
        </>
    )
}

export default TutorCurrentQuestPage
