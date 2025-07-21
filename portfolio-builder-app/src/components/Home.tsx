import { usePortfolio } from '../context/PortfolioContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { portfolioData } = usePortfolio()
  const { personalInfo } = portfolioData

  return (
    <section className="hero">
      <div className="hero-content">
        {personalInfo.profileImage && (
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="hero-image"
          />
        )}
        <h1 className="hero-title">
          {personalInfo.name || 'Your Name'}
        </h1>
        <p className="hero-subtitle">
          {personalInfo.title || 'Professional Title'}
        </p>
        <p className="hero-description">
          {personalInfo.bio || 'Welcome to my professional portfolio. Explore my work, skills, and experience.'}
        </p>
        
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">
            Learn More About Me
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            View My Work
          </Link>
        </div>

        <div className="social-links">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>💼</span>
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>🔗</span>
            </a>
          )}
          {personalInfo.website && (
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span>🌐</span>
            </a>
          )}
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="social-link"
            >
              <span>📧</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Home
