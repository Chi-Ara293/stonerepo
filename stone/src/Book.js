import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  './Form.css';

const Book = ({availableTimes, updateTimes}) => {
 const [selectDate, setSelectDate] = useState('')
 const [selectTime, setSelectTime] = useState('')
 const [attendees, setAttendees] = useState(1)
 const [name, setName] = useState('')

 const navigate = useNavigate();

useEffect(() => {
  const date = new Date();
  setSelectDate(date.toISOString().split('T')[0]);
}, []);

const handleDateChange = (e) => {
  const newDate = e.target.value;
  setSelectDate(newDate);
};

const handleTimeChange = (e) => setSelectTime(e.target.value);
const handleAttendeesChange = (e) => setAttendees(e.target.value);
const handleNameChange = (e) => setName(e.target.value);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log({
    selectDate,
    selectTime,
    attendees,
    name
  });

  navigate('/booking-confirmation', {
    state: { selectDate, selectTime, attendees, name }
 });
};

 return (
      <form className="book"
       onSubmit={handleSubmit}
       aria-labelledby="booking-form"
      >
        <h2 id="booking-form" style={{ position: 'absolute', top: '-9999px' }}>Booking Form</h2>
         <label htmlFor="book-date">Choose date</label>
         <input
         type="date"
         id="book-date"
         value={selectDate}
         onChange={handleDateChange}
         aria-required="true"
         autoComplete="off"
         />

         <label htmlFor="book-time">Choose time</label>
         <select
         id="book-time"
         value={selectTime}
         onChange={handleTimeChange}
         autoComplete="off"
         >
         {availableTimes.length > 0 ? (
          availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
         ))
        ) : (
          <option value ="" disabled>
            No times available
          </option>
        )}
         </select>

         <label htmlFor="attendees">Number of attendees</label>
         <input
         type="number"
         id="attendees"
         value={attendees}
         min="1"
         max="5"
         onChange={handleAttendeesChange}
         autoComplete="off"
         />

         <label htmlFor="name">Name</label>
         <input
         type="text"
         minLength="3"
         id="name"
         value={name}
         placeholder = "name"
         onChange={handleNameChange}
         autoComplete="given-name"
         required
         ></input>

         <input type="submit" value="Make your booking"/>
      </form>
 );
}

export default Book;