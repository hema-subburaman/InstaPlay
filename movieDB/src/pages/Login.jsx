import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { loginUser } from "../api/auth";
import axios from "axios";
import { TOKEN_API } from "../api/endpoint";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
  setUsername(e.target.value);

  if (usernameError) {
    setUsernameError("");
  }
  };

  const handlePasswordChange = (e) => {
  setPassword(e.target.value);

  if (passwordError) {
    setPasswordError("");
  }
  };


  const handleLogin = async() => {
    setUsernameError("");
    setPasswordError("");

    let isValid = true;

    if (!username.trim()) {
      setUsernameError("Username required");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password required");
      isValid = false;
    }

    if (!isValid) return;

  try {
    console.log("working");
    const token = localStorage.getItem("TOKEN");
  const data = await loginUser(username, password,token);
  console.log(data,"hema");
  localStorage.setItem("LOGIN",data.success);
  toast.success("Login Successful");

  navigate("/home");
  } catch (error) {
  toast.error("Invalid Username or Password");
  }
  };

  const getToken = async() => {
    try{
      const response = await axios.get(TOKEN_API);
    console.log(response.data.request_token);
    localStorage.setItem("TOKEN",response.data.request_token);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    getToken();
  },[]);
  return (
    <>
      <Header />

      <div className="login-container">
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
          usernameError={usernameError}
          passwordError={passwordError}
        />
      </div>
    </>
  );
}

export default Login;