import { useState, useReducer } from 'react'

export const useCheckboxState = <T>(
    initialSelected: Array<T> = [],
    limit?: number
) => {
    const [selectedValues, setSelectedValues] =
        useState<Array<T>>(initialSelected)

    const toggleValue = (newValue: T) =>
        selectedValues.includes(newValue)
            ? setSelectedValues(
                  selectedValues.filter((value) => value !== newValue)
              )
            : selectedValues.length === limit
            ? setSelectedValues([...selectedValues.slice(1), newValue])
            : setSelectedValues([...selectedValues, newValue])

    const limitAmountSelected = selectedValues.length === limit

    return [selectedValues, toggleValue, limitAmountSelected] as const
}

interface GroupedCheckboxState<T> {
    [groupName: string]: {
        selectedValues: Array<T>
        limit?: number
    }
}

export interface ToggleAction<T> {
    groupName: string
    selectedValue: T
}

type Reducer<T> = (
    state: GroupedCheckboxState<T>,
    toggleAction: ToggleAction<T>
) => GroupedCheckboxState<T>

interface CheckboxGroup<T> {
    title: string
    initialSelected?: Array<T>
    limit?: number
}

export const useGroupedCheckboxState = <T>(
    groups: Array<CheckboxGroup<T>>
) => {
    const reducer: Reducer<T> = (
        state,
        { groupName, selectedValue: newValue }
    ) => {
        const { selectedValues, limit } = state[groupName]
        let newSelectedValues = []

        selectedValues.includes(newValue)
            ? (newSelectedValues = selectedValues.filter(
                  (value) => value !== newValue
              ))
            : selectedValues.length === limit
            // TODO: fix this to not deselect team choice? do it in generic way?
            ? (newSelectedValues = [...selectedValues.slice(1), newValue])
            : (newSelectedValues = [...selectedValues, newValue])

        return {
            ...state,
            [groupName]: {...state[groupName], selectedValues: newSelectedValues}
        }
    }

    const initialState = groups.reduce<GroupedCheckboxState<T>>(
        (state, { title, initialSelected = [], limit }) => {
            state[title] = {
                selectedValues: initialSelected,
                limit,
            }
            return state
        },
        {}
    )

    const [state, dispatch] = useReducer(reducer, initialState)

    const totalLimitAmountSelected = Object.values(state).every(({selectedValues, limit}) => selectedValues.length === limit)
    const allSelectedOptions = Object.values(state).reduce((arr, { selectedValues }) => arr.concat(selectedValues), [] as Array<T>)
    return { state, dispatch, totalLimitAmountSelected, allSelectedOptions } as const
}
