const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerService,
  getService,
} = require("../controllers/serviceControllers");

// router object
const router = express.Router();

// routes

// route to add services if role is doctor
router.post("/services", authMiddleware, registerService);

// route to get services  if role is patient
router.get("/services", getService);

module.exports = router;
