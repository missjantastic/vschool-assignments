import React, { useContext } from 'react'
import { UglyThingsContext } from './UglyThingsContext'
import UglyThing from './UglyThing'

export default function UglyThings(props){
    const { uglyThingsArray } = useContext(UglyThingsContext)
    const uglyThings = uglyThingsArray.map(uglyThing => {
        const { title, description, imgUrl, _id } = uglyThing
        return(
            <UglyThing 
                key={_id}
                id={_id}
                title={title}
                description={description}
                imgUrl={imgUrl}
            />
        )
    })
    return(
        <div className='ugly-things'>
            {uglyThings}
        </div>
    )
}