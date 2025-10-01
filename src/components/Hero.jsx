import { motion } from 'framer-motion'
import { siteConfig } from '../config/site.config'

const Hero = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0 80px',
    position: 'relative',
    backgroundColor: siteConfig.colors.background.primary,
  }
  

  const mainTitleStyle = {
    ...siteConfig.typography.headings.h1,
    marginBottom: '24px',
    marginTop: '120px',
    textAlign: 'left',
    fontSize: '200px',
  }

  const bottomTextStyle = {
    ...siteConfig.typography.paragraphs.paragraphS,
    fontSize: '14px',
    color: siteConfig.colors.gray,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textAlign: 'left',
    WebkitTextStroke: '0.2px',
    WebkitTextStrokeColor: siteConfig.colors.gray,
  }

  const bottomContainerStyle = {
    position: 'absolute',
    bottom: '48px',
    left: '80px',
    right: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }


  const arrowStyle = {
    color: siteConfig.colors.gray,
    fontSize: '20px',
    WebkitTextStroke: '0.2px',
    WebkitTextStrokeColor: siteConfig.colors.gray,
  }

  return (
    <section style={containerStyle}>


      <motion.h1
        style={mainTitleStyle}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Turning ideas into Motion
      </motion.h1>

      <motion.div
        style={bottomContainerStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span style={bottomTextStyle}>ARY ARAGÃO - MOTION DESIGNER</span>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.span
            style={arrowStyle}
            animate={{ y: [0, 2, 5, 2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.span>
          <span style={bottomTextStyle}>SCROLL TO EXPLORE</span>
          
        </div>
        
        <motion.button
          style={{
            ...bottomTextStyle,
            padding: '8px 16px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
          }}
          whileHover={{ 
            color: siteConfig.colors.deepOrange,
            WebkitTextStrokeColor: siteConfig.colors.deepOrange,
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

