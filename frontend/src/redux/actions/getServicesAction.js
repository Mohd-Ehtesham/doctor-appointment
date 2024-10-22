import axios from "axios";

export const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST";
export const GET_SERVICES_SUCCESS = "GET_SERVICES_SUCCESS";
export const GET_SERVICES_FAILURE = "GET_SERVICES_FAILURE";

export const getServicesRequest = () => ({
  type: GET_SERVICES_REQUEST,
});

export const getServicesSuccess = (service) => ({
  type: GET_SERVICES_SUCCESS,
  payload: service,
});

export const getServicesFailure = (error) => ({
  type: GET_SERVICES_FAILURE,
  payload: error,
});

export const getService = () => async (dispatch) => {
  dispatch(getServicesRequest());
  try {
    const response = await axios.get(
      "https://doctor-appointment-loir.onrender.com/services"
    );
    const data = response.data.services;
    dispatch(getServicesSuccess(data));
    // Log the API response
    console.log("Get Service Data :", data);
  } catch (error) {
    // Dispatch failure action with the error message
    dispatch(getServicesFailure(error.message || "Something went wrong"));
  }
};
