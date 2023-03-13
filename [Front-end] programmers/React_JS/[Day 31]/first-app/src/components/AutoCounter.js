import { useRef, useState } from "react"


const AutoCounter = () => {
    const [count, setCount] = useState(0)
    const intervalId = useRef()

    const handleStart = () => {
        intervalId.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(intervalId.current)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
        </>
    )
}

export default AutoCounter