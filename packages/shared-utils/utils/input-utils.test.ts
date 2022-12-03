import { renderHook, act } from '@testing-library/react'
import { useCheckboxState, useGroupedCheckboxState } from './input-utils'

describe('useCheckboxState', () => {
    it('should select initial selection', () => {
        const { result } = renderHook(() =>
            useCheckboxState<string>(['option'])
        )
        const [selectedOptions] = result.current
        expect(selectedOptions).toEqual(['option'])
    })

    it('should select on toggle of unchecked selection', () => {
        const { result } = renderHook(() => useCheckboxState<string>([]))
        const [_, toggleValue] = result.current
        act(() => {
            toggleValue('option')
        })
        const [selectedOptions] = result.current
        expect(selectedOptions).toEqual(['option'])
    })

    it('should deselect on toggle of checked selection', () => {
        const { result } = renderHook(() =>
            useCheckboxState<string>(['option'])
        )
        const [_, toggleValue] = result.current
        act(() => {
            toggleValue('option')
        })
        const [selectedOptions] = result.current
        expect(selectedOptions).toEqual([])
    })

    it('should set limitAmountSelected true when limit amount selected', () => {
        const { result } = renderHook(() =>
            useCheckboxState<string>(['one'], 2)
        )

        const [_, toggleValue, limitAmountSelected] = result.current
        expect(limitAmountSelected).toBe(false)

        act(() => {
            toggleValue('option')
        })

        expect(result.current[2]).toEqual(true)
    })

    it('should deselect first selected option when limit breached', () => {
        const { result } = renderHook(() =>
            useCheckboxState<string>(['one', 'two'], 2)
        )

        const [_, toggleValue] = result.current
        act(() => {
            toggleValue('three')
        })

        const [selectedOptions] = result.current
        expect(selectedOptions).toEqual(['two', 'three'])
    })
})

describe('useGroupedCheckboxState', () => {
    it('should set up checkbox groups with initial selections', () => {
        const { result } = renderHook(() =>
            useGroupedCheckboxState<string>([
                { title: 'group1', initialSelected: ['one'] },
                { title: 'group2', initialSelected: ['two'], limit: 5 },
            ])
        )
        const [state] = result.current
        expect(state).toEqual({
            group1: { selectedValues: ['one'] },
            group2: { selectedValues: ['two'], limit: 5 },
        })
    })

    it('should select on toggle of unchecked selection', () => {
        const { result } = renderHook(() =>
            useGroupedCheckboxState<string>([
                { title: 'group1' },
                { title: 'group2' },
            ])
        )
        const [_, toggleAction] = result.current
        act(() => {
            toggleAction({ groupTitle: 'group2', selectedValue: 'option' })
        })
        const [state] = result.current
        expect(state['group1'].selectedValues).toEqual([])
        expect(state['group2'].selectedValues).toEqual(['option'])
    })

    it('should deselect on toggle of checked selection', () => {
        const { result } = renderHook(() =>
            useGroupedCheckboxState<string>([
                { title: 'group1', initialSelected: ['option'] },
                { title: 'group2' },
            ])
        )
        const [_, toggleAction] = result.current
        act(() => {
            toggleAction({ groupTitle: 'group1', selectedValue: 'option' })
        })
        const [state] = result.current
        expect(state['group1'].selectedValues).toEqual([])
        expect(state['group2'].selectedValues).toEqual([])
    })

    it('should set limitAmountSelected true when limit amount selected in all groups', () => {
        const { result } = renderHook(() =>
            useGroupedCheckboxState<string>([
                {
                    title: 'group1',
                    initialSelected: ['option1'],
                    limit: 2,
                },
                { title: 'group2', initialSelected: ['option1'], limit: 1 },
            ])
        )

        const [_, toggleAction, limitAmountSelected] = result.current
        expect(limitAmountSelected).toBe(false)

        act(() => {
            toggleAction({ groupTitle: 'group1', selectedValue: 'option' })
        })

        expect(result.current[2]).toBe(true)
    })

    it('should deselect first selected option when group limit breached', () => {
        const { result } = renderHook(() =>
            useGroupedCheckboxState<string>([
                {
                    title: 'group1',
                    initialSelected: ['option1', 'option2'],
                    limit: 2,
                },
                { title: 'group2', initialSelected: ['option1'], limit: 1 },
            ])
        )

        const [_, toggleAction] = result.current
        act(() => {
            toggleAction({ groupTitle: 'group1', selectedValue: 'option3' })
        })

        const [state] = result.current
        expect(state['group1'].selectedValues).toEqual(['option2', 'option3'])
    })
})
