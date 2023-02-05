import React from 'react'
import axios from 'axios'

const UglyThingsContext = React.createContext();

function UglyThingsContextProvider(props){

    const [uglyThingsArray, setUglyThingsArray] = React.useState([])

    React.useEffect(()=>{
        getUglyThings()
    }, [])


    function getUglyThings(){
        axios.get("https://api.vschool.io/janinaalvarez/thing")
            .then(response => setUglyThingsArray(response.data))
            .catch(error => console.log(error))
    }


    function postUglyThing(uglyThing) {
        axios.post("https://api.vschool.io/janinaalvarez/thing", uglyThing)
            .then(response => {
                console.log(response.data)
                getUglyThings()
            })
            .catch(error => console.log(error))
    }

    function editUglyThing(id, uglyThing) {
        axios.put(`https://api.vschool.io/janinaalvarez/thing/${id}`, uglyThing)
            .then(response=> {
                console.log(response.data)
                getUglyThings()
            })
            .catch(error => console.log(error))
    }

    function deleteUglyThing(id){
        axios.delete(`https://api.vschool.io/janinaalvarez/thing/${id}`)
            .then(response => {
                console.log(response.data)
                getUglyThings()
            })
            .catch(error => console.log(error))
    }

    return(
        <UglyThingsContext.Provider value={{
            uglyThingsArray,
            postUglyThing,
            deleteUglyThing,
            editUglyThing
        }}>
            {props.children}
        </UglyThingsContext.Provider>
    )
}

export { UglyThingsContext, UglyThingsContextProvider }