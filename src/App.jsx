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
        <div className="relatve z-0 bg-background ">
            <Navbar/>
            <Parallax pages={5}>
                <ParallaxLayer offset={0} speed={0.1}>
                    <div className="grad">
                        <ul className="circles">
                            {[...Array(12)].map((_, index) => <li key={index}></li>)}
                        </ul>
                        
                    </div>
                </ParallaxLayer>
                <ParallaxLayer  speed={1.2}>
                    <Hero/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.2}>
                    <div className="bg-background">
                <About/>
                </div>
                </ParallaxLayer>
                <ParallaxLayer  offset={2}>
                    <div className="">
                <Web_dev/>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer  offset={3}>
                <Pandas/>
                </ParallaxLayer>
                <ParallaxLayer  offset={4}>
                <Design/>
                </ParallaxLayer>
            </Parallax>
       </div>
    </BrowserRouter>
  )
}

export default App