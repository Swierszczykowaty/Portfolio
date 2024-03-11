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
    perspective={400}
    glareEnable={true}
    glareMaxOpacity={0.25}
    glarePosition="all"
    glareBorderRadius="16px"
    glareColor="#8569a7"
    transitionSpeed={700}
    
    className="para">
      <motion.div variants={fadeIn("right","spring",0.5 * index , 0.75)}
      className="para w-[220px] yellow-purple-gradient p-1 rounded-2xl shadow-cardd">
        <div className="para bg-[#1B1A32] rounded-xl py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
          <motion.img src={icon} alt={title} className="inn w-16 h-16 object-contain" />
          <motion.h3  transition={{ delay: 1 }} className="inn text-text text-xl font-bold text-center">{title}</motion.h3>            </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <div className="flex flex-col h-screen mt-10 ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.3,1)}
      className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
        Lorem ipsum dolor, sit amdolor, sit amet consectetur adipisicing elidolor, sit amet consectetur adipisicing elidolor, sit amet consectetur adipisicing elidolor, sit amet consectetur adipisicing elidolor, sit amet consectetur adipisicing elidolor, sit amet consectetur adipisicing elidolor, sit amet consectetur adipisicing eliet consectetur adipisicing elit. A harum placeat inventore dolore dicta praesentium in corporis, necessitatibus iste minus?
      </motion.p>
      <div className="flex flex-wrap gap-14 mt-20 justify-center ">
        {services.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
        </div> 
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");