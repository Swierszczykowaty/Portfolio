import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Photography from "./components/Photography";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background ">
        
          <Navbar/>
          <section>
  
          <Hero/>
          </section>
          <section>
          <About/>
          </section>
          <section>
          <Photography/>
          </section>
          <section>
          <Contact/>
          </section>
      </div>
    </BrowserRouter>
  )
}

export default App