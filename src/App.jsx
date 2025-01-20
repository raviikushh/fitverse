// import { Button } from "@/components/ui/button"
import './App.css'
import MainPage from "./pages/MainPage"
import LandingPage from './pages/LandingPage'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop'
import Register from './pages/Register'

function App() {

  return (
    <>
     <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='event' element={<LandingPage/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
     </HashRouter>
    </>
  )
}

export default App
