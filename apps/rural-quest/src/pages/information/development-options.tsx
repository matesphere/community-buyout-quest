import { FC } from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import MapOptions from './_map'
import {
    StudentHeader,
    StudentFooter,
    Breadcrumbs,
    Intro,
    InfoBlock,
    Helpful,
} from '@community-land-quest/shared-ui'

import '../../scss/index.scss'

// const InfoDevOptions: FC<PageProps<Queries.DevelopmentOptionsQueryQuery>> = ({
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
            <StudentHeader headerText="Development Options" />

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

            <StudentFooter />
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
