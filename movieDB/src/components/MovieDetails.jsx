import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import "../styles/MovieDetails.css";
import playIcon from "../assets/playIcon.svg";
import playbtn from "../assets/images/playbtn.svg";
import bgImage from "../assets/images/image8.png";
import backbtn from "../assets/images/backbtn.svg";
import frame from "../assets/images/Frame.svg";
import popup from "../assets/images/popup.png";

function MovieDetails(){

    const navigate = useNavigate();
    const [showImage, setShowImage] = useState(false);
    const handleLogoClick = () => {
      const token = localStorage.getItem("token");

      if(token === "true"){
        navigate("/home");
      }
    };
    return(

        <div className="details-page">
        <header className="navbar2">
        <div className="logo2" onClick={handleLogoClick}>
          <span className="highlight2">I</span>
          <span>nsta Pl</span>
          <img src={playIcon} alt="play" className="logo-play2" />
          <span>y</span>
        </div>
      </header>

      <div className="movie-banner">
        <div className="left-section">
            
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <img src={backbtn} alt="back-button" />
                </button>
                <h1>The Godfather</h1>
                <p className="rating"> Rating: 4.65/5</p>
                <p className="description">
                    Don Vito Corleone, head of a mafia family, decides 
                    to hand over his empire to his youngest son Michael. 
                    However, his decision unintentionally puts the lives 
                    of his loved ones in grave danger.
                </p>

                <div className="info-row">
                   <span className="info-label">Release Date  </span>
                   
                   <span className="info-value">1972</span>
                </div>
                
                <div className="info-row">
                   <span className="info-label">Original Language</span>
                   
                   <span className="info-value">English, Spanish, French</span>
                </div>

               
            </div> 
             <div className="right-section">

                <img src={bgImage} alt="Godfather" className="movie-image" />
                    <img src={playbtn}alt="playbutton" className="playbutton" 
                    onClick={() => {
                    toast.success("Opening Godfather...");
                    setShowImage(true)}
                    }/>
                </div> 
        </div>
        {showImage && (
  <div
    className="modal-overlay"
    onClick={() => setShowImage(false)}
  >
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setShowImage(false)}>
            <img src={frame} alt="CloseButton" />
        </button>
      <img
        src={popup}
        alt="Godfather"
        className="popup-image"
      />
    </div>
  </div>
)}
    </div>
    

        
    );
}
export default MovieDetails;