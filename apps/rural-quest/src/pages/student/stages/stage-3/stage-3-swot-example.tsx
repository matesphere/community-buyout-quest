import React, { FC } from 'react'
import { Link, PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import QueryString from 'query-string'
import { gql } from '@apollo/client'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { SWOT } from '../../../../components/common/stages/SWOT'

import { useAuthQuery } from '../../../../utils/auth-utils'

import {
    SwotExampleQuery,
    SwotExampleQueryVariables,
} from '../../../../gql/types/SwotExampleQuery'

import '../../../../scss/index.scss'

interface SwotType {
    strengths: string
    weaknesses: string
    opportunities: string
    threats: string
}

const SWOT_EXAMPLE_QUERY = gql`
    query SwotExampleQuery($team_id: uuid!) {
        team_by_pk(id: $team_id) {
            id
            stage_progresses(where: { stage_id: { _eq: 3 } }) {
                documents(
                    where: {
                        _or: [
                            { status: { _eq: draft } }
                            { status: { _eq: submitted } }
                        ]
                    }
                ) {
                    doc_data
                }
            }
        }
        development_option {
            option
            display_name
        }
    }
`

const Stage3Swot: FC<PageProps> = ({ location: { search } }) => {
    const { loading, error, data } = useAuthQuery<
        SwotExampleQuery,
        SwotExampleQueryVariables
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
