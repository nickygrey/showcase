# Task 4: Base Layout with Lenis Integration

**Context:** This task creates the foundational Astro layout that wraps all pages and initializes Lenis smooth scrolling. This layout will import the global styles and set up the page structure.

**Files to create:**
- `/Users/nickygrey/portfolio-presentation/src/layouts/PortfolioLayout.astro`
- `/Users/nickygrey/portfolio-presentation/src/scripts/lenis-init.js`

**Requirements:**

Create an Astro layout component that serves as the base template for all pages, plus a JavaScript module that initializes and manages Lenis smooth scroll.

## PortfolioLayout.astro

Must include:
- HTML5 doctype and semantic structure
- Import global.css
- Accept a `title` prop (TypeScript interface)
- Meta tags: charset, viewport
- Google Fonts: Inter (weights 400, 600, 700) and JetBrains Mono
- Slot for page content
- Client-side script that imports and initializes Lenis on DOMContentLoaded

## lenis-init.js

Must export:
- `initLenis()` function - creates and starts Lenis instance
- `pauseLenis()` function - stops Lenis
- `resumeLenis()` function - restarts Lenis
- Expose `window.lenis` globally for modal control

Lenis configuration:
- duration: 1.2
- easing: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- smoothWheel: true
- wheelMultiplier: 1
- touchMultiplier: 2

Must check for `prefers-reduced-motion` and destroy Lenis if user prefers reduced motion.

Must use requestAnimationFrame loop to drive Lenis.

## Steps

- [ ] **Step 1: Create layouts and scripts directories**
```bash
mkdir -p /Users/nickygrey/portfolio-presentation/src/layouts
mkdir -p /Users/nickygrey/portfolio-presentation/src/scripts
```

- [ ] **Step 2: Create lenis-init.js**

Write the JavaScript module with:
- Import Lenis from 'lenis'
- initLenis() function that creates instance, checks reduced motion, starts RAF loop
- pauseLenis() and resumeLenis() helper functions
- Expose window.lenis globally

- [ ] **Step 3: Create PortfolioLayout.astro**

Write the Astro component with:
- TypeScript interface for Props (title: string)
- HTML structure with proper meta tags
- Import global.css
- Link Google Fonts (Inter + JetBrains Mono)
- Slot for content
- Client-side script that imports lenis-init.js and calls initLenis() on DOMContentLoaded

- [ ] **Step 4: Verify Lenis initializes**

Create a simple test page to verify the layout works and Lenis initializes without errors.

- [ ] **Step 5: Commit**

```bash
git add src/layouts/PortfolioLayout.astro src/scripts/lenis-init.js
git commit -m "feat: add base layout with Lenis smooth scroll

- Create PortfolioLayout with global styles
- Initialize Lenis with reduced motion support
- Expose lenis globally for modal control
- Add Inter and JetBrains Mono fonts

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

## Global Constraints

- Respect `prefers-reduced-motion` media query
- No placeholders in production code

## Interfaces

**Consumes:** 
- global.css (design tokens)
- lenis package (installed in Task 1)

**Produces:**
- `PortfolioLayout` component that wraps page content
- `window.lenis` global for pause/resume
- `initLenis()`, `pauseLenis()`, `resumeLenis()` functions exported from lenis-init.js

## Success Criteria

- Layout renders with proper HTML structure
- Global styles imported
- Fonts load from Google Fonts
- Lenis initializes on page load
- Reduced motion respected
- Smooth scrolling works
- Committed to git
