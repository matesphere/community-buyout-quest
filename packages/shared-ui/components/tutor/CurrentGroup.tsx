import { useState } from 'react'
import { Link } from 'gatsby'

import { useAuthMutation } from '@community-land-quest/shared-data/gql/hooks/authMutation'
import { useUnlockStageWithCurrentGroupRefetch } from '@community-land-quest/shared-data/gql/hooks/tutor/unlockStage'
import {
    MARK_PASSED,
    MARK_FAILED,
    COMPLETE_STAGE,
    SAVE_WORK_INITIAL,
    SAVE_WORK,
} from '@community-land-quest/shared-data/gql/mutations'

import { TUTOR_CURRENT_GROUP_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    SaveWorkInitialMutation,
    SaveWorkInitialMutationVariables,
    SaveWorkMutation,
    SaveWorkMutationVariables,
} from '@community-land-quest/shared-data/gql/types/mutations.generated'

import Lock from '../../assets/lock.svg'
import Tick from '../../assets/tick.svg'
import Cross from '../../assets/cross.svg'
import Progress from '../../assets/progress.svg'
import Submitted from '../../assets/submitted.svg'

interface LockedStageStatusProps {
    teamId: string
    stageId: string
}

export const LockedStageStatus = ({
    teamId,
    stageId,
}: LockedStageStatusProps) => {
    const [unlockStage] = useUnlockStageWithCurrentGroupRefetch()

    return (
        <div>
            <Lock />
            <span>Locked</span>
            <span>
                <a
                    className="green-link text-underline"
                    onClick={(e) => {
                        e.preventDefault()
                        unlockStage({
                            variables: {
                                teamId,
                                stageId,
                            },
                        })
                    }}
                >
                    Unlock stage
                </a>
            </span>
        </div>
    )
}

export const UnlockedStageStatus = () => (
    <div className="progress">
        <Progress />
        <span>Unlocked</span>
    </div>
)

export const DocumentlessUnlockedStageStatus = ({ stageProgressId }) => {
    const [completeStage] = useAuthMutation(COMPLETE_STAGE, {
        query: TUTOR_CURRENT_GROUP_QUERY,
        variables: {},
        idRequired: 'userId',
    })
    return (
        <div className="progress">
            <Progress />
            <span>Unlocked</span>
            <span>
                <a
                    className="green-link text-underline"
                    onClick={(e) => {
                        e.preventDefault()
                        completeStage({
                            variables: {
                                stageProgressId,
                            },
                        })
                    }}
                >
                    Complete stage
                </a>
            </span>
        </div>
    )
}

//? Pulls out display names of SWOTs which were provided as model answers
const getDocProvidedAnswers = (doc, modelAnswers) =>
    Object.entries(doc.doc_data)
        .filter(([_, data]) => data.provided)
        .map(
            ([option, _]) =>
                modelAnswers.find((modelAnswer) => modelAnswer.slug === option)
                    ?.title || ''
        )

//? Has a document already, i.e. when providing a model answer we add to the existing keys
export const UnlockedStageWithModelAnswersStatus = ({ modelAnswers, doc }) => {
    const [modelAnswerSlug, setModelAnswerSlug] = useState('')

    const [saveWork] = useAuthMutation<
        SaveWorkMutation,
        SaveWorkMutationVariables
    >(SAVE_WORK, {
        query: TUTOR_CURRENT_GROUP_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    const providedAnswers = getDocProvidedAnswers(doc, modelAnswers)

    return (
        <div className="progress">
            <Progress />
            <span>Unlocked</span>

            <p className="sm-type-lead sm-type-lead--medium mt-4">
                Provide Model Answers:{' '}
            </p>

            {providedAnswers.length > 0 && (
                <p className="sm-type-amp">
                    Provided:{' '}
                    <span className="redorange-highlight">
                        {providedAnswers.join(', ')}
                    </span>
                </p>
            )}
            <div className="model-answers">
                <select
                    className="form-control"
                    value={modelAnswerSlug}
                    onChange={({ target: { value } }) =>
                        setModelAnswerSlug(value)
                    }
                >
                    <option value="" defaultChecked>
                        Select
                    </option>
                    {modelAnswers.map(({ title, slug }, i) => (
                        <option key={i} value={slug}>
                            {title}
                        </option>
                    ))}
                </select>
                <button
                    className="btn-outline-reg"
                    disabled={!modelAnswerSlug}
                    onClick={() => {
                        saveWork({
                            variables: {
                                docId: doc.id,
                                docData: {
                                    ...doc.doc_data,
                                    [modelAnswerSlug]: {
                                        ...modelAnswers.find(
                                            (answer) =>
                                                answer.slug === modelAnswerSlug
                                        ).modelAnswer,
                                        provided: true,
                                    },
                                },
                            },
                        })
                    }}
                >
                    Provide
                </button>
            </div>
        </div>
    )
}

//? Does not yet have a document, e.g. SWOT is being provided as example
export const UnlockedStageWithModelAnswersNoDocStatus = ({
    stageProgressId,
    modelAnswers,
}) => {
    const [modelAnswerSlug, setModelAnswerSlug] = useState('')

    const [saveWorkInitial] = useAuthMutation<
        SaveWorkInitialMutation,
        SaveWorkInitialMutationVariables
    >(SAVE_WORK_INITIAL, {
        query: TUTOR_CURRENT_GROUP_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    return (
        <div className="progress">
            <Progress />
            <span>Unlocked</span>

            <p className="sm-type-lead sm-type-lead--medium mt-4">
                Provide Model Answers:{' '}
            </p>
            <div className="model-answers">
                <select
                    className="form-control"
                    value={modelAnswerSlug}
                    onChange={({ target: { value } }) =>
                        setModelAnswerSlug(value)
                    }
                >
                    <option value="" defaultChecked>
                        Select
                    </option>
                    {modelAnswers.map(({ title, slug }, i) => (
                        <option key={i} value={slug}>
                            {title}
                        </option>
                    ))}
                </select>
                <button
                    className="btn-outline-reg"
                    disabled={!modelAnswerSlug}
                    onClick={() => {
                        saveWorkInitial({
                            variables: {
                                stageProgressId,
                                docData: {
                                    [modelAnswerSlug]: {
                                        ...modelAnswers.find(
                                            (answer) =>
                                                answer.slug === modelAnswerSlug
                                        ).modelAnswer,
                                        provided: true,
                                    },
                                },
                            },
                        })
                    }}
                >
                    Provide
                </button>
            </div>
        </div>
    )
}

export const InProgressStageStatus = () => (
    <div className="progress">
        <Progress />
        <span>
            Unlocked - <span className="green-link">In progress</span>
        </span>
    </div>
)

export const SubmittedStageStatus = ({
    documents,
    stageProgressId,
    stageId,
}) => {
    const [markFailed] = useAuthMutation(MARK_FAILED, {
        query: TUTOR_CURRENT_GROUP_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    const [markPassed] = useAuthMutation(MARK_PASSED, {
        query: TUTOR_CURRENT_GROUP_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    return (
        <>
            <p className="orange-link">
                <Submitted />
                <span className="redorange-highlight">
                    {documents[0].feedback
                        ? 'Feedback provided'
                        : 'Work submitted'}
                </span>
            </p>
            <ul className="current-steps">
                <li>
                    <Link
                        to={`/tutor/stage-${stageId}/submitted?id=${stageProgressId}`}
                    >
                        View submitted work
                    </Link>
                </li>
                <li>
                    <a
                        className="green-link text-underline"
                        onClick={(e) => {
                            e.preventDefault()
                            markFailed({
                                variables: {
                                    docId: documents[0].id,
                                },
                            })
                        }}
                    >
                        Re-enable submission
                    </a>
                </li>
                <li>
                    <a
                        className="green-link text-underline"
                        onClick={(e) => {
                            e.preventDefault()
                            markPassed({
                                variables: {
                                    docId: documents[0].id,
                                    stageProgressId,
                                },
                            })
                        }}
                    >
                        Complete stage
                    </a>
                </li>
            </ul>
        </>
    )
}

export const DocumentlessSubmittedStageStatus = ({ stageProgressId }) => {
    const [completeStage] = useAuthMutation(COMPLETE_STAGE, {
        query: TUTOR_CURRENT_GROUP_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    return (
        <div>
            <Submitted />
            <span className="redorange-highlight">Work submitted</span>
            {/* <span>
                <Link to={`/tutor/stage-2/submitted?id=${stageProgressId}`}>
                    View submitted work
                </Link>
            </span> */}
            <span>
                <a
                    className="green-link text-underline"
                    onClick={(e) => {
                        e.preventDefault()
                        completeStage({
                            variables: {
                                stageProgressId,
                            },
                        })
                    }}
                >
                    Complete stage
                </a>
            </span>
        </div>
    )
}

export const FailedStageStatus = ({ documents }) => (
    <div>
        <Cross />
        <span>Failed</span>
        <span>
            <a href={documents[0].link}>Team Work</a>
        </span>
        <span>
            <a href="#">Your Feedback</a>
        </span>
    </div>
)

export const CompletedStageStatus = ({ stageId, stageProgressId }) => (
    <div>
        <Tick />
        <span>Completed</span>
        {(stageId === 1 || stageId === 3 || stageId === 4 || stageId === 5) && (
            <span>
                <Link
                    to={`/tutor/stage-${stageId}/submitted?id=${stageProgressId}`}
                >
                    View completed work
                </Link>
            </span>
        )}
    </div>
)
