import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import SVG from 'react-inlinesvg'
import SmallHeader from '../../components/common/_small-header'
import { ReadQuesty } from '../../components/student/ReadQuesty'
import { FundingOptions } from '../../components/student/FundingOptions'
import { CheckList } from '../../components/student/Checklist'
import { DevOpsRenderer } from '../../components/student/RichTextRenderers'

import '../../scss/index.scss'

const InfoPlaySkate = ({
    data: {
        graphCmsDevelopmentOption: {
            title,
            intro,
            mainText,
            fundingOptions,
            checklist,
            informationMainImage,
            icon,
        },
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
            <SmallHeader headerText="Development Option" />

            <section className="container" id="main">
                <div className="row">
                    <div className="col-lg-8">
                        <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                            <span className="page-icon">
                                <SVG
                                    src={icon.url}
                                    width={46}
                                    title={`title-${icon}`}
                                />
                            </span>
                            {title}
                        </h2>
                        <ReadQuesty text={intro} />

                        <div className="mt-4 mb-4 image-holder">
                            <GatsbyImage
                                alt=""
                                image={informationMainImage.gatsbyImageData}
                            />
                        </div>

                        <DevOpsRenderer content={mainText.raw} />

                        {fundingOptions && (
                            <FundingOptions content={fundingOptions.raw} />
                        )}
                    </div>

                    <div className="col-lg-4">
                        {checklist && <CheckList items={checklist.item} />}
                    </div>
                </div>
            </section>

            <SmallHeader headerText="Development Option" />
        </main>
    </>
)

export default InfoPlaySkate

export const query = graphql`
    query DevelopmentOptionQueryAlt($slug: String) {
        graphCmsDevelopmentOption(slug: { eq: $slug }) {
            title
            intro
            mainText {
                raw
            }
            fundingOptions {
                raw
            }
            checklist {
                item
            }
            informationMainImage {
                gatsbyImageData
            }
            icon {
                url
            }
        }
    }
`
