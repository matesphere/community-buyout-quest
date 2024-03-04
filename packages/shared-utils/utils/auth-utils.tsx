import axios from 'axios'
import axiosRetry from 'axios-retry'
import gen from 'generate-password'
import { StudentType, TeamType } from './common-types'
import { View, useTheme } from '@aws-amplify/ui-react'
import './login.scss'

axiosRetry(axios, {
    retries: 3, // number of retries
    retryDelay: (retryCount) => {
        console.log(`retry attempt: ${retryCount}`)
        return 1000 // time interval between retries
    },
    retryCondition: (error) => error.response.status !== 200,
})

export const genUsername = (firstName: string, lastName: string) =>
    [firstName.toLowerCase()[0], lastName.toLowerCase()]
        .join('')
        .concat(Math.floor(Math.random() * 99).toString())

export const genPassword = () =>
    gen.generate({
        length: 8,
        lowercase: true,
        uppercase: false,
        numbers: true,
        excludeSimilarCharacters: true,
        strict: true,
    })

export const addStudentToTeam =
    (teamNum: number, { firstName, lastName, email, teamMappingId }: StudentType) =>
        (teams: Array<TeamType>) => {
            const teamsToUpdate = [
                ...teams.map((team) => ({
                    ...team,
                    students: team.students.filter(
                        (student) => student.teamMappingId !== teamMappingId // remove student in case they are switching from one team to another!
                    ),
                })),
            ]

            const updatedStudents = [
                ...teams[teamNum].students,
                { firstName, lastName, email, teamMappingId },
            ]

            const updatedTeam = { ...teams[teamNum], students: updatedStudents }
            teamsToUpdate[teamNum] = updatedTeam

            return teamsToUpdate
        }

export const mergeIdsIntoStudents = (
    teamsWithStudents,
    teamsFromResponse,
    schoolId
) =>
    teamsWithStudents
        .map(({ name, students }) => {
            const teamWithId = {
                name,
                students,
                teamId: teamsFromResponse.find((team) => team.name === name).id,
            }
            return [...teamWithId.students].map((student) => ({
                ...student,
                teamId: teamWithId.teamId,
                schoolId,
            }))
        })
        .flat()

// we need the URL prefix to pass through to the lambda function which creates the users in the DB
export const createStudentsInCognito = async (students, questUrlPrefix) => {
    // TODO: build retry method into promises
    const cognitoPromises = []

    students.forEach(async (student) => {
        const username = genUsername(student.firstName, student.lastName)
        const password = genPassword()

        const body = {
            ClientId: process.env.GATSBY_AWS_APP_CLIENT_ID,
            Username: username,
            Password: password,
            UserAttributes: [
                {
                    Name: 'given_name',
                    Value: student.firstName,
                },
                {
                    Name: 'family_name',
                    Value: student.lastName,
                },
                {
                    Name: 'email',
                    Value: student.email,
                },
                {
                    Name: 'custom:school_id',
                    Value: student.schoolId,
                },
                {
                    Name: 'custom:team_id',
                    Value: student.teamId,
                },
                {
                    Name: 'custom:role',
                    Value: 'student',
                },
            ],
            ClientMetadata: {
                password,
                questUrlPrefix,
            },
        }

        const promise = axios({
            method: 'post',
            url: 'https://cognito-idp.eu-west-1.amazonaws.com/',
            headers: {
                'Content-Type': 'application/x-amz-json-1.1',
                'X-Amz-Target': 'AWSCognitoIdentityProviderService.SignUp',
            },
            data: body,
        })

        cognitoPromises.push(promise)
    })

    return Promise.allSettled(cognitoPromises)
}

const d = new Date()
const year = d.getFullYear()

export const authComponents = {
    SignIn: {
        Header() {
            const { tokens } = useTheme()
            return (
                <>
                    <View textAlign="center" padding={tokens.space.medium}>
                        <div className="login-header">
                            <svg
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m53.6 2.5c1 .3 2 .6 3.1.9 11.6 3.2 18.4 14.9 14.6 26.3-2.5 7.3-6 14.2-9.2 21.2-1.9 4.1-4.2 7.9-6.5 11.8-2.2 3.7-6.6 3.8-8.7.2-5.9-10.1-11.3-20.3-15.5-31.3-5.5-14.6 5.1-27.5 16.6-28.7.2 0 .4-.2.6-.4zm-2.5 31.1c5.4-.1 9.9-4.5 9.9-9.8 0-5.5-4.5-9.9-10.1-9.8-5.4.1-9.8 4.6-9.7 10s4.5 9.7 9.9 9.6z" />
                                <path d="m8.6 71c2.7-5.7 5.4-11.4 7.9-17.2 1-2.4 2.5-3.7 5.2-3.9 2.5-.2 4.9-.7 7.4-1.3 1.3-.3 2 .1 2.5 1.3.7 1.7 1.6 3.3 2.5 5.2-3.1.5-5.9 1.1-8.8 1.5-1.6.2-2.6.8-3.3 2.5-1.5 3.8-3.3 7.4-5.1 11.3.7.4 1.2.8 1.9 1.2 10.6 5.8 21.2 11.7 31.8 17.4 1.1.6 2.7.8 3.9.6 8.6-1.6 17.1-3.4 26.1-5.3-1.5-3.3-2.9-6.4-4.3-9.6-2.7-5.9-2.7-5.9 2.3-10.2 1.6-1.4 3.1-2.7 4.9-4.3-4.9-2.5-9.6-4.8-14.4-7.2 1.1-2.1 2-4.1 3.2-6.3 2.4 1.2 4.7 2.3 6.9 3.4 3.7 1.8 7.3 3.5 10.9 5.5 1.3.7 2.4 2 3.5 3v2c-3.1 2.8-6.2 5.8-9.4 8.5-1.3 1.1-1.6 1.9-.8 3.5 1.9 4 3.7 8 5.4 12.1 1.4 3.2.3 5.2-3 5.9-4.1.9-8.3 1.7-12.5 2.6l-20.7 4.5h-2c-.7-.5-1.4-1.1-2.2-1.5-12.2-6.9-24.4-13.5-36.5-20.3-1.3-.7-2.2-1.9-3.3-2.9z" />
                            </svg>
                            <h1>Community Buyout Quest</h1>
                        </div>
                        <p className="login-p">Sign into your account</p>
                    </View>
                </>
            )
        },
        Footer() {
            const { tokens } = useTheme()
            return (
                <View textAlign="center" padding={tokens.space.medium}>
                    <p>
                        &copy; Copyright MateSphere {year}. All rights reserved.
                    </p>
                </View>
            )
        },
    },
}
