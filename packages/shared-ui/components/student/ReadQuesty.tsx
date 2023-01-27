import { FC, ReactNode } from 'react'
import bluequesty from './blue-1.jpg'

export const ReadQuesty: FC<{ text: string | ReactNode }> = ({ text }) => {
    return (
        <div className="blue-holder-border questies-holder">
            <div className="small-questies">
                <img src={bluequesty} alt="" />
            </div>
            <p className="sm-type-lead small-questies-holder">{text}</p>
        </div>
    )
}
