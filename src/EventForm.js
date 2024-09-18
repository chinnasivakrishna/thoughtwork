import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    time: '',
    description: ''
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.name && eventData.date && eventData.time) {
      addEvent(eventData);
      setEventData({ name: '', date: '', time: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Event Name" value={eventData.name} onChange={handleChange} required />
      <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
      <input type="time" name="time" value={eventData.time} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={eventData.description} onChange={handleChange} />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
