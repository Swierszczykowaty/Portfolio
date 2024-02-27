import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background ">
          <Navbar/>
          <Hero/>
          <About/>
          <Contact/>

      </div>
    </BrowserRouter>
  )
}

export default App