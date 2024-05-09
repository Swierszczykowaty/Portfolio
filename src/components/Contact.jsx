import React from "react"
import { SectionWrapper } from "../hoc";
import {footicons} from "../constans";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import { render } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";


const Contact = () => {
  return (
    <>
        <div className="flex flex-col ">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Contact
            </h2>
          </motion.div>
          

      </div>
    </>
  );
};


export default SectionWrapper(Contact,"Contact");