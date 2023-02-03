import React from 'react'


export default function Card(props){
    let priceStatus

    if (props.price < 500) {
        priceStatus = '$'
    } else if (props.price < 1000) {
        priceStatus = '$$'
    } else {
        priceStatus = '$$$'
    }

    return(
        
        <div className={`card ${props.timeToGo.toLowerCase()}`}>
            <div className="card--badge">{priceStatus}</div>
            <img className="card--image" src={props.imgUrl}/>
            <div className="card--text">
                <div className="card--info">
                    <p>When to visit: {props.timeToGo}</p>
                </div>
                <h1>{props.place}</h1>
                <p className="bold">${props.price}</p>
                {/* <p className="card--description">{props.description}</p> */}
            </div>
        </div>
    )
}