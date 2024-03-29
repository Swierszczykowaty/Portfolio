import React from "react";
import './Hero.css'
import { styles } from "../styles";
import { FaLongArrowAltDown } from "react-icons/fa";
import { fadeIn } from "../untils/motion";
import { motion } from 'framer-motion';

const Hero = () => {
  
  return (
    <div className="relative z-0 overflow-hidden ">
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
          <div className="tracking-wider ">
            <h1 className= {`${styles.heroHeadText}  text-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]`}style={{ '--td': '0.8s' }}>
            <div className="block-reveal" style={{ '--bc': '#EDE34C', '--d': '.1s' }}>
              Hi, I'm <span className="element drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
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
          {/* <div className=" absolute bottom-10 flex flex-col items-center cursor-pointe group border-none scroll-box">
            <a href="#about">
              <motion.div className="flex flex-col items-center border-none tracking-wider"
              initial="hidden"
              animate="show"
              variants={fadeIn("up", "tween", 1.6, 1.1)}>
                <h6 className="hover-3">SCROLL DOWN</h6>
                <motion.div
                animate={{
                  y:[0,10,0]
                }}
                transition={{
                  type:"tween",
                  delay: 3,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 1.5,
                }}>
                  <FaLongArrowAltDown className="sm:w-8 sm:h-8 w-7 h-7 mt-2 text-primary2 border-none group-hover:scale-125 duration-700"/>
                </motion.div>
              </motion.div>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
