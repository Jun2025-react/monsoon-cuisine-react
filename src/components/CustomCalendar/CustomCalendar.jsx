// CustomCalendar.jsx
import React, { useState } from 'react';
import styles from './CustomCalendar.module.css';
import { Button } from 'react-bootstrap';
//disabled
const CustomCalendar = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay(); // Day index of 1st day (0 = Sun, 6 = Sat)

  const daysInMonth = [];
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    daysInMonth.push(i);
  }

  const goToPrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const isSelected = (day) => {
    return (
      selectedDate &&
      selectedDate.getFullYear() === currentDate.getFullYear() &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getDate() === day
    );
  };

  return (
    <div className={`${styles.customCalendar} mt-3`}>
      <div className={`${styles.calendarHeader}`}>
        <Button variant='danger' onClick={goToPrevMonth} style={{ width: 32, margin: 0 }}>‹</Button>
        <span style={{ fontWeight: 'bold' }}>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </span>
        <Button variant='danger' onClick={goToNextMonth} style={{ width: 32 }}>›</Button>
      </div>
      <div className={`${styles.calendarGrid}`}>
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d, i) => (
          <div key={i} className={`${styles.dayHeader}`}>{d}</div>
        ))}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} className={`${styles.emptyCell}`}></div>
        ))}
        {daysInMonth.map((day) => {
          const isDisabled = day < new Date().getDate() && currentDate.getMonth() === new Date().getMonth();

          return (
            <div
              key={day}
              className={`${styles.dayCell} ${isSelected(day) ? styles.selected : ''} ${isDisabled ? styles.disabled : ''}`}
              onClick={() => {
                if(isDisabled) return;
                onDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
              }
            }
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
