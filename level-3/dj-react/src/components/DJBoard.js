import React from 'react'
import Square from './Square'

export default function DJBoard(){

    const [colors, setColors] = React.useState(['white', 'white', 'white', 'white']);

    const squares = colors.map(color => <Square color={color} />)

    function smallTimeDJ(){
        const firstColor = colors[0];
        console.log(firstColor);
        if (firstColor === 'white'){
            setColors(['black', 'black', 'black', 'black'])
        } else {
            setColors(['white', 'white', 'white', 'white'])
        }
    }

    function partyDJ(){
        setColors(prevColors => ['purple', 'purple', prevColors[2], prevColors[3]]);
    }
    
    function leftBlue(){
        setColors(prevColors => [prevColors[0], prevColors[1], 'blue', prevColors[3]]);
    }

    function rightBlue(){
        setColors(prevColors => [prevColors[0], prevColors[1], prevColors[2], 'blue']);
    }

    function randomColor(square){
        const colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
        const randomIndex = Math.floor((Math.random() * colorChoices.length + 1))

        setColors(prevColors => {
            const newColors = prevColors.slice();
            newColors[square] = colorChoices[randomIndex];
            return newColors;
        })
    }

    return(
        <div className="square-grid">
            {squares}
            <button onClick={smallTimeDJ}>Small-Time DJ</button>
            <button onClick={partyDJ}>Party DJ</button>
            <button onClick={leftBlue}>Lower Left Blue</button>
            <button onClick={rightBlue}>Lower Right Blue</button>
            <button onClick={()=>randomColor(0)}>Top Left Random</button>
            <button onClick={()=>randomColor(1)}>Top Right Random</button>
            <button onClick={()=>randomColor(2)}>Bottom Left Random</button>
            <button onClick={()=>randomColor(3)}>Bottom Right Random</button>
        </div>
    )
}