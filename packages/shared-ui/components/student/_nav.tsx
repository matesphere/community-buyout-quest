import { useState, useContext, FC } from 'react'
import { Link } from 'gatsby'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { UserStateContext } from '@community-land-quest/shared-data/contexts/user-state'
import { POSITION_DISPLAY_NAME } from '@community-land-quest/shared-utils/utils/common-utils'

import { NAV_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    NavQuery,
    NavQueryVariables,
    // NavQuery_team_by_pk_stage_progresses,
} from '@community-land-quest/shared-data/gql/types/NavQuery'

const InformationLinks: FC<{ latestStageID: number }> = ({ latestStageID }) => (
    <div className="dropdown-content">
        <Link to="/information/background-info">Background Info</Link>
        {latestStageID >= 2 && (
            <>
                <Link to="/information/about-the-area">About the Area</Link>
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
    stageProgresses: Array<any>
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

export const Nav: FC = () => {
    const {
        latestStageUnlocked,
        userInfo: { role },
    } = useContext(UserStateContext)
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
                        {role === 'student' ? (
                            <p className="sm-type-bigamp mt-2 header-name">
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
                        ) : (
                            <p className="sm-type-bigamp mt-2 header-name">
                                VIEWING AS STUDENT
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
