import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import "../styles/MovieDetails.css";
import playIcon from "../assets/playIcon.svg";
import playbtn from "../assets/images/playbtn.svg";
import bgImage from "../assets/images/image8.png";
import backbtn from "../assets/images/backbtn.svg";
import frame from "../assets/images/Frame.svg";
import popup from "../assets/images/popup.png";
import axios from "axios";
import { MOVIEDETAILS_API, VIDEO_API } from "../api/endpoint";

function MovieDetails(){
  
    const navigate = useNavigate();
    const [showImage, setShowImage] = useState(false);
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();
    const [videos, setVideos] = useState([]);
    const [trailerKey, setTrailerKey] = useState("");
    const handleLogoClick = () => {
      const token = localStorage.getItem("token");

      if(token === "true"){
        navigate("/home");
      }
    };

    const getMovieDetails = async() => {
      try{
        const response = await axios.get(`${MOVIEDETAILS_API}/${movieId}?api_key=d0605f7c77a7e9ffd22f6f77c12e0f8f&language=en-US`);
        
        setMovie(response.data);
      }
      catch(error){
        console.log("error");
      }
    }

    const getMovieVideos =  async() => {
      try{
        const response = await axios.get(`${VIDEO_API}${movieId}/videos?api_key=d0605f7c77a7e9ffd22f6f77c12e0f8f&language=en-US`);
       
        setVideos(response.data.results);
        const trailer = response.data.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    );

    if (trailer) {
      setTrailerKey(trailer.key);
    }
      }
      catch(error){
        console.log("error");
      }
    }

    useEffect(() => {
      getMovieDetails();
      getMovieVideos();
    },[]);

    if (!movie) {
    return <h2>Loading...</h2>;
   }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  

  

    return(

        <div className="details-page">
        <header className="navbar2">
        <div className="logo2" onClick={handleLogoClick}>
          <span className="highlight2">I</span>
          <span>nsta Pl</span>
          <img src={playIcon} alt="play" className="logo-play2" 
          />
          <span>y</span>
        </div>
      </header>

      <div className="movie-banner">
        <div className="left-section">
            
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <img src={backbtn} alt="back-button" />
                </button>
                <h1>{movie.title}</h1>
                <p className="rating"> Rating: {Math.round(movie.vote_average / 2)} / 5</p>
                <p className="description">
                    {movie.overview}
                </p>

                <div className="info-row">
                   <span className="info-label">Release Date  </span>
                   
                   <span className="info-value">{movie.release_date}</span>
                </div>
                
                <div className="info-row">
                   <span className="info-label">Original Language</span>
                   
                   <span className="info-value">{movie.original_language}</span>
                </div>

               
            </div> 
             <div className="right-section">

                <img src={imageUrl} alt={movie.title} className="movie-image" />
                    <img src={playbtn}alt="playbutton" className="playbutton" 
                    onClick={() => {
                      if(trailerKey){
                        setShowImage(true);
                      }
                      else{
                        toast.error("Trailer not available");
                      }
                    toast.success(`Opening ${movie.title}...`);
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
      <iframe
  width="900"
  height="500"
  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
  title="Movie Trailer"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
    </div>
  </div>
)}
    </div>
    

        
    );
}
export default MovieDetails;