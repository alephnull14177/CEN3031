import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEventsContext } from "../hooks/useEventContext";

// Components
import EventDetails from "../components/eventDetails";
import EventForm from "../components/EventForm";

const Events = () => {
  const { user } = useAuthContext();
  const { events, dispatch } = useEventsContext();

  useEffect(() => {
    document.title = "Events | Downtown Volunteers";
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_EVENTS", payload: json });
      }
    };
    fetchEvents();
  }, [dispatch]);

  return (
    <div className="Events" style={styles.container}>
      <div className="events" style={styles.eventsContainer}>
        {events &&
          events.map((event) => (
            <EventDetails event={event} key={event._id} />
          ))}
      </div>
      {user.isAdmin && <EventForm />}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "left", 
    background: "#f0f0f0",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    float: "right", 
  },
  heading: {
    marginBottom: "30px", 
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
  },
  inputGroup: {
    display: "grid",
    gridTemplateColumns: "1fr", // Adjust to full width for each input group
    gap: "10px",
    marginBottom: "10px", // Add spacing between input groups
  },
  addButton: {
    width: "150px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.3s, background-color 0.3s",
    margin: "10px", // Center the button horizontally
  },
  addButtonHover: {
    transform: "scale(1.05)",
    backgroundColor: "#0056b3",
  },
};

export default Events;