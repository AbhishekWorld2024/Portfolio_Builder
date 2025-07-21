import { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'

const Editor = () => {
  const {
    portfolioData,
    updatePersonalInfo,
    addSkill,
    removeSkill,
    addProject,
    removeProject,
    addWorkExperience,
    removeWorkExperience,
    addEducation,
    removeEducation,
    addCertification,
    removeCertification
  } = usePortfolio()

  const [activeSection, setActiveSection] = useState('personal')
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner', category: 'Technical' })
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    github: '',
    image: ''
  })
  const [newWork, setNewWork] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    current: false
  })
  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
    current: false
  })
  const [newCertification, setNewCertification] = useState({
    name: '',
    issuer: '',
    date: '',
    link: ''
  })

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'experience', label: 'Experience', icon: '🏢' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ]

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      addSkill(newSkill)
      setNewSkill({ name: '', level: 'Beginner', category: 'Technical' })
    }
  }

  const handleAddProject = () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      addProject({
        ...newProject,
        technologies: newProject.technologies.split(',').map(tech => tech.trim()).filter(tech => tech)
      })
      setNewProject({
        title: '',
        description: '',
        technologies: '',
        link: '',
        github: '',
        image: ''
      })
    }
  }

  const handleAddWork = () => {
    if (newWork.company.trim() && newWork.position.trim()) {
      addWorkExperience(newWork)
      setNewWork({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        current: false
      })
    }
  }

  const handleAddEducation = () => {
    if (newEducation.institution.trim() && newEducation.degree.trim()) {
      addEducation(newEducation)
      setNewEducation({
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
        current: false
      })
    }
  }

  const handleAddCertification = () => {
    if (newCertification.name.trim()) {
      addCertification(newCertification)
      setNewCertification({
        name: '',
        issuer: '',
        date: '',
        link: ''
      })
    }
  }

  return (
    <div className="editor-container">
      <div className="editor-nav">
        <ul className="editor-nav-list">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`editor-nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span>{section.icon}</span> {section.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        {activeSection === 'personal' && (
          <div className="editor-section">
            <h3>👤 Personal Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  value={portfolioData.personalInfo.name}
                  onChange={(e) => updatePersonalInfo('name', e.target.value)}
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Professional Title</label>
                <input
                  type="text"
                  value={portfolioData.personalInfo.title}
                  onChange={(e) => updatePersonalInfo('title', e.target.value)}
                  className="form-input"
                  placeholder="Software Developer"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={portfolioData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  value={portfolioData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  value={portfolioData.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  className="form-input"
                  placeholder="New York, NY"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Profile Image URL</label>
                <input
                  type="url"
                  value={portfolioData.personalInfo.profileImage}
                  onChange={(e) => updatePersonalInfo('profileImage', e.target.value)}
                  className="form-input"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">LinkedIn URL</label>
                <input
                  type="url"
                  value={portfolioData.personalInfo.linkedin}
                  onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                  className="form-input"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div className="form-group">
                <label className="form-label">GitHub URL</label>
                <input
                  type="url"
                  value={portfolioData.personalInfo.github}
                  onChange={(e) => updatePersonalInfo('github', e.target.value)}
                  className="form-input"
                  placeholder="https://github.com/username"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Website URL</label>
              <input
                type="url"
                value={portfolioData.personalInfo.website}
                onChange={(e) => updatePersonalInfo('website', e.target.value)}
                className="form-input"
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Bio</label>
              <textarea
                value={portfolioData.personalInfo.bio}
                onChange={(e) => updatePersonalInfo('bio', e.target.value)}
                className="form-textarea"
                placeholder="Tell us about yourself..."
                rows={4}
              />
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="editor-section">
            <h3>🛠️ Skills</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Skill Name</label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                  className="form-input"
                  placeholder="React"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Level</label>
                <select
                  value={newSkill.level}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, level: e.target.value }))}
                  className="form-input"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill(prev => ({ ...prev, category: e.target.value }))}
                  className="form-input"
                >
                  <option value="Technical">Technical</option>
                  <option value="Design">Design</option>
                  <option value="Management">Management</option>
                  <option value="Communication">Communication</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <button onClick={handleAddSkill} className="btn-add">
              <span>➕</span> Add Skill
            </button>
            
            <div className="item-list">
              {portfolioData.skills.map((skill) => (
                <div key={skill.id} className="item-card">
                  <button
                    onClick={() => removeSkill(skill.id)}
                    className="item-remove"
                  >
                    ✕
                  </button>
                  <h4>{skill.name}</h4>
                  <p>Level: {skill.level} • Category: {skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="editor-section">
            <h3>💼 Projects</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                  className="form-input"
                  placeholder="My Awesome Project"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Project Image URL</label>
                <input
                  type="url"
                  value={newProject.image}
                  onChange={(e) => setNewProject(prev => ({ ...prev, image: e.target.value }))}
                  className="form-input"
                  placeholder="https://example.com/project-image.jpg"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                className="form-textarea"
                placeholder="Describe your project..."
                rows={3}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={newProject.technologies}
                  onChange={(e) => setNewProject(prev => ({ ...prev, technologies: e.target.value }))}
                  className="form-input"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Live Demo URL</label>
                <input
                  type="url"
                  value={newProject.link}
                  onChange={(e) => setNewProject(prev => ({ ...prev, link: e.target.value }))}
                  className="form-input"
                  placeholder="https://myproject.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">GitHub URL</label>
              <input
                type="url"
                value={newProject.github}
                onChange={(e) => setNewProject(prev => ({ ...prev, github: e.target.value }))}
                className="form-input"
                placeholder="https://github.com/username/project"
              />
            </div>
            <button onClick={handleAddProject} className="btn-add">
              <span>➕</span> Add Project
            </button>
            
            <div className="item-list">
              {portfolioData.projects.map((project) => (
                <div key={project.id} className="item-card">
                  <button
                    onClick={() => removeProject(project.id)}
                    className="item-remove"
                  >
                    ✕
                  </button>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="editor-section">
            <h3>🏢 Work Experience</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  value={newWork.company}
                  onChange={(e) => setNewWork(prev => ({ ...prev, company: e.target.value }))}
                  className="form-input"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  value={newWork.position}
                  onChange={(e) => setNewWork(prev => ({ ...prev, position: e.target.value }))}
                  className="form-input"
                  placeholder="Software Developer"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  value={newWork.startDate}
                  onChange={(e) => setNewWork(prev => ({ ...prev, startDate: e.target.value }))}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  value={newWork.endDate}
                  onChange={(e) => setNewWork(prev => ({ ...prev, endDate: e.target.value }))}
                  className="form-input"
                  disabled={newWork.current}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">
                <input
                  type="checkbox"
                  checked={newWork.current}
                  onChange={(e) => setNewWork(prev => ({ ...prev, current: e.target.checked }))}
                />
                Currently working here
              </label>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                value={newWork.description}
                onChange={(e) => setNewWork(prev => ({ ...prev, description: e.target.value }))}
                className="form-textarea"
                placeholder="Describe your role and responsibilities..."
                rows={3}
              />
            </div>
            <button onClick={handleAddWork} className="btn-add">
              <span>➕</span> Add Work Experience
            </button>
            
            <div className="item-list">
              {portfolioData.workExperience.map((work) => (
                <div key={work.id} className="item-card">
                  <button
                    onClick={() => removeWorkExperience(work.id)}
                    className="item-remove"
                  >
                    ✕
                  </button>
                  <h4>{work.position} at {work.company}</h4>
                  <p>{work.startDate} - {work.current ? 'Present' : work.endDate}</p>
                  <p>{work.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'education' && (
          <div className="editor-section">
            <h3>🎓 Education</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Institution</label>
                <input
                  type="text"
                  value={newEducation.institution}
                  onChange={(e) => setNewEducation(prev => ({ ...prev, institution: e.target.value }))}
                  className="form-input"
                  placeholder="University Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Degree</label>
                <input
                  type="text"
                  value={newEducation.degree}
                  onChange={(e) => setNewEducation(prev => ({ ...prev, degree: e.target.value }))}
                  className="form-input"
                  placeholder="Bachelor's Degree"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Field of Study</label>
                <input
                  type="text"
                  value={newEducation.field}
                  onChange={(e) => setNewEducation(prev => ({ ...prev, field: e.target.value }))}
                  className="form-input"
                  placeholder="Computer Science"
                />
              </div>
              <div className="form-group">
                <label className="form-label">GPA (optional)</label>
                <input
                  type="text"
                  value={newEducation.gpa}
                  onChange={(e) => setNewEducation(prev => ({ ...prev, gpa: e.target.value }))}
                  className="form-input"
                  placeholder="3.8/4.0"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  value={newEducation.startDate}
                  onChange={(e) => setNewEducation(prev => ({ ...prev, startDate: e.target.value }))}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  value={newEducation.endDate}
                  onChange={(e) => setNewEducation(prev => ({ ...prev, endDate: e.target.value }))}
                  className="form-input"
                  disabled={newEducation.current}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">
                <input
                  type="checkbox"
                  checked={newEducation.current}
                  onChange={(e) => setNewEducation(prev => ({ ...prev, current: e.target.checked }))}
                />
                Currently studying here
              </label>
            </div>
            <button onClick={handleAddEducation} className="btn-add">
              <span>➕</span> Add Education
            </button>
            
            <div className="item-list">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="item-card">
                  <button
                    onClick={() => removeEducation(edu.id)}
                    className="item-remove"
                  >
                    ✕
                  </button>
                  <h4>{edu.degree} in {edu.field}</h4>
                  <p>{edu.institution}</p>
                  <p>{edu.startDate} - {edu.current ? 'Present' : edu.endDate}</p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'certifications' && (
          <div className="editor-section">
            <h3>🏆 Certifications</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Certification Name</label>
                <input
                  type="text"
                  value={newCertification.name}
                  onChange={(e) => setNewCertification(prev => ({ ...prev, name: e.target.value }))}
                  className="form-input"
                  placeholder="AWS Certified Developer"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Issuing Organization</label>
                <input
                  type="text"
                  value={newCertification.issuer}
                  onChange={(e) => setNewCertification(prev => ({ ...prev, issuer: e.target.value }))}
                  className="form-input"
                  placeholder="Amazon Web Services"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Issue Date</label>
                <input
                  type="date"
                  value={newCertification.date}
                  onChange={(e) => setNewCertification(prev => ({ ...prev, date: e.target.value }))}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Certificate URL (optional)</label>
                <input
                  type="url"
                  value={newCertification.link}
                  onChange={(e) => setNewCertification(prev => ({ ...prev, link: e.target.value }))}
                  className="form-input"
                  placeholder="https://certificate-url.com"
                />
              </div>
            </div>
            <button onClick={handleAddCertification} className="btn-add">
              <span>➕</span> Add Certification
            </button>
            
            <div className="item-list">
              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="item-card">
                  <button
                    onClick={() => removeCertification(cert.id)}
                    className="item-remove"
                  >
                    ✕
                  </button>
                  <h4>{cert.name}</h4>
                  <p>Issued by: {cert.issuer}</p>
                  <p>Date: {cert.date}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      🔗 View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Editor
