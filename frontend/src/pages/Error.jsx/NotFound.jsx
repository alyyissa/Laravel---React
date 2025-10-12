import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"
import styles from "./NotFound.module.css"
import { useState, useEffect } from "react"
import Loading from "../../components/Loading/Loading"
const NotFound = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        const timer = setTimeout(() =>{
            setLoading(false)
        }, 500);
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <Loading />;
  return (
    <div className={`${styles["page-section"]} bg-cover bg-no-repeat bg-center h-[90vh]`}
    style={{backgroundImage: `url(${assets.background})`}}
    >
      <div className="w-full px-[16px]">
        <div className={`${styles["content-detail"]} h-screen flex justify-center items-center flex-col`} >
            <h1 class={`${styles["global-title"]} block text-[#5bc86d] md:text-[150px] leading-[1.2] mb-[8px] md:font-extrabold min-[481px]:text-[120px] min-[481px]:font-bold text-[80px] font-semibold`}>
                <span>4</span><span>0</span><span>4</span>
            </h1>
            <h4 class="block text-[#5076db] text-center md:text-[30px] leading-[1.2] md:font-semibold min-[481px]:text-[25px] text-[22px] font-medium mb-[15px]">Oops!</h4>
            <p class="block text-center text-[#5076db] mb-[16px] md:text-[16px] text-[14px]">
                Sorry Bad Request, <br />The HTTP request that was sent to the server has invalid syntax.
            </p>
            <div class="mt-[16px]">
                <Link to="/" class="py-[8px] px-[15px] text-[#5076db] border-[1px] leading-[38px] border-solid border-[#5076db] text-[14px] rounded-[30px] hover:text-[#fff] hover:bg-[#5076db]">
                    Back to Home
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
