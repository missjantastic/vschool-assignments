import React from 'react'
import { UglyThingsContext } from './UglyThingsContext'



export default function SubmissionForm(){

    const { postUglyThing } = React.useContext(UglyThingsContext)

    const [formData, setFormData] = React.useState({
        title: '',
        imgUrl: '',
        description: '',
    })

    function handleChange(evt){
        const { name, value } = evt.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function submitUglyThing(evt){
        evt.preventDefault();
        postUglyThing(formData)
        setFormData({
            title: '',
            imgUrl: '',
            description: '',
        })
    }

    return(
        <div className='submission-form'>
            <h2>Submit an Ugly Thing</h2>
            <form>
                <input
                    value={formData.title}
                    onChange={handleChange}
                    placeholder='Title'
                    name='title'
                />
                <input
                    value={formData.imgUrl}
                    onChange={handleChange} 
                    placeholder='Image URL'
                    name='imgUrl'
                />
                <input
                    value={formData.description}
                    onChange={handleChange}
                    placeholder='Description'
                    name='description'
                />
                <button onClick={submitUglyThing}>Submit</button>
            </form>
        </div>
    )
}