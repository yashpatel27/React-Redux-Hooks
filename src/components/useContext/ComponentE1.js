import React, {useContext} from 'react'
import ComponentF1 from './ComponentF1'
import {UserContext, ChannelContext} from '../../App'


function ComponentE1() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
        {user} <br />
        {channel}
            
        </div>
    )
}

export default ComponentE1
