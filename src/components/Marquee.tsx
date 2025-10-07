import { motion } from 'framer-motion'

interface MarqueeProps {
  text: string;
  speed?: number;
  fontSize?: string;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  speed = 20, 
  fontSize = '240px', 
  color = '#FFFFFF', 
  opacity = 0.1,
  className = '',
  style = {}
}) => {
  const animation = {
    x: [0, '-50%'],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: speed,
      ease: "linear",
    },
  }

  const inlineStyle = {
    fontSize,
    color,
    opacity,
    ...style
  }

  return (
    <div className={`marquee ${className}`} style={style}>
      <motion.div
        className="marquee__content"
        style={inlineStyle}
        animate={animation}
      >
        <span className="marquee__text">
          {text}
        </span>
        <span className="marquee__text">
          {text}
        </span>
        <span className="marquee__text">
          {text}
        </span>
      </motion.div>
    </div>
  )
}

export default Marquee
