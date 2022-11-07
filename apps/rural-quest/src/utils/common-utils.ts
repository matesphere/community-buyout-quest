import { useContext } from 'react'
import fetch from 'cross-fetch'
import moment from 'moment'
import { UserStateContext } from './user-state'

interface LogProps {
    loglevel: 'ERROR' | 'WARN' | 'INFO'
    action: string
    attributes?: {
        [key: string]: string | object
    }
}

export const useLogging = (component: string) => {
    const {
        userInfo: { username, role, userId, schoolId },
    } = useContext(UserStateContext)

    const log = async ({ loglevel, action, attributes }: LogProps) => {
        const mergedAttributes = {
            timestamp: moment().unix(),
            loglevel,
            component,
            action,
            user: {
                username,
                role,
                userId,
                schoolId,
            },
            ...attributes,
        }

        try {
            await fetch('https://log-api.eu.newrelic.com/log/v1', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': 'eu01xxf0fbf64b97132a55f6711d139d9f70NRAL',
                },
                body: JSON.stringify(mergedAttributes),
            })
        } catch (error) {
            console.log('Failed to log! Error: ', error)
        }
    }

    return { log }
}

export const POSITION_DISPLAY_NAME = {
    chairperson: 'Chair',
    vicechairperson: 'Vice-chair',
    treasurer: 'Treasurer',
    secretary: 'Secretary',
}
