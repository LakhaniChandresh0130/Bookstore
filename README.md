# Bookstore Management System

## Overview

The Bookstore Management System is a full-stack web application developed using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to manage bookstore operations such as managing books, authors, genres, and customer orders.

## Features

- User Authentication and Authorization (Admin and Customer roles)
- CRUD Operations for Books, Authors, and Genres
- Book Search and Filter Functionality
- Customer Order Management
- Shopping Cart and Checkout Process
- Responsive Design for Mobile and Desktop

## Technologies Used

- **Frontend**: React, Redux, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Styling**: CSS, Bootstrap, Material-UI

## Prerequisites

- Node.js and npm
- MongoDB

## Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/LakhaniChandresh0130/bookstore.git
    cd bookstore
    ```

2. **Install backend dependencies**
    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies**
    ```sh
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**

    Create a `.env` file in the `backend` directory with the following content:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Running the Application

1. **Start the backend server**
    ```sh
    cd backend
    npm start
    ```

2. **Start the frontend server**
    ```sh
    cd ../frontend
    npm start
    ```

3. Open your browser and go to `http://localhost:4002` to see the application in action.

## Project Structure
bookstore/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── .env
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── package.json
└── README.md


## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login a user
