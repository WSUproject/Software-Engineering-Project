import React, { useState } from 'react';
import './CreateEventForm.css'; // Ensure you have this CSS file

function CreateEventForm() {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventOrganizer: '',
    eventTag: '',
    date: '',
    startTime: '',
    endTime: '',
    state: '',
    city: '',
    venue: '',
    description: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let formIsValid = true;

    // Validate each field - check for empty values for simplicity
    Object.entries(eventData).forEach(([key, value]) => {
      if (!value.trim()) {
        formIsValid = false;
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1).split(/(?=[A-Z])/).join(' ')} is required.`;
      }
    });

    setErrors(newErrors);

    if (formIsValid) {
      console.log(eventData);
      // Form is valid, submit the data
    }
  };

  const handleCancel = () => {
    // Reset the form fields and errors
    setEventData({
      eventName: '',
      eventOrganizer: '',
      eventTag: '',
      date: '',
      startTime: '',
      endTime: '',
      state: '',
      city: '',
      venue: '',
      description: ''
    });
    setErrors({});
  };

  console.log(errors);

  return (
    <div className="create-event-form">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
      <div className="error-message">{errors["eventName"]}</div>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={eventData.eventName}
          onChange={handleChange}
        />
        <div className="error-message">{errors["eventOrganizer"]}</div>
        <input
          type="text"
          name="eventOrganizer"
          placeholder="Event Organizer"
          value={eventData.eventOrganizer}
          onChange={handleChange}
        />
        <div className="error-message">{errors["eventTag"]}</div>
        <input
          type="text"
          name="eventTag"
          placeholder="Event Tag"
          value={eventData.eventTag}
          onChange={handleChange}
        />
        <div className="error-message">{errors["date"]}</div>
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
        />
        <div className="error-message">{errors["startTime"]}</div>
        <input
          type="time"
          name="startTime"
          placeholder="Start Time"
          value={eventData.startTime}
          onChange={handleChange}
        />
        <div className="error-message">{errors["endTime"]}</div>
        <input
          type="time"
          name="endTime"
          placeholder="End Time"
          value={eventData.endTime}
          onChange={handleChange}
        />
        <div className="error-message">{errors["state"]}</div>
        <input
          type="text"
          name="state"
          placeholder="State"
          value={eventData.state}
          onChange={handleChange}
        />
        <div className="error-message">{errors["city"]}</div>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={eventData.city}
          onChange={handleChange}
        />
        <div className="error-message">{errors["venue"]}</div>
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={eventData.venue}
          onChange={handleChange}
        />
        <div className="error-message">{errors["description"]}</div>
        <textarea
          name="description"
          placeholder="Description"
          value={eventData.description}
          onChange={handleChange}
        ></textarea>
        <div className="form-actions">
          <button type="submit">Create</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
        {/* Display validation errors */}
        {/* {Object.keys(errors).map((key) => (
          <div key={key} className="error-message">{errors[key]}</div>
        ))} */}
      </form>
    </div>
  );
}

export default CreateEventForm;