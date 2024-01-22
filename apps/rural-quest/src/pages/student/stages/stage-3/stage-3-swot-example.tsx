import { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import QueryString from 'query-string'
import { ApolloError } from '@apollo/client'

import {
    Loading,
    Error,
    Breadcrumbs,
    SWOT,
} from '@community-land-quest/shared-ui'

import { useAuthQuery } from '@community-land-quest/shared-data/gql/hooks/authQuery'
import { SWOT_EXAMPLE_QUERY } from '@community-land-quest/shared-data/gql/queries'
import {
    SwotExampleQuery,
    SwotExampleQueryVariables,
} from '@community-land-quest/shared-data/gql/types/queries.generated'

import '../../../../scss/index.scss'

const Stage3Swot: FC<PageProps> = ({ location: { search } }) => {
    const { loading, error, data } = useAuthQuery<
        SwotExampleQuery,
        Omit<SwotExampleQueryVariables, 'team_id'>
    >(SWOT_EXAMPLE_QUERY, {}, 'teamId')

    if (loading) return <Loading />
    if (error || !data)
        return (
            <Error
                error={
                    error ||
                    new ApolloError({ errorMessage: 'No data returned!' })
                }
            />
        )

    const { option } = QueryString.parse(search)

    const devOption = data.development_option.find(
        (opt) => opt.option === option
    )
    const swotState =
        data.team_by_pk.stage_progresses[0].documents[0].doc_data[option]

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - Lay the Foundations - SWOT Example</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <Breadcrumbs
                        previous={[
                            {
                                displayName: 'Team Hub',
                                url: '/student/team-hub/',
                            },
                            {
                                displayName: 'Stage 3',
                                url: '/student/stage-3/',
                            },
                        ]}
                        currentDisplayName="Example SWOT Analysis"
                    />
                    <SWOT
                        swotTitle="Example SWOT Analysis"
                        teamDevOption={{ development_option: devOption }}
                        swotState={swotState}
                        docSubmitted={true}
                    />
                    <Link to="/student/stage-3">Back to Stage 3</Link>
                </section>
            </main>
        </>
    )
}

export default Stage3Swot
