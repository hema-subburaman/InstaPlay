import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import { SignupUser } from "../api/auth";
import { toast } from "react-hot-toast";
import Header from "../components/Header";
import SignupForm from "../components/SignupForm";
import "../styles/Login.css";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setUsernameError("");

    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!username.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) return;

    try {
      setLoading(true);

      const data = await SignupUser(username, password);

      if (data.success) {
        toast.success("Registration Successful");
        navigate("/", { replace: true });
      }
    } catch (error) {
      toast.error(error.respone?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <SignupForm
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          setUsername={setUsername}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          usernameError={usernameError}
          passwordError={passwordError}
          confirmPasswordError={confirmPasswordError}
          handleRegister={handleRegister}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Signup;
