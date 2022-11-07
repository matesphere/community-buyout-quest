import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import SmallHeader from '../../components/common/_small-header'
import { Breadcrumbs } from '../../components/common/Breadcrumbs'
import { Intro } from '../../components/student/Intro'
import { SliderM } from '../../components/student/Slider'
import { Helpful } from '../../components/student/Helpful'

import '../../scss/index.scss'

const InfoCommunityPage = ({
    data: {
        graphCmsInfo: { title, intro, slider, helpfulInfo },
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
                <SmallHeader headerText="The Community" />

                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <Intro item={intro} />

                            <SliderM items={slider} />
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>
                </section>

                <SmallHeader headerText="The Community" />
            </main>
        </>
    )
}

export default InfoCommunityPage

export const query = graphql`
    query AboutCommunityQueryAlt {
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
    }
`
