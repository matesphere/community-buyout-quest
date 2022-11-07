import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { CheckList } from '../../../../components/student/Checklist'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'
import {
    TaskPanel,
    TaskContainer,
} from '../../../../components/common/stages/TaskPanel'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import Video from '../../../../assets/the-quest-intro.mp4'

import '../../../../scss/index.scss'

const Stage1LandingPage: FC = () => {
    const {
        graphCmsStageLandingPage: {
            stageTitle,
            stageIntro,
            tasksToComplete,
            checklist,
        },
    } = useStaticQuery(graphql`
        query {
            graphCmsStageLandingPage(stageNumber: { eq: 1 }) {
                ...StageLandingPageContent
            }
        }
    `)

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<StageQuery, StageQueryVariables>(
        STAGE_QUERY,
        {
            variables: { stage_id: 1, includeDevOptions: false },
        },
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
                <title>Stage 1 - {stageTitle}</title>
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
                                currentDisplayName="Stage 1"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>

                            <ReadQuesty text={stageIntro} />

                            <div className="homepage-image mb-4">
                                <video controls>
                                    <source src={Video} type="video/mp4" />
                                </video>
                            </div>

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-1/task"
                                />
                            </TaskPanel>
                        </div>

                        <div className="col-lg-3">
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage1LandingPage
