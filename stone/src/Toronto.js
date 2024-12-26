import React, { useState, useEffect } from 'react';

const Toronto = () => {
    const [time, setTime] = useState(new Date().toLocaleString('en-US', {
        timeZone: 'America/Toronto',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));

    useEffect(() => {
     const interval = setInterval(() => { setTime(new Date().toLocaleString('en-US', {
        timeZone: 'America/Toronto',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));
     }, 60000);

      return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <h4>Toronto, Canada Time</h4>
      <p>{time}</p>
    </div>
  );
};

export default Toronto;
