import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";

const TechBadge = ({index,title,icon}) =>{
  return(
    <div className="relative flex flex-wrap w-40 h-40 items-center justify-center ">
      <div className="absolute w-16 h-[6.2rem] bg-fuchsia-400 rounded-[10px] z-10 rotate-[60deg]"></div>
      <div className="absolute w-16 h-[6.2rem] bg-fuchsia-600 rounded-[10px] z-10 -rotate-[60deg]"></div>
      <div className="absolute w-16 h-[6.2rem] bg-fuchsia-500 rounded-[10px] z-0"></div>
      <div className="absolute z-30 flex flex-col justify-center items-center">
        <img src="/src/assets/tech/html.png" alt="css" className="absolute h-20 w-20"/>
        <p className="text-text  bg-slate-800 px-10 py-[2px] rounded-lg mt-16 z-50">CSS</p>
      </div>
    </div>
  )
}

const Tech = () => {
  return (
    <>
        <div>
            <motion.div variants={textVariant()}>
              <h2 className={styles.sectionHeadText}>
                Technologies
              </h2>
            </motion.div>
            <motion.p
              variants={fadeIn("","",0.3,1)}
              className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
              I am a second-year computer science student. In this portfolio I will show you some of my work in many different area, such as programing, creating graphic and some of my hobbies.
            </motion.p>
            <div className="flex w-fyll h-svh">
              <TechBadge/> 
              <TechBadge/> 
              <TechBadge/> 

            </div>
        </div>
    </>
  )
};

export default SectionWrapper(Tech,"Tech");
