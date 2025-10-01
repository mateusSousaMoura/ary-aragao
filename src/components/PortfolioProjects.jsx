import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PortfolioItem from './PortfolioItem'

const PortfolioProjects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const containerStyle = {
    minHeight: '100vh',
    padding: '120px 60px 120px',
    backgroundColor: 'transparent',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const backgroundBlurStyle = {
    position: 'absolute',
    top: '-200px',
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
      linear-gradient(180deg, rgba(10, 10, 10, 0.1) 0%, rgba(10, 10, 10, 0.3) 100%)
    `,
    backdropFilter: 'blur(80px)',
    zIndex: 1,
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 3,
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  }

  // Layout sofisticado e minimalista
  const sophisticatedGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    gap: '80px',
    width: '100%',
    padding: '0 60px',
    justifyItems: 'center',
    alignItems: 'center',
    minHeight: '70vh',
  }

  const portfolioData = [
    // Projeto principal centralizado
    {
      id: 1,
      title: "Channel Showcase - Coluna do Fla",
      tags: ["MOTION", "COMMERCIAL", "ART DIRECTION"],
      image: "/hulk.gif",
      link: "#",
      gridArea: { column: '4 / 9', row: '1 / 3' },
      rotation: 0,
      type: 'featured'
    },
    // Projetos secundários menores
    {
      id: 2,
      title: "Sports Package - Atlético Piauiense 2024", 
      tags: ["MOTION", "BRANDING", "DESIGN"],
      image: "/hulk.gif",
      link: "#",
      gridArea: { column: '2 / 6', row: '4 / 6' },
      rotation: 0,
      type: 'secondary'
    },
    {
      id: 3,
      title: "Motion Promo - BDS",
      tags: ["MOTION", "ANIMATION", "CREATIVE"],
      image: "/hulk.gif",
      link: "#",
      gridArea: { column: '7 / 11', row: '4 / 6' },
      rotation: 0,
      type: 'secondary'
    }
  ]


  return (
    <section id="portfolio-projects" style={containerStyle} ref={ref}>
      {/* Fundo com blur e gradientes */}
      <motion.div style={{ ...backgroundBlurStyle, y: backgroundY }}></motion.div>

      <motion.div style={{ ...contentStyle, opacity }}>
        {/* Grid sofisticado */}
        <div style={sophisticatedGridStyle}>
          {portfolioData.map((project, index) => (
            <PortfolioItem
              key={project.id}
              id={project.id}
              title={project.title}
              tags={project.tags}
              image={project.image}
              link={project.link}
              index={index}
              gridArea={project.gridArea}
              rotation={project.rotation}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default PortfolioProjects
