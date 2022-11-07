import React, { useState, useEffect, FC } from 'react'
import { MutationResult } from '@apollo/client'

import { TextEditor } from '../../components/common/TextEditor'

import HelpIcon from '../../assets/help-icon.svg'

interface SubmitFeedbackSectionProps {
    feedbackState: { feedback: any }
    changeFunc: (data: any) => void
    submittedFeedback: { feedback: any }
    submitFeedbackObj: {
        call: () => Promise<any>
        response: MutationResult<any>
        submitComplete: boolean
        setSubmitComplete: (value: boolean) => void
    }
    disableSubmit: boolean
}

export const SubmitFeedbackSection: FC<SubmitFeedbackSectionProps> = ({
    feedbackState,
    changeFunc,
    submittedFeedback,
    submitFeedbackObj,
    disableSubmit,
}) => {
    const [allowUpdate, setAllowUpdate] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (submitFeedbackObj?.submitComplete) {
            setShowModal(true)
        } else {
            setShowModal(false)
        }
    }, [submitFeedbackObj?.submitComplete])

    return (
        <>
            <div className="side-grey">
                <h3 className="task ticker mb-2">
                    <span className="ticker-sheet ticker-feedback">
                        <HelpIcon />
                    </span>
                    <span className="sm-type-drum green-highlight">
                        Your feedback:
                    </span>
                </h3>
                <div className="form-holder-border">
                    <p className="sm-type-lead">
                        <TextEditor
                            data={feedbackState?.feedback || ''}
                            onChange={changeFunc}
                            docSubmitted={submittedFeedback && !allowUpdate}
                        />
                    </p>

                    {((!submitFeedbackObj.submitComplete &&
                        !submittedFeedback) ||
                        allowUpdate) && (
                        <div className="row">
                            <button
                                className="btn-solid-lg mt-4"
                                disabled={disableSubmit}
                                onClick={() => setShowModal(true)}
                            >
                                Submit Feedback
                            </button>
                            {submittedFeedback && (
                                <button
                                    className="btn-outline-lg mt-4 btn-icon"
                                    onClick={() => setAllowUpdate(false)}
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {submittedFeedback && !allowUpdate && (
                <button
                    className="btn-solid-lg mt-4"
                    onClick={() => setAllowUpdate(true)}
                >
                    Update Feedback
                </button>
            )}

            {showModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => {
                                submitFeedbackObj.setSubmitComplete(false)
                                setShowModal(false)
                            }}
                            title="Close"
                            className="modal-close"
                        >
                            Close
                        </button>

                        {submitFeedbackObj.submitComplete ? (
                            <p className="sm-type-drum">Feedback submitted</p>
                        ) : (
                            <>
                                <p>Are you sure?</p>
                                <button
                                    className="btn-solid-lg mt-4"
                                    disabled={disableSubmit}
                                    onClick={() => {
                                        submitFeedbackObj.call()
                                        setAllowUpdate(false)
                                    }}
                                >
                                    Yes, submit feedback
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
