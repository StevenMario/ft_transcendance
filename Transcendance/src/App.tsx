import './App.css'
import './index.css'
import NavBar from './components/LandingPage/NavBar.tsx'
import HeroSection from './components/LandingPage/HeroSection/HeroSection.tsx'

function App() {

  return (
    <div className='max-w-7xl mx-auto px-4 text-sm' >
      <NavBar />
      <HeroSection/>
    </div>
  )
}

export default App
