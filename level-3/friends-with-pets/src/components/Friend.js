import React from 'react'
import Pet from './Pet'

export default function Friend(props){

    const pets = props.pets.map(pet => {
        return <Pet
            {...pet}
        />
    })

    return(
        <div>
            <img src={props.profilePic} className="friend--pic"/>
            <h1>{props.name}</h1>
            <h2>(Age: {props.age})</h2>
            {pets}
        </div>
    )
}