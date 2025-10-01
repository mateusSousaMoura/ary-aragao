import { siteConfig } from '../config/site.config'

const CameraFrame = () => {
  const frameStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1000,
  }

  const cornerStyle = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: `2px solid ${siteConfig.colors.black}`,
  }

  const topLeftStyle = {
    ...cornerStyle,
    top: '20px',
    left: '20px',
    borderRight: 'none',
    borderBottom: 'none',
  }

  const topRightStyle = {
    ...cornerStyle,
    top: '20px',
    right: '20px',
    borderLeft: 'none',
    borderBottom: 'none',
  }

  const bottomLeftStyle = {
    ...cornerStyle,
    bottom: '20px',
    left: '20px',
    borderRight: 'none',
    borderTop: 'none',
  }

  const bottomRightStyle = {
    ...cornerStyle,
    bottom: '20px',
    right: '20px',
    borderLeft: 'none',
    borderTop: 'none',
  }

  return (
    <div style={frameStyle}>
      <div style={topLeftStyle}></div>
      <div style={topRightStyle}></div>
      <div style={bottomLeftStyle}></div>
      <div style={bottomRightStyle}></div>
    </div>
  )
}

export default CameraFrame
