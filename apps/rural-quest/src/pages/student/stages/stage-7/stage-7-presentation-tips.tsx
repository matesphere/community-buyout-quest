import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import { Breadcrumbs, Helpful } from '@community-land-quest/shared-ui'
import { TaskTipsRenderer } from '@community-land-quest/shared-utils/utils/rich-text-renderers'

import '../../../../scss/index.scss'

const Stage7TipsPage = () => {
    const {
        graphCmsPresentationTipsPage: { title, tips, helpfulInfo },
    } = useStaticQuery(graphql`
        query Stage7TipsPageQuery {
            graphCmsPresentationTipsPage(
                title: { eq: "Presentation Tips - Delivery" }
            ) {
                title
                tips {
                    raw
                }
                helpfulInfo {
                    info {
                        raw
                    }
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
                <title>Stage 7 - Presentation Tips</title>
            </Helmet>

            <main className="the-quest">
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
                                        displayName: 'Stage 7',
                                        url: '/student/stage-7/',
                                    },
                                ]}
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <TaskTipsRenderer content={tips.raw} />
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>
                    <Link to="/student/stage-7">Back to Stage 7</Link>
                </section>
            </main>
        </>
    )
}

export default Stage7TipsPage
