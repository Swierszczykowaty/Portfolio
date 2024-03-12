import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
const Blend = () => {
  return (
    <>
        <div>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>
                    3D Designer
                </h2>
            </motion.div>
        </div>
    </>
  )
};

export default SectionWrapper(Blend,"Blend");
