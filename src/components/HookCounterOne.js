import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect- updating doc title')
        document.title = `You clicked ${count} times`
    }, [count]) // passing count array as second arg to make sure useEffect is called just once
    return (
        <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default HookCounterOne
