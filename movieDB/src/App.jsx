import { BrowswerRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App(){
  return(
    <BrowswerRouter>
    <Routes>
      <Route path = "/" element = {<Login/>} />
      <Route path = "/home" element = {<Home />}  />
    </Routes>
    </BrowswerRouter>
  )
}