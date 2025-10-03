import { siteConfig } from './config/site.config'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Brands from './components/Brands'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import WorkingFooter from './components/WorkingFooter'
import CameraFrame from './components/CameraFrame'

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: siteConfig.colors.background.primary }}>
      <CameraFrame />
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Portfolio />
      <Contact />
      <WorkingFooter />
    </div>
  )
}

export default App

