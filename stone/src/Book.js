import { useState } from "react";

const Book = ({availableTimes, updateTimes}) => {
const [selectDate, setSelectDate] = useState('')
const [selectTime, setSelectTime] = useState('')
const [attendees, setAttendees] = useState(1)
const [name, setName] = useState('')

const handleDateChange = (e) => {
  setSelectDate(e.target.value);
  updateTimes(e.target.value)
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
}

return (
      <form
       style={{display: "grid", maxWidth: '200px', gap: '20px'}}
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
         {availableTimes.map((time, index) =>(
          <option key={index} value={time}>{time}</option>
         ))}
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
         id="name"
         value={name}
         onChange={handleNameChange}
         autoComplete="given-name"
         ></input>

         <input type="submit" value="Make your booking"/>
      </form>
    )
}

export default Book;