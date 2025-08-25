import React from 'react';
import { Github, Mail, FileText, Download } from 'lucide-react';
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
            responses from a single organizational session.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <div className="footer-links">
            <a 
              href="https://docs.google.com/spreadsheets/d/10f_DaylopYw6aIw_rCJwIXibBJlxmH9R/edit?usp=sharing&ouid=116902632127531067550&rtpof=true&sd=true" 
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} />
              <span>Download Raw Data</span>
            </a>
            <a 
              href="https://github.com/joshuamtm/ai-survey-dashboard" 
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              <span>Source Code</span>
            </a>
            <a 
              href="/ai_survey_data_journalism_report.md" 
              className="footer-link"
              download
            >
              <FileText size={16} />
              <span>Full Report</span>
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