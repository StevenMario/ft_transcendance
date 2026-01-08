import './App.css'
import './index.css'
import NavBar from './components/ui/NavBar/NavBar.tsx'
import LandingPage from './components/ui/LandingPage/LandingPage.tsx'

function App() {

  return (
    <div className='max-w-7xl mx-auto px-4 text-sm' >
      <NavBar />
      <LandingPage/>
    </div>
  )
}

export default App
