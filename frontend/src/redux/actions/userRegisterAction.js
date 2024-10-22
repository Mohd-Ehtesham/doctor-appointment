import { toast } from "react-toastify";
import axios from "axios";

// userRegisterAction.js
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(
      "https://doctor-appointment-loir.onrender.com/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    console.log(data);

    if (data.success) {
      dispatch(registerSuccess(data.user));
      toast.success("User registered successfully! 😃");
    }
  } catch (error) {
    dispatch(registerFailure(error.response?.data?.message || error.message));
    toast.error("An error occurred while registering.");
  }
};
