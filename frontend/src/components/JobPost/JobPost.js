import React, { useState } from "react";
import "./JobPostings.css";
import axios from "axios";

const CreateJobPost = () => {
  const [jobData, setJobData] = useState({
    institutionName: "",
    post: "",
    level: "",
    vacancy: "",
    type: "",
    salary: "",
    deadline: "",
    state: "",
    city: "",
    venue: "",
    education: "",
    experience: "",
    specifications: "",
    description: "",
    imageURL: "image",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
    if (!value.trim()) {
      setErrors({ ...errors, [name]: `${name} is required.` });
    } else {
      let newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assume all fields are required for simplicity, check for empty fields
    let newErrors = {};
    let isValid = true;
    Object.keys(jobData).forEach((key) => {
      if (!jobData[key].trim()) {
        isValid = false;
        newErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required.`;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log("Submitted Data:", jobData);
      // Handle the job post creation here, such as sending data to an API

      await axios.post("http://127.0.0.1:3000/api/jobs", jobData).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  const handleCancel = () => {
    // Clear form and errors
    setJobData({
      institutionName: "",
      post: "",
      level: "",
      vacancy: "",
      type: "",
      salary: "",
      deadline: "",
      state: "",
      city: "",
      venue: "",
      education: "",
      experience: "",
      specifications: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <div className="size">
      <div className="create-job-post">
        <form onSubmit={handleSubmit}>
          <h2>Create Vacancy</h2>

          {/* Input fields for job post */}
          {/* Repeat this pattern for each field */}
          <input
            type="text"
            name="institutionName"
            placeholder="College/institutionName"
            value={jobData.institutionName}
            onChange={handleInputChange}
          />
          {errors.institutionName && (
            <div className="error-message">{errors.institutionName}</div>
          )}

          {/* ... other fields ... */}

          <input
            type="text"
            name="post"
            placeholder="Post"
            value={jobData.post}
            onChange={handleInputChange}
          />
          {errors.post && <div className="error-message">{errors.post}</div>}

          <input
            type="text"
            name="level"
            placeholder="Level"
            value={jobData.level}
            onChange={handleInputChange}
          />
          {errors.level && <div className="error-message">{errors.level}</div>}

          <input
            type="text"
            name="vacancy"
            placeholder="Vacancy"
            value={jobData.vacancy}
            onChange={handleInputChange}
          />
          {errors.vacancy && (
            <div className="error-message">{errors.vacancy}</div>
          )}

          <input
            type="text"
            name="type"
            placeholder="Type"
            value={jobData.type}
            onChange={handleInputChange}
          />
          {errors.type && <div className="error-message">{errors.type}</div>}

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={jobData.salary}
            onChange={handleInputChange}
          />
          {errors.salary && (
            <div className="error-message">{errors.salary}</div>
          )}

          <input
            type="text"
            name="deadline"
            placeholder="Deadline"
            value={jobData.deadline}
            onChange={handleInputChange}
          />
          {errors.deadline && (
            <div className="error-message">{errors.deadline}</div>
          )}

          <input
            type="text"
            name="state"
            placeholder="State"
            value={jobData.state}
            onChange={handleInputChange}
          />
          {errors.state && <div className="error-message">{errors.state}</div>}

          <input
            type="text"
            name="city"
            placeholder="City"
            value={jobData.city}
            onChange={handleInputChange}
          />
          {errors.city && <div className="error-message">{errors.city}</div>}

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={jobData.venue}
            onChange={handleInputChange}
          />
          {errors.venue && <div className="error-message">{errors.venue}</div>}

          <input
            type="text"
            name="education"
            placeholder="Education"
            value={jobData.education}
            onChange={handleInputChange}
          />
          {errors.education && (
            <div className="error-message">{errors.education}</div>
          )}

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={jobData.experience}
            onChange={handleInputChange}
          />
          {errors.experience && (
            <div className="error-message">{errors.experience}</div>
          )}

          <textarea
            name="specifications"
            placeholder="Other Specification"
            value={jobData.specifications}
            onChange={handleInputChange}
          ></textarea>
          {errors.specifications && (
            <div className="error-message">{errors.specifications}</div>
          )}

          <textarea
            name="description"
            placeholder="Job Description"
            value={jobData.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && (
            <div className="error-message">{errors.description}</div>
          )}

          {/* Form buttons */}
          <div className="form-buttons">
            <button type="submit">Create</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobPost;
