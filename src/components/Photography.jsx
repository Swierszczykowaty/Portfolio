import './Photography.css';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc";
const Photography = () => {
  return (
    <>
    <div className="flex flex-col h-screen mb-[-189px]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Photography
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum placeat inventore dolore dicta praesentium in corporis, necessitatibus iste minus?
        <img
          id="photo1"
          className="image "
          src="src/photos/DSC_1657.JPG"
          alt="photograph"
          draggable="false"
        />
        <img
          id="photo2"
          className="image "
          src="src/photos/DSC_2192.JPG"
          alt="photograph"
          draggable="false"
        />
        <img
          id="photo3"
          className="image r"
          src="src/photos/IMG_7446.JPG"
          alt="photograph"
          draggable="false"
        />
         <img
          id="photo4"
         className="image objct-cover"
          src="src/photos/IMG_7634.JPG"
          alt="photograph"
          draggable="false"
         />
      </motion.p>
    </div>
  </>
  );
};

export default SectionWrapper(Photography, "photography");