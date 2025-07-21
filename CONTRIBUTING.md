# Contributing to Portfolio Builder

Thank you for your interest in contributing to Portfolio Builder! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

Before creating an issue, please:
1. Check if the issue already exists
2. Use the issue templates when available
3. Provide clear, detailed information

**Bug Report Template:**
```
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
- Browser: [e.g. Chrome, Firefox]
- Version: [e.g. 22]
- OS: [e.g. Windows, macOS, Linux]
```

### Feature Requests

When requesting features:
1. Explain the use case and problem it solves
2. Describe the proposed solution
3. Consider alternative solutions
4. Provide mockups or examples if helpful

## 🛠️ Development Setup

### Prerequisites
- Node.js 16+
- npm
- Git

### Setup Steps

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-builder.git
   cd portfolio-builder
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/AbhishekWorld2024/portfolio-builder.git
   ```

4. **Install dependencies**
   ```bash
   cd portfolio-builder-app
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow the existing component structure
- Use shadcn/ui components when possible
- Ensure responsive design

### State Management

- Use React hooks for state management
- Keep state as local as possible
- Use proper TypeScript types for state
- Implement proper error handling

### Styling Guidelines

- Use Tailwind CSS classes
- Avoid arbitrary values (e.g., `h-[600px]`)
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Test on multiple screen sizes

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, test:

**Input Forms:**
- [ ] Personal information saves correctly
- [ ] Skills can be added/removed
- [ ] Projects can be added/removed with all fields
- [ ] Work experience handles current job checkbox
- [ ] Certifications save with optional fields

**Live Preview:**
- [ ] Updates in real-time as data is entered
- [ ] All sections display correctly
- [ ] Styling matches design requirements
- [ ] Responsive on mobile/tablet/desktop

**Export Functionality:**
- [ ] HTML file downloads successfully
- [ ] Exported file opens correctly in browser
- [ ] All data appears in exported version
- [ ] Styling is preserved in export
- [ ] Links work in exported version

**UI/UX:**
- [ ] Professional appearance
- [ ] Intuitive navigation
- [ ] Proper error handling
- [ ] Loading states where appropriate
- [ ] Accessibility considerations

### Browser Testing

Test in major browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📋 Pull Request Process

### Before Submitting

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow coding guidelines
   - Test thoroughly
   - Update documentation if needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

Use conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add skill level selection dropdown
fix: resolve export button not working on mobile
docs: update installation instructions
style: improve responsive design for tablets
```

### Pull Request Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Manual testing completed
- [ ] All existing features still work
- [ ] New feature works as expected
- [ ] Responsive design tested
- [ ] Export functionality tested

## Screenshots
If applicable, add screenshots of your changes.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
- [ ] No console errors or warnings
```

## 🎯 Areas for Contribution

### High Priority
- Additional export formats (PDF, Word)
- Theme customization options
- Template variations
- Accessibility improvements
- Performance optimizations

### Medium Priority
- Social media integration
- Portfolio analytics
- Custom domain support
- SEO optimization features
- Multi-language support

### Low Priority
- Advanced animations
- Portfolio sharing features
- Collaboration tools
- Version history
- Cloud storage integration

## 🔍 Code Review Process

### What We Look For

1. **Functionality**: Does it work as intended?
2. **Code Quality**: Is it readable and maintainable?
3. **Performance**: Does it impact app performance?
4. **Security**: Are there any security concerns?
5. **Accessibility**: Is it accessible to all users?
6. **Documentation**: Is it properly documented?

### Review Timeline

- Initial review: Within 48 hours
- Follow-up reviews: Within 24 hours
- Final approval: When all requirements are met

## 🚀 Release Process

### Version Numbering

We follow Semantic Versioning (SemVer):
- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)

### Release Schedule

- Patch releases: As needed for critical bugs
- Minor releases: Monthly for new features
- Major releases: Quarterly for significant changes

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Pull Request Comments**: Code-specific discussions

### Response Times

- Issues: Within 48 hours
- Pull requests: Within 24 hours
- Discussions: Within 72 hours

## 🏆 Recognition

Contributors will be:
- Listed in the README contributors section
- Mentioned in release notes for significant contributions
- Invited to join the core team for exceptional contributions

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain professional communication

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Spam or off-topic content

### Enforcement

Violations will result in:
1. Warning for first offense
2. Temporary ban for repeated offenses
3. Permanent ban for severe violations

## 🙏 Thank You

Your contributions make Portfolio Builder better for everyone. Whether you're fixing bugs, adding features, improving documentation, or helping other users, every contribution is valuable and appreciated!

---

**Happy Contributing! 🎉**
