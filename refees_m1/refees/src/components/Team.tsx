import React from "react"

import lucas from "../images/team/lucas.png"

const PersonCard = ({name}) => (
    <div className="card shadow-sm bg-primary text-primary-content">
            <figure className="bg-white">
                <img src={lucas}/>
            </figure> 
            <div className="card-body -mt-4 -mb-4">
                <h2 className="card-title">{name}</h2> 
                <p>Protocol</p> 
            </div>
    </div>
)

const Team = () => (
    <div className="mb-2 p-8 shadow-lg bg-neutral text-neutral-content rounded-box">
        <h1 className="text-5xl pb-8 font-bold">Meet our team</h1>
        <div className="mx-32">
            <div className="flex flex-row justify-around p-8 space-x-8">
                <PersonCard name="Amin Debabeche"/>
                <PersonCard name="Lucas Giordano"/>
                <PersonCard name="Augustin Kapps"/>
            </div>
        </div>
    </div>
)



export default Team