import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <div className="relative z-0">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>
      <div className="context w-full absolute top-1/2">
        <h1 className="text-center text-text text-8xl">
          Michał Świercz
        </h1>
        
      </div>
    </div>
  );
};

export default Hero;
