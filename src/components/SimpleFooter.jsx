import { motion } from 'framer-motion'
import { siteConfig } from '../config/site.config'

const SimpleFooter = () => {
  const containerStyle = {
    padding: '80px',
    backgroundColor: siteConfig.colors.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '200px',
  }

  const navStyle = {
    display: 'flex',
    gap: '48px',
    justifyContent: 'center',
  }

  const linkStyle = {
    ...siteConfig.typography.navigation.footerNav,
    fontSize: '24px',
    fontWeight: 600,
    color: siteConfig.colors.creamyWhite,
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s ease',
    padding: '12px 24px',
  }

  return (
    <footer style={containerStyle}>
      <nav style={navStyle}>
        <motion.a
          href="#about"
          style={linkStyle}
          whileHover={{
            color: siteConfig.colors.deepOrange,
            textDecoration: 'underline',
          }}
        >
          Sobre
        </motion.a>
        <motion.a
          href="#portfolio"
          style={linkStyle}
          whileHover={{
            color: siteConfig.colors.deepOrange,
            textDecoration: 'underline',
          }}
        >
          Portfólio
        </motion.a>
        <motion.a
          href="#contact"
          style={linkStyle}
          whileHover={{
            color: siteConfig.colors.deepOrange,
            textDecoration: 'underline',
          }}
        >
          Contato
        </motion.a>
      </nav>
    </footer>
  )
}

export default SimpleFooter
