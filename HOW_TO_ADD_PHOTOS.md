# How to Add Your Photos

## Step 1: Add Photos to the `public` Folder

1. Create or navigate to the `public` folder in your project
2. Add your photos there:
   - **Your profile photo**: Name it something like `profile.jpg` or `manik.jpg`
   - **Project photos**: Name them like `jarvis-project.jpg`, `face-detector.jpg`, `web-crawler.jpg`

**Recommended image formats:**
- `.jpg` or `.jpeg` (best for photos)
- `.png` (best for graphics with transparency)
- `.webp` (modern, smaller file size)

**Recommended sizes:**
- Profile photo: 800x1000px or similar portrait orientation
- Project photos: 1200x800px or similar landscape orientation

## Step 2: Update Hero Component (Your Photo)

Open `components/Hero.tsx` and find the section around line 174-180.

**Replace this:**
```tsx
<div className="aspect-[3/4] bg-gradient-to-br from-purple-200 to-orange-200 flex items-center justify-center">
  <div className="text-center p-8">
    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-orange-400 flex items-center justify-center text-5xl">
      👨‍💻
    </div>
    <p className="text-gray-600">Your Photo Here</p>
  </div>
</div>
```

**With this:**
```tsx
<div className="aspect-[3/4] relative overflow-hidden">
  <img 
    src="/profile.jpg" 
    alt="Manik Sehrawat" 
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
```

**Change `/profile.jpg` to match your actual filename!**

## Step 3: Update Projects Component (Project Photos)

Open `components/Projects.tsx` and find the section around line 70-73.

**Replace this:**
```tsx
<div className="w-full h-48 bg-gradient-to-br from-purple-200 to-orange-200 rounded-lg mb-4 flex items-center justify-center">
  <span className="text-gray-500">Project Image</span>
</div>
```

**With this:**
```tsx
<div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
  <img 
    src="/jarvis-project.jpg" 
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
```

**For each project, use different image names:**
- Project 1 (Jarvis AI): `/jarvis-project.jpg`
- Project 2 (Face Expression Detector): `/face-detector.jpg`
- Project 3 (Java Web-Crawler): `/web-crawler.jpg`

## Step 4: Update Project Data with Image Paths

In `components/Projects.tsx`, update the projects array to include image paths:

```tsx
const projects: Project[] = [
  {
    title: "Jarvis AI",
    description: "...",
    tech: [...],
    github: "...",
    image: "/jarvis-project.jpg", // Add this
  },
  // ... etc
];
```

Then update the image rendering to use `project.image` instead of hardcoded paths.

## Quick Tips

1. **Optimize images**: Use tools like [TinyPNG](https://tinypng.com/) to compress images before adding them
2. **Naming**: Use lowercase, no spaces (use hyphens: `my-photo.jpg`)
3. **File size**: Keep images under 500KB for faster loading
4. **Aspect ratio**: 
   - Profile: 3:4 (portrait)
   - Projects: 16:9 or 4:3 (landscape)

## Example File Structure

```
public/
  ├── profile.jpg          (Your photo)
  ├── jarvis-project.jpg   (Project 1)
  ├── face-detector.jpg    (Project 2)
  └── web-crawler.jpg      (Project 3)
```





