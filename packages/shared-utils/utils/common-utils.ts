import fetch from 'cross-fetch'
import moment from 'moment'
import { CMSSWOTType, CMSBusinessPlanType } from './common-types'

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

export const buildExampleSWOT = ({
    strengths: { html: strengths },
    weaknesses: { html: weaknesses },
    opportunities: { html: opportunities },
    threats: { html: threats },
}: CMSSWOTType) => ({
    strengths,
    weaknesses,
    opportunities,
    threats,
})

export const buildExampleBusinessPlan = ({
    setupCosts: { costItems, fundingSources },
    runningCosts: { costs, incomes },
}: CMSBusinessPlanType) => ({
    capitalCosts: {
        costs: costItems.map(({ item, cost }) => ({ details: item, cost })),
        funding: fundingSources.map(({ funder, amount }) => ({
            funderName: funder,
            amount,
        })),
    },
    runningCosts: {
        costs: costs.map(({ item, yearOne, yearTwo, yearThree, yearFour }) => ({
            details: item,
            year1: yearOne,
            year2: yearTwo,
            year3: yearThree,
            year4: yearFour,
        })),
        incomes: incomes.map(
            ({ item, yearOne, yearTwo, yearThree, yearFour }) => ({
                details: item,
                year1: yearOne,
                year2: yearTwo,
                year3: yearThree,
                year4: yearFour,
            })
        ),
    },
    cashFlow: {
        income: incomes.reduce(
            (
                { year1, year2, year3, year4 },
                { yearOne, yearTwo, yearThree, yearFour }
            ) => {
                return {
                    year1: year1 + yearOne,
                    year2: year2 + yearTwo,
                    year3: year3 + yearThree,
                    year4: year4 + yearFour,
                }
            },
            { year1: 0, year2: 0, year3: 0, year4: 0 }
        ),
        costs: costs.reduce(
            (
                { year1, year2, year3, year4 },
                { yearOne, yearTwo, yearThree, yearFour }
            ) => {
                return {
                    year1: year1 + yearOne,
                    year2: year2 + yearTwo,
                    year3: year3 + yearThree,
                    year4: year4 + yearFour,
                }
            },
            { year1: 0, year2: 0, year3: 0, year4: 0 }
        ),
    },
})
