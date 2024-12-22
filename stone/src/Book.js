const Book = () => {
    return (
      <form style={{display: "grid", maxWidth: '200px', gap: '20px'}}>
         <label htmlFor="book-date">Choose date</label>
         <input type="date" id="book-date"/>

         <label htmlFor="book-time">Choose time</label>
         <select id="book-time">
             <option>9:00</option>
             <option>10:00</option>
             <option>14:00</option>
             <option>15:00</option>
             <option>17:00</option>
             <option>18:00</option>
         </select>

         <label htmlFor="time-range">Time range(minutes)</label>
         <input type="number" placeholder="15" min="15" max="45" id="time-range"/>

         <label htmlFor="name">Name</label>
         <input type="text" id="name"></input>

         <input type="submit" value="Make your booking"/>
      </form>
    )
}

export default Book;