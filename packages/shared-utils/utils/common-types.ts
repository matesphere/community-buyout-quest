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
