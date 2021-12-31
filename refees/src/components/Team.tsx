import React from "react"

const PersonCard = ({name}) => (
    <div className="card shadow-sm bg-primary text-primary-content">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250"/>
            </figure> 
            <div className="card-body">
                <h2 className="card-title">{name}</h2> 
                <p>Protocol</p> 
            </div>
    </div>
)

const Team = () => (
    <div className="mx-32">
        <div className="flex flex-row justify-around p-8 space-x-8">
            <PersonCard name="Amin Debabeche"/>
            <PersonCard name="Lucas Giordano"/>
            <PersonCard name="Augustin Kapps"/>
        </div>
    </div>
)



export default Team