import React, { FC } from 'react'

import {
    ActionType,
    BusinessPlan,
    CashFlow,
} from '../../../../pages/student/stages/stage-5/stage-5-landing'
import { SectionProps } from '../../../../pages/student/stages/stage-5/stage-5-business-plan'
import { InfoBlock } from '../../../student/InfoBlock'

const getBalance = ({ income, costs }: CashFlow) => {
    const year1 = (income.year1 || 0) - (costs.year1 || 0)
    const year2 = year1 + ((income.year2 || 0) - (costs.year2 || 0))
    const year3 = year2 + ((income.year3 || 0) - (costs.year3 || 0))
    const year4 = year3 + ((income.year4 || 0) - (costs.year4 || 0))

    return {
        year1,
        year2,
        year3,
        year4,
    }
}

export const CashFlowSection: FC<SectionProps> = ({
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

    const sectionState: CashFlow = optionState?.cashFlow || {
        income: {
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        },
        costs: {
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        },
        balance: {
            year1: '',
            year2: '',
            year3: '',
            year4: '',
        },
    }

    const autoBalance = true

    return (
        <div>
            {questionText && <InfoBlock items={[questionText]} />}

            <div className="side-grey mb-2">
                <div className="row mb-2">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2">Year 1</div>
                    <div className="col-lg-2">Year 2</div>
                    <div className="col-lg-2">Year 3</div>
                    <div className="col-lg-2">Year 4</div>
                </div>

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2 form-label">Income</div>
                    <div className="col-lg-2">
                        <input
                            type="number"
                            className="form-control mb-2"
                            value={sectionState.income.year1}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year1 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''
                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  income: {
                                                      ...sectionState.income,
                                                      year1,
                                                  },
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
                            value={sectionState.income.year2}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year2 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  income: {
                                                      ...sectionState.income,
                                                      year2,
                                                  },
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
                            value={sectionState.income.year3}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year3 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  income: {
                                                      ...sectionState.income,
                                                      year3,
                                                  },
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
                            value={sectionState.income.year4}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year4 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  income: {
                                                      ...sectionState.income,
                                                      year4,
                                                  },
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                            readOnly={docSubmitted}
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2 form-label">Running Costs</div>
                    <div className="col-lg-2">
                        <input
                            className="form-control mb-2"
                            type="number"
                            value={sectionState.costs.year1}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year1 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  costs: {
                                                      ...sectionState.costs,
                                                      year1,
                                                  },
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
                            value={sectionState.costs.year2}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year2 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  costs: {
                                                      ...sectionState.costs,
                                                      year2,
                                                  },
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
                            value={sectionState.costs.year3}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year3 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  costs: {
                                                      ...sectionState.costs,
                                                      year3,
                                                  },
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
                            value={sectionState.costs.year4}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year4 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  costs: {
                                                      ...sectionState.costs,
                                                      year4,
                                                  },
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                            readOnly={docSubmitted}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2">
                        <p className="sm-type-lead sm-type-lead--medium">
                            Balance
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <input
                            className={
                                getBalance(sectionState).year1 < 0
                                    ? 'form-control mb-2 red'
                                    : 'form-control mb-2 green'
                            }
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year1
                                    : sectionState.balance.year1
                            }
                            readOnly={autoBalance || docSubmitted}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year1 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  balance: {
                                                      ...sectionState.balance,
                                                      year1,
                                                  },
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className={
                                getBalance(sectionState).year2 < 0
                                    ? 'form-control mb-2 red'
                                    : 'form-control mb-2 green'
                            }
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year2
                                    : sectionState.balance.year2
                            }
                            readOnly={autoBalance || docSubmitted}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year2 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  balance: {
                                                      ...sectionState.balance,
                                                      year2,
                                                  },
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className={
                                getBalance(sectionState).year3 < 0
                                    ? 'form-control mb-2 red'
                                    : 'form-control mb-2 green'
                            }
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year3
                                    : sectionState.balance.year3
                            }
                            readOnly={autoBalance || docSubmitted}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year3 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  balance: {
                                                      ...sectionState.balance,
                                                      year3,
                                                  },
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                        />
                    </div>
                    <div className="col-lg-2">
                        <input
                            className={
                                getBalance(sectionState).year4 < 0
                                    ? 'form-control mb-2 red'
                                    : 'form-control mb-2 green'
                            }
                            type="number"
                            value={
                                autoBalance
                                    ? getBalance(sectionState).year4
                                    : sectionState.balance.year4
                            }
                            readOnly={autoBalance || docSubmitted}
                            onChange={
                                workDispatch
                                    ? ({ target: { value } }) => {
                                          const year4 =
                                              value !== ''
                                                  ? parseInt(value)
                                                  : ''

                                          workDispatch({
                                              type: ActionType.UpdateBusinessPlan,
                                              option,
                                              planSection: 'cashFlow',
                                              payload: {
                                                  ...sectionState,
                                                  balance: {
                                                      ...sectionState.balance,
                                                      year4,
                                                  },
                                              },
                                          })
                                      }
                                    : () => {}
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
