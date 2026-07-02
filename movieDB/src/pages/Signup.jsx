import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      toast.error(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

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

    if (confirmPasswordError) {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (confirmPasswordError) {
      setConfirmPasswordError("");
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
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Signup;
