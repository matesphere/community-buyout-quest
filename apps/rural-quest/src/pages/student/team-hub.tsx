import React, { FC, useContext, useEffect } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { gql } from '@apollo/client'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'

import { useAuthQuery } from '../../utils/auth-utils'
import { POSITION_DISPLAY_NAME } from '../../utils/common-utils'
import { UserStateContext } from '../../utils/user-state'

import {
    TeamHubQuery,
    TeamHubQueryVariables,
} from '../../gql/types/TeamHubQuery'

import Lock from '../../assets/lock.svg'
import Ticktrbl from '../../assets/tick-trbl.svg'
import Ticktrbl2 from '../../assets/tick-trbl2.svg'
import Ticktlbr from '../../assets/tick-tlbr.svg'
import Ticklr from '../../assets/tick-lr.svg'
import Ticklr2 from '../../assets/tick-lr2.svg'
import Tickrl from '../../assets/tick-rl.svg'
import Tickrl2 from '../../assets/tick-rl2.svg'
import Ticktb1 from '../../assets/tick-tp1.svg'
import Ticktb2 from '../../assets/tick-tp2.svg'
import Ticktb3 from '../../assets/tick-tp3.svg'
import Ticktb4 from '../../assets/tick-tp4.svg'
import Tick from '../../assets/tick.svg'

import '../../scss/index.scss'

const TEAM_HUB_QUERY = gql`
    query TeamHubQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            student {
                id
                team {
                    id
                    name
                    logo
                    stage_progresses(order_by: { stage_id: asc }) {
                        id
                        stage_id
                        status
                        documents(order_by: { id: asc }) {
                            status
                        }
                    }
                    students {
                        id
                        position
                        user {
                            id
                            full_name
                        }
                    }
                    team_development_options(
                        order_by: { development_option: { id: asc } }
                    ) {
                        id
                        shortlist
                        team_choice_name
                        development_option {
                            id
                            display_name
                            option
                        }
                    }
                }
            }
        }
        stage(order_by: { id: asc }) {
            id
            title
        }
    }
`

const TEAM_HUB_SUB = gql`
    subscription TeamHubSub($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            student {
                team {
                    name
                    stage_progresses {
                        stage_id
                        status
                    }
                    students {
                        user {
                            full_name
                        }
                    }
                    team_development_options {
                        shortlist
                        development_option {
                            id
                            display_name
                            option
                        }
                    }
                }
            }
        }
    }
`

const getStageClasses = (stageStatus, docStatus) => {
    switch (stageStatus) {
        case 'unlocked':
            if (docStatus === 'submitted') return 'quest-step-submitted'
            else return 'quest-step-unlocked quest-step-highlight'
        case 'submitted':
            return 'quest-step-submitted'
        case 'completed':
            return 'quest-step-complete'
        default:
            return ''
    }
}

const StageButton = ({ id, title, stageStatus, docStatus }) => (
    <div className={`quest-step ${getStageClasses(stageStatus, docStatus)}`}>
        <div className="quest-step-text">
            <Link
                to={
                    stageStatus === 'completed'
                        ? `/student/stage-${id}/complete`
                        : `/student/stage-${id}`
                }
            >
                <span className="quest-step-number">
                    {stageStatus === 'locked' ? <Lock /> : id}
                </span>
                <div>
                    {title.toUpperCase()}
                    {stageStatus === 'completed' && (
                        <span className="greenlight-highlight sm-type-amp">
                            <br />
                            Completed
                        </span>
                    )}
                    {((stageStatus === 'unlocked' &&
                        docStatus === 'submitted') ||
                        stageStatus === 'submitted') && (
                        <span className="redorange-highlight sm-type-amp">
                            <br />
                            Submitted
                        </span>
                    )}
                    {stageStatus === 'unlocked' && docStatus !== 'submitted' && (
                        <span className="orange-highlight sm-type-amp">
                            <br />
                            Unlocked
                        </span>
                    )}
                </div>
                {stageStatus === 'completed' && (
                    <span className="medium-icon">
                        <Tick />
                    </span>
                )}
            </Link>
        </div>
    </div>
)

const TeamInfoSection = ({
    fullName,
    teamName,
    students,
    devOptions,
    image,
}) => (
    <>
        <div className="container mt-4 side-grey">
            <div className="row mb-2">
                <div className="col-lg-6">
                    <h1 className="sm-type-biggerdrum sm-type-biggerdrum--medium">
                        {teamName}
                    </h1>
                </div>
                <div className="col-lg-6 mt-2">
                    <span className="sm-type-drum loggedin">
                        Logged in as{' '}
                        <span className="sm-type-drum--medium">{`${fullName}`}</span>
                    </span>
                </div>
            </div>

            {/*<div className="row mt-2 mb-4">*/}
            {/*    <div className="col-lg-2"></div>*/}
            {/*    <div className="col-lg-8">*/}
            {/*        <p className="notification-alert sm-type-lead">*/}
            {/*            ! You have a notification, check your current stage for*/}
            {/*            feedback.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className="col-lg-2"></div>*/}
            {/*</div>*/}

            <div className="row">
                <div className="col-lg-4">
                    <div className="form-holder-border">
                        <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                            Members:
                        </p>
                        <ul>
                            {students.map((student, i) => (
                                <li key={i}>
                                    <p className="sm-type-lead">
                                        <span>{student.user.full_name}</span>
                                        {student.position && (
                                            <span>
                                                <i>
                                                    {` - ${
                                                        POSITION_DISPLAY_NAME[
                                                            student.position
                                                        ]
                                                    }`}
                                                </i>
                                            </span>
                                        )}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {image && (
                    <div className="col-lg-3">
                        <div className="form-holder-border">
                            <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                                Team logo:
                            </p>
                            <GatsbyImage alt="" image={image} />
                        </div>
                    </div>
                )}

                {devOptions.length > 0 && (
                    <div className="col-lg-5">
                        <div className="form-holder-border">
                            <p className="sm-type-lead sm-type-lead--medium greendark-highlight mb-2">
                                Development Options:
                            </p>
                            <ol>
                                {devOptions.map(
                                    (
                                        {
                                            shortlist,
                                            team_choice_name,
                                            development_option: {
                                                display_name,
                                            },
                                        },
                                        i
                                    ) => (
                                        <li
                                            key={i}
                                            className="sm-type-bigamp mb-2"
                                        >
                                            {team_choice_name
                                                ? `Team Choice - ${team_choice_name}`
                                                : display_name}{' '}
                                            {shortlist && (
                                                <span className="shortlist-tick">
                                                    <Tick />
                                                </span>
                                            )}
                                        </li>
                                    )
                                )}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
)

const TeamHub: FC = () => {
    const imageData = useStaticQuery(graphql`
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
        }
    `)

    const { latestStageUnlocked, setLatestStageUnlocked } =
        useContext(UserStateContext)

    const {
        loading,
        error,
        data: pageData,
        // subscribeToMore,
    } = useAuthQuery<TeamHubQuery, TeamHubQueryVariables>(
        TEAM_HUB_QUERY,
        { fetchPolicy: 'network-only', pollInterval: 2000 },
        'userId'
    )

    useEffect(() => {
        const stageProgresses =
            pageData?.user_by_pk?.student?.team?.stage_progresses

        if (stageProgresses && stageProgresses.length !== latestStageUnlocked) {
            setLatestStageUnlocked(stageProgresses.length)
        }
    }, [pageData])

    // TODO: sort out passing dynamic auth token to subscription: https://github.com/apollographql/apollo-server/issues/1505 https://github.com/apollographql/apollo-link/issues/197
    // subscribeToMore({
    //     document: TEAM_HUB_SUB,
    //     variables: {
    //         user_id: userId,
    //     },
    //     context: {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     },

    //     updateQuery: (prev, { subscriptionData }) => {
    //         if (!subscriptionData.data) return prev

    //         // TODO big check whether status of any stages has actually changed
    //         // const stageProgressesWithStatus =
    //         //     subscriptionData.data.user[0].student.team.stage_progresses

    //         // if (subscriptionData.)

    //         return {
    //             ...prev,
    //             user: [
    //                 {
    //                     ...subscriptionData.data.user_by_pk[0],
    //                 },
    //             ],
    //         }
    //     },
    // })

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
        full_name: fullName,
        student: {
            team: {
                logo,
                name: teamName,
                stage_progresses: stageProgresses,
                students,
                team_development_options: devOptions,
            },
        },
    } = pageData.user_by_pk

    const stages = pageData.stage.map((stage) => {
        const stageProgress = stageProgresses.find(
            (sp) => sp.stage_id === stage.id
        )
        const stageStatus = stageProgress?.status || 'locked'
        const docStatus = stageProgress?.documents[0]?.status || ''

        return <StageButton {...{ ...stage, stageStatus, docStatus }} />
    })

    const teamLogo = getImage(
        imageData.allFile.edges.find(({ node: { name } }) => name === logo)
            ?.node
    )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Team Hub</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <TeamInfoSection
                                fullName={fullName}
                                teamName={teamName}
                                students={students}
                                devOptions={devOptions}
                                image={teamLogo || null}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <p className="sm-type-guitar mb-4">
                                Your progress towards a community land buyout.
                                Completing each stage will allow you to move
                                onto the next. Remember to work as a team!
                            </p>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row step">
                        <div className="col-lg-2">&nbsp;</div>
                        <div className="col-lg-4">{stages[0]}</div>
                        <div className="col-lg-2">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticklr />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb1 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4">{stages[1]}</div>
                    </div>
                    <div className="row step step-reverse">
                        <div className="col-lg-2 step-reverse-1">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticktrbl />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb2 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-2">
                            {stages[2]}
                        </div>
                        <div className="col-lg-2 step-reverse-3">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Tickrl2 />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb3 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-4">
                            {stages[3]}
                        </div>
                    </div>
                    <div className="row step">
                        <div className="col-lg-2">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticktlbr />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb4 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4">{stages[4]}</div>
                        <div className="col-lg-2">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticklr2 />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb1 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4">{stages[5]}</div>
                    </div>
                    <div className="row step step-reverse">
                        <div className="col-lg-2 step-reverse-1">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Ticktrbl2 />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb2 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-2">
                            {stages[6]}
                        </div>
                        <div className="col-lg-2 step-reverse-3">
                            <span className="hide-on-narrow">
                                <span className="ticktrbl">
                                    <Tickrl />
                                </span>
                            </span>
                            <span className="hide-on-wide">
                                <span className="tickttb">
                                    <Ticktb3 />
                                </span>
                            </span>
                        </div>
                        <div className="col-lg-4 step-reverse-4">
                            {stages[7]}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default TeamHub
