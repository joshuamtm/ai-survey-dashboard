import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  // Data for visualizations
  const aiToolsData = [
    { name: 'ChatGPT', value: 67, percentage: 70.5 },
    { name: 'Gemini', value: 10, percentage: 10.5 },
    { name: 'Copilot', value: 10, percentage: 10.5 },
    { name: 'Claude', value: 5, percentage: 5.3 },
    { name: 'Perplexity', value: 3, percentage: 3.2 }
  ];

  const usageFrequencyData = [
    { name: 'Never', value: 2, percentage: 7.7 },
    { name: 'Sometimes', value: 15, percentage: 57.7 },
    { name: 'Daily', value: 4, percentage: 15.4 },
    { name: 'Many times/day', value: 5, percentage: 19.2 }
  ];

  const useCasesData = [
    { category: 'Research & Analysis', count: 54 },
    { category: 'Email & Comm', count: 41 },
    { category: 'Content Creation', count: 24 },
    { category: 'Meeting Support', count: 22 },
    { category: 'Learning', count: 21 },
    { category: 'Documentation', count: 6 }
  ];

  const confidenceData = [
    { level: 'Not Confident', value: 9.5, count: 6 },
    { level: 'Slightly Confident', value: 27, count: 17 },
    { level: 'Confident', value: 63.5, count: 40 }
  ];

  const participationData = [
    { date: 'Aug 21', responses: 3 },
    { date: 'Aug 25', responses: 22 }
  ];

  const concernsData = [
    { concern: 'Environmental Impact', value: 8 },
    { concern: 'Security & Risk', value: 4 },
    { concern: 'Vulnerable Communities', value: 4 }
  ];

  const COLORS = ['#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#6A994E', '#BC4B51'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="dashboard-header">
        <h2>Survey Analytics Dashboard</h2>
        <p>Interactive visualizations of organizational AI adoption patterns</p>
      </div>

      <div className="dashboard-grid">
        {/* AI Tools Adoption */}
        <motion.div className="chart-card" variants={itemVariants}>
          <h3>AI Tool Adoption</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={aiToolsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} mentions`} />
              <Bar dataKey="value" fill="#2E86AB">
                {aiToolsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Usage Frequency */}
        <motion.div className="chart-card" variants={itemVariants}>
          <h3>Usage Frequency Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={usageFrequencyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {usageFrequencyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Use Cases */}
        <motion.div className="chart-card wide" variants={itemVariants}>
          <h3>Primary Use Cases</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={useCasesData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="count" fill="#A23B72" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Confidence Levels */}
        <motion.div className="chart-card" variants={itemVariants}>
          <h3>User Confidence Levels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={confidenceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="level" />
              <PolarRadiusAxis angle={90} domain={[0, 70]} />
              <Radar name="Percentage" dataKey="value" stroke="#F18F01" fill="#F18F01" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Participation Growth */}
        <motion.div className="chart-card" variants={itemVariants}>
          <h3>Survey Participation Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={participationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="responses" stroke="#6A994E" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <div className="growth-indicator">+633% Growth</div>
        </motion.div>

        {/* Key Concerns */}
        <motion.div className="chart-card" variants={itemVariants}>
          <h3>Organizational Concerns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={concernsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="concern" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#BC4B51" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Summary Stats */}
      <motion.div className="summary-stats" variants={itemVariants}>
        <div className="stat-item">
          <span className="stat-number">25</span>
          <span className="stat-desc">Total Participants</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">6</span>
          <span className="stat-desc">Primary Use Cases</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5</span>
          <span className="stat-desc">AI Tools Used</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">35%</span>
          <span className="stat-desc">Daily Users</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;