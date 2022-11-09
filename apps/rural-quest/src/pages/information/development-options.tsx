import React, { FC } from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import MapOptions from './_map'
import Header from '../../components/student/_header'
import Footer from '../../components/student/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { Intro } from '../../components/student/Intro'
import { InfoBlock } from '../../components/student/InfoBlock'
import { Helpful } from '../../components/student/Helpful'

import '../../scss/index.scss'

const InfoDevOptions: FC = ({
    data: {
        graphCmsInfo: { title, intro, infoBlock, slider, helpfulInfo },
    },
}) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>{title}</title>
        </Helmet>

        <main className="the-quest">
            <Header headerText="Development Options" />

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
                            currentDisplayName={title}
                        />

                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                            {title}
                        </h2>

                        <Intro item={intro} />
                    </div>

                    <div className="col-lg-3">
                        <Helpful content={helpfulInfo.info} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <MapOptions iconInfoList={slider} />

                        <InfoBlock items={infoBlock} />

                        <p className="sm-type-bigamp mb-4">
                            <Link to="/student/information">
                                Back to Information
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    </>
)

export default InfoDevOptions

export const query = graphql`
    query DevelopmentOptionsQuery {
        graphCmsInfo(slug: { eq: "development-options" }) {
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
`
