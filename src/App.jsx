import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
      <div className="relative z-0 gradientbg ">
        <Navbar/>
        <Hero/>
        <div className="bg-background">
            <About/>
        </div>
        <div className="webdevv_container">
          <div className="webdevv"></div>
          <Web_dev/>
        </div>
        <div class="">
          <Pandas/>
        </div>
        
        <Design/>
        <div className="bg-background">
        <Photography/>
        </div>
        <Movies/>
        <Blend/>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
/*
        <div className="relatve z-0 bg-background ">
            <Navbar/>
            
            <Parallax pages={5}>
                <ParallaxLayer offset={0} speed={0.4} factor={4}>
                    <div className="grad"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.1} factor={1.2}>
                    <ul className="circles">
                        {[...Array(12)].map((_, index) => <li key={index}></li>)}
                    </ul>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.3}>
                    <div className="h-fullbg-black">
                    <Hero/>
                    </div>
                    
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.1}>
                    <div className="bg-background w-screen h-lvh "></div>
                </ParallaxLayer>   
                <ParallaxLayer offset={1} speed={0.4}>
                        <About/>
                </ParallaxLayer>
                <ParallaxLayer  offset={2}>
                <Web_dev/>
                </ParallaxLayer>
                <ParallaxLayer  offset={3}>
                <Pandas/>
                </ParallaxLayer>
                <ParallaxLayer  offset={4}>
                <Design/>
                </ParallaxLayer>
            </Parallax>
       </div>
*/
/*
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
 */