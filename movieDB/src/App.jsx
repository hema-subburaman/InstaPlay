import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Home from "./pages/Home";


function App(){
  return(
    <>
    <Toaster position="top-center" />
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Login/>} />
      <Route path = "/home" element = {<Home />}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;