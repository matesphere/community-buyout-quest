import React, { Reducer, FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { InfoBlock } from '../../../../components/student/InfoBlock'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'
import { Helpful } from '../../../../components/student/Helpful'
import { CheckList } from '../../../../components/student/Checklist'
import { CostOfLand } from '../../../../components/common/stages/business-plan/CostOfLand'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'

import { useWorkState } from '../../../../utils/input-utils'

import { DocumentCompleteQuery_team_by_pk_team_development_options } from '../../../../gql/types/DocumentCompleteQuery'

import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'

interface FourYearCosts {
    year1: number | ''
    year2: number | ''
    year3: number | ''
    year4: number | ''
}

export interface LandCost {
    area: number | ''
    price: number | ''
    funder: string
    amountOfFunding: number | ''
}

export interface CapitalCosts {
    costs: Array<{ details: string; cost: number | '' }>
    funding: Array<{ funderName: string; amount: number | '' }>
}

export interface RunningCosts {
    costs: Array<{ details: string } & FourYearCosts>
}

export interface CashFlow {
    income: FourYearCosts
    costs: FourYearCosts
    balance: FourYearCosts
}
export interface BusinessPlan {
    capitalCosts: CapitalCosts
    runningCosts: RunningCosts
    cashFlow: CashFlow
}

export enum ActionType {
    Load,
    UpdateLandCost,
    UpdateBusinessPlan,
}

export interface WorkState {
    [key: string]: LandCost | BusinessPlan
}

export type Action =
    | {
          type: ActionType.Load
          option: string
          payload: WorkState
      }
    | {
          type: ActionType.UpdateLandCost
          payload: {
              area?: number | ''
              price?: number | ''
              funder?: string
              amountOfFunding?: number | ''
          }
      }
    | {
          type: ActionType.UpdateBusinessPlan
          option: string
          planSection: 'capitalCosts' | 'runningCosts' | 'cashFlow'
          payload: CapitalCosts | RunningCosts | CashFlow
      }

interface BusinessPlanLinksProps {
    shortlist: Array<DocumentCompleteQuery_team_by_pk_team_development_options>
    completedPlans: Array<string>
}

export const BusinessPlanLinks: FC<BusinessPlanLinksProps> = ({
    shortlist,
    completedPlans,
}) => (
    <ol>
        {shortlist.map(
            (
                {
                    id,
                    team_choice_name,
                    development_option: { option, display_name },
                },
                i
            ) => (
                <li key={i} className="sm-type-guitar">
                    <Link
                        to={`/student/stage-5/business-plan?num=${i}&id=${id}`}
                    >
                        {team_choice_name || display_name}
                    </Link>
                    {completedPlans.includes(option) && (
                        <span className="ml-2 side-icon">
                            <Tick />
                        </span>
                    )}
                </li>
            )
        )}
    </ol>
)

export const stage5Reducer: Reducer<WorkState, Action> = (
    state,
    action
): WorkState => {
    switch (action.type) {
        case ActionType.Load:
            return action.payload
        case ActionType.UpdateLandCost:
            return {
                ...state,
                landCost: {
                    ...state.landCost,
                    ...action.payload,
                },
            }
        case ActionType.UpdateBusinessPlan:
            return {
                ...state,
                [action.option]: {
                    ...state[action.option],
                    [action.planSection]: {
                        ...action.payload,
                    },
                },
            }
        default:
            return state
    }
}

const Stage5LandingPage: FC = () => {
    const {
        graphCmsStageLandingPage: {
            stageTitle,
            stageIntro,
            helpfulInfo,
            tasksToComplete,
            stageInfo,
            checklist,
        },
    } = useStaticQuery(graphql`
        query Stage5PageQuery {
            graphCmsStageLandingPage(stageNumber: { eq: 5 }) {
                ...StageLandingPageContent
            }
        }
    `)

    const {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
        docFeedback,
        docSubmitted,
    } = useWorkState<WorkState, Action>(5, stage5Reducer, true)

    if (loading) return <Loading />
    if (error || !pageData)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { team_development_options: devOptions } = pageData.team_by_pk
    const shortlist = devOptions.filter((opt) => opt.shortlist)
    const doc =
        pageData.team_by_pk.stage_progresses[0]?.documents[0]?.doc_data || {}

    // const workStateLandCost = workState.landCost as LandCost
    const docLandCost = doc.landCost

    const completedPlans = Object.keys(doc).filter((opt) =>
        shortlist
            .map(({ development_option: { option } }) => option)
            .includes(opt)
    )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 5 - {stageTitle}</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-9">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                ]}
                                currentDisplayName="Stage 5"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>

                            <ReadQuesty text={stageIntro} />
                            <InfoBlock items={[stageInfo]} />

                            <TaskPanel
                                docSubmitted={docSubmitted}
                                docFeedback={docFeedback}
                            >
                                <TaskContainer
                                    key={0}
                                    taskToComplete={tasksToComplete[0]}
                                    taskComplete={!!docLandCost}
                                >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <CostOfLand
                                                {...{
                                                    workState,
                                                    workDispatch,
                                                    saveWorkObj,
                                                    docSubmitted,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </TaskContainer>
                                <TaskContainer
                                    key={1}
                                    taskToComplete={tasksToComplete[1]}
                                    disabled={!docLandCost}
                                >
                                    <BusinessPlanLinks
                                        shortlist={shortlist}
                                        completedPlans={completedPlans}
                                    />
                                </TaskContainer>
                            </TaskPanel>

                            <SaveSubmitSection
                                submitWorkObj={submitWorkObj}
                                disableSubmit={
                                    completedPlans.length !== 3 || !docLandCost
                                }
                                docSubmitted={docSubmitted}
                            />
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                        <Link to="/student/team-hub">Back to Team Hub</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage5LandingPage
