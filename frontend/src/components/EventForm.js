import React, { useState } from "react";
import { useEventsContext } from "../hooks/useEventContext";


const EventForm = () => {
  const {dispatch} = useEventsContext()

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)



  const handleSubmit = async(e) => {
    e.preventDefault();

    const event = {title, date, description, volunteers: 0}
    
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDate('')
      setDescription('')
      
       
      dispatch({type: 'CREATE_EVENT', payload: json})
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h4>Add New Event</h4>
      
        <label>Event Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
          />
        
        <label>Date:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            required
          />
       
        <label>Event Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            required
          ></textarea>

        <button type="submit">Add Event</button>
        {error && <div className="error">{error}</div>}
      </form>
  );
};

export default EventForm;
