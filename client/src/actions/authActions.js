import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING,SEND_RESPONSE} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://localhost:4000/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>{
      console.log('err',err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }

    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:4000/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      console.log("res",res)
      // Set token to localStorage
      const { token } = res.data;
      const {name } = res.data
     
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userEmail", userData.email);
      localStorage.setItem("userName", name);
     

      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Submit User time sheet
export const submit = (userData) => dispatch => {
  axios
    .post("http://localhost:4000/api/users/submit", userData)
    .then(res => console.log('response',res))
    .catch(err =>{
      console.log('err',err);
    }

    );
};

// to get selected week data
export const weekData = (data) => dispatch => {
  axios
    .post("http://localhost:4000/api/users/getWeekData", data)
    .then(res => {
     console.log(res);
     dispatch(responseData(res))
    })
    .catch(err =>{
      console.log('err',err);
    }

    );
};

// Send response Data
export const responseData = res => {
  return {
    type: SEND_RESPONSE,
    payload: res
  };
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userName");

  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};