function LoginForm(){
    return(
        <div className="login-card">
            <h1>Sign in</h1>
            <p>Sign in to your Self Service Portal</p>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>LOG IN</button>
        </div>
    );
}
export default LoginForm;