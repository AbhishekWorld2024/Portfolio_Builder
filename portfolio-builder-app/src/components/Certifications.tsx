import { usePortfolio } from '../context/PortfolioContext'

const Certifications = () => {
  const { portfolioData } = usePortfolio()
  const { certifications } = portfolioData

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and achievements
          </p>
        </div>

        {certifications.length > 0 ? (
          <div className="certifications-grid">
            {certifications.map((cert) => (
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
        ) : (
          <div className="text-center">
            <p>No certifications available. Add your professional certifications in the editor.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
