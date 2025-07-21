import { usePortfolio } from '../context/PortfolioContext'

const About = () => {
  const { portfolioData } = usePortfolio()
  const { personalInfo, skills } = portfolioData

  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and passion
          </p>
        </div>

        <div className="about-content">
          <div>
            {personalInfo.profileImage && (
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="about-image"
              />
            )}
          </div>
          <div className="about-text">
            <p>
              {personalInfo.bio || 'I am a passionate professional dedicated to creating exceptional experiences and delivering high-quality results. My journey has been shaped by continuous learning and a commitment to excellence.'}
            </p>
            <p>
              With expertise spanning multiple domains, I bring a unique perspective to every project. I believe in the power of collaboration, innovation, and attention to detail.
            </p>
            <p>
              When I'm not working, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community.
            </p>
          </div>
        </div>

        {skills.length > 0 && (
          <div className="skills-grid">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-list">
                  {categorySkills.map((skill) => (
                    <span key={skill.id} className="skill-tag">
                      {skill.name} ({skill.level})
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
