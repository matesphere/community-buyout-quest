import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { SWOT } from '../../../../components/common/stages/SWOT'
import { SubmitFeedbackSection } from '../../../../components/tutor/SubmitFeedbackSection'
import TickSheet from '../../../../assets/tick-sheet.svg'
import { useFeedbackState, ActionType } from '../../../../utils/input-utils'

import '../../../../scss/index.scss'

const TutorStage3SubmittedPage: FC<PageProps> = ({ location: { search } }) => {
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
        pageData.stage_progress_by_pk.team.team_development_options
    const doc = pageData.stage_progress_by_pk.documents[0]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Lay the Foundations - Submitted</title>
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
                        currentDisplayName={`${teamName}: Stage 3 Submission`}
                    />

                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Research
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

                                <Accordion
                                    allowMultipleExpanded
                                    allowZeroExpanded
                                >
                                    {devOptions.map((opt, i) => (
                                        <AccordionItem
                                            key={i}
                                            className="form-holder-border"
                                        >
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    {opt.team_choice_name ||
                                                        opt.development_option
                                                            .display_name}
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <SWOT
                                                    key={i}
                                                    teamDevOption={opt}
                                                    swotState={
                                                        doc.doc_data[
                                                            opt
                                                                .development_option
                                                                .option
                                                        ]
                                                    }
                                                    docSubmitted={true}
                                                />
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
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

export default TutorStage3SubmittedPage
