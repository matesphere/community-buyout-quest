import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { gql } from '@apollo/client'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'
import { Helpful } from '../../../../components/student/Helpful'

import { useAuthQuery } from '../../../../utils/auth-utils'

import {
    Stage6Query,
    Stage6QueryVariables,
} from '../../../../gql/types/Stage6Query'

import '../../../../scss/index.scss'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'
import { InfoBlock } from '../../../../components/student/InfoBlock'

const STAGE_6_QUERY = gql`
    query Stage6Query($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            team_development_options {
                id
                development_option {
                    display_name
                }
                shortlist
            }
        }
    }
`

const Stage6Page = () => {
    const {
        graphCmsStageLandingPage: {
            stageTitle,
            stageIntro,
            stageInfo,
            helpfulInfo,
            tasksToComplete,
        },
    } = useStaticQuery(graphql`
        query Stage6PageQuery {
            graphCmsStageLandingPage(stageNumber: { eq: 6 }) {
                ...StageLandingPageContent
            }
        }
    `)

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage6Query, Stage6QueryVariables>(
        STAGE_6_QUERY,
        {},
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

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 6 - {stageTitle}</title>
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
                                currentDisplayName="Stage 6"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>

                            <ReadQuesty text={stageIntro} />
                            <InfoBlock items={[stageInfo]} />

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-6/presentation-tips"
                                />
                                <TaskContainer
                                    taskToComplete={tasksToComplete[1]}
                                    taskLinkUrl="/student/stage-6/presentation-tips"
                                >
                                    <ul>
                                        {pageData.team_by_pk?.team_development_options
                                            .filter((opt) => opt.shortlist)
                                            .map(
                                                (
                                                    {
                                                        id,
                                                        development_option: {
                                                            display_name,
                                                        },
                                                    },
                                                    i
                                                ) => (
                                                    <li
                                                        key={i}
                                                        className="sm-type-guitar"
                                                    >
                                                        <Link
                                                            to={`/student/stage-6/completed-work?id=${id}`}
                                                        >
                                                            {display_name}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                    </ul>
                                </TaskContainer>
                            </TaskPanel>
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage6Page
