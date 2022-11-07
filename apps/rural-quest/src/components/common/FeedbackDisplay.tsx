import React, { FC } from 'react'

interface FeedbackDisplayProps {
    feedback: {
        feedback: string
    }
}

export const FeedbackDisplay: FC<FeedbackDisplayProps> = ({
    feedback: { feedback },
}) => (
    <div className="form-holder-border">
        <h4 className="sm-type-drum sm-type-drum--medium mb-2 green-highlight">
            Tutor feedback
        </h4>
        <p
            className="sm-type-lead mb-3 italic"
            dangerouslySetInnerHTML={{
                __html: feedback,
            }}
        />
    </div>
)
