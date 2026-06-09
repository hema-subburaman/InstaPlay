import starIcon from "../assets/images/Star.svg";
import playbtn from "../assets/images/playbtn.svg";
import { useNavigate } from "react-router-dom";
function MovieCard({image, title, rating, stars}){
    const navigate = useNavigate();
    return(
        <div className="movie-card">
        <img src={image} alt={title} />
        <div className="movie-info">
            <h4>{title}</h4>
            <div className="rating-row">
                 <div className="rating">
            {[...Array(stars)].map((_, index) => (
              <img
                key={index}
                src={starIcon}
                alt="star"
                className="star-icon"
              />
            ))}
               
                <span>{rating} / 5</span>
                
            </div>
            <img src= {playbtn} alt="play" className="play-btn" 
            onClick={() => {
                if(title === "The Godfather"){
                    navigate("/movie");
                }
            }}/>
        </div>
        </div>
        </div>
    );
}
export default MovieCard;