import React, { useState, useEffect } from 'react';
import location_icon from './assets/location_icon.png'

const Toronto = () => {
    const [time, setTime] = useState(new Date().toLocaleString('en-US', {
        timeZone: 'America/Toronto',
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));

    useEffect(() => {
     const interval = setInterval(() => { setTime(new Date().toLocaleString('en-US', {
        timeZone: 'America/Toronto',
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));
     }, 60000);

      return () => clearInterval(interval);
    }, []);

  const locationStyle={
    width: '40px',
    height: '40px',
    objectFit: 'contain'
  }

  return (
    <div className='toronto-container'>
      <div className='location'>
        <img src={location_icon} alt='Location-icon' style={locationStyle}></img>
        <h4 className='toronto-title'>Toronto, Canada Time</h4>
      </div>
      <p className='toronto-time'>{time}</p>
    </div>
  );
};

export default Toronto;
