## Database Documentation

## Overview

This document describes the schema design for a MongoDB database that includes three main collections: Users, Service, Patient Details and Appointment . The design leverages Mongoose for schema definition and validation.

## User Schema

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

## Appointment Schema

patient: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
},
doctor: { type: String, required: true },
comments: { type: String, required: true },
department: {
type: String,
required: true,
enum: [],
},
uploadReport: { type: String },
appointmentDate: {
type: Date,
required: true,
},
appointmentTime: {
type: String,
required: true,
},

## Service Schema

serviceName: {
type: String,
required: true,
},
description: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},

## Patient Details Schema

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
