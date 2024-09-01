import {motion} from 'framer-motion';
import {styles} from '../style';
import {fadeIn , textVariant} from '../utils/motion'
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';

const FeedbackCard = ({index,testimonial , name , image , designation , company})=>{
  return(
    <motion.div variants={fadeIn("" , "spring" , 0.5*index , 0.75)} className="p-10 rounded-3xl xs:w-[320px] w-full bg-black-200">
      <p className='text-white text-[48px] font-bold'>"</p>
      <div className="mt-1">
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="">
            <p className='text-white font-medium text-[15px]'><span className='blue-text-gradient'>@</span> {name}</p>
            <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
          </div>
          <img className="h-10 w-10 rounded-full object-contain" src={image} alt={`Testimonial-of-${name}`}/>
        </div>
      </div>
    
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='bg-black-100 mt-12 rounded-[20px]'>
        <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}>
         <motion.div variants={textVariant()}>
         <p className={`${styles.sectionSubText}`}>What peoples say</p>
         <h1 className={`${styles.sectionHeadText}`}>Testimonials.</h1>
         </motion.div>
        </div>
        <div className={`${styles.paddingX} flex flex-wrap gap-7 -mt-20 pb-14`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
            key={`feedback-card-${index}`}
            index = {index}
            {...testimonial}
            />
          ))}

        </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks , "")