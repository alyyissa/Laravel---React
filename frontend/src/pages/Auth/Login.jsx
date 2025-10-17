import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import styles from './Auth.module.css';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import Credentials from '../../components/Alerts/Credentials';
import Success from '../../components/Alerts/Success';

const Login = () => {
    const [loading, setLoading] = useState(true);
    const[showPass, setShowPass] = useState(false);

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
    <div
      className="bg-cover bg-no-repeat bg-center h-[90vh] flex justify-center items-center px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16"
      style={{ backgroundImage: `url(${assets.background})` }}
    >
      <div className="flex justify-center items-center flex-col">
        <div className="relative z-[1] max-w-[500px]"> 
          <div className={`${styles["login-page"]}`}>
            <form
              className={`${styles["login-form"]} sm:w-[350px] w-[290px] m-auto bg-[#fff] border-[1px] relative border-solid border-transparent rounded-[30px]`}
            >
              <div className={`${styles.imgcontainer} flex justify-center relative mt-[24px] mb-[12px]`}>
                <img src={assets.logo} alt="Avatar" className={styles.avatar} />
              </div>

              <div className={`${styles["input-control"]} relative pt-[15px] px-[30px] pb-[30px]`}>
                <input  
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  className="focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                  required
                />

                <span className={`${styles["password-field-show"]} relative block mb-2`}>
                  <input
                    type={showPass ? "text": "password"}
                    placeholder="Enter Password"
                    name="password"
                    className={`${styles["password-field"]} transition-all duration-[0.3s] ease-in-out rounded-[5px] focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] inline-block text-[14px] text-[#666] bg-[#f8f8f8] border-b-[2px] border-solid border-[#ccc] w-full py-[12px] px-[20px] my-[8px]`}
                    required
                  />
                  <span
                    onClick={togglePass}
                    className={`fa fa-fw ${showPass ? "fa-eye-slash" : "fa-eye"} absolute top-[23px] right-[10px] z-[2] text-[#868686] cursor-pointer`}
                  ></span>
                </span>
                {/* <Credentials 
                text="Wrong Credentials"
                /> */}
                <label
                  className={`${styles["label-container"]} inline-block relative pl-[30px] my-[12px] cursor-pointer text-[14px] text-[#868686] leading-[25px] transition-all duration-[0.3s] ease-in-out`}
                >
                  Remember me
                  <input type="checkbox" />
                  <span className={`${styles.checkmark} absolute top-[2px] left-[2px] h-[20px] w-[20px] bg-[#fff] outline-[2px] outline-solid outline-transparent border-[2px] border-solid border-[#cccccc] rounded-[10px]`}></span>
                </label>

                <span className={`${styles.psw} float-right pt-[12px]`}>
                  <Link
                    to="/forgetpass"
                    className="forgot-btn text-[13px] text-[#5076db] font-medium transition-all duration-[0.3s] ease-in-out hover:text-[#444]"
                  >
                    Forgot password?
                  </Link>
                </span>

                <Button text="Login"/>

                <div className={`${styles["division-lines"]} w-full relative block`}>
                  <span className="w-[30%] h-[1px] bg-[#e0e0e0] absolute top-[8px] left-0 m-auto"></span>
                  <p className="text-center sm:w-[40%] w-[50%] my-[15px] mx-auto uppercase text-[12px] font-semibold text-[#aaa] relative z-[2]">
                    or login with
                  </p>
                  <span className="w-[30%] h-[1px] bg-[#e0e0e0] absolute top-[8px] right-0 m-auto"></span>
                </div>

                <div className={`${styles["login-with-btns"]} text-center`}>
                  <div>
                    <button
                      type="button"
                      className={`${styles.google} cursor-pointer w-[35px] h-[35px] my-[8px] mr-[5px] border-[1px] border-solid border-[#c3c3c3] hover:text-[#db4437] hover:border-[#db4437] rounded-3xl bg-transparent outline-[1px] outline-solid outline-transparent transition-all duration-[0.4s] ease-in-out`}
                    >
                      <i className="fab fa-google text-[#c3c3c3] text-[14px] transition-all duration-[0.4s] ease-in-out"></i>
                    </button>
                  </div>

                  <span className="mt-[10px] block text-[#868686] text-[14px]">
                    Not a member? 
                    <Link to="/signup" className='duration-[0.3s] hover:text-[#444] ease-in-out font-semibold text-[#5076db]'> Sign up </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
