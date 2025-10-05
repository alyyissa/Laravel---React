import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Router } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
