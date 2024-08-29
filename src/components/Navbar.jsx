import {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../style';
import {navLinks} from '../constants';
import {logo , menu , close} from '../assets';

const Navbar = () => {
  const [Toogle, setToogle] = useState(false)
  const [Active, setActive] = useState("")
  return (
    <nav className={`${styles.paddingX} w-full fixed flex items-center py-5  top-0 z-20 bg-primary`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-bottom">
        <Link 
        to="/" 
        className='flex items-center gap-2' 
        onClick={
          ()=>{setActive("")
          window.scrollTo(0.0)
        }}>
        <img src={logo} alt="Icon" className=" w-16 h-16 object-contain" />
        <p className='text-white text-[18px] font-bold cursor-pointer'>ZAIN</p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10 flex-row">
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${ 
              Active === link.title
              ? "text-white"
              : "text-secondary"
              } text-[18px] hover:text-white font-medium cursor-pointer`}
               onClick = {()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>
              {link.title}
              </a>
            </li>
          ))}
        </ul>
        {/* mobile navigation  */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={Toogle ? close : menu} 
          alt="manu"
          className="sm:hidden h-[28px] w-[28px] object-contain cursor-pointer" 
          onClick={()=> setToogle(!Toogle)}
          />
          <div className={`${!Toogle ? "hidden" : "flex absolute"} p-6 black-gradient top-20 mx-5 right-0 min-w-[140px] rounded-xl my-2 z-10`}>
          <ul className="list-none flex flex-col justify-end text-start gap-4">
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${ 
              Active === link.title
              ? "text-white"
              : "text-secondary"
              } text-[16px] font-medium font-poppins cursor-pointer`}
               onClick = {()=> {
                setToogle(!Toogle);
                setActive(link.title)}}
            >
              <a href={`#${link.id}`}>
              {link.title}
              </a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;