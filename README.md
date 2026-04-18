# 🤖 RoboSite - Modern Landing Page

![Project Status](https://img.shields.io/badge/status-final%20project-success?style=for-the-badge&logo=github)
![Tech Stack](https://img.shields.io/badge/tech-SCSS%20%7C%20Parcel%20%7C%20HTML-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> A sleek, responsive landing page built with modern web technologies for a
> robotics-themed project.

## 🌟 Overview

RoboSite is a stunning, mobile-first landing page designed to showcase
innovative projects in the robotics field. Featuring smooth animations,
responsive design, and clean architecture, this project demonstrates best
practices in web development fundamentals.

## ✨ Features

- 🎨 **Modern SCSS Architecture** - Organized styles with modular components
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Parcel bundler for optimal loading times
- 🎬 **Smooth Animations** - GSAP-powered interactive elements
- 🧪 **Automated Testing** - Jest test suite for reliable code quality
- 🛠️ **Developer Friendly** - Hot reloading, linting, and minification included

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd robo-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

   This will open your browser to `http://localhost:1234`

## 🏗️ Development

### Available Scripts

| Command                | Description                                 |
| ---------------------- | ------------------------------------------- |
| `npm start`            | Start development server with hot reloading |
| `npm run build`        | Build for production                        |
| `npm run lint`         | Lint and fix SCSS files                     |
| `npm test`             | Run test suite                              |
| `npm run build:styles` | Compile SCSS to CSS and minify              |

### Project Structure

```
robo-site/
├── src/
│   ├── index.html          # Main HTML page
│   └── styles/             # SCSS source files
│       ├── styles.scss     # Main stylesheet
│       └── mobile.scss     # Mobile-specific styles
├── dist/                   # Built assets (generated)
├── docs/                   # Documentation and preview
├── test/                   # Test files
└── package.json            # Project configuration
```

### Styling Guidelines

- All SCSS files must be placed in `src/styles/`
- Use BEM methodology for class naming
- Follow mobile-first responsive design principles
- CSS output files will be generated in `dist/`

## 🎨 Design Highlights

- **Hero Section**: Eye-catching header with navigation and call-to-action
- **Content Areas**: Well-structured text sections with engaging typography
- **Video Section**: Interactive play button with custom SVG graphics
- **Footer**: Clean footer with contact information and branding
- **Navigation**: Responsive hamburger menu for mobile devices

## 🧪 Testing

Run the test suite to ensure code quality:

```bash
npm test
```

Tests are configured with Jest and output JUnit reports for CI/CD integration.

## 📦 Build Process

For production deployment:

```bash
npm run build
```

This command will:

1. Bundle HTML, CSS, and JS with Parcel
2. Compile SCSS to optimized CSS
3. Minify stylesheets
4. Generate production-ready assets in `dist/`

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **SCSS** - Enhanced CSS with variables and mixins
- **Parcel** - Zero-config bundler
- **GSAP** - High-performance animations
- **Jest** - JavaScript testing framework
- **Stylelint** - SCSS linting and formatting
- **PostCSS** - CSS processing and optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## 🤝 Contributing

This is a final project submission. For improvements or suggestions, please
create an issue in the repository.

---

_Built with ❤️ for Fundamentals of Web Development_
