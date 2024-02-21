import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
          <About/>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App