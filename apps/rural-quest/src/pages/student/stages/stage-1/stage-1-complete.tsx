import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../../../../components/common/Loading'
import { Error } from '../../../../components/common/Error'
import { Breadcrumbs } from '../../../../components/common/Breadcrumbs'
import { FeedbackDisplay } from '../../../../components/common/FeedbackDisplay'
import { InfoBlock } from '../../../../components/student/InfoBlock'

import { useAuthQuery } from '../../../../utils/auth-utils'
import { DOCUMENT_COMPLETE_QUERY } from '../../../../gql/queries'
import {
    DocumentCompleteQuery,
    DocumentCompleteQueryVariables,
} from '../../../../gql/types/DocumentCompleteQuery'

import TickSheet from '../../../../assets/tick-sheet.svg'

import '../../../../scss/index.scss'

const Stage1CompletePage = () => {
    const {
        image1: { childImageSharp },
        graphCmsStageTask: { title, questions },
    } = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "congratulations.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            graphCmsStageTask(stageNumber: { eq: 1 }) {
                title
                questions {
                    raw
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
        { variables: { stage_id: 1, includeDevOptions: false } },
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

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Stage 1 - {title} - Complete</title>
                <meta name="description" content="The description" />
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
                                currentDisplayName="Stage 1"
                            />

                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4">
                                {title}
                            </h2>

                            <div className="mt-4 mb-4 image-holder">
                                <GatsbyImage
                                    alt=""
                                    image={childImageSharp.gatsbyImageData}
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
                                    <h4 className="sm-type-drum sm-type-drum--medium">
                                        Questions
                                    </h4>
                                    <ol>
                                        {questions.map((question, i) => (
                                            <li key={i}>
                                                <InfoBlock items={[question]} />
                                                <p
                                                    className="sm-type-amp mb-4"
                                                    dangerouslySetInnerHTML={{
                                                        __html: doc.doc_data[i],
                                                    }}
                                                />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Stage1CompletePage
