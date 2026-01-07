# Quick Fixes Guide

## ✅ Profile Image Fixed!

The profile image should now work! The issue was that the placeholder was covering the image. It's now fixed.

**To verify:**
1. Make sure `profile.jpg` is in the `public` folder ✅ (you already have it!)
2. Restart your dev server
3. The image should now display

## 🚀 Run Without Command Prompt

### Easiest Method: Double-Click Batch File

**Just double-click `START_SERVER.bat`** in your project folder!

This will:
- ✅ Start the server automatically
- ✅ Show you the URL (http://localhost:3000)
- ✅ Keep running until you close the window

**To stop:** Close the window or press Ctrl+C

### Create Desktop Shortcut

1. Right-click `START_SERVER.bat`
2. Select "Create shortcut"
3. Drag to Desktop
4. Double-click anytime to start!

## 🌐 Change Localhost Name

### Option 1: Use Different Port (Easiest)

Edit `package.json`:
```json
"scripts": {
  "dev": "next dev -p 8080"
}
```

Then access at: `http://localhost:8080`

### Option 2: Custom Domain (Advanced)

1. Edit Windows hosts file (as Administrator):
   - Location: `C:\Windows\System32\drivers\etc\hosts`
   - Add: `127.0.0.1    manik-portfolio.local`

2. Access at: `http://manik-portfolio.local:3000`

**Note:** You can't completely remove "localhost" - it's a system hostname. But you can use a custom domain or different port.

### Option 3: Deploy Online (Best for Real Domain)

Deploy to Vercel for a real URL:
- `https://manik-portfolio.vercel.app`
- Or add your own custom domain

See `CUSTOM_DOMAIN_SETUP.md` for detailed instructions.

## 📋 Summary

1. **Profile Image:** ✅ Fixed! Should work now
2. **Run Without CMD:** ✅ Double-click `START_SERVER.bat`
3. **Change URL:** Use different port or custom domain (see above)

## 🎯 Quick Start

1. Double-click `START_SERVER.bat`
2. Wait for "Ready" message
3. Open browser to http://localhost:3000
4. Done! 🎉





