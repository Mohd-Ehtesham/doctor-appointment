const Service = require("../models/serviceSchema");

// POST: Add new service (Doctor and Admin only)
const registerService = async (request, response) => {
  console.log(request.user);
  console.log(request.user.role);

  try {
    // Check if the user has the role of "doctor" or "admin"
    if (request.user.role !== "doctor" && request.user.role !== "admin") {
      return response.status(403).json({
        message: "Unauthorized: Only doctors and admins can add services.",
      });
    }

    const { serviceName, description, price } = request.body;

    // Adding service to the database
    const newService = new Service({ serviceName, description, price });
    await newService.save();

    response
      .status(201)
      .json({ message: "Service added successfully...", service: newService });
  } catch (error) {
    response.status(500).json({ message: "Failed to add service..." });
  }
};

// GET: Fetch the service from db
const getService = async (request, response) => {
  try {
    const services = await Service.find();
    response
      .status(200)
      .json({ message: "Services fetched successfully...", services });
  } catch (error) {
    response.status(500).json({ message: "Failed to fetch services..." });
  }
};

module.exports = { registerService, getService };
