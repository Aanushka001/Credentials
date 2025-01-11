# Authentication System with Password Reset

## Overview

A simple authentication system built using **React** (frontend) and **Node.js** with **Express** and **MongoDB** (backend). It supports user registration, login, and password reset functionality.

## Features

- User Registration
- User Login
- Forgot Password (email-based reset link)
- Reset Password (using a token from email)

## Technologies

- **Frontend**: React, React Router, Axios, CSS
- **Backend**: Node.js, Express, MongoDB, bcryptjs, JWT, Nodemailer, Crypto

## Installation

### Backend

1. Clone the repo and navigate to the `backend` folder.
2. Install dependencies: `npm install`
3. Set up a `.env` file with your MongoDB URI, JWT secret, and email credentials.
4. Run the server: `npm start`

### Frontend

1. Navigate to the `frontend` folder.
2. Install dependencies: `npm install`
3. Run the React app: `npm start`

The app will be available at `http://localhost:3000` (Frontend) and `http://localhost:5000` (Backend).




## API Endpoints

- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Login a user
- `POST /api/users/forgot-password`: Request password reset
- `POST /api/users/reset-password/:token`: Reset password with token


## Setup Instructions

### Clone the Project

Open your terminal and run the following command:

```bash
git clone https://github.com/Aanushka001/Credentials.git