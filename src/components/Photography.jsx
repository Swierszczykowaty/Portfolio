import React, { useState, useEffect } from 'react';
import './Photography.scss';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc";
import { photography } from "../constans";

const getRandomPhotos = (photos, count) => {
  const shuffled = photos.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const PhotoBox = ({ photo, title, description, date }) => {
  return (
    <div className='box'>
      <div className='imgBx'>
        <img
          className="image"
          src={photo}
          alt="photograph"
          draggable="false"
        />
      </div>
      <div className='content'>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='content2'>
        <p>{date}</p>
      </div>

    </div>
  );
};

const Photography = () => {
  const [photos, setPhotos] = useState([]);
  const [numOfPhotos, setNumOfPhotos] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 650){
        setNumOfPhotos(1);
      }else if(width < 770) { 
        setNumOfPhotos(3); 
      }
      else if(width < 1024) { 
        setNumOfPhotos(4); 
      } else {
        setNumOfPhotos(7); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setPhotos(getRandomPhotos(photography, numOfPhotos));
  }, [numOfPhotos]);

  const handleRandomizePhotos = () => {
    setPhotos(getRandomPhotos(photography, numOfPhotos));
  };


  return (
    <>
      <div className="flex flex-col ite">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>
            Photography
          </h2>
        </motion.div>
        <motion.p variants={fadeIn("","",0.1,1)}
          className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum placeat inventore dolore dicta praesentium in corporis, necessitatibus iste minus?
        </motion.p>
        <div className='flex flex-col items-center'>
          <motion.div variants={fadeIn("right","",0.4,1)} className='container'>
            {photos.map((photo, index) => (
              <PhotoBox key={index} {...photo} />
            ))}
          </motion.div>
          <motion.div variants={fadeIn("right","",0.8,1)} className='button_photo'>
            <motion.button
             whileHover={{ scale: 1.1, rotate: 45 }}
             whileTap={{ scale: 0.8 }}
             transition={{ type: "spring", stiffness: 400, damping: 10, duration: 20 }}
             onClick={handleRandomizePhotos} className=' bg-slate-80 p-2 mt-4 mb-10 sm:mb-0 flex items-center justify-center rounded-xl z-10  bg-background'>
            {/* hover:scale-[1.30] hover:-rotate-[135deg] duration-700 */}
              <img src="src\assets\dice.svg" alt="dice" className='h-12'/>
            </motion.button>
          </motion.div>  
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Photography, "photography");
