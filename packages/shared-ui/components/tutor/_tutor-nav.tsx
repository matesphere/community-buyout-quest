import { useState } from 'react'
import { Link } from 'gatsby'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { TUTOR_NAV_QUERY } from '@community-land-quest/shared-data/gql/queries'

export const TutorNav = ({ hubLinkOnly }: { hubLinkOnly?: boolean }) => {
    const [expanded, setExpanded] = useState(false)
    const { data } = useAuthQuery<any, any>(
        TUTOR_NAV_QUERY,
        { fetchPolicy: 'network-only' },
        'userId'
    )
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
                                            to="/tutor/hub"
                                            className="dropbtn"
                                        >
                                            Tutor hub
                                        </Link>
                                    </li>
                                    {!hubLinkOnly && (
                                        <>
                                            <li className="dropdown">
                                                <Link
                                                    to="/tutor/current-groups"
                                                    className="dropbtn"
                                                >
                                                    Active Groups
                                                </Link>
                                            </li>
                                            <li className="dropdown">
                                                <p className="dropbtn">Help</p>
                                                <div className="dropdown-content">
                                                    <Link to="/tutor/tu tor-guide">
                                                        Tutor guide
                                                    </Link>
                                                    <Link to="/tutor/technical-guide">
                                                        Technical guide
                                                    </Link>
                                                    <Link to="/tutor/assessment">
                                                        Assessment
                                                    </Link>
                                                    <Link to="/tutor/team-assessment">
                                                        Team Assessment
                                                    </Link>
                                                </div>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="col-lg-4">
                {data && (
                    <>
                        <p className="sm-type-bigamp mt-2 header-name">
                            {data.user_by_pk.tutor.school.name}
                        </p>
                    </>
                )}
            </div>
        </>
    )
}
