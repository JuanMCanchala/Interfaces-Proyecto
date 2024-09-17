import { useState } from 'react';
import './calendario.css';

const Calendario = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const events = [
    { date: new Date(2024, 8, 2), title: 'Gym' }, // Septiembre (8), día 2
    { date: new Date(2024, 8, 4), title: 'Gym' }, // Septiembre (8), día 4
    { date: new Date(2024, 8, 5), title: 'Fotografía' }, // Septiembre (8), día 5
    // Puedes agregar más eventos aquí
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    const firstDay = firstDayOfMonth(currentMonth, currentYear);
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div className="empty-cell" key={`empty-${i}`}></div>);
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const eventForDay = events.find(event => event.date.getDate() === day && event.date.getMonth() === currentMonth);
      calendarDays.push(
        <div className="day-cell" key={day}>
          {day}
          {eventForDay && <div className="event">{eventForDay.title}</div>}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{months[currentMonth]} {currentYear}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </header>
      <div className="calendar-grid">
        {daysOfWeek.map(day => (
          <div key={day} className="day-name">{day}</div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendario;
