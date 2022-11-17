import { useContext } from 'react'
import { useMutation, DocumentNode, BaseMutationOptions } from '@apollo/client'
import { useLogging } from '@community-land-quest/shared-utils/utils/common-utils'

import { UserStateContext } from '../../contexts/user-state'

export interface RefetchObj {
    query: DocumentNode
    variables: any
    idRequired?: 'userId' | 'teamId'
}

export const useAuthMutation = <TData, TVariables>(
    query: DocumentNode,
    refetchObj?: RefetchObj,
    onCompleteCallback?: () => void
    // options?: BaseMutationOptions<TData, TVariables>
) => {
    const {
        userInfo: { token, userId, teamId, username, role, schoolId },
        tokenIsValid,
        refreshToken,
    } = useContext(UserStateContext)

    const { log } = useLogging({
        component: 'auth-mutation',
        userInfo: { username, role, userId, schoolId },
    })

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
