import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import { pandas, okz } from "../constans";
import './Pandas.scss';

const Okz =({title, photo, index}) => {
  return(
    <>
      <motion.div variants={fadeIn("up","",0.4+(index*0.2),1)} className="cardokz ">
          <img src={photo} alt="okz" className="imageokz rounded-xl duration-500 border-4 border-text" />
      </motion.div>
    </>
  );
};

const Pandaslide = ({title, body, color}) => {
  return(
    <div className="group relative">
      <div className="w-40 mr-4 relative pandash rounded-3xl overflow-hidden ">
        <div className=" w-full h-full rounded-full absolute scale-50 opacity-80 group-hover:scale-150 duration-300 " style={{ backgroundColor: color }}></div>
        <img src={body} alt="panda" className="shrink-0 object-cover group-hover:scale-[1.15] duration-500 pandas" />
      </div>
      {/* <p className="flex mr-4 justify-center mt-3 text-xl group-hover:scale-100 scale-75 group-hover:opacity-100 opacity-0 duration-700 text-text ">{title}</p> */}
    </div>
  );
};

const Pandas = () => {
  return (
      <>
        <div className="flex flex-col ">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>
              Graphic Designer
            </h2>
          </motion.div>
          <motion.p variants={fadeIn("","",0.3,1)}
          className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
            In this section I can show my pandas that were used in the pandarium project and were made in vector graphics. Here are a few of them:
          </motion.p>
          <motion.div variants={fadeIn("","",0.5,1)} class="pb-4 pt-12 overflow-hidden w-full relative">
            <div class="flex flex-row mb-3 md:mb-4 xl:mb-5 ">
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
            <div className="bg-gradient-to-r from-background to-transparent w-[100px] h-full absolute bottom-0"></div>
            <div className="bg-gradient-to-l from-background to-transparent w-[100px] h-full absolute bottom-0 right-0"></div>
          </motion.div>
          <motion.p variants={fadeIn("","",0.7,1)}
          className="mt-4 mb-12 text-text text[17px] max-w-3xl leading-[40px]">
            I also create posters for Instagram and thumbnails for YouTube that are garden-themed, here are some of them, you can find more at the links in the footer. </motion.p>
          <motion.div  className=" flex justify-center">
            {okz.map((photo,index) =>(
            <Okz key={index} index={index} {...photo}/>
            ))}
          </motion.div>
        </div>
      </>
  );
};

export default SectionWrapper(Pandas,"Pandas");
// {web_pages.map((photo, index) => (
//   <WebBox key={index} {...photo} />
// ))}