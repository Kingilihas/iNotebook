const express = require('express');
var fetchuser = require('../middleware/fetchdata');
const Notes = require('../models/Notes')
const router = express.Router();
const { body, validationResult } = require('express-validator');

// ROUTE 1 : TO GET THE ALL THE NOTE
router.get('/getallnotes', fetchuser, async (req, res) => {

    const notes = await Notes.find({ user: req.user.id })

    res.json(notes)
})


//ROUTE 2 : TO ADD THE NEW NOTES
router.post('/addnote', fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 5 }), // fields   with the required parameters
    body('description', 'enter a description of minimum 5 character').isLength({ min: 5 })// fields  with  the required parameters

], async (req, res) => {

    // erorrs are checked diring validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }



    try {

        const { title, description, tag } = req.body;  // get the title,description,tag from the request




        const note = new Notes({
            title, description, tag, user: req.user.id
            // add the title , description , tag as it to database and user will equal to user id of request
        })


        const savednotes = await note.save(); // save the notes
        res.json(savednotes);  // return the saved notes


    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");


    }



})



//ROUTE 3 : TO UPDATE THE EXISTING NOTES
// :id will replaced by id coming from request

router.put('/updatenote/:id', fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;


    // creation of new note 
    const newNote = {}

    if (title) { newNote.title = title } // if title is in request
    if (description) { newNote.description = description }// if description is in request
    if (tag) { newNote.tag = tag }// if tag is in request




    let note = await Notes.findById(req.params.id)// find the note with id coming as parameter (upar me  /:id wali )

    if (!note) {

        return res.status(404).send("not found")
    }


    // if note with given id exists now just validate the user that this is the user one who has accessing its own created note

    if (note.user.toString() !== req.user.id) {

        return res.status(401).send(" not allowed ")
    }



    // if the user is one who that is updating its own created note 

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });  // update the existing note


    res.json({ note });



})




// ROUTE 4 : TO DELETE A EXISTING NOTE
router.delete('/deletnote/:id', fetchuser, async (req, res) => {





    try {

        let note = await Notes.findById(req.params.id)// find the note with id coming as parameter (upar me  /:id wali )

        if (!note) {

            return res.status(404).send("not found")
        }


        // if note with given id exists now just validate the user that this is the user one who has accessing its own created note

        if (note.user.toString() !== req.user.id) {

            return res.status(401).send(" not allowed ")
        }



        // if the user is one who that is deleting its own created note 

        note = await Notes.findByIdAndDelete(req.params.id);  // update the existing note


        res.json({ "sucess ": "note has been deleted" });




    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");
    }




})


module.exports = router;
