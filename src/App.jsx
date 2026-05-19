import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import CafeExperienceSection from './components/CafeExperienceSection'
import FeaturedFelinesSection from './components/FeaturedFelinesSection'
import HowItWorksSection from './components/HowItWorksSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-[72px]">
        <HeroSection />
        <CafeExperienceSection />
        {/*<FeaturedFelinesSection />*/}
        {/*<HowItWorksSection />*/}
      </main>
      <Footer />
    </div>
  )
}

export default App
