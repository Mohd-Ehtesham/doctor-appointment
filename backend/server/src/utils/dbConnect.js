const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

// Mongo Connection to the hosted database
const DB = process.env.DATABASE_ATLAS.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const dbConnect = async () => {
  try {
    const con = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Cloud Database connected successfully");
  } catch (err) {
    console.error("Cloud database connection failed: ", err);
    process.exit(1); // Exit the process on failure
  }
};

module.exports = dbConnect;
