import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../components/_header'
import Footer from '../../components/student/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { Intro } from '../../components/student/Intro'
import { SliderM } from '../../components/student/Slider'
import { Helpful } from '../../components/student/Helpful'

import '../../scss/index.scss'

const AboutGlenclasAreaPage: FC = ({
    data: {
        graphCmsInfo: { title, intro, slider, helpfulInfo },
    },
}) => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{`Information - ${title}`}</title>
            </Helmet>

            <main className="the-quest">
                <Header headerText="Information" />

                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Information',
                                        url: '/student/information',
                                    },
                                ]}
                                currentDisplayName="About Glenclas"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>
                            <Intro item={intro} />
                            <SliderM items={slider} />
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default AboutGlenclasAreaPage

export const query = graphql`
    query AboutAreaQuery {
        graphCmsInfo(slug: { eq: "about-glenclas-area" }) {
            title
            intro {
                raw
            }
            slider {
                raw
            }
            helpfulInfo {
                info {
                    raw
                }
            }
        }
    }
`
