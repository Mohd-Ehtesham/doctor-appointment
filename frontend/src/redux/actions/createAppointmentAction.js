import axios from "axios";
import { toast } from "react-toastify";

export const CREATE_APPOINTMENT_REQUEST = "CREATE_APPOINTMENT_REQUEST";
export const CREATE_APPOINTMENT_SUCCESS = "CREATE_APPOINTMENT_SUCCESS";
export const CREATE_APPOINTMENT_FAILURE = "CREATE_APPOINTMENT_FAILURE";

export const createAppointmentRequest = () => ({
  type: CREATE_APPOINTMENT_REQUEST,
});

export const createAppointmentSuccess = (appointment) => ({
  type: CREATE_APPOINTMENT_SUCCESS,
  payload: appointment,
});

export const createAppointmentFailure = (error) => ({
  type: CREATE_APPOINTMENT_FAILURE,
  payload: error,
});

export const createAppointment = (appointmentData) => async (dispatch) => {
  dispatch(createAppointmentRequest());
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await axios.post(
      "http://localhost:8000/appointment",
      appointmentData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data.appointment;
    console.log("Appointment Data:", data);
    // Dispatch success action with the response data
    dispatch(createAppointmentSuccess(data));
    // Return the data for use in the component
    toast.success("New Appointment is created 😁...");
    return data;
  } catch (error) {
    // Dispatch failure action with the error message
    dispatch(createAppointmentFailure(error.message || "Something went wrong"));
    toast.error("New appointment is not created 🥺...");
  }
};
