const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerController,
  loginController,
  protectedController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// routes

// Register route for user registration
router.post("/register", registerController);
// login route
router.post("/login", loginController);
// protect this route
router.get("/protected", authMiddleware, protectedController);

module.exports = router;
