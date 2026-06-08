import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const handleLogin = () => {
        console.log("Login button clicked");
        navigate("/home");
    };
    return(
        <>
        <Header />
        <div className="login-container">
            <LoginForm handleLogin = {handleLogin} />
        </div>
        
        </>

    );
}
export default Login;