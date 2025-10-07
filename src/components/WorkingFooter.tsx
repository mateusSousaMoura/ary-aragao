import { motion } from 'framer-motion'
import SimpleFooterMarquee from './SimpleFooterMarquee'

const WorkingFooter = () => {
  return (
    <footer className="footer">
      <SimpleFooterMarquee />
      
      <div className="footer__nav-container">
        <nav className="footer__nav">
          <motion.a
            href="#about"
            className="footer__link"
            whileHover={{
              color: '#FF2E63',
              textDecoration: 'underline',
            }}
          >
            Sobre
          </motion.a>
          <motion.a
            href="#portfolio-title"
            className="footer__link"
            whileHover={{
              color: '#FF2E63',
              textDecoration: 'underline',
            }}
          >
            Portfólio
          </motion.a>
          <motion.a
            href="#contact"
            className="footer__link"
            whileHover={{
              color: '#FF2E63',
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
