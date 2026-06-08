import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieGrid from "../components/MovieGrid";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import "../styles/Home.css";
function Home(){
    return(
        <div className="home">
            {/* <Header /> */}
            <Navbar />
            <Banner />
            <div className="content">
                <h2>Trending</h2>
                <MovieGrid />
                
                <Pagination />
            </div>
        </div>
    );
}
export default Home;