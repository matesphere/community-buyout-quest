import React, { Reducer, FC } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { CheckList } from '../../../../components/student/Checklist'
import { Helpful } from '../../../../components/student/Helpful'

import { FeasibilityStudy } from '../../../../components/common/stages/FeasibilityStudy'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'

import { useWorkState, ActionType } from '../../../../utils/input-utils'

import '../../../../scss/index.scss'
import { TaskPanel } from '../../../../components/common/stages/TaskPanel'

interface FeasibilityStudyType {
    benefits: string
    reasonsSucceed: string
    reasonsFail: string
}

export interface WorkState {
    [key: string]: string | FeasibilityStudyType
}

export type Action =
    | {
          type: ActionType.LoadAction
          payload: WorkState
      }
    | {
          type: ActionType.UpdateAction
          payload: {
              option?: string
              section?: 'benefits' | 'reasonsSucceed' | 'reasonsFail'
              input: string
          }
      }

export const stage4Reducer: Reducer<WorkState, Action> = (
    state,
    action
): WorkState => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            if (action.payload.option) {
                return {
                    ...state,
                    [action.payload.option]: {
                        ...state[action.payload.option],
                        [action.payload.section]: action.payload.input,
                    },
                }
            } else {
                return {
                    ...state,
                    whyBuy: action.payload.input,
                }
            }
    }
}

const changeFunc = (workDispatch) => (option, section) => (data) =>
    workDispatch({
        type: ActionType.UpdateAction,
        payload: {
            option: option,
            section: section,
            input: data,
        },
    })

const feasibilityComplete = ({ whyBuy, ...rest }: WorkState) => {
    const studies = rest as { [key: string]: FeasibilityStudyType }

    return (
        !!whyBuy &&
        Object.keys(studies).length === 3 &&
        Object.values(studies).every(
            ({ benefits, reasonsSucceed, reasonsFail }) =>
                !!benefits && !!reasonsSucceed && reasonsFail
        )
    )
}

const Stage4FeasibilityPage: FC = () => {
    const {
        graphCmsStageTask: { title, questions, helpfulInfo, checklist },
    } = useStaticQuery(graphql`
        query {
            graphCmsStageTask(stageNumber: { eq: 4 }) {
                ...StageTaskContent
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
        docSubmitted,
        stageComplete,
    } = useWorkState<WorkState, Action>(4, stage4Reducer, true)

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

    const devOptions = pageData.team_by_pk.team_development_options.filter(
        (opt) => opt.shortlist
    )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 4 - {title}</title>
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
                                    {
                                        displayName: 'Stage 4',
                                        url: stageComplete
                                            ? '/student/stage-4/complete'
                                            : '/student/stage-4',
                                    },
                                ]}
                                currentDisplayName={title}
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {title}
                            </h2>

                            <TaskPanel>
                                <FeasibilityStudy
                                    devOptions={devOptions}
                                    workState={workState}
                                    changeFunc={changeFunc(workDispatch)}
                                    docSubmitted={docSubmitted}
                                    questions={questions}
                                />

                                <SaveSubmitSection
                                    saveWorkObj={saveWorkObj}
                                    submitWorkObj={submitWorkObj}
                                    disableSubmit={
                                        !feasibilityComplete(workState)
                                    }
                                    docSubmitted={docSubmitted}
                                />
                            </TaskPanel>
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info}>
                                <ol>
                                    {devOptions
                                        .filter(
                                            ({ team_choice_name }) =>
                                                !team_choice_name
                                        )
                                        .map(
                                            ({
                                                development_option: {
                                                    option,
                                                    display_name,
                                                },
                                            }) => (
                                                <li>
                                                    <a
                                                        href={`/information/${option}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {display_name}
                                                    </a>
                                                </li>
                                            )
                                        )}
                                </ol>
                            </Helpful>
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                    <Link
                        to={
                            stageComplete
                                ? '/student/stage-4'
                                : '/student/stage-4'
                        }
                    >
                        Back to Stage 4
                    </Link>
                </section>
            </main>
        </>
    )
}

export default Stage4FeasibilityPage
