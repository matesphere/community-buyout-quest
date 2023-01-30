import { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    Error,
    Breadcrumbs,
    Checklist,
    ReadQuesty,
    TaskPanel,
    TaskContainer,
} from '@community-land-quest/shared-ui'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { STAGE_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    StageQuery,
    StageQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

// import Video from '../../../../assets/the-quest-intro.mp4'
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
                                <iframe
                                    src="https://player.vimeo.com/video/321444139?h=378fb67b89"
                                    width="640"
                                    height="360"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <p>
                                    Midsteeple Quarter - Dumfries High Street
                                    from Community Land Scotland.
                                </p>
                            </div>

                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-1/task"
                                />
                            </TaskPanel>
                        </div>

                        <div className="col-lg-3">
                            {checklist && <Checklist items={checklist.item} />}
                        </div>
                    </div>
                    <Link to="/student/team-hub">Back to Team Hub</Link>
                </section>
            </main>
        </>
    )
}

export default Stage1LandingPage
