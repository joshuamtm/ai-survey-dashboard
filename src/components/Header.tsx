import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Users } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const parallaxOffset = scrollY * 0.5;

  return (
    <header className="hero-header">
      <div className="hero-background" style={{ transform: `translateY(${parallaxOffset}px)` }} />
      
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo-section">
          <Brain className="logo-icon" size={48} />
          <h1 className="organization-name">Walton Family Foundation</h1>
        </div>
        
        <motion.h2
          className="main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          The AI Revolution at Work
        </motion.h2>
        
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          How One Organization is Navigating the ChatGPT Era
        </motion.p>

        <motion.div
          className="key-stats"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="stat-card">
            <TrendingUp className="stat-icon" />
            <div className="stat-value">633%</div>
            <div className="stat-label">Engagement Growth</div>
          </div>
          <div className="stat-card">
            <Users className="stat-icon" />
            <div className="stat-value">92%</div>
            <div className="stat-label">Active AI Users</div>
          </div>
          <div className="stat-card">
            <Brain className="stat-icon" />
            <div className="stat-value">70.5%</div>
            <div className="stat-label">ChatGPT Dominance</div>
          </div>
        </motion.div>

        <motion.div
          className="survey-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Survey Period: August 21-25, 2025
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;