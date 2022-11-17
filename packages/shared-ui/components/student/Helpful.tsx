import { FC } from 'react'
import { HelpfulInfoRenderer } from '@community-land-quest/shared-utils/utils/rich-text-renderers'
import { RichTextContent } from '@graphcms/rich-text-types'
import HelpIcon from '../../assets/help-icon.svg'

interface HelpfulProps {
    content: { raw: RichTextContent }
    children?: JSX.Element
}

export const Helpful: FC<HelpfulProps> = ({ content, children }) => (
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
