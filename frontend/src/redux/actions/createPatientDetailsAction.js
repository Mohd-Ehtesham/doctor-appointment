import axios from "axios";
import { toast } from "react-toastify";

export const CREATE_PATIENT_DETAILS_REQUEST = "CREATE_PATIENT_DETAILS_REQUEST";
export const CREATE_PATIENT_DETAILS_SUCCESS = "CREATE_PATIENT_DETAILS_SUCCESS";
export const CREATE_PATIENT_DETAILS_FAILURE = "CREATE_PATIENT_DETAILS_FAILURE";

export const createPatientDetailsRequest = () => ({
  type: CREATE_PATIENT_DETAILS_REQUEST,
});

export const createPatientDetailsSuccess = (patient) => ({
  type: CREATE_PATIENT_DETAILS_REQUEST,
  payload: patient,
});

export const createPatientDetailsFailure = (error) => ({
  type: CREATE_PATIENT_DETAILS_REQUEST,
  payload: error,
});

export const createPatient = (patientData) => async (dispatch) => {
  dispatch(createPatientDetailsRequest());
  try {
    const response = await axios.post(
      "https://doctor-appointment-loir.onrender.com/patient",
      patientData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data.patient;
    console.log("Appointment Data:", data);
    // Dispatch success action with the response data
    dispatch(createPatientDetailsSuccess(data));
    toast.success("New Patient is created 😁...");
    // Return the data for use in the component
  } catch (error) {
    // Dispatch failure action with the error message
    dispatch(
      createPatientDetailsFailure(error.message || "Something went wrong")
    );
    toast.error("Failed to create new patient 😞...");
  }
};
