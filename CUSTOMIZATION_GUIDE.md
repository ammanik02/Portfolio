# Complete Customization Guide

## 1. Change Website Name/Title

### Browser Tab Title
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Custom Title Here",  // Change this
  description: "Your description here",
};
```

### Logo/Name in Navbar
Edit `components/Navbar.tsx` (around line 40):
```tsx
Manik.dev  // Change to your preferred name
```

### Footer Name
Edit `components/Footer.tsx`:
```tsx
Manik.dev  // Change to match navbar
```

## 2. Add Your Photo

### Step 1: Add Photo File
1. Place your photo in the `public` folder
2. Name it `profile.jpg` (or update the code to match your filename)

### Step 2: Update Hero Component
The code is already set up! Just add your photo file.

**File location:** `public/profile.jpg`

**If you want a different filename:**
Edit `components/Hero.tsx` line ~177:
```tsx
<img src="/your-filename.jpg" alt="Your Name" />
```

## 3. Add Project Photos

### Step 1: Add Project Images
Place images in the `public` folder:
- `jarvis-project.jpg` (for Jarvis AI project)
- `face-detector.jpg` (for Face Expression Detector)
- `web-crawler.jpg` (for Java Web-Crawler)

### Step 2: Update Image Names (if needed)
Edit `components/Projects.tsx` and change the image paths:
```tsx
image: "/your-project-image.jpg",
```

## 4. Responsive Design (Already Working!)

The website is **already fully responsive** and works on:
- ✅ Mobile phones (320px+)
- ✅ Tablets (768px+)
- ✅ Desktops (1024px+)
- ✅ Large screens (1280px+)

**Responsive features:**
- Mobile menu in navbar
- Stacked layouts on mobile
- Responsive text sizes
- Touch-friendly buttons
- Optimized images

**No changes needed** - it's already mobile-ready!

## 5. Image Optimization Tips

### Before Adding Photos:

1. **Resize images:**
   - Profile photo: 800x1000px (portrait)
   - Project photos: 1200x800px (landscape)

2. **Compress images:**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Keep file sizes under 500KB

3. **Use WebP format** (optional, best quality/size):
   - Convert to `.webp` format
   - Update file extensions in code

## 6. Testing on Different Devices

### Desktop Testing:
- Resize browser window
- Use browser DevTools (F12) → Device Toolbar

### Mobile Testing:
1. **Chrome DevTools:**
   - Press F12
   - Click device icon
   - Select device (iPhone, iPad, etc.)

2. **Real Device Testing:**
   - Deploy to Vercel/Netlify
   - Test on actual phone/tablet

## 7. Quick Checklist

- [ ] Add `profile.jpg` to `public/` folder
- [ ] Add project images to `public/` folder
- [ ] Update website title in `app/layout.tsx`
- [ ] Test on mobile (resize browser)
- [ ] Optimize images (compress)
- [ ] Verify all images load correctly

## Need Help?

- Check `HOW_TO_ADD_PHOTOS.md` for detailed photo instructions
- Check `TROUBLESHOOTING.md` for common issues





