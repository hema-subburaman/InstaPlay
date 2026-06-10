import MovieCard from "./MovieCard";

import gameofthrones from "../assets/images/gameofthrones.png";
import thirteenreasonswhy from "../assets/images/thirteenreasonswhy.png";
import breakingbad from "../assets/images/breakingbad.png";
import moonknight from "../assets/images/moonknight.png";
import uncharted from "../assets/images/uncharted.png";
import doctorstange2 from "../assets/images/doctorstange2.png";
import thelostcity from "../assets/images/thelostcity.png";
import morbius from "../assets/images/morbius.png";
import killbill from "../assets/images/killbill.png";
import pulpfiction from "../assets/images/pulpfiction.png";
import fightclub from "../assets/images/fightclub.png";
import thegodfather from "../assets/images/thegodfather.png";
import titanic from "../assets/images/titanic.png";
import piratesofthecaribbean from "../assets/images/piratesofthecaribbean.png";
import thefaultinourstars from "../assets/images/thefaultinourstars.png";
import indianajones from "../assets/images/indianajones.png";

const movies = [
    {
    id: 1,
    title: "Game of Thrones",
    rating: 4.6,
    stars : 2,
    image: gameofthrones,
  },
  {
    id: 2,
    title: "Thirteen Reasons Why",
    rating: 4.6,
    stars : 4,
    image: thirteenreasonswhy,
  },
  {
    id: 3,
    title: "Moon Knight",
    rating: 4.6,
    stars : 1,
    image: moonknight,
  },
  {
    id: 4,
    title: "Breaking Bad",
    rating: 4.6,
    stars : 1,
    image: breakingbad,
  },
  {
    id: 5,
    title: "Uncharted",
    rating: 4.6,
    stars : 1,
    image: uncharted,
  },
  {
    id: 6,
    title: "Doctor Stange 2",
    rating: 4.6,
    stars : 1,
    image: doctorstange2,
  },
  {
    id: 7,
    title: "The Lost City",
    rating: 4.6,
    stars : 1,
    image: thelostcity,
  },
  {
    id: 8,
    title: "Morbius",
    rating: 4.6,
    stars : 1,
    image: morbius,
  },
  {
    id: 9,
    title: "Kill Bill Vol 1",
    rating: 4.6,
    stars : 1,
    image: killbill,
  },
  {
    id: 10,
    title: "Pulp Fiction",
    rating: 4.6,
    stars : 1,
    image: pulpfiction,
  },
  {
    id: 11,
    title: "Fight Club",
    rating: 4.6,
    stars : 1,
    image: fightclub,
  },
  {
    id: 12,
    title: "The Godfather",
    rating: 4.6,
    stars : 1,
    image: thegodfather,
  },
  {
    id: 13,
    title: "Titanic",
    rating: 4.6,
    stars : 1,
    image: titanic,
  },
  {
    id: 14,
    title: "Pirates of the Caribbean",
    rating: 4.6,
    stars : 1,
    image: piratesofthecaribbean,
  },
  {
    id: 15,
    title: "The Fault in Our Stars",
    rating: 4.6,
    stars : 1,
    image: thefaultinourstars,
  },
  {
    id: 17,
    title: "Indiana Jones",
    rating: 4.6,
    stars : 1,
    image: indianajones,
  }
];

function MovieGrid(){
    return(
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard 
                key = {movie.id}
                movieId= {movie.id}
                image = {movie.image}
                title = {movie.title}
                rating={movie.rating}
                stars={movie.stars}
                />
            ))}
        </div>
    );
}
export default MovieGrid;