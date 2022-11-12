import { useState, useEffect, FC } from 'react'

const useDelayedRender = (delay: number) => {
    const [delayed, setDelayed] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), delay)
        return () => clearTimeout(timeout)
    }, [])

    return (fn: Function) => !delayed && fn()
}

export const LoadingSpinner: FC<{ delay: number }> = ({ delay }) => {
    const delayedRender = useDelayedRender(delay)

    return delayedRender(() => <div className="loader"></div>)
}
