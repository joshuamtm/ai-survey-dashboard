import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Brain, Globe, Shield, BookOpen } from 'lucide-react';
import './InsightsSection.css';

const InsightsSection: React.FC = () => {
  const insights = [
    {
      icon: <TrendingUp />,
      title: "Explosive Growth in AI Engagement",
      description: "633% surge in survey participation over 4 days signals urgent employee demand for AI guidance and training.",
      highlight: "633% growth",
      color: "#2E86AB"
    },
    {
      icon: <Brain />,
      title: "ChatGPT Becomes the Standard",
      description: "With 70.5% of all AI tool mentions, ChatGPT has emerged as the de facto platform, simplifying training needs.",
      highlight: "70.5% dominance",
      color: "#A23B72"
    },
    {
      icon: <Users />,
      title: "Near-Universal Adoption",
      description: "92% of employees use AI at least occasionally, with 35% integrating it into daily workflows.",
      highlight: "92% adoption",
      color: "#F18F01"
    },
    {
      icon: <Globe />,
      title: "Environmental Concerns Lead",
      description: "Sustainability worries mentioned 2x more than security, showing sophisticated understanding of AI's hidden costs.",
      highlight: "Top concern",
      color: "#C73E1D"
    },
    {
      icon: <Shield />,
      title: "Confidence Gap Opportunity",
      description: "63.5% feel confident, but 27% remain slightly confident—targeted training could rapidly elevate this group.",
      highlight: "27% opportunity",
      color: "#6A994E"
    },
    {
      icon: <BookOpen />,
      title: "Advanced Training Demand",
      description: "Employees seek custom GPT creation and AI agent development, moving beyond basic usage to AI creation.",
      highlight: "Next evolution",
      color: "#BC4B51"
    }
  ];

  const keyFindings = [
    "Research & Analysis leads use cases with 54 references",
    "Email & Communication follows closely with 41 mentions",
    "Daily usage increased from 3 to 22 responses in 4 days",
    "Environmental impact concerns outweigh security 2:1",
    "Custom GPT development is the top training request"
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
          Your organization stands at a critical juncture. Employees have moved beyond questioning 
          whether to use AI to actively seeking guidance on how to use it effectively, ethically, 
          and sustainably. The 633% surge in engagement isn't just a statistic—it's a clear signal 
          that your workforce is ready for comprehensive AI transformation, but needs leadership 
          and structure to succeed.
        </p>
      </motion.div>
    </div>
  );
};

export default InsightsSection;