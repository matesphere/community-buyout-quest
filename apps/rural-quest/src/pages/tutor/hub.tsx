import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { gql } from '@apollo/client'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'

import { useAuthQuery } from '../../utils/auth-utils'

import {
    TutorHubQuery,
    TutorHubQueryVariables,
} from '../../gql/types/TutorHubQuery'

import '../../scss/index.scss'

const TUTOR_HUB_QUERY = gql`
    query TutorHubQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            full_name
            username
            email
            tutor {
                school {
                    name
                }
                quests {
                    id
                    status
                    started_at
                    completed_at
                    teams {
                        id
                        name
                    }
                }
            }
        }
    }
`

const getDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const PreviousQuestDisplay = ({ quest }) => (
    <>
        <span className="sm-type-bigamp">
            {getDateFromTimestamp(quest.started_at)} -{' '}
            {getDateFromTimestamp(quest.completed_at)}, {quest.teams.length}{' '}
            teams{' '}
        </span>{' '}
        - - <Link to={`/tutor/previous-quest?id=${quest.id}`}>View</Link>
    </>
)

const CurrentQuestDisplay = ({ quest }) => (
    <>
        <span>
            Started on {getDateFromTimestamp(quest.started_at)},{' '}
            {quest.teams.length} teams
        </span>{' '}
    </>
)

const TutorHub = () => {
    const { loading, error, data } = useAuthQuery<
        TutorHubQuery,
        TutorHubQueryVariables
    >(TUTOR_HUB_QUERY, {}, 'userId')

    if (loading) return <Loading />
    if (error || !data)
        return (
            <>
                <Error
                    error={
                        error ||
                        new ApolloError({ errorMessage: 'No data returned!' })
                    }
                />
            </>
        )

    const {
        user_by_pk: {
            full_name: fullName,
            tutor: {
                school: { name: schoolName },
                quests,
            },
        },
    } = data

    const prevQuests = quests.filter((quest) => quest.status === 'complete')
    const currentQuests = quests.filter((quest) => quest.status === 'active')

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Tutor Hub</title>
                <meta name="description" content="The description" />
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="sm-type-drum sm-type-drum--medium mt-4">
                                {fullName}'s Hub
                            </h2>
                            <p className="sm-type-amp">{schoolName}</p>
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                Your Quests
                            </p>

                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Current Quests
                                </p>

                                {currentQuests.length > 0 ? (
                                    <ul>
                                        {currentQuests.map((quest, i) => (
                                            <li
                                                className="sm-type-bigamp"
                                                key={i}
                                            >
                                                <CurrentQuestDisplay
                                                    quest={quest}
                                                />
                                            </li>
                                        ))}
                                        <Link to="/tutor/current-quests">
                                            View current Quests
                                        </Link>
                                    </ul>
                                ) : (
                                    <span>No current Quests</span>
                                )}
                            </div>
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Previous Quests
                                </p>
                                {prevQuests.length > 0 ? (
                                    <ul>
                                        {prevQuests.map((quest, i) => (
                                            <li key={i} className="sm-type-amp">
                                                <PreviousQuestDisplay
                                                    quest={quest}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>No previous Quests</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Start New Quest
                                </p>
                                <Link
                                    className="btn-solid-lg"
                                    to="/tutor/add-students"
                                >
                                    Start a new Quest
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default TutorHub
