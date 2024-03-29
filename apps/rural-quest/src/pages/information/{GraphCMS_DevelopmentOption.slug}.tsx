import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import SVG from 'react-inlinesvg'
import {
    StudentHeader,
    StudentFooter,
    Breadcrumbs,
    ReadQuesty,
    FundingOptions,
    Checklist,
} from '@community-land-quest/shared-ui'

import { DevOpsRenderer } from '@community-land-quest/shared-utils/utils/rich-text-renderers'

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
        file: {
            childImageSharp: { gatsbyImageData },
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
            <StudentHeader headerText="Information" clsLogo={gatsbyImageData} />

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
                                    displayName: 'Information',
                                    url: '/student/information',
                                },
                                {
                                    displayName: 'Development Options',
                                    url: '/information/development-options',
                                },
                            ]}
                            currentDisplayName={title}
                        />

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

                        <p className="sm-type-bigamp mb-4">
                            <Link to="/information/development-options">
                                Back to all options
                            </Link>
                        </p>
                    </div>

                    <div className="col-lg-4">
                        {checklist && <Checklist items={checklist.item} />}
                    </div>
                </div>
            </section>

            <StudentFooter />
        </main>
    </>
)

export default InfoPlaySkate

export const query = graphql`
    query DevelopmentOptionQuery($slug: String) {
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
        file(relativePath: { eq: "logo.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
            }
        }
    }
`
