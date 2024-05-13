import React from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";

const Page404 = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center h-screen w-screen gradientbg">
          <div className="flex flex-col w-40 h-auto text-center ">
            <p className="text-text">You are alone here.</p>
          </div>
          <Link to="/">
              <p className="text-primary2 mt-6">Time to go back</p>
            </Link>
        </div>
    </>
  )
};

export default Page404
