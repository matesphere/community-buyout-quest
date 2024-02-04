import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { ApolloError } from '@apollo/client'

import { Loading, Error } from '@community-land-quest/shared-ui'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { TUTOR_HUB_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    TutorHubQuery,
    TutorHubQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import '../../scss/index.scss'

const getDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const PreviousGroupDisplay = ({
    group: { id, name, started_at, completed_at, teams },
}) => (
    <>
        {name ? <span className="sm-type-bigamp">{name}, </span> : null}
        <span className="sm-type-bigamp">
            {getDateFromTimestamp(started_at)} -{' '}
            {getDateFromTimestamp(completed_at)}, {teams.length} teams{' '}
        </span>{' '}
        - <Link to={`/tutor/previous-group?id=${id}`}>View</Link>
    </>
)

const CurrentGroupDisplay = ({ group: { name, started_at, teams } }) =>
    name ? (
        <>
            <span>
                {name}, started on {getDateFromTimestamp(started_at)},{' '}
                {teams.length} teams
            </span>{' '}
        </>
    ) : (
        <>
            <span>
                Started on {getDateFromTimestamp(started_at)}, {teams.length}{' '}
                teams
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
            // full_name: fullName,
            tutor: {
                school: { name: schoolName },
                quests,
            },
        },
    } = data

    const prevGroups = quests.filter((group) => group.status === 'complete')
    const activeGroups = quests.filter((group) => group.status === 'active')

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
                                {schoolName}
                            </h2>
                            <p className="sm-type-amp">
                                Community Buyout Quest - Rural
                            </p>
                            <p className="sm-type-guitar sm-type-guitar--medium mt-4">
                                Your Groups
                            </p>

                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Currently Active Groups
                                </p>

                                {activeGroups.length > 0 ? (
                                    <ul>
                                        {activeGroups.map((group, i) => (
                                            <li
                                                className="sm-type-bigamp"
                                                key={i}
                                            >
                                                <CurrentGroupDisplay
                                                    group={group}
                                                />
                                            </li>
                                        ))}
                                        <Link to="/tutor/current-groups">
                                            View active groups
                                        </Link>
                                    </ul>
                                ) : (
                                    <span>No active groups</span>
                                )}
                            </div>
                            <div className="side-grey mb-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Previous Groups
                                </p>
                                {prevGroups.length > 0 ? (
                                    <ul>
                                        {prevGroups.map((group, i) => (
                                            <li key={i} className="sm-type-amp">
                                                <PreviousGroupDisplay
                                                    group={group}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>No previous groups</span>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="side-grey mb-2 mt-2">
                                <p className="sm-type-lead sm-type-lead--medium">
                                    Start a new group on the Quest!
                                </p>
                                <Link
                                    className="btn-solid-lg"
                                    to="/tutor/add-students"
                                >
                                    NEW QUEST GROUP
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
