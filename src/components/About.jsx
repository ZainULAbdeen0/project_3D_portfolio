import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from 'framer-motion'
import {styles} from '../style'
import {services} from '../constants/index'
import {fadeIn  , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({title, index ,icon})=>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right" , "spring" , 0.5*index , 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        options = {{max:45, scale:1 , speed:450}}
        className="bg-tertiary py-5 px-12 flex items-center justify-evenly flex-col rounded-[20px] min-h-[250px]">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white font-bold text-center text-[20px]">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const Aboutf = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>Introduction</p>
    <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
   </motion.div>
   <motion.p variants={fadeIn("" , "" , 0.1 , 1)} className={`${styles.sectionSubText} mt-4 text-secondary max-w-3xl text-[17px] leading-30px`}>
   Hi, I'm a Web developer with experience in javascript and frameworks like React, NextJs, Node.js, expressJs and ThreeJs. I love turning complex problems into simple, elegant solutions through code. Whether it's building full-stack applications or exploring the latest in web development, I'm always eager to learn and grow. Let's create something amazing together!
   </motion.p>
   <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service , index)=>(
      <ServiceCard
      key = {service.title}
      index = {index}
      {...service}
      />
    ))}

   </div>
   </>
  )
}

const About =  SectionWrapper(Aboutf , "about");
export default About;