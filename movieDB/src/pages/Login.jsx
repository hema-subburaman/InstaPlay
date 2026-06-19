import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

import { loginUser } from "../api/auth";
import { TOKEN_API } from "../api/endpoint";

import "../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("LOGIN") === "true") {
      navigate("/home", { replace: true });
    }
  }, []);

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

  const handleLogin = async () => {
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
      setLoading(true);
      const token = localStorage.getItem("TOKEN");
      const data = await loginUser(username, password, token);

      if (data.success) {
        localStorage.setItem("LOGIN", "true");
        toast.success("Login Successful");
        navigate("/home", { replace: true });
      }
    } catch (error) {
      localStorage.removeItem("LOGIN");
      toast.error("Invalid Username or Password");
    } finally {
      setLoading(false);
    }
  };

  const getToken = async () => {
    try {
      const response = await axios.get(TOKEN_API);
      localStorage.setItem("TOKEN", response.data.request_token);
    } catch (error) {
      console.log(error);
    }
  };

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
          loading={loading}
        />
      </div>
    </>
  );
}

export default Login;
