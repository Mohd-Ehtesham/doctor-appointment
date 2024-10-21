const mongoose = require("mongoose");
const Patient = require("../models/patientDetailsSchema");

const registerPatientDetails = async (request, response) => {
  try {
    // check if patient details already exists
    const existingPatient = await Patient.findOne({
      email: request.body.email,
    });

    if (existingPatient) {
      return response
        .status(400)
        .json({ success: false, message: "Patient already exists" });
    }

    // create a new patient
    const newPatient = new Patient({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      phone: request.body.phone,
      email: request.body.email,
      address1: request.body.address1,
      address2: request.body.address2,
      city: request.body.city,
      state: request.body.state,
      zip: request.body.zip,
    });

    // saving new patient
    await newPatient.save();

    // send a response after saving a new patient
    response
      .status(201)
      .json({ success: true, message: "Patient registered successfully..." });
  } catch (error) {
    // send an error response
    response.status(500).json({
      success: false,
      message: "Some error occured in registering new patient...",
      error: error.message,
    });
  }
};

module.exports = { registerPatientDetails };
