import React, { FC } from 'react'
import { Link } from 'gatsby'

import { SaveSubmitSection } from '../SaveSubmitSection'

import {
    ActionType,
    Action,
    WorkState,
    LandCost,
} from '../../../../pages/student/stages/stage-5/stage-5-landing'

interface CostOfLandProps {
    workState: WorkState
    workDispatch?: React.Dispatch<Action>
    saveWorkObj?: { call: () => {}; response: any }
    docSubmitted: boolean
}

export const CostOfLand: FC<CostOfLandProps> = ({
    workState,
    workDispatch,
    saveWorkObj,
    docSubmitted,
}) => {
    const landCost = workState.landCost as LandCost

    return (
        <>
            <div className="row side-grey mb-2">
                <div className="col-lg-12">
                    <p className="sm-type-lead sm-type-lead--medium mb-2 redorange-highlight">
                        Costs
                    </p>
                </div>
                <div className="col-lg-4">
                    <label className="form-label sm-type-amp">
                        Area of land (ha)
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        value={landCost?.area || ''}
                        onChange={
                            workDispatch
                                ? ({ target: { value } }) => {
                                      const area =
                                          value !== '' ? parseInt(value) : ''

                                      workDispatch({
                                          type: ActionType.UpdateLandCost,
                                          payload: {
                                              area,
                                          },
                                      })
                                  }
                                : () => {}
                        }
                        readOnly={docSubmitted}
                    />
                </div>

                <div className="col-lg-4">
                    <label className="form-label sm-type-amp">
                        Price (£/ha)
                    </label>
                    <input
                        className="form-control"
                        defaultValue={5000}
                        readOnly
                    />
                </div>

                <div className="col-lg-4">
                    <label className="form-label sm-type-amp">
                        Total asking price (£)
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        value={landCost?.price || ''}
                        onChange={
                            workDispatch
                                ? ({ target: { value } }) => {
                                      const price =
                                          value !== '' ? parseInt(value) : ''

                                      workDispatch({
                                          type: ActionType.UpdateLandCost,
                                          payload: {
                                              price,
                                          },
                                      })
                                  }
                                : () => {}
                        }
                        readOnly={docSubmitted}
                    />
                </div>
            </div>

            <div className="row side-grey mb-2">
                <div className="col-lg-12">
                    <p className="sm-type-lead sm-type-lead--medium mb-2 redorange-highlight">
                        How will the asking price be funded?
                    </p>
                </div>
                <div className="col-lg-6">
                    <label className="form-label sm-type-amp">
                        Name of funder
                    </label>
                    <input
                        className="form-control"
                        value={landCost?.funder || ''}
                        onChange={
                            workDispatch
                                ? ({ target: { value } }) =>
                                      workDispatch({
                                          type: ActionType.UpdateLandCost,
                                          payload: {
                                              funder: value,
                                          },
                                      })
                                : () => {}
                        }
                        readOnly={docSubmitted}
                    />
                </div>

                <div className="col-lg-6">
                    <label className="form-label sm-type-amp">
                        Amount of funding (£)
                    </label>
                    <input
                        className="form-control"
                        type="number"
                        value={landCost?.amountOfFunding || ''}
                        onChange={
                            workDispatch
                                ? ({ target: { value } }) => {
                                      const amountOfFunding =
                                          value !== '' ? parseInt(value) : ''

                                      workDispatch({
                                          type: ActionType.UpdateLandCost,
                                          payload: {
                                              amountOfFunding,
                                          },
                                      })
                                  }
                                : () => {}
                        }
                        readOnly={docSubmitted}
                    />
                </div>
            </div>

            <SaveSubmitSection
                saveWorkObj={saveWorkObj}
                docSubmitted={docSubmitted}
            />
        </>
    )
}
