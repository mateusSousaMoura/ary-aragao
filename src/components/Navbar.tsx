import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/site.config'

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__logo">{siteConfig.personal.name}</div>
      <div className="navbar__menu">
        <a href="#about" className="navbar__link">Sobre</a>
        <a href="#portfolio-title" className="navbar__link">Portfólio</a>
        <a href="#contact" className="navbar__link">Contato</a>
      </div>
    </motion.nav>
  )
}

export default Navbar

