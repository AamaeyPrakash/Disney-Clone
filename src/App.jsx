import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'
import ProductionHouse from './Components/ProductionHouse.jsx'
import GenreMovieList from './Components/GenreMovieList.jsx'

function App() {

  return (
    <div className>
      <Header />
      
      <Slider />

      <ProductionHouse/>

      <GenreMovieList/>
    </div>
  )
}

export default App
