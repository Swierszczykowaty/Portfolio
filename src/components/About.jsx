import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt  options={{
      max:40,
      perspective: 500,
      speed: 2000
  }}
    classNme="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",0.5 * index , 0.75)}
        className="w-[220px] yellow-purple-gradient p-1 rounded-2xl shadow-card">
            <div
            className="bg-[#1B1A32] rounded-xl py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly">
              <img src={icon} alt={title} className="w-16 h-16 object-contain" />
              <h3 className="text-text text-xl font-bold text-center">{title}</h3>
            </div>

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
      <div className="flex flex-wrap gap-14 mt-20 justify-center">
        {services.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

        </div>
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");