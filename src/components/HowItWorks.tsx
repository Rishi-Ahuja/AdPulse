import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      number: '01',
      title: 'Upload Your CSV',
      description: 'Export your data directly from Meta Ads, Google Ads, or LinkedIn Campaign Manager and upload it to AdPulse.',
      icon: 'fas fa-file-csv'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our intelligent system automatically recognizes your data structure and performs comprehensive analysis.',
      icon: 'fas fa-cogs'
    },
    {
      number: '03',
      title: 'Get Insights',
      description: 'Receive detailed reports with actionable insights, performance metrics, and optimization recommendations.',
      icon: 'fas fa-chart-line'
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
    hidden: { opacity: 0, x: -50 },
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
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>How It Works</h2>
          <p>Simple three-step process to transform your ad data</p>
        </motion.div>

        <motion.div 
          className="steps-container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-visual">
                  <i className={step.icon}></i>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .how-it-works {
          padding: 100px 0;
          background: var(--bg-primary);
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 30px;
          background: rgba(26, 26, 26, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: var(--border-radius);
          transition: var(--transition);
          position: relative;
        }

        .step:hover {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-primary);
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .step-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .step-content p {
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .step-visual {
          width: 60px;
          height: 60px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
