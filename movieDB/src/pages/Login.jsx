import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "hema" && password === "1234") {
      navigate("/home");
    } else {
      alert("Invalid Username or Password");
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
        />
      </div>
    </>
  );
}

export default Login;