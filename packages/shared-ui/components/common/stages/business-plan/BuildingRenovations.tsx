import { FC } from 'react'

import { SaveSubmitSection } from '../SaveSubmitSection'

import {
    BusinessPlanActionType,
    BusinessPlanAction,
    WorkState,
    Renovations,
} from '../../../../types/business-plan'

interface RenovationsProps {
    workState: WorkState
    workDispatch?: React.Dispatch<BusinessPlanAction>
    saveWorkObj?: { call: () => {}; response: any }
    docSubmitted: boolean
}

export const BuildingRenovations: FC<RenovationsProps> = ({
    workState,
    workDispatch,
    saveWorkObj,
    docSubmitted,
}) => {
    const renovations: Renovations = (workState.renovations as Renovations) || {
        costs: Array(5).fill({ details: '', cost: '' }),
        funding: Array(5).fill({ funderName: '', amount: '' }),
    }

    const costsTotal = renovations.costs.reduce(
        (acc, curr) => acc + (curr.cost || 0),
        0
    )

    const fundingTotal = renovations.funding.reduce(
        (acc, curr) => acc + (curr.amount || 0),
        0
    )

    const balance = fundingTotal - costsTotal

    return (
        <>
            <div className="row side-grey mb-2">
                <div className="row mb-4">
                    <div className="col-lg-8">
                        <label className="form-label sm-type-guitar">
                            Details of Renovations
                        </label>
                        {renovations.costs.map(({ details, cost }, i) => (
                            <input
                                key={i}
                                className="form-control mb-2"
                                value={details}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...renovations.costs,
                                              ]
                                              arrayToUpdate.splice(i, 1, {
                                                  details: value,
                                                  cost,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateRenovations,
                                                  payload: {
                                                      ...renovations,
                                                      costs: arrayToUpdate,
                                                  },
                                              })
                                          }
                                        : () => {}
                                }
                                readOnly={docSubmitted}
                            />
                        ))}
                    </div>

                    <div className="col-lg-4">
                        <label className="form-label sm-type-amp">
                            Renovation Costs (£)
                        </label>
                        {renovations.costs.map(({ details, cost }, i) => (
                            <input
                                key={i}
                                className="form-control mb-2"
                                type="number"
                                value={cost}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...renovations.costs,
                                              ]

                                              const cost =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  details,
                                                  cost,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateRenovations,
                                                  payload: {
                                                      ...renovations,
                                                      costs: arrayToUpdate,
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
                <div className="row full-row">
                    <div className="col-lg-3">&nbsp;</div>
                    <div className="col-lg-5">&nbsp;</div>
                    <div className="col-lg-4">
                        <label className="form-label sm-type-amp">
                            Total (£)
                        </label>
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={costsTotal}
                        />
                    </div>
                </div>

                <div className="col-lg-12">
                    <p className="sm-type-lead sm-type-lead--medium mb-2 redorange-highlight">
                        How will the renovations be funded?
                    </p>
                </div>
                <div className="col-lg-6">
                    <label className="form-label sm-type-amp">
                        Name of funder
                    </label>
                    {renovations.funding.map(({ funderName, amount }, i) => (
                        <input
                            className="form-control mb-2"
                            value={funderName}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const arrayToUpdate = [
                                              ...renovations.funding,
                                          ]
                                          arrayToUpdate.splice(i, 1, {
                                              funderName: value,
                                              amount,
                                          })

                                          workDispatch({
                                              type: BusinessPlanActionType.UpdateRenovations,
                                              payload: {
                                                  ...renovations,
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
                    {renovations.funding.map(({ funderName, amount }, i) => (
                        <input
                            key={i}
                            className="form-control mb-2"
                            type="number"
                            value={amount}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const arrayToUpdate = [
                                              ...renovations.funding,
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
                                              type: BusinessPlanActionType.UpdateRenovations,
                                              payload: {
                                                  ...renovations,
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

                <div className="row full-row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-4">
                        <label className="form-label sm-type-amp">
                            Total (£)
                        </label>
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={fundingTotal}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-5"></div>
                <div className="col-lg-4">
                    <label className="form-label sm-type-amp">
                        Balance (£)
                    </label>
                    <input
                        className={
                            balance === 0
                                ? 'form-control mb-2 green'
                                : 'form-control mb-2 red'
                        }
                        readOnly
                        value={balance}
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
