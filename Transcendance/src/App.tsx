import './App.css'
import './index.css'
import NavBar from './components/NavBar/NavBar.tsx'
import LandingPage from './components/LandingPage/LandingPage.tsx'

function App() {

  return (
    <div className='max-w-7xl mx-auto px-4 text-sm' >
      <NavBar />
      <LandingPage/>
    </div>
  )
}

export default App
