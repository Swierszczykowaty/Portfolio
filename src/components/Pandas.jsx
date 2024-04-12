import React from "react"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../untils/motion";
const Pandas = () => {
  return (
    <>
        <div className="felx flex-col">
        <motion.div variants={textVariant()}>
              <h2 className={styles.sectionHeadText}>
                  Vector Designer
              </h2>
          </motion.div>
          <motion.p variants={fadeIn("","",0.3,1)}
          className="mt-4 text-text text[17px] max-w-3xl leading-[40px]">
            Robienie Pand svg do pandarium i innyc rzeczy
          </motion.p>
          <div>
            <div class="tag-list">
              <div class="loop-slider">
                  <div class="inner">
                  <div class="tag"><span>#</span> JavaScript</div>
                  <div class="tag"><span>#</span> webdev</div>
                  <div class="tag"><span>#</span> Typescript</div>
                  <div class="tag"><span>#</span> Next.js</div>
                  <div class="tag"><span>#</span> UI/UX</div>
                  <div class="tag"><span>#</span> JavaScript</div>
                  <div class="tag"><span>#</span> webdev</div>
                  <div class="tag"><span>#</span> Typescript</div>
                  <div class="tag"><span>#</span> Next.js</div>
                  <div class="tag"><span>#</span> UI/UX</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </>
  );
};

export default SectionWrapper(Pandas,"Pandas");
