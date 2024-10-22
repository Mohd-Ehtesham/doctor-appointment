import axios from "axios";

export const GET_APPOINTMENT_REQUEST = "GET_APPOINTMENT_REQUEST";
export const GET_APPOINTMENT_SUCCESS = "GET_APPOINTMENT_SUCCESS";
export const GET_APPOINTMENT_FAILURE = "GET_APPOINTMENT_FAILURE";

export const getAppointmentRequest = () => ({
  type: GET_APPOINTMENT_REQUEST,
});

export const getAppointmentSuccess = (appointment) => ({
  type: GET_APPOINTMENT_SUCCESS,
  payload: appointment,
});

export const getAppointmentFailure = (error) => ({
  type: GET_APPOINTMENT_FAILURE,
  payload: error,
});

export const getAppointment = () => async (dispatch) => {
  dispatch(getAppointmentRequest());
  try {
    const response = await axios.get(
      "https://doctor-appointment-loir.onrender.com/appointment"
    );
    const data = response.data.appointment;
    dispatch(getAppointmentSuccess(data));
    console.log("Get Appointment Data:", data);
  } catch (error) {
    // Dispatch failure action with the error message
    dispatch(getAppointmentFailure(error.message || "Something went wrong"));
  }
};
