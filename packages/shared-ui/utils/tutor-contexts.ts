import { createContext } from 'react'
import { StudentType } from '../gql/types'

export interface CurrentQuestsContextType {
    expanded: Array<string>
    setExpanded: (expanded: Array<string>) => void
    selectedTab: number
    setSelectedTab: (selected: number) => void
}

export const CurrentQuestsContext = createContext<CurrentQuestsContextType>({
    expanded: [],
    setExpanded: () => {},
    selectedTab: 0,
    setSelectedTab: () => {},
})

export interface NewQuestContextType {
    studentsToAdd: Array<StudentType>
    setStudentsToAdd: (students: Array<StudentType>) => void
}

export const NewQuestContext = createContext<NewQuestContextType>({
    studentsToAdd: [],
    setStudentsToAdd: () => {},
})
