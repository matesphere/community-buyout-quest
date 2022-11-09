import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Header from '../../components/student/_header'
import Footer from '../../components/student/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { Intro } from '../../components/student/Intro'
import { InfoBlock } from '../../components/student/InfoBlock'
import { Helpful } from '../../components/student/Helpful'

import '../../scss/index.scss'

const BackgroundInformationPage: FC = ({ data }) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Background Information</title>
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
                            currentDisplayName="Background Information"
                        />
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                            {data.content.info.title}
                        </h2>

                        <Intro item={data.content.info.intro} />
                        <InfoBlock items={data.content.info.infoBlock} />
                    </div>

                    <div className="col-lg-3">
                        <Helpful content={data.content.info.helpfulInfo.info} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12"></div>
                </div>
            </section>
            <Footer />
        </main>
    </>
)

export default BackgroundInformationPage

export const query = graphql`
    query BackgroundInfoQuery {
        content {
            info(where: { slug: "background-info" }) {
                title
                intro {
                    raw
                }
                infoBlock {
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
    }
`
