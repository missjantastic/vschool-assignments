import React from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import data from './data'
import './style.css'

export default function App(){
    console.log(data);
    const places = data.map(place => 
        <Card 
            key = {place.place}
            {...place}
        />
    )
    
    return (
        <div className="app">
            <Nav />
            {places}
        </div>
    )
}