import React from 'react';
import { Github, Mail, FileText } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About This Analysis</h4>
          <p>
            Comprehensive data analysis of organizational AI adoption patterns, 
            based on survey responses from August 2025.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Methodology</h4>
          <p>
            Text mining, statistical analysis, and sentiment analysis of 25 survey 
            responses across multiple sessions.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">
              <FileText size={16} />
              <span>Full Report</span>
            </a>
            <a href="#" className="footer-link">
              <Github size={16} />
              <span>Source Code</span>
            </a>
            <a href="#" className="footer-link">
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Walton Family Foundation. Data Analysis & Visualization Dashboard.</p>
      </div>
    </footer>
  );
};

export default Footer;