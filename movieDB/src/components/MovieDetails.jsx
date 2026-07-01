import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { MOVIEDETAILS_API, VIDEO_API } from "../api/endpoint";

import playIcon from "../assets/playIcon.svg";
import playbtn from "../assets/images/playbtn.svg";
import backbtn from "../assets/images/backbtn.svg";
import frame from "../assets/images/Frame.svg";

import bgImage from "../assets/images/image8.png";
import popup from "../assets/images/popup.png";

import "../styles/MovieDetails.css";

function MovieDetails() {
  const [showImage, setShowImage] = useState(false);
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [trailerKey, setTrailerKey] = useState("");
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const handleLogoClick = () => {
    const token = localStorage.getItem("token");

    if (token === "true") {
      navigate("/home");
    }
  };

  const getMovieDetails = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${MOVIEDETAILS_API}/${movieId}`,
        // ?api_key=d0605f7c77a7e9ffd22f6f77c12e0f8f&language=en-US`,
      );

      setMovie(response.data.data);
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  const getMovieVideos = async () => {
    try {
      const response = await axios.get(
        `${VIDEO_API}/${movieId}/videos`,
        // ?api_key=d0605f7c77a7e9ffd22f6f77c12e0f8f&language=en-US`,
      );

      const videoResults = response.data.data.results;

      // setVideos(videoResults);
      const trailer = videoResults.find(
        (video) => video.site === "YouTube" && video.type === "Trailer",
      );

      // if (trailer) {
      //   setTrailerKey(trailer.key);
      // }
      return trailer;
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="details-page">
        <header className="navbar2">
          <div className="logo2">
            <span className="highlight2">I</span>
            <span>nsta Pl</span>
            <img src={playIcon} alt="play" className="logo-play2" />
            <span>y</span>
          </div>
        </header>

        <div className="movie-banner">
          <div className="left-section">
            <Skeleton width={80} height={40} />

            <div style={{ marginTop: "20px" }}>
              <Skeleton width={350} height={45} />
            </div>

            <div style={{ marginTop: "20px" }}>
              <Skeleton width={120} height={25} />
            </div>

            <div style={{ marginTop: "20px" }}>
              <Skeleton count={5} />
            </div>

            <div style={{ marginTop: "20px" }}>
              <Skeleton width={250} />
            </div>

            <div style={{ marginTop: "10px" }}>
              <Skeleton width={220} />
            </div>
          </div>

          <div className="right-section">
            <Skeleton width={350} height={500} />
          </div>
        </div>
      </div>
    );
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
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
          <h1>{movie.title}</h1>
          <p className="rating">
            {" "}
            Rating: {Math.round(movie.vote_average / 2)} / 5
          </p>
          <p className="description">{movie.overview}</p>

          <div className="info-row">
            <span className="info-label">Release Date </span>

            <span className="info-value">{movie.release_date}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Original Language</span>

            <span className="info-value">{movie.original_language}</span>
          </div>
        </div>
        <div className="right-section">
          <img src={imageUrl} alt={movie.title} className="movie-image" />
          <img
            src={playbtn}
            alt="playbutton"
            className="playbutton"
            onClick={async () => {
              const trailer = await getMovieVideos();

              if (!trailer) {
                toast.error("Trailer not available");
                return;
              }

              setTrailerKey(trailer.key);
              toast.success(`Opening ${movie.title}...`);
              setShowImage(true);
            }}
          />
        </div>
      </div>
      {showImage && (
        <div className="modal-overlay" onClick={() => setShowImage(false)}>
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
