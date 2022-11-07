import React from 'react'
import { FundingOptionsRenderer } from '../../components/student/RichTextRenderers'

import { RichTextContent } from '@graphcms/rich-text-react-renderer/node_modules/@graphcms/rich-text-types'

import HelpIcon from '../../assets/help-icon.svg'

interface FundingProps {
    content: RichTextContent
}

export const FundingOptions = ({ content }: FundingProps) => (
    <div className="side-grey">
        <p className="sm-type-guitar mb-2">
            <span className="side-icon side-icon-orange">
                <HelpIcon />
            </span>
            Funding Options links
        </p>

        <FundingOptionsRenderer content={content} />
    </div>
)
