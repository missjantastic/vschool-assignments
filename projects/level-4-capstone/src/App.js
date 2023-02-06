import React, {useState} from 'react'
import Navbar from './components/Navbar'
import ColorPalette from './components/ColorPalette'
import ColoringPage from './components/ColoringPage'
import axios from 'axios'
import './styles.css'

export default function App(){
    const [colors, setColors] = useState(['69D2E7', 'AA77DD', 'E0E4CC', 'F38630', 'FA6900']);
    const [activeColor, setActiveColor] = useState('FFFFFF')
    const requestModes = ['monochrome', 'analogic', 'complement', 'analogic-complement', 'quad']
    
    function getColors(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const randomMode = Math.floor(Math.random() * 5) + 1

        axios.get(`https://www.thecolorapi.com/scheme?hex=${randomColor}&format=json&count=5&mode=${requestModes[randomMode]}`)
            .catch(error=>{
                console.log(error)
                return;
            })
            .then(response=>{
                console.log(requestModes[randomMode])
                const newColors = response.data.colors.map(color => color.hex.value.substring(1))
                const checkValid = newColors.filter((v) => (v === '000000')).length;
                if (checkValid === 5)
                return;
                setColors(newColors)
            })
    }

    function updateActiveColor(color){
        console.log(color)
        setActiveColor(color);
    }


    return(
        <div className='app'>
            <Navbar />
            <ColorPalette 
                colors={colors}
                getColors={getColors}
                updateActiveColor={updateActiveColor}
            />
            <ColoringPage 
                activeColor={activeColor}
            />
        </div>
    )
}