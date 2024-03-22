import React, { useState } from 'react';

function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setEmailError('');
            return true;
        } else {
            setEmailError('Please enter a valid email address.');
            return false;
        }
    };

    const validatePassword = (password) => {
        if (password.length < 5) {
            setPasswordError('Password must be at least 5 characters long.');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (!isEmailValid || !isPasswordValid) {
            console.error('Form has errors.');
            return; // Stop the submission if there are errors.
        }

        console.log('Form submitted:', { email, password });
        // Here you can handle the form submission, such as sending data to a server.
    };

    return (
        <div className="container mt-5">
            <h2>Signup Form</h2>
            <form noValidate onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;
