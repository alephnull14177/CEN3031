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

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    eventsList: {
      flex: 1,
      marginRight: "20px",
    },
    eventFormContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "right", // Center the content vertically
      alignItems: "center", // Center the content horizontally
      background: "#f0f0f0",
      padding: "30px 20px", 
      borderRadius: "22px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
      marginRight: "20px",
      marginLeft: "20px",
    },
    
  };
  

  return (
    <div className="Events" style={styles.container}>
      <div className="events" style={styles.eventsList}>
        {events &&
          events.map((event) => (
            <EventDetails event={event} key={event._id} />
          ))}
      </div>
      {user.isAdmin && (
        <div className="event-form" style={styles.eventFormContainer}>
          <EventForm />
        </div>
      )}
    </div>
  );
};

export default Events;