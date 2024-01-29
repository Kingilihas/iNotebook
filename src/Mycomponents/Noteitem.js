import React,{useContext, useEffect} from 'react'
import { Link, parsePath, Route, Routes } from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
import ShowNote from './ShowNote';
import { useLocation } from 'react-router-dom';

const Noteitem = (props) => {
    let location=useLocation();
    const context=useContext(noteContext); 
    const { Note,updateNotes } = props;
    const {deleteNote,changedNote}=context;  
   
 const func=()=>{
 
    changedNote.title=Note.title;
    changedNote.description=Note.description;
    changedNote.tag=Note.tag;
    changedNote.date=Note.date;
 }
      
    return (
        <div className=" mx-2 my-1 col-md-3">
            

            <div className="card my-2">

                <div className="card-body">
                    <h5 className="card-title">
                        <Link style={{textDecoration:'none',color:'black'}} to="/showNote" onClick={func}>{Note.title}</Link></h5>
                    
                     <div className="d-flex my-2">
                     <i className="fa-solid fa-trash " onClick={() =>{ deleteNote(Note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square  mx-3" onClick={()=>{updateNotes(Note)}}></i>
                     </div>
                    <p className="card-text " style={{maxHeight:"100px",overflow:"hidden"}}>{Note.description}</p>
                   

                </div>
            </div>

        </div>
    )
}

export default Noteitem
