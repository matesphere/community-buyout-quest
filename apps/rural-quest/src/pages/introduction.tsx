import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Header from '../components/_header'
import Footer from '../components/student/_footer'
import { Intro } from '../components/student/Intro'

import '../scss/index.scss'
import { InfoBlock } from '../components/student/InfoBlock'

const IntroductionPage = ({
    data: {
        graphCmsInfo: { title, intro, infoBlock },
    },
}) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Community Land Quest - Introduction</title>
        </Helmet>

        <main className="the-quest homepage">
            <Header headerText="Community Land Quest" />
            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                            {title}
                        </h2>

                        <Intro item={intro} />

                        <div className="form-holder-border">
                            <InfoBlock items={infoBlock} />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>

                <div className="row">
                    <div className="col-lg-12"></div>
                </div>
                <Link to="/student/team-hub" className="btn-solid-reg">
                    Go to Team Hub
                </Link>
            </section>

            <Footer />
        </main>
    </>
)

export default IntroductionPage

export const query = graphql`
    query IntroductionQuery {
        graphCmsInfo(slug: { eq: "introduction" }) {
            title
            intro {
                raw
            }
            infoBlock {
                raw
            }
        }
    }
`
