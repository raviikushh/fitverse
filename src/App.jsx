// import { Button } from "@/components/ui/button"
import './App.css'
import MainPage from "./pages/MainPage"
import LandingPage from './pages/LandingPage'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop'
import Register from './pages/Register'
import About from './pages/About'
import MainPageContact from './pages/MainPageContact'

function App() {

  return (
    <>
     <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='event' element={<LandingPage/>} />
        <Route path='register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<MainPageContact/>} />
      </Routes>
     </HashRouter>
    </>
  )
}

export default App
