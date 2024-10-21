// userReducer.js
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/userRegisterAction";

const initialState = {
  loading: false,
  userDetails: null,
  error: null,
  isAuthenticated: false,
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        isAuthenticated: true,
        error: null,
      };

    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
