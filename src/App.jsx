import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  

  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
