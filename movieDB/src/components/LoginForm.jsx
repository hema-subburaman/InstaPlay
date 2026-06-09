function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  error,
}) {
  return (
    <div className="login-card">
      <h1>Sign in</h1>
      <p>Sign in to your Self Service Portal</p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>
        LOG IN
      </button>
    </div>
  );
}

export default LoginForm;