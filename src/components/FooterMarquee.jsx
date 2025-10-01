import Marquee from './Marquee'
import { siteConfig } from '../config/site.config'

const FooterMarquee = ({ 
  text = siteConfig.personal.fullName,
  speed = 25,
  fontSize = "240px",
  color = "#FFFFFF",
  opacity = 0.3
}) => {
  const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: 'translateY(-50%)',
    zIndex: 1,
    opacity: 0.3,
  }

  return (
    <div style={containerStyle}>
      <Marquee 
        text={text}
        speed={speed}
        fontSize={fontSize}
        color={color}
        opacity={opacity}
      />
    </div>
  )
}

export default FooterMarquee
