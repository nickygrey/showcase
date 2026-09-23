# Task 3: Global CSS and Impeccable Design Tokens

**Context:** This task creates the global stylesheet with Impeccable design tokens that will be used throughout the dashboard. These tokens establish the visual foundation: spacing scale, typography scale, colors, and transitions.

**Files to create:**
- `/Users/nickygrey/portfolio-presentation/src/styles/global.css`

**Requirements:**

Create a comprehensive CSS file with design tokens following Impeccable principles: restrained palette, generous whitespace, real hierarchy through scale and weight (not color tricks).

## Design Tokens to Include

### Spacing Scale (base unit: 4px)
Custom properties for: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128

### Typography Scale (base: 16px, ratio: 1.25 Major Third)
Sizes: 12, 14, 16, 20, 25, 31, 39, 49, 61

### Color System
- Neutral base (light background, dark text)
- One accent color (used sparingly for CTAs, active filters, focus states)
- Status colors (subtle variations, not red/yellow/green)
- Tech badge colors (muted backgrounds, high contrast text)

### Transitions
- Duration: 200-300ms
- Easing: ease-out for expansions, ease-in-out for slides
- Properties: transform, opacity (avoid animating layout)

## Additional Requirements

- CSS reset and base styles
- Typography hierarchy (h1-h6)
- Focus states (2px solid accent, 2px offset)
- Button reset
- Reduced motion support (`@media (prefers-reduced-motion: reduce)`)
- Utility class for screen readers only (`.sr-only`)

## Steps

- [ ] **Step 1: Create styles directory**
```bash
mkdir -p /Users/nickygrey/portfolio-presentation/src/styles
```

- [ ] **Step 2: Create global.css**

Write complete CSS file with:
- Custom properties for all design tokens
- CSS reset
- Base styles for body, typography
- Focus states
- Button reset
- Reduced motion media query
- Utility classes

Use exact spacing values: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
Use exact typography values: 12, 14, 16, 20, 25, 31, 39, 49, 61

- [ ] **Step 3: Verify CSS is valid**

Check for syntax errors, ensure all custom properties defined.

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add Impeccable design tokens

- Create global CSS with spacing and typography scales
- Add restrained color palette
- Define transitions and focus states
- Include reduced motion support

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

## Global Constraints

- Spacing scale base unit: 4px (scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- Typography base: 16px, ratio 1.25 (Major Third)
- Transition duration: 200-300ms, easing: ease-out for expansions, ease-in-out for slides
- WCAG AA color contrast minimum
- Respect `prefers-reduced-motion` media query

## Interfaces

**Consumes:** None

**Produces:** 
- CSS custom properties for spacing scale (--space-*)
- CSS custom properties for typography scale (--text-*)
- CSS custom properties for colors (--color-*)
- CSS custom properties for transitions (--transition-*)
- Base styles and resets

## Success Criteria

- All design tokens defined as CSS custom properties
- Valid CSS syntax
- Includes reduced motion support
- Utility classes for accessibility
- Committed to git
