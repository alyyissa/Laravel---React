import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import ForgetPass from './pages/Auth/ForgetPass'
import NotFound from './pages/Error.jsx/NotFound'
import ContactUs from './pages/ContactUs'

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
      </Routes>
    </div>
  )
}

export default App
