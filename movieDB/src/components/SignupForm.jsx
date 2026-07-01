import { useNavigate } from "react-router-dom";

function SignupForm({
  username,
  password,
  confirmPassword,
  setUsername,
  setPassword,
  setConfirmPassword,
  usernameError,
  passwordError,
  confirmPasswordError,
  handleRegister,
  loading,
  error,
}) {
  const navigate = useNavigate();

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
          onChange={(e) => setUsername(e.target.value)}
        />

        {usernameError && <p className="error-text">{usernameError}</p>}
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {passwordError && <p className="error-text">{passwordError}</p>}
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

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
