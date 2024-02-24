import React from "react";
import './Hero.css'
import { styles } from "../styles";
const Hero = () => {
  return (
    <div className="relative z-0">
      <div className="area">
        <ul className="circles">
        {[...Array(12)].map((_, index) => <li key={index}></li>)}
        </ul>
      </div>

      <div className= {`${styles.padingX}  md:px-80 xl:20px px-6 mx-auto context w-full absolute top-[220px] flex flex-row gap-5`}>
        <div className="flex flex-col items-center mt-5 justify-center">
          <div className="w-3 h-3 bg-violet-600 rounded-full p-3 "></div>
          <div className="w-1 sm:h-96 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className= {`${styles.heroHeadText} text-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
            Hi, I'm <span className="text-violet-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Michał Świercz
            </span>
          </h1>
          <p className={`${styles.heroSubText} text-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
            student, designer & creator 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
