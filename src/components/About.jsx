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
    transitionSpeed={1500}
    
    className="para">
      <motion.div 
        className="para w-[200px] md:w-[220px]  md:h-auto yellow-purple-gradient p-1 group rounded-2xl shadow-cardd">
        <div className="para bg-[#1B1A32] rounded-xl py-5 px-12 min-h-[160px] h-[220px] md:h-[280px] flex flex-col items-center justify-evenly duration-300 group-hover:bg-[#141324]">
          <motion.img src={icon} alt={title} className="opacity-0 inn w-14 h-14 object-contain " />
          <motion.h3  className="inn opacity-0 text-text text-xl font-bold text-center">{title}</motion.h3> 
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
        Jestem studentem II roku Informatyki. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat labore aspernatur commodi non aliquid! Adipisci quaerat aliquid iste dicta accusantium aut aperiam obcaecati, iusto asperiores nemo nam impedit, illum in?
        
      </motion.p>
      <div className="flex flex-wrap xs:gap-20 gap-10 mt-20 justify-center  ">
        {services.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> 
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");