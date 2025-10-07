import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import AnimatedCounter from '../utils/AnimatedCounter'

const About = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  // Estilos para counter
  const counterNumberStyle = {
    fontSize: "80px",
    fontWeight: 600,
    lineHeight: 1.1,
    color: '#FAF5EA',
    fontFamily: "'Clash Display', sans-serif",
  }

  const statsData = [
    {
      id: "styleframes",
      description: "Styleframes Developed",
      counter: "350",
      plus: "+"
    },
    {
      id: "experience",
      description: "Years of Experience",
      counter: "4",
      plus: "+"
    },
    {
      id: "collaborations",
      description: "Clubs & Studios Collaborated",
      counter: "10",
      plus: "+"
    },
    {
      id: "coffee",
      description: "Coffee cups taken",
      counter: "691",
      plus: "+"
    }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about__content"
        style={{ opacity, y }}
      >
        <div>
          {/* Primeira row: 2fr 1fr */}
          <div className="about__grid--first-row">
            <div className="about__box">
              <div>
                <p className="about__description">{statsData[0].description}</p>
              </div>
              <div className="about__separator"></div>
              <div className="about__counter">
                <AnimatedCounter 
                  value={parseInt(statsData[0].counter)} 
                  fontStyle={counterNumberStyle}
                  color='#FAF5EA'
                  stiffness={300}
                  damping={100}
                />
                <span className="about__counter-plus">{statsData[0].plus}</span>
              </div>
            </div>
            <div className="about__box">
              <div>
                <p className="about__description">{statsData[1].description}</p>
              </div>
              <div className="about__separator"></div>
              <div className="about__counter">
                <AnimatedCounter 
                  value={parseInt(statsData[1].counter)} 
                  fontStyle={counterNumberStyle}
                  color='#FAF5EA'
                  stiffness={300}
                  damping={100}
                />
                <span className="about__counter-plus">{statsData[1].plus}</span>
              </div>
            </div>
          </div>
          
          {/* Segunda row: 1fr 2fr */}
          <div className="about__grid--second-row">
            <div className="about__box">
              <div>
                <p className="about__description">{statsData[2].description}</p>
              </div>
              <div className="about__separator"></div>
              <div className="about__counter">
                <AnimatedCounter 
                  value={parseInt(statsData[2].counter)} 
                  fontStyle={counterNumberStyle}
                  color='#FAF5EA'
                  stiffness={300}
                  damping={100}
                />
                <span className="about__counter-plus">{statsData[2].plus}</span>
              </div>
            </div>
            <div className="about__box">
              <div>
                <p className="about__description">{statsData[3].description}</p>
              </div>
              <div className="about__separator"></div>
              <div className="about__counter">
                <AnimatedCounter 
                  value={parseInt(statsData[3].counter)} 
                  fontStyle={counterNumberStyle}
                  color='#FAF5EA'
                  stiffness={300}
                  damping={100}
                />
                <span className="about__counter-plus">{statsData[3].plus}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

