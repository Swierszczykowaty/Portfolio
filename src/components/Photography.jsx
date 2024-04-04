import './Photography.scss';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc";
const Photography = () => {
  return (
    <>
    <div className="flex flex-col mb-16">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Photography
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum placeat inventore dolore dicta praesentium in corporis, necessitatibus iste minus?
      </motion.p>
      
        <motion.div variants={fadeIn("right","",0.4,1)} className='container'>
          <div className='box'>
            <div className='imgBx'>
              <img
              id="photo1"
              className="image "
              src="src/photos/DSC_1657.JPG"
              alt="photograph"
              draggable="false"
              />
            </div>
            <div className='content'>
              <div>
                <h2>title</h2>
                <p>opis</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img
              id="photo1"
              className="image "
              src="src/photos/IMG_7634.JPG"
              alt="photograph"
              draggable="false"
              />
            </div>
            <div className='content'>
              <div>
                <h2>title</h2>
                <p>opis</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img
              id="photo1"
              className="image "
              src="src/photos/IMG_7446.JPG"
              alt="photograph"
              draggable="false"
              />
            </div>
            <div className='content'>
              <div>
                <h2>title</h2>
                <p>opis</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img
              id="photo1"
              className="image "
              src="src/photos/DSC_2192.JPG"
              alt="photograph"
              draggable="false"
              />
            </div>
            <div className='content'>
              <div>
                <h2>title</h2>
                <p>opis</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img
              id="photo1"
              className="image "
              src="src/photos/DSC_2192.JPG"
              alt="photograph"
              draggable="false"
              />
            </div>
            <div className='content'>
              <div>
                <h2>title</h2>
                <p>opis</p>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img
              id="photo1"
              className="image "
              src="src/photos/DSC_2192.JPG"
              alt="photograph"
              draggable="false"
              />
            </div>
            <div className='content'>
              <div>
                <h2>title</h2>
                <p>opis</p>
              </div>
            </div>
          </div>
         </motion.div>
         
    </div>
  </>
  );
};

export default SectionWrapper(Photography, "photography");
