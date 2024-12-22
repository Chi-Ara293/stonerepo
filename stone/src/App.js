import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Header.js'
import Home from './Home.js';
import About from './About.js'
import Book from './Book.js'
import Contact from './Contact.js';
import { useReducer } from 'react';

const timeReducer = (state, action) => {
 switch(action.type){
   case 'UPDATE_TIMES':
    return{
     ...state,
     availableTimes: state.availableTimes
    }
   default:
    return state;
 }
}

const initialState = {
  availableTimes:["9:00", "10:00", "14:00", "15:00", "17:00", "18:00"]
}

function App() {
  const [state, dispatch] = useReducer(timeReducer, initialState)

  const updateTimes = (selectedDate) => {
    dispatch({
      type: 'UPDATE_TIMES',
      payload: selectedDate
    })
  }

  return (
    <BrowserRouter>
     <div className="App">
       <Header/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="book" element={<Book availableTimes={state.availableTimes} updateTimes={updateTimes}/>}/>
        </Routes>
     </div>
   </BrowserRouter>
  );
}

export default App;
