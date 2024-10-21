import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE,
} from "../actions/getServicesAction";

const initialState = {
  loading: false,
  serviceDetails: null,
  error: null,
};

export const getServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES_REQUEST:
      return { ...state, loading: true };

    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceDetails: action.payload,
        error: null,
      };

    case GET_SERVICES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return { ...state };
  }
};
