import styles from "./Auth.module.css";
import { assets } from '../../assets/assets';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const ForgetPass = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 500);
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loading />
  return (
    <div className="bg-cover bg-no-repeat bg-center h-[90vh] flex justify-center items-center px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16"
    style={{ backgroundImage: `url(${assets.background})` }}
    >
      <div className="w-full px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16">
        <div className={`${styles["content-detail"]} flex justify-center items-center flex-col`}>
          <div className={`${styles["hero-container"]} relative z-[1] max-w-[500px]`}>
            <form
            className={`shadow-2xl sm:w-[350px] w-[290px] m-auto bg-[#fff] border-[1px] border-solid border-transparent rounded-[30px]`}
            >
              <div className={`${styles.imgcontainer} flex justify-center relative mt-[24px] mb-[12px]`}>
                <img src={assets.logo} alt="logo" className={styles.avatar} />
              </div>

              <div className={`${styles["input-control"]} relative pt-[15px] pr-[30px] pb-[30px] pl-[30px]`}>
                <p className="text-center text-[#868686] mb-[16px]">
                  Enter your email, we will send a link to reset your password.
                </p>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                  name="email"
                  required
                />

                <div className={`${styles["login-btns"]} text-center`}>
                  <button
                    type="submit"
                    className="bg-[#5076db] text-[14px] transition-all duration-[0.3s] ease-in-out font-semibold rounded-[5px] border-[2px] border-solid border-transparent text-[#fff] py-[8px] px-[15px] my-[8px] cursor-pointer w-[90px] hover:bg-transparent hover:text-[#5076db] hover:border-[#5076db]"
                  >
                    Reset
                  </button>
                </div>

                <div className={`${styles["login-with-btns"]} text-center`}>
                  <span className={`${styles["already-acc"]} mt-[10px] block text-[#868686] text-[14px]`}>
                    Retern to
                    <Link
                      to="/login"
                      className={`${styles["login-btn"]} bg-transparent transition-all duration-[0.3s] hover:text-[#444] ease-in-out font-semibold text-[#5076db] px-[5px]`}
                    >
                      Login
                    </Link>
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

export default ForgetPass
