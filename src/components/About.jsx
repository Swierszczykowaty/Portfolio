import React from "react";
import './About.css'
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt
    perspective={800}
    glareEnable={true}
    glareMaxOpacity={0.25}
    glarePosition="all"
    glareBorderRadius="16px"
    glareColor="#8569a7"
    transitionSpeed={1500}
    className="para">
      <motion.div 
        className="para min-w-[160px] sm:w-[200px] md:w-[220px]  md:h-auto yellow-purple-gradient p-1 group rounded-2xl shadow-cardd">
        <div className="para bg-[#1B1A32] rounded-xl md:py-5 md:px-12 min-h-[140px] h-[160px] sm:h-[220px] md:h-[280px] flex flex-col items-center justify-evenly duration-300 group-hover:bg-[#141324]">
          <motion.img src={icon} alt={title} className=" inn w-10 h-10 sm:w-14 sm:h-14 object-contain " />
          <motion.h3 className="inn text-text text-[11px] sm:text-md md:text-lg font-bold text-center">{title}</motion.h3> 
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <div className="flex flex-col mb-20">
      {/* h-screen */}
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.3,1)}
      className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
       I am a second-year computer science student. In this portfolio I will show you some of my work in many different area, such as programing, creating graphic and some of my hobbies.
      </motion.p>
      <motion.div
        variants={fadeIn("up","",0.5,1)}
        className="flex flex-wrap xs:gap-20 gap-10 mt-20 justify-center  ">
        {services.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </motion.div> 
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");