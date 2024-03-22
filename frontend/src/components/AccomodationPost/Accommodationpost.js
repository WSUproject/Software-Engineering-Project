import React, { useState } from 'react';

function AccommodationPostForm() {
    const [city, setCity] = useState('');
    const [roomType, setRoomType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // You would handle the form submission here, such as sending data to a server.
        console.log('Accommodation submitted:', { city, roomType, price, description });
    };

    return (
        <div className="container mt-3">
            <h2>Create Accommodation Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="cityInput" className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cityInput"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="roomTypeInput" className="form-label">Room Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="roomTypeInput"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="priceInput" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="priceInput"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descriptionTextarea" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="descriptionTextarea"
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

export default AccommodationPostForm;
