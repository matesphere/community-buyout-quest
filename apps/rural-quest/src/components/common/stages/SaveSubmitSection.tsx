import React, { useState, useEffect, FC } from 'react'
import { MutationResult } from '@apollo/client'

import SaveIcon from '../../../assets/save-icon.svg'

interface SaveSubmitSectionProps {
    saveWorkObj?: {
        call: () => void
        response: MutationResult<any>
        saveComplete: boolean
        setSaveComplete: (value: boolean) => void
    }
    submitWorkObj?: {
        call: () => void
        response: MutationResult<any>
        submitComplete: boolean
        setSubmitComplete: (value: boolean) => void
    }
    disableSubmit?: boolean
    docSubmitted?: boolean
}

export const SaveSubmitSection: FC<SaveSubmitSectionProps> = ({
    saveWorkObj,
    submitWorkObj,
    disableSubmit,
    docSubmitted,
}) => {
    const [showSaveModal, setShowSaveModal] = useState(false)
    const [showSubmitModal, setShowSubmitModal] = useState(false)

    useEffect(() => {
        if (saveWorkObj?.saveComplete) {
            setShowSaveModal(true)
        } else {
            setShowSaveModal(false)
        }
    }, [saveWorkObj?.saveComplete])

    return (
        <>
            {!submitWorkObj?.response.data && !docSubmitted && (
                <>
                    {!!saveWorkObj && (
                        <button
                            className="btn-outline-lg mt-4 btn-icon"
                            onClick={saveWorkObj.call}
                        >
                            <SaveIcon />
                            Save Work
                        </button>
                    )}

                    {!!submitWorkObj && (
                        <button
                            className="btn-solid-lg mt-4"
                            disabled={
                                disableSubmit || submitWorkObj?.response.loading
                            }
                            onClick={() => setShowSubmitModal(true)}
                        >
                            {submitWorkObj?.response.loading && (
                                <span className="spinner"></span>
                            )}{' '}
                            Submit
                        </button>
                    )}
                </>
            )}

            {showSaveModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => saveWorkObj?.setSaveComplete(false)}
                            title="Close"
                            className="modal-close"
                        >
                            Close
                        </button>
                        <p className="sm-type-guitar sm-type-guitar--medium mt-2 mb-2">
                            Work saved!
                        </p>
                    </div>
                </div>
            )}

            {submitWorkObj && showSubmitModal && (
                <div className="modal-window">
                    <div>
                        <button
                            onClick={() => {
                                submitWorkObj.setSubmitComplete(false)
                                setShowSubmitModal(false)
                            }}
                            title="Close"
                            className="modal-close"
                        >
                            Close
                        </button>

                        {submitWorkObj.submitComplete ? (
                            <p className="sm-type-drum">
                                Work submitted - good luck!
                            </p>
                        ) : (
                            <>
                                <p>Are you sure?</p>
                                <button
                                    className="btn-solid-lg mt-4"
                                    disabled={
                                        disableSubmit ||
                                        submitWorkObj?.response.loading
                                    }
                                    onClick={submitWorkObj.call}
                                >
                                    {submitWorkObj?.response.loading && (
                                        <span className="spinner"></span>
                                    )}
                                    Yes, submit
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
