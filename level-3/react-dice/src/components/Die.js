import React from 'react'

export default function Die(props){
    const [stickyState, setStickyState] = React.useState(false);



    return(
        <div className="die">
            {props.number}
        </div>
    )
}