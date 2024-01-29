import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Noteitem from './Noteitem';



const Notes = () => {

  const [show, setShow] = useState(false);// modal state 

  const handleClose = () => setShow(false);// modal funtion to close modal
  const handleShow = () => setShow(true);// modal funtions to show modal

  const context = useContext(noteContext); // getting all notes from context
  const { notes, getNotes, editNote, changedNote } = context; // update note function
  const [note, setnote] = useState({ id: '', etitle: '', edescription: '', etag: "" ,date:""})// update note function


  let navigate = useNavigate();

  useEffect(() => {

    if (localStorage.getItem('authToken')) {
      getNotes();


    }


    else
      navigate('/login')

    // eslint-disable-next-line 
  }, [])

  // ref use used to make use of useref hook to programmitically click on the button on modal
  const ref = useRef(null);


  // this fuction is run on clicking update note button
  const updateNotes = (currentnote) => {

    // current note is a note which is going to be updated
    ref.current.click();
    setnote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })


  }


  // this fuction will run on changing the content of modal
  const onchange = (e) => {

    setnote({ ...note, [e.target.name]: e.target.value })  // change the state of note as input changes means if  target name will be changed target value


  }





  const handleClick = (e) => {

    e.preventDefault();
    handleClose();
    editNote(note.id, note.etitle, note.edescription, note.etag)

    console.log(note)



  }

  const dStyle = {
    display: 'block',
    overflow: 'hidden',
    resize: 'none'
  }

  return (
    <div className="row my-4 ">
      <Addnote />
      <Button variant="primary" ref={ref} onClick={handleShow} style={{ display: 'none' }}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 my-3">
              <label htmlFor="title" className="form-label"  >Enter title</label>

              <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" onChange={onchange} /> {/* target name is set to title  and value will set by onchange function  */}

              <div id="emailHelp" className="form-text">Title should be unique.</div>
            </div>
            <div className="mb-3" >
              <label htmlFor="description" className="form-label" >Enter Description</label>{/* target name is set to description and value will set by onchange function  */}
              <textarea style={dStyle} className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onchange} ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label" >Enter tag</label>{/* target name is set to description and value will set by onchange function  */}
              <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchange} />
            </div>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <h2 >Your Notes</h2>
      {
        notes.map((note) => {
          return <Noteitem key={note._id} Note={note} updateNotes={updateNotes} />
        })
      }

    </div>
  )
}

export default Notes
