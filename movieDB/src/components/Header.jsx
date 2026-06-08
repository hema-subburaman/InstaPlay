import playIcon from "../assets/playIcon.svg";
function Header(){
    return(
        <header className="header">
            <div className="logo">
                <span className="highlight">I</span>
                <span className="logo-text">nsta Pl</span>
                <img src={playIcon} alt="play" className="play-icon"/>
                <span className="logo-text">y</span>
                
            </div>
        </header>
    );
}
export default Header;