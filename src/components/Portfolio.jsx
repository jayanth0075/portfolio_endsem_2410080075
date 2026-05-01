import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Header */}
        <header className="portfolio-header">
          <div className="header-content">
            <div className="profile-photo-container">
              <div className="profile-photo-placeholder">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="photoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="100" fill="url(#photoGradient)" />
                  <circle cx="100" cy="70" r="35" fill="#fff" opacity="0.9" />
                  <ellipse cx="100" cy="145" rx="50" ry="40" fill="#fff" opacity="0.9" />
                </svg>
                <p className="photo-label">Your Photo Here</p>
              </div>
            </div>
            <div className="header-text">
              <h1 className="portfolio-title">Jayanth Adavi</h1>
              <p className="portfolio-subtitle">AI & DS Student | Research Enthusiast | Tech Entrepreneur</p>
              <p className="portfolio-university">KL University • Department of Artificial Intelligence & Data Science</p>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="portfolio-section about-section">
          <h2>About Me</h2>
          <p className="about-intro">
            I am a passionate student at KL University, pursuing my degree in Artificial Intelligence and Data Science. My journey in technology has been driven by an unwavering enthusiasm for research and development. As a first-generation researcher, I had the opportunity to contribute to groundbreaking work in computational biology through my first research paper: "Structure-Aware Self-Supervised Learning for Detecting Bacterial Flagellar Motors in Cryo-ET."
          </p>
          <p className="about-body">
            This experience kindled my curiosity about bridging the gap between cutting-edge research and practical applications. Beyond academia, I am co-founding Artisan Systems, an entrepreneurial tech startup focused on developing innovative solutions at the intersection of AI, data science, and real-world problem-solving. My passion lies in leveraging machine learning and deep learning to unlock insights from complex data, particularly in domains like structural biology, computer vision, and autonomous systems. I believe in the power of collaborative innovation and am committed to pushing the boundaries of what's possible in AI and technology. Whether it's publishing research, coding scalable applications, or building products that matter, I am driven by the desire to make a meaningful impact in the world of technology.
          </p>
        </section>

        {/* Skills Section */}
        <section className="portfolio-section">
          <h2>Expertise & Interests</h2>
          <div className="skills-grid">
            <div className="skill-item">Machine Learning</div>
            <div className="skill-item">Deep Learning</div>
            <div className="skill-item">Computer Vision</div>
            <div className="skill-item">Data Science</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">Research</div>
            <div className="skill-item">Cryo-ET Analysis</div>
            <div className="skill-item">AI Applications</div>
          </div>
        </section>

        {/* Hackathons Section */}
        <section className="portfolio-section hackathons-section">
          <h2>🏆 Hackathon Achievements</h2>
          <div className="hackathons-grid">
            <div className="hackathon-card featured">
              <div className="award-badge">🌍 GUINNESS WORLD RECORD</div>
              <h3>Agentatthon</h3>
              <p className="hackathon-highlight">Largest Agentic AI Hackathon</p>
              <div className="hackathon-stats">
                <div className="stat">
                  <span className="stat-value">2,000+</span>
                  <span className="stat-label">Participants</span>
                </div>
                <div className="stat">
                  <span className="stat-value">SELECTED</span>
                  <span className="stat-label">Out of 2K</span>
                </div>
              </div>
              <p>Our team achieved an incredible milestone by being selected from over 2,000 participants to participate in the largest agentic AI hackathon. We earned the prestigious Guinness World Record certification for this record-breaking event, showcasing our expertise in cutting-edge agentic AI technologies and innovative problem-solving.</p>
              <div className="achievement-tags">
                <span className="tag">Agentic AI</span>
                <span className="tag">World Record</span>
                <span className="tag">Team Excellence</span>
              </div>
            </div>

            <div className="hackathon-card">
              <div className="award-badge">🥉 HONORABLE MENTION</div>
              <h3>IIT Hyderabad Hackathon</h3>
              <p className="hackathon-highlight">18th Position • Honorable Mention</p>
              <div className="hackathon-achievement">
                <p className="achievement-title">Piezoelectric Sensor Energy Generation</p>
                <p>Developed an innovative solution for energy generation using piezoelectric sensors with an exceptional frontend interface. The project showcased practical applications of renewable energy with a user-centric design approach that impressed the judging panel.</p>
              </div>
              <div className="achievement-tags">
                <span className="tag">IoT</span>
                <span className="tag">Renewable Energy</span>
                <span className="tag">Frontend Excellence</span>
                <span className="tag">Innovation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="portfolio-section">
          <h2>Research & Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Cryo-ET Analysis Research</h3>
              <p className="project-highlight">First Research Publication</p>
              <p>Structure-Aware Self-Supervised Learning for Detecting Bacterial Flagellar Motors in Cryo-Electron Tomography. A groundbreaking study in computational structural biology.</p>
              <a href="#" className="project-link">Read Paper →</a>
            </div>
            <div className="project-card">
              <h3>Artisan Systems</h3>
              <p className="project-highlight">Tech Startup Co-Founder</p>
              <p>Building innovative AI-driven solutions for real-world challenges. Focused on developing cutting-edge technology products that leverage machine learning and data science.</p>
              <a href="#" className="project-link">Learn More →</a>
            </div>
            <div className="project-card">
              <h3>AI & Data Science Portfolio</h3>
              <p className="project-highlight">Academic Projects</p>
              <p>Various machine learning and data science projects including classification, computer vision, and deep learning applications developed during my studies.</p>
              <a href="https://github.com/jayanth0075" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="portfolio-section social-section">
          <h2>Connect With Me</h2>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/jayanth-adavi-952a492ab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/jayanth0075" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              GitHub
            </a>
            <a 
              href="https://www.codechef.com/users/jayanth_075" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link codechef"
            >
              CodeChef
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className="portfolio-section">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations, research discussions, or opportunities!</p>
          <p className="contact-info">📧 Available for: Internships • Research Collaborations • Startups • Tech Discussions</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>&copy; 2024 Jayanth Adavi. All rights reserved.</p>
      </footer>
    </div>
  )
}
