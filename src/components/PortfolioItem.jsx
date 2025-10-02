import { motion } from 'framer-motion'
import { siteConfig } from '../config/site.config'
import { useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const PortfolioItem = ({ 
  id, 
  title, 
  tags = [], 
  image, 
  link = "#", 
  index = 0,
  gridArea = { column: 'span 4', row: 'span 2' },
  rotation = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const containerStyle = {
    position: 'relative',
    gridColumn: gridArea.column,
    gridRow: gridArea.row,
    height: '100%',
  }

  const contentStyle = {
    margin: '20px',
    height: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  }

  const imageStyle = {
    width: '100%',
    flex: '1',
    minHeight: '250px',
    objectFit: 'cover',
  }

  const infoStyle = {
    background: 'transparent',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '120px',
  }

  const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px',
  }

  const tagStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    color: siteConfig.colors.creamyWhite,
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 500,
    fontFamily: siteConfig.typography.fonts.primary,
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  }

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.2,
    color: siteConfig.colors.creamyWhite,
    fontFamily: siteConfig.typography.fonts.primary,
    marginBottom: '12px',
    letterSpacing: '-0.02em',
  }

  const linkStyle = {
    color: siteConfig.colors.creamyWhite,
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 600,
    fontFamily: siteConfig.typography.fonts.primary,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'gap 0.3s ease',
  }


  return (
    <div style={containerStyle}>
      {/* Borda externa com animação de dentro para fora */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(to right, white 0%, white 30px, transparent 30px, transparent calc(100% - 30px), white calc(100% - 30px), white 100%) top left / 100% 1px no-repeat,
            linear-gradient(to right, white 0%, white 30px, transparent 30px, transparent calc(100% - 30px), white calc(100% - 30px), white 100%) bottom left / 100% 1px no-repeat,
            linear-gradient(to bottom, white 0%, white 30px, transparent 30px, transparent calc(100% - 30px), white calc(100% - 30px), white 100%) top left / 1px 100% no-repeat,
            linear-gradient(to bottom, white 0%, white 30px, transparent 30px, transparent calc(100% - 30px), white calc(100% - 30px), white 100%) top right / 1px 100% no-repeat
          `,
          pointerEvents: 'none',
        }}
        initial={{
          scale: 0.6,
          opacity: 0,
        }}
        animate={{
          scale: isHovered ? 1 : 0.7,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      />
      
      {/* Conteúdo com margin */}
      <div 
        style={contentStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Seção da imagem */}
        <img
          src={image}
          alt={title}
          style={imageStyle}
        />
        
        {/* Seção de informações */}
        <div style={infoStyle}>
          <div style={tagsContainerStyle}>
            {tags.map((tag, tagIdx) => (
              <span 
                key={`${id}-tag-${tag}-${tagIdx}`} 
                style={tagStyle}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 style={titleStyle}>
            {title}
          </h3>
          
          <a 
            href={link} 
            style={linkStyle}
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  index: PropTypes.number,
  gridArea: PropTypes.shape({
    column: PropTypes.string,
    row: PropTypes.string,
  }),
  rotation: PropTypes.number,
}

export default PortfolioItem
