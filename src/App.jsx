import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Link, Route, Routes} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'

function App() {

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
