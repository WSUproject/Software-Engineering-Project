import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            return 'Email is required.';
        } else if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }
        return '';
    };

    const validatePassword = (password) => {
        if (password.trim() === '') {
            return 'Password is required.';
        } else if (password.length < 8) {
            return 'Password must be at least 8 characters long.';
        }
        return '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailErrorMsg = validateEmail(email);
        const passwordErrorMsg = validatePassword(password);

        setEmailError(emailErrorMsg);
        setPasswordError(passwordErrorMsg);

        if (!emailErrorMsg && !passwordErrorMsg) {
            console.log('Form submitted:', { email, password });
            // Handle the form submission here.
        } else {
            console.error('Validation errors:', { emailErrorMsg, passwordErrorMsg });
        }
    };

    return (
        <div className="container mt-5">
            <form noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    />
                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
