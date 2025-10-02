import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '../config/site.config'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '24px 80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    transition: 'all 0.3s ease',
    zIndex: 1000,
  }

  const logoStyle = {
    ...siteConfig.typography.body.body2,
    color: siteConfig.colors.creamyWhite,
    fontWeight: 700,
  }

  const menuStyle = {
    display: 'flex',
    gap: '48px',
    alignItems: 'center',
  }

  const linkStyle = {
    ...siteConfig.typography.navigation.navMenu,
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  }

  return (
    <motion.nav
      style={navStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={logoStyle}>{siteConfig.personal.name}</div>
      <div style={menuStyle}>
        <a href="#about" style={linkStyle}>Sobre</a>
        <a href="#portfolio-title" style={linkStyle}>Portfólio</a>
        <a href="#contact" style={linkStyle}>Contato</a>
      </div>
    </motion.nav>
  )
}

export default Navbar

