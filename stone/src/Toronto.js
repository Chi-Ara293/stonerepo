import React, { useState, useEffect } from 'react';

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

  return (
    <div className='toronto-container'>
      <h4 className='toronto-title'>Toronto, Canada Time</h4>
      <p className='toronto-time'>{time}</p>
    </div>
  );
};

export default Toronto;
