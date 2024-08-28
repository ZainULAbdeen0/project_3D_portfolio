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
            Hi I&apos;m <span className="text-[#915eff]">ZainUlAbdeen</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>Crafting Seamless Web <br className="sm:block hidden"/>Experiences with MERN & Next.js</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
