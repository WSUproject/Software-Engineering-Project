import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    userName: "",
    imageURL: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({ ...formData, imageURL: "imageURL" });
      axios
        .post("http://127.0.0.1:3000/auth/register", formData)
        .then((response) => {
          navigate("/sign-in");
        });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Username validation
    if (!formData.userName.trim()) {
      isValid = false;
      newErrors.userName = "Username is required";
    }

    // Image URL validation (simple validation for example purposes)
    // if (!formData.imageURL.trim()) {
    //   isValid = false;
    //   newErrors.imageURL = 'Image URL is required';
    // }

    // Email validation
    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Email is invalid";
    }

    // Phone Number validation
    if (!formData.phoneNumber.trim()) {
      isValid = false;
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      isValid = false;
      newErrors.phoneNumber = "Phone Number must contain only numbers";
    }

    // Password validation
    if (!formData.password) {
      isValid = false;
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      isValid = false;
      newErrors.password = "Password must be at least 6 characters";
    }

    // Address validation
    if (!formData.address.trim()) {
      isValid = false;
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Register</h1>
      <div>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        {errors.userName && <p className="error">{errors.userName}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupPage;
