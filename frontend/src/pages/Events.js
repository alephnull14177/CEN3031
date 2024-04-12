import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEventsContext } from "../hooks/useEventContext";

//components
import EventDetails from "../components/eventDetails"
import EventForm from "../components/EventForm";

const Events = () => {
  const { user } = useAuthContext();
  const {events, dispatch} = useEventsContext()

  useEffect(() => {
    document.title = "Events | Downtown Volunteers";
    const fetchEvents = async()=>{
      const response = await fetch('/api/events')
      const json = await response.json()

      if (response.ok){
          dispatch({type: 'SET_EVENTS', payload: json})
      }
    }
    fetchEvents()
  }, [dispatch])

  

  

  return (
    <div className="Events">
      <div className="events">
        {events && events.map((event)=>(
          <EventDetails event = {event} key={event._id}  />
        ))}
      </div>
     {user.isAdmin && <EventForm />}
    </div>
  );
};

export default Events;


