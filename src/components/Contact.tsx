import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import { siteConfig } from '../config/site.config'
// Importar imagens diretamente
import yPng from '/y.png'
import { BsInstagram } from "react-icons/bs";
import { PiLinkedinLogo, PiFacebookLogo } from "react-icons/pi";
import { HiXMark } from 'react-icons/hi2'

const Contact = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact__content"
        style={{ scale, opacity }}
      >
        <img 
          src={yPng} 
          alt="Y Logo" 
          className="contact__logo"
        />

        <motion.a
          href={`mailto:${siteConfig.personal.email}`}
          className="contact__email"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {siteConfig.personal.email}
        </motion.a>

        <div className="contact__social">
          <motion.a
            href={siteConfig.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            whileHover={{ color: '#FAF5EA' }}
            whileTap={{ scale: 0.95 }}
          >
            <BsInstagram size={24} />
            <span>Instagram</span>
          </motion.a>
          <motion.a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            whileHover={{ color: '#FAF5EA' }}
            whileTap={{ scale: 0.95 }}
          >
            <PiFacebookLogo size={28} />
            <span>Facebook</span>
          </motion.a>
          <motion.a
            href={siteConfig.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            whileHover={{ color: '#FAF5EA' }}
            whileTap={{ scale: 0.95 }}
          >
            <HiXMark size={28} />
            <span>Twitter</span>
          </motion.a>
          <motion.a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            whileHover={{ color: '#FAF5EA' }}
            whileTap={{ scale: 0.95 }}
          >
            <PiLinkedinLogo size={28} />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

