# Task 5: Stats Overview Component

**Context:** This component displays aggregate statistics at the top of the dashboard: total project count, number of core languages, technical domains, and active years range. It calculates these dynamically from the projects data.

**Files to create:**
- `/Users/nickygrey/portfolio-presentation/src/components/StatsOverview.astro`

**Requirements:**

Create an Astro component that:
1. Imports the projects array from ../data/projects.js
2. Calculates statistics from the data
3. Displays them in a responsive grid layout
4. Uses Impeccable design tokens from global.css

## Statistics to Calculate

1. **Project Count** — Simply `projects.length` (should be 14)
2. **Core Languages** — Extract unique languages from tech stacks. Count: Python, JavaScript, TypeScript, Go, Swift, HTML/CSS (should be 6)
3. **Technical Domains** — Count unique domains from all projects (should be 5: mobile, web, ai-ml, blockchain, computer-vision)
4. **Active Years** — Parse year strings, find min and max, format as "YYYY–YYYY" range

## Layout

- Responsive grid: auto-fit columns, minimum 140px per stat
- Each stat has: large bold value, small uppercase label below
- Centered alignment
- Mobile: 2 columns, tablet/desktop: 4 columns

## Styling

Use CSS custom properties from global.css:
- Spacing: var(--space-*)
- Typography: var(--text-*)
- Colors: var(--color-text), var(--color-text-muted)

## Steps

- [ ] **Step 1: Create components directory**
```bash
mkdir -p /Users/nickygrey/portfolio-presentation/src/components
```

- [ ] **Step 2: Create StatsOverview.astro**

Write the component with:
- Import projects from ../data/projects.js
- Calculate all 4 statistics in the frontmatter
- Render responsive grid with stat cards
- Include scoped styles using design tokens
- Mobile-responsive breakpoints

- [ ] **Step 3: Verify component renders correctly**

Create a test page that imports and renders the component, check that stats calculate correctly (14 projects, 6 languages, 5 domains, year range).

- [ ] **Step 4: Commit**

```bash
git add src/components/StatsOverview.astro
git commit -m "feat: add stats overview component

- Calculate project count, languages, domains, years
- Display in responsive grid layout
- Apply Impeccable design tokens
- Mobile-optimized layout

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

## Global Constraints

- All 14 projects must be included with accurate data
- Spacing scale base unit: 4px (use var(--space-*))
- Typography base: 16px, ratio 1.25 (use var(--text-*))
- No placeholders in production code

## Interfaces

**Consumes:** 
- `projects` array from `../data/projects.js`
- Design tokens from global.css

**Produces:** 
- `<StatsOverview />` component displaying 4 statistics
- Self-contained with scoped styles

## Success Criteria

- Component correctly calculates all 4 stats
- Displays: 14 Projects, 6 Core Languages, 5 Technical Domains, year range
- Responsive grid layout (4 cols → 2 cols on mobile)
- Uses design tokens from global.css
- No hardcoded values for stats (dynamically calculated)
- Committed to git
