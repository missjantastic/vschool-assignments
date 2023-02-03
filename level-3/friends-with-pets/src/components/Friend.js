import React from 'react'
import Pet from './Pet'

export default function Friend(props){

    const pets = props.pets.map(pet => {
        return <Pet
            {...pet}
        />
    })

    return(
        <div className='friend'>
            <div className='friend--info'>
                <img src={props.profilePic} className="friend--pic"/>
                <div className='friend--info-text'>
                    <h2 className='friend--info-text'>{props.name}  (Age: {props.age})</h2>
                </div>
            </div>
            <div className='friend--pets'>
                {pets}
            </div>
        </div>
    )
}