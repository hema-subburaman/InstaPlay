import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import { useEffect } from "react";


function App(){
  const navigate = useNavigate();
  function add(){
    navigate("/home");
  }
  useEffect(() => {

    if(localStorage.getItem("LOGIN")){
      add();
      
    }
  },[]);
  
  return(
    <>
    <Toaster position="top-center" />
    
    <Routes>
      <Route path = "/" element = {<Login/>} />
      <Route path = "/home" element = {<Home />}  />
      <Route path="/movie/:movieId" element = {<MovieDetails />}  />
    </Routes>
    
    </>
  )
}
export default App;