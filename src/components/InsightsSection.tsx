import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Brain, Globe, Shield, BookOpen } from 'lucide-react';
import './InsightsSection.css';

const InsightsSection: React.FC = () => {
  const insights = [
    {
      icon: <Users />,
      title: "Near-Universal Adoption",
      description: "92% of employees use AI at least occasionally, with 35% integrating it into daily workflows.",
      highlight: "92% adoption",
      color: "#2E86AB"
    },
    {
      icon: <Globe />,
      title: "Environmental Concerns Lead",
      description: "Sustainability worries mentioned 2x more than security, showing sophisticated understanding of AI's hidden costs.",
      highlight: "Top concern",
      color: "#A23B72"
    },
    {
      icon: <Shield />,
      title: "Confidence Gap Opportunity",
      description: "63.5% feel confident, but 27% remain slightly confident—targeted training could rapidly elevate this group.",
      highlight: "27% opportunity",
      color: "#F18F01"
    },
    {
      icon: <BookOpen />,
      title: "Advanced Training Demand",
      description: "Employees seek custom GPT creation and AI agent development, moving beyond basic usage to AI creation.",
      highlight: "Next evolution",
      color: "#6A994E"
    },
    {
      icon: <TrendingUp />,
      title: "Research & Analysis Leads Usage",
      description: "Research and analysis dominates with 54 references, followed by email/communication at 41 mentions.",
      highlight: "Top use case",
      color: "#BC4B51"
    },
    {
      icon: <Brain />,
      title: "Daily Power Users Emerging",
      description: "35% of users engage with AI daily or multiple times per day, forming a core group of power users.",
      highlight: "35% daily",
      color: "#C73E1D"
    }
  ];

  const keyFindings = [
    "Research & Analysis leads use cases with 54 references",
    "Email & Communication follows closely with 41 mentions",
    "Environmental impact concerns outweigh security 2:1",
    "Custom GPT development is the top training request",
    "27% of users are 'slightly confident' - prime for training"
  ];

  return (
    <div className="insights-section">
      <motion.div
        className="insights-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Key Insights & Analysis</h2>
        <p>Data-driven findings that reveal the state of AI adoption in your organization</p>
      </motion.div>

      <div className="insights-grid">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            className="insight-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
          >
            <div className="insight-icon" style={{ backgroundColor: insight.color }}>
              {insight.icon}
            </div>
            <h3>{insight.title}</h3>
            <p>{insight.description}</p>
            <div className="insight-highlight" style={{ color: insight.color }}>
              {insight.highlight}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="findings-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3>Critical Findings</h3>
        <div className="findings-list">
          {keyFindings.map((finding, index) => (
            <motion.div
              key={index}
              className="finding-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
            >
              <span className="finding-number">{index + 1}</span>
              <span className="finding-text">{finding}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="insight-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <h3>The Bottom Line</h3>
        <p>
          Your organization stands at a critical juncture. With 92% adoption but significant 
          confidence gaps and environmental concerns, employees have moved beyond questioning 
          whether to use AI to actively seeking guidance on how to use it effectively, ethically, 
          and sustainably. The workforce is ready for comprehensive AI transformation, but needs 
          targeted training and clear ethical frameworks to succeed.
        </p>
      </motion.div>
    </div>
  );
};

export default InsightsSection;