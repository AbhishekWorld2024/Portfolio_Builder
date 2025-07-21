import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { User, Briefcase, Award, Code, FileText, Download, Eye, Plus, X } from 'lucide-react'
import './App.css'

interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  bio: string
  profileImage: string
}

interface Skill {
  id: string
  name: string
  level: string
}

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  github: string
}

interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
  current: boolean
}

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  link: string
}

interface PortfolioData {
  personalInfo: PersonalInfo
  skills: Skill[]
  projects: Project[]
  workExperience: WorkExperience[]
  certifications: Certification[]
}

function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      bio: '',
      profileImage: ''
    },
    skills: [],
    projects: [],
    workExperience: [],
    certifications: []
  })

  const [activeTab, setActiveTab] = useState('input')
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' })
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
    github: ''
  })
  const [newWork, setNewWork] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    current: false
  })
  const [newCertification, setNewCertification] = useState({
    name: '',
    issuer: '',
    date: '',
    link: ''
  })

  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    setPortfolioData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }))
  }

  const addSkill = () => {
    if (newSkill.name.trim()) {
      const skill: Skill = {
        id: Date.now().toString(),
        name: newSkill.name.trim(),
        level: newSkill.level
      }
      setPortfolioData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }))
      setNewSkill({ name: '', level: 'Beginner' })
    }
  }

  const removeSkill = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }))
  }

  const addProject = () => {
    if (newProject.title.trim()) {
      const project: Project = {
        id: Date.now().toString(),
        title: newProject.title.trim(),
        description: newProject.description.trim(),
        technologies: newProject.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
        link: newProject.link.trim(),
        github: newProject.github.trim()
      }
      setPortfolioData(prev => ({
        ...prev,
        projects: [...prev.projects, project]
      }))
      setNewProject({ title: '', description: '', technologies: '', link: '', github: '' })
    }
  }

  const removeProject = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }))
  }

  const addWorkExperience = () => {
    if (newWork.company.trim() && newWork.position.trim()) {
      const work: WorkExperience = {
        id: Date.now().toString(),
        company: newWork.company.trim(),
        position: newWork.position.trim(),
        startDate: newWork.startDate,
        endDate: newWork.current ? '' : newWork.endDate,
        description: newWork.description.trim(),
        current: newWork.current
      }
      setPortfolioData(prev => ({
        ...prev,
        workExperience: [...prev.workExperience, work]
      }))
      setNewWork({ company: '', position: '', startDate: '', endDate: '', description: '', current: false })
    }
  }

  const removeWorkExperience = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter(work => work.id !== id)
    }))
  }

  const addCertification = () => {
    if (newCertification.name.trim()) {
      const certification: Certification = {
        id: Date.now().toString(),
        name: newCertification.name.trim(),
        issuer: newCertification.issuer.trim(),
        date: newCertification.date,
        link: newCertification.link.trim()
      }
      setPortfolioData(prev => ({
        ...prev,
        certifications: [...prev.certifications, certification]
      }))
      setNewCertification({ name: '', issuer: '', date: '', link: '' })
    }
  }

  const removeCertification = (id: string) => {
    setPortfolioData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }))
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

  const generatePortfolioHTML = (data: PortfolioData) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.personalInfo.name} - Portfolio</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 40px; padding: 40px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px; }
        .header h1 { font-size: 3rem; margin-bottom: 10px; }
        .header p { font-size: 1.2rem; opacity: 0.9; }
        .contact-info { display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap; }
        .contact-info span { background: rgba(255,255,255,0.2); padding: 5px 15px; border-radius: 20px; }
        .section { margin-bottom: 40px; }
        .section h2 { font-size: 2rem; margin-bottom: 20px; color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px; }
        .bio { font-size: 1.1rem; line-height: 1.8; text-align: center; max-width: 800px; margin: 0 auto; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #f0f0f0; padding: 8px 16px; border-radius: 20px; font-weight: 500; }
        .projects, .work-experience, .certifications { display: grid; gap: 20px; }
        .card { background: white; border: 1px solid #e0e0e0; border-radius: 10px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .card h3 { color: #667eea; margin-bottom: 10px; }
        .card p { margin-bottom: 10px; }
        .technologies { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
        .tech { background: #667eea; color: white; padding: 4px 8px; border-radius: 15px; font-size: 0.8rem; }
        .links { margin-top: 10px; }
        .links a { color: #667eea; text-decoration: none; margin-right: 15px; }
        .links a:hover { text-decoration: underline; }
        @media (max-width: 768px) {
            .header h1 { font-size: 2rem; }
            .contact-info { flex-direction: column; align-items: center; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>${data.personalInfo.name}</h1>
            <div class="contact-info">
                ${data.personalInfo.email ? `<span>📧 ${data.personalInfo.email}</span>` : ''}
                ${data.personalInfo.phone ? `<span>📱 ${data.personalInfo.phone}</span>` : ''}
                ${data.personalInfo.location ? `<span>📍 ${data.personalInfo.location}</span>` : ''}
            </div>
        </header>

        ${data.personalInfo.bio ? `
        <section class="section">
            <h2>About Me</h2>
            <p class="bio">${data.personalInfo.bio}</p>
        </section>
        ` : ''}

        ${data.skills.length > 0 ? `
        <section class="section">
            <h2>Skills</h2>
            <div class="skills">
                ${data.skills.map(skill => `<span class="skill">${skill.name} (${skill.level})</span>`).join('')}
            </div>
        </section>
        ` : ''}

        ${data.projects.length > 0 ? `
        <section class="section">
            <h2>Projects</h2>
            <div class="projects">
                ${data.projects.map(project => `
                <div class="card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${project.technologies.length > 0 ? `
                    <div class="technologies">
                        ${project.technologies.map(tech => `<span class="tech">${tech}</span>`).join('')}
                    </div>
                    ` : ''}
                    <div class="links">
                        ${project.link ? `<a href="${project.link}" target="_blank">🔗 Live Demo</a>` : ''}
                        ${project.github ? `<a href="${project.github}" target="_blank">📁 GitHub</a>` : ''}
                    </div>
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        ${data.workExperience.length > 0 ? `
        <section class="section">
            <h2>Work Experience</h2>
            <div class="work-experience">
                ${data.workExperience.map(work => `
                <div class="card">
                    <h3>${work.position} at ${work.company}</h3>
                    <p><strong>${work.startDate} - ${work.current ? 'Present' : work.endDate}</strong></p>
                    <p>${work.description}</p>
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}

        ${data.certifications.length > 0 ? `
        <section class="section">
            <h2>Certifications</h2>
            <div class="certifications">
                ${data.certifications.map(cert => `
                <div class="card">
                    <h3>${cert.name}</h3>
                    <p><strong>Issued by:</strong> ${cert.issuer}</p>
                    <p><strong>Date:</strong> ${cert.date}</p>
                    ${cert.link ? `<div class="links"><a href="${cert.link}" target="_blank">🔗 View Certificate</a></div>` : ''}
                </div>
                `).join('')}
            </div>
        </section>
        ` : ''}
    </div>
</body>
</html>`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Portfolio Builder</h1>
          <p className="text-gray-600">Create your professional portfolio in minutes</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="input" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Input Data
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Live Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="input" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={portfolioData.personalInfo.name}
                      onChange={(e) => updatePersonalInfo('name', e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={portfolioData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={portfolioData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={portfolioData.personalInfo.location}
                      onChange={(e) => updatePersonalInfo('location', e.target.value)}
                      placeholder="New York, NY"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={portfolioData.personalInfo.bio}
                    onChange={(e) => updatePersonalInfo('bio', e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newSkill.name}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Skill name"
                    className="flex-1"
                  />
                  <select
                    value={newSkill.level}
                    onChange={(e) => setNewSkill(prev => ({ ...prev, level: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                  <Button onClick={addSkill}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.map(skill => (
                    <Badge key={skill.id} variant="secondary" className="flex items-center gap-2">
                      {skill.name} ({skill.level})
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-red-500"
                        onClick={() => removeSkill(skill.id)}
                      />
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={newProject.title}
                    onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Project title"
                  />
                  <Input
                    value={newProject.technologies}
                    onChange={(e) => setNewProject(prev => ({ ...prev, technologies: e.target.value }))}
                    placeholder="Technologies (comma separated)"
                  />
                  <Input
                    value={newProject.link}
                    onChange={(e) => setNewProject(prev => ({ ...prev, link: e.target.value }))}
                    placeholder="Live demo URL"
                  />
                  <Input
                    value={newProject.github}
                    onChange={(e) => setNewProject(prev => ({ ...prev, github: e.target.value }))}
                    placeholder="GitHub URL"
                  />
                </div>
                <Textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Project description"
                  rows={3}
                />
                <Button onClick={addProject} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
                <div className="space-y-2">
                  {portfolioData.projects.map(project => (
                    <div key={project.id} className="p-4 border rounded-lg bg-white">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold">{project.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                          {project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProject(project.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={newWork.company}
                    onChange={(e) => setNewWork(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Company name"
                  />
                  <Input
                    value={newWork.position}
                    onChange={(e) => setNewWork(prev => ({ ...prev, position: e.target.value }))}
                    placeholder="Position/Role"
                  />
                  <Input
                    type="date"
                    value={newWork.startDate}
                    onChange={(e) => setNewWork(prev => ({ ...prev, startDate: e.target.value }))}
                    placeholder="Start date"
                  />
                  <Input
                    type="date"
                    value={newWork.endDate}
                    onChange={(e) => setNewWork(prev => ({ ...prev, endDate: e.target.value }))}
                    placeholder="End date"
                    disabled={newWork.current}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="current"
                    checked={newWork.current}
                    onChange={(e) => setNewWork(prev => ({ ...prev, current: e.target.checked }))}
                  />
                  <Label htmlFor="current">Currently working here</Label>
                </div>
                <Textarea
                  value={newWork.description}
                  onChange={(e) => setNewWork(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Job description and responsibilities"
                  rows={3}
                />
                <Button onClick={addWorkExperience} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Work Experience
                </Button>
                <div className="space-y-2">
                  {portfolioData.workExperience.map(work => (
                    <div key={work.id} className="p-4 border rounded-lg bg-white">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold">{work.position} at {work.company}</h4>
                          <p className="text-sm text-gray-500">
                            {work.startDate} - {work.current ? 'Present' : work.endDate}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">{work.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeWorkExperience(work.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    value={newCertification.name}
                    onChange={(e) => setNewCertification(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Certification name"
                  />
                  <Input
                    value={newCertification.issuer}
                    onChange={(e) => setNewCertification(prev => ({ ...prev, issuer: e.target.value }))}
                    placeholder="Issuing organization"
                  />
                  <Input
                    type="date"
                    value={newCertification.date}
                    onChange={(e) => setNewCertification(prev => ({ ...prev, date: e.target.value }))}
                    placeholder="Issue date"
                  />
                  <Input
                    value={newCertification.link}
                    onChange={(e) => setNewCertification(prev => ({ ...prev, link: e.target.value }))}
                    placeholder="Certificate URL (optional)"
                  />
                </div>
                <Button onClick={addCertification} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Certification
                </Button>
                <div className="space-y-2">
                  {portfolioData.certifications.map(cert => (
                    <div key={cert.id} className="p-4 border rounded-lg bg-white">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
                          <p className="text-sm text-gray-500">Date: {cert.date}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCertification(cert.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Portfolio Preview</h2>
              <Button onClick={exportPortfolio} className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export as HTML
              </Button>
            </div>

            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <div className="text-center mb-8 p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                <h1 className="text-4xl font-bold mb-2">
                  {portfolioData.personalInfo.name || 'Your Name'}
                </h1>
                <div className="flex justify-center gap-4 mt-4 flex-wrap">
                  {portfolioData.personalInfo.email && (
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      📧 {portfolioData.personalInfo.email}
                    </span>
                  )}
                  {portfolioData.personalInfo.phone && (
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      📱 {portfolioData.personalInfo.phone}
                    </span>
                  )}
                  {portfolioData.personalInfo.location && (
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      📍 {portfolioData.personalInfo.location}
                    </span>
                  )}
                </div>
              </div>

              {portfolioData.personalInfo.bio && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">
                    About Me
                  </h2>
                  <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
                    {portfolioData.personalInfo.bio}
                  </p>
                </div>
              )}

              {portfolioData.skills.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.map(skill => (
                      <Badge key={skill.id} className="bg-gray-100 text-gray-800 px-4 py-2">
                        {skill.name} ({skill.level})
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {portfolioData.projects.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">
                    Projects
                  </h2>
                  <div className="grid gap-4">
                    {portfolioData.projects.map(project => (
                      <Card key={project.id}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-blue-600">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{project.description}</p>
                          {project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} className="bg-blue-600 text-white text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <div className="flex gap-4">
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                🔗 Live Demo
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                📁 GitHub
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {portfolioData.workExperience.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">
                    Work Experience
                  </h2>
                  <div className="grid gap-4">
                    {portfolioData.workExperience.map(work => (
                      <Card key={work.id}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-1 text-blue-600">
                            {work.position} at {work.company}
                          </h3>
                          <p className="text-gray-500 mb-3">
                            {work.startDate} - {work.current ? 'Present' : work.endDate}
                          </p>
                          <p className="text-gray-600">{work.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {portfolioData.certifications.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b-2 border-blue-600 pb-2">
                    Certifications
                  </h2>
                  <div className="grid gap-4">
                    {portfolioData.certifications.map(cert => (
                      <Card key={cert.id}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-1 text-blue-600">
                            {cert.name}
                          </h3>
                          <p className="text-gray-600">Issued by: {cert.issuer}</p>
                          <p className="text-gray-500 mb-2">Date: {cert.date}</p>
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              🔗 View Certificate
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
