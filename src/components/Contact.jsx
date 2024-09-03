import {useState , useRef} from 'react';
import {styles} from '../style'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion';
import emailJs from '@emailjs/browser'
import { motion } from 'framer-motion';
import EarthCanvas from './canvas/Earth'

// service_h6q7e9q
// template_93qj6zq
// 7FFYAnL4UPMwGLWJW

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name : '',
    email : '',
    message : '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e)=>{
    const {name , value} = e.target;

    setForm({...form , [name] : value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);

    emailJs.send(
      "service_h6q7e9q",
      "template_93qj6zq",
      {
        from_name : form.name,
        to_name : "Zain_Ul_Abdeen",
        from_email : form.email,
        to_email: "mujtabazain183@gmail.com",
        message : form.message,
      },
      "7FFYAnL4UPMwGLWJW"
    )
    .then(()=>{
      setLoading(false);  
      setForm({
        name:"",
        message:"",
        email:"",
      })
      alert("Thank you. I will get back to you as soon as possible.")

    }, (error)=>{
        setLoading(false);
        alert("Something went wrong");
        console.log(error)
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden' >
      <motion.div 
      variants={slideIn("left", "tween" , 0.2 , 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
          <p 
          className={`${styles.sectionSubText}`}
          >Get in touch
          </p>
          <h3 
          className={`${styles.sectionHeadText}`}
          >
            Contact.
          </h3>

          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className='mt-12 flex flex-col gap-8'
          >
            <label 
              className='flex flex-col'
            >
              <span 
                className='text-white mb-4 font-medium'
                >
                  Your Name
                </span>
            <input 
              type="text" 
              value={form.name} 
              name="name" 
              onChange={handleChange} 
              placeholder="e.g Ali" 
              className='py-4 px-6 bg-tertiary rounded-lg text-white placeholder:text-secondary placeholder:text-sm outlined-none border-none font-medium'
            />
            </label>
            <label 
              className='flex flex-col'
            >
              <span 
                className='text-white mb-4 font-medium'
              >
                Your Email
              </span>
              <input 
                type="text" 
                value={form.email} 
                name="email" 
                onChange={handleChange} 
                placeholder="XYZ@mail.com" 
                className='py-4 px-6 placeholder:text-sm bg-tertiary rounded-lg text-white placeholder:text-secondary outlined-none border-none font-medium'
              />
            </label>
            <label 
              className='flex flex-col'
            >
              <span 
              className='text-white mb-4 font-medium'
              >
                Your Message
              </span>
              <textarea 
                rows="7" 
                type="text" 
                value={form.message} 
                name="message" 
                onChange={handleChange} 
                placeholder="What do you want to say" 
                className='py-4 px-6 placeholder:text-sm bg-tertiary rounded-lg text-white placeholder:text-secondary outlined-none border-none font-medium'
              />
            </label>
            <button 
                type='submit' 
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg"
            >
              {loading ? "sending..." : "send"}
            </button>
          </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween" , 0.2 , 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
          <EarthCanvas/>
      </motion.div>

      </div>
  )
}

export default SectionWrapper(Contact , "contact" )