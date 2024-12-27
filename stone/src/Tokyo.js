import React, { useState, useEffect } from 'react';

const Tokyo = () => {
  const [time, setTime] = useState(new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
 }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
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
      <h4 style={{color:'purple'}}>Tokyo, Japan Time</h4>
      <p>{time}</p>
    </div>
  );
};

export default Tokyo;
