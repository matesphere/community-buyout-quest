import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'
import { gql } from '@apollo/client/core'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { ReadQuesty } from '../../../../components/student/ReadQuesty'
import { Helpful } from '../../../../components/student/Helpful'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'

import { useAuthQuery } from '../../../../utils/auth-utils'

import {
    Stage8Query,
    Stage8QueryVariables,
} from '../../../../gql/types/Stage8Query'

import '../../../../scss/index.scss'
import '../../../../scss/print.scss'

const STAGE_8_QUERY = gql`
    query Stage8Query($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            student {
                id
                team {
                    name
                    students {
                        user {
                            full_name
                        }
                    }
                }
            }
        }
    }
`

const TeamSection = ({ students, teamName }) => (
    <>
        <h3 className="cert-type-one">{teamName}</h3>
        <p className="cert-type-one">
            {students.map((student, i) => (
                <span className="cert-name" key={i}>
                    {student.user.full_name}
                </span>
            ))}
        </p>
    </>
)

const Stage8Page = () => {
    const {
        image1,
        graphCmsStageLandingPage: {
            stageTitle,
            stageIntro,
            tasksToComplete,
            helpfulInfo,
        },
    } = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "certificate.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            graphCmsStageLandingPage(stageNumber: { eq: 8 }) {
                ...StageLandingPageContent
            }
        }
    `)

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage8Query, Stage8QueryVariables>(
        STAGE_8_QUERY,
        {},
        'userId'
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

    const {
        student: {
            team: { name: teamName, students },
        },
    } = pageData.user_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 8 - {stageTitle}</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row none-print">
                        <div className="col-lg-8">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                ]}
                                currentDisplayName="Stage 8"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 mb-4">
                                {stageTitle}
                            </h2>

                            <ReadQuesty text={stageIntro} />
                        </div>

                        <div className="col-lg-4">
                            <Helpful content={helpfulInfo.info} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="mt-4 mb-2 image-holder team-certificate">
                                <div className="team-certificate--inner">
                                    <TeamSection
                                        students={students}
                                        teamName={teamName}
                                    />
                                </div>
                                <GatsbyImage
                                    alt=""
                                    image={
                                        image1.childImageSharp.gatsbyImageData
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <TaskPanel>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                    taskLinkUrl="/student/stage-8/task"
                                />
                            </TaskPanel>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage8Page
