function MovieCard({image, title, rating}){
    return(
        <div className="movie-card">
        <img src={image} alt={title} />
        <div className="movie-info">
            <h4>{title}</h4>
            <div className="rating-row">
                <span>⭐</span>
                <span>{rating} / 5</span>
                <button className="play-btn"> ▶</button>
            </div>
        </div>
        </div>
    );
}
export default MovieCard;