import { assets } from "../assets/assets"
import Course from "./Course"
const Exam = ({courseName}) => {
  return (
    <>
        <div className="bg-cover bg-no-repeat bg-center h-[90vh] flex justify-center items-center px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16"
            style={{ backgroundImage: `url(${assets.background})` }}>

        </div>
    </>
  )
}

export default Exam
