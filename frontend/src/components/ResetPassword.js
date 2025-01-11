import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../index.css';

const ResetPassword = ({ handleError }) => {
  const navigate = useNavigate();
  const { token } = useParams(); // Extract token from URL params
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log('Token from URL:', token);
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      return handleError('Please enter a valid password');
    }

    if (!token) {
      return handleError('Invalid or missing reset token');
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/reset-password/${token}`,
        { password }
      );
      alert(response.data.message);  // Show success message
      navigate('/');  // Redirect after successful reset
    } catch (error) {
      handleError(error.response?.data.error || 'Password reset failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button
            type="button"
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button type="submit" className="submit-button">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
