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
   const [searchParams] = useSearchParams();
   const search = searchParams.get("search") || "";
  
    return(
        <div className="home">
            
            <Navbar />
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
  movies={movies}
  setMovies={setMovies}
/>
            </div>
        </div>
    );
}
export default Home;