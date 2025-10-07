// import { motion } from 'framer-motion'
import { siteConfig } from '../config/site.config'
import FooterMarquee from './FooterMarquee'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__nav-container">
        <nav className="footer__nav">
          <a href="#about" className="footer__link">Sobre</a>
          <a href="#portfolio-title" className="footer__link">Portfólio</a>
          <a href="#contact" className="footer__link">Contato</a>
        </nav>
      </div>
      <FooterMarquee />
    </footer>
  )
}

export default Footer

