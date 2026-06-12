import playIcon from "../assets/playIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { SEARCH_API } from "../api/endpoint";
function Navbar({setSearchResults}){
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        toast.success("Logout Successful");
        navigate("/", {replace: true});
    };

    const [search, setSearch] = useState("");

    const getSearchDetails = async() => {
        if (!search.trim()) return;
        try{
            const response = await axios.get(`${SEARCH_API}&language=en-US&query=${search}&include_adult=false`);
            setSearchResults(response.data.results || []);
        }
        catch(error){
            console.log("error");
        }
    }

    useEffect(() => {
    const timer = setTimeout(() => {
        if (search.trim()) {
            getSearchDetails();
        } else {
            setSearchResults([]);
        }
    }, 500);

    return () => clearTimeout(timer);
    }, [search]);

    return (
        <nav className="navbar">
            <div className="logo">
                <span className="highlight">I</span>
                <span className="logo-text">nsta Pl</span>
                <img src={playIcon}alt="play" className="play-icon" />
                <span className="logo-text">y</span>
            </div>

            <form className="search-box" onSubmit={(e) => {
                e.preventDefault();
                getSearchDetails();
            }}>
                <input type="text" placeholder="Search movies" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" className="search-btn">
                    <img src={searchIcon} alt="search"  />
                </button>
            </form>

            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
}
export default Navbar;