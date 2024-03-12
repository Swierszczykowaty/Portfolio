import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
const Pandas = () => {
  return (
    <>
        <div className="h-full">
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>
                   Panda Design
                </h2>
            </motion.div>
        </div>
    </>
  )
};

export default SectionWrapper(Pandas,"Pandas");
