// import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Location } from '@reach/router'

import { TutorNav } from './_tutor-nav'

import Squiggle from '../../assets/squiggle.svg'
import SkyLine from '../../assets/skyline.svg'
import PinLogo from '../../assets/pin-logo.svg'

const HEADER_TEXT: { [pathname: string]: string } = {
    '/tutor/hub': 'Tutor Hub',
    '/tutor/current-groups': 'Active Groups',
    '/tutor/previous-group': 'Previous Group',
    '/tutor/add-students': 'Add Students',
    '/tutor/create-team': 'Create Teams',
    '/tutor/stage-1/submitted': 'Stage 1',
    '/tutor/stage-2/submitted': 'Stage 2',
    '/tutor/stage-3/submitted': 'Stage 3',
    '/tutor/stage-4/submitted': 'Stage 4',
    '/tutor/stage-5/submitted': 'Stage 5',
    '/tutor/assessment': 'Student Assessment',
    '/tutor/team-assessment': 'Team Assessment',
    '/tutor/tutor-guide': 'Tutor Guide',
    '/tutor/technical-guide': 'Technical Guide',
}

const HUB_LINK_ONLY: Array<string> = [
    '/tutor/add-students',
    '/tutor/create-team',
]

export const TutorHeader = ({
    headerText,
    clsLogo,
}: {
    headerText?: string
    hideLinks?: boolean
    clsLogo?: IGatsbyImageData
}) => (
    <Location>
        {({ location }) => (
            <>
                <a href="#main" className="skip-link">
                    Skip to content
                </a>
                <div className="top-holder">
                    <Squiggle className="squiggle" />
                    <SkyLine className="skyline" />
                    <section className="container top-section">
                        <div className="row">
                            <TutorNav
                                hubLinkOnly={HUB_LINK_ONLY.includes(
                                    location.pathname
                                )}
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="main-header mt-4">
                                    <PinLogo />
                                    <span>
                                        {headerText ||
                                            HEADER_TEXT[
                                                location.pathname.replace(
                                                    /\/+$/,
                                                    ''
                                                )
                                            ]}
                                    </span>
                                </h1>
                            </div>
                            <div className="col-lg-4">
                                <div className="cls-logo">
                                    {clsLogo && (
                                        <GatsbyImage alt="" image={clsLogo} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )}
    </Location>
)
