import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  VERIFY_USER_FAIL,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
} from "../constants/user";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`api/register`, userData, config);
    console.log(data);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`api/login`, { email, password }, config);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const verifyUser = (otp) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`api/account/verify`, { otp }, config);
    dispatch({ type: VERIFY_USER_SUCCESS, payload: data.user });

    console.log(data);
  } catch (error) {
    dispatch({
      type: VERIFY_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
