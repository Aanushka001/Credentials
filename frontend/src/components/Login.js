import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../index.css';

const Login = ({ handleError }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', response.data.token);
      setSuccessMessage(response.data.message);
      setFormData({ username: '', password: '' });
      navigate('/'); // Navigate to the home page or desired route
    } catch (error) {
      handleError(error.response?.data.error || 'Login failed');
    }
  };

  return (
    <div className="form-container">
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;
