import React from 'react'


export default function Card(props){
    return(
        
        <div className="card">
            {/* <img className="card--image" src={props.imageUrl}/> */}
            <div className="card--text">
                <div className="card--info">
                    {/* <img src="../src/location-pin"/> */}
                    <p>{props.price}</p>
                    {/* <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a> */}
                </div>
                <h1>{props.place}</h1>
                <p className="bold">{props.timeToGo}</p>
                {/* <p className="card--description">{props.description}</p> */}
            </div>
        </div>
    )
}