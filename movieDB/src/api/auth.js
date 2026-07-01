import axios from "axios";
import { LOGIN_API, SIGNUP_API } from "./endpoint";

export const loginUser = async (username, password) => {
  const response = await axios.post(LOGIN_API, {
    username,
    password,
  });

  return response.data;
};

export const SignupUser = async (username, password) => {
  const response = await axios.post(SIGNUP_API, {
    username,
    password,
  });

  return response.data;
};
