import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './Header.js'
import Home from './Home.js';
import About from './About.js'
import Book from './Book.js'
import Confirmation from './BookingConfirmation.js';
import Contact from './Contact.js';
import { useReducer, useEffect } from 'react';

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

const fetchAPI = async (date) => {
  const response = await fetch(`https://raw.githubusercontent.com/courseraap/capstone/main/api.js?${date}`);
  const text = await response.text();
  try {
    const responseDate = JSON.parse(text);
    return responseDate.availableTimes;
  } catch (e) {
    console.error("Failed to parse JSON:", e);
    return [];
  }
};

function App() {
  const [state, dispatch] = useReducer(timeReducer, initialState)

  useEffect(() => {
    const fetchTimes = async () => {
      const date = new Date().toISOString().split('T')[0];
      const availableTimes = await fetchAPI(date);
      console.log(availableTimes);
      dispatch({type: 'UPDATE_TIMES', payload: availableTimes });
    }

    fetchTimes();
  }, []);

  return (
    <BrowserRouter>
     <div className="App">
       <Header/>
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
