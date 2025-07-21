import { createContext, useContext, useState, ReactNode } from 'react'

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  bio: string
  profileImage: string
  title: string
  linkedin: string
  github: string
  website: string
}

export interface Skill {
  id: string
  name: string
  level: string
  category: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  github: string
  image: string
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
  current: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa: string
  current: boolean
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  link: string
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  skills: Skill[]
  projects: Project[]
  workExperience: WorkExperience[]
  education: Education[]
  certifications: Certification[]
}

interface PortfolioContextType {
  portfolioData: PortfolioData
  updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void
  addSkill: (skill: Omit<Skill, 'id'>) => void
  removeSkill: (id: string) => void
  addProject: (project: Omit<Project, 'id'>) => void
  removeProject: (id: string) => void
  addWorkExperience: (work: Omit<WorkExperience, 'id'>) => void
  removeWorkExperience: (id: string) => void
  addEducation: (education: Omit<Education, 'id'>) => void
  removeEducation: (id: string) => void
  addCertification: (certification: Omit<Certification, 'id'>) => void
  removeCertification: (id: string) => void
  exportPortfolio: () => void
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}

interface PortfolioProviderProps {
  children: ReactNode
}

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      bio: '',
      profileImage: '',
      title: '',
      linkedin: '',
      github: '',
      website: ''
    },
    skills: [],
    projects: [],
    workExperience: [],
    education: [],
    certifications: []
  })

  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    setPortfolioData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }))
  }

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skill,
      id: Date.now().toString()
    }
    setPortfolioData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill]
    }))
  }

  const removeSkill = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }))
  }

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = {
      ...project,
      id: Date.now().toString()
    }
    console.log('Adding project:', newProject)
    setPortfolioData(prev => {
      const updated = {
        ...prev,
        projects: [...prev.projects, newProject]
      }
      console.log('Updated projects array:', updated.projects)
      return updated
    })
  }

  const removeProject = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }))
  }

  const addWorkExperience = (work: Omit<WorkExperience, 'id'>) => {
    const newWork: WorkExperience = {
      ...work,
      id: Date.now().toString()
    }
    console.log('Adding work experience:', newWork)
    setPortfolioData(prev => {
      const updated = {
        ...prev,
        workExperience: [...prev.workExperience, newWork]
      }
      console.log('Updated work experience array:', updated.workExperience)
      return updated
    })
  }

  const removeWorkExperience = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter(work => work.id !== id)
    }))
  }

  const addEducation = (education: Omit<Education, 'id'>) => {
    const newEducation: Education = {
      ...education,
      id: Date.now().toString()
    }
    setPortfolioData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }))
  }

  const removeEducation = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }))
  }

  const addCertification = (certification: Omit<Certification, 'id'>) => {
    const newCertification: Certification = {
      ...certification,
      id: Date.now().toString()
    }
    setPortfolioData(prev => ({
      ...prev,
      certifications: [...prev.certifications, newCertification]
    }))
  }

  const removeCertification = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }))
  }

  const generatePortfolioHTML = (data: PortfolioData) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.personalInfo.name} - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background: #f8fafc; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; }
        .hero-content { max-width: 800px; padding: 2rem; }
        .hero-image { width: 200px; height: 200px; border-radius: 50%; margin: 0 auto 2rem; border: 4px solid rgba(255, 255, 255, 0.3); object-fit: cover; }
        .hero-title { font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem; }
        .hero-subtitle { font-size: 1.5rem; margin-bottom: 2rem; opacity: 0.9; }
        .hero-description { font-size: 1.2rem; margin-bottom: 3rem; opacity: 0.8; }
        .section { padding: 5rem 0; }
        .section:nth-child(even) { background: white; }
        .section-title { font-size: 2.5rem; font-weight: 700; text-align: center; margin-bottom: 3rem; position: relative; }
        .section-title::after { content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 60px; height: 4px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .grid { display: grid; gap: 2rem; }
        .grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        .grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
        .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; }
        .card h3 { color: #2563eb; margin-bottom: 1rem; }
        .skills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill { background: #f3f4f6; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; }
        .tech-tag { background: #2563eb; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem; }
        .links a { color: #2563eb; text-decoration: none; margin-right: 1rem; }
        .contact-info { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 2rem; }
        .contact-item { background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; }
        @media (max-width: 768px) { .hero-title { font-size: 2.5rem; } .container { padding: 0 1rem; } }
    </style>
</head>
<body>
    <div class="hero">
        <div class="hero-content">
            ${data.personalInfo.profileImage ? `<img src="${data.personalInfo.profileImage}" alt="${data.personalInfo.name}" class="hero-image">` : ''}
            <h1 class="hero-title">${data.personalInfo.name || 'Your Name'}</h1>
            <p class="hero-subtitle">${data.personalInfo.title || 'Professional Title'}</p>
            <p class="hero-description">${data.personalInfo.bio || 'Your professional bio goes here.'}</p>
            <div class="contact-info">
                ${data.personalInfo.email ? `<span class="contact-item">📧 ${data.personalInfo.email}</span>` : ''}
                ${data.personalInfo.phone ? `<span class="contact-item">📱 ${data.personalInfo.phone}</span>` : ''}
                ${data.personalInfo.location ? `<span class="contact-item">📍 ${data.personalInfo.location}</span>` : ''}
            </div>
        </div>
    </div>

    ${data.skills.length > 0 ? `
    <section class="section">
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <div class="skills">
                ${data.skills.map(skill => `<span class="skill">${skill.name} (${skill.level})</span>`).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${data.projects.length > 0 ? `
    <section class="section">
        <div class="container">
            <h2 class="section-title">Projects</h2>
            <div class="grid grid-2">
                ${data.projects.map(project => `
                <div class="card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${project.technologies.length > 0 ? `
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ` : ''}
                    <div class="links">
                        ${project.link ? `<a href="${project.link}" target="_blank">🔗 Live Demo</a>` : ''}
                        ${project.github ? `<a href="${project.github}" target="_blank">📁 GitHub</a>` : ''}
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${data.workExperience.length > 0 ? `
    <section class="section">
        <div class="container">
            <h2 class="section-title">Work Experience</h2>
            <div class="grid grid-2">
                ${data.workExperience.map(work => `
                <div class="card">
                    <h3>${work.position} at ${work.company}</h3>
                    <p><strong>${work.startDate} - ${work.current ? 'Present' : work.endDate}</strong></p>
                    <p>${work.description}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${data.education.length > 0 ? `
    <section class="section">
        <div class="container">
            <h2 class="section-title">Education</h2>
            <div class="grid grid-2">
                ${data.education.map(edu => `
                <div class="card">
                    <h3>${edu.degree} in ${edu.field}</h3>
                    <p><strong>${edu.institution}</strong></p>
                    <p>${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}</p>
                    ${edu.gpa ? `<p>GPA: ${edu.gpa}</p>` : ''}
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}

    ${data.certifications.length > 0 ? `
    <section class="section">
        <div class="container">
            <h2 class="section-title">Certifications</h2>
            <div class="grid grid-3">
                ${data.certifications.map(cert => `
                <div class="card">
                    <h3>${cert.name}</h3>
                    <p><strong>Issued by:</strong> ${cert.issuer}</p>
                    <p><strong>Date:</strong> ${cert.date}</p>
                    ${cert.link ? `<div class="links"><a href="${cert.link}" target="_blank">🔗 View Certificate</a></div>` : ''}
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    ` : ''}
</body>
</html>`
  }

  const exportPortfolio = () => {
    const portfolioHTML = generatePortfolioHTML(portfolioData)
    const blob = new Blob([portfolioHTML], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${portfolioData.personalInfo.name.replace(/\s+/g, '_')}_portfolio.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <PortfolioContext.Provider
      value={{
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
        removeCertification,
        exportPortfolio
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}
