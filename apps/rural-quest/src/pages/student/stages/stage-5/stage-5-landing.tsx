import { Reducer, FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    Error,
    Breadcrumbs,
    InfoBlock,
    ReadQuesty,
    Helpful,
    Checklist,
    CostOfLand,
    SaveSubmitSection,
    TaskContainer,
    TaskPanel,
} from '@community-land-quest/shared-ui'

import { useWorkState } from '@community-land-quest/shared-data/gql/hooks/workState'

import {
    BusinessPlanAction,
    BusinessPlanActionType,
    WorkState,
} from '@community-land-quest/shared-ui/types/business-plan'

import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'

interface BusinessPlanLinksProps {
    shortlist: Array<any>
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

export const stage5Reducer: Reducer<WorkState, BusinessPlanAction> = (
    state,
    action
): WorkState => {
    switch (action.type) {
        case BusinessPlanActionType.Load:
            return action.payload
        case BusinessPlanActionType.UpdateLandCost:
            return {
                ...state,
                landCost: {
                    ...state.landCost,
                    ...action.payload,
                },
            }
        case BusinessPlanActionType.UpdateBusinessPlan:
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
    } = useWorkState<WorkState, BusinessPlanAction>(5, stage5Reducer, true)

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
                                                    numberOfFundingOptions: 1,
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
                            <Checklist items={checklist.item} />
                        </div>
                        <Link to="/student/team-hub">Back to Team Hub</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage5LandingPage
