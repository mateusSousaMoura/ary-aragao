import { siteConfig } from '../config/site.config'

const SimpleFooterMarquee = () => {
  const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: 'translateY(-50%)',
    zIndex: 1,
    opacity: 0.3,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }

  const textStyle = {
    fontSize: '240px',
    color: '#FFFFFF',
    opacity: 0.3,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 700,
    fontStyle: 'italic',
    animation: 'scroll 20s linear infinite',
  }

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        {siteConfig.personal.fullName} • {siteConfig.personal.fullName} • {siteConfig.personal.fullName}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  )
}

export default SimpleFooterMarquee
