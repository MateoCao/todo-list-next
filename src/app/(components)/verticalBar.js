import IconButton from "./iconButton"
import { AiOutlineCalendar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { PiGearFill } from "react-icons/pi"; 
import { BsColumnsGap } from "react-icons/bs";

export default function VerticalBar ({ children, bg }) {
  const bgDefault = 'blue-gray-200'

  return (
        <aside id='verticalBar' className={`h-[100vh] drop-shadow-lg ${bg || bgDefault} w-16 flex flex-col justify-evenly items-center`}>
          
          <IconButton icon={ <BsColumnsGap size={"2rem"} /> } />
          <IconButton icon={ <FaUserCircle size={"2rem"} /> } />
          <IconButton icon={ <AiOutlineCalendar size={"2rem"} /> } /> 
          <IconButton icon={ <PiGearFill size={"2rem"} /> } /> 
          { /*
            <IconButton icon={ <FaGear size={"2rem"} /> } /> 
          */ }
          

            { children }
        </aside>
  )
}
