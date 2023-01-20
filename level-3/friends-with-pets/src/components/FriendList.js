import React from 'react'
import Friend from './Friend'
import data from '../data'

export default function FriendList(){

    const friends = data.map(friend => {
        return <Friend 
            key={friend.index}
            {...friend}
        />
    })

    return(
        <div>
            {friends}
        </div>
    )
}