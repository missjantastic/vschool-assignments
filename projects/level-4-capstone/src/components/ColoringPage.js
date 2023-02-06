import React, {useState} from 'react'
import FlyingKitty from '../lineart/FlyingKitty'
import nextPage from '../img/next-page.png'
import lastPage from '../img/last-page.png'

export default function ColoringPage(props){
    const [flyingKittyColors, setFlyingKittyColors] = useState(Array(38).fill('FFFFFF'))

    function onFillColor(i){
        let newFlyingKittyColors=[...flyingKittyColors]
        newFlyingKittyColors[i] = props.activeColor;
        console.log(newFlyingKittyColors[i])
        setFlyingKittyColors(newFlyingKittyColors)
    }

    return(
        <div className='coloring-page'>
            <img src={lastPage} className='page-navigator' alt='previous page'/>
                <FlyingKitty 
                    onFill={onFillColor}
                    flyingKittyColors={flyingKittyColors}
                /> 
            <img src={nextPage} className='page-navigator' alt='next page'/>
        </div>
    )
}