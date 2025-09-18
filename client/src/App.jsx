import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayaut from './pages/SeatLayaut'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
      {!isAdminRoute && <NavBar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Movies' element={<Movies/>} />
        <Route path='/Movies/:id' element={<MovieDetails/>} />
        <Route path='/Movies/:id/:date' element={<SeatLayaut/>} />
        <Route path='/MyBooking' element={<MyBooking/>} />
        <Route path='/Favorite' element={<Favorite/>} />
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
