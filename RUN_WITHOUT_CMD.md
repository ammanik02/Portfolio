# How to Run Website Without Command Prompt

## Method 1: Double-Click Batch File (Easiest)

1. **Double-click `START_SERVER.bat`** in your project folder
2. A command window will open and start the server
3. Your browser will automatically open (or go to http://localhost:3000)
4. To stop: Close the command window or press Ctrl+C

## Method 2: Create Desktop Shortcut

1. Right-click `START_SERVER.bat`
2. Select "Create shortcut"
3. Drag shortcut to Desktop
4. Double-click to start server anytime!

## Method 3: Use VBScript (Hidden Window)

1. **Double-click `START_SERVER.vbs`**
2. Server runs in background (no visible window)
3. Open browser manually to http://localhost:3000
4. To stop: Open Task Manager → End "node.exe" process

## Method 4: Use VS Code Tasks

If you use VS Code:

1. Create `.vscode/tasks.json`:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Dev Server",
      "type": "shell",
      "command": "npm run dev",
      "problemMatcher": []
    }
  ]
}
```

2. Press `Ctrl+Shift+P`
3. Type "Run Task"
4. Select "Start Dev Server"

## Method 5: Use Windows Task Scheduler

1. Open Task Scheduler
2. Create Basic Task
3. Name: "Start Portfolio"
4. Trigger: When I log on
5. Action: Start a program
6. Program: `npm`
7. Arguments: `run dev`
8. Start in: `C:\Portfolio`

## Method 6: Install as Windows Service (Advanced)

Use `node-windows` package to install as service:

```bash
npm install -g node-windows
```

Then create service script (advanced setup required)

## Recommended: Method 1 (Batch File)

**Just double-click `START_SERVER.bat`** - it's the simplest!

The batch file will:
- ✅ Start the server automatically
- ✅ Show you the URL
- ✅ Keep running until you close it

## Troubleshooting

**If batch file doesn't work:**
- Make sure Node.js is installed
- Make sure you've run `npm install` at least once
- Check that you're in the correct folder

**To stop the server:**
- Close the command window
- Or press Ctrl+C in the window



