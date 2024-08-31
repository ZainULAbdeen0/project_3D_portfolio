import {VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {motion} from 'framer-motion';
import { experiences } from '../constants';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { textVariant  } from '../utils/motion';

const ExperienceCard = ({experience})=>(
  <VerticalTimelineElement
  contentStyle = {{background : '#1d1836' , color:'#fff'}}
  contentArrowStyle = {{borderRight: '7px solid #232631'}}
  date = {experience.date}
  iconStyle={{background:experience.iconBg}}
  icon = {
    <div className='flex justify-center items-center h-full w-full'>
      <img
      src = {experience.icon}
      alt = {experience.company_name}
      className = "w-[60%] h-[60%] object-contain"
      />
    </div>
  }
  >
    <div className="">
      <h3 className="font-bold text-white text-[24px]">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className='list-disc mt-5 ml-2 sapce-y-2'>
        {experience.points.map((point , index)=>(
          <li key={`experience-point-${index}`} className='text-[14px] text-white-100 tracking-wider pl-1'>{point}</li>
        ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>What I have done so far</p>
      <h1 className={`${styles.sectionHeadText}`}>Work experience</h1>
     </motion.div>
     <div className="mt-20 flex flex-col ">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
          key={index}
          experience={experience}
          />
        ))}
      </VerticalTimeline>
     </div>
    </>
  )
}

export default SectionWrapper(Experience , "work");