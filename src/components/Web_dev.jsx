import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import './Web_dev.css'
import { web_pages } from "../constans";

const WebBox = ({ photo, title, description }) => {
  return (
    <>
      <div className=" web_box relative rounded-xl">
        <div className=" image_box">
          <img
            className="image"
            src={photo}
            alt="photograph"
            draggable="false"
          />
          </div>
          <div className="absolute left-0 bottom-0 m-4 text-black text-3xl ">
            {title}
        
        </div>
      </div>
    </>
  );
};



const Web_dev = () => {
  return (
    <>
        <div className="flex flex-col">
          <motion.div variants={textVariant()}>
              <h2 className={styles.sectionHeadText}>
                  Web Designer
              </h2>
          </motion.div>
          <motion.p variants={fadeIn("","",0.3,1)}
          className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
            Głównym projektem web dev było pndarium, a także frontendowy klon reddita
          </motion.p>
          <div className='flex justify-center items-center gap-10 m-auto mt-20'>
          {web_pages.map((photo, index) => (
              <WebBox key={index} {...photo} />
            ))}
          </div>
        </div>
    </>
  );
};

export default SectionWrapper(Web_dev,"Web_dev");