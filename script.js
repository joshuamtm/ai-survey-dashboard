// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Chart.js configurations
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    // Usage Frequency Chart
    const usageCtx = document.getElementById('usageChart');
    if (usageCtx) {
        new Chart(usageCtx, {
            type: 'bar',
            data: {
                labels: ['Never', 'Monthly', 'Sometimes', 'Daily', 'Multiple Daily'],
                datasets: [{
                    label: 'Number of Respondents',
                    data: [1, 3, 12, 5, 4],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(139, 92, 246, 0.8)'
                    ],
                    borderColor: [
                        'rgba(239, 68, 68, 1)',
                        'rgba(245, 158, 11, 1)',
                        'rgba(59, 130, 246, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(139, 92, 246, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 2,
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                                weight: 500
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.y;
                                const total = 25;
                                const percentage = ((value / total) * 100).toFixed(0);
                                return `${value} respondents (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Confidence Levels Donut Chart
    const confidenceCtx = document.getElementById('confidenceChart');
    if (confidenceCtx) {
        new Chart(confidenceCtx, {
            type: 'doughnut',
            data: {
                labels: ['Not Confident', 'Slightly', 'Moderately', 'Very', 'Extremely'],
                datasets: [{
                    data: [3, 5, 7, 4, 1],
                    backgroundColor: [
                        '#FF6B6B',
                        '#4ECDC4',
                        '#45B7D1',
                        '#96CEB4',
                        '#FFEAA7'
                    ],
                    borderWidth: 3,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                const total = 20;
                                const percentage = ((value / total) * 100).toFixed(0);
                                return `${context.label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Participation Growth Chart
    const participationCtx = document.getElementById('participationChart');
    if (participationCtx) {
        new Chart(participationCtx, {
            type: 'line',
            data: {
                labels: ['Session 1 (Aug 21)', 'Session 2 (Aug 25)'],
                datasets: [{
                    label: 'Participants',
                    data: [3, 22],
                    borderColor: 'rgb(139, 92, 246)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 8,
                    pointHoverRadius: 10,
                    pointBackgroundColor: 'rgb(139, 92, 246)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 25,
                        ticks: {
                            stepSize: 5,
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                                weight: 500
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                if (context.dataIndex === 1) {
                                    return '+633% growth';
                                }
                            }
                        }
                    },
                    annotation: {
                        annotations: {
                            growth: {
                                type: 'label',
                                xValue: 1.5,
                                yValue: 12.5,
                                backgroundColor: 'rgba(16, 185, 129, 0.9)',
                                content: ['+633%'],
                                color: 'white',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                },
                                padding: 8
                            }
                        }
                    }
                }
            }
        });
    }

    // Animate numbers on scroll
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('.stat-number');
        
        numbers.forEach(num => {
            const updateCount = () => {
                const target = parseInt(num.innerText.replace('%', ''));
                const count = +num.innerText.replace('%', '') || 0;
                const increment = target / 100;
                
                if (count < target) {
                    num.innerText = Math.ceil(count + increment) + (num.innerText.includes('%') ? '%' : '');
                    setTimeout(updateCount, 20);
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(num);
        });
    };

    // Sticky navigation background
    const nav = document.querySelector('.nav-sticky');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            nav.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // Download report function
    window.downloadReport = function() {
        const reportContent = `
# AI ADOPTION SURVEY REPORT - AUGUST 2025

## Executive Summary
96% of survey respondents actively use ChatGPT in their daily work, marking a complete shift in workplace technology adoption.

## Key Findings
- Total Respondents: 25
- ChatGPT Daily Users: 68%
- Session Growth Rate: 633%
- Average Confidence: Moderate

## Usage Frequency
- Never: 4%
- Monthly: 12%
- Sometimes: 48%
- Daily: 20%
- Multiple Times Daily: 16%

## Recommendations
1. Develop comprehensive AI policies
2. Invest in training programs
3. Audit workflows for AI integration
4. Establish metrics for measuring impact
5. Create communities of practice

## Methodology
Survey Period: August 21-25, 2025
Sessions: 2
Average Completion Rate: 19.7%

---
Generated from AI Survey Dashboard
        `;
        
        const blob = new Blob([reportContent], { type: 'text/markdown' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ai-survey-report-2025.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Show success message
        const button = document.querySelector('.cta-button');
        const originalText = button.innerText;
        button.innerText = 'Downloaded!';
        button.style.background = '#10b981';
        button.style.color = 'white';
        
        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = 'white';
            button.style.color = 'var(--primary-color)';
        }, 2000);
    };
    
    // Add entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});