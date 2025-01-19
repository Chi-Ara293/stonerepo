import React, { useState, useEffect } from 'react';

const Japan = () => {
  const [time, setTime] = useState(new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Tokyo',
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
 }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
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
    <div className='japan-container'>
      <h4 className='japan-title'>Japan Time</h4>
      <p className='japan-time'>{time}</p>
    </div>
  );
};

export default Japan;
