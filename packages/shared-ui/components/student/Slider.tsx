import React from 'react'
import Slider from 'react-slick'

import { DevOpsRenderer } from '../../components/student/RichTextRenderers'
import { slickSettings } from '../../utils/slicksettings'

interface SliderProps {
    items: Array<string>
}

export const SliderM = ({ items }: SliderProps) => (
    <Slider {...slickSettings}>
        {items.map((item, i) => (
            <div key={i} className="side-grey">
                <div className="react-tabs--information--inner">
                    <DevOpsRenderer content={item.raw} />
                </div>
            </div>
        ))}
    </Slider>
)
