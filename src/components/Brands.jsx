import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { siteConfig } from '../config/site.config'
// Importar imagens diretamente
import brandPng from '/brand.png'

const Brands = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 80px',
    backgroundColor: siteConfig.colors.background.primary,
  }

  const contentStyle = {
    maxWidth: '1200px',
    width: '100%',
  }

  const titleStyle = {
    ...siteConfig.typography.headings.h2Small,
    marginBottom: '80px',
    textAlign: 'center',
    fontWeight: 400,
    fontSize: '26px',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '48px',
  }

  // Estilos responsivos usando CSS customizado
  const responsiveGridStyle = `
    .brands-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 48px;
    }
    
    @media (max-width: 1024px) {
      .brands-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
      }
    }
    
    @media (max-width: 768px) {
      .brands-grid {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 32px;
      }
    }
  `

  const brandItemStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: '48px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
  }

  const brandImageStyle = {
    maxWidth: '100%',
    maxHeight: '80px',
    width: 'auto',
    height: 'auto',
    filter: 'grayscale(100%)',
  }

  const brandsData = [
    { id: 1, name: 'Brand 1', image: brandPng },
    { id: 2, name: 'Brand 2', image: brandPng },
    { id: 3, name: 'Brand 3', image: brandPng },
    { id: 4, name: 'Brand 4', image: brandPng },
    { id: 5, name: 'Brand 5', image: brandPng },
    { id: 6, name: 'Brand 6', image: brandPng },
  ]

  return (
    <section id="brands" style={containerStyle} ref={ref}>
      <style>{responsiveGridStyle}</style>
      <motion.div
        style={{ ...contentStyle, opacity, y }}
      >
        <h2 style={titleStyle}>Brands I have worked with</h2>
        <div className="brands-grid">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.id}
              style={brandItemStyle}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                style={brandImageStyle}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Brands
