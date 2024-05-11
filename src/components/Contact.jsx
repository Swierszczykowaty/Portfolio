import React from "react";
import { styles } from "../styles";
import { github, yt, insta, linkedin, gmail } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../untils/motion";



const Contact = () => {
  const copyEmailToClipboard = (event) => {
    event.preventDefault(); 
    
    const textarea = document.createElement('textarea');
    textarea.value = 'michal@swiercz.pl';
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    alert('Email copied to clipboard');
  };

  return (
    <>
      <div className={`${styles.paddingX} w-full flex flex-col items-center py-8`}>
        <motion.div className="w-full flex justify-between items-center max-w-7xl mx-auto my-4 md:my-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
            className="flex flex-col justify-center items-center ">
            <p className={`${styles.FooterText} mb-4  xl:w-44 hidden md:flex justify-center`}>More code</p> 
            <a href="https://github.com/Swierszczykowaty" target="_blank" rel="noopener noreferrer" draggable="false">
              <motion.img
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 0, 0],
              }}
              transition={{
              delay:2,
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 3,
              }}
          src={github} alt="git" className="object-contain h-6 w-6 xs:h-8 xs:w-8  " />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ delay: 2, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          className="flex flex-col justify-center items-center">
            <p className={`${styles.FooterText} mb-4  xl:w-44 hidden md:flex justify-center`}>More me</p> 
            <a href="https://www.linkedin.com/in/micha%C5%82-%C5%9Bwiercz-653124256/" target="_blank" rel="noopener noreferrer" draggable="false">
              <motion.img
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 0, 0],
                }}
                transition={{
                delay:2.5,
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 3,
                }}
              src={linkedin} alt="linkedin" className="object-contain h-6 w-6 xs:h-8 xs:w-8 " />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          className="flex flex-col justify-center items-center">
            <p className={`${styles.FooterText} mb-4  xl:w-44 hidden md:flex justify-center`}>More designs</p> 
            <div className="flex justify-center items-center">
              <a href="https://www.instagram.com/ogrodowe_katki_zakatki/" target="_blank" rel="noopener noreferrer" draggable="false">
                <motion.img
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 0, 0],
                }}
                transition={{
                delay:3,
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 3,
                }}
                src={insta} alt="git" className="object-cotain h-6 w-6 xs:h-8 xs:w-8 mx-2" />
              </a>
              <a href="https://www.youtube.com/@OgrodoweKatkiZakatki" target="_blank" rel="noopener noreferrer" draggable="false">
                <motion.img
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 0, 0],
                }}
                transition={{
                delay:3.5,
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 3,
                }}
                src={yt} alt="git" className="object-conain h-6 w-6 xs:h-8 xs:w-8  mx-2" />
              </a>
            </div>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          className="flex flex-col justify-center items-center">
            <p className={`${styles.FooterText} mb-4  xl:w-44 hidden md:flex justify-center`}>More photos</p> 
            <a href="https://www.instagram.com/swierszczuuuu/" target="_blank" rel="noopener noreferrer" draggable="false">
              <motion.img 
              animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 0, 0],
                }}
                transition={{
                delay:4,
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 3,
                }}
              src={insta} alt="git" className="object-contain h-6 w-6 xs:h-8 xs:w-8 " />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
          className="flex flex-col justify-center items-center">
            <p className={`${styles.FooterText} mb-4  xl:w-44 hidden md:flex justify-center`}>More contact</p> 
            <a draggable="false" onClick={copyEmailToClipboard}>
              <motion.img
               animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 0, 0],
                }}
                transition={{
                delay:4.5,
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 3,
                }}
              src={gmail} alt="git" className="cursor-pointer object-contain h-6 w-6 xs:h-8 xs:w-8 "/>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
            }}
        className="h-[1px] my-4 md:my-10 rounded-xl w-[75%] md:w-[60%] mx-auto bg-primary2"></motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
            }}
        className={`${styles.FooterText} mt-4 mb-2 md:mt-6 md:mb-10`}>
          @2024 Michał Świercz, All rights reserved.
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
