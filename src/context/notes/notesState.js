import React, { useState } from 'react';

import NoteContext from "./noteContext";

const NoteState = (props) => {  // the function name should be start with capital
    const host = "http://localhost:5000"
    /*
        const s1 = {
    
            "name": "ilihas"
    
        }
    
         create a state s1 in context api
    
    
        const [state, setstate] = useState(s1);   
    
    updating the state with update function
    
        const update=()=>{
    
            setTimeout(() => {
    
                setstate({
                    "name":"Tony"
                })
                
            },1000);
        }
    */


    // storing all notes in a context

    const notesIntail = []

    const [notes, setNotes] = useState(notesIntail);

    // add a note 
    const addNote = async (title, description, tag) => {

        // API CALL TO ADD THE  NOTES  IN DATABASE

        // TO MAKE A API CALL YOU HAVE TO INSTALL NPM CORS PACKAGE AND ADD #1,#2,#3 LINE WRIITEN IN INDEX.JS
        //this Reponse is created by me

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),
                "Accept": '*/*'

            },
            body: JSON.stringify({ title, description, tag })
        });

        // a new note 
        const Newnote = {
            "title": title,
            "description": description,
            "tag": tag

        }

        //add the new note to notes object

        setNotes(notes.concat(Newnote))









    }

    const getNotes = async () => {
        // API CALL TO FETCH THE ALL THE NOTES PRESENT IN DATABASE

        // TO MAKE A API CALL YOU HAVE TO INSTALL NPM CORS PACKAGE AND ADD #1,#2,#3 LINE WRIITEN IN INDEX.JS

        // SIMPLE FETCH FROM RESPONSE HEADER  
        const response = await fetch(`${host}/api/notes/getallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),

            }
        });


        const json = await response.json();


        setNotes(json);
        changedNote.date=json.date;
        console.log(json);


    }



    // edit a note
    const editNote = async (id, title, description, tag) => {
        // API CALL TO UPDATE THE ALL THE NOTES PRESENT IN DATABASE

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),

            },
            body: JSON.stringify({ title, description, tag })
        });

        console.log(await response.json());




        // TO MAKE A API CALL YOU HAVE TO INSTALL NPM CORS PACKAGE AND ADD #1,#2,#3 LINE WRIITEN IN INDEX.JS
        for (let i = 0; i < notes.length; i++) {

            const element = notes[i];

            if (element.id === id) {
                element.title = title;
                element.description = description;

                element.tag = tag;

            }

        }

        getNotes();
    }


    // delete a note
    const deleteNote = async (id) => {
        // API CALL TO DELETE  THE NOTES PRESENT IN DATABASE

        // TO MAKE A API CALL YOU HAVE TO INSTALL NPM CORS PACKAGE AND ADD #1,#2,#3 LINE WRIITEN IN INDEX.JS
        // SIMPLE RESPONSE HEADER TO DELETE A NOTE
        const response = await fetch(`${host}/api/notes/deletnote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('authToken'),

            }
        });


        const json = await response.json();
        console.log(json);

        console.log("deleting the note with id " + id);
        const newNote = notes.filter((note) => {
            return note._id !== id // if provided _id is not equal to given id then it will stored in the database
        })

        setNotes(newNote);
    }

    const changedNote = {
        id: "",
        title: "",
        description: "",
        tag: "",
        date:""
    }


    return (

        /* the component should be started with capital   */


        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes, changedNote }}>
            {props.children}
        </NoteContext.Provider>
    )



}


export default NoteState;