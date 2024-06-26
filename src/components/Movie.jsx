import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
const Movies = () => {
  return (
    <>
        <div>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>
                    Movie Maker
                </h2>
            </motion.div>
        </div>
    </>
  )
};

export default SectionWrapper(Movies,"Movies");
