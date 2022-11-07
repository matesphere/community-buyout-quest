import React from 'react'
import { HelpfulInfoRenderer } from '../../components/student/RichTextRenderers'

import { RichTextContent } from '@graphcms/rich-text-types'

import HelpIcon from '../../assets/help-icon.svg'

interface HelpfulProps {
    content: { raw: RichTextContent }
    children?: JSX.Element
}

export const Helpful = ({ content, children }: HelpfulProps) => (
    <>
        <p className="sm-type-guitar mb-2">
            <span className="side-icon side-icon-orange">
                <HelpIcon />
            </span>
            Helpful Information
        </p>
        <div className="side-grey">
            <HelpfulInfoRenderer content={content.raw} />
            {children}
        </div>
    </>
)
