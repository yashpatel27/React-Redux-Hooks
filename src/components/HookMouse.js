import React, { useEffect, useState } from 'react'

function HookMouse() {

    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

const logMousePosition = (e) => {
    console.log('Mouseevent')
    setX(e.clientX)
    setY(e.clientY)
}

     useEffect( () => {
        console.log('useeffect calles to log mouse position')
        window.addEventListener('mouseover', logMousePosition)
    }, []) // passing empty array as second argument to make sure useEffect is called just once
    return (
        <div>
            Hook X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
