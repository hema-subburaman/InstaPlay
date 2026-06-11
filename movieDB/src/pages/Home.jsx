
import { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

import "../styles/Home.css";
function Home(){
   const [movies, setMovies] = useState([]);
   const [searchResults, setSearchResults] = useState([]);
    return(
        <div className="home">
            {/* <Header /> */}
            <Navbar setSearchResults = {setSearchResults}/>
            <Banner />
            <div className="content">
                <h2>Trending</h2>
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