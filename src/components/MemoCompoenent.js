import React from 'react'

function MemoCompoenent({name}) {
    console.log('rendering memo comp');
    return (
        <div>
            {name}
        </div>
    )
}

export default MemoCompoenent
