API Documentation

Overview

This document provides detailed information on the API endpoints for a appointments, services , Adding Booking details , Adding patient details, Adding the users , route for login the user and getting the services and appointments.

Base URL:
https://doctor-appointment-loir.onrender.com/

## User Management

Register a User
POST /register
Description: Register a new user (patient, doctor, or admin).
Body:
json
{
"name": "John Doe",
"email": "john@example.com",
"password": "password123",
"role": "patient"
}

Response:
json
{
"message": "User registered successfully",
"token": "jwt-token"
}

## Login A User

POST /login
Description: Authenticate user and get token.
Body:
json
{
"email": "john@example.com",
"password": "password123"
}

Response:
json
{
"message": "Login successful",
"token": "jwt-token",
"user": {
"id": "userId",
"name": "John Doe",
"role": "patient"
}
}

## Get User Profile

GET /users/profile
Description: Get logged-in user's profile.
Headers:
Authorization: Bearer <token>
Response:
json
Copy code
{
"id": "userId",
"name": "John Doe",
"email": "john@example.com",
"role": "patient",
"appointments": []
}

## Appointment Management

POST /appointment
Description: Book an appointment with a doctor.
Headers:
Authorization: Bearer <token> (patient only)
Body:
json
{
"doctorId": "doctorId",
"date": "2024-11-01",
"time": "10:00 AM"
}

Response:
json
{
"message": "Appointment booked successfully",
"appointment": {
"id": "appointmentId",
"doctorId": "doctorId",
"patientId": "patientId",
"date": "2024-11-01",
"time": "10:00 AM"
}
}

## Get My Appointments

GET /appointment
Description: Get all appointments for the logged-in user.
Headers:
Authorization: Bearer <token> (patient or doctor)
Response:
json
[
{
"id": "appointmentId",
"doctorId": "doctorId",
"date": "2024-11-01",
"time": "10:00 AM",
"status": "Booked"
}
]

## Get All Services

GET /services
Description: Retrieve all available hospital services.
Response:
json
[
{
"id": "serviceId",
"name": "Cardiology",
"description": "Heart specialist services",
"price": 100
}
]

## Add a New Service

POST /services
Description: Add a new medical service (doctor only).
Headers:
Authorization: Bearer <token> (doctor role required)
Body:
json
{
"name": "Neurology",
"description": "Brain and nervous system treatment",
"price": 200
}

Response:
json
{
"message": "Service added successfully",
"service": {
"id": "serviceId",
"name": "Neurology",
"description": "Brain and nervous system treatment",
"price": 200
}
}

## Add a New Patient Details

POST /patient
Description: Add a new patient detail.
Headers:{
"Content-Type": "application/json",
},
Body:
json
{
"firstName":"Amitabh",
"lastName":"Bacchan",
"phone":"0000000000",
"email":"bachhan@gmail.com",
"address1":"kw-107 j.k ashiyana",
"address2":"gaus nagar kareli",
"city":"allahabad",
"state":"uttar-pradesh",
"zip":"211016",
}

Response:
json
{
"message": "Patient registered successfully..."
}

Error Handling
400 Bad Request: For invalid data.
401 Unauthorized: For unauthenticated users.
403 Forbidden: For users without permission.
404 Not Found: For non-existent resources.
This documentation provides the key API routes and expected request/response structures for the Doctor Appointment app.
