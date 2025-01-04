import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Movies from './pages/Movies';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
         <Route path="/" element={<Movies/>} />  
         <Route path='/movie_details/:id' element={<MovieDetails/>}/>   
         <Route path="/about-us" element={<AboutUs />} />  
         <Route path='*' element={<NotFound/>}/>       
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
