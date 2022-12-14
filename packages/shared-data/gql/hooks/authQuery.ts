import { useContext } from 'react'
import { useQuery, DocumentNode, QueryHookOptions } from '@apollo/client'

import { UserStateContext } from '../../contexts/user-state'

type QueryProps<TVariables> = TVariables & { userId?: string, teamId?: string }

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

    // TODO: this is stupid, TS should definitely be able to do this

    let variables = options?.variables || null

    // if (options && options.variables) {
    //     variables = options.variables
    // }

    if (idRequired === 'userId') {
        variables = { ...variables, user_id: userId }
    }

    if (idRequired === 'teamId') {
        variables = { ...variables, team_id: teamId }
    }

    const queryProps = useQuery<TData, QueryProps<TVariables>>(query, {
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
