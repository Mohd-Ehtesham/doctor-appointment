const express = require("express");

const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const dbConnect = require("./server/src/utils/dbConnect");
const userRoutes = require("./server/src/routes/userRoutes");
const serviceRoute = require("./server/src/routes/serviceRoutes");
const appointmentRoute = require("./server/src/routes/appointmentRoute");
const patientDetailsRoute = require("./server/src/routes/patientDetailsRoute");

dotenv.config({ path: ".env" });

app.use(cors());
app.use(express.json());

// Routes
app.use("/", userRoutes);
app.use("/", serviceRoute);
app.use("/", patientDetailsRoute);
app.use("/", appointmentRoute);

dbConnect();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is listening on port ${port} no.`);
});
