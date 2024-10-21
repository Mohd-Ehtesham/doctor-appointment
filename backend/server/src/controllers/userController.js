const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

// Register callback
const registerController = async (request, response) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: request.body.email });
    if (existingUser) {
      return response
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    // Create a new user
    const newUser = new User({
      name: request.body.name,
      email: request.body.email,
      password: hashedPassword,
      role: request.body.role,
    });

    // Save the new user to the database
    await newUser.save();

    // Send a response after saving the user
    return response
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    // Send an error response
    return response
      .status(500)
      .json({ success: false, message: error.message });
  }
};

// Login controller
const loginController = async (request, response) => {
  try {
    // Check if the user exists
    const user = await User.findOne({ email: request.body.email });
    if (!user) {
      return response.status(404).json({
        message: "The user you are trying to find is not present.",
        success: false,
      });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(request.body.password, user.password);
    if (!isMatch) {
      return response.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role }, // Avoid adding sensitive info like password
      process.env.JWT_SECRET,
      { expiresIn: "1d" } // Set token expiration
    );
    console.log("token from login controller :", token);

    // Send response with token and user info
    return response.status(200).json({
      message: "Login Success",
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: `Error occurred in login: ${error.message}`,
      success: false,
    });
  }
};

// Authorization controller
const protectedController = async (request, response) => {
  try {
    // Fetch user details based on the user ID from the decoded token
    const user = await User.findById(request.user.id).select("-password"); // Exclude password

    // If user is not found, return an error response
    if (!user) {
      return response.status(404).send({
        message: "User not found",
        success: false,
      });
    }

    // Return user data without password
    return response.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).send({
      message: "Authentication error",
      success: false,
      error,
    });
  }
};

module.exports = { registerController, loginController, protectedController };
