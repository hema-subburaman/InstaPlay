import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function Login(){
    return(
        <>
        <Header />
        <div className="login-container">
            <LoginForm />
        </div>
        
        </>

    );
}
export default Login;