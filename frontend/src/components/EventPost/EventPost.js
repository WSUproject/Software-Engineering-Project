import React, { useState } from 'react';

function EventPostForm() {
    const [eventName, setEventName] = useState('');
    const [eventOrganizer, setEventOrganizer] = useState('');
    const [eventTag, setEventTag] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [venue, setVenue] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle the form submission, like sending data to a server.
        console.log('Event submitted:', {
            eventName,
            eventOrganizer,
            eventTag,
            date,
            startTime,
            endTime,
            state,
            city,
            venue,
            description
        });
    };

    return (
        <div className="container mt-3">
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Event Organizer"
                        value={eventOrganizer}
                        onChange={(e) => setEventOrganizer(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Event Tag"
                        value={eventTag}
                        onChange={(e) => setEventTag(e.target.value)}
                    />
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="time"
                            className="form-control"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="time"
                            className="form-control"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Venue"
                            value={venue}
                            onChange={(e) => setVenue(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
                <button type="button" className="btn btn-secondary ms-2">Cancel</button>
            </form>
        </div>
    );
}

export default EventPostForm;
