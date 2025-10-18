import React from 'react'

const Profile = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center h-[90vh] flex justify-center items-center px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16"
    style={{ backgroundImage: `url(${assets.background})` }}
    >
      <div>
        <div className="relative flex justify-center items-center flex-col">
            <form className="rounded-[30px] shadow-2xl  lg:w-[715px] w-[350px] items-center bg-[#fff] py-2">
              <div className="flex justify-center relative mb-10 mt-5">
                <img src={assets.logo} alt="Avatar" />
              </div>
                <div className="flex flex-col md:flex-row justify-between mx-5 md:mx-10">
                    <div className=" md:w-[45%] w-[100%]">
                        <label className="text-coprimary font-semibold">Name</label>
                        <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        className="relative focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] w-full inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]"
                        required
                        />
                    </div>
                    <div className=" md:w-[45%] w-[100%]">
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
                <div className="mx-5 md:mx-10 mt-5">
                    <label className="text-coprimary font-semibold ">Message</label>
                    <textarea className="resize-none h-[100px] w-full mt-2 relative focus:rounded-[5px] focus:border-b-[2px] focus:border-solid focus:border-[#5076db] focus:outline-[0] inline-block transition-all duration-[0.3s] ease-in-out rounded-[5px] border-b-[2px] text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-[12px] px-[20px] my-[8px]" 
                    name="message" id="" 
                    placeholder="Send Us Your Problem or Feedback etc..."/>
                </div>
                {/* <div className="flex items-center justify-center flex-col">
                  <Credentials text="Try Again later"/>
                </div> */}
                
                <Button text="Send"/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
