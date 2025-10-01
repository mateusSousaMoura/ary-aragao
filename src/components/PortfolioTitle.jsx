import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { siteConfig } from '../config/site.config'

const PortfolioTitle = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Transformações reativas ao scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    backgroundColor: siteConfig.colors.background.primary,
    position: 'relative',
    overflow: 'hidden',
  }



  const titleStyle = {
    color: siteConfig.colors.deepOrange,
    fontSize: '60px',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '0.05em',
    position: 'relative',
    display: 'inline-block',
  }

// teste deploy
  return (
    <section id="portfolio-title" style={containerStyle} ref={ref}>
      {/* Título com animação de baixo para cima */}
      <motion.h2 
        style={{ ...titleStyle, opacity, y }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.3,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Some works...
      </motion.h2>
    </section>
  )
}

export default PortfolioTitle
