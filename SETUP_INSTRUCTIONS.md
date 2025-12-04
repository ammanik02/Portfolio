# Quick Setup Instructions

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Personalize Your Portfolio

1. Open `PERSONALIZE.md` for a complete list of placeholders to replace
2. Use Find & Replace in your editor to replace all `<<<PLACEHOLDER>>>` tags
3. Key files to update:
   - `app/layout.tsx` - SEO metadata
   - `components/Hero.tsx` - Name, role, tagline, social links
   - `components/About.tsx` - About section content
   - `components/Projects.tsx` - Your project details
   - `components/Contact.tsx` - Contact information

## Step 3: Add Your Photo (Optional)

1. Add your photo to the `public/` directory
2. Update `components/Hero.tsx` to use your image:
   ```tsx
   <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover rounded-2xl" />
   ```

## Step 4: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Step 5: Build for Production

```bash
npm run build
npm start
```

## Deploy

You can deploy to Vercel, Netlify, or any platform that supports Next.js:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

---

**Note:** Make sure to replace ALL placeholders before deploying to production.



