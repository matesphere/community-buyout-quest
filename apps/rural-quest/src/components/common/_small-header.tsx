import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Location } from '@reach/router'

import '../scss/index.scss'

const HEADER_TEXT = [
    'Stage 1',
    'Stage 2',
    'Stage 3',
    'Stage 4',
    'Stage 5',
    'Stage 6',
    'Stage 7',
    'Stage 8',
]

const STAGE_REGEX = /\/student\/stage-(\d).?/

export const getHeaderText = (pathname: string) => {
    const stage = pathname.match(STAGE_REGEX)?.[1]

    if (stage) {
        return HEADER_TEXT[parseInt(stage) - 1]
    } else if (pathname === '/student/information') {
        return 'Information'
    } else {
        return 'Team Hub'
    }
}

const SmallHeader: FC<{ headerText?: string }> = ({ headerText }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <Location>
            {({ location }) => (
                <>
                    <a href="#main" className="skip-link">
                        Skip to content
                    </a>
                    <div className="small-top-section">
                        <section className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1 className="main-header">
                                        {headerText ||
                                            getHeaderText(location.pathname)}
                                    </h1>
                                    <p>
                                        PLEASE NOTE: this is a new browser tab.
                                        You can close it (or click{' '}
                                        <a
                                            href="#"
                                            onClick={() => window.close()}
                                        >
                                            here
                                        </a>
                                        ) to go back
                                    </p>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cls-logo">
                                        <GatsbyImage
                                            alt=""
                                            image={
                                                data.file.childImageSharp
                                                    .gatsbyImageData
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </Location>
    )
}

export default SmallHeader
