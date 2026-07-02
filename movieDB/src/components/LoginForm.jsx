import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleLogin,
  usernameError,
  passwordError,
  loading,
  error,
}) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
      className="login-card"
    >
      <h1>Sign in</h1>

      <p>Sign in to your Self Service Portal</p>

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

      {error && <p className="error-message">{error}</p>}

      <button type="submit" disabled={loading} className="login-btn">
        {loading ? "LOGGING IN..." : "LOG IN"}
      </button>

      <p className="login-link">
        Don't have an account?{" "}
        <span onClick={() => navigate("/register")}>Sign Up</span>
      </p>
    </form>
  );
}

export default LoginForm;
