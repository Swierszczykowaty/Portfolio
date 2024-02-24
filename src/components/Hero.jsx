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

      <div className= {`${styles.paddingX} justify-center mx-auto context w-full absolute top-[220px] flex flex-row gap-5`}>
        <div className="flex flex-col items-center mt-5 justify-center">
          <div className="w-3 h-3 bg-[#804dee] rounded-full p-3 "></div>
          <div className="w-1 sm:h-96 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className= {`${styles.heroHeadText} text-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}>
            Hi, I'm <span className="text-[#EDE34C] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Michał Świercz
            </span>
          </h1>
          <p className={`${styles.heroSubText} w-max text-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] block-effect`}style={{ '--td': '0.8s' }}>
          <div className="block-reveal" style={{ '--bc': '#804dee', '--d': '.1s' }}>
            student, designer & creator 
          </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
