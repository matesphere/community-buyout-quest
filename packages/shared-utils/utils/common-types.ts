export interface StudentType {
    firstName: string
    lastName: string
    email: string
}

export interface TeamType {
    name: string
    students: Array<StudentType>
}

export enum ActionType {
    LoadAction,
    UpdateAction,
}

export interface DevelopmentOption {
    id: number
    option: string
    display_name?: string | null
    location?: string | null
}

export interface TeamDevelopmentOption {
    id: string
    team_choice_name?: string | null
    team_choice_location?: string | null
    shortlist: boolean
    development_option: DevelopmentOption
}

export interface SWOTType {
    strengths: string
    weaknesses: string
    opportunities: string
    threats: string
}

export interface CMSSWOTType {
    strengths: {
        html: string
    }
    weaknesses: {
        html: string
    }
    opportunities: {
        html: string
    }
    threats: {
        html: string
    }
}

export interface ModelSwot {
    title: string
    slug: string
    modelSwot: string
}

interface SetupCosts {
    costItems: Array<{
        item: string
        cost: number
    }>
    fundingSources: Array<{
        funder: string
        amount: number
    }>
}

interface RunningCosts {
    costs: Array<{
        item: string
        yearOne: number
        yearTwo: number
        yearThree: number
        yearFour: number
    }>
    incomes: Array<{
        item: string
        yearOne: number
        yearTwo: number
        yearThree: number
        yearFour: number
    }>
}

export interface CMSBusinessPlanType {
    setupCosts: SetupCosts
    runningCosts: RunningCosts
}

export interface ModelBusinessPlan {
    title: string
    slug: string
    modelBusinessPlan: string
}
