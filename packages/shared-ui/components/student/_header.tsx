import { FC } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Location } from '@reach/router'
import { Nav } from './_nav'

import Squiggle from '../../assets/squiggle.svg'
import SkyLine from '../../assets/skyline.svg'
import PinLogo from '../../assets/pin-logo.svg'

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

export const Header: FC<{
    headerText?: string
    clsLogo?: IGatsbyImageData
}> = ({ headerText, clsLogo }) => (
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
                            <Nav />
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="main-header">
                                    <PinLogo />
                                    <span>
                                        {headerText ||
                                            getHeaderText(location.pathname)}
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
