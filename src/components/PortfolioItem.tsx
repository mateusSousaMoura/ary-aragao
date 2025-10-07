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
    <div
      className="portfolio-item"
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Borda externa, agora como irmã do conteúdo */}
      <div
        className={`portfolio-item__border${isHovered ? ' is-hovered' : ''}`}
      />
      {/* Conteúdo sem margin para não empurrar a borda */}
      <div
        className="portfolio-item__content"
        onClick={() =>
          onProjectClick?.({
            id,
            title,
            tags,
            image,
            link,
            gridArea,
            rotation,
            type: 'featured',
          })
        }
      >
        <img
          src={image}
          alt={title}
          className="portfolio-item__image"
        />
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
          <h3 className="portfolio-item__title">{title}</h3>
          <a href={link} className="portfolio-item__link">
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem
