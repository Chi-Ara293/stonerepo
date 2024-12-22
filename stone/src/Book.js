import { useState } from "react";

const Book = () => {
const [selectDate, setSelectDate] = useState('')
const [selectTime, setSelectTime] = useState('')
const [attendees, setAtendees] = useState(1)
const [name, setName] = useState('')

const availableTimes = [
"9:00", "10:00", "14:00", "15:00", "17:00", "18:00"
];

const handleDateChange = (e) => setSelectDate(e.target.value);
const handleTimeChange = (e) => setSelectTime(e.target.value);
const handleAttendeesChange = (e) => setAtendees(e.target.value);
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
      <form style={{display: "grid", maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
         <label htmlFor="book-date">Choose date</label>
         <input
         type="date"
         id="book-date"
         value={selectDate}
         onChange={handleDateChange}
         />

         <label htmlFor="book-time">Choose time</label>
         <select
         id="book-time"
         value={selectTime}
         onChange={handleTimeChange}
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
         />

         <label htmlFor="name">Name</label>
         <input
         type="text"
         id="name"
         value={name}
         onChange={handleNameChange}
         ></input>

         <input type="submit" value="Make your booking"/>
      </form>
    )
}

export default Book;