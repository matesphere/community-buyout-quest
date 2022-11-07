import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'

import { RichTextContent } from '@graphcms/rich-text-types'

interface SubmittedProps {
    content: { raw: RichTextContent }
}

export const Submitted = ({ content }: SubmittedProps) => (
    <RichText
        content={content.raw}
        renderers={{
            p: ({ children }) => (
                <p className="sm-type-lead mb-2">{children}</p>
            ),
        }}
    />
)
