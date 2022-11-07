import React, { FC } from 'react'
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { SwotLinks } from './stage-3-landing'
import { FeedbackDisplay } from '../../../../components/common/FeedbackDisplay'

import { useAuthQuery } from '../../../../utils/auth-utils'
import { DOCUMENT_COMPLETE_QUERY } from '../../../../gql/queries'
import {
    DocumentCompleteQuery,
    DocumentCompleteQueryVariables,
} from '../../../../gql/types/DocumentCompleteQuery'

import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const Stage3CompletePage: FC<PageProps> = ({ location: { search } }) => {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "congratulations.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const {
        loading,
        error,
        data: pageData,
    } = useAuthQuery<DocumentCompleteQuery, DocumentCompleteQueryVariables>(
        DOCUMENT_COMPLETE_QUERY,
        { variables: { stage_id: 3, includeDevOptions: true } },
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

    const doc = pageData.team_by_pk.stage_progresses[0].documents[0]
    const devOptions = pageData.team_by_pk.team_development_options

    const { title: stageTitle } = pageData.stage_by_pk

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 3 - {stageTitle} - Complete</title>
            </Helmet>

            <main className="the-quest">
                <section className="container" id="main">
                    <div className="row">
                        <div className="col-lg-12">
                            <Breadcrumbs
                                previous={[
                                    {
                                        displayName: 'Team Hub',
                                        url: '/student/team-hub/',
                                    },
                                ]}
                                currentDisplayName="Stage 3"
                            />
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                Lay The Foundations
                            </h2>
                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data.image1.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>

                            <div className="side-grey">
                                <h3 className="task ticker mb-2">
                                    <span className="ticker-sheet">
                                        <TickSheet />
                                    </span>
                                    <span className="sm-type-drum">
                                        Task complete:
                                    </span>
                                </h3>

                                {doc.feedback && (
                                    <FeedbackDisplay feedback={doc.feedback} />
                                )}

                                <div className="form-holder-border">
                                    <SwotLinks devOptions={devOptions} />
                                </div>

                                {/* {devOptions.map((opt) => (
                                    <SWOT
                                        devOption={opt.development_option}
                                        swotState={
                                            doc.doc_data[opt.development_option.option]
                                        }
                                        docSubmitted={true}
                                    />
                                ))} */}
                            </div>

                            <p className="sm-type-amp">
                                <Link to="/student/team-hub">
                                    Back to Team Hub
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage3CompletePage
