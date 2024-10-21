import {
  CREATE_PATIENT_DETAILS_REQUEST,
  CREATE_PATIENT_DETAILS_SUCCESS,
  CREATE_PATIENT_DETAILS_FAILURE,
} from "../actions/createPatientDetailsAction";

const initialState = {
  loading: false,
  patientDetails: null,
  error: null,
};

export const createPatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PATIENT_DETAILS_REQUEST:
      return { ...state, loading: true };

    case CREATE_PATIENT_DETAILS_SUCCESS:
      return { ...state, loading: false, patientDetails: action.payload };

    case CREATE_PATIENT_DETAILS_FAILURE:
      return { ...state, error: action.payload };

    default:
      return { ...state };
  }
};
