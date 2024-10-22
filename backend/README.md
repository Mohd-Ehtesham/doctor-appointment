# Doctor Appointment - Backend

This is the backend of the Doctor Appointment system, built using **Node.js**, **Express**, and **MongoDB**. It handles user registration, authentication, appointment booking, and service management for doctors and patients.

## Features

- **User Authentication**: Registration, login, and role-based access control (Admin, Doctor, Patient).
- **Appointment Booking**: Patients can book, view, and manage appointments.
- **Service Management**: Doctors can add, edit, and remove services.
- **User Profile Management**: Users can update their profile information.
- **Error Handling**: Custom middleware for error handling and authentication.
- **Secure Passwords**: Passwords are hashed using `bcryptjs` for security.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohd-Ehtesham/doctor-appointment.git
   ```

## Scripts

The following scripts are available in package.json:

npm start: Starts the backend server with nodemon for live-reloading in development.
npm run test: Runs the test suite.
npm run build: Prepares the project for production.
npm run debug: Starts the server with debugging enabled.

## API Endpoints

Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login a user and return a JWT token.
User Profile
GET /api/users/profile: Get logged-in user's profile details.
PUT /api/users/profile: Update user profile.
Appointments
POST /api/appointments: Book a new appointment.
GET /api/appointments: Get all appointments for a logged-in user.
PUT /api/appointments/
: Update an existing appointment.
DELETE /api/appointments/
: Cancel an appointment.
Services
GET /api/services: Get all available services.
POST /api/services: Add a new service (Doctor only).
PUT /api/services/
: Update a service (Doctor only).
DELETE /api/services/
: Delete a service (Doctor only).

## Project Structure

/server
├── /src
│ ├── /controllers # Route controllers for handling requests
│ │ ├── appointmentController.js
│ │ ├── serviceController.js
│ │ └── userController.js
│ ├── /models # Mongoose models for MongoDB collections
│ │ ├── Appointment.js
│ │ ├── Service.js
│ │ └── User.js
│ ├── /routes # API routes
│ │ ├── appointmentRoutes.js
│ │ ├── serviceRoutes.js
│ │ └── userRoutes.js
│ ├── /middleware # Custom middleware (auth, error handling)
│ │ ├── authMiddleware.js
│ │ └── errorHandler.js
│ ├── /utils # Utility functions
│ │ ├── dbConnect.js # MongoDB connection
│ │ └── logger.js
│ ├── /config # Configuration (environment variables)
│ │ ├── env.js
│ │ └── keys.js
│ └── server.js # Entry point of the application
├── .env # Environment variables
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

## Contributing

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.

## License

This `README.md` provides an overview of the project, the setup process, API details, and project structure. You can adjust the file as necessary for your specific backend setup or additional features you may want to include.
