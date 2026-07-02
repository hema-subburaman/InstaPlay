import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignupForm({
  username,
  password,
  confirmPassword,
  usernameError,
  passwordError,
  confirmPasswordError,
  handleRegister,
  handleUsernameChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  loading,
  error,
}) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
      className="login-card"
    >
      <h1>Sign Up</h1>

      <p>Create your InstaPlay account</p>

      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />

        {usernameError && <p className="error-text">{usernameError}</p>}
      </div>

      <div className="input-group">
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {passwordError && <p className="error-text">{passwordError}</p>}
      </div>

      <div className="input-group">
        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <span
            className="eye-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {confirmPasswordError && (
          <p className="error-text">{confirmPasswordError}</p>
        )}
      </div>

      {error && <p className="error-message">{error}</p>}

      <button type="submit" disabled={loading} className="login-btn">
        {loading ? "REGISTERING..." : "REGISTER"}
      </button>

      <p className="login-link">
        Already have an account?{" "}
        <span onClick={() => navigate("/")}>Sign In</span>
      </p>
    </form>
  );
}

export default SignupForm;
