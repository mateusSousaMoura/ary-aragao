import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Turning ideas into Motion
      </motion.h1>

      <motion.div
        className="hero__bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="hero__text">ARY ARAGÃO - MOTION DESIGNER</span>
        
        <div className="hero__scroll">
          <motion.span
            className="hero__arrow"
            animate={{ y: [0, 2, 5, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.span>
          <span className="hero__text">SCROLL TO EXPLORE</span>
        </div>
        
        <motion.button
          className="hero__cta"
          whileHover={{ 
            color: '#FF2E63',
          }}
          whileTap={{ scale: 0.95 }}
        >
          WORK WITH ME
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero

