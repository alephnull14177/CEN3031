import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

const Events = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    document.title = "Events | Downtown Volunteers";
  });

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        <div className="event">
          <h3>Event Title 1</h3>
          <p>Date: March 30, 2024</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="event">
          <h3>Event Title 2</h3>
          <p>Date: April 5, 2024</p>
          <p>Description: Nulla facilisi. Phasellus fermentum ex ac lectus fermentum, vel.</p>
        </div>
        {/* Add more events as needed */}
      </div>
    </div>
  );
}

export default Events;