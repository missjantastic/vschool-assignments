import React from 'react'

export default function GradientOutput(props){
    const backgroundInputs = `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})`
    console.log(backgroundInputs)
    const style = {
        background: backgroundInputs,
        mozBackground: backgroundInputs,
        webkit: backgroundInputs
    }

    const textOutput = 
    `background: ${backgroundInputs};\n-moz-background: ${backgroundInputs};\n-webkit: ${backgroundInputs};`
    
    
    return(
        <div className='output'>
            <div className='gradient-block' style={style}></div>
            <textarea readOnly className='gradient-code' value={textOutput}/>
        </div>
    )
}