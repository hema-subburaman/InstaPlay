import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import playIcon from "../assets/playIcon.svg";
import searchIcon from "../assets/searchIcon.svg";

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSearch = searchParams.get("search") || "";

      if (search === currentSearch) {
        return;
      }

      if (!search.trim()) {
        const page = searchParams.get("page") || 1;

        setSearchParams({
          page,
        });

        return;
      }

      setSearchParams({
        search,
        page: 1,
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successful");
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="highlight">I</span>
        <span className="logo-text">nsta Pl</span>
        <img src={playIcon} alt="play" className="play-icon" />
        <span className="logo-text">y</span>
      </div>

      <form
        className="search-box"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchParams({
            page: 1,
            search,
          });
        }}
      >
        <input
          type="text"
          placeholder="Search movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <img src={searchIcon} alt="search" />
        </button>
      </form>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
export default Navbar;
