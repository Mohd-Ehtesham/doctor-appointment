const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "A user must have an email."],
      unique: true, // Ensures no duplicate emails
      lowercase: true, // Ensures emails are stored in lowercase
    },
    password: {
      type: String,
      required: [true, "A password is required."],
      minlength: [8, "Password must be at least 8 characters long."],
    },
    contactNumber: {
      type: String, // Store as a string to properly handle numbers and validation
      maxlength: [10, "Contact number cannot exceed 10 digits."],
    },
    profilePicture: {
      type: String, // Store image URL or file path
    },
    role: {
      type: String,
      enum: ["patient", "admin"], // Restrict roles to specific values
      default: "patient", // Default to 'patient' if not specified
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` timestamps automatically
  }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
