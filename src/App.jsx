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
                <ParallaxLayer offset={0} speed={0.4} factor={4}>
                    <div className="grad">
                    <ParallaxLayer offset={0} speed={0.1} factor={1.2}>
                        <ul className="circles">
                            {[...Array(12)].map((_, index) => <li key={index}></li>)}
                        </ul>
                        </ParallaxLayer>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.3}>
                    <Hero/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}>
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
    </BrowserRouter>
  )
}

export default App