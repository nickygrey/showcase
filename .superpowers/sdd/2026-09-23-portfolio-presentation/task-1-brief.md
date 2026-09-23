# Task 1: Project Setup and Configuration

**Context:** This is the foundation task for building an interactive portfolio dashboard. This task sets up the Astro project structure with all necessary dependencies.

**Files to create:**
- `/Users/nickygrey/portfolio-presentation/package.json`
- `/Users/nickygrey/portfolio-presentation/astro.config.mjs`
- `/Users/nickygrey/portfolio-presentation/tsconfig.json`
- `/Users/nickygrey/portfolio-presentation/README.md`
- `/Users/nickygrey/portfolio-presentation/.gitignore`

**Requirements - read these first and use exact values verbatim:**

## Steps

- [ ] **Step 1: Create project directory** (already exists at `/Users/nickygrey/portfolio-presentation`)

- [ ] **Step 2: Initialize package.json**

```json
{
  "name": "portfolio-presentation",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.16.0",
    "lenis": "^1.1.13",
    "prismjs": "^1.29.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.0",
    "typescript": "^5.6.0"
  }
}
```

- [ ] **Step 3: Create astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
```

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

- [ ] **Step 5: Create README.md**

```markdown
# Interactive Portfolio Dashboard

Showcasing 14 development projects across AI/ML, Web, Mobile, Blockchain, and Computer Vision.

## Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:4321

## Build

\`\`\`bash
npm run build
\`\`\`

Output in `dist/` directory.

## Tech Stack

- Astro (static site generation)
- Lenis (smooth scrolling)
- Vanilla JavaScript (filtering, modals)
- Impeccable design principles
```

- [ ] **Step 6: Create .gitignore**

```
# dependencies
node_modules/

# build output
dist/
.astro/

# environment
.env
.env.local

# macOS
.DS_Store

# IDE
.vscode/
.idea/
```

- [ ] **Step 7: Install dependencies**

Run `npm install` and verify dependencies install successfully.

- [ ] **Step 8: Verify Astro runs**

Run `npm run dev` to verify the dev server starts on port 4321. Stop it after verification.

- [ ] **Step 9: Commit**

```bash
git add .
git commit -m "feat: initialize Astro project

- Set up package.json with Astro, Lenis, Prism.js
- Configure Astro for static output
- Add TypeScript configuration
- Add README and .gitignore

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

## Global Constraints (apply to all tasks)

- Node.js >=18.0.0 required for Astro
- Astro version >=4.0.0
- No React, Vue, or other framework components (vanilla JS only)
- No placeholders in production code (no "TODO", "TBD", "implement later")

## Interfaces

**Consumes:** None (initial setup)

**Produces:** Working Astro project that can run `npm run dev`

## Success Criteria

- All 5 config files created with exact content specified
- `npm install` completes without errors
- `npm run dev` starts dev server on port 4321
- Git repository initialized with initial commit
- Working directory is `/Users/nickygrey/portfolio-presentation`
