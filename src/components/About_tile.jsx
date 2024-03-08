import { motion } from "framer-motion";
import React from "react"
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../untils/motion";

const About_tile = ({index,title,icon}) => {
  return (
    <>
    <Tilt classNme="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",0.5 * index , 0.75)}
        className="w-full">
            <div options={{
                max:45,
                scale:1,
                speed:450
            }}
            className="bg-slate-700 rounded-xl py-5 px-12 min-h-[280px]">

            </div>

        </motion.div>
        
    </Tilt>

    </>
  )
};

export default About_tile;
