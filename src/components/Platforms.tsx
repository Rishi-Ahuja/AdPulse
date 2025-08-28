import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Platforms: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const platforms = [
    {
      icon: 'fab fa-facebook',
      name: 'Meta Ads Manager',
      dataPoints: [
        'Impressions, Reach',
        'Clicks, Link Clicks',
        'Spend, Amount Spent',
        'Conversions, Purchases',
        'Conversion Value',
        'Campaign Details'
      ]
    },
    {
      icon: 'fab fa-google',
      name: 'Google Ads',
      dataPoints: [
        'Impressions',
        'Clicks',
        'Cost, Spend',
        'Conversions',
        'Conversion Value',
        'Campaign Details'
      ]
    },
    {
      icon: 'fab fa-linkedin',
      name: 'LinkedIn Campaign Manager',
      dataPoints: [
        'Impressions',
        'Clicks',
        'Spend, Cost',
        'Conversions',
        'Conversion Value',
        'Campaign Details'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="platforms" className="platforms">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Supported Platforms</h2>
          <p>Compatible with all major advertising platforms</p>
        </motion.div>

        <motion.div 
          className="platforms-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="platform-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="platform-icon"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <i className={platform.icon}></i>
              </motion.div>
              <h3>{platform.name}</h3>
              <div className="platform-data">
                <h4>Data Points:</h4>
                <ul>
                  {platform.dataPoints.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .platforms {
          padding: 100px 0;
          background: var(--bg-secondary);
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .platform-card {
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

        .platform-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(0, 212, 255, 0.05) 0%, transparent 70%);
          opacity: 0;
          transition: var(--transition);
        }

        .platform-card:hover::before {
          opacity: 1;
        }

        .platform-card:hover {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-primary);
        }

        .platform-icon {
          width: 100px;
          height: 100px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 3rem;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .platform-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .platform-data h4 {
          color: var(--primary-color);
          margin-bottom: 15px;
          font-weight: 600;
        }

        .platform-data ul {
          list-style: none;
          text-align: left;
        }

        .platform-data li {
          color: var(--text-secondary);
          padding: 5px 0;
          position: relative;
          padding-left: 20px;
        }

        .platform-data li::before {
          content: '•';
          color: var(--primary-color);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .platforms-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Platforms;
