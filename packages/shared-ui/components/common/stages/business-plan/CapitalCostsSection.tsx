import React, { FC } from 'react'

import {
    ActionType,
    BusinessPlan,
    CapitalCosts,
} from '../../../../pages/student/stages/stage-5/stage-5-landing'
import { SectionProps } from '../../../../pages/student/stages/stage-5/stage-5-business-plan'
import { InfoBlock } from '../../../student/InfoBlock'

export const CapitalCostsSection: FC<SectionProps> = ({
    devOption: { option },
    workState,
    workDispatch,
    docSubmitted,
    questionText,
}) => {
    let optionState: BusinessPlan | undefined

    if (workState[option]) {
        optionState = workState[option] as BusinessPlan
    }

    const sectionState: CapitalCosts = optionState?.capitalCosts || {
        costs: Array(4).fill({ details: '', cost: '' }),
        funding: Array(4).fill({ funderName: '', amount: '' }),
    }

    return (
        <div>
            {questionText && <InfoBlock items={[questionText]} />}

            <div className="side-grey mb-2">
                <div className="row mb-4">
                    <div className="col-lg-8">
                        <label className="form-label sm-type-guitar">
                            Details of Capital Costs
                        </label>
                        {sectionState.costs.map(({ details, cost }, i) => (
                            <input
                                key={i}
                                className="form-control mb-2"
                                value={details}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.costs,
                                              ]
                                              arrayToUpdate.splice(i, 1, {
                                                  details: value,
                                                  cost,
                                              })

                                              workDispatch({
                                                  type: ActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'capitalCosts',
                                                  payload: {
                                                      ...sectionState,
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
                            Capital Costs (£)
                        </label>
                        {sectionState.costs.map(({ details, cost }, i) => (
                            <input
                                key={i}
                                className="form-control mb-2"
                                type="number"
                                value={cost}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.costs,
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
                                                  type: ActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'capitalCosts',
                                                  payload: {
                                                      ...sectionState,
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
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-4">
                        <label className="form-label sm-type-amp">
                            Total (£)
                        </label>
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.costs.reduce(
                                (acc, curr) => acc + (curr.cost || 0),
                                0
                            )}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="sm-type-guitar sm-type-guitar--medium mb-2">
                            How will the capital costs be funded?
                        </p>
                    </div>

                    <div className="col-lg-8">
                        <label className="form-label sm-type-amp">
                            Name of Funder
                        </label>
                        {sectionState.funding.map(
                            ({ funderName, amount }, i) => (
                                <input
                                    key={i}
                                    className="form-control mb-2"
                                    value={funderName}
                                    onChange={
                                        workDispatch
                                            ? ({ target: { value } }) => {
                                                  const arrayToUpdate = [
                                                      ...sectionState.funding,
                                                  ]
                                                  arrayToUpdate.splice(i, 1, {
                                                      funderName: value,
                                                      amount,
                                                  })

                                                  workDispatch({
                                                      type: ActionType.UpdateBusinessPlan,
                                                      option,
                                                      planSection:
                                                          'capitalCosts',
                                                      payload: {
                                                          ...sectionState,
                                                          funding:
                                                              arrayToUpdate,
                                                      },
                                                  })
                                              }
                                            : () => {}
                                    }
                                    readOnly={docSubmitted}
                                />
                            )
                        )}
                    </div>

                    <div className="col-lg-4">
                        <label className="form-label sm-type-amp">
                            Amount of Funding (£)
                        </label>
                        {sectionState.funding.map(
                            ({ funderName, amount }, i) => (
                                <input
                                    key={i}
                                    className="form-control mb-2"
                                    type="number"
                                    value={amount}
                                    onChange={
                                        workDispatch
                                            ? ({ target: { value } }) => {
                                                  const arrayToUpdate = [
                                                      ...sectionState.funding,
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
                                                      type: ActionType.UpdateBusinessPlan,
                                                      option,
                                                      planSection:
                                                          'capitalCosts',
                                                      payload: {
                                                          ...sectionState,
                                                          funding:
                                                              arrayToUpdate,
                                                      },
                                                  })
                                              }
                                            : () => {}
                                    }
                                    readOnly={docSubmitted}
                                />
                            )
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-4">
                        <label className="form-label sm-type-amp">
                            Total (£)
                        </label>
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.funding.reduce(
                                (acc, curr) => acc + (curr.amount || 0),
                                0
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
