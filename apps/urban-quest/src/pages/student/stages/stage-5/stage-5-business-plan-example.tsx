import { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import QueryString from 'query-string'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    Error,
    Breadcrumbs,
    Intro,
    Helpful,
    CapitalCostsSection,
    RunningCostsSection,
    CashFlowSection,
} from '@community-land-quest/shared-ui'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { BUSINESS_PLAN_EXAMPLE_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    BusinessPlanExampleQuery,
    BusinessPlanExampleQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import '../../../../scss/index.scss'

const Stage5BusinessPlanPage: FC<PageProps> = ({ location: { search } }) => {
    const {
        graphCmsStageTask: { title, questions, helpfulInfo },
    } = useStaticQuery(graphql`
        query {
            graphCmsStageTask(stageNumber: { eq: 5 }) {
                ...StageTaskContent
            }
        }
    `)

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<
        BusinessPlanExampleQuery,
        Omit<BusinessPlanExampleQueryVariables, 'team_id'>
    >(
        BUSINESS_PLAN_EXAMPLE_QUERY,
        { variables: { quest_type: 'urban' } },
        'teamId'
    )

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

    const { option } = QueryString.parse(search) as { option: string }

    const devOption = pageData.development_option.find(
        (opt) => opt.option === option
    )
    const businessPlanState =
        pageData.team_by_pk!.stage_progresses[0].documents[0].doc_data

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 5 - {title}</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                    {
                                        displayName: 'Stage 5',
                                        url: '/student/stage-5/',
                                    },
                                ]}
                                currentDisplayName="Example Business Plan"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Example Business Plan
                            </h2>

                            <h3 className="sm-type-drum sm-type-drum--medium mb-2 redorange-highlight">
                                {devOption!.display_name}
                            </h3>

                            <a
                                href={`/information/${devOption?.option}-alt`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Development Option information
                            </a>
                            <br />
                            <br />
                        </div>

                        <div className="col-lg-4">
                            {helpfulInfo && (
                                <Helpful content={helpfulInfo.info}>
                                    <>
                                        <p className="sm-type-amp">
                                            Figures are provided in the{' '}
                                            <a
                                                href={`/information/${devOption?.option}-alt`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Development Option information
                                            </a>
                                            .
                                        </p>
                                    </>
                                </Helpful>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <CapitalCostsSection
                                {...{
                                    devOption,
                                    workState: businessPlanState,
                                    workDispatch: () => {},
                                    docSubmitted: true,
                                    questionText: questions[0],
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <RunningCostsSection
                                {...{
                                    devOption,
                                    workState: businessPlanState,
                                    workDispatch: () => {},
                                    docSubmitted: true,
                                    questionText: questions[1],
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <CashFlowSection
                                {...{
                                    devOption,
                                    workState: businessPlanState,
                                    workDispatch: () => {},
                                    docSubmitted: true,
                                    questionText: questions[2],
                                }}
                            />
                        </div>
                    </div>

                    <Link to="/student/stage-5/">Back to Stage 5</Link>
                </section>
            </main>
        </>
    )
}

export default Stage5BusinessPlanPage
