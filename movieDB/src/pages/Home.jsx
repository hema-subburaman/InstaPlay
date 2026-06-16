import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import axios from "axios";
import { SEARCH_API } from "../api/endpoint";
import { useSearchParams } from "react-router-dom";

import "../styles/Home.css";
function Home(){
   const [movies, setMovies] = useState([]);
   const [searchResults, setSearchResults] = useState([]);
   const [searchParams] = useSearchParams();
   const search = searchParams.get("search") || "";
   useEffect(() => {
  
  const page = searchParams.get("page") || 1;

  if (!search) return;

  const fetchSearchMovies = async () => {
    try {
      const response = await axios.get(
        `${SEARCH_API}&language=en-US&query=${search}&page=${page}&include_adult=false`
      );

      setSearchResults(response.data.results || []);
    } catch (error) {
      console.log(error);
    }
  };

  fetchSearchMovies();
  }, [searchParams]);
    return(
        <div className="home">
            
            <Navbar setSearchResults = {setSearchResults}/>
            <Banner />
            <div className="content">
                <h2>
                  {search ? (
                    <>
                    Search for <span className="search-title">"{search}"</span>
                    </>
                  ): (
                    "Trending"
                  )}
                </h2>
                <MovieGrid
                    movies={Array.isArray(searchResults) && searchResults.length > 0
                    ? searchResults
                    : movies}
                    setMovies={setMovies}
                />
            </div>
        </div>
    );
}
export default Home;