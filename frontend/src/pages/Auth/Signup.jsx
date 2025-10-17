import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import {lebaneseUniversities} from "../../assets/assets"

const Signup = () => {
    const [university, setUniversity] = useState("");
    const [loading, setLoading] = useState(true);
    const [showPass, setShowPass] = useState(false);

    const togglePass = () =>{
        setShowPass(!showPass)
    }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="bg-cover bg-no-repeat bg-center h-[110vh] flex justify-center items-center px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16"
    style={{ backgroundImage: `url(${assets.background})` }}>
        <div  className="flex justify-center items-center flex-col">
            <div className="relative z-[1] max-w-[500px] ">
                <div className={`${styles["login-page"]}`}>
                    <form
                    className={`${styles["signup-form"]} sm:w-[450px] w-full bg-[#fff] border-[1px] border-solid border-transparent rounded-[30px]`}
                    method="post"
                    >
                        <div className={`${styles.imgcontainer} flex justify-center relative mt-[24px] mb-[12px]`}>
                            <img src={assets.logo} alt="logo" className={styles.avatar} />
                        </div>

                        <div className={`${styles["input-control"]} pt-[15px] pr-[30px] pb-[30px] pl-[30px]`}>
                            <div className="flex flex-wrap mx-[-10px]">
                            <div className="sm:w-[50%] w-full px-[10px]">
                                <input
                                type="text"
                                placeholder="Enter Username"
                                className="focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                                name="uname"
                                required
                                />
                            </div>

                            <div className="sm:w-[50%] w-full px-[10px]">
                                <input
                                type="email"
                                placeholder="Enter Email"
                                className="focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                                name="email"
                                required
                                />
                            </div>

                            <div className='w-full px-[10px]'>
                                <select 
                                className='w-full focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]'
                                >
                                    <option className='text-[#666]' hidden>-- Select Your University --</option>
                                    {lebaneseUniversities.map((uni, index)=>(
                                        <option key={index} value={uni} className='text-[#666]'>
                                            {uni}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='px-[10px] sm:w-[50%] w-full'>
                                <select 
                                className='w-full focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]'>
                                    <option className='text-[#666]' hidden>Gender</option>
                                    <option value="" className='text-[#666]'>Male</option>
                                    <option value="" className='text-[#666]'>Female</option>
                                </select>
                            </div>

                            <div className='px-[10px] sm:w-[50%] w-full'>
                                <select 
                                className='w-full focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]'>
                                    <option className='text-[#666]' hidden>Academic Year</option>
                                    <option value="" className='text-[#666]'>1st year</option>
                                    <option value="" className='text-[#666]'>2nd year</option>
                                    <option value="" className='text-[#666]'>3rd year</option>
                                    <option value="" className='text-[#666]'>3+ years</option>
                                </select>
                            </div>

                            <div className="sm:w-[50%] w-full px-[10px]">
                                <input
                                type="password"
                                placeholder="Enter Password"
                                className="focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                                name="password"
                                required
                                />
                            </div>

                            <div className="sm:w-[50%] w-full px-[10px]">
                                <span className={`${styles["password-field-show"]} relative`}>
                                <input
                                    className={`${styles["password-field"]} focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]`}
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="Re-enter Password"
                                    name="passwordConfirm"
                                    required
                                />
                                <span
                                    onClick={togglePass}
                                    className={`fa fa-fw ${showPass ? "fa-eye-slash" : "fa-eye"} cursor-pointer absolute top-[3px] right-[10px] z-[2] text-[#868686]`}
                                ></span>
                                </span>
                            </div>
                            </div>

                            <label
                            className={`${styles["label-container"]} relative inline-block pl-[30px] my-[12px] text-[14px] text-[#868686] leading-[25px]`}
                            >
                                I agree with{" "}
                                <a href="#" className="text-[#5076db] font-semibold underline decoration-1">
                                    privacy policy
                                </a>
                                <input type="checkbox" />
                                <span
                                    className={`${styles.checkmark} absolute top-[2px] left-[2px] h-[20px] w-[20px] bg-[#fff] outline-[2px] outline-solid outline-transparent border-[2px] border-solid border-[#cccccc] rounded-[10px]`}>
                                    </span>
                            </label>

                            <Button text="Sign up"/>

                            <div className={`${styles["division-lines"]} w-full relative block`}>
                                <span className="w-[30%] h-[1px] bg-[#e0e0e0] absolute top-[8px] left-0 m-auto"></span>
                                <p className="text-center sm:w-[40%] w-[50%] my-[15px] mx-auto uppercase text-[12px] font-semibold text-[#aaa] relative z-[2]">
                                    or signup with
                                </p>
                                <span className="w-[30%] h-[1px] bg-[#e0e0e0] absolute top-[8px] right-0 m-auto"></span>
                            </div>

                            <div className={`${styles["login-with-btns"]} text-center`}>
                                <div className="mb-[5px]">
                                    <button
                                    type="button"
                                    className={`${styles.google} cursor-pointer w-[35px] h-[35px] hover:border-[#db4437] transition-all duration-[0.4s] ease-in-out my-[8px] mr-[5px] inline-block items-center justify-center border-[2px] outline-[1px] border-solid outline-solid border-[#c3c3c3] outline-transparent rounded-[30px] bg-transparent`}
                                    >
                                    <i className="fab fa-google text-[14px] text-[#c3c3c3] transition-all duration-[0.4s] ease-in-out"></i>
                                    </button>
                                </div>

                                <span className="mt-[10px] block text-[#868686] text-[14px]">
                                    Already have an account?
                                    <Link to="/login" className='duration-[0.3s] hover:text-[#444] ease-in-out font-semibold text-[#5076db]'> Login</Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default Signup
