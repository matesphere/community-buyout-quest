import React, { FC } from 'react'
import { Link } from 'gatsby'

interface BreadcrumbsProps {
    currentDisplayName: string
    previous: Array<{ displayName: string; url: string }>
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
    currentDisplayName,
    previous,
}) => (
    <div className="breadcrumb-list-container">
        <p className="breadtitle">Quick Navigation:</p>
        {previous.map(({ displayName, url }, i) => (
            <span key={i} className="crumb">
                <Link to={url}>{displayName}</Link>
                <span className="crumb-spacer">›</span>
            </span>
        ))}
        <span className="leaf crumb-caps">{currentDisplayName}</span>
    </div>
)
