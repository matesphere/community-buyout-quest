import React, { FC } from 'react'
import { Link, PageProps, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'

import { FeasibilityStudy } from '../../../../components/common/stages/FeasibilityStudy'
import { SubmitFeedbackSection } from '../../../../components/tutor/SubmitFeedbackSection'

import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const TutorStage4SubmittedPage: FC<PageProps> = ({ location: { search } }) => {
    const {
        graphCmsStageTask: { questions },
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
        feedbackState,
        feedbackDispatch,
        submitFeedbackObj,
    } = useFeedbackState(search, true)

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

    const teamName = pageData.stage_progress_by_pk?.team.name
    const devOptions =
        pageData.stage_progress_by_pk.team.team_development_options.filter(
            (opt) => opt.shortlist
        )
    const doc = pageData.stage_progress_by_pk.documents[0]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>
                    Stage 4 - Progress Your Plans (Feasibility Study) -
                    Submitted
                </title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <Breadcrumbs
                        previous={[
                            {
                                displayName: 'Tutor Hub',
                                url: '/tutor/hub',
                            },
                            {
                                displayName: 'Current Quests',
                                url: '/tutor/current-quests',
                            },
                        ]}
                        currentDisplayName={`${teamName}: Stage 4 Submission`}
                    />

                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Progress Your Plans I - Feasibility Study
                            </h2>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task submitted
                                    </span>
                                </h3>
                                <FeasibilityStudy
                                    devOptions={devOptions}
                                    workState={doc.doc_data}
                                    docSubmitted={true}
                                    questions={questions}
                                />
                            </div>
                        </div>
                    </div>

                    <SubmitFeedbackSection
                        feedbackState={feedbackState}
                        changeFunc={(data) =>
                            feedbackDispatch({
                                type: ActionType.UpdateAction,
                                payload: {
                                    feedback: data,
                                },
                            })
                        }
                        submittedFeedback={doc.feedback}
                        submitFeedbackObj={submitFeedbackObj}
                        disableSubmit={feedbackState && !feedbackState.feedback}
                    />

                    <p className="sm-type-amp">
                        <Link to="/tutor/current-quests">
                            Back to Current Quests
                        </Link>
                    </p>
                </section>
            </main>
        </>
    )
}

export default TutorStage4SubmittedPage
