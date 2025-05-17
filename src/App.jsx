// import { Button } from "@/components/ui/button"
import './App.css'
import MainPage from "./pages/MainPage"
import LandingPage from './pages/LandingPage'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop'
import Register from './pages/Register'
import About from './pages/About'
import MainPageContact from './pages/MainPageContact'
import Event2 from './pages/event2/Event2'
import Event3 from './pages/event3/Event3'
import Event4 from './pages/event4/Event4'
import Event5 from './pages/event5/Event5'
import Event6 from './pages/event6/Event6'
import Registration from './pages/event4/Registration'
import Register5 from './pages/event5/Register5'
import ContactForm from './database/ContactForm'
import Payment from './payment/Payment'
import AdminDashboard from './admin/AdminDashboard'
import PrivateRoute from './admin/PrivateRoute'

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
        <Route path='/event2' element={<Event2/>} />
        <Route path='/event3' element={<Event3/>} />
        <Route path='/event4' element={<Event4/>} />
        <Route path='/event5' element={<Event5/>} />
        <Route path='/event6' element={<Event6/>} />
        <Route path='/register4' element={<Registration/>} />
        <Route path='/register5' element={<Register5/>} />
        <Route path='*' element={<LandingPage/>} />
        <Route path='/contactform' element={<ContactForm/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <AdminDashboard />
                        </PrivateRoute>
                    }
                />
      </Routes>
     </HashRouter>
    </>
  )
}

export default App
