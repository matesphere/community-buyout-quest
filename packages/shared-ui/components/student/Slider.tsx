import Slider from 'react-slick'

import { DevOpsRenderer } from '@community-land-quest/shared-utils/utils/rich-text-renderers'
import { slickSettings } from '@community-land-quest/shared-utils/utils/slicksettings'

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
