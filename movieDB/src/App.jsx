import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";


function App(){
  // const isLoggedIn = localStorage.getItem("LOGIN") === "true";
  
  return(
    <>
    <Toaster position="top-center" />
    
    <Routes>
      <Route path = "/" element = {
        
        <Login/>} />
      <Route path = "/home" element = {
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
      }  />
      <Route path="/movie/:movieId" element = {
        <ProtectedRoute>
        <MovieDetails />
        </ProtectedRoute>}  />
    </Routes>
    
    </>
  )
}
export default App;