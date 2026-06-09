import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
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

    if (username === "hema" && password === "1234") {
      localStorage.setItem("token", "true");
      toast.success("Login Successful");
      navigate("/home");
    } else {
      toast.error("Invalid Username or Password");
    }
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
          usernameError={usernameError}
          passwordError={passwordError}
        />
      </div>
    </>
  );
}

export default Login;