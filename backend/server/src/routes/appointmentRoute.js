const express = require("express");
const {
  registerAppointment,
  getAppointment,
} = require("../controllers/appointmentDetailController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// route to add appointment (protected)
router.post("/appointment", authMiddleware, registerAppointment);

// route to get appointment
router.get("/appointment", getAppointment);

module.exports = router;
