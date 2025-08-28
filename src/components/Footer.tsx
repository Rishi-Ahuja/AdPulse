import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Platforms', href: '#platforms' },
        { name: 'Demo', href: '#demo' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' }
      ]
    },
    {
      title: 'Connect',
      social: true
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-linkedin', href: '#' },
    { icon: 'fab fa-github', href: '#' },
    { icon: 'fab fa-facebook', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <i className="fas fa-chart-line"></i>
              <span>AdPulse</span>
            </motion.div>
            <p>Advanced ad analytics platform that transforms your data into actionable insights.</p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              {section.social ? (
                <div className="social-links">
                  {socialLinks.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={link.icon}></i>
                    </motion.a>
                  ))}
                </div>
              ) : (
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 AdPulse. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-primary);
          border-top: 1px solid rgba(0, 212, 255, 0.1);
          padding: 60px 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h4 {
          color: var(--primary-color);
          margin-bottom: 20px;
          font-weight: 600;
        }

        .footer-section p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 10px;
        }

        .footer-section ul li a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition);
        }

        .footer-section ul li a:hover {
          color: var(--primary-color);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 15px;
          cursor: pointer;
        }

        .footer-logo i {
          font-size: 28px;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          text-decoration: none;
          transition: var(--transition);
        }

        .social-links a:hover {
          box-shadow: var(--shadow-primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 212, 255, 0.1);
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
