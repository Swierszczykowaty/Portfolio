import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Photography from "./components/Photography";
import Web_dev from "./components/Web_dev";
import Pandas from "./components/Pandas";
import Design from "./components/Design";
import Movies from "./components/Movie";
import Blend from "./components/Blend";

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
          <Web_dev/>
          </section>
          <section>
            <Pandas/>
          </section>
          <section>
            <Design/>
          </section>
          <section>
          <Photography/>
          </section>
          <section>
            <Movies/>
          </section>
          <section>
            <Blend/>
          </section>
          <section>
            <Contact/>
          </section>
      </div>
    </BrowserRouter>
  )
}

export default App