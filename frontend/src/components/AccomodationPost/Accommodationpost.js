import React, { useState } from "react";
import "./AccomodationForm.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../../utils/ImageUploader";

const AccommodationForm = () => {
  const [formData, setFormData] = useState({
    roomType: "",
    rent: "",
    moveIn: "",
    space: "",
    amenities: "",
    rules: "",
    location: "",
    imageURL: "image",
  });
  const axios = useAxiosPrivate();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process the data
    console.log(formData);
    // Here you would usually send the data to the server

    await axios.post("http://127.0.0.1:3000/api/accommodations", formData).then(
      (response) => {
        console.log(response);
        navigate("/accommodations");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="form-container">
      <h2>List a Room</h2>
      <form onSubmit={handleSubmit}>
        {/* Room Type */}
        <ImageUploader setParentState={setFormData}></ImageUploader>

        <label htmlFor="roomType">Room Type</label>
        <select
          name="roomType"
          id="roomType"
          value={formData.roomType}
          onChange={handleChange}
        >
          <option value="">Select a room type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>

        {/* Rent */}
        <label htmlFor="rent">Rent</label>
        <input
          type="text"
          id="rent"
          name="rent"
          placeholder="Monthly rent"
          value={formData.rent}
          onChange={handleChange}
        />

        {/* Move In */}
        <label htmlFor="moveIn">Move In</label>
        <input
          type="text"
          id="moveIn"
          name="moveIn"
          placeholder="Date"
          value={formData.moveIn}
          onChange={handleChange}
        />

        {/* Talk about the Space */}
        <label htmlFor="space">Talk about the Space</label>
        <textarea
          id="space"
          name="space"
          placeholder="Describe the space"
          value={formData.space}
          onChange={handleChange}
        />

        {/* Amenities */}
        <label htmlFor="amenities">Amenities</label>
        <textarea
          id="amenities"
          name="amenities"
          placeholder="List the amenities"
          value={formData.amenities}
          onChange={handleChange}
        />

        {/* Roommate Rules */}
        <label htmlFor="rules">Roommate Rules</label>
        <textarea
          id="rules"
          name="rules"
          placeholder="Any rules for roommate"
          value={formData.rules}
          onChange={handleChange}
        />

        {/* Location */}
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Apartment or house location"
          value={formData.location}
          onChange={handleChange}
        />

        <div className="buttons">
          <button type="submit">Create</button>
          <button type="button" onClick={() => {}}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccommodationForm;
