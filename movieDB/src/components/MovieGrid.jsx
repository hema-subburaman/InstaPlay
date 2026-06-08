import MovieCard from "./MovieCard";

import gameofthrones from "../assets/images/gameofthrones.png";
import breakingbad from "../assets/images/breakingbad.png";
import moonknight from "../assets/images/moonknight.png";
import morbius from "../assets/images/morbius.png";
const movies = [
    {
    title: "Game of Thrones",
    rating: 4.6,
    image: gameofthrones,
  },
  {
    title: "Breaking Bad",
    rating: 4.6,
    image: breakingbad,
  },
  {
    title: "Moon Knight",
    rating: 4.6,
    image: moonknight,
  },
  {
    title: "Morbius",
    rating: 4.6,
    image: morbius,
  }
];

function MovieGrid(){
    return(
        <div className="movie-grid">
            {movies.map((movie, index) => (
                <MovieCard 
                key = {index}
                image = {movie.image}
                title = {movie.title}
                rating={movie.rating}
                />
            ))}
        </div>
    );
}
export default MovieGrid;