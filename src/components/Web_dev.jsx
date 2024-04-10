import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import './Web_dev.scss'
import { web_pages } from "../constans";

const WebBox = ({ photo, title, description }) => {
  return (
    <section>
      <div className="">
        <div className="col-md-4 col-sm-6 col-xs-12">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          <div className='flex flex-wrap justify-center items-center gap-10 mt-20'>
          {web_pages.map((photo, index) => (
              <WebBox key={index} {...photo} />
            ))}
          </div>
        </div>
    </>
  );
};

export default SectionWrapper(Web_dev,"Web_dev");