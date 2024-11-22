import React, { useState } from 'react';
import './FormValidation.css';

const FormValidation = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formValues.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formValues.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formValues.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Email is invalid.';
    if (!formValues.password) newErrors.password = 'Password is required.';
    else if (formValues.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (!formValues.confirmPassword)
      newErrors.confirmPassword = 'Confirm password is required.';
    else if (formValues.password !== formValues.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    if (!formValues.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required.';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>

        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formValues.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && <p className="success">Form submitted successfully!</p>}
    </div>
  );
};

export default FormValidation;
