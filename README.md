# AI Survey Dashboard 📊

An interactive web application for visualizing and analyzing organizational AI adoption patterns, based on survey data from the Walton Family Foundation (August 2025).

## 🚀 Live Demo

[View Live Dashboard](https://ai-survey-dashboard-wff.netlify.app)

## 📈 Key Features

- **Interactive Visualizations**: 6 comprehensive charts showing AI tool adoption, usage frequency, and organizational patterns
- **Data-Driven Insights**: Analysis of 25 survey responses revealing critical trends in AI adoption
- **Strategic Recommendations**: Actionable 30-day, 90-day, and long-term initiatives
- **Responsive Design**: Fully mobile-optimized with smooth animations
- **Real-time Analytics**: Dynamic data visualization using Recharts

## 🔍 Key Findings

- **633% Growth** in survey participation over 4 days
- **70.5%** ChatGPT dominance in AI tool usage
- **92%** of employees actively using AI tools
- **Environmental Impact** as the top organizational concern

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Visualization**: Recharts for data visualization
- **Animation**: Framer Motion for smooth interactions
- **Styling**: Custom CSS with responsive design
- **Icons**: Lucide React icons
- **Deployment**: Netlify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/joshuamtm/ai-survey-dashboard.git
cd ai-survey-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 📊 Data Structure

The dashboard analyzes survey data across multiple dimensions:

- **AI Tool Adoption**: Usage statistics for ChatGPT, Claude, Gemini, Copilot, and Perplexity
- **Usage Frequency**: Distribution from never to multiple times daily
- **Use Cases**: Research, communication, content creation, meeting support, learning, and documentation
- **Confidence Levels**: User confidence distribution with AI tools
- **Concerns**: Environmental impact, security risks, and community effects

## 🎯 Project Structure

```
ai-survey-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Hero section with key metrics
│   │   ├── Dashboard.tsx        # Interactive charts and visualizations
│   │   ├── InsightsSection.tsx  # Key findings and analysis
│   │   ├── RecommendationsSection.tsx  # Strategic recommendations
│   │   └── Footer.tsx          # Footer with resources
│   ├── App.tsx                 # Main application component
│   └── App.css                 # Global styles
├── public/
├── package.json
└── netlify.toml               # Netlify deployment configuration
```

## 🚀 Deployment

The application is configured for easy deployment on Netlify:

1. Push to GitHub
2. Connect repository to Netlify
3. Deploy with automatic builds

Or deploy manually:
```bash
npm run build
npx netlify deploy --prod --dir=build
```

## 📈 Future Enhancements

- [ ] Real-time data integration via API
- [ ] Downloadable PDF reports
- [ ] Advanced filtering and sorting options
- [ ] Comparative analysis across time periods
- [ ] Integration with organizational databases
- [ ] Custom visualization builder

## 📝 Data Privacy

All survey data has been anonymized and aggregated. No personally identifiable information is displayed or stored.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contact

For questions about the survey analysis or dashboard, please open an issue on GitHub.

---

**Built with data analysis and visualization expertise** | Powered by React & TypeScript