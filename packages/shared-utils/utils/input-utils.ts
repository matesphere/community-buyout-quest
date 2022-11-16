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

// export const useCheckboxListState = (
//     listOfLabels: Array<string>,
//     limit?: number
// ) => {
//     const [checkboxState, setCheckboxState] = useState(
//         listOfLabels.map((label, i) => ({ id: i, label, value: false }))
//     )

//     const toggleCheckbox = (id) => {
//         setCheckboxState((state) =>
//             state.map((checkbox) =>
//                 checkbox.id === id
//                     ? { id, label: checkbox.label, value: !checkbox.value }
//                     : checkbox
//             )
//         )
//     }

//     const allRequiredCheckboxesChecked = limit
//         ? checkboxState.map((checkbox) => checkbox.value).filter(Boolean)
//               .length === limit
//         : checkboxState.map((checkbox) => checkbox.value).every(Boolean)

//     return [
//         checkboxState,
//         toggleCheckbox,
//         allRequiredCheckboxesChecked,
//     ] as const
// }
