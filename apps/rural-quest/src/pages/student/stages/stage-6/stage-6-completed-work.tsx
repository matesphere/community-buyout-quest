import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { gql } from '@apollo/client'
import { Helmet } from 'react-helmet'
import QueryString from 'query-string'
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
import { FeasibilityOptionSection } from '../../../../components/common/stages/FeasibilityStudy'
import { CapitalCostsSection } from '../../../../components/common/stages/business-plan/CapitalCostsSection'
import { RunningCostsSection } from '../../../../components/common/stages/business-plan/RunningCostsSection'
import { CashFlowSection } from '../../../../components/common/stages/business-plan/CashFlowSection'

import { useAuthQuery } from '../../../../utils/auth-utils'

import {
    Stage6WorkQuery,
    Stage6WorkQueryVariables,
} from '../../../../gql/types/Stage6WorkQuery'

const STAGE_6_WORK_QUERY = gql`
    query Stage6WorkQuery($team_id: uuid!, $dev_option_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(
                where: {
                    _or: [
                        { stage_id: { _eq: 3 } }
                        { stage_id: { _eq: 4 } }
                        { stage_id: { _eq: 5 } }
                    ]
                }
                order_by: { stage_id: asc }
            ) {
                stage_id
                documents(where: { status: { _eq: marked_passed } }) {
                    doc_data
                }
            }
            team_development_options(where: { id: { _eq: $dev_option_id } }) {
                shortlist
                development_option {
                    option
                    display_name
                }
            }
        }
    }
`

const Stage6CompletedWorkPage: FC<PageProps> = ({ location: { search } }) => {
    const { id } = QueryString.parse(search, {
        parseNumbers: true,
    }) as { id: string }

    const { loading, error, data } = useAuthQuery<
        Stage6WorkQuery,
        Stage6WorkQueryVariables
    >(STAGE_6_WORK_QUERY, { variables: { dev_option_id: id } }, 'teamId')

    if (loading) return <Loading />
    if (error || !data)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const devOption = data.team_by_pk?.team_development_options[0]
    const stageProgresses = data.team_by_pk?.stage_progresses

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 6 - Present Your Findings - Completed Work</title>
            </Helmet>

            <main className="the-quest">
                {/*<div className="save-icon">*/}
                {/*    <SaveIcon /> Save progress*/}
                {/*</div>*/}
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Stage 6',
                                        url: '/student/stage-6/',
                                    },
                                ]}
                                currentDisplayName={`Your work - ${devOption?.development_option.display_name}`}
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {devOption?.development_option.display_name}
                            </h2>
                            <Accordion allowZeroExpanded allowMultipleExpanded>
                                <AccordionItem className="form-holder-border">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            SWOT Analysis
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <SWOT
                                            swotState={
                                                stageProgresses[0]?.documents[0]
                                                    .doc_data[
                                                    devOption
                                                        ?.development_option
                                                        .option
                                                ]
                                            }
                                            teamDevOption={devOption}
                                            docSubmitted={true}
                                        />
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="form-holder-border">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Feasibility Study
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <FeasibilityOptionSection
                                            workState={
                                                stageProgresses[1]?.documents[0]
                                                    .doc_data
                                            }
                                            option={
                                                devOption?.development_option
                                                    .option
                                            }
                                            docSubmitted={true}
                                        />
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className="form-holder-border">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Business Plan
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <CapitalCostsSection
                                            workState={
                                                stageProgresses[2]?.documents[0]
                                                    .doc_data
                                            }
                                            devOption={
                                                devOption?.development_option
                                            }
                                            docSubmitted={true}
                                        />
                                        <RunningCostsSection
                                            workState={
                                                stageProgresses[2]?.documents[0]
                                                    .doc_data
                                            }
                                            devOption={
                                                devOption?.development_option
                                            }
                                            docSubmitted={true}
                                        />
                                        <CashFlowSection
                                            workState={
                                                stageProgresses[2]?.documents[0]
                                                    .doc_data
                                            }
                                            devOption={
                                                devOption?.development_option
                                            }
                                            docSubmitted={true}
                                        />
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <Link to="/student/stage-6">Back to Stage 6</Link>
                </section>
            </main>
        </>
    )
}

export default Stage6CompletedWorkPage
