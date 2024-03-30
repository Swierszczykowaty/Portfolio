import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import './Web_dev.css'


const Web_dev = () => {
  return (
    <>
        <div>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>
                    Web Designer
                </h2>
            </motion.div>
            <motion.p variants={fadeIn("","",0.3,1)}
            className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
              Głównym projektem web dev było pndarium, a także frontendowy klon reddita
            </motion.p>
            <div className="flex mt-20 justify-center mx-auto">
              <img src="src\photos\reddit.png" alt="reddit" className="max-h-[500px]" />
            </div> 
        </div>
    </>
  );
};

export default SectionWrapper(Web_dev,"Web_dev");