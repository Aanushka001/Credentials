import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../index.css';

const Register = ({ handleError }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending request to register...');
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error.response?.data.error || error.message);
      handleError(error.response?.data.error || 'Registration failed');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="input-field"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input-field"
        />
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="input-field"
          />
          <div onClick={() => setPasswordVisible(!passwordVisible)} className="password-toggle">
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
