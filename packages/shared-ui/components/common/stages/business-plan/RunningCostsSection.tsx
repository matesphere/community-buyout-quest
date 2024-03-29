import { FC } from 'react'

import {
    BusinessPlanActionType,
    BusinessPlan,
    RunningCosts,
    SectionProps,
} from '../../../../types/business-plan'
import { InfoBlock } from '../../../student/InfoBlock'

export const RunningCostsSection: FC<SectionProps> = ({
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

    const sectionState: RunningCosts = optionState?.runningCosts || {
        costs: Array(6).fill({
            details: '',
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        }),
        incomes: Array(6).fill({
            details: '',
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        }),
    }

    return (
        <div>
            {questionText && <InfoBlock items={[questionText]} />}

            <div className="side-grey mb-2">
                {/* INCOMES */}
                <div className="row">
                    <div className="col-lg-4">
                        <p className="form-label sm-type-amp mb-2">
                            Details of annual incomes
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 1</p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 2</p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 3</p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 4</p>
                    </div>
                </div>

                {sectionState.incomes.map((incomeRow, i) => (
                    <div
                        key={i}
                        className={`row${
                            i === sectionState.incomes.length - 1 ? ' mb-3' : ''
                        }`}
                    >
                        <div className="col-lg-4">
                            <input
                                className="form-control mb-2"
                                value={incomeRow.details}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.incomes,
                                              ]

                                              arrayToUpdate.splice(i, 1, {
                                                  ...incomeRow,
                                                  details: value,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
                                                  payload: {
                                                      ...sectionState,
                                                      incomes: arrayToUpdate,
                                                  },
                                              })
                                          }
                                        : () => {}
                                }
                                readOnly={docSubmitted}
                            />
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={incomeRow.year1}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.incomes,
                                              ]

                                              const year1 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...incomeRow,
                                                  year1,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
                                                  payload: {
                                                      ...sectionState,
                                                      incomes: arrayToUpdate,
                                                  },
                                              })
                                          }
                                        : () => {}
                                }
                                readOnly={docSubmitted}
                            />
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={incomeRow.year2}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.incomes,
                                              ]

                                              const year2 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...incomeRow,
                                                  year2,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
                                                  payload: {
                                                      ...sectionState,
                                                      incomes: arrayToUpdate,
                                                  },
                                              })
                                          }
                                        : () => {}
                                }
                                readOnly={docSubmitted}
                            />
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={incomeRow.year3}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.incomes,
                                              ]

                                              const year3 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...incomeRow,
                                                  year3,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
                                                  payload: {
                                                      ...sectionState,
                                                      incomes: arrayToUpdate,
                                                  },
                                              })
                                          }
                                        : () => {}
                                }
                                readOnly={docSubmitted}
                            />
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={incomeRow.year4}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.incomes,
                                              ]

                                              const year4 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...incomeRow,
                                                  year4,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
                                                  payload: {
                                                      ...sectionState,
                                                      incomes: arrayToUpdate,
                                                  },
                                              })
                                          }
                                        : () => {}
                                }
                                readOnly={docSubmitted}
                            />
                        </div>
                    </div>
                ))}

                <div className="row mb-4">
                    <div className="col-lg-4">
                        <p className="text-align-right">Total</p>
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.incomes.reduce(
                                (acc, curr) => acc + (curr.year1 || 0),
                                0
                            )}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.incomes.reduce(
                                (acc, curr) => acc + (curr.year2 || 0),
                                0
                            )}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.incomes.reduce(
                                (acc, curr) => acc + (curr.year3 || 0),
                                0
                            )}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.incomes.reduce(
                                (acc, curr) => acc + (curr.year4 || 0),
                                0
                            )}
                        />
                    </div>
                </div>

                {/* COSTS */}
                <div className="row">
                    <div className="col-lg-4">
                        <p className="form-label sm-type-amp mb-2">
                            Details of annual running costs
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 1</p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 2</p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 3</p>
                    </div>
                    <div className="col-lg-2">
                        <p className="sm-type-amp mb-2">Year 4</p>
                    </div>
                </div>

                {sectionState.costs.map((costRow, i) => (
                    <div
                        key={i}
                        className={`row${
                            i === sectionState.costs.length - 1 ? ' mb-3' : ''
                        }`}
                    >
                        <div className="col-lg-4">
                            <input
                                className="form-control mb-2"
                                value={costRow.details}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.costs,
                                              ]

                                              arrayToUpdate.splice(i, 1, {
                                                  ...costRow,
                                                  details: value,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
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
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={costRow.year1}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.costs,
                                              ]

                                              const year1 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...costRow,
                                                  year1,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
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
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={costRow.year2}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.costs,
                                              ]

                                              const year2 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...costRow,
                                                  year2,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
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
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={costRow.year3}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.costs,
                                              ]

                                              const year3 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...costRow,
                                                  year3,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
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
                        </div>
                        <div className="col-lg-2">
                            <input
                                className="form-control mb-2"
                                type="number"
                                value={costRow.year4}
                                onChange={
                                    workDispatch
                                        ? ({ target: { value } }) => {
                                              const arrayToUpdate = [
                                                  ...sectionState.costs,
                                              ]

                                              const year4 =
                                                  value !== ''
                                                      ? parseInt(value)
                                                      : ''

                                              arrayToUpdate.splice(i, 1, {
                                                  ...costRow,
                                                  year4,
                                              })

                                              workDispatch({
                                                  type: BusinessPlanActionType.UpdateBusinessPlan,
                                                  option,
                                                  planSection: 'runningCosts',
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
                        </div>
                    </div>
                ))}

                <div className="row mb-4">
                    <div className="col-lg-4">
                        <p className="text-align-right">Total</p>
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.costs.reduce(
                                (acc, curr) => acc + (curr.year1 || 0),
                                0
                            )}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.costs.reduce(
                                (acc, curr) => acc + (curr.year2 || 0),
                                0
                            )}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.costs.reduce(
                                (acc, curr) => acc + (curr.year3 || 0),
                                0
                            )}
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            readOnly
                            value={sectionState.costs.reduce(
                                (acc, curr) => acc + (curr.year4 || 0),
                                0
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
