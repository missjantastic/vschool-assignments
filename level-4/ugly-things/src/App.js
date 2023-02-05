import React from 'react'
import SubmissionForm from './components/SubmissionForm'
import UglyThings from './components/UglyThings'
import Navbar from './components/Navbar'
import { UglyThingsContextProvider } from './components/UglyThingsContext'
import './index.css'

export default function App(){
    return(
        <>
            <Navbar />
            <UglyThingsContextProvider>
                <SubmissionForm />
                <UglyThings />
            </UglyThingsContextProvider>
        </>
    )
}