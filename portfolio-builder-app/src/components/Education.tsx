import { usePortfolio } from '../context/PortfolioContext'

const Education = () => {
  const { portfolioData } = usePortfolio()
  const { education } = portfolioData

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications
          </p>
        </div>

        {education.length > 0 ? (
          <div className="experience-timeline">
            {education.map((edu) => (
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
        ) : (
          <div className="text-center">
            <p>No education information available. Add your educational background in the editor.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education
