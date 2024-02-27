import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`{styles.sectionSubText} text-[#EDE34C]`}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum placeat inventore dolore dicta praesentium in corporis, necessitatibus iste minus?
    </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");