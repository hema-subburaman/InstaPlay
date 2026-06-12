import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { MOVIE_API } from "../api/endpoint";
import axios from "axios";
import Pagination from "./Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function MovieGrid({movies, setMovies}) {

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(() => {
    return Number(localStorage.getItem("page")) || 1;
    
  });
  const [totalPages, setTotalPages] = useState(1);
  const getMovie = async() => {
    try{
      setLoading(true);
      const response = await axios.get(`${MOVIE_API}&page=${page}`);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    }
    catch(error){
      console.log("error");
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovie();
    localStorage.setItem("page", page);
  }, [page]);

  return (
    <>
    <div className="movie-grid">
      {loading ? (
  Array(12)
    .fill()
    .map((_, index) => (
      <div key={index} className="movie-card">
        <Skeleton height={250} />
        <Skeleton height={20} style={{ marginTop: "10px" }} />
        <Skeleton height={15} width={80} />
      </div>
    ))
) : (
  movies.map((movie) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        return(
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          image={imageUrl}
          rating={movie.vote_average / 2}
          
        />
        );
      })
    )}
      
    </div>
    <Pagination 
    page={page}
    setPage={setPage}
    totalPages={Math.min(totalPages, 500)}
    />
    </>
  );
}
export default MovieGrid;