import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'
import { CheckList } from '../../../../components/student/Checklist'
import { Helpful } from '../../../../components/student/Helpful'
import {
    TaskPanel,
    TaskContainer,
} from '../../../../components/common/stages/TaskPanel'
import { StageInfoRenderer } from '../../../../components/student/RichTextRenderers'

import { useAuthQuery } from '../../../../utils/auth-utils'

import { STAGE_QUERY } from '../../../../gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '../../../../gql/types/StageQuery'

import '../../../../scss/index.scss'

const Stage2LandingPage: FC = () => {
    const {
        image1: { childImageSharp },
        graphCmsStageLandingPage: {
            stageTitle,
            stageIntro,
            stageInfo,
            tasksToComplete,
            checklist,
            helpfulInfo,
        },
    } = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "glenclas.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            graphCmsStageLandingPage(stageNumber: { eq: 2 }) {
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
            variables: { stage_id: 2, includeDevOptions: false },
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
                <title>Stage 2 - {stageTitle}</title>
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
                                currentDisplayName="Stage 2"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {stageTitle}
                            </h2>

                            <ReadQuesty text={stageIntro} />

                            <div className="mt-4 mb-2 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={childImageSharp.gatsbyImageData}
                                />
                            </div>

                            {stageInfo && (
                                <StageInfoRenderer content={stageInfo.raw} />
                            )}

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-2/task"
                                />
                            </TaskPanel>
                        </div>

                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo?.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage2LandingPage
