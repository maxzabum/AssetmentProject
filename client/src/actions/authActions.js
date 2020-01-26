import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL
} from "./types";
import { returnErrors } from "./errorActions";

//check token &load user
export const loadUser = () => (dispacth, getState) => {
  //User loading
  dispacth({ type: USER_LOADING });

  // get token from localStorage

  // if token,add to header

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then(res =>
      dispacth({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispacth(returnErrors(err.response.data, err.response.status));
      dispacth({
        type: AUTH_ERROR
      });
    });
};
// LOGIN
export const login = ({ mUsername, mPassword }) => dispatch => {
  //header
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };
  //request body

  console.log("ddd" + mUsername);
  axios
    .post("/api/auth", { mUsername: mUsername, mPassword: mPassword }, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
//LOGOUT
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
