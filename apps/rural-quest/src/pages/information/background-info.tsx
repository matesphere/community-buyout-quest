import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import {
    StudentHeader,
    StudentFooter,
    Breadcrumbs,
    Helpful,
    Intro,
    InfoBlock,
} from '@community-land-quest/shared-ui'

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
            <StudentHeader
                headerText="Information"
                clsLogo={data.file.childImageSharp.gatsbyImageData}
            />
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
            <StudentFooter />
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
        file(relativePath: { eq: "logo.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
    }
`
