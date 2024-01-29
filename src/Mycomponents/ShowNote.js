import React, { useContext } from 'react'
import notecontext from '../context/notes/noteContext'

const ShowNote = () => {
    const context = useContext(notecontext);
    const { changedNote } = context


    const date = new Date(changedNote.date);
    console.log(date.toUTCString())
    return (
        <div className="container" >
            <h1 className="text-center mb-5"> {changedNote.title} </h1>
            {/* <h1> {changedNote.title} </h1>
            <h1> {changedNote.description} </h1>
            <h1> {changedNote.tag} </h1>
            <h1> {date.toUTCString()} </h1> */}

            <div className="card" style={{maxWidth: '100%'}}>
                <div className="card-body">
                    
                    <h6 className="card-subtitle mb-2 text-muted"> Tag : {changedNote.tag}</h6>
                    <h6 className="card-subtitle mb-2 text-muted"> Created on: {date.toUTCString()}</h6>
                    <p className="card-text">{changedNote.description}</p>
                    
                </div>
            </div>




        </div>
    )
}

export default ShowNote
