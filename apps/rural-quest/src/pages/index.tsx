import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import Squiggle from '../assets/squiggle.svg'
import PinLogo from '../assets/pin-logo.svg'

import '../scss/index.scss'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "indexpage.jpg" }) {
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
                <title>Community Land Quest</title>
                <meta name="description" content="The description" />
                {/*<meta name="image" content={image} />*/}
            </Helmet>
            <div className="top-holder">
                <div className="indeximage">
                    <GatsbyImage
                        alt=""
                        image={data.image2.childImageSharp.gatsbyImageData}
                    />
                </div>
                <Squiggle className="squiggle" />
                <section className="container top-section">
                    <div className="row pt-4">
                        <div className="col-lg-8">
                            <h1 className="main-header">
                                <PinLogo />
                                <span>Community Land Quest</span>
                            </h1>
                        </div>
                        <div className="col-lg-4">
                            <div className="cls-logo">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <main className="homepage">
                <section className="container" id="main">
                    <div className="row mt-4">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 index-holder">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 text-align-center">
                                Your chance to take part in a community land buy
                                out!
                            </h2>
                            <Link
                                className="btn-solid-lg mt-2 mb-4"
                                to="/login"
                            >
                                SIGN IN
                            </Link>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default IndexPage
