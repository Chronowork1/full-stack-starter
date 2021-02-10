import {useEffect, useState}from 'react';
import Api from '../Api'

const SectionsList = () => {

    const [sections, setSections] = useState([

    ])

    //Lets you define a funtion that is gonna be call at different changes in he component
    //Every 
    useEffect(function(){
        Api.sections.index().then(response => {
            setSections(response.data)
        })
    }, [])

    return (
        <div>
            <main className="container">
                <h1>Sections List</h1>

                <ul>
                    {sections.map((s)=>(
                        <li>{s.name}</li>
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default SectionsList