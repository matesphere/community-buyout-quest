import { RichText } from '@graphcms/rich-text-react-renderer'
import { RichTextContent } from '@graphcms/rich-text-react-renderer/node_modules/@graphcms/rich-text-types'

import { renderGatsbyLinks } from '../../../shared-utils/utils/rich-text-renderers'

import HelpIcon from '../../assets/help-icon.svg'

interface InfoLinkProps {
    link: { raw: RichTextContent }
}

export const InfoLink = ({ link }: InfoLinkProps) => (
    <RichText
        content={link.raw}
        renderers={{
            p: ({ children }) => (
                <p className="sm-type-guitar mb-4">
                    <span className="side-icon side-icon-orange shake">
                        <HelpIcon />
                    </span>
                    {children}
                </p>
            ),
            a: renderGatsbyLinks,
        }}
    />
)
