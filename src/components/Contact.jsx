import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { siteConfig } from '../config/site.config'
import { BsInstagram } from "react-icons/bs";
import { PiLinkedinLogo, PiFacebookLogo } from "react-icons/pi";
import { HiXMark } from 'react-icons/hi2'

const Contact = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const containerStyle = {
    boxSizing: 'border-box',
    flex: 1,
    width: '100%',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '89px 0px 87px 0px',
    backgroundColor: siteConfig.colors.background.contact,
    overflow: 'visible',
    zIndex: 1,
    alignContent: 'center',
    flexWrap: 'nowrap',
    gap: '38px',
    position: 'relative',
    borderRadius: '0px',
  }

  const contentStyle = {
    textAlign: 'center',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '38px',
    padding: '30px',
    position: 'relative',
    background: `
      linear-gradient(to right, black 0%, black 30px, transparent 30px, transparent calc(100% - 30px), black calc(100% - 30px), black 100%) top left / 100% 1px no-repeat,
      linear-gradient(to right, black 0%, black 30px, transparent 30px, transparent calc(100% - 30px), black calc(100% - 30px), black 100%) bottom left / 100% 1px no-repeat,
      linear-gradient(to bottom, black 0%, black 30px, transparent 30px, transparent calc(100% - 30px), black calc(100% - 30px), black 100%) top left / 1px 100% no-repeat,
      linear-gradient(to bottom, black 0%, black 30px, transparent 30px, transparent calc(100% - 30px), black calc(100% - 30px), black 100%) top right / 1px 100% no-repeat
    `,
  }

  const emailStyle = {
    ...siteConfig.typography.headings.h3Small,
    color: siteConfig.colors.mattBlack,
    marginBottom: '0px',
    display: 'block',
    transition: 'transform 0.3s ease',
  }

  const socialContainerStyle = {
    display: 'flex',
    gap: '38px',
    justifyContent: 'center',
    marginTop: '0px',
  }

  const socialLinkStyle = {
    ...siteConfig.typography.navigation.footerNavDark,
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'color 0.15s ease',
    cursor: 'pointer',
  }

  return (
    <section id="contact" style={containerStyle} ref={ref}>
      <motion.div
        style={{ ...contentStyle, scale, opacity }}
      >
        <img 
          src="./y.png" 
          alt="Y Logo" 
          style={{
            width: '200px',
            height: 'auto',
            marginBottom: '0px',
            display: 'block',
            margin: '0 auto'
          }}
        />

        <motion.a
          href={`mailto:${siteConfig.personal.email}`}
          style={emailStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {siteConfig.personal.email}
        </motion.a>

        <div style={socialContainerStyle}>
          <motion.a
            href={siteConfig.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            whileHover={{ color: siteConfig.colors.creamyWhite }}
            whileTap={{ scale: 0.95 }}
          >
            <BsInstagram size={24} />
            <span>Instagram</span>
          </motion.a>
          <motion.a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            whileHover={{ color: siteConfig.colors.creamyWhite }}
            whileTap={{ scale: 0.95 }}
          >
            <PiFacebookLogo size={28} />
            <span>Facebook</span>
          </motion.a>
          <motion.a
            href={siteConfig.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            whileHover={{ color: siteConfig.colors.creamyWhite }}
            whileTap={{ scale: 0.95 }}
          >
            <HiXMark size={28} />
            <span>Twitter</span>
          </motion.a>
          <motion.a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            whileHover={{ color: siteConfig.colors.creamyWhite }}
            whileTap={{ scale: 0.95 }}
          >
            <PiLinkedinLogo size={28} />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

