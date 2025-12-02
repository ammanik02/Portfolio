# Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: "npm is not recognized"
**Problem:** Node.js/npm is not installed on your system.

**Solution:**
1. Download and install Node.js from [nodejs.org](https://nodejs.org/)
2. Choose the LTS (Long Term Support) version
3. Restart your terminal/command prompt after installation
4. Verify installation: `node --version` and `npm --version`

### Issue 2: "Cannot find module" errors
**Problem:** Dependencies are not installed.

**Solution:**
```bash
npm install
```

### Issue 3: Port 3000 already in use
**Problem:** Another application is using port 3000.

**Solution:**
```bash
# Option 1: Kill the process using port 3000
# Windows PowerShell:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Option 2: Run on a different port
npm run dev -- -p 3001
```

### Issue 4: Build errors
**Problem:** TypeScript or build errors.

**Solution:**
1. Check for TypeScript errors:
```bash
npx tsc --noEmit
```

2. Clear Next.js cache and rebuild:
```bash
rm -rf .next
npm run build
```

### Issue 5: Styles not loading
**Problem:** Tailwind CSS not compiling.

**Solution:**
1. Verify `tailwind.config.ts` and `postcss.config.mjs` exist
2. Restart the dev server:
```bash
npm run dev
```

### Issue 6: "Module not found" errors
**Problem:** Missing dependencies or incorrect imports.

**Solution:**
1. Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Check that all imports use correct paths (e.g., `@/components/...`)

### Issue 7: Framer Motion errors
**Problem:** Animation library not working.

**Solution:**
```bash
npm install framer-motion
```

## Quick Fix Checklist

- [ ] Node.js 18+ is installed (`node --version`)
- [ ] npm is installed (`npm --version`)
- [ ] Dependencies are installed (`npm install`)
- [ ] No TypeScript errors
- [ ] Port 3000 is available
- [ ] All files are saved

## Getting Help

If you're still experiencing issues:

1. Check the terminal/console for specific error messages
2. Verify all files are saved
3. Try clearing the cache: `rm -rf .next node_modules` then `npm install`
4. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## Running the Site

Once everything is set up:

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

