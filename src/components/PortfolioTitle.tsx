import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

const PortfolioTitle = () => {
  const ref = React.useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Transformações reativas ao scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  return (
    <section id="portfolio-title" className="portfolio-title" ref={ref}>
      {/* Título com animação de baixo para cima */}
      <motion.h2 
        className="portfolio-title__heading"
        style={{ opacity, y }}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.3,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Some Works...
      </motion.h2>
    </section>
  )
}

export default PortfolioTitle
