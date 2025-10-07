import { motion } from 'framer-motion'
import React from 'react'
import { PortfolioItemProps } from '../types'

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  id, 
  title, 
  tags = [], 
  image, 
  link = "#", 
  gridArea = { column: 'span 4', row: 'span 2' },
  rotation = 0,
  onProjectClick,
}) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const containerStyle = {
    gridColumn: gridArea.column,
    gridRow: gridArea.row,
  }

  return (
    <div className="portfolio-item" style={containerStyle}>
      {/* Borda externa com animação de dentro para fora */}
      <motion.div
        className="portfolio-item__border"
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
        className="portfolio-item__content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onProjectClick?.({
          id,
          title,
          tags,
          image,
          link,
          gridArea,
          rotation,
          type: 'featured'
        })}
      >
        {/* Seção da imagem */}
        <img
          src={image}
          alt={title}
          className="portfolio-item__image"
        />
        
        {/* Seção de informações */}
        <div className="portfolio-item__info">
          <div className="portfolio-item__tags">
            {tags.map((tag, tagIdx) => (
              <span 
                key={`${id}-tag-${tag}-${tagIdx}`} 
                className="portfolio-item__tag"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="portfolio-item__title">
            {title}
          </h3>
          
          <a 
            href={link} 
            className="portfolio-item__link"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
