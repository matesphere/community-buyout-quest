import { FC } from 'react'

import { SaveSubmitSection } from '../SaveSubmitSection'

import {
    BusinessPlanActionType,
    BusinessPlanAction,
    WorkState,
    LandCost,
} from '../../../../types/business-plan'

interface CostOfLandProps {
    workState: WorkState
    workDispatch?: React.Dispatch<BusinessPlanAction>
    saveWorkObj?: { call: () => {}; response: any }
    docSubmitted: boolean
    numberOfFundingOptions: number
}

export const CostOfLand: FC<CostOfLandProps> = ({
    workState,
    workDispatch,
    saveWorkObj,
    docSubmitted,
    numberOfFundingOptions,
}) => {
    const landCost: LandCost = (workState.landCost as LandCost) || {
        area: '',
        price: '',
        funding: Array(numberOfFundingOptions).fill({
            funderName: '',
            amount: '',
        }),
    }

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
                        value={landCost.area}
                        onChange={
                            workDispatch
                                ? ({ target: { value } }) => {
                                      const area =
                                          value !== '' ? parseInt(value) : ''

                                      workDispatch({
                                          type: BusinessPlanActionType.UpdateLandCost,
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
                        defaultValue={250000}
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
                        value={landCost.price}
                        onChange={
                            workDispatch
                                ? ({ target: { value } }) => {
                                      const price =
                                          value !== '' ? parseInt(value) : ''

                                      workDispatch({
                                          type: BusinessPlanActionType.UpdateLandCost,
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
                    {landCost.funding.map(({ funderName, amount }, i) => (
                        <input
                            className="form-control mb-2"
                            value={funderName}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const arrayToUpdate = [
                                              ...landCost.funding,
                                          ]
                                          arrayToUpdate.splice(i, 1, {
                                              funderName: value,
                                              amount,
                                          })

                                          workDispatch({
                                              type: BusinessPlanActionType.UpdateLandCost,
                                              payload: {
                                                  ...landCost,
                                                  funding: arrayToUpdate,
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                            readOnly={docSubmitted}
                        />
                    ))}
                </div>

                <div className="col-lg-6">
                    <label className="form-label sm-type-amp">
                        Amount of funding (£)
                    </label>
                    {landCost.funding.map(({ funderName, amount }, i) => (
                        <input
                            key={i}
                            className="form-control mb-2"
                            type="number"
                            value={amount}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const arrayToUpdate = [
                                              ...landCost.funding,
                                          ]

                                          const amount =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          arrayToUpdate.splice(i, 1, {
                                              funderName,
                                              amount,
                                          })

                                          workDispatch({
                                              type: BusinessPlanActionType.UpdateLandCost,
                                              payload: {
                                                  ...landCost,
                                                  funding: arrayToUpdate,
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                            readOnly={docSubmitted}
                        />
                    ))}
                </div>
            </div>

            <SaveSubmitSection
                saveWorkObj={saveWorkObj}
                docSubmitted={docSubmitted}
            />
        </>
    )
}
