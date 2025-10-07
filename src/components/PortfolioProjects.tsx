import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import PortfolioItem from './PortfolioItem'
import ProjectModal from './ProjectModal'
import { Project, PortfolioProjectsProps } from '../types'
// Importar imagens diretamente
import hulkGif from '/hulk.gif'
import yPng from '/y.png'
import brandPng from '/brand.png'

const PortfolioProjects: React.FC<PortfolioProjectsProps> = () => {
  const ref = React.useRef<HTMLElement>(null)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const portfolioData: Project[] = [
    // Projeto principal centralizado
    {
      id: 1,
      title: "Channel Showcase - Coluna do Fla",
      tags: ["MOTION", "COMMERCIAL", "ART DIRECTION"],
      image: hulkGif,
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
      image: yPng,
      link: "#",
      gridArea: { column: '2 / 6', row: '4 / 6' },
      rotation: 0,
      type: 'secondary'
    },
    {
      id: 3,
      title: "Motion Promo - BDS",
      tags: ["MOTION", "ANIMATION", "CREATIVE"],
      image: brandPng,
      link: "#",
      gridArea: { column: '7 / 11', row: '4 / 6' },
      rotation: 0,
      type: 'secondary'
    }
  ]

  return (
    <section id="portfolio-projects" className="portfolio-projects" ref={ref}>
      {/* Fundo com blur e gradientes */}
      <motion.div className="portfolio-projects__background" style={{ y: backgroundY }}></motion.div>

      <motion.div className="portfolio-projects__content" style={{ opacity }}>
        {/* Grid sofisticado */}
        <div className="portfolio-projects__grid">
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
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal de projeto */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default PortfolioProjects
