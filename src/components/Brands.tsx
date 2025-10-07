import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import brandPng from '/brand.png'

const Brands = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const brandsData = [
    { id: 1, name: 'Brand 1', image: brandPng },
    { id: 2, name: 'Brand 2', image: brandPng },
    { id: 3, name: 'Brand 3', image: brandPng },
    { id: 4, name: 'Brand 4', image: brandPng },
    { id: 5, name: 'Brand 5', image: brandPng },
    { id: 6, name: 'Brand 6', image: brandPng },
  ]

  return (
    <section id="brands" className="brands" ref={ref}>
      <motion.div
        className="brands__content"
        style={{ opacity, y }}
      >
        <h2 className="brands__title">Brands I have worked with</h2>
        <div className="brands__grid">
          {brandsData.map((brand, index) => (
            <motion.div
              key={brand.id}
              className="brands__item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="brands__image"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Brands
