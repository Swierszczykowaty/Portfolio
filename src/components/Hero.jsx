import React from "react";
import './Hero.css'
import { styles } from "../styles";
import { FaLongArrowAltDown } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="relative z-0">
      <div className="area">
        <ul className="circles">
        {[...Array(12)].map((_, index) => <li key={index}></li>)}
        </ul>
      </div>
      <div className="flex flex-col">
        <div className= {`${styles.paddingX} justify-center mx-auto context w-full h-2/3 absolute top-1/3 flex flex-row gap-5`}>
          <div className="flex flex-col items-center mt-5">
            <div className="w-3 h-3 bg-[#804dee] rounded-full p-3 "></div>
            <div className="w-1 sm:h-96 h-40 violet-gradient"></div>
          </div>
          <div>
            <h1 className= {`${styles.heroHeadText} text-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}style={{ '--td': '0.8s' }}>
            <div className="block-reveal" style={{ '--bc': '#EDE34C', '--d': '.1s' }}>
              Hi, I'm <span className="element  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
                Michał Świercz
                </span>
              </div>
            </h1>
            <p className={`${styles.heroSubText} block-effect w-max text-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] block-effect`}style={{ '--td': '0.8s' }}>
              <div className="block-reveal" style={{ '--bc': '#EDE34C', '--d': '.9s' }}>
                student, designer & creator 
              </div>
            </p>
          </div>
          <div className="absolute bottom-10 flex flex-col items-center">
            SCROLL DOWN
          <FaLongArrowAltDown className="w-8 h-8 text-primary2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
