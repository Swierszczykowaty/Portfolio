import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc";
import About_tile from "./About_tile";

const About = () => {
  return (
    <>
    <div className="flex flex-col h-screen mb-[-189px]">
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum placeat inventore dolore dicta praesentium in corporis, necessitatibus iste minus?
      </motion.p>
        <About_tile/>  
    </div>
    </>
  );
};

export default SectionWrapper(About, "about");