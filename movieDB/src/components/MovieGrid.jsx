import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

import { MOVIE_API, SEARCH_API } from "../api/endpoint";

import placeholder_image from "../assets/images/placeholder_image.jpeg";

function MovieGrid({ movies, setMovies }) {
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  useEffect(() => {
    getMovies();
  }, [page, search]);

  const handlePageChange = (newPage) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (search) {
      setSearchParams({
        page: newPage,
        search,
      });
    } else {
      setSearchParams({
        page: newPage,
      });
    }
  };

  const getMovies = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("TOKEN");

      let response;

      if (search) {
        response = await axios.get(
          `${SEARCH_API}?query=${search}&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } else {
        response = await axios.get(`${MOVIE_API}?page=${page}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      setMovies(response.data.data || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="movie-grid">
        {loading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="movie-card">
              <Skeleton height={250} />
              <Skeleton height={20} style={{ marginTop: "10px" }} />
              <Skeleton height={15} width={80} />
            </div>
          ))
        ) : movies.length > 0 ? (
          movies.map((movie) => {
            const imageUrl =
              movie.poster_path && movie.poster_path !== "null"
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : placeholder_image;

            return (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                title={movie.title}
                image={imageUrl}
                rating={movie.vote_average / 2}
                releaseDate={movie.release_date}
              />
            );
          })
        ) : (
          <div className="no-movies">
            <h2>No Movies Found 🎬</h2>
          </div>
        )}
      </div>
      {!loading && movies.length > 0 && (
        <Pagination
          page={page}
          setPage={handlePageChange}
          totalPages={totalPages}
        />
      )}
    </>
  );
}

export default MovieGrid;
