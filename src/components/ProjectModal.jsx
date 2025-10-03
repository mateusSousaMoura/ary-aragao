import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              ×
            </button>

            {/* Conteúdo do modal */}
            <div style={{ marginTop: '20px' }}>
              {/* Imagem do projeto */}
              <div style={{ marginBottom: '30px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </div>

              {/* Título */}
              <h2
                style={{
                  color: '#fff',
                  fontSize: '28px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  lineHeight: '1.2',
                }}
              >
                {project.title}
              </h2>

              {/* Tags */}
              <div style={{ marginBottom: '30px' }}>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      marginRight: '10px',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Descrição (placeholder) */}
              <div style={{ marginBottom: '30px' }}>
                <p
                  style={{
                    color: '#ccc',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  Este é um projeto de demonstração. Aqui você pode adicionar uma
                  descrição detalhada do projeto, incluindo tecnologias utilizadas,
                  desafios enfrentados e resultados alcançados.
                </p>
              </div>

              {/* Botões de ação */}
              <div style={{ display: 'flex', gap: '15px' }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f0f0f0'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#fff'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  Ver Projeto
                </a>
                <button
                  onClick={onClose}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
