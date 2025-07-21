import { usePortfolio } from '../context/PortfolioContext'

const Preview = () => {
  const { portfolioData, exportPortfolio } = usePortfolio()

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2 className="preview-title">Portfolio Preview</h2>
        <button onClick={exportPortfolio} className="btn-export">
          <span>📥</span> Export as HTML
        </button>
      </div>

      <div className="preview-content">
        <section className="hero">
          <div className="hero-content">
            {portfolioData.personalInfo.profileImage && (
              <img
                src={portfolioData.personalInfo.profileImage}
                alt={portfolioData.personalInfo.name}
                className="hero-image"
              />
            )}
            <h1 className="hero-title">
              {portfolioData.personalInfo.name || 'Your Name'}
            </h1>
            <p className="hero-subtitle">
              {portfolioData.personalInfo.title || 'Professional Title'}
            </p>
            <p className="hero-description">
              {portfolioData.personalInfo.bio || 'Welcome to my professional portfolio. Explore my work, skills, and experience.'}
            </p>
            
            <div className="social-links">
              {portfolioData.personalInfo.linkedin && (
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>💼</span>
                </a>
              )}
              {portfolioData.personalInfo.github && (
                <a
                  href={portfolioData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>🔗</span>
                </a>
              )}
              {portfolioData.personalInfo.website && (
                <a
                  href={portfolioData.personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>🌐</span>
                </a>
              )}
              {portfolioData.personalInfo.email && (
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="social-link"
                >
                  <span>📧</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {portfolioData.skills.length > 0 && (
          <section className="section">
            <div className="container">
              <h2 className="section-title">Skills</h2>
              <div className="skills-grid">
                {Object.entries(
                  portfolioData.skills.reduce((acc, skill) => {
                    const category = skill.category || 'Other'
                    if (!acc[category]) acc[category] = []
                    acc[category].push(skill)
                    return acc
                  }, {} as Record<string, typeof portfolioData.skills>)
                ).map(([category, categorySkills]) => (
                  <div key={category} className="skill-category">
                    <h3>{category}</h3>
                    <div className="skill-list">
                      {(categorySkills as typeof portfolioData.skills).map((skill) => (
                        <span key={skill.id} className="skill-tag">
                          {skill.name} ({skill.level})
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {portfolioData.projects.length > 0 && (
          <section className="section">
            <div className="container">
              <h2 className="section-title">Projects</h2>
              <div className="projects-grid">
                {portfolioData.projects.map((project) => (
                  <div key={project.id} className="project-card">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    )}
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      
                      {project.technologies.length > 0 && (
                        <div className="project-tech">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="project-links">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <span>🔗</span> Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <span>📁</span> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {portfolioData.workExperience.length > 0 && (
          <section className="section">
            <div className="container">
              <h2 className="section-title">Work Experience</h2>
              <div className="experience-timeline">
                {portfolioData.workExperience.map((work) => (
                  <div key={work.id} className="experience-item">
                    <div className="experience-content">
                      <h3 className="experience-title">{work.position}</h3>
                      <p className="experience-company">{work.company}</p>
                      <p className="experience-description">{work.description}</p>
                    </div>
                    <div className="experience-date">
                      {work.startDate} - {work.current ? 'Present' : work.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {portfolioData.education.length > 0 && (
          <section className="section">
            <div className="container">
              <h2 className="section-title">Education</h2>
              <div className="experience-timeline">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="experience-item">
                    <div className="experience-content">
                      <h3 className="experience-title">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="experience-company">{edu.institution}</p>
                      <p className="experience-description">
                        {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                        {edu.gpa && ` • GPA: ${edu.gpa}`}
                      </p>
                    </div>
                    <div className="experience-date">
                      {new Date(edu.startDate).getFullYear()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {portfolioData.certifications.length > 0 && (
          <section className="section">
            <div className="container">
              <h2 className="section-title">Certifications</h2>
              <div className="certifications-grid">
                {portfolioData.certifications.map((cert) => (
                  <div key={cert.id} className="certification-card">
                    <div className="certification-icon">
                      <span>🏆</span>
                    </div>
                    <h3 className="certification-title">{cert.name}</h3>
                    <p className="certification-issuer">Issued by: {cert.issuer}</p>
                    <p className="certification-date">{cert.date}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <span>🔗</span> View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Preview
