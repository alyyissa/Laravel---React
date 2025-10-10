import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScroll, setLastScroll] = useState(0)
    const [open, setOpen] = useState(false);

    useEffect(() =>{
        if(open){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "auto";
        }
        return () => {
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "auto";
        }
    },[open]);
    
  return (
    <div className={`px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16 relative top-0
    bg-[#b1e1b9] py-6 transition-transform duration-400 w-full z-50
    ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    style={{
    boxShadow: `
      0 3px 4px color-mix(in oklch, oklch(27.54% 0.1638 265.98deg) 8%, transparent),
      0 4px 12px color-mix(in oklch, oklch(27.54% 0.1638 265.98deg) 8%, transparent)
    `,
  }}
    >
      <ul>
        <li>
            <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
