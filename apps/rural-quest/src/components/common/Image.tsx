import React, { FC } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface ImageProps {
    imageData: any
    altText: string
}

export const Image: FC<ImageProps> = ({ imageData, altText }) => {
    const image = getImage(imageData)

    return (
        (image && (
            <div className="mt-4 mb-4 image-holder">
                <GatsbyImage image={image} alt={altText} />
            </div>
        )) ||
        null
    )
}
