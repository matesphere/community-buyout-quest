import { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import {
    SmallHeader,
    Intro,
    InfoBlock,
    Helpful,
    Image,
} from '@community-land-quest/shared-ui'

import '../../scss/index.scss'

const AboutSwotPage: FC = ({
    data: {
        graphCmsInfo: { title, intro, infoBlock, helpfulInfo, image },
    },
}) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Information - About SWOT</title>
        </Helmet>

        <main className="the-quest">
            <SmallHeader headerText="Information" />

            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-9">
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                            {title}
                        </h2>

                        <Intro item={intro} />

                        <Image
                            imageData={image[0]}
                            altText="A diagram describing a SWOT analysis"
                        />

                        <InfoBlock items={infoBlock} />
                    </div>
                    <div className="col-lg-3">
                        {helpfulInfo && <Helpful content={helpfulInfo.info} />}
                    </div>
                </div>
            </section>

            <SmallHeader headerText="Information" />
        </main>
    </>
)

export default AboutSwotPage

export const query = graphql`
    query AboutSWOTQueryAlt {
        graphCmsInfo(slug: { eq: "about-swot" }) {
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
            image {
                gatsbyImageData
            }
        }
    }
`
