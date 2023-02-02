import React from 'react'
import NameBadge from './NameBadge'
import './style.css'

export default function App(){

    const [nameBadgeData, setNameBadgeData] = React.useState({
        firstName:'',
        lastName:'',
        email:'',
        birthPlace:'',
        phone:'',
        faveFood:'',
        description:''
    })

    const [nameBadge, setNameBadge] = React.useState(<NameBadge {...nameBadgeData}/>)

    function handleChange(evt){
        const {name, value} = evt.target;
        setNameBadgeData(prevNameBadgeData=>({
            ...prevNameBadgeData,
            [name]: value
        }))
    }

    function submitNameBadge(evt){
        evt.preventDefault();
        setNameBadge(<NameBadge {...nameBadgeData}/>)
    }



    return(
        <div>
            <form className='name-badge-form'>
                <input
                    value={nameBadgeData.firstName} 
                    name='firstName'
                    placeholder='First Name'
                    onChange={handleChange}/>
                <input
                    value={nameBadgeData.lastName} 
                    name='lastName'
                    placeholder='Last Name'
                    onChange={handleChange}/>
                <input
                    value={nameBadgeData.email}
                    type='email' 
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}/>
                <input
                    value={nameBadgeData.birthPlace} 
                    name='birthPlace'
                    placeholder='Place of Birth'
                    onChange={handleChange}/>
                <input
                    value={nameBadgeData.number} 
                    type='number'
                    name='phone'
                    placeholder='Phone'
                    onChange={handleChange}/>
                <input
                    value={nameBadgeData.faveFood} 
                    name='faveFood'
                    placeholder='Favorite Food'
                    onChange={handleChange}/>
                <textarea
                    name='description'
                    placeholder='Tell us about yourself'
                    onChange={handleChange}
                    className='spread'
                />
                <button 
                    onClick={submitNameBadge}
                    className='name-badge-form--submit spread'
                >
                Submit
                </button>
            </form>
            {nameBadge}
        </div>
    )
}