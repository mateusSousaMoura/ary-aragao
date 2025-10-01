import { motion } from 'framer-motion'

const Marquee = ({ 
  text, 
  speed = 20, 
  fontSize = '240px', 
  color = '#FFFFFF', 
  opacity = 0.1,
  className = '',
  style = {}
}) => {
  const containerStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    ...style
  }

  const textStyle = {
    fontSize,
    color,
    opacity,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 700,
    fontStyle: 'italic',
  }

  const animation = {
    x: [0, '-50%'],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: speed,
      ease: "linear",
    },
  }

  return (
    <div style={containerStyle} className={className}>
      <motion.div
        style={{
          ...textStyle,
          display: 'inline-block',
          whiteSpace: 'nowrap',
        }}
        animate={animation}
      >
        <span style={{ marginRight: '200px' }}>
          {text}
        </span>
        <span style={{ marginRight: '200px' }}>
          {text}
        </span>
        <span style={{ marginRight: '200px' }}>
          {text}
        </span>
      </motion.div>
    </div>
  )
}

export default Marquee
