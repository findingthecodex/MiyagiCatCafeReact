import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import CafeExperienceSection from './components/CafeExperienceSection'
import Footer from './components/Footer'
import Cats from './pages/Cats'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Story from './pages/Story'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-[72px]">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CafeExperienceSection />
            </>
          } />
          <Route path="/cats" element={<Cats />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App