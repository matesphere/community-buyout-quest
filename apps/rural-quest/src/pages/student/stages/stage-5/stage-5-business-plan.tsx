import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import QueryString from 'query-string'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { Helpful } from '../../../../components/student/Helpful'

import { CapitalCostsSection } from '../../../../components/common/stages/business-plan/CapitalCostsSection'
import { RunningCostsSection } from '../../../../components/common/stages/business-plan/RunningCostsSection'
import { CashFlowSection } from '../../../../components/common/stages/business-plan/CashFlowSection'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'

import { stage5Reducer, WorkState, Action } from './stage-5-landing'

import { useWorkState } from '../../../../utils/input-utils'

import { RichTextContent } from '@graphcms/rich-text-types'

import '../../../../scss/index.scss'
import { Intro } from '../../../../components/student/Intro'

export interface SectionProps {
    devOption: {
        option: string
        display_name: string
    }
    workState: WorkState
    workDispatch?: React.Dispatch<Action>
    docSubmitted: boolean
    questionText?: { raw: RichTextContent }
}

const Stage5BusinessPlanPage: FC<PageProps> = ({ location: { search } }) => {
    const {
        graphCmsStageTask: { title, intro, questions, helpfulInfo },
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
        pageData,
        workState,
        workDispatch,
        saveWorkObj,
        docSubmitted,
        stageComplete,
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

    const { id, num } = QueryString.parse(search, {
        parseNumbers: true,
    }) as { id: string; num: number }

    const teamDevOption = pageData.team_by_pk?.team_development_options.find(
        (opt) => opt.id === id
    )

    const devOption = teamDevOption?.development_option

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
                                        url: stageComplete
                                            ? '/student/stage-5/complete'
                                            : '/student/stage-5/',
                                    },
                                ]}
                                currentDisplayName={`Business Plan ${num + 1}`}
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                Business Plan {num + 1}
                            </h2>

                            <Intro item={intro} />

                            <h3 className="sm-type-drum sm-type-drum--medium mb-2 redorange-highlight">
                                {teamDevOption?.team_choice_name ||
                                    devOption?.display_name}
                            </h3>

                            {!teamDevOption?.team_choice_name && (
                                <a
                                    href={`/information/${devOption?.option}-alt`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Development Option information
                                </a>
                            )}
                            <br />
                            <br />
                        </div>

                        <div className="col-lg-4">
                            <Helpful content={helpfulInfo.info}>
                                <>
                                    {!teamDevOption?.team_choice_name && (
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
                                    )}
                                </>
                            </Helpful>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <CapitalCostsSection
                                {...{
                                    devOption,
                                    workState,
                                    workDispatch,
                                    docSubmitted,
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
                                    workState,
                                    workDispatch,
                                    docSubmitted,
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
                                    workState,
                                    workDispatch,
                                    docSubmitted,
                                    questionText: questions[2],
                                }}
                            />
                        </div>
                    </div>

                    <SaveSubmitSection
                        saveWorkObj={saveWorkObj}
                        docSubmitted={docSubmitted}
                    />
                    <Link
                        to={
                            stageComplete
                                ? '/student/stage-5/complete'
                                : '/student/stage-5/'
                        }
                    >
                        Back to Stage 5
                    </Link>
                </section>
            </main>
        </>
    )
}

export default Stage5BusinessPlanPage
