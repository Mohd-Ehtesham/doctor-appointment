import axios from "axios";
import { toast } from "react-toastify";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post("http://localhost:8000/login", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data; // Axios automatically parses JSON
    console.log(data);

    if (data.success) {
      dispatch(loginSuccess(data.user));
      toast.success("User logged in successfully! 😃");

      // Save the JWT token in localStorage
      localStorage.setItem("token", data.token);

      // Return the success status and data
      return { success: true, user: data.user };
    }
  } catch (error) {
    console.log(error);
    dispatch(loginFailure(error.message));
    toast.error("An error occurred while logging in. 😩");

    // Return the failure status
    return { success: false, message: error.message };
  }
};
