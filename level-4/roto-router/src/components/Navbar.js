import React from 'react'
import { Link } from 'react-router-dom'
import marioicon from '../img/mario-icon.png'
import mariotitle from '../img/mario-title.png'

export default function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar--logo'>
                <img src={marioicon} />
                <img className='navbar--title' src={mariotitle} />
            </div>
            <nav className='navbar--links'>
                <Link to='/'>Home</Link> 
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
            </nav>
        </div>
    )
}