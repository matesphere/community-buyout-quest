import React, { useContext, FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { UserStateContext } from '../../utils/user-state'

import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { Intro } from '../../components/student/Intro'
import { InfoBlock } from '../../components/student/InfoBlock'
import { Helpful } from '../../components/student/Helpful'

import '../../scss/index.scss'

const InformationPage: FC = () => {
    const { latestStageUnlocked } = useContext(UserStateContext)

    const {
        graphCmsInfo: { title, intro, infoBlock, helpfulInfo },
    } = useStaticQuery(graphql`
        query {
            graphCmsInfo(slug: { eq: "information" }) {
                title
                intro {
                    raw
                }
                infoBlock {
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
                <title>{title}</title>
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
                                ]}
                                currentDisplayName={title}
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <Intro item={intro} />

                            <InfoBlock items={[infoBlock[0]]} />

                            {latestStageUnlocked >= 2 && (
                                <InfoBlock items={[infoBlock[1]]} />
                            )}

                            {latestStageUnlocked >= 3 && (
                                <InfoBlock items={[infoBlock[2]]} />
                            )}
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12"></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default InformationPage
