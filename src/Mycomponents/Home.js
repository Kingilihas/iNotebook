import React, { useEffect } from 'react'
import Addnote from './Addnote'
import Notes from './Notes'

const Home = (props) => {

/*
  const a = useContext(noteContext)

  // this hook is required to update the state means state updation is done in useffect hook 


  useEffect(() => {

    a.update()

  }, [])
*/
 






return (
    <>
      <div className="container my-4">
        {/* <p>This is home {a.state.name} </p> */}

    

     
         <Notes showAlert={props.showAlert}/> { /* the notes in context are displayed in the component */}
        
      </div>
    </>
  )
}

export default Home
