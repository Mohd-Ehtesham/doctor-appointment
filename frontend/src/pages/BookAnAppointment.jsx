import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createAppointment } from "../redux/actions/createAppointmentAction";

export default function BookAnAppointment() {
  const dispatch = useDispatch();

  const [doctor, setDoctor] = useState("");
  const [comments, setComments] = useState("");
  const [department, setDepartment] = useState("");
  const [uploadReport, setUploadReport] = useState("");
  const [appointmentDate, appointmentSetDate] = useState("");
  const [appointmentTime, appointmentSetTime] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const appointmentData = {
      doctor,
      comments,
      department,
      uploadReport,
      appointmentDate,
      appointmentTime,
    };

    try {
      const result = await dispatch(createAppointment(appointmentData));
      console.log(result);
    } catch (error) {
      console.error("Error during creating appointment:", error);
    } finally {
      appointmentSetDate("");
      appointmentSetTime("");
      setDoctor("");
      setDepartment("");
      setComments("");
      setUploadReport("");
    }
  }

  return (
    <div className="px-4 sm:px-0 sm:mt-10">
      <div className="flex flex-col bg-pink-200 mt-40 mx-auto p-6 rounded-lg shadow-md xl:mt-[10rem] lg:w-3/4 md:w-4/6 sm:w-11/12 sm:ms-28 lg:mt-28 md:mt-32 sm:mt-[12rem]">
        <div className="my-4">
          <h3 className="text-center text-xl sm:text-2xl font-bold">
            Book An Appointment
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Date Picker */}
          <label
            htmlFor="date"
            className="block mb-2 font-semibold text-gray-700"
          >
            Select Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={appointmentDate}
            onChange={(event) => appointmentSetDate(event.target.value)}
          />

          {/* Time Picker */}
          <label
            htmlFor="time"
            className="block mb-2 font-semibold text-gray-700"
          >
            Select Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            className="p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={appointmentTime}
            onChange={(event) => appointmentSetTime(event.target.value)}
          />

          {/* Doctor Name */}
          <label
            htmlFor="doctorName"
            className="block mb-2 font-semibold text-gray-700"
          >
            Doctor Name
          </label>
          <input
            type="text"
            id="doctorName"
            placeholder="Doctor Name..."
            className="p-2 mb-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={doctor}
            onChange={(event) => setDoctor(event.target.value)}
          />

          {/* Department */}
          <label
            htmlFor="department"
            className="block mb-2 font-semibold text-gray-700"
          >
            Department
          </label>
          <input
            type="text"
            id="department"
            placeholder="Department..."
            className="p-2 mb-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          />

          {/* Comments */}
          <label
            htmlFor="comments"
            className="block mb-2 font-semibold text-gray-700"
          >
            Comments
          </label>
          <textarea
            id="comments"
            placeholder="Comments..."
            className="p-2 mb-4 border border-gray-300 rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />

          {/* Upload Reports */}
          <label
            htmlFor="uploadFile"
            className="block mb-2 font-semibold text-gray-700"
          >
            Upload Reports
          </label>
          <input
            type="file"
            id="uploadFile"
            className="p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={uploadReport}
            onChange={(event) => setUploadReport(event.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300 font-semibold"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
