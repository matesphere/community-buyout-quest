import { useContext } from 'react'
import { useQuery, DocumentNode, QueryHookOptions } from '@apollo/client'

import { UserStateContext } from './user-state'

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
