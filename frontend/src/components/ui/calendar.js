// src/components/ui/calendar.js
import React from 'react';
import Calendar from 'react-calendar'; // or your custom calendar component

const CustomCalendar = ({ className, classNames }) => {
  return (
    <Calendar className={className} tileClassName={classNames} />
  );
};

export default CustomCalendar;
