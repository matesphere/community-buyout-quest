import React, { useState, useEffect } from 'react'

const useDelayedRender = (delay) => {
    const [delayed, setDelayed] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setDelayed(false), delay)
        return () => clearTimeout(timeout)
    }, [])

    // console.log(delayed)
    return (fn) => !delayed && fn()
}

export const LoadingSpinner = ({ delay }) => {
    const delayedRender = useDelayedRender(delay)

    return delayedRender(() => <div className="loader"></div>)
}
