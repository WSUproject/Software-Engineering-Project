import React, { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please enter a valid email address.");
      return false;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters long.");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      console.error("Form has errors.");
      return; // Stop the submission if there are errors.
    }

    console.log("Form submitted:", { email, password });
    // Here you can handle the form submission, such as sending data to a server.
  };

    return (
        <div className="container mt-5">
            <h2>Signup Form</h2>
            <form noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label className="form-label">UserName</label>
                    <input
                        type="username"
                        className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                        id="usernameInput"
                        value={userName}
                        onChange={(e) => setUserame(e.target.value)}
                        onBlur={() => validateUsername(userName)}
                    />
                    {userNameError && <div className="invalid-feedback">{Error}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumberInput" className="form-label">PhoneNumber</label>
                    <input
                        type="phoneNumber"
                        className={`form-control ${phoneNumberError ? 'is-invalid' : ''}`}
                        id="phoneNumberInput"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                        onBlur={() => validatephoneNumber(phoneNumber)}
                    />
                    {phoneNumberError && <div className="invalid-feedback">{phoneNumberError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email Address</label>
                    <input
                        type="email"
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => validateEmail(email)}
                    />
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => validatePassword(password)}
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPasswordInput" className="form-label">Confirm Password</label>
                    <input
                        type="confirmPassword"
                        className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                        id="confirmPasswordInput"
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        onBlur={() => validateconfirmPassword(confirmPassword)}
                    />
                    {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="stateInput" className="form-label">state</label>
                    <input
                        type="state"
                        className={`form-control ${stateError ? 'is-invalid' : ''}`}
                        id="stateInput"
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                        onBlur={() => validatestate(state)}
                    />
                    {stateError && <div className="invalid-feedback">{stateError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="cityInput" className="form-label">city</label>
                    <input
                        type="city"
                        className={`form-control ${cityError ? 'is-invalid' : ''}`}
                        id="cityInput"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                        onBlur={() => validatecity(city)}
                    />
                    {cityError && <div className="invalid-feedback">{cityError}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="streetInput" className="form-label">street</label>
                    <input
                        type="street"
                        className={`form-control ${streetError ? 'is-invalid' : ''}`}
                        id="streetInput"
                        value={street}
                        onChange={(e) => setstreet(e.target.value)}
                        onBlur={() => validatestreet(street)}
                    />
                    {streetError && <div className="invalid-feedback">{streetError}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;
