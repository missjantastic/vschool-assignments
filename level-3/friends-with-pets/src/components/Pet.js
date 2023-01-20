import React from 'react'

export default function Pet(props){
    return(
        <div>
            <img src={props.profilePic} className="pet--pic" />
            <h2>{props.name.toUpperCase()}</h2>
            <h2>{props.breed.toLowerCase()}</h2>
        </div>
    )
}