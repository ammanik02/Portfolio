# Personalization Guide

This file lists all the placeholders you need to replace with your personal information.

## Quick Replace Guide

Use your editor's find-and-replace feature to replace these placeholders:

### Basic Information
- `<<<YOUR_FULL_NAME>>>` → Your full name (e.g., "John Doe")
- `<<<YOUR_ROLE>>>` → Your main title/role (e.g., "AI Engineer • 3D Game & Web Developer")
- `<<<YOUR_SHORT_TAGLINE>>>` → Your one-line tagline (e.g., "I build AI tools, 3D experiences, and modern web apps.")
- `<<<YOUR_LOCATION>>>` → Your location (optional, leave empty if not needed)

### CTA Buttons
- `<<<MAIN_CTA_BUTTON_TEXT>>>` → Main CTA button text (e.g., "View My Work" or "Hire Me")
- `<<<SECONDARY_CTA_BUTTON_TEXT>>>` → Secondary CTA button text (e.g., "Download Resume")

### About Section
- `<<<ABOUT_HEADING>>>` → About section heading (e.g., "About Me")
- `<<<ABOUT_PARAGRAPH>>>` → Your about paragraph (2-4 sentences)

### Contact Information
- `<<<YOUR_EMAIL>>>` → Your email address
- `<<<YOUR_GITHUB_URL>>>` → Your GitHub profile URL (e.g., "https://github.com/yourusername")
- `<<<YOUR_LINKEDIN_URL>>>` → Your LinkedIn profile URL (e.g., "https://linkedin.com/in/yourusername")
- `<<<CONTACT_INVITATION_TEXT>>>` → Contact section invitation text (1-2 lines)

### Projects
Replace these for each project (1, 2, 3):

- `<<<PROJECT_1_NAME>>>` → Project 1 title
- `<<<PROJECT_1_DESCRIPTION>>>` → Project 1 description (1-2 lines)
- `<<<PROJECT_1_TECH>>>` → Project 1 tech stack (comma-separated string, e.g., "Python, OpenAI API, Streamlit" - will be split into individual badges)
- `<<<PROJECT_1_GITHUB_LINK>>>` → Project 1 GitHub link (or empty string "")
- `<<<PROJECT_1_LIVE_LINK>>>` → Project 1 live demo link (or empty string "")

Repeat for PROJECT_2 and PROJECT_3.

## Files to Update

1. **app/layout.tsx** - Update metadata (title and description)
2. **components/Navbar.tsx** - Logo text
3. **components/Hero.tsx** - Name, role, tagline, CTA buttons, social links
4. **components/About.tsx** - About heading and paragraph
5. **components/Projects.tsx** - All project details
6. **components/Contact.tsx** - Email, social links, contact text
7. **components/Footer.tsx** - Name and role

## Additional Customization

### Add Your Photo
1. Add your photo to `public/` directory (e.g., `public/profile.jpg`)
2. Update `components/Hero.tsx` - replace the placeholder div with:
```tsx
<img 
  src="/profile.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover rounded-2xl"
/>
```

### Update Resume Download Link
In `components/Hero.tsx` and `components/Contact.tsx`, update the resume download link:
```tsx
<a href="/resume.pdf" download>
  Download Resume
</a>
```

### Customize Colors
Edit `tailwind.config.ts` to change the gradient colors:
```ts
colors: {
  primary: {
    purple: "#YOUR_PURPLE_COLOR",
    orange: "#YOUR_ORANGE_COLOR",
  },
}
```

