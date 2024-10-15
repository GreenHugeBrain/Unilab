import React, { useState, useEffect } from 'react';
import '../css/CountDown.css';

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 11,
    minutes: 22,
    seconds: 10
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              } else {
                clearInterval(timer);
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-boxes">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="countdown-box">
            <span className="countdown-value">{value.toString().padStart(2, '0')}</span>
            <span className="countdown-unit">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;   