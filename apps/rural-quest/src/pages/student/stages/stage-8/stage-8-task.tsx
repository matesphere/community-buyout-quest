import React, { useState, useContext, useReducer, Reducer } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { TextEditor } from '../../../../components/common/TextEditor'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { Intro } from '../../../../components/student/Intro'
import { InfoBlock } from '../../../../components/student/InfoBlock'
import { Helpful } from '../../../../components/student/Helpful'
import { CheckList } from '../../../../components/student/Checklist'

import { UserStateContext } from '../../../../utils/user-state'
import { ActionType } from '../../../../utils/input-utils'
import { useAuthMutation } from '../../../../utils/auth-utils'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'

import { SUBMIT_REFLECTION } from '../../../../gql/mutations'

import '../../../../scss/index.scss'

type WorkState = {
    [key: number]: string
}

type Action = {
    type: ActionType.UpdateAction
    payload: { question: number; answer: string }
}

const stage8QuestionReducer: Reducer<WorkState, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.UpdateAction:
            return {
                ...state,
                [action.payload.question]: action.payload.answer,
            }
        default:
            return state
    }
}

const Stage8TaskPage = () => {
    const {
        graphCmsStageTask: {
            title,
            intro,
            questions,
            submittedText,
            helpfulInfo,
            checklist,
        },
    } = useStaticQuery(graphql`
        query {
            graphCmsStageTask(stageNumber: { eq: 8 }) {
                ...StageTaskContent
            }
        }
    `)

    const {
        userInfo: { schoolId },
    } = useContext(UserStateContext)

    const [showSubmitModal, setShowSubmitModal] = useState(false)

    const [workState, workDispatch] = useReducer<Reducer<WorkState, Action>>(
        stage8QuestionReducer,
        {}
    )

    const [submitReflection, submitReflectionResponse] =
        useAuthMutation(SUBMIT_REFLECTION)
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 8 - {title} - Task</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Stage 8',
                                        url: '/student/stage-8',
                                    },
                                ]}
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {title}
                            </h2>

                            <Intro item={intro} />

                            <TaskPanel>
                                <TaskContainer taskToComplete={{}}>
                                    <h4 className="sm-type-drum sm-type-drum--medium">
                                        Questions
                                    </h4>
                                    <ol>
                                        {questions.map((question, i) => (
                                            <li key={i}>
                                                <InfoBlock items={[question]} />
                                                <div className="ck-textarea">
                                                    <TextEditor
                                                        data={
                                                            workState[i] || ''
                                                        }
                                                        onChange={(data) =>
                                                            workDispatch({
                                                                type: ActionType.UpdateAction,
                                                                payload: {
                                                                    question: i,
                                                                    answer: data,
                                                                },
                                                            })
                                                        }
                                                        docSubmitted={false}
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ol>

                                    {!submitReflectionResponse.data && (
                                        <button
                                            className="btn-solid-lg mt-4"
                                            disabled={
                                                Object.values(workState).filter(
                                                    Boolean
                                                ).length < 8
                                            }
                                            onClick={() =>
                                                setShowSubmitModal(true)
                                            }
                                        >
                                            Submit
                                        </button>
                                    )}

                                    {showSubmitModal && (
                                        <div className="modal-window">
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        setShowSubmitModal(
                                                            false
                                                        )
                                                    }
                                                    title="Close"
                                                    className="modal-close"
                                                >
                                                    Close
                                                </button>

                                                {submitReflectionResponse.data ? (
                                                    <p className="sm-type-drum">
                                                        Thanks for submitting
                                                        your feedback.
                                                    </p>
                                                ) : (
                                                    <>
                                                        <p>Are you sure?</p>
                                                        <button
                                                            className="btn-solid-lg mt-4"
                                                            onClick={() =>
                                                                submitReflection(
                                                                    {
                                                                        variables:
                                                                            {
                                                                                schoolId,
                                                                                docData:
                                                                                    workState,
                                                                            },
                                                                    }
                                                                )
                                                            }
                                                        >
                                                            Yes, submit feedback
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {submitReflectionResponse.data && (
                                        <InfoBlock items={[submittedText]} />
                                    )}
                                </TaskContainer>
                            </TaskPanel>

                            <Link to="/student/stage-8">Back to Stage 8</Link>
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage8TaskPage
