import React from 'react'

export default function Pet(props){
    return(
        <div className='pet'>
            <img src={props.profilePic} className="pet--pic" />
            <h2 className='pet--name'>{props.name.toLowerCase()}</h2>
            <h2 className='pet--breed'>{props.breed.toUpperCase()}</h2>
        </div>
    )
}