import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  useEffect(() => {
    const handleResize = () =>{
        if(window.innerWidth >= 768){
            setShowNav(false)
        }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  },[])
  return(
    <>
      <div
        className={`px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16 relative top-0
        bg-bgNav py-6 transition-transform duration-400 w-full z-50 flex justify-between
        `}
        style={{
          boxShadow: `
            0 4px 4px color-mix(in oklch, oklch(27.54% 0.1638 265.98deg) 8%, transparent),
            0 4px 12px color-mix(in oklch, oklch(27.54% 0.1638 265.98deg) 8%, transparent)
            `,
        }}
      >
        <div className="md:hidden block cursor-pointer">
          <i className="fa-solid fa-bars text-coprimary" onClick={toggleNav}></i>
        </div>

        <img src={assets.logo} alt="Logo" />

        <div className="hidden md:block">
          <ul className="flex flex-row gap-10">
            <li>
              <Link to="/" className="text-coprimary font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/error" className="text-coprimary font-semibold">
                Error
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-coprimary font-semibold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-coprimary font-semibold">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <ul className="flex flex-row gap-2">
            <li>
              <Link
                to="/login"
                className="text-coprimary font-semibold p-2 rounded-[5px] border b-2 border-coprimary"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-bgNav font-semibold p-2 rounded-[5px] border b-2 border-coprimary bg-coprimary"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-bgNav transform transition-transform duration-300 z-50 shadow-2xl
        ${showNav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5">
          <button onClick={toggleNav} className="text-coprimary mb-5 ml-[-5px]">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>

          <ul className="flex flex-col gap-6 mt-5">
            <li>
              <Link onClick={toggleNav} to="/" className="text-coprimary font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/error" className="text-coprimary font-semibold">
                Error
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/contactus" className="text-coprimary font-semibold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/contactus" className="text-coprimary font-semibold">
                Pricing
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/login" className="text-coprimary font-semibold">
                Login
              </Link>
            </li>
            <li>
              <Link onClick={toggleNav} to="/signup" className="text-coprimary font-semibold">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Dark Overlay (click to close) */}
      {showNav && (
        <div
          onClick={toggleNav}
          className="fixed inset-0 bg-transparent bg-opacity-30 z-10"
        >  
        </div>
      )}
    </>
  );
};

export default Navbar;
