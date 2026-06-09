import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";


function App(){
  return(
    <>
    <Toaster position="top-center" />
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login/>} />
      <Route path = "/home" element = {<Home />}  />
      <Route path="/movie" element = {<MovieDetails />}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;