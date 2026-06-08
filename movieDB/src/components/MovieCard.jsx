import starIcon from "../assets/images/Star.svg";
import playbtn from "../assets/images/playbtn.svg";

function MovieCard({image, title, rating, stars}){
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
            <img src= {playbtn} alt="play" className="play-btn" />
        </div>
        </div>
        </div>
    );
}
export default MovieCard;