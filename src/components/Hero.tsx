import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const [metrics, setMetrics] = useState([
    { value: '2.4M', label: 'Impressions' },
    { value: '156K', label: 'Clicks' },
    { value: '$89.2K', label: 'Revenue' }
  ]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const newMetrics = [...prev];
        newMetrics.forEach((metric, index) => {
          if (index === 0) {
            metric.value = `${(Math.random() * 2 + 1).toFixed(1)}M`;
          } else if (index === 1) {
            metric.value = `${Math.floor(Math.random() * 200 + 100)}K`;
          } else {
            metric.value = `$${(Math.random() * 50 + 50).toFixed(1)}K`;
          }
        });
        return newMetrics;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="particles"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="gradient-text">AdPulse</span>
            <br />
            Advanced Ad Analytics
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Transform your advertising data into actionable insights. 
            Upload your CSV files and get detailed reports instantly.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-upload"></i>
              Upload CSV
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-play"></i>
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          style={{ y, rotate }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className="floating-card"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="card-header">
              <i className="fas fa-chart-bar"></i>
              <span>Analytics Dashboard</span>
            </div>
            <div className="card-content">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  className="metric"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  <motion.span 
                    className="metric-value"
                    key={metric.value}
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {metric.value}
                  </motion.span>
                  <span className="metric-label">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-hero);
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 153, 204, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(102, 230, 255, 0.05) 0%, transparent 50%);
          animation: particleFloat 20s ease-in-out infinite;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.05) 50%, transparent 70%);
          animation: gradientMove 15s ease-in-out infinite;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .floating-card {
          background: rgba(26, 26, 26, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: var(--border-radius);
          padding: 30px;
          box-shadow: var(--shadow-secondary);
          position: relative;
        }

        .floating-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: var(--gradient-primary);
          border-radius: var(--border-radius);
          z-index: -1;
          opacity: 0.3;
          animation: borderGlow 3s ease-in-out infinite;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--primary-color);
          font-weight: 600;
        }

        .card-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .metric {
          text-align: center;
        }

        .metric-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 5px;
        }

        .metric-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .card-content {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
