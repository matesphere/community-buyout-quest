import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Header from '../../components/_header'
import Footer from '../../components/student/_footer'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { Intro } from '../../components/student/Intro'
import { InfoBlock } from '../../components/student/InfoBlock'
import { Helpful } from '../../components/student/Helpful'
import { Image } from '../../components/common/Image'

// import { AboutSWOTQuery } from '../../gql/types/'

import '../../scss/index.scss'

const AboutSwotPage: FC = ({
    data: {
        graphCmsInfo: { title, intro, infoBlock, helpfulInfo, image },
    },
}) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Information - About SWOT</title>
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
                            currentDisplayName="About SWOT"
                        />
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                            {title}
                        </h2>

                        <Intro item={intro} />

                        <Image
                            imageData={image[0]}
                            altText="A diagram describing a SWOT analysis"
                        />

                        <InfoBlock items={infoBlock} />
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

export default AboutSwotPage

export const query = graphql`
    query AboutSWOTQuery {
        graphCmsInfo(slug: { eq: "about-swot" }) {
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
            image {
                gatsbyImageData
            }
        }
    }
`
