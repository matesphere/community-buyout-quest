import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'
import { TaskTipsRenderer } from '../../../../components/student/RichTextRenderers'
import { InfoBlock } from '../../../../components/student/InfoBlock'
import { Helpful } from '../../../../components/student/Helpful'

import '../../../../scss/index.scss'

const Stage6TipsPage = () => {
    const {
        graphCmsPresentationTipsPage: { title, intro, info, tips, helpfulInfo },
    } = useStaticQuery(graphql`
        query {
            graphCmsPresentationTipsPage(stageNumber: { eq: 6 }) {
                title
                intro
                info {
                    raw
                }
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
                <title>Stage 6 - Presentation Hints</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Stage 6',
                                        url: '/student/stage-6/',
                                    },
                                ]}
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <ReadQuesty text={intro} />

                            <InfoBlock items={[info]} />
                            <TaskTipsRenderer content={tips.raw} />
                        </div>
                        <div className="col-lg-4">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>
                    <Link to="/student/stage-6">Back to Stage 6</Link>
                </section>
            </main>
        </>
    )
}

export default Stage6TipsPage
