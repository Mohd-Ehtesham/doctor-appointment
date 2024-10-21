import {
  CREATE_SERVICES_REQUEST,
  CREATE_SERVICES_SUCCESS,
  CREATE_SERVICES_FAILURE,
} from "../actions/createServicesAction";

const initialState = {
  loading: false,
  serviceDetails: null,
  error: null,
};

export const createServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SERVICES_REQUEST:
      return { ...state, loading: true };

    case CREATE_SERVICES_SUCCESS:
      return {
        ...state,
        serviceDetails: action.payload,
        loading: false,
        error: null,
      };

    case CREATE_SERVICES_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
};
