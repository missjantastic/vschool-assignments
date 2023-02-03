import React from 'react'
import GradientInput from './components/GradientInput'
import GradientOutput from './components/GradientOutput'
import './style.css'

export default function App(){

    const [gradientData, setGradientData] = React.useState({
        color1: '#ffffff',
        color2: '#ffffff',
        angle: 50
    })

    function handleChange(evt){
        const { name, value } = evt.target;
        setGradientData(prevGradientData => ({
            ...prevGradientData,
            [name]: value
        }))
    }   

    return(
        <>
            <h1 className='title'>CSS Gradient Code Generator</h1>
            <div className="grid">
                {/* {gradientOutput} */}
                <GradientOutput
                    {...gradientData}
                />
                <GradientInput 
                    gradientData={gradientData}
                    handleChange={handleChange}
                />
            </div>
        </>
    )
}