import { useNavigate } from "react-router-dom";

import playIcon from "../assets/playIcon.svg";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const token = localStorage.getItem("token");

    if (token === "true") {
      navigate("/home");
    }
  };
  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <span className="highlight">I</span>
        <span className="logo-text">nsta Pl</span>
        <img src={playIcon} alt="play" className="play-icon" />
        <span className="logo-text">y</span>
      </div>
    </header>
  );
}
export default Header;
