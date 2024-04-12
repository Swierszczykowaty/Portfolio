import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import './Web_dev.scss'
import { web_pages } from "../constans";
import {github} from "../assets"

const WebBox = ({ photo, title, description, link}) => {
  return (
      <>
          <div className="card">
            <div className="cover">
              <img
              className="photo"
              src={photo}
              alt="photograph"
              draggable="false"
              />
              <h1 className={styles.WebHeadText}>{title}</h1>
              <div className="card-back">
                <p className={styles.WebSubText}> {description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" draggable="false">
                  <img src={github} alt="github" className="web_gitimg" draggable="false"/>
                </a>
              </div>
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
          <motion.div variants={fadeIn("","",0.6,1)} className='flex flex-wrap justify-center items-center gap-10 mt-10 mb-10'>
          {web_pages.map((photo, index) => (
              <WebBox key={index} {...photo} />
            ))}
          </motion.div>
        </div>
    </>
  );
};

export default SectionWrapper(Web_dev,"Web_dev");