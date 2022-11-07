import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from '@graphcms/rich-text-react-renderer'

import InfoHouse from '../../assets/info-house.svg'
import InfoSkate from '../../assets/info-skate.svg'
import InfoShop from '../../assets/info-shop.svg'
import InfoHydro from '../../assets/info-hydro.svg'
import InfoWind from '../../assets/info-wind.svg'
import InfoBusiness from '../../assets/info-business.svg'
import InfoForest from '../../assets/info-forest.svg'
import InfoCamp from '../../assets/info-camp.svg'
import InfoGarden from '../../assets/info-garden.svg'

const ICON = [
    InfoShop,
    InfoSkate,
    InfoHouse,
    InfoHydro,
    InfoBusiness,
    InfoGarden,
    InfoWind,
    InfoForest,
    InfoCamp,
]

const IconInfo = ({ content, Icon }) => (
    <span className="info-icon">
        <Icon />
        <div className="info-icon-show info-icon-show-c">
            <div className="sm-type-amp">
                <RichText content={content.raw} />
            </div>
        </div>
    </span>
)

const MapOptions = ({ iconInfoList }) => {
    const data = useStaticQuery(graphql`
        query {
            image5: file(relativePath: { eq: "map-zoom.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    return (
        <>
            <div className="image-map mb-4 mt-4">
                <div className="image-map-holder">
                    <div>
                        <GatsbyImage
                            alt=""
                            image={data.image5.childImageSharp.gatsbyImageData}
                        />
                    </div>
                    <div className="hover-pins">
                        <p className="sm-type-amp">
                            Hover over the pins to see more information
                        </p>
                    </div>
                    <div className="outer-grid">
                        <div className="outer-square">
                            {iconInfoList.map((iconInfo, i) => {
                                const Icon = ICON[i]
                                return (
                                    <div
                                        key={i}
                                        className={`inner-grid inner-grid-${
                                            i + 1
                                        }`}
                                    >
                                        <IconInfo
                                            content={iconInfo}
                                            Icon={Icon}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapOptions
