
import './App.css'
import AboutSection from './sections/AboutSection/AboutSection'
import Blog from './sections/Blog/Blog'
import Calltoaction from './sections/Calltoaction/Calltoaction'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Header from './sections/Header/Header'
import HeroSection from './sections/HeroSection/HeroSection'
import Services from './sections/Services/Services'
import Testimony from './sections/Testimony/Testimony'


function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Services />
      <Testimony />
      <Blog />
      <Calltoaction />
      <Contact />
      <Footer />
    </>
  )
}

export default App
