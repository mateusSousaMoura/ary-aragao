import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { siteConfig } from '../config/site.config'
import AnimatedCounter from '../utils/AnimatedCounter'

// Estilos para counter
const counterNumberStyle = {
  fontSize: "80px",
  fontWeight: 600,
  lineHeight: 1.1,
  color: siteConfig.colors.creamyWhite,
  fontFamily: "'Clash Display', sans-serif",
}

const About = () => {
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


  const firstRowStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '24px',
  }

  const secondRowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '24px',
  }

  const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '32px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  }


  const boxDescriptionStyle = {
    ...siteConfig.typography.paragraphs.paragraphS,
    marginBottom: '16px',
    fontWeight: 450,
    fontColor: '#FAF5EA',
  }

  const separatorStyle = {
    height: '1px',
    backgroundColor: '#666666',
    marginBottom: '8px',
    color: '#FAF5EA',
  }

  const counterStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }


  const plusStyle = {
    fontSize: "128px",
    fontWeight: 500,
    lineHeight: 1.1,
    color: '#FF2E63',
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
    <section id="about" style={containerStyle} ref={ref}>
      <motion.div
        style={{ ...contentStyle, opacity, y }}
      >
        <div>
          {/* Primeira row: 2fr 1fr */}
          <div style={firstRowStyle}>
            <div style={boxStyle}>
              <div>
                <p style={boxDescriptionStyle}>{statsData[0].description}</p>
              </div>
              <div style={separatorStyle}></div>
              <div style={counterStyle}>
                <AnimatedCounter 
                  value={parseInt(statsData[0].counter)} 
                  fontStyle={counterNumberStyle}
                  color={siteConfig.colors.creamyWhite}
                  stiffness={300}
                  damping={100}
                />
                <span style={plusStyle}>{statsData[0].plus}</span>
              </div>
            </div>
            <div style={boxStyle}>
              <div>
                <p style={boxDescriptionStyle}>{statsData[1].description}</p>
              </div>
              <div style={separatorStyle}></div>
              <div style={counterStyle}>
                <AnimatedCounter 
                  value={parseInt(statsData[1].counter)} 
                  fontStyle={counterNumberStyle}
                  color={siteConfig.colors.creamyWhite}
                  stiffness={300}
                  damping={100}
                />
                <span style={plusStyle}>{statsData[1].plus}</span>
              </div>
            </div>
          </div>
          
          {/* Segunda row: 1fr 2fr */}
          <div style={secondRowStyle}>
            <div style={boxStyle}>
              <div>
                <p style={boxDescriptionStyle}>{statsData[2].description}</p>
              </div>
              <div style={separatorStyle}></div>
              <div style={counterStyle}>
                <AnimatedCounter 
                  value={parseInt(statsData[2].counter)} 
                  fontStyle={counterNumberStyle}
                  color={siteConfig.colors.creamyWhite}
                  stiffness={300}
                  damping={100}
                />
                <span style={plusStyle}>{statsData[2].plus}</span>
              </div>
            </div>
            <div style={boxStyle}>
              <div>
                <p style={boxDescriptionStyle}>{statsData[3].description}</p>
              </div>
              <div style={separatorStyle}></div>
              <div style={counterStyle}>
                <AnimatedCounter 
                  value={parseInt(statsData[3].counter)} 
                  fontStyle={counterNumberStyle}
                  color={siteConfig.colors.creamyWhite}
                  stiffness={300}
                  damping={100}
                />
                <span style={plusStyle}>{statsData[3].plus}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

