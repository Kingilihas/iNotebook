import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Addnote = () => {
    const context = useContext(noteContext);
    const [note, setnote] = useState({ title: '', description: '', tag: "default" }) // creating a temp note with a title  , description and tag
    const { addNote } = context;    // getting addnote function form context

    const onchange = (e) => {

        setnote({ ...note, [e.target.name]: e.target.value })  // change the state of note as input changes means if  target name will be changed target value


    }



    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)  // add the note with the title ,description and tag

    }

    // The code to add the vairable autoadujusting  text area  
    // first give dstyle to text area
    const dStyle={
        display: 'block',
        overflow: 'hidden',
        resize:'none'
    }

    // then apply the javascript logic for text area
    const desc=document.querySelector('#description');
    desc?.addEventListener('input',autoResize,false)

    function autoResize(){
       
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';

    }
    

    

    return (
        <div>
            <h1>Add a new note</h1>



            <form>
                <div className="mb-3 my-3">
                    <label htmlFor="title" className="form-label"  >Enter title</label>

                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} /> {/* target name is set to title  and value will set by onchange function  */}

                    <div id="emailHelp" className="form-text">Title should be unique.</div>
                </div>
                <div className="mb-3" >
                    <label htmlFor="description" className="form-label" >Enter Description</label>{/* target name is set to description and value will set by onchange function  */}
                    <textarea style={dStyle} className="form-control" id="description" name="description" onChange={onchange} ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label" >Enter tag</label>{/* target name is set to description and value will set by onchange function  */}
                    <input type="text" className="form-control" id="tag" name="tag" onChange={onchange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>

        </div>
    )
}

export default Addnote
