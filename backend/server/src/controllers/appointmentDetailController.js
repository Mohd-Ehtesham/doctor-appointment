const User = require("../models/userSchema");
const Appointment = require("../models/appointmentSchema");

// Post new appointment detail
const registerAppointment = async (request, response) => {
  try {
    // Get the logged-in user's ID and role from the authentication middleware
    const { id: userId, role } = request.user; // Extract the user ID and role from request.user

    // Fetch the patient details from the User collection using the user ID
    const patient = await User.findById(userId);

    if (!patient) {
      return response.status(404).json({ message: "Patient not found" });
    }

    // Check if the user has the 'patient' role
    if (role !== "patient") {
      return response
        .status(403)
        .json({ message: "Only patients can create appointments" });
    }

    // Destructure the remaining fields from the request body
    const {
      doctor,
      comments,
      department,
      uploadReport,
      appointmentDate,
      appointmentTime,
    } = request.body;

    // Create a new appointment object
    const newAppointment = new Appointment({
      patient: {
        _id: patient._id,
        name: patient.name,
        email: patient.email,
      },
      doctor,
      comments,
      department,
      uploadReport,
      appointmentDate,
      appointmentTime,
    });

    // Save the new appointment to the database
    await newAppointment.save();

    return response.status(201).json({
      message: "New Appointment added successfully...",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Error adding new appointment:", error);
    return response
      .status(500)
      .json({ message: "Failed to add new Appointment..." });
  }
};

// Get all appointments detail
const getAppointment = async (request, response) => {
  try {
    const appointment = await Appointment.find();
    console.log(appointment);
    response
      .status(200)
      .json({ message: "Successfully Fetched Appointments...", appointment });
  } catch (error) {
    console.error("Error adding new appointment:", error);
    response.status(500).json({ message: "Failed to fetch appointments..." });
  }
};

module.exports = { registerAppointment, getAppointment };
