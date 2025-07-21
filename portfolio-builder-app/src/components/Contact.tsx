import { usePortfolio } from '../context/PortfolioContext'
import { useState } from 'react'

const Contact = () => {
  const { portfolioData } = usePortfolio()
  const { personalInfo } = portfolioData
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {personalInfo.email && (
              <div className="contact-item">
                <div className="contact-icon">
                  <span>📧</span>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
            )}

            {personalInfo.phone && (
              <div className="contact-item">
                <div className="contact-icon">
                  <span>📱</span>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>{personalInfo.phone}</p>
                </div>
              </div>
            )}

            {personalInfo.location && (
              <div className="contact-item">
                <div className="contact-icon">
                  <span>📍</span>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            )}

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
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
