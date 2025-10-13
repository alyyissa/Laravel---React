import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import ForgetPass from './pages/Auth/ForgetPass'
import NotFound from './pages/Error.jsx/NotFound'
import ContactUs from './pages/ContactUs'
import Course from './pages/Course'
import Exam from './pages/Exam'
import CourseDescription from './components/Course/CourseDescription'
import CourseChapters from './components/Course/CourseChapters'
import CourseComments from './components/Course/CourseComments'
import CourseExam from './components/Course/CourseExam'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/forgetpass' element={<ForgetPass />}/>
        <Route path='/error' element={<NotFound />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        {/* Nested For Course */}
          <Route path='/courses/:courseId' element={<Course />}>
            <Route path='' element={<CourseDescription />} />
            <Route path="chapters" element={<CourseChapters />} />
            <Route path="comments" element={<CourseComments />} />
            <Route path='exam' element={<CourseExam />}/>
          </Route>
        <Route path='/exam' element={<Exam />}/>
      </Routes>
    </div>
  )
}

export default App
