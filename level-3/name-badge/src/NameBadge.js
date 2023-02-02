import React from 'react'

export default function NameBadge(props){
    return(
        <div className='name-badge'>
            <h1 className='name-badge--title'>Badge: </h1>
            <div className='name-badge--data'>
                <span>{`Name: ${props.firstName} ${props.lastName}`} </span>
                <span>{`Phone: ${props.phone}`}</span>
                <span>{`Place of Birth: ${props.birthPlace}`}</span>
                <span>{`Favorite food: ${props.faveFood}`}</span>
                <span>{`Email: ${props.email}`}</span>
                <span className='name-badge--data-description'>{props.description}</span>
            </div>
        </div>
    )
}