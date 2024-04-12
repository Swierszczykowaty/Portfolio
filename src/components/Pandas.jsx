import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import { pandas } from "../constans";
import './Pandas.scss';

const Pandaslide = ({title, body, color}) => {
  return(
    <div className="group relative">
      <div className="w-56 h-56 mr-4 relative">
        <div className="w-full h-full rounded-full absolute scale-50 opacity-70 blur-md group-hover:scale-100 duration-700 " style={{ backgroundColor: color }}></div>
        <img src={body} alt="panda" className="shrink-0 group-hover:scale-[1.15] duration-700 pandas" />
      </div>
      {/* <p className="flex mr-4 justify-center mt-3 text-xl group-hover:scale-100 scale-75 group-hover:opacity-100 opacity-0 duration-700 text-text ">{title}</p> */}
    </div>
  );
};

const Pandas = () => {
  return (
      <>
        <div className="felx flex-col ">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Graphic Designer
            </h2>
          </motion.div>
          <motion.p variants={fadeIn("","",0.3,1)}
          className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
            Robienie Pand svg do pandarium i innyc rzeczy
          </motion.p>
          <motion.div variants={fadeIn("","",0.5,1)} class=" overflow-hidden w-full relative">
            <div class="flex flex-row  mb-3 md:mb-4 xl:mb-5 mt-20 ">
              <div class="flex flex-row animate-slideLeft ">
                {pandas.map((photo, index) =>(
                  <Pandaslide key={index} {...photo}/>
                ))}
              </div>
              <div class="flex flex-row animate-slideLeft ">
                {pandas.map((photo, index) =>(
                  <Pandaslide key={index} {...photo}/>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-background to-transparent md:w-[250px] w-[100px] h-full absolute bottom-0"></div>
            <div className="bg-gradient-to-l from-background to-transparent md:w-[250px] w-[100px] h-full absolute bottom-0 right-0"></div>
          </motion.div>
          <motion.p variants={fadeIn("","",0.7,1)}
          className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
            Miniaturki yt i instagram a takze inne prace graficzne
          </motion.p>
        </div>
      </>
  );
};

export default SectionWrapper(Pandas,"Pandas");
// {web_pages.map((photo, index) => (
//   <WebBox key={index} {...photo} />
// ))}