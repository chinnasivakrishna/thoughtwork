import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';
import Filter from './Filter';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: Date.now(), ...newEvent }]);
  };

  const editEvent = (id, updatedEvent) => {
    setEvents(events.map(event => (event.id === id ? updatedEvent : event)));
  };

  // Delete event handler
  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="App">
      <EventForm addEvent={addEvent} />
      <Filter events={events} setFilteredEvents={setFilteredEvents} />
      <EventList 
        events={filteredEvents.length ? filteredEvents : events} 
        editEvent={editEvent} 
        deleteEvent={deleteEvent} 
      />
    </div>
  );
};

export default App;
