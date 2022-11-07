import React, { FC, useState, useReducer, Reducer } from 'react'

import { TextEditor } from '../../components/common/TextEditor'

import { useAuthMutation } from '../../utils/auth-utils'
import { COMPLETE_QUEST } from '../../gql/mutations'

const getCurrentTimestamp = () => new Date().toISOString()

interface ReflectionQuestionsProps {
    questId: string
    setShowReflectionModal: (value: boolean) => void
}

type WorkState = {
    [key: number]: string
}

type Action = {
    type: string
    payload: { question: number; answer: string }
}

const reflectionReducer: Reducer<WorkState, Action> = (state, action) => {
    switch (action.type) {
        case 'input':
            return {
                ...state,
                [action.payload.question]: action.payload.answer,
            }
        default:
            return state
    }
}

export const ReflectionQuestions: FC<ReflectionQuestionsProps> = ({
    questId,
    setShowReflectionModal,
}) => {
    const [feedbackState, feedbackDispatch] = useReducer(reflectionReducer, {})

    const [completeQuest, completeQuestResponse] = useAuthMutation(
        COMPLETE_QUEST,
        undefined,
        () => setShowReflectionModal(false)
    )

    return (
        <>
            <h4 className="sm-type-guitar">Reflection – Tutor</h4>
            <p className="sm-type-lead">
                Having just guided your class through the Community Land Buyout
                Quest, it would be really helpful to us, the Developers of the
                Quest, if you could give us some feedback about your experience.
            </p>
            <p className="sm-type-amp text-align-left">
                1. From your point of view, what was the most challenging part
                of running the Quest?
            </p>

            <div className="ck-textarea">
                <TextEditor
                    data={feedbackState[0]}
                    onChange={(data: string) =>
                        feedbackDispatch({
                            type: 'input',
                            payload: {
                                question: 0,
                                answer: data,
                            },
                        })
                    }
                    docSubmitted={false}
                />
            </div>

            <p className="sm-type-amp text-align-left">
                2. How well do you think that your class engaged with the Quest?
            </p>

            <div className="ck-textarea">
                <TextEditor
                    data={feedbackState[1]}
                    onChange={(data: string) =>
                        feedbackDispatch({
                            type: 'input',
                            payload: {
                                question: 1,
                                answer: data,
                            },
                        })
                    }
                    docSubmitted={false}
                />
            </div>

            <p className="sm-type-amp text-align-left">
                3. What do you think that the pupils have learnt about community
                land buyouts?
            </p>

            <div className="ck-textarea">
                <TextEditor
                    data={feedbackState[2]}
                    onChange={(data: string) =>
                        feedbackDispatch({
                            type: 'input',
                            payload: {
                                question: 2,
                                answer: data,
                            },
                        })
                    }
                    docSubmitted={false}
                />
            </div>

            <p className="sm-type-amp text-align-left">
                4. What else have the pupils learnt from taking part in the
                Quest?
            </p>

            <div className="ck-textarea">
                <TextEditor
                    data={feedbackState[3]}
                    onChange={(data: string) =>
                        feedbackDispatch({
                            type: 'input',
                            payload: {
                                question: 3,
                                answer: data,
                            },
                        })
                    }
                    docSubmitted={false}
                />
            </div>

            <p className="sm-type-amp text-align-left">
                5. Did you come across any technical issues while working with
                the Quest?
            </p>

            <div className="ck-textarea">
                <TextEditor
                    data={feedbackState[4]}
                    onChange={(data: string) =>
                        feedbackDispatch({
                            type: 'input',
                            payload: {
                                question: 4,
                                answer: data,
                            },
                        })
                    }
                    docSubmitted={false}
                />
            </div>

            <p className="sm-type-amp text-align-left">
                6. How did you get on with controlling the Quest using the
                Teacher Hub?
            </p>

            <div className="ck-textarea">
                <TextEditor
                    data={feedbackState[5]}
                    onChange={(data) =>
                        feedbackDispatch({
                            type: 'input',
                            payload: {
                                question: 5,
                                answer: data,
                            },
                        })
                    }
                    docSubmitted={false}
                />
            </div>

            <p className="sm-type-amp text-align-left">
                7. Please give us any other feedback about your experience of
                working with the Quest.
            </p>

            <div className="ck-textarea mb-4">
                <TextEditor
                    data={feedbackState[6]}
                    onChange={(data: string) =>
                        feedbackDispatch({
                            type: 'input',
                            payload: {
                                question: 6,
                                answer: data,
                            },
                        })
                    }
                    docSubmitted={false}
                />
            </div>

            <p className="sm-type-lead">
                Thank you very much for your time and thank you for
                <br />
                all your work in running the Community Land Quest.
            </p>

            {!completeQuestResponse.data && (
                <button
                    className="btn-solid-lg mt-4"
                    onClick={() => {
                        const now = getCurrentTimestamp()
                        completeQuest({
                            variables: {
                                questId,
                                now,
                                feedback: feedbackState,
                            },
                        })
                    }}
                >
                    Submit feedback and complete Quest
                </button>
            )}
        </>
    )
}
