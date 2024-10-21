import {
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
} from "../actions/createAppointmentAction";

const initialState = {
  loading: false,
  appointmentDetails: null,
  error: null,
};

export const createAppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case CREATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        appointmentDetails: action.payload,
        error: null,
      };

    case CREATE_APPOINTMENT_FAILURE:
      return { ...state, error: action.payload };

    default:
      return { ...state };
  }
};
