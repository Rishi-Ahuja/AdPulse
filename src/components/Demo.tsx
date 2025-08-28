import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Demo: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const demoFeatures = [
    'Automatic column recognition',
    'Real-time data processing',
    'Interactive visualizations',
    'Export-ready reports'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="demo" className="demo">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>See AdPulse in Action</h2>
          <p>Watch how easy it is to get insights from your ad data</p>
        </motion.div>

        <motion.div 
          className="demo-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="demo-video"
            variants={itemVariants}
          >
            <motion.div 
              className="video-placeholder"
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsModalOpen(true)}
            >
              <motion.i 
                className="fas fa-play-circle"
                whileHover={{ scale: 1.1, color: 'var(--accent-color)' }}
                transition={{ duration: 0.3 }}
              />
              <h3>Interactive Demo</h3>
              <p>Upload your CSV and see real-time analysis</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="demo-features"
            variants={itemVariants}
          >
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="demo-feature"
                variants={itemVariants}
                whileHover={{ x: 10, borderColor: 'var(--primary-color)' }}
              >
                <i className="fas fa-check-circle"></i>
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>AdPulse Demo</h3>
                <button 
                  className="close-modal"
                  onClick={() => setIsModalOpen(false)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="demo-placeholder">
                  <i className="fas fa-chart-line"></i>
                  <h4>Interactive Demo Coming Soon</h4>
                  <p>Experience the full power of AdPulse analytics</p>
                  <motion.button 
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Early Access
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .demo {
          padding: 100px 0;
          background: var(--bg-primary);
        }

        .demo-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .demo-video {
          position: relative;
        }

        .video-placeholder {
          background: rgba(26, 26, 26, 0.8);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(0, 212, 255, 0.2);
          border-radius: var(--border-radius);
          padding: 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .video-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.05) 50%, transparent 70%);
          animation: gradientMove 10s ease-in-out infinite;
        }

        .video-placeholder i {
          font-size: 4rem;
          color: var(--primary-color);
          margin-bottom: 20px;
          cursor: pointer;
          transition: var(--transition);
          position: relative;
          z-index: 2;
        }

        .video-placeholder h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text-primary);
          position: relative;
          z-index: 2;
        }

        .video-placeholder p {
          color: var(--text-secondary);
          position: relative;
          z-index: 2;
        }

        .demo-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .demo-feature {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: rgba(26, 26, 26, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: var(--border-radius);
          transition: var(--transition);
        }

        .demo-feature i {
          color: var(--primary-color);
          font-size: 1.2rem;
        }

        .demo-feature span {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .demo-placeholder {
          text-align: center;
          padding: 60px 20px;
        }

        .demo-placeholder i {
          font-size: 4rem;
          color: var(--primary-color);
          margin-bottom: 20px;
        }

        .demo-placeholder h4 {
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .demo-placeholder p {
          color: var(--text-secondary);
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .demo-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Demo;
