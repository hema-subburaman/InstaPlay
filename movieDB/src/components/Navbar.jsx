import playIcon from "../assets/playIcon.svg";
import search from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function Navbar(){
    const navigate = useNavigate();
    const handleLogout = () => {
        toast.success("Logout Successful");
        setTimeout(() => {
            navigate("/", {replace: true});
        }, 1000);
    };
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="highlight">I</span>
                <span className="logo-text">nsta Pl</span>
                <img src={playIcon}alt="play" className="play-icon" />
                <span className="logo-text">y</span>
            </div>

            <div className="search-box">
                <input type="text" placeholder="Search movies" />
                <button className="search-btn">
                    <img src={search} alt="search" />
                </button>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
}
export default Navbar;