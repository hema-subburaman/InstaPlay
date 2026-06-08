import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
    };
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