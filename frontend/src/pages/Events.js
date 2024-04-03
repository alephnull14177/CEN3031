import React, { useState, useEffect } from "react";
import EventForm from '../components/EventForm';
import { useAuthContext } from "../hooks/useAuthContext";

const Events = () => {
  const { user } = useAuthContext();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    document.title = "Events | Downtown Volunteers";
  }, []);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event" key={index}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Description: {event.description}</p>
          </div>
        ))}
      </div>
      {user && <EventForm addEvent={addEvent} />}
    </div>
  );
};

export default Events;
