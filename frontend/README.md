# Doctor Appointment App - Frontend

This is the frontend of the **Doctor Appointment App**, a responsive web application built with React, Redux, Tailwind CSS, and Axios. It allows users to register as patients, book appointments, view services, and manage their profiles.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Available Scripts](#available-scripts)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login (with role-based access control)
- Book appointments with doctors
- View and manage services offered by the hospital
- View and manage user profiles
- Role-based dashboard for admin, doctors, and patients
- Responsive design for all screen sizes

## Tech Stack

**Frontend:**

- React.js
- React Router
- Redux (Thunk for async actions)
- Axios (for API requests)
- Tailwind CSS (for styling)
- React Toastify (for notifications)
- Date-fns (for date formatting)
- React Icons

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohd-Ehtesham/doctor-appointment.git
   ```

## Usage

After starting the development server, open your browser and go to http://localhost:3000 to view the application.
You can register a new patient or log in using existing credentials.
Depending on the user role (patient, doctor, or admin), the app will display different dashboard options.

## File Structure

frontend/
│
├── public/ # Public assets
├── src/
│ ├── components/ # Reusable components
│ ├── pages/ # Page components for routing
│ ├── redux/ # Redux store, actions, and reducers
│ ├── services/ # API service functions
│ ├── utils/ # Utility functions and constants
│ ├── App.js # Main app component
│ ├── index.js # Entry point
│ └── ... # Other config files
├── tailwind.config.js # Tailwind CSS configuration
├── .env # Environment variables
├── package.json # Project dependencies and scripts
└── README.md # This file

## Available Scripts

In the project directory, you can run the following scripts:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

npm test
Launches the test runner in the interactive watch mode.

## Responsive Design

The app is fully responsive and has been designed for all screen sizes:

Mobile: Screens smaller than 640px (e.g., smartphones)
Tablet: Screens between 640px and 1024px
Desktop: Screens larger than 1024px
We've used Tailwind CSS to ensure the UI adapts smoothly across various screen sizes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or create an issue if you find any bugs or have suggestions for new features.

## License

You can modify the details like the repository URL and license according to your project. This README covers the major aspects like installation, usage, features, and structure of the frontend of the Doctor Appointment app.
