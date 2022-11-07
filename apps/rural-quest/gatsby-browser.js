import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './src/apollo/client'

import { LocationProvider } from '@reach/router'
import { Authenticator, View } from '@aws-amplify/ui-react'
import { UserStateProvider } from './src/utils/user-state'

import { Amplify, Auth } from 'aws-amplify'

export const onClientEntry = () => {
    Amplify.configure({
        Auth: {
            region: process.env.GATSBY_AWS_REGION,
            userPoolId: process.env.GATSBY_AWS_USER_POOL_ID,
            userPoolWebClientId: process.env.GATSBY_AWS_APP_CLIENT_ID,
            mandatorySignIn: false,
            authenticationFlowType: 'USER_PASSWORD_AUTH',

            // TODO if we can figure out httpOnly cookies we'll get WS auth for free
            // OPTIONAL - Configuration for cookie storage
            // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
            // cookieStorage: {
            //     // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            //     domain: 'localhost',
            //     // OPTIONAL - Cookie path
            //     path: '/',
            //     // OPTIONAL - Cookie expiration in days
            //     expires: 365,
            //     // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            //     sameSite: 'strict',
            //     // OPTIONAL - Cookie secure flag
            //     // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            //     secure: false, // TODO change to true on deploy
            // },
        },
    })

    Auth.configure({
        Auth: {
            region: process.env.GATSBY_AWS_REGION,
            userPoolId: process.env.GATSBY_AWS_USER_POOL_ID,
            userPoolWebClientId: process.env.GATSBY_AWS_APP_CLIENT_ID,
            mandatorySignIn: false,
            authenticationFlowType: 'USER_PASSWORD_AUTH',
        },
    })
}

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>
        <LocationProvider>
            <Authenticator.Provider>
                <View>
                    <UserStateProvider>{element}</UserStateProvider>
                </View>
            </Authenticator.Provider>
        </LocationProvider>
    </ApolloProvider>
)
