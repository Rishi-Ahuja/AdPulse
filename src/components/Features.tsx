import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: 'fas fa-brain',
      title: 'AI-Powered Analysis',
      description: 'Our intelligent system automatically understands your data structure and provides deep insights.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Lightning Fast',
      description: 'Get comprehensive reports in seconds, not hours. Process large datasets instantly.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure & Private',
      description: 'Your data never leaves your control. All processing happens locally for maximum security.'
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Visual Reports',
      description: 'Beautiful, interactive charts and graphs that make complex data easy to understand.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Responsive',
      description: 'Access your analytics anywhere, anytime. Fully optimized for all devices.'
    },
    {
      icon: 'fas fa-download',
      title: 'Export Ready',
      description: 'Download reports in multiple formats. Share insights with your team effortlessly.'
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Why Choose AdPulse?</h2>
          <p>Powerful features that make ad analytics simple and effective</p>
        </motion.div>

        <motion.div 
          className="features-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <i className={feature.icon}></i>
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .features {
          padding: 100px 0;
          background: var(--bg-secondary);
          position: relative;
        }

        .features::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 70%);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .feature-card {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: var(--border-radius);
          padding: 40px 30px;
          text-align: center;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
          transition: var(--transition);
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-primary);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--text-primary);
        }

        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
