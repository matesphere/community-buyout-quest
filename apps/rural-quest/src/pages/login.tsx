import React, { useContext } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { gql } from '@apollo/client'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Helmet } from 'react-helmet'
import { ApolloError } from '@apollo/client'

import { Loading } from '../components/common/Loading'
import { Error } from '../components/common/Error'

import { useAuthQuery, authComponents } from '../utils/auth-utils'
import { UserStateContext } from '../utils/user-state'

import Squiggle from '../assets/squiggle.svg'
import PinLogo from '../assets/pin-logo.svg'

import '../scss/index.scss'

import {
    LoggedInQuery,
    LoggedInQueryVariables,
} from '../gql/types/LoggedInQuery'
import { GatsbyImage } from 'gatsby-plugin-image'

const LOGGED_IN_QUERY = gql`
    query LoggedInQuery($user_id: uuid!) {
        user_by_pk(id: $user_id) {
            id
            first_name
            student {
                id
                team {
                    id
                    students {
                        id
                        user {
                            id
                            times_logged_in
                        }
                    }
                }
            }
        }
    }
`

const AdminLinks = () => (
    <>
        <Link to="/tutor/hub" className="btn-solid-reg">
            Go to your Tutor Hub
        </Link>
        <Link to="/student/team-hub" className="btn-solid-reg">
            View Quest as student
        </Link>
    </>
)

const TutorLink = () => (
    <Link to="/tutor/hub" className="btn-solid-reg">
        Go to Tutor Hub
    </Link>
)

const StudentLink = () => (
    <Link to="/student/team-hub" className="btn-solid-reg">
        Go to Team Hub
    </Link>
)

const NewStudentLink = () => (
    <Link to="/introduction" className="btn-solid-reg">
        Begin the Quest
    </Link>
)

const getLink = (role: string, teamHasLoggedIn: boolean) => {
    if (role === 'admin') {
        return <AdminLinks />
    }

    if (role === 'tutor') {
        return <TutorLink />
    }

    if (!teamHasLoggedIn) {
        return <NewStudentLink />
    }

    return <StudentLink />
}

const Login = () => {
    const {
        userInfo: { role },
    } = useContext(UserStateContext)

    const { loading, error, data } = useAuthQuery<
        LoggedInQuery,
        LoggedInQueryVariables
    >(LOGGED_IN_QUERY, { fetchPolicy: 'network-only' }, 'userId')

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

    const data1 = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            image2: file(relativePath: { eq: "indexpage.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
        }
    `)

    const { first_name } = data.user_by_pk

    const teamHasLoggedIn = data.user_by_pk?.student?.team.students.some(
        (student) => student.user.times_logged_in > 1 || null
    )

    return (
        <>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Community Land Quest</title>
                <meta name="description" content="The description" />
                {/*<meta name="image" content={image} />*/}
            </Helmet>
            <div className="top-holder">
                <div className="indeximage">
                    <GatsbyImage
                        alt=""
                        image={data1.image2.childImageSharp.gatsbyImageData}
                    />
                </div>
                <Squiggle className="squiggle" />
                <section className="container top-section">
                    <div className="row pt-4">
                        <div className="col-lg-8">
                            <h1 className="main-header">
                                <PinLogo />
                                <span>Community Land Quest</span>
                            </h1>
                        </div>
                        <div className="col-lg-4">
                            <div className="cls-logo">
                                <GatsbyImage
                                    alt=""
                                    image={
                                        data1.file.childImageSharp
                                            .gatsbyImageData
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <main className="homepage">
                <section className="container" id="main">
                    <div className="row mt-4">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 index-holder">
                            <h2 className="sm-type-biggerdrum sm-type-biggerdrum--medium mt-4 text-align-center">
                                Hello, {first_name}!
                            </h2>
                            {role !== 'tutor' && (
                                <p className="sm-type-drum text-align-center">
                                    {`Welcome ${
                                        teamHasLoggedIn ? 'back' : ''
                                    } to the Community Land Quest`}
                                </p>
                            )}
                            <p className="text-align-center mb-4">
                                {getLink(role, teamHasLoggedIn)}
                            </p>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default withAuthenticator(Login, {
    hideSignUp: true,
    components: authComponents,
})
