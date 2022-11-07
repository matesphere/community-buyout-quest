import React, { useState, useContext, FC } from 'react'
import { Link } from 'gatsby'
import { gql } from '@apollo/client'

import { POSITION_DISPLAY_NAME } from '../utils/common-utils'

import { useAuthQuery } from '../utils/auth-utils'
import { UserStateContext } from '../utils/user-state'

import {
    NavQuery,
    NavQueryVariables,
    NavQuery_team_by_pk_stage_progresses,
} from '../gql/types/NavQuery'

import '../scss/index.scss'

const NAV_QUERY = gql`
    query NavQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            username
            student {
                id
                position
                team {
                    id
                    name
                    stage_progresses(order_by: { stage_id: asc }) {
                        stage_id
                        status
                    }
                }
            }
        }
    }
`

const InformationLinks: FC<{ latestStageID: number }> = ({ latestStageID }) => (
    <div className="dropdown-content">
        <Link to="/information/background-info">Background Info</Link>
        {latestStageID >= 2 && (
            <>
                <Link to="/information/about-glenclas-area">
                    About the Area
                </Link>
                <Link to="/information/community">Community</Link>
                <Link to="/information/about-the-roles">Team Roles</Link>
            </>
        )}
        {latestStageID >= 3 && (
            <>
                <Link to="/information/development-options">
                    Development Options
                </Link>
                <Link to="/information/about-swot">SWOT Analysis</Link>
            </>
        )}
    </div>
)

const StageLinks: FC<{
    stageProgresses: Array<NavQuery_team_by_pk_stage_progresses>
}> = ({ stageProgresses }) => (
    <div className="dropdown-content">
        {stageProgresses.map(({ stage_id, status }, i) => (
            <Link
                key={i}
                className={`${
                    i + 1 === stageProgresses.length ? 'latest' : ''
                }`}
                to={`/student/stage-${stage_id}${
                    (status === 'completed' && '/complete') || ''
                }`}
            >
                Stage {stage_id}
            </Link>
        ))}
    </div>
)

const Nav: FC = () => {
    const { latestStageUnlocked } = useContext(UserStateContext)
    const [expanded, setExpanded] = useState(false)

    const { data } = useAuthQuery<NavQuery, NavQueryVariables>(
        NAV_QUERY,
        { fetchPolicy: 'network-only' },
        'userId'
    )

    const { full_name, username, student } = data?.user_by_pk || {}

    return (
        <>
            <div className="col-lg-8">
                <nav
                    className={`${
                        expanded ? 'show ' : ''
                    } navbar navbar-expand-md navbar-dark `}
                >
                    <div className="navbar--inner">
                        <div className="beaner"></div>

                        <button
                            type="button"
                            className="navbar-toggler"
                            aria-label="Button for navigation menu"
                            onClick={() => {
                                setExpanded(!expanded)
                            }}
                        >
                            <div className="hamburger hamburger--spin js-hamburger ">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarsExampleDefault"
                        >
                            <nav className="nav">
                                <ul>
                                    <li className="dropdown">
                                        <Link
                                            to="/student/team-hub/"
                                            className="dropbtn"
                                        >
                                            Team hub
                                        </Link>
                                    </li>

                                    <li className="dropdown">
                                        <Link to="/help" className="dropbtn">
                                            Help
                                        </Link>
                                        <div className="dropdown-content">
                                            <Link to="/help">Quest Help</Link>
                                            <Link to="/introduction">
                                                Introduction
                                            </Link>
                                        </div>
                                    </li>

                                    <li className="dropdown">
                                        <Link
                                            to="/student/information"
                                            className="dropbtn"
                                        >
                                            Information
                                        </Link>
                                        {data && (
                                            <InformationLinks
                                                latestStageID={
                                                    latestStageUnlocked
                                                }
                                            />
                                        )}
                                    </li>

                                    <li className="dropdown">
                                        <Link
                                            to="/student/team-hub/"
                                            className="dropbtn"
                                        >
                                            Stages
                                            {/*<span className="nav-links-notification"></span>*/}
                                        </Link>
                                        {data && (
                                            <StageLinks
                                                stageProgresses={
                                                    data.user_by_pk?.student
                                                        ?.team.stage_progresses
                                                }
                                            />
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="col-lg-4">
                {data && (
                    <>
                        <p className="sm-type-bigamp mt-4 header-name">
                            {`${full_name} (${username})${
                                student?.position
                                    ? ` - ${
                                          POSITION_DISPLAY_NAME[
                                              student?.position
                                          ]
                                      }`
                                    : ''
                            }`}
                            <br />
                            <span className="sm-type-bigamp--medium">
                                {student.team.name}
                            </span>
                        </p>
                    </>
                )}
            </div>
        </>
    )
}

export default Nav
