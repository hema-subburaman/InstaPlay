import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { MOVIE_API } from "../api/endpoint";
import axios from "axios";
import Pagination from "./Pagination";

function MovieGrid({movies, setMovies}) {

  const [page, setPage] = useState(1);
  
  const getMovie = async() => {
    try{
      const response = await axios.get(`${MOVIE_API}&page=${page}`);
      setMovies(response.data.results);
    }
    catch(error){
      console.log("error");
    } 
  }

  useEffect(() => {
    getMovie();
  }, [page]);

  return (
    <>
    <div className="movie-grid">
      {movies.map((movie) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        return(
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          image={imageUrl}
          rating={Math.round(movie.vote_average / 2)}
          stars={Math.round(movie.vote_average / 2)}
        />
        );
      })}
      
    </div>
    <Pagination 
    page={page}
    setPage={setPage}
    />
    </>
  );
}
export default MovieGrid;