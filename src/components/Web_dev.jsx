import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import './Web_dev.scss'
import { web_pages } from "../constans";
import {github} from "../assets"

const WebBox = ({index, photo, title, description, link}) => {
  return (
      <motion.div variants={fadeIn("right","",0.4+(index*0.3),0.9)}>
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
      </motion.div>
  );
};

const Web_dev = () => {
  return (
    <>
        <div className="flex flex-col">
          <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>
                Work
               </p>    
              <h2 className={styles.sectionHeadText}>
                  Web Designer
              </h2>
          </motion.div>
          <motion.p variants={fadeIn("","",0.3,1)}
          className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
              In this section I can present a few website projects that I have done recently. In the project descriptions there are links to the code on Github, also in the published projects there are links to the pages.</motion.p>
          <motion.div  className='flex flex-wrap justify-center items-center gap-10 mt-10 mb-10'>
          {web_pages.map((photo, index) => (
              <WebBox key={index} index={index} {...photo} />
            ))}
          </motion.div>
        </div>
    </>
  );
};

export default SectionWrapper(Web_dev,"Web_dev");