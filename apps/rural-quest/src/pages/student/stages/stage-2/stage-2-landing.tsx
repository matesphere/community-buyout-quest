import { FC } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    Error,
    Breadcrumbs,
    ReadQuesty,
    Checklist,
    Helpful,
    TaskPanel,
    TaskContainer,
} from '@community-land-quest/shared-ui'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { STAGE_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import { StageInfoRenderer } from '@community-land-quest/shared-utils/utils/rich-text-renderers'

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
    } = useAuthQuery<StageQuery, Omit<StageQueryVariables, 'team_id'>>(
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
                            <Checklist items={checklist.item} />
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage2LandingPage
