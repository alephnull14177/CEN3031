import React, { useState } from "react";


const EventForm = ({ addEvent }) => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    description: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent(eventDetails);
    setEventDetails({
      title: "",
      date: "",
      description: ""
    });
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h4>Add New Event</h4>
      
        <label>Event Title:</label>
          <input
            type="text"
            name="title"
            value={eventDetails.title}
            onChange={handleInputChange}
            required
          />
        
        <label>Date:</label>
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleInputChange}
            required
          />
       
        <label>Event Description:</label>
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleInputChange}
            required
          ></textarea>
        
        <button type="submit">Add Event</button>
      </form>
  );
};

export default EventForm;
