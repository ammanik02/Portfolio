# How to Use a Custom Domain Name Instead of localhost

## Option 1: Use Custom Port (Easiest)

Edit `package.json` and change the dev script:

```json
"scripts": {
  "dev": "next dev -p 3000",
  "dev:custom": "next dev -p 8080"
}
```

Then run: `npm run dev:custom`
Access at: `http://localhost:8080`

## Option 2: Use Custom Domain via Hosts File (Advanced)

### Step 1: Edit Windows Hosts File

1. Open Notepad as Administrator:
   - Right-click Notepad
   - Select "Run as administrator"

2. Open hosts file:
   - File → Open
   - Navigate to: `C:\Windows\System32\drivers\etc\`
   - Change file type to "All Files"
   - Open `hosts` file

3. Add this line at the bottom:
   ```
   127.0.0.1    manik-portfolio.local
   ```
   (Replace `manik-portfolio.local` with your preferred name)

4. Save the file

### Step 2: Update Next.js Config

Edit `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this for custom domain
  async rewrites() {
    return [];
  },
};

export default nextConfig;
```

### Step 3: Run Server

```bash
npm run dev
```

### Step 4: Access Your Site

Open browser and go to:
```
http://manik-portfolio.local:3000
```

## Option 3: Use Environment Variable

Create `.env.local` file in project root:

```
HOSTNAME=manik-portfolio.local
PORT=3000
```

Then update `package.json`:

```json
"dev": "next dev -H manik-portfolio.local"
```

## Quick Note

**You cannot completely remove "localhost"** - it's a system-level hostname. But you can:
- Use a custom domain (via hosts file)
- Use a different port
- Deploy to a real domain (Vercel, Netlify, etc.)

## Recommended: Deploy to Vercel

For a real custom domain:
1. Push code to GitHub
2. Connect to Vercel
3. Get free domain: `yourname.vercel.app`
4. Or add custom domain

This gives you a real URL like: `https://manik-portfolio.vercel.app`





