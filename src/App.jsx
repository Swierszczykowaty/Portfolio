import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background ">
          <Navbar/>
          <Hero/>
          <About/>

      </div>
    </BrowserRouter>
  )
}

export default App