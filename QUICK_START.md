# Quick Start Guide

## Step-by-Step Setup

### 1. Install Node.js (if not already installed)

**Download Node.js:**
- Visit: https://nodejs.org/
- Download the **LTS version** (recommended)
- Run the installer
- Restart your terminal/command prompt

**Verify installation:**
```bash
node --version
npm --version
```

You should see version numbers (e.g., v20.x.x and 10.x.x)

### 2. Install Project Dependencies

Open terminal/command prompt in the project folder (`C:\Portfolio`) and run:

```bash
npm install
```

This will install all required packages. Wait for it to complete (may take 2-5 minutes).

### 3. Start the Development Server

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in Xs
```

### 4. Open Your Browser

Visit: **http://localhost:3000**

Your portfolio should now be running!

## Common Errors

### Error: "npm is not recognized"
→ **Solution:** Install Node.js (see Step 1 above)

### Error: "Port 3000 is already in use"
→ **Solution:** 
```bash
# Use a different port
npm run dev -- -p 3001
```
Then visit: http://localhost:3001

### Error: "Cannot find module"
→ **Solution:** 
```bash
# Delete and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Error: "EACCES" or permission errors
→ **Solution:** Run terminal as Administrator (Windows) or use `sudo` (Mac/Linux)

## What Should Work

✅ All sections visible (Hero, About, Skills, Projects, Contact, Footer)
✅ Smooth scrolling navigation
✅ Responsive design (try resizing browser)
✅ Animations on scroll
✅ Social links working
✅ Contact form (frontend only - needs backend for submission)

## Next Steps

1. **Add your photo:** Place an image in `public/` folder and update `components/Hero.tsx`
2. **Add resume:** Place PDF in `public/` and update download links
3. **Customize:** Adjust colors in `tailwind.config.ts` if needed

## Need Help?

Check `TROUBLESHOOTING.md` for more detailed solutions.

