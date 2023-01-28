import React from 'react'

export default function App(){
    const [newName, setName] = React.useState('');

    const [savedNames, setSavedNames] = React.useState([]);

    function handleChange(evt){
        setName(evt.target.value)
    }

    function saveName(){
        setSavedNames(prevSavedNames => [...prevSavedNames, newName])
    }

    const savedNameElements = savedNames.map(savedName => <li>{savedName}</li>)


    return(
        <div>
            <input
                name='savedName'
                placeholder='Input Name'
                value={newName}
                onChange={handleChange}
            />
            <h1>{newName}</h1>
            <button onClick={saveName}>Add to list</button>
            <ol>
                {savedNameElements}
            </ol>
        </div>
    )
}