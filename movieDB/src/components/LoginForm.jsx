

function LoginForm({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleLogin,
  usernameError,
  passwordError,
  error,
}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin();
    }} className="login-card">
      <h1>Sign in</h1>
      <p>Sign in to your Self Service Portal</p>
    <div className="input-group">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
    
      {usernameError && (
      <p className="error-text">{usernameError}</p>
      )}
    </div>
    <div className="input-group">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />

      {passwordError && (
      <p className="error-text">{passwordError}</p>
      )}
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" >
        LOG IN
      </button>
    </form>
  );
}

export default LoginForm;