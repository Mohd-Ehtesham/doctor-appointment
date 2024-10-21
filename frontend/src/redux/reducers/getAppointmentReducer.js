import {
  GET_APPOINTMENT_REQUEST,
  GET_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_FAILURE,
} from "../actions/getAppointmentAction";

const initialState = {
  loading: false,
  appointmentData: null,
  error: null,
};

export const getAppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENT_REQUEST:
      return { ...state, loading: true };

    case GET_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        appointmentData: action.payload,
        error: null,
      };

    case GET_APPOINTMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
