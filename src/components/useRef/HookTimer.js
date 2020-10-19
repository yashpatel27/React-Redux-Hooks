import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
    let interval
const[timer, setTimer] = useState(0)
const intervalRef = useRef()

useEffect(() => {
    const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer+1)
    }, 1000)
    return () => {
        clearInterval(intervalRef.current)
    };
}, [])
    return (
        <div>
            Hook Timer = {timer}
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default HookTimer
