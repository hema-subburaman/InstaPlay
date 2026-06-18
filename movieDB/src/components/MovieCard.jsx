import { useEffect, useState } from "react";
import starIcon from "../assets/images/Star.svg";
import playbtn from "../assets/images/playbtn.svg";
import halfStar from "../assets/images/halfStar.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import placeholder_image from "../assets/images/placeholder_image.jpeg";

function MovieCard({movieId, image, title, rating, stars}){
    const navigate = useNavigate();
    const renderStars = (rating) => {
  const stars = [];

  const roundedRating = Math.round(rating * 2) / 2;

  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        key={`full-${i}`}
        src={starIcon}
        alt="full-star"
        className="star-icon"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <img
        key="half"
        src={halfStar}
        alt="half-star"
        className="star-icon"
      />
    );
  }

  return stars;
};
    return(
        <div className="movie-card" onClick={() => 
        navigate(
            `/movie/${movieId}`)}>
        <img src={image} alt={title}  
        onError={(e) => {
        e.target.onerror = null;
        e.target.src = placeholder_image ;
  }}
  />
        <div className="movie-info">
            <h4>{title}</h4>
            <div className="rating-row">
            <div className="rating">
           {renderStars(rating)}

           <span>{rating.toFixed(1)} / 5</span>
            </div>
            <img src= {playbtn} alt="play" className="play-btn" 
            />
        </div>
        </div>
        
        </div>
    );
}
export default MovieCard;