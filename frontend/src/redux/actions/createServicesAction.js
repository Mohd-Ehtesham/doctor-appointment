import axios from "axios";
import { toast } from "react-toastify";

export const CREATE_SERVICES_REQUEST = "CREATE_SERVICES_REQUEST";
export const CREATE_SERVICES_SUCCESS = "CREATE_SERVICES_SUCCESS";
export const CREATE_SERVICES_FAILURE = "CREATE_SERVICES_FAILURE";

export const createServiceRequest = () => ({
  type: CREATE_SERVICES_REQUEST,
});

export const createServiceSuccess = (service) => ({
  type: CREATE_SERVICES_SUCCESS,
  payload: service,
});

export const createServiceFailure = (error) => ({
  type: CREATE_SERVICES_FAILURE,
  payload: error,
});

export const createService = (serviceData) => async (dispatch) => {
  dispatch(createServiceRequest());
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const response = await axios.post(
      "https://doctor-appointment-loir.onrender.com/services",
      serviceData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data.service;
    console.log("Service Data:", data);
    // Dispatch success action with the response data
    dispatch(createServiceSuccess(data)); // <-- Correct action
    // Return the data for use in the component
    toast.success("New Appointment is created 😁...");
    return data;
  } catch (error) {
    // Dispatch failure action with the error message
    dispatch(createServiceFailure(error.message || "Something went wrong"));
    toast.error("New service is not created 🥺...");
  }
};
