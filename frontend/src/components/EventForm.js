import React, { useState } from "react";
import { useEventsContext } from "../hooks/useEventContext";


const EventForm = ({ addEvent }) => {
  const {dispatch} = useEventsContext()

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)



  const handleSubmit = async(e) => {
    e.preventDefault();

    const event = {title, date, time, description}
    
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
      setTime('')
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

        <label>Time:</label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            required
          />
       
        <label>Description: </label>
          <input
            name="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            required
          ></input>
        
        <button type="submit">Add Event</button>
        {error && <div className="error">{error}</div>}
      </form>
  );
};

export default EventForm;
