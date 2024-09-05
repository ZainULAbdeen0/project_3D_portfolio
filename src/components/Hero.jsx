import {useState , useEffect} from 'react'
import { motion } from "framer-motion";
import { styles } from "../style.js";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full relative h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row gap-5 items-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Zain</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>Crafting Seamless Web <br className="sm:block hidden"/>Experiences with MERN & Next.js</p>
        </div>
      </div>
      <ComputersCanvas
      />
      <div className="absolute  xl:bottom-6 sm:bottom-3 bottom-10 flex justify-center items-center w-full pointer-events-none">
        <a href="#about">
          <div className='w-[30px] h-[65px] xl:w-[25px] xl:h-[60px] rounded-full border-4 border-secondary flex justify-center items-center pointer-events-auto'>
          <motion.div
            animate = {{y:[0 , 24  ,0]}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className = "mb-[10px] h-3 w-3 rounded-full bg-secondary"
          />  
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
