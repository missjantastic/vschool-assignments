import React from 'react'
import Die from './Die'

export default function Dicebox(){
    const [numbers, setNumbers] = React.useState([1,1,1,1,1]);

    const [stickyState, setStickyState] = React.useState(false);

    function rollDice(){
        setNumbers(prevNumbers => prevNumbers.map(() => Math.floor(Math.random() * 6 + 1)))
    }

    function changeStickyState(){
        setStickyState(prevStickyState=>!prevStickyState);
    }

    const diceRoll = numbers.map(number => <Die number={number} stickyState={stickyState} onClick={changeStickyState}/>);

    return(
        <div className="diceBox">
            <div className="dice">
                {diceRoll}
            </div>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    )
}