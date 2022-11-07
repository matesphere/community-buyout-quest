import React, { useContext } from 'react'
import {
    useQuery,
    useMutation,
    DocumentNode,
    QueryHookOptions,
    BaseMutationOptions,
} from '@apollo/client'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import gen from 'generate-password'

import { UserStateContext } from './user-state'
import { useLogging } from './common-utils'

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

interface TeamType {
    name: string
    students: Array<StudentType>
}

interface StudentType {
    firstName: string
    lastName: string
    email: string
}

export const addStudentToTeam =
    (teamNum: number, { firstName, lastName, email }: StudentType) =>
    (teams: Array<TeamType>) => {
        const teamsToUpdate = [
            ...teams.map((team) => ({
                ...team,
                students: team.students.filter(
                    (student) => student.email !== email // remove student in case they are switching from one team to another!
                ),
            })),
        ]

        const updatedStudents = [
            ...teams[teamNum].students,
            { firstName, lastName, email },
        ]

        const updatedTeam = { ...teams[teamNum], students: updatedStudents }
        teamsToUpdate[teamNum] = updatedTeam

        return teamsToUpdate
    }

export const useAuthQuery = <TData, TVariables>(
    query: DocumentNode,
    options: QueryHookOptions<TData, TVariables>,
    idRequired?: 'userId' | 'teamId'
) => {
    const {
        userInfo: { userId, teamId, token },
        tokenIsValid,
        refreshToken,
    } = useContext(UserStateContext)

    if (token && !tokenIsValid(token)) {
        refreshToken()
    }

    let variables = options?.variables || null

    if (idRequired === 'userId') {
        variables = { ...variables, user_id: userId }
    }

    if (idRequired === 'teamId') {
        variables = { ...variables, team_id: teamId }
    }

    const queryProps = useQuery<TData, TVariables>(query, {
        ...options,
        variables,
        context: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        skip: !token,
    })

    return { ...queryProps }
}

export const useAuthMutation = <TData, TVariables>(
    query: DocumentNode,
    refetchObj?: {
        query: DocumentNode
        variables: any
        idRequired?: 'userId' | 'teamId'
    },
    onCompleteCallback?: () => void
    // options?: BaseMutationOptions<TData, TVariables>
) => {
    const {
        userInfo: { token, userId, teamId },
        tokenIsValid,
        refreshToken,
    } = useContext(UserStateContext)

    const { log } = useLogging('auth-mutation')

    if (token && !tokenIsValid(token)) {
        refreshToken()
    }

    let mutationOptions: BaseMutationOptions<TData, TVariables> = {
        // ...options,
        context: { headers: { Authorization: `Bearer ${token}` } },
    }

    if (refetchObj) {
        let refetchVars = {
            ...refetchObj.variables,
        }

        if (refetchObj.idRequired === 'userId') {
            refetchVars = { ...refetchVars, user_id: userId }
        }

        if (refetchObj.idRequired === 'teamId') {
            refetchVars = { ...refetchVars, team_id: teamId }
        }

        const refetch = {
            query: refetchObj.query,
            variables: refetchVars,
            context: { headers: { Authorization: `Bearer ${token}` } },
        }

        mutationOptions = {
            ...mutationOptions,
            refetchQueries: [refetch],
        }
    }

    const [mutation, mutationResponse] = useMutation<TData, TVariables>(query, {
        onCompleted: onCompleteCallback,
        onError: ({ name, networkError, graphQLErrors, extraInfo }) =>
            log({
                loglevel: 'ERROR',
                action: query.definitions[0]?.name?.value,
                attributes: {
                    error: {
                        name,
                        networkError,
                        graphQLErrors,
                        extraInfo,
                    },
                    query: JSON.stringify(query),
                },
            }),
    })

    const callMutation = async (vars) => {
        // console.log({ ...mutationOptions, ...vars })
        mutation({ ...mutationOptions, ...vars })
    }

    return [callMutation, mutationResponse] as const
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

export const createStudentsInCognito = async (students) => {
    // TODO: build retry method into promises
    const cognitoPromises = []

    students.forEach(async (student) => {
        const username = genUsername(student.firstName, student.lastName)
        const password = genPassword()

        const body = {
            ClientId: '45r6i1n1n655isehsq2spbk0me',
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

export const authComponents = {
    SignIn: {
        Footer() {
            return <div />
        },
    },
}
