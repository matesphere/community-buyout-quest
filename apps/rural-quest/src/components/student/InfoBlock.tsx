import React from 'react'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { RichTextContent } from '@graphcms/rich-text-react-renderer/node_modules/@graphcms/rich-text-types'

import { renderGatsbyLinks } from '../../components/student/RichTextRenderers'

interface SliderProps {
    items: Array<{ raw: RichTextContent }>
}

export const InfoBlock = ({ items }: SliderProps) => (
    <>
        {items.map((item, i) => (
            <RichText
                key={i}
                content={item.raw}
                renderers={{
                    p: ({ children }) => (
                        <p className="sm-type-lead mb-4">{children}</p>
                    ),
                    h2: ({ children }) => (
                        <h2 className="sm-type-drum sm-type-drum--medium mt-4 mb-4">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="sm-type-drum mt-4">{children}</h3>
                    ),
                    h4: ({ children }) => (
                        <p className="sm-type-guitar">{children}</p>
                    ),
                    h5: ({ children }) => (
                        <h2 className="sm-type-bigamp mb-1">{children}</h2>
                    ),
                    a: renderGatsbyLinks,
                }}
            />
        ))}
    </>
)
