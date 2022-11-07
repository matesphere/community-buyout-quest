import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { InfoBlock } from '../../components/student/InfoBlock'

const TutorGuide = () => {
    const {
        graphCmsInfo: { title, infoBlock },
    } = useStaticQuery(graphql`
        query TutorGuideQuery {
            graphCmsInfo(slug: { eq: "tutor-guide" }) {
                title
                infoBlock {
                    raw
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
                <title>{title}</title>
                <meta name="description" content="Tutor guide" />
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <Breadcrumbs
                        previous={[
                            {
                                displayName: 'Tutor Hub',
                                url: '/tutor/hub',
                            },
                        ]}
                        currentDisplayName={title}
                    />
                    <div className="row">
                        <div className="col-lg-9">
                            <InfoBlock items={infoBlock} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default TutorGuide
