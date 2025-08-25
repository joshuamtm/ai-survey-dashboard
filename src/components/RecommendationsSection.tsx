import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Zap, ChevronRight } from 'lucide-react';
import './RecommendationsSection.css';

const RecommendationsSection: React.FC = () => {
  const [activeTimeframe, setActiveTimeframe] = useState<'immediate' | 'medium' | 'long'>('immediate');

  const recommendations = {
    immediate: {
      title: "Immediate Actions",
      subtitle: "30 Days",
      icon: <Zap />,
      color: "#2E86AB",
      items: [
        {
          title: "Launch ChatGPT Power User Certification",
          description: "Focus on the 58% occasional users with hands-on workshops and department-specific use cases"
        },
        {
          title: "Establish AI Environmental Impact Committee",
          description: "Measure and report AI carbon footprint, evaluate lower-impact alternatives"
        },
        {
          title: "Create Prompt Library & Knowledge Base",
          description: "Crowdsource from confident users, organize by department and use case"
        }
      ]
    },
    medium: {
      title: "Medium-term Initiatives",
      subtitle: "90 Days",
      icon: <Target />,
      color: "#F18F01",
      items: [
        {
          title: "Deploy Custom GPT Development Training",
          description: "Enable departments to build specialized tools and foster internal AI innovation"
        },
        {
          title: "Implement AI Ethics & Risk Framework",
          description: "Address security concerns, establish usage guidelines, create incident response protocols"
        },
        {
          title: "Launch AI Mentorship Program",
          description: "Pair confident users with beginners, create practice environments, celebrate success stories"
        }
      ]
    },
    long: {
      title: "Long-term Vision",
      subtitle: "6-12 Months",
      icon: <Calendar />,
      color: "#6A994E",
      items: [
        {
          title: "Become an AI-Native Organization",
          description: "Integrate AI into standard workflows, measure productivity improvements, share best practices publicly"
        },
        {
          title: "Lead on Sustainable AI",
          description: "Publish environmental impact reports, partner with green AI initiatives, influence vendor practices"
        },
        {
          title: "Build Center of Excellence",
          description: "Create dedicated AI innovation team, develop proprietary tools, become industry thought leader"
        }
      ]
    }
  };

  const currentRec = recommendations[activeTimeframe];

  return (
    <div className="recommendations-section">
      <motion.div
        className="recommendations-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Strategic Recommendations</h2>
        <p>Your roadmap to becoming an AI-empowered organization</p>
      </motion.div>

      <div className="timeframe-selector">
        {Object.keys(recommendations).map((timeframe) => (
          <button
            key={timeframe}
            className={activeTimeframe === timeframe ? 'active' : ''}
            onClick={() => setActiveTimeframe(timeframe as any)}
            style={{
              borderColor: activeTimeframe === timeframe ? recommendations[timeframe as keyof typeof recommendations].color : 'transparent',
              color: activeTimeframe === timeframe ? recommendations[timeframe as keyof typeof recommendations].color : '#666'
            }}
          >
            {recommendations[timeframe as keyof typeof recommendations].icon}
            <span>{recommendations[timeframe as keyof typeof recommendations].title}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeTimeframe}
        className="recommendations-content"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="timeframe-header" style={{ backgroundColor: currentRec.color }}>
          <h3>{currentRec.title}</h3>
          <span className="timeframe-badge">{currentRec.subtitle}</span>
        </div>

        <div className="recommendations-list">
          {currentRec.items.map((item, index) => (
            <motion.div
              key={index}
              className="recommendation-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <div className="rec-number" style={{ backgroundColor: currentRec.color }}>
                {index + 1}
              </div>
              <div className="rec-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <ChevronRight className="rec-arrow" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="implementation-guide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3>Implementation Priorities</h3>
        <div className="priority-grid">
          <div className="priority-item high">
            <span className="priority-label">High Priority</span>
            <p>ChatGPT training & Environmental impact assessment</p>
          </div>
          <div className="priority-item medium">
            <span className="priority-label">Medium Priority</span>
            <p>Custom GPT development & Ethics framework</p>
          </div>
          <div className="priority-item low">
            <span className="priority-label">Long-term</span>
            <p>Center of Excellence & Industry leadership</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3>Ready to Transform?</h3>
        <p>
          The data is clear: your employees are ready for AI transformation. 
          They're not asking whether to use AI, but how to use it effectively, 
          ethically, and sustainably. The time to act is now.
        </p>
        <button className="cta-button">
          Download Full Report
        </button>
      </motion.div>
    </div>
  );
};

export default RecommendationsSection;