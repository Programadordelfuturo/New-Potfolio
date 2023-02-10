import './App.css'
import { HashRouter, Route, Routes} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import LoadingScreen from './components/LoadingScreen'
import { useDispatch, useSelector } from 'react-redux'
import { upLoadingThunk } from './store/slices/isLoading.slice'
import { useEffect, Suspense, lazy } from 'react'

function App() {

  const isLoading = useSelector(state => state.isLoading);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(upLoadingThunk())
  },[])

  return (
    <HashRouter>
      <Navbar />
      {isLoading && <LoadingScreen/>}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/aboutme' element={<Aboutme/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
