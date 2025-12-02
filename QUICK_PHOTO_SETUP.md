# Quick Photo Setup Guide

## ✅ What's Already Done

1. ✅ **Responsive Design** - Website works on all devices (mobile, tablet, desktop)
2. ✅ **Photo Support** - Code is ready for your photos
3. ✅ **Image Fallbacks** - Placeholders show if images aren't added yet

## 📸 How to Add Your Photos (3 Simple Steps)

### Step 1: Prepare Your Photos

**Profile Photo:**
- Size: 800x1000px (portrait orientation)
- Format: JPG or PNG
- Name it: `profile.jpg`

**Project Photos:**
- Size: 1200x800px (landscape orientation)  
- Format: JPG or PNG
- Names:
  - `jarvis-project.jpg` (for Jarvis AI)
  - `face-detector.jpg` (for Face Expression Detector)
  - `web-crawler.jpg` (for Java Web-Crawler)

### Step 2: Add Photos to Project

1. Open the `public` folder in your project
2. Copy your photos into this folder
3. Make sure filenames match exactly (case-sensitive!)

**Example:**
```
C:\Portfolio\public\
  ├── profile.jpg          ← Your photo here
  ├── jarvis-project.jpg   ← Project 1 photo
  ├── face-detector.jpg   ← Project 2 photo
  └── web-crawler.jpg     ← Project 3 photo
```

### Step 3: Done! 

The website will automatically use your photos. No code changes needed!

**If you want different filenames:**
- Edit `components/Hero.tsx` line 179: Change `/profile.jpg` to your filename
- Edit `components/Projects.tsx` lines 20, 27, 34: Change image paths

## 🎨 Change Website Name

### Browser Tab Title
Edit `app/layout.tsx` line 5:
```tsx
title: "Your New Title Here",
```

### Logo in Navbar
Edit `components/Navbar.tsx` line ~40:
```tsx
Manik.dev  // Change to your name
```

### Footer
Edit `components/Footer.tsx` line 12:
```tsx
Manik.dev  // Change to match navbar
```

## 📱 Responsive Design

**Already working!** The site is fully responsive:
- ✅ Mobile phones (320px and up)
- ✅ Tablets (768px and up)  
- ✅ Desktops (1024px and up)
- ✅ Large screens (1280px and up)

**Test it:**
1. Open your site in browser
2. Press F12 (open DevTools)
3. Click the device icon (mobile/tablet view)
4. Resize the window to see it adapt

## 🚀 Quick Tips

1. **Optimize images first:**
   - Use [TinyPNG.com](https://tinypng.com) to compress
   - Keep files under 500KB for fast loading

2. **File naming:**
   - Use lowercase
   - No spaces (use hyphens: `my-photo.jpg`)
   - Use `.jpg` or `.png` extensions

3. **If images don't show:**
   - Check filename spelling (case-sensitive!)
   - Make sure files are in `public/` folder
   - Clear browser cache (Ctrl+F5)

## 📋 Checklist

- [ ] Add `profile.jpg` to `public/` folder
- [ ] Add `jarvis-project.jpg` to `public/` folder
- [ ] Add `face-detector.jpg` to `public/` folder
- [ ] Add `web-crawler.jpg` to `public/` folder
- [ ] Update website name (optional)
- [ ] Test on mobile device/browser
- [ ] Compress images for faster loading

## Need More Help?

- See `HOW_TO_ADD_PHOTOS.md` for detailed instructions
- See `CUSTOMIZATION_GUIDE.md` for advanced customization

