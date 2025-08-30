import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Play,
  Facebook,
  Linkedin,
  Chrome,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  DollarSign,
  Menu,
  X
} from 'lucide-react';
import './App.css';

// Header Navigation Component
const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'how-it-works', 'features', 'platforms', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 150) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Immediately update active section
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header"
    >
      <div className="header-content">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <span className="logo-text">AdPulse</span>
        </motion.div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <button 
                onClick={() => scrollToSection('hero')}
                className={activeSection === 'hero' ? 'active' : ''}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={activeSection === 'how-it-works' ? 'active' : ''}
              >
                How It Works
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('features')}
                className={activeSection === 'features' ? 'active' : ''}
              >
                Features
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('platforms')}
                className={activeSection === 'platforms' ? 'active' : ''}
              >
                Platforms
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={activeSection === 'testimonials' ? 'active' : ''}
              >
                Reviews
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </button>
            </li>

          </ul>
        </nav>

        <motion.button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </motion.header>
  );
};

// Hero Section
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePlatform, setActivePlatform] = useState('meta');

  // Platform-specific data
  const platformData = {
    meta: {
      metrics: [
        { value: '$12,450', label: 'Revenue', change: '+23%', changeType: 'positive', icon: <TrendingUp size={24} /> },
        { value: '2.4%', label: 'CTR', change: '+8%', changeType: 'positive', icon: <Target size={24} /> },
        { value: '$1.85', label: 'CPC', change: '-12%', changeType: 'negative', icon: <DollarSign size={24} /> }
      ],
      chartType: 'bar',
      chartData: [60, 80, 45, 90, 70, 85, 65]
    },
    google: {
      metrics: [
        { value: '$18,750', label: 'Revenue', change: '+31%', changeType: 'positive', icon: <TrendingUp size={24} /> },
        { value: '3.2%', label: 'CTR', change: '+15%', changeType: 'positive', icon: <Target size={24} /> },
        { value: '$2.10', label: 'CPC', change: '-8%', changeType: 'negative', icon: <DollarSign size={24} /> }
      ],
      chartType: 'line',
      chartData: [75, 90, 60, 95, 80, 88, 72]
    },
    linkedin: {
      metrics: [
        { value: '$8,920', label: 'Revenue', change: '+18%', changeType: 'positive', icon: <TrendingUp size={24} /> },
        { value: '1.8%', label: 'CTR', change: '+5%', changeType: 'positive', icon: <Target size={24} /> },
        { value: '$3.45', label: 'CPC', change: '+3%', changeType: 'negative', icon: <DollarSign size={24} /> }
      ],
      chartType: 'radar',
      chartData: [70, 85, 60, 90, 75, 80] // Radar chart data (6 metrics)
    }
  };

  const currentData = platformData[activePlatform];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -1000],
                x: [0, Math.random() * 200 - 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-text"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-badge"
          >
            🚀 AI-Powered Ad Analytics
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-title"
          >
            Transform Your
            <span className="gradient-text"> Ad Data</span>
            <br />
            Into Actionable
            <span className="gradient-text"> Insights</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-subtitle"
          >
            Upload your CSV files from Meta, Google, or LinkedIn ads and get instant, 
            AI-powered analytics with actionable recommendations to boost your ROI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Campaigns Analyzed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$2M+</div>
              <div className="stat-label">Revenue Generated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hero-buttons"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button primary"
            >
              <Upload size={20} />
              Upload CSV & Analyze
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button secondary"
            >
              <Play size={20} />
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="hero-visual"
        >
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <div className="platform-tabs">
                <div 
                  className={`tab ${activePlatform === 'meta' ? 'active' : ''}`}
                  onClick={() => setActivePlatform('meta')}
                >
                  <Facebook size={16} />
                  Meta
                </div>
                <div 
                  className={`tab ${activePlatform === 'google' ? 'active' : ''}`}
                  onClick={() => setActivePlatform('google')}
                >
                  <Chrome size={16} />
                  Google
                </div>
                <div 
                  className={`tab ${activePlatform === 'linkedin' ? 'active' : ''}`}
                  onClick={() => setActivePlatform('linkedin')}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </div>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="metric-cards">
                {currentData.metrics.map((metric, index) => (
                  <motion.div
                    key={`${activePlatform}-${index}`}
                    className="metric-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="metric-icon">
                      {metric.icon}
                    </div>
                    <div className="metric-info">
                      <motion.div
                        key={`${activePlatform}-value-${index}`}
                        className="metric-value"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {metric.value}
                      </motion.div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                    <motion.div
                      key={`${activePlatform}-change-${index}`}
                      className={`metric-change ${metric.changeType}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {metric.change}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <div className="chart-container">
                {currentData.chartType === 'bar' && (
                  <div className="chart-bars">
                    {currentData.chartData.map((height, index) => (
                      <motion.div
                        key={`${activePlatform}-bar-${index}`}
                        className="chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      />
                    ))}
                  </div>
                )}
                
                {currentData.chartType === 'line' && (
                  <div className="chart-line">
                    <svg width="100%" height="100%" viewBox="0 0 300 120">
                      <motion.path
                        key={`${activePlatform}-line`}
                        d={`M 0,${120 - currentData.chartData[0]} ${currentData.chartData.map((value, index) => 
                          `L ${(index + 1) * (300 / (currentData.chartData.length - 1))},${120 - value}`
                        ).join(' ')}`}
                        stroke="#87CEEB"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                      {currentData.chartData.map((value, index) => (
                        <motion.circle
                          key={`${activePlatform}-point-${index}`}
                          cx={(index) * (300 / (currentData.chartData.length - 1))}
                          cy={120 - value}
                          r="4"
                          fill="#87CEEB"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        />
                      ))}
                    </svg>
                  </div>
                )}
                
                {currentData.chartType === 'radar' && (
                  <div className="chart-radar">
                    <motion.svg 
                      width="160" 
                      height="160" 
                      viewBox="0 0 160 160"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <defs>
                        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#4682B4" stopOpacity="0.3"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Grid lines */}
                      {[25, 50, 75, 100].map((radius, index) => (
                        <motion.circle
                          key={`grid-${index}`}
                          cx="80"
                          cy="80"
                          r={radius}
                          fill="none"
                          stroke="rgba(135, 206, 235, 0.2)"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      ))}
                      
                      {/* Axis lines */}
                      {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                        <motion.line
                          key={`axis-${index}`}
                          x1="80"
                          y1="80"
                          x2={80 + 100 * Math.cos((angle - 90) * Math.PI / 180)}
                          y2={80 + 100 * Math.sin((angle - 90) * Math.PI / 180)}
                          stroke="rgba(135, 206, 235, 0.3)"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      ))}
                      
                      {/* Radar outline - connects points after they expand */}
                      <motion.path
                        key={`${activePlatform}-outline`}
                        d={(() => {
                          const points = currentData.chartData.map((value, index) => {
                            const angle = (index * 60 - 90) * Math.PI / 180;
                            const radius = (value / 100) * 100;
                            const x = 80 + radius * Math.cos(angle);
                            const y = 80 + radius * Math.sin(angle);
                            return `${x},${y}`;
                          });
                          return `M ${points.join(' L ')} Z`;
                        })()}
                        fill="none"
                        stroke="#87CEEB"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 2.5 }}
                      />
                      
                      {/* Radar fill - appears after points */}
                      <motion.path
                        key={`${activePlatform}-fill`}
                        d={(() => {
                          const points = currentData.chartData.map((value, index) => {
                            const angle = (index * 60 - 90) * Math.PI / 180;
                            const radius = (value / 100) * 100;
                            const x = 80 + radius * Math.cos(angle);
                            const y = 80 + radius * Math.sin(angle);
                            return `${x},${y}`;
                          });
                          return `M ${points.join(' L ')} Z`;
                        })()}
                        fill="url(#radarGradient)"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 3.7 }}
                      />
                      
                      {/* Data points */}
                      {currentData.chartData.map((value, index) => {
                        const angle = (index * 60 - 90) * Math.PI / 180;
                        const radius = (value / 100) * 100;
                        const x = 80 + radius * Math.cos(angle);
                        const y = 80 + radius * Math.sin(angle);
                        
                        return (
                          <motion.circle
                            key={`${activePlatform}-point-${index}`}
                            cx="80"
                            cy="80"
                            r="4"
                            fill="#87CEEB"
                            stroke="#ffffff"
                            strokeWidth="2"
                            initial={{ scale: 0 }}
                            animate={{ 
                              scale: 1,
                              cx: x,
                              cy: y
                            }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 1.5 + index * 0.15,
                              ease: "easeOut"
                            }}
                          />
                        );
                      })}
                    </motion.svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Data",
      description: "Simply drag and drop your CSV file exported directly from Meta, Google, or LinkedIn ads. Our AI instantly recognizes your data structure.",
      icon: <Upload size={32} />,
      color: "#4F46E5"
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our advanced AI analyzes your campaign performance, identifies patterns, and generates actionable insights in seconds.",
      icon: <BarChart3 size={32} />,
      color: "#06B6D4"
    },
    {
      number: "03",
      title: "Get Insights",
      description: "Receive detailed reports with optimization recommendations, performance trends, and ROI analysis to boost your campaigns.",
      icon: <TrendingUp size={32} />,
      color: "#10B981"
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>How It Works</h2>
        <p>Transform your ad data into actionable insights in three simple steps</p>
      </motion.div>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="step-card"
          >
            <div className="step-number">{step.number}</div>
            <div 
              className="step-icon"
              style={{ backgroundColor: step.color }}
            >
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Get insights in under 30 seconds. No waiting, no delays.",
      color: "#F59E0B"
    },
    {
      icon: <Shield size={32} />,
      title: "100% Secure",
      description: "Your data never leaves your control. Enterprise-grade security.",
      color: "#EF4444"
    },
    {
      icon: <Globe size={32} />,
      title: "Multi-Platform",
      description: "Works with Meta, Google, and LinkedIn ads seamlessly.",
      color: "#8B5CF6"
    },
    {
      icon: <Users size={32} />,
      title: "AI-Powered",
      description: "Advanced machine learning for accurate predictions.",
      color: "#EC4899"
    }
  ];

  return (
    <section id="features" className="features-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>Why Choose AdPulse?</h2>
        <p>Built for modern advertisers who demand results</p>
      </motion.div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="feature-card"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(135, 206, 235, 0.2)"
            }}
          >
            <div 
              className="feature-icon"
              style={{ backgroundColor: feature.color }}
            >
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Platform Support Section
const PlatformSection = () => {
  const platforms = [
    {
      name: "Meta/Facebook Ads",
      icon: <Facebook size={48} />,
      description: "Complete support for Facebook and Instagram advertising data",
      dataPoints: [
        "impressions | reach | impr",
        "clicks | link_clicks",
        "spend | amount_spent",
        "conversions | website_purchases | leads",
        "conversion_value | website_purchase_value",
        "date | day",
        "campaign_name | adset_name | ad_name"
      ]
    },
    {
      name: "Google Ads",
      icon: <Chrome size={48} />,
      description: "Full Google Ads integration with advanced metrics",
      dataPoints: [
        "impressions",
        "clicks",
        "cost | spend",
        "conversions | all_conversions",
        "conversion_value | all_conversion_value",
        "date | day",
        "campaign | campaign_name | ad_group_name"
      ]
    },
    {
      name: "LinkedIn Campaign Manager",
      icon: <Linkedin size={48} />,
      description: "Professional B2B advertising analytics",
      dataPoints: [
        "impressions",
        "clicks",
        "spend | cost_in_local_currency",
        "conversions",
        "total_conversion_value",
        "date",
        "campaign_name"
      ]
    }
  ];

  return (
    <section id="platforms" className="platform-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>Supported Platforms</h2>
        <p>Comprehensive support for all major advertising platforms</p>
      </motion.div>
      
      <div className="platforms-grid">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="platform-card"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(135, 206, 235, 0.15)"
            }}
          >
            <div className="platform-header">
              <div className="platform-icon">
                {platform.icon}
              </div>
              <div>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
              </div>
            </div>
            <div className="data-points">
              <h4>Supported Data Points:</h4>
              <ul>
                {platform.dataPoints.map((point, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content: "AdPulse transformed our ad strategy. We increased our ROI by 340% in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Digital Marketing Manager",
      company: "GrowthLabs",
      content: "The AI insights are incredible. We found optimization opportunities we never knew existed.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Owner",
      company: "StyleHub",
      content: "Finally, a tool that actually understands my ad data. The recommendations are spot-on!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>What Our Clients Say</h2>
        <p>Join thousands of satisfied advertisers</p>
      </motion.div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="testimonial-card"
          >
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role} at {testimonial.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>Get In Touch</h2>
        <p>Ready to transform your ad analytics? Let's talk!</p>
      </motion.div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={24} />
            </div>
            <div>
              <h4>Call Us</h4>
              <p>+91 98211 95901<br />+1 (647) 618-5973</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <div>
              <h4>Email Us</h4>
              <p>hello@adpulse.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <div>
              <h4>Visit Us</h4>
              <p>123 Analytics Street<br />San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button primary large"
        >
          <Upload size={24} />
          Start Your Free Analysis
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PlatformSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

export default App;
