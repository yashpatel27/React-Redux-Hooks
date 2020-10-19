import React from 'react'

function FunctionClick() {
    function clickHandler() {
        alert('button clicked');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
