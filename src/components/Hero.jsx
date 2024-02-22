import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <div className="relative z-0">
      <div className="area">
        <ul className="circles">
        {[...Array(12)].map((_, index) => <li key={index}></li>)}
        </ul>
      </div>
      <div className="context w-full absolute top-1/2">
        <h1 className="text-center text-text text-8xl px-40 sm:px-10 sm:text-xl">
          Michał Świercz
        </h1>
        
      </div>
    </div>
  );
};

export default Hero;
