import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import {
    StudentHeader,
    StudentFooter,
    Breadcrumbs,
    Helpful,
    Checklist,
    Intro,
    InfoBlock,
    Slider,
} from '@community-land-quest/shared-ui'

import '../../scss/index.scss'

const AboutRolesPage = ({
    data: {
        graphCmsInfo: {
            title,
            intro,
            infoBlock,
            slider,
            helpfulInfo,
            checklist,
        },
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
                                currentDisplayName="About the Roles"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <Intro item={intro} />

                            <InfoBlock items={infoBlock} />

                            <Slider items={slider} />
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <Checklist items={checklist.item} />
                        </div>
                    </div>
                </section>

                <StudentFooter />
            </main>
        </>
    )
}

export default AboutRolesPage

export const query = graphql`
    query AboutRolesQuery {
        graphCmsInfo(slug: { eq: "about-the-roles" }) {
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
            checklist {
                item
            }
        }
        file(relativePath: { eq: "logo.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
    }
`
