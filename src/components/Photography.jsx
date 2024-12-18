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
            One of my interests is photography, here are some photos I took, if you want to see more you can click on the dice at the bottom and hover them to see some more details.  </motion.p>
        <div className='flex flex-col items-center'>
          <motion.div variants={fadeIn("up","",0.4,1)} className='z-10 container'>
            {photos.map((photo, index) => (
              <PhotoBox key={index} {...photo} />
            ))}
          </motion.div>
          <motion.div
           animate={{
            rotate: [0, 0, 190, 0, 0],
          }}
          transition={{
          delay:3,
           duration: 2,
           ease: "easeInOut",
           times: [0, 0.2, 0.5, 0.8, 1],
           repeat: Infinity,
           repeatDelay: 4,
          }}
          variants={fadeIn("down","",0.8,1)}
          onClick={handleRandomizePhotos}
          className='button_photo'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8, rotate: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className='photobutton cursor-pointer bg-slate-80 p-2 flex items-center justify-center rounded-xl z-10  g-background'>
            </motion.div>
          </motion.div>  
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Photography, "Photography");
