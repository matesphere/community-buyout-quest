import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { RichText } from '@graphcms/rich-text-react-renderer'

import InfoUrbanBuilding from '../../assets/info-urban-building.svg'
import InfoUrbanSkate from '../../assets/info-urban-skate.svg'
import InfoUrbanWaste from '../../assets/info-urban-wasteland.svg'
import InfoSolar from '../../assets/info-urban-solar.svg'
import InfoUrbanGarden from '../../assets/info-urban-garden.svg'

const ICON = [
    InfoUrbanBuilding,
    InfoUrbanWaste,
    InfoUrbanSkate,
    InfoUrbanGarden,
    InfoSolar,
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
            image5: file(relativePath: { eq: "map-zoom-2.jpg" }) {
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
                            Hover over the icons to see more information
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
