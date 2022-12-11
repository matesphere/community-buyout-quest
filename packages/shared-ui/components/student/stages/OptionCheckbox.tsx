type OptionValue = string | number

interface OptionCheckbox<T extends OptionValue> {
    id: T
    selectedOptions: Array<T>
    toggleValue: any
    displayName: string
}

export const OptionCheckbox = <T extends OptionValue>({
    id,
    selectedOptions,
    toggleValue,
    displayName,
}: OptionCheckbox<T>) => (
    <div className="multiple-choice">
        <input
            className="form-control"
            id={id.toString()}
            type="checkbox"
            checked={selectedOptions.includes(id)}
            onChange={toggleValue}
        />
        <label className="form-label" htmlFor={id.toString()}>
            {displayName}
        </label>
    </div>
)
