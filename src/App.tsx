import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import InsightsSection from './components/InsightsSection';
import RecommendationsSection from './components/RecommendationsSection';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'insights' | 'recommendations'>('dashboard');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header scrollY={scrollY} />
      
      <nav className="sticky-nav">
        <div className="nav-container">
          <button
            className={activeSection === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveSection('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={activeSection === 'insights' ? 'active' : ''}
            onClick={() => setActiveSection('insights')}
          >
            Key Insights
          </button>
          <button
            className={activeSection === 'recommendations' ? 'active' : ''}
            onClick={() => setActiveSection('recommendations')}
          >
            Recommendations
          </button>
        </div>
      </nav>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'insights' && <InsightsSection />}
        {activeSection === 'recommendations' && <RecommendationsSection />}
      </motion.main>

      <Footer />
    </div>
  );
};

export default App;