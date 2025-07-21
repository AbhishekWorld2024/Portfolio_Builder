import { usePortfolio } from '../context/PortfolioContext'

const Experience = () => {
  const { portfolioData } = usePortfolio()
  const { workExperience } = portfolioData

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and achievements
          </p>
        </div>

        {workExperience.length > 0 ? (
          <div className="experience-timeline">
            {workExperience.map((work) => (
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
        ) : (
          <div className="text-center">
            <p>No work experience available. Add your professional experience in the editor.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience
