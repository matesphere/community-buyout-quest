import { useState } from 'react'

export const useCheckboxState = <T>(
    initialSelected: Array<T>,
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

    const allowedNumberSelected = selectedValues.length === limit

    return [selectedValues, toggleValue, allowedNumberSelected] as const
}
