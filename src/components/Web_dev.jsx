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
            <div className="flex flex-col mt-20 justify-center mx-auto gap-5">
              <img src="src\assets\webdev\reddit.png" alt="reddit" className="" />
              <img src="src\assets\webdev\GameTile.png" alt="reddit" className="" />
              <img src="src\assets\webdev\Title.png" alt="reddit" className="" />
              <img src="src\assets\webdev\Character Tile.png" alt="reddit" className="" />
              <img src="src\assets\webdev\Ourpandas.png" alt="reddit" className="" />
            </div> 
        </div>
    </>
  );
};

export default SectionWrapper(Web_dev,"Web_dev");