import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../../components/student/_header'
import Footer from '../../components/student/_footer'
import { Breadcrumbs } from '@community-land-quest/shared-ui'
import { Helpful } from '../../components/student/Helpful'
import { CheckList } from '../../components/student/Checklist'
import { SliderM } from '../../components/student/Slider'
import { InfoBlock } from '../../components/student/InfoBlock'

import '../../scss/index.scss'
import { Intro } from '../../components/student/Intro'

const Stage2TaskPage = ({
    data: {
        graphCmsInfo: {
            title,
            intro,
            infoBlock,
            slider,
            helpfulInfo,
            checklist,
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
                                currentDisplayName="About the Roles"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <Intro item={intro} />

                            <InfoBlock items={infoBlock} />

                            <SliderM items={slider} />
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Stage2TaskPage

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
    }
`
