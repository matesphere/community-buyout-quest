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
