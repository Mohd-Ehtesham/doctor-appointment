const mongoose = require("mongoose");

const patientDetailSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an firstName."],
  },
  lastName: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an lastName."],
  },
  phone: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an phone."],
  },
  email: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an email."],
  },
  address1: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an address1."],
  },
  address2: { type: "String" },
  city: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an city."],
  },
  state: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an state."],
  },
  zip: {
    type: "String",
    lowercase: true,
    required: [true, "A user must have an zip."],
  },
});

const Patient = mongoose.model("Patient", patientDetailSchema);
module.exports = Patient;
