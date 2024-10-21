const express = require("express");
const {
  registerPatientDetails,
} = require("../controllers/patientDetailController");

// router object
const router = express.Router();

// routes

// route to post a new patient
router.post("/patient", registerPatientDetails);

module.exports = router;
