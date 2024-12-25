import { useLocation } from "react-router-dom";

const Confirmation = () => {
    const location = useLocation();
    const { selectDate, selectTime, attendees, name } = location.state || {};

   return(
    <div>
      <h2>Booking Confirmed</h2>
        <p><strong>Date:</strong>{selectDate}</p>
        <p><strong>Time:</strong>{selectTime}</p>
        <p><strong>Attendees:</strong>{attendees}</p>
        <p><strong>Name:</strong>{name}</p>
    </div>
   )
}

export default Confirmation;