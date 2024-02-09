import { FC } from 'react'
import { graphql, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

import {
    StudentHeader,
    StudentFooter,
    Breadcrumbs,
    Intro,
    Slider,
    Helpful,
} from '@community-land-quest/shared-ui'

import '../../scss/index.scss'

const InfoCommunityPage: FC<PageProps<Queries.AboutCommunityQueryQuery>> = ({
    data: {
        graphCmsInfo: { title, intro, slider, helpfulInfo },
        file: {
            childImageSharp: { gatsbyImageData },
        },
    },
}) => {
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Information - {title}</title>
            </Helmet>

            <main className="the-quest">
                <StudentHeader
                    headerText="Information"
                    clsLogo={gatsbyImageData}
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
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <Intro item={intro} />

                            <Slider items={slider} />
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>
                </section>

                <StudentFooter />
            </main>
        </>
    )
}

export default InfoCommunityPage

export const query = graphql`
    query AboutCommunityQuery {
        graphCmsInfo(slug: { eq: "community" }) {
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
        file(relativePath: { eq: "logo.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
    }
`
