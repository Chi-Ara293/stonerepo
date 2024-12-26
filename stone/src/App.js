import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Header.js'
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js'
import Book from './Book.js'
import Confirmation from './BookingConfirmation.js';
import Contact from './Contact.js';
import { useReducer } from 'react';

const timeReducer = (state, action) => {
 switch(action.type){
   case 'UPDATE_TIMES':
    return{
     ...state,
     availableTimes: action.payload
    };
   default:
    return state;
  }
}

const initialState = {
  availableTimes:["9:00", "10:00", "14:00", "15:00", "17:00", "18:00"]
}

function App() {
  const [state, dispatch] = useReducer(timeReducer, initialState)

  return (
    <BrowserRouter>
     <div className="App">
       <Header/>
       <Nav/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="contact" element={<Contact/>}/>
           <Route path="book" element={<Book availableTimes={state.availableTimes} updateTimes={dispatch}/>}/>
           <Route path="booking-confirmation" element={<Confirmation/>}/>
        </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
