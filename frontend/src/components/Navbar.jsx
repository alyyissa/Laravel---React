import React, { useEffect, useState } from 'react'

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

    useEffect(()=>{
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if(currentScroll < 50){
                setShowNav(true);
            }else if(currentScroll > lastScroll){
                setShowNav(false);
            }else{
                setShowNav(true);
            }
            setLastScroll(currentScroll)
        };
            window.addEventListener("scroll",handleScroll);
            return () => window.removeEventListener("scroll",handleScroll)
    }, [lastScroll]);
    
  return (
    <div className={`px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16 fixed top-0
    border-b b-2 bg-yellow-100 py-12 transition-transform duration-400 w-full z-50
    ${showNav ? "translate-y-0" : "-translate-y-full"}`}>
      
    </div>
  )
}
export default Navbar
