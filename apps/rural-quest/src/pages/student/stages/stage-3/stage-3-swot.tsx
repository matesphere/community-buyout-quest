import React, { Reducer, FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import QueryString from 'query-string'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { SWOT } from '../../../../components/common/stages/SWOT'

import { useWorkState, ActionType } from '../../../../utils/input-utils'

import '../../../../scss/index.scss'

interface SwotType {
    strengths: string
    weaknesses: string
    opportunities: string
    threats: string
}

export interface WorkState {
    [key: string]: SwotType
}

export type Action =
    | {
          type: ActionType.LoadAction
          payload: WorkState
      }
    | {
          type: ActionType.UpdateAction
          payload: {
              option: string
              section: 'strengths' | 'weaknesses' | 'opportunities' | 'threats'
              input: string
          }
      }

export const stage3SwotReducer: Reducer<WorkState, Action> = (
    state,
    action
) => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            return {
                ...state,
                [action.payload.option]: {
                    ...state[action.payload.option],
                    [action.payload.section]: action.payload.input,
                },
            }
    }
}

const onChangeEditor =
    (workDispatch, devOption) => (section: string) => (data) =>
        workDispatch({
            type: ActionType.UpdateAction,
            payload: {
                option: devOption.option,
                section: section,
                input: data,
            },
        })

const Stage3SwotPage: FC<PageProps> = ({ location: { search } }) => {
    const {
        loading,
        error,
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        docSubmitted,
        // docFeedback,
        stageComplete,
    } = useWorkState<WorkState, Action>(3, stage3SwotReducer, true)

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

    const { id, num, from } = QueryString.parse(search, {
        parseNumbers: true,
    }) as { id: string; num: number; from: string }

    const teamDevOption = pageData.team_by_pk?.team_development_options.find(
        (opt) => opt.id === id
    )

    const devOption = teamDevOption?.development_option

    // TODO: feedback split out by SWOT?
    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Lay the Foundations - SWOT</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <Breadcrumbs
                        previous={[
                            {
                                displayName: 'Team Hub',
                                url: '/student/team-hub/',
                            },
                            {
                                displayName: 'Stage 3',
                                url: stageComplete
                                    ? '/student/stage-3/complete'
                                    : '/student/stage-3/',
                            },
                        ]}
                        currentDisplayName={`SWOT Analysis ${num + 1}`}
                    />
                    <SWOT
                        swotTitle={`SWOT Analysis ${num + 1}`}
                        // docFeedback={docFeedback}
                        teamDevOption={teamDevOption}
                        swotState={workState[devOption.option]}
                        changeFunc={onChangeEditor(workDispatch, devOption)}
                        saveWorkObj={saveWorkObj}
                        docSubmitted={docSubmitted}
                    />
                    {!!from ? (
                        <Link to={`/student/${from}`}>Go back</Link>
                    ) : (
                        <Link
                            to={
                                stageComplete
                                    ? '/student/stage-3/complete'
                                    : '/student/stage-3'
                            }
                        >
                            Back to Stage 3
                        </Link>
                    )}
                </section>
            </main>
        </>
    )
}

export default Stage3SwotPage
