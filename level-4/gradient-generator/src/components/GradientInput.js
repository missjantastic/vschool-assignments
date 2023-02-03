import React from 'react'

export default function GradientInput(props){



    return(
        <div className='input'>
            <h2>Options</h2>
            <div className='input--options'>
                <p>Color 1</p>
                <p>{props.gradientData.color1}</p>
                <input 
                    type='color'
                    name='color1'
                    onChange={props.handleChange}
                    value={props.gradientData.color1}
                />
                <p>Color 2</p>
                <p>{props.gradientData.color2}</p>
                <input 
                    type='color' 
                    name='color2'
                    onChange={props.handleChange}
                    value={props.gradientData.color2}
                />
            </div>
            <div className='input--angle'>
                <p>Angle</p>
                <input
                    type='number'
                    onChange={props.handleChange}
                    name='angle'
                    value={props.gradientData.angle}
                />
            </div>
        </div>

    )
}