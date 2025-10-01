import { motion } from 'framer-motion'
import { siteConfig } from '../config/site.config'
import SimpleFooterMarquee from './SimpleFooterMarquee'

const WorkingFooter = () => {
  const containerStyle = {
    padding: '280px 80px',
    backgroundColor: siteConfig.colors.black,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
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

  const navContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }

  return (
    <footer style={containerStyle}>
      <SimpleFooterMarquee />
      
      <div style={navContainerStyle}>
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
      </div>
    </footer>
  )
}

export default WorkingFooter
