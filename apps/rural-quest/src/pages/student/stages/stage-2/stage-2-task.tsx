import React, { useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { gql, ApolloError } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { InfoBlock } from '../../../../components/student/InfoBlock'
import {
    TaskContainer,
    TaskPanel,
} from '../../../../components/common/stages/TaskPanel'
import { Helpful } from '../../../../components/student/Helpful'
import { CheckList } from '../../../../components/student/Checklist'
import { SaveSubmitSection } from '../../../../components/common/stages/SaveSubmitSection'

import { useAuthQuery, useAuthMutation } from '../../../../utils/auth-utils'

import { SET_TEAM_POSITIONS_AND_LOGO } from '../../../../gql/mutations'
import {
    SetTeamPositions,
    SetTeamPositionsVariables,
} from '../../../../gql/types/SetTeamPositions'
import {
    Stage2TaskQuery,
    Stage2TaskQueryVariables,
} from '../../../../gql/types/Stage2TaskQuery'

import Tick from '../../../../assets/tick.svg'

import '../../../../scss/index.scss'

const STAGE_2_TASK_QUERY = gql`
    query Stage2TaskQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            logo
            students {
                id
                user_id
                school_id
                team_id
                position
                user {
                    username
                    full_name
                }
            }
            stage_progresses(where: { stage_id: { _eq: 2 } }) {
                id
                status
            }
        }
    }
`

const Stage2TaskPage = () => {
    // const [showFilters, setShowFilters] = useState(false)
    const [logo, setLogo] = useState('')
    const [positions, setPositions] = useState([])
    const [submitComplete, setSubmitComplete] = useState(false)

    // const [submitLogo, submitLogoResponse] = useAuthMutation(SET_TEAM_LOGO)
    const [submitPositions, submitPositionResponse] = useAuthMutation<
        SetTeamPositions,
        SetTeamPositionsVariables
    >(
        SET_TEAM_POSITIONS_AND_LOGO,
        {
            query: STAGE_2_TASK_QUERY,
            variables: {},
            idRequired: 'teamId',
        },
        () => setSubmitComplete(true)
    )

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<Stage2TaskQuery, Stage2TaskQueryVariables>(
        STAGE_2_TASK_QUERY,
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

    const { id: teamId } = pageData.team_by_pk
    const { id: stageProgressId } = pageData.team_by_pk?.stage_progresses[0]
    const submitted = !!pageData.team_by_pk?.logo

    const {
        allFile,
        graphCmsStageTaskPage: {
            title,
            taskInfo,
            tasksToComplete,
            helpfulInfo,
            checklist,
        },
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { name: { regex: "/team-logo/" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                }
            }
            graphCmsStageTaskPage(stageNumber: { eq: 2 }) {
                title
                taskInfo {
                    raw
                }
                tasksToComplete {
                    title
                    taskInfo {
                        raw
                    }
                    taskLinkText
                }
                helpfulInfo {
                    info {
                        raw
                    }
                }
                checklist {
                    item
                }
            }
        }
    `)

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 2 - Consult - Task</title>
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
                                    {
                                        displayName: 'Stage 2',
                                        url: '/student/stage-2/',
                                    },
                                ]}
                                currentDisplayName="Consult Task"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {title}
                            </h2>

                            <InfoBlock items={[taskInfo]} />

                            <TaskPanel docSubmitted={submitted}>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[0]}
                                >
                                    <div className="row">
                                        {allFile.edges.map(
                                            ({
                                                node: {
                                                    name,
                                                    childImageSharp: {
                                                        gatsbyImageData,
                                                    },
                                                },
                                            }) => (
                                                <div
                                                    className="col-lg-3 mb-2"
                                                    key={name}
                                                >
                                                    <div className="multiple-choice">
                                                        <input
                                                            className="form-control"
                                                            id={name}
                                                            value={name}
                                                            checked={
                                                                logo === name
                                                            }
                                                            onChange={
                                                                submitted
                                                                    ? () => {}
                                                                    : () =>
                                                                          setLogo(
                                                                              name
                                                                          )
                                                            }
                                                            type="radio"
                                                            name="choose-logo"
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor={name}
                                                        >
                                                            <GatsbyImage
                                                                alt="logo"
                                                                image={
                                                                    gatsbyImageData
                                                                }
                                                            />
                                                            <span className="visuallyhidden">
                                                                {name}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </TaskContainer>
                                <TaskContainer
                                    taskToComplete={tasksToComplete[1]}
                                >
                                    <div id="form-roles">
                                        <ul>
                                            {pageData.team_by_pk.students.map(
                                                (
                                                    {
                                                        user: {
                                                            username,
                                                            full_name,
                                                        },
                                                        user_id,
                                                        school_id,
                                                    },
                                                    i
                                                ) => (
                                                    <li
                                                        key={i}
                                                        className="mb-2"
                                                    >
                                                        <label className="form-label sm-type-amp">
                                                            {full_name}
                                                        </label>
                                                        <select
                                                            className="form-control"
                                                            value={
                                                                submitPositionResponse.data
                                                                    ? submitPositionResponse.data.insert_student.returning.find(
                                                                          (
                                                                              student
                                                                          ) =>
                                                                              student
                                                                                  .user
                                                                                  .id ===
                                                                              user_id
                                                                      )
                                                                          ?.position
                                                                    : positions[
                                                                          username
                                                                      ]
                                                            }
                                                            disabled={
                                                                !!submitPositionResponse.data
                                                            }
                                                            onChange={({
                                                                target: {
                                                                    value,
                                                                },
                                                            }) =>
                                                                setPositions(
                                                                    (
                                                                        positions
                                                                    ) => [
                                                                        ...positions.filter(
                                                                            (
                                                                                pos
                                                                            ) =>
                                                                                pos.user_id !==
                                                                                user_id
                                                                        ),
                                                                        {
                                                                            user_id,
                                                                            school_id,
                                                                            position:
                                                                                value,
                                                                        },
                                                                    ]
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                defaultChecked
                                                            >
                                                                Select
                                                            </option>
                                                            <option value="chairperson">
                                                                Chair
                                                            </option>
                                                            <option value="vicechairperson">
                                                                Vice-chair
                                                            </option>
                                                            <option value="secretary">
                                                                Secretary
                                                            </option>
                                                            <option value="treasurer">
                                                                Treasurer
                                                            </option>
                                                        </select>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </TaskContainer>
                            </TaskPanel>

                            <SaveSubmitSection
                                submitWorkObj={{
                                    call: () => {
                                        submitPositions({
                                            variables: {
                                                objects:
                                                    Object.values(positions),
                                                stageProgressId,
                                                teamId,
                                                logo,
                                            },
                                        })
                                    },
                                    response: submitPositionResponse,
                                    submitComplete,
                                    setSubmitComplete,
                                }}
                                disableSubmit={
                                    !logo ||
                                    positions.length !==
                                        pageData.team_by_pk?.students.length ||
                                    submitPositionResponse.loading
                                }
                                docSubmitted={submitted}
                            />

                            {submitted && (
                                <div
                                    className="success-holder"
                                    id="filter-container"
                                >
                                    <h4 className="sm-type-bigdrum sm-type-bigdrum--medium">
                                        <span className="side-icon">
                                            <Tick />
                                        </span>{' '}
                                        Success
                                    </h4>
                                    <p>Your roles have been submitted.</p>
                                </div>
                            )}
                            <Link to="/student/team-hub">Back to Team Hub</Link>
                        </div>
                        <div className="col-lg-3">
                            <Helpful content={helpfulInfo.info} />
                            <CheckList items={checklist.item} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage2TaskPage
