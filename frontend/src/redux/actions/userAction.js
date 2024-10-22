// userActions.js
import axios from "axios";
import { toast } from "react-toastify";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

// Thunk action to fetch user details
export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found, user is not logged in");
        return;
      }

      const response = await axios.get(
        "https://doctor-appointment-loir.onrender.com/protected",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      console.log(data);
      dispatch(fetchUserSuccess(data.data)); // Dispatch success action with user data
    } catch (error) {
      console.log("Error fetching user data:", error);
      dispatch(fetchUserFailure(error.message)); // Dispatch failure action
      toast.error("Failed to fetch user details. 😩");
    }
  };
};
