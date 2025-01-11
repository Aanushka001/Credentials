import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword'; // Import ForgotPassword component
import ResetPassword from './components/ResetPassword';
import './index.css';

const App = () => {
  const [formError, setFormError] = useState('');
  const [activeTab, setActiveTab] = useState('login');

  const handleError = (message) => {
    setFormError(message);
  };

  const renderTabContent = () => {
    if (activeTab === 'login') {
      return <Login handleError={handleError} />;
    }
    if (activeTab === 'register') {
      return <Register handleError={handleError} />;
    }
    return null;
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Authentication System</h1>
      {formError && <p className="error-message">{formError}</p>}

      <div className="tabs-header">
        <button
          onClick={() => setActiveTab('login')}
          className={activeTab === 'login' ? 'tab active' : 'tab'}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={activeTab === 'register' ? 'tab active' : 'tab'}
        >
          Register
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>

      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword handleError={handleError} />} />  {/* Forgot Password route */}
        <Route path="/reset-password/:token" element={<ResetPassword handleError={handleError} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
