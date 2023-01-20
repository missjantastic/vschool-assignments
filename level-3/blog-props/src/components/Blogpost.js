import React from 'react'

export default function Blogpost(props) {
    return(
        <div className="blogpost">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>Posted by {props.author} on {props.date}</p>
        </div>
    )
}