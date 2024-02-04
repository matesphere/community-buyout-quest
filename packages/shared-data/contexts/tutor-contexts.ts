import { createContext } from 'react'
import { StudentType } from '@community-land-quest/shared-utils/utils/common-types'

export interface CurrentGroupsContextType {
    expanded: Array<string>
    setExpanded: (expanded: Array<string>) => void
    selectedTab: number
    setSelectedTab: (selected: number) => void
}

export const CurrentGroupsContext = createContext<CurrentGroupsContextType>({
    expanded: [],
    setExpanded: () => {},
    selectedTab: 0,
    setSelectedTab: () => {},
})

export interface NewGroupContextType {
    studentsToAdd: Array<StudentType>
    setStudentsToAdd: (students: Array<StudentType>) => void
}

export const NewGroupContext = createContext<NewGroupContextType>({
    studentsToAdd: [],
    setStudentsToAdd: () => {},
})
