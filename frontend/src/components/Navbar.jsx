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

    // useEffect(()=>{
    //     const handleScroll = () => {
    //         const currentScroll = window.scrollY;

    //         if(currentScroll < 50){
    //             setShowNav(true);
    //         }else if(currentScroll > lastScroll){
    //             setShowNav(false);
    //         }else{
    //             setShowNav(true);
    //         }
    //         setLastScroll(currentScroll)
    //     };
    //         window.addEventListener("scroll",handleScroll);
    //         return () => window.removeEventListener("scroll",handleScroll)
    // }, [lastScroll]);
    
  return (
    <div className={`px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16 relative top-0
    border-b b-1 border-[#5076db] bg-[#b1e1b9] py-6 transition-transform duration-400 w-full z-50
    ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
      <ul>
        <li>
            <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
