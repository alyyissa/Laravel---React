import { assets } from "../assets/assets"
import Button from "../components/Button/Button"
const ContactUs = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen"
    style={{backgroundImage: `url(${assets.background})`}}
    >
      <div className="px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16 ">
        <div className="flex justify-center items-center flex-col  z-[1] h-[80vh]">
            <h1 className="mb-15 ">Contact Us </h1>
            <form className="rounded-[30px] shadow-2xl  lg:w-[60%] w-[70%] items-center bg-[#fff] py-10 ">
              <div className="flex justify-center relative mb-10 mt-5">
                <img src="assets/images/logo.png" alt="Avatar" />
              </div>
                <div className="flex flex-col md:flex-row justify-between mx-5 md:mx-20">
                    <div className=" md:w-[40%] w-[100%]">
                        <label className="text-coprimary font-semibold">Name</label>
                        <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        className="relative focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                        required
                        />
                    </div>
                    <div className=" md:w-[40%] w-[100%]">
                        <label className="text-coprimary font-semibold">Email</label>
                        <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        className="relative focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                        required
                        />
                    </div>    
                </div>
                <div className="mx-5 md:mx-20 my-5">
                    <label className="text-coprimary font-semibold ">Message</label>
                    <textarea className="w-full mt-2 relative focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]" 
                    name="message" id="" 
                    placeholder="Send Us Your Problem or Feedback etc..."/>
                </div>
                <Button text="Send"/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
