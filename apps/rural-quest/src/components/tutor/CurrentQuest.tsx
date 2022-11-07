import React, { useState } from 'react'
import { Link } from 'gatsby'

import { useAuthMutation } from '../../utils/auth-utils'
import {
    UNLOCK_STAGE,
    MARK_PASSED,
    MARK_FAILED,
    COMPLETE_STAGE,
    SAVE_WORK_INITIAL,
    SAVE_WORK,
} from '../../gql/mutations'

import { TUTOR_CURRENT_QUEST_QUERY } from '../../gql/queries'
import { UnlockStage, UnlockStageVariables } from '../../gql/types/UnlockStage'
import {
    SaveWorkInitial,
    SaveWorkInitialVariables,
} from '../../gql/types/SaveWorkInitial'
import { SaveWork, SaveWorkVariables } from '../../gql/types/SaveWork'

import Lock from '../../assets/lock.svg'
import Tick from '../../assets/tick.svg'
import Cross from '../../assets/cross.svg'
import Progress from '../../assets/progress.svg'
import Submitted from '../../assets/submitted.svg'

export const LockedStageStatus = ({ teamId, stageId }) => {
    const [unlockStage] = useAuthMutation<UnlockStage, UnlockStageVariables>(
        UNLOCK_STAGE,
        {
            query: TUTOR_CURRENT_QUEST_QUERY,
            variables: {},
            idRequired: 'userId',
        }
    )

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
        query: TUTOR_CURRENT_QUEST_QUERY,
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
const getDocProvidedAnswers = (doc, devOptions) =>
    Object.entries(doc.doc_data)
        .filter(([_, data]) => data.provided)
        .map(
            ([option, _]) =>
                devOptions.find((devOpt) => devOpt.option === option)
                    .display_name
        )

//? Has a document already, i.e. when providing a model answer we add to the existing keys
export const UnlockedStage3Status = ({ devOptions, doc }) => {
    const [devOption, setDevOption] = useState('')

    const [saveWork] = useAuthMutation<SaveWork, SaveWorkVariables>(SAVE_WORK, {
        query: TUTOR_CURRENT_QUEST_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    const providedAnswers = getDocProvidedAnswers(doc, devOptions)

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
                    value={devOption}
                    onChange={({ target: { value } }) => setDevOption(value)}
                >
                    <option value="" defaultChecked>
                        Select
                    </option>
                    {devOptions.map(({ option, display_name }, i) => (
                        <option key={i} value={option}>
                            {display_name}
                        </option>
                    ))}
                </select>
                <button
                    className="btn-outline-reg"
                    onClick={() => {
                        saveWork({
                            variables: {
                                docId: doc.id,
                                docData: {
                                    ...doc.doc_data,
                                    [devOption]: {
                                        ...devOptions.find(
                                            (opt) => opt.option === devOption
                                        ).model_swot,
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
export const UnlockedStage3NoDocStatus = ({ stageProgressId, devOptions }) => {
    const [devOption, setDevOption] = useState('')

    const [saveWorkInitial] = useAuthMutation<
        SaveWorkInitial,
        SaveWorkInitialVariables
    >(SAVE_WORK_INITIAL, {
        query: TUTOR_CURRENT_QUEST_QUERY,
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
                    value={devOption}
                    onChange={({ target: { value } }) => setDevOption(value)}
                >
                    <option value="" defaultChecked>
                        Select
                    </option>
                    {devOptions.map(({ option, display_name }, i) => (
                        <option key={i} value={option}>
                            {display_name}
                        </option>
                    ))}
                </select>
                <button
                    className="btn-outline-reg"
                    onClick={() => {
                        saveWorkInitial({
                            variables: {
                                stageProgressId,
                                docData: {
                                    [devOption]: {
                                        ...devOptions.find(
                                            (opt) => opt.option === devOption
                                        ).model_swot,
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
        query: TUTOR_CURRENT_QUEST_QUERY,
        variables: {},
        idRequired: 'userId',
    })

    const [markPassed] = useAuthMutation(MARK_PASSED, {
        query: TUTOR_CURRENT_QUEST_QUERY,
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
        query: TUTOR_CURRENT_QUEST_QUERY,
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
