import fetch from 'cross-fetch'
import moment from 'moment'

interface LogProps {
    loglevel: 'ERROR' | 'WARN' | 'INFO'
    action: string
    attributes?: {
        [key: string]: string | object
    }
}

interface UseLoggingProps {
    component: string
    userInfo: {
        username?: string
        role?: string
        userId?: string
        schoolId?: string
    }
}

export const useLogging = ({
    component,
    userInfo: { username, role, userId, schoolId },
}: UseLoggingProps) => {
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

export const URBAN_LOCATION_DISPLAY_NAME: { [key: string]: string } = {
    wasteland: 'Wasteland',
    'ground-floor': 'Ground Floor',
    'first-floor': 'First Floor',
}
