import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
// import Movies from './pages/Movies';
// import AboutUs from './pages/AboutUs';
// import NotFound from './pages/NotFound';
// import MovieDetails from './pages/MovieDetails';
// import Register from './pages/Register';
// import FavMovies from './pages/FavMovies';
import LanguageContext from './context/langContext';
import { useSelector } from "react-redux";
import React, { Suspense } from "react";

const Movies = React.lazy(() => import("./pages/Movies"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const  NotFound= React.lazy(() => import("./pages/NotFound"));
const  MovieDetails= React.lazy(() => import("./pages/MovieDetails"));
const  Register= React.lazy(() => import("./pages/Register"));
const Setting = React.lazy(()=>import("./pages/Setting"))
const  FavMovies= React.lazy(() => import("./pages/FavMovies"));
function App() {
  const [count, setCount] = useState(0)
  const [lang, setLang] = useState("en");
//  const language = useSelector((state) => state.language.currentLanguage);
  return (
    
    <>
     <BrowserRouter>
     <LanguageContext.Provider value={{ lang, setLang }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "text-right" : "text-left"}/>
     <Header/>
     <Suspense fallback={<div className="loader">Loading...</div>}>
     <Routes>
         <Route path="/" element={<Movies/>} />  
         <Route path='/movie_details/:id' element={<MovieDetails/>}/>   
         <Route path="/about-us" element={<AboutUs />} />  
         <Route path='/fav_movies' element={<FavMovies/>}/>
         <Route path='/register' element={<Register/>} />
         <Route path='/setting' element={<Setting/>}/>
         <Route path='*' element={<NotFound/>}/>       
     </Routes>
     </Suspense>
     </LanguageContext.Provider>
   </BrowserRouter>
    </>
  );
}

export default App
