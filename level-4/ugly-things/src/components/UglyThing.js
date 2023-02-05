import React from 'react'
import { UglyThingsContext } from './UglyThingsContext'

export default function UglyThing(props){
    const { deleteUglyThing, editUglyThing } = React.useContext(UglyThingsContext)
    const { title, imgUrl, description, id } = props;
    const [isEditMode, setIsEditMode] = React.useState(false)
    const [formData, setFormData] = React.useState({
        title: title,
        imgUrl: imgUrl,
        description: description
    })

    function toggleEditForm(){
        setIsEditMode(prev => !prev)
    }

    function handleChange(evt){
        const { name, value } = evt.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function submitEdit(evt){
        evt.preventDefault();
        editUglyThing(id, formData)
        toggleEditForm();
    }

    function cancelEdit(evt){
        evt.preventDefault();
        toggleEditForm();
    }

    return(
        <div className='ugly-thing'>
            <h1 className='ugly-thing--title'>{title}</h1>
            <img src={imgUrl} className='ugly-thing--image'/>
            <p className='ugly-thing--description'>{description}</p>
            {isEditMode ? 
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
                    <button onClick={submitEdit}>Edit</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </form> : 
                <div className='ugly-thing--options'>
                    <button onClick={toggleEditForm}>Edit Post</button>
                    <button onClick={()=>deleteUglyThing(id)}>Delete Post</button>
                </div>
            }
            
        </div>
    )
}