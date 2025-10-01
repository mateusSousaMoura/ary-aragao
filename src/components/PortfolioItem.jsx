import { motion, useMotionValue, useTransform } from 'framer-motion'
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
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  const itemStyle = {
    background: `
      linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)
    `,
    backdropFilter: 'blur(40px)',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    gridColumn: gridArea.column,
    gridRow: gridArea.row,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: `
      0 4px 20px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05)
    `,
  }

  const imageContainerStyle = {
    width: '100%',
    height: '100%',
    minHeight: '350px',
    position: 'relative',
    overflow: 'hidden',
  }

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      linear-gradient(45deg, 
        rgba(255, 255, 255, 0.1) 0%, 
        rgba(255, 255, 255, 0.05) 50%,
        transparent 100%
      )
    `,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    backdropFilter: 'blur(20px)',
  }

  const infoStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '28px',
    background: `
      linear-gradient(180deg, 
        transparent 0%, 
        rgba(0, 0, 0, 0.8) 40%,
        rgba(0, 0, 0, 0.95) 100%
      )
    `,
    backdropFilter: 'blur(10px)',
    transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
    opacity: isHovered ? 1 : 0.95,
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      style={itemStyle}
      initial={{ 
        opacity: 0, 
        y: 100,
        rotate: rotation + (index % 2 === 0 ? -5 : 5),
        scale: 0.8,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotate: rotation,
        scale: 1,
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
        transition: { 
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1],
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <motion.div 
        style={{ 
          ...imageContainerStyle,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.img
          src={image}
          alt={title}
          style={imageStyle}
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Overlay com efeito de hover */}
        <div 
          className="overlay" 
          style={{
            ...overlayStyle,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span style={{ 
              color: siteConfig.colors.white, 
              fontSize: '20px', 
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>
              View Project
            </span>
          </motion.div>
          
          {/* Ícone animado */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 0 : 180,
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              marginTop: '16px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}
          >
            →
          </motion.div>
        </div>
      </motion.div>
      
      {/* Info com glassmorphism */}
      <div style={infoStyle}>
        <motion.div 
          style={tagsContainerStyle}
          initial={{ x: -20, opacity: 0 }}
          animate={{ 
            x: isHovered ? 0 : -20, 
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {tags.map((tag, tagIdx) => (
            <motion.span 
              key={`${id}-tag-${tag}-${tagIdx}`} 
              style={tagStyle}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.h3 
          style={titleStyle}
          initial={{ y: 10, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 10, 
            opacity: 1,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        
        <motion.a 
          href={link} 
          style={linkStyle}
          whileHover={{ gap: '16px' }}
        >
          View Project →
        </motion.a>
      </div>

      {/* Borda animada sutil no hover */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '20px',
          border: '1px solid transparent',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0,
          pointerEvents: 'none',
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
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
