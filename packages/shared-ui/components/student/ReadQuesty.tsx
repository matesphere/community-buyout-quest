import { FC, ReactNode } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const ReadQuesty: FC<{ text: string | ReactNode }> = ({ text }) => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "blue-1.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)
    return (
        <div className="blue-holder-border questies-holder">
            <div className="small-questies">
                <GatsbyImage
                    alt=""
                    image={data.image1.childImageSharp.gatsbyImageData}
                />
            </div>
            <p className="sm-type-lead small-questies-holder">{text}</p>
        </div>
    )
}
