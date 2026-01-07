# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🎯 SEO optimized
- ♿ Accessible with semantic HTML
- 🚀 Fast and performant

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update your personal information:
   - Replace all `<<<PLACEHOLDER>>>` tags in the codebase with your actual information
   - Update `app/layout.tsx` with your name and role for SEO
   - Update all components with your personal details

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### Personal Information Placeholders

Search for and replace the following placeholders throughout the codebase:

- `<<<YOUR_FULL_NAME>>>` - Your full name
- `<<<YOUR_ROLE>>>` - Your main title/role (e.g., "AI Engineer • 3D Game & Web Developer")
- `<<<YOUR_SHORT_TAGLINE>>>` - Your one-line tagline
- `<<<YOUR_LOCATION>>>` - Your location (optional)
- `<<<MAIN_CTA_BUTTON_TEXT>>>` - Main CTA button text (e.g., "View My Work" or "Hire Me")
- `<<<SECONDARY_CTA_BUTTON_TEXT>>>` - Secondary CTA button text (e.g., "Download Resume")
- `<<<ABOUT_HEADING>>>` - About section heading (e.g., "About Me")
- `<<<ABOUT_PARAGRAPH>>>` - Your about paragraph
- `<<<YOUR_EMAIL>>>` - Your email address
- `<<<YOUR_GITHUB_URL>>>` - Your GitHub profile URL
- `<<<YOUR_LINKEDIN_URL>>>` - Your LinkedIn profile URL
- `<<<CONTACT_INVITATION_TEXT>>>` - Contact section invitation text
- `<<<PROJECT_1_NAME>>>`, `<<<PROJECT_1_DESCRIPTION>>>`, `<<<PROJECT_1_TECH>>>`, etc. - Project details

### Adding Your Photo

Replace the placeholder in `components/Hero.tsx` with your actual photo:

1. Add your image to `public/` directory
2. Update the image source in the Hero component

### Project Details

Update the projects array in `components/Projects.tsx` with your actual projects.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Services.tsx     # Services section
│   ├── Projects.tsx     # Projects section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── public/              # Static assets
└── package.json         # Dependencies
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## License

This project is open source and available under the MIT License.





