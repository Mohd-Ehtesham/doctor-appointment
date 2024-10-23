This project is a web application for managing doctor appointments. Patients can register, log in, view available services, and book appointments with doctors. The app is built with a MERN stack (MongoDB, Express, React, Node.js) and implements features like role-based access control, authentication, appointment management, and service viewing.

## Table of Contents

Project Overview
Features
Technologies
Installation
API Endpoints
Database Design
Project Structure
Usage
Testing
Contributing
License

## Project Overview

The Doctor Appointment App allows patients to easily book appointments with doctors, view available medical services, and manage their profile. It supports role-based access for admins, doctors, and patients. Doctors can add services and manage appointments, while patients can register, log in, and book appointments.

## Features

Patient Registration and Login: Users can register and log in as patients.
Role-based Access Control: Different roles for admin, doctor, and patient.
Appointment Booking: Patients can book appointments with available doctors.
Service Management: Doctors can add services, and patients can view them.
Profile Management: Patients can manage their profiles, view appointments.
Authentication: JWT-based authentication for secure access.

## Technologies

Frontend: React, Tailwind CSS, Redux (with Thunk), React Router
Backend: Node.js, Express, MongoDB, Mongoose
Authentication: JWT-based authentication
State Management: Redux with Redux Thunk
Styling: Tailwind CSS
Database: MongoDB (using Mongoose)

## Installation

Backend Setup:
Clone the repository:

bash
git clone https://github.com/Mohd-Ehteshamdoctor-appointment.git
cd doctor-appointment-app/server
Install backend dependencies:

bash
npm install
Create a .env file in the root of the server folder and add the following environment variables:

env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT=5000
Start the backend server:

bash
npm start
Frontend Setup:
Navigate to the frontend folder:

bash
cd ../frontend
Install frontend dependencies:

bash
npm install
Start the frontend development server:

bash
npm start

## API Endpoints

User Registration
POST /register
Registers a new patient account.
Login
POST /login
Logs in a user (patient, doctor, or admin).
Book Appointment
POST /appointments
Authorization: Patient only (Bearer Token required)
Books an appointment with a doctor.
Get Appointments
GET /appointments/my
Authorization: Patient only (Bearer Token required)
Fetches the logged-in patient's appointments.
View Services
GET /services
View all available hospital services.
For more details on other endpoints, refer to API Documentation.

## Database Design

Users: Contains patient, doctor, and admin details.
Doctors: Stores specific doctor information like specialization and available times.
Appointments: Manages appointments between patients and doctors.
Services: Lists medical services available for patients to view.
Reviews (Optional): Allows patients to review services or doctors.
See the full database design here.

## Project Structure

bash
.
├── server
│ ├── src
│ │ ├── controllers
│ │ ├── models
│ │ ├── routes
│ │ ├── middleware
│ │ └── utils
│ ├── tests
│ ├── .env
│ └── server.js
├── frontend
│ ├── public
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── redux
│ └── App.js
├── README.md
└── package.json

## Usage

Register/Login: Patients can register and log in to book appointments.
Book Appointment: Select available doctors, services, and schedule an appointment.
View Appointments: Check upcoming and past appointments in the profile section.
Doctors: Can add services and manage patient appointments.
Admin: Manage doctors, services, and users from the admin panel.

## Testing

To run backend tests:

bash
cd server
npm test
To run frontend tests:

bash
cd frontend
npm test

## Contributing

Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

This README.md provides a comprehensive overview of the Doctor Appointment App project, from setup to usage and features, making it easy for new developers to contribute or set it up on their local machines.
