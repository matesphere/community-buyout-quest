import React from 'react'

import TickSheet from '../../assets/tick-sheet.svg'

interface ChecklistProps {
    items: Array<string>
}

export const CheckList = ({ items }: ChecklistProps) => (
    <>
        <p className="sm-type-guitar mb-2 mt-4">
            <span className="side-icon side-icon-green">
                <TickSheet />
            </span>
            Your Checklist
        </p>
        <div className="side-grey">
            {items.map((item, i) => (
                <div className="checklist" key={i}>
                    <div className="tick"></div>
                    <p className="sm-type-bigamp">{item}</p>
                </div>
            ))}
        </div>
    </>
)
