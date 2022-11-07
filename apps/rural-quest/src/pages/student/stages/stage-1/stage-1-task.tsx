import React, { Reducer } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { Intro } from '../../../../components/student/Intro'
import { InfoBlock } from '../../../../components/student/InfoBlock'
import { TextEditor } from '../../../../components/common/TextEditor'
import {
    TaskPanel,
    TaskContainer,
} from '../../../../components/common/stages/TaskPanel'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'
import { Helpful } from '../../../../components/student/Helpful'
import { CheckList } from '../../../../components/student/Checklist'

import { useWorkState, ActionType } from '../../../../utils/input-utils'

import HelpIcon from '../../../../assets/help-icon.svg'

import '../../../../scss/index.scss'

type WorkState = {
    [key: number]: string
}

type Action =
    | {
          type: ActionType.LoadAction
          payload: WorkState
      }
    | {
          type: ActionType.UpdateAction
          payload: { question: number; answer: string }
      }

const stage1QuestionReducer: Reducer<WorkState, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.LoadAction:
            return action.payload
        case ActionType.UpdateAction:
            return {
                ...state,
                [action.payload.question]: action.payload.answer,
            }
        default:
            return state
    }
}

const Stage1TaskPage = () => {
    const {
        graphCmsStageTask: { title, intro, questions, helpfulInfo, checklist },
    } = useStaticQuery(graphql`
        query {
            graphCmsStageTask(stageNumber: { eq: 1 }) {
                title
                intro {
                    raw
                }
                questions {
                    raw
                }
                helpfulInfo {
                    info {
                        raw
                    }
                }
                checklist {
                    item
                }
            }
        }
    `)

    const {
        loading,
        error,
        workState,
        workDispatch,
        saveWorkObj,
        submitWorkObj,
        docSubmitted,
        docFeedback,
        stageComplete,
    } = useWorkState<WorkState, Action>(1, stage1QuestionReducer)

    if (loading) return <Loading />
    if (error || !workState)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - {title} - Task</title>
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
                                        displayName: 'Stage 1',
                                        url: stageComplete
                                            ? '/student/stage-1/complete'
                                            : '/student/stage-1',
                                    },
                                ]}
                                currentDisplayName={title}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {title}
                            </h2>

                            <Intro item={intro} />

                            {docFeedback && (
                                <div className="side-grey">
                                    <h3 className="task ticker mb-2">
                                        <span className="ticker-sheet ticker-feedback">
                                            <HelpIcon />
                                        </span>
                                        <span className="sm-type-drum green-highlight">
                                            Tutor feedback:
                                        </span>
                                    </h3>
                                    <div className="form-holder-border">
                                        <p className="sm-type-lead">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: docFeedback.feedback,
                                                }}
                                            />
                                        </p>
                                    </div>
                                </div>
                            )}

                            <TaskPanel docSubmitted={docSubmitted}>
                                <TaskContainer taskToComplete={{}}>
                                    <h4 className="sm-type-drum sm-type-drum--medium">
                                        Questions
                                    </h4>
                                    <ol>
                                        {questions.map((question, i) => (
                                            <li key={i}>
                                                <InfoBlock items={[question]} />
                                                <div className="ck-textarea">
                                                    <TextEditor
                                                        data={
                                                            workState[i] || ''
                                                        }
                                                        onChange={(data) =>
                                                            workDispatch({
                                                                type: ActionType.UpdateAction,
                                                                payload: {
                                                                    question: i,
                                                                    answer: data,
                                                                },
                                                            })
                                                        }
                                                        docSubmitted={
                                                            docSubmitted
                                                        }
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ol>

                                    <SaveSubmitSection
                                        saveWorkObj={saveWorkObj}
                                        submitWorkObj={submitWorkObj}
                                        disableSubmit={
                                            Object.values(workState).filter(
                                                Boolean
                                            ).length < 12
                                        }
                                        docSubmitted={docSubmitted}
                                    />
                                </TaskContainer>
                            </TaskPanel>
                            <Link
                                to={
                                    stageComplete
                                        ? '/student/stage-1/complete'
                                        : '/student/stage-1'
                                }
                            >
                                Back to Stage 1
                            </Link>
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage1TaskPage
