import React from "react"
import { SectionWrapper } from "../hoc";
import {footicons} from "../constans";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
const Contact = () => {
  return (
    <>
        <div className="flex flex-col ">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Contact
            </h2>
          </motion.div>
        {/* {footicons.map((link) => (
          <div>

          </div>
            ))} */}

      </div>
    </>
  );
};


export default SectionWrapper(Contact,"Contact");