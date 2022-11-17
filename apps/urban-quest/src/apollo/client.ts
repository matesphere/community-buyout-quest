import fetch from 'cross-fetch'
import {
    ApolloClient,
    // ApolloLink,
    InMemoryCache,
    HttpLink,
    // from,
    // split,
} from '@apollo/client'
import { fromPromise } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { Auth } from 'aws-amplify'

// import { WebSocketLink } from '@apollo/client/link/ws'
// import { getMainDefinition } from '@apollo/client/utilities'
// import ws from 'ws'

// const wsForNode = typeof window === 'undefined' ? ws : null

// const wsLink = new WebSocketLink({
//     uri: `wss://clq.beanmate.coffee/v1/graphql`,
//     options: {
//         reconnect: false,
//         // connectionParams: {
//         //     headers: {
//         //         'x-hasura-access-key': 'community-land',
//         //     },
//         // },
//     },
//     webSocketImpl: wsForNode,
// })

// export const subClient = new ApolloClient({
//     link: split(
//         ({ query }) => {
//             const { kind, operation } = getMainDefinition(query)
//             return (
//                 kind === 'OperationDefinition' && operation === 'subscription'
//             )
//         },
//         wsLink,
//         new HttpLink({
//             uri: 'https://clq.beanmate.coffee/v1/graphql',
//             fetch,
//             fetchOptions: {
//                 credentials: 'same-origin',
//             },
//         })
//     ),
//     cache: new InMemoryCache(),
// })

const refreshTokenLink = onError(({ graphQLErrors, operation, forward }) => {
    if (
        graphQLErrors &&
        graphQLErrors.some(
            ({ extensions }) => extensions?.code === 'invalid-jwt'
        )
    ) {
        return fromPromise(Auth.currentSession().then(() => forward(operation)))
    }
})

export const client = new ApolloClient({
    link: refreshTokenLink.concat(
        new HttpLink({
            uri: 'https://clq.beanmate.coffee/v1/graphql',
            fetch,
            fetchOptions: {
                credentials: 'same-origin',
            },
        })
    ),
    cache: new InMemoryCache(),
})
