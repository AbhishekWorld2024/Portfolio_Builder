# Portfolio Builder

A modern, responsive ReactJS application that allows students and professionals to create beautiful portfolios in minutes. Features real-time preview and export functionality to generate standalone HTML websites.

## 🚀 Features

- **Interactive Form Builder**: Easy-to-use forms for entering personal information, skills, projects, work experience, and certifications
- **Live Preview**: Real-time preview of your portfolio as you type
- **Professional Templates**: Clean, modern design with gradient headers and responsive layout
- **Export Functionality**: Generate standalone HTML files that can be hosted anywhere
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Technology Badges**: Automatic styling for project technologies
- **Dynamic Sections**: Add/remove skills, projects, work experience, and certifications as needed

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/AbhishekWorld2024/portfolio-builder.git
cd portfolio-builder
```

### 2. Install Dependencies

```bash
cd portfolio-builder-app
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📖 Usage Guide

### Getting Started

1. **Personal Information**: Fill in your basic details including name, email, phone, location, and bio
2. **Skills**: Add your technical and professional skills with proficiency levels
3. **Projects**: Showcase your work with descriptions, technologies used, and links
4. **Work Experience**: Add your professional experience with dates and descriptions
5. **Certifications**: Include your professional certifications and credentials

### Live Preview

- Switch to the "Live Preview" tab to see your portfolio in real-time
- All changes are reflected immediately as you type
- Preview shows exactly how your exported portfolio will look

### Exporting Your Portfolio

1. Complete filling out your information
2. Switch to the "Live Preview" tab
3. Click the "Export as HTML" button
4. A standalone HTML file will be downloaded
5. Upload this file to any web hosting service to make your portfolio live

## 🎨 Customization

The exported HTML includes embedded CSS with:
- Professional gradient headers
- Responsive grid layouts
- Modern typography
- Hover effects and transitions
- Mobile-optimized design

## 📁 Project Structure

```
portfolio-builder/
├── portfolio-builder-app/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── App.tsx          # Main application component
│   │   ├── App.css          # Global styles
│   │   └── main.tsx         # Application entry point
│   ├── public/              # Static assets
│   ├── dist/                # Production build output
│   ├── package.json         # Dependencies and scripts
│   └── vite.config.ts       # Vite configuration
├── README.md                # This file
└── CONTRIBUTING.md          # Contribution guidelines
```

## 🔧 Available Scripts

In the `portfolio-builder-app` directory:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Explained

### Form Validation
- Required fields are validated before adding items
- Email format validation for contact information
- Date validation for work experience and certifications

### Data Management
- All data is stored in React state
- Real-time updates across input and preview tabs
- Add/remove functionality for dynamic sections

### Export System
- Generates complete HTML with embedded CSS
- No external dependencies in exported file
- Professional styling with responsive design
- Optimized for web hosting and sharing

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

## 🎯 Target Users

### Students
- Create portfolios for internship applications
- Showcase academic projects and achievements
- Highlight relevant coursework and skills
- Professional presentation for career fairs

### Professionals
- Career transition portfolios
- Freelancer showcase websites
- Professional networking profiles
- Job application supplements

## 🚀 Deployment Options

### Static Hosting Services
- **Netlify**: Drag and drop the exported HTML file
- **Vercel**: Upload through their dashboard
- **GitHub Pages**: Commit the HTML file to a repository
- **AWS S3**: Upload to an S3 bucket with static hosting enabled

### Traditional Web Hosting
- Upload the exported HTML file to any web server
- Works with shared hosting, VPS, or dedicated servers
- No server-side requirements

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to your branch: `git push origin feature-name`
6. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports & Feature Requests

Please use the GitHub Issues tab to report bugs or request new features. When reporting bugs, please include:

- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Browser and version information
- Screenshots if applicable

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check existing issues for solutions
- Review the documentation

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ for students and professionals worldwide**
