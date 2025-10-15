import React,{useEffect, useState} from 'react'
import Loading from '../components/Loading/Loading';
import { NavLink, Link, Outlet } from 'react-router-dom';

const Chapter = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <Loading />

  return (
    <div>
        <div className=" space-x-2 text-sm text-gray-500 font-medium pt-4 bg-[#f5f5f5]  shadow-md">
            <div className="mx-3 sm:mx-4 md:mx-11 lg:mx-13 xl:mx-14 2xl:mx-16 flex flex-wrap justify-start items-center">  
              <Link to="/" type="button" aria-label="Home">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z" fill="#475569" stroke="#475569" strokeWidth=".094"/>
                  </svg>
              </Link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1"/>
              </svg>
              <a href="#">E-Commerce</a>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1"/>
              </svg>
              <a href="#">Product</a>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328" fill="#CBD5E1"/>
              </svg>
              <a href="#" className="text-indigo-500">Earphones</a>
            </div>
            <div className="flex gap-3 mx-3 sm:mx-4 md:mx-11 lg:mx-13 xl:mx-14 2xl:mx-16 bottom-0">
              <h3 className="text-4xl py-5 font-bold">Course: Data Structure</h3>
            </div>

            <div className="flex gap-3 mx-3 sm:mx-4 md:mx-11 lg:mx-13 xl:mx-14 2xl:mx-16 bottom-0">
                <NavLink
                    to=""
                    end
                    className={({ isActive }) =>
                    `inline-block font-semibold p-2 text-coprimary ${
                        isActive ? "border-b-2 border-coprimary" : ""
                    }`
                    }
                >
                    Links
                </NavLink>

                <NavLink
                    to="exercises"
                    className={({ isActive }) =>
                    `inline-block font-semibold p-2 text-coprimary ${
                        isActive ? "border-b-2 border-coprimary" : ""
                    }`
                    }
                >
                    Exercises
                </NavLink>

                <NavLink
                    to="summary"
                    className={({ isActive }) =>
                    `inline-block font-semibold p-2 text-coprimary ${
                        isActive ? "border-b-2 border-coprimary" : ""
                    }`
                    }
                >
                    Summary
                </NavLink>
            </div>
        </div>
        <Outlet />
      </div>
  )
}

export default Chapter
