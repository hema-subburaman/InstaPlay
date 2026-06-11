import axios from "axios";
import { LOGIN_API } from "./endpoint";

export const loginUser = async (username, password, token) => {
    console.log("login api");

  const response = await axios.post(LOGIN_API,
    {
    "username":username,
    "password":password,
    "request_token":token,
}
  );

  return response.data;
};