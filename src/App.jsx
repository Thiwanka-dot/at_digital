import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
