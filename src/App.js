import React,{useState} from 'react'
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './Mycomponents/Navbar';
import Home from './Mycomponents/Home';
import About from './Mycomponents/About';
import NoteState from './context/notes/notesState';
import Alert from './Mycomponents/Alert';
import Login from './Mycomponents/Login';
import Signup from './Mycomponents/Signup';
import ShowNote from './Mycomponents/ShowNote';


// The component should start with capital letter in react

function App() {
  const [alert,setAlert]=useState({msg:null});
  const showAlert = (message) => {
    setAlert({
      msg: message
    })
    setTimeout(() => {
      setAlert({ msg: null })
    }, 1500);
  }

  return (
    <>


      <NoteState>  

        <Navbar showAlert={showAlert}/>
        <Alert  alert={alert}/>
       
        <Routes>

          <Route  path="/" element={<Home  showAlert={showAlert}/>} />

          <Route  path="/about" element={<About />} />
          <Route path="/showNote" element={<ShowNote/>}/>
          <Route  path="/login" element={<Login   showAlert={showAlert} />} />
          <Route  path="/signup" element={<Signup   showAlert={showAlert} />} />
        </Routes>
        
      </NoteState>


    </>
  );
}

export default App;
