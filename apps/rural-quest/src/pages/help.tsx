import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import {
    StudentHeader,
    StudentFooter,
    Helpful,
    Checklist,
} from '@community-land-quest/shared-ui'

import TickSheet from '../assets/tick-sheet.svg'
import HelpIcon from '../assets/help-icon.svg'

import '../scss/index.scss'

const HelpPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "blue-1.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Community Buyout Quest - Help</title>
                <meta
                    name="description"
                    content="Help for students embarking on the Community Buyout Quest"
                />
            </Helmet>

            <main>
                <StudentHeader headerText="Help" />
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                Help turn your community into a landowner!
                            </h2>
                            <p className="sm-type-guitar mb-4">
                                Can you make it through the 8 stages and emerge
                                victorious?
                            </p>
                            <p className="sm-type-lead mb-4">
                                The following will give you an idea of what to
                                look for while making your way through the
                                Quest.
                            </p>

                            <ol>
                                <li>
                                    <div className="small-image">
                                        <GatsbyImage
                                            alt=""
                                            image={
                                                data.image1.childImageSharp
                                                    .gatsbyImageData
                                            }
                                        />
                                    </div>
                                    <p className="sm-type-lead mb-4 small-image-holder">
                                        When you see a 'Questy', it's there to
                                        explain the overall aim of each stage.
                                        Check back here if you need to remind
                                        yourself what the point of your current
                                        activity is!
                                    </p>
                                </li>

                                <li className="sm-type-lead mb-4">
                                    Look out for the handy 'Helpful Information'
                                    boxes: these will give you things like hints
                                    or links to stuff that you can use to help
                                    with the stage tasks. <br />
                                    Look out for this orange icon:{' '}
                                    <span className="side-icon side-icon-orange">
                                        <HelpIcon />
                                    </span>
                                </li>

                                <li className="sm-type-lead mb-4">
                                    The 'Your Checklist' box lists the things
                                    you need to do in order to complete the
                                    stage. <br />
                                    Look out for this green icon:{' '}
                                    <span className="side-icon side-icon-green">
                                        <TickSheet />
                                    </span>
                                </li>

                                <li className="sm-type-lead mb-4">
                                    You will find one or more tasks to complete
                                    in each stage. <br />
                                    Look out for this red icon:{' '}
                                    <span className="side-icon side-icon-red">
                                        <TickSheet />
                                    </span>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-4">
                            <Helpful
                                content={{
                                    raw: {
                                        children: [
                                            {
                                                type: 'paragraph',
                                                children: [
                                                    {
                                                        text: 'This is an example of the Helpful Information box! Pretty helpful, right?',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                }}
                            />

                            <p className="sm-type-guitar mb-2">
                                <span className="side-icon side-icon-green">
                                    <TickSheet />
                                </span>
                                Example checklist
                            </p>
                            <div className="side-grey">
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Find the 'Helpful Information' box.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Find the 'Your Checklist' box.
                                    </p>
                                </div>
                                <div className="checklist">
                                    <div className="tick"></div>
                                    <p className="sm-type-lead">
                                        Prepare to start the Quest!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/student/team-hub">Go to Team Hub</Link>
                </section>
                <StudentFooter />
            </main>
        </>
    )
}

export default HelpPage
