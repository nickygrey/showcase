# Task 2: Project Data Structure

**Context:** This task creates the structured data file containing all 14 development projects. This data powers the entire dashboard - every card, filter, and modal derives from this single source.

**Files to create:**
- `/Users/nickygrey/portfolio-presentation/src/data/projects.js`

**Requirements - use these exact values:**

The projects.js file exports a single array named `projects` containing 14 project objects. Each project must have this exact structure:

```javascript
{
  name: string,                    // Project name
  tagline: string,                 // One-sentence description
  domain: string[],                // ["mobile", "web", "ai-ml", "blockchain", "computer-vision"]
  techStack: {
    primary: string[],             // 3-4 most important technologies
    full: string[]                 // Complete tech stack
  },
  status: string,                  // "complete", "in-progress", "prototype", "educational"
  year: string,                    // Year as string (e.g., "2024")
  features: string[],              // 5-7 key feature descriptions
  deepDive: {
    purpose: string,               // 2-3 sentences: what problem it solves
    architecture: string,          // 3-4 sentences: how it's built
    highlights: string,            // 3-4 sentences: interesting technical decisions
    lessons: string,               // 3-4 sentences: what you learned
    codeSnippets: [                // 0-3 code examples
      {
        language: string,          // e.g., "javascript", "python"
        title: string,             // Short descriptor
        code: string               // The actual code
      }
    ]
  }
}
```

## All 14 Projects

Your task is to create this file with all 14 projects using the data from the comprehensive project catalog. The projects are:

1. Momentum (iOS Habit Tracker)
2. Advanced Cryptocurrency Blockchain  
3. YOLO Vision Lab
4. Image Agent
5. My Portfolio (Astro Blog)
6. Movie Adviser App
7. New Creative Website
8. Website for Workshop
9. DLH Machine Learning
10. DLH Modern AI
11. Computer Vision Guide
12. Momentum Full-Stack
13. Momentum Frontend Prototype
14. Image Agent Momentum

For each project, extract accurate data from the exploration agent's catalog report (attached separately). Use real features, real tech stacks, and write compelling deep-dive content based on what each project actually does.

## Steps

- [ ] **Step 1: Create data directory**
```bash
mkdir -p /Users/nickygrey/portfolio-presentation/src/data
```

- [ ] **Step 2: Write projects.js with all 14 projects**

Create the complete file with all projects. Each project should have:
- Accurate tech stack from actual package.json/requirements.txt
- Real features extracted from README and code
- Compelling purpose/architecture/highlights/lessons in deepDive
- 1-2 meaningful code snippets where available
- Correct status and year

- [ ] **Step 3: Verify data structure**

Check that:
- File exports `projects` array
- All 14 projects present
- Each has required fields
- Valid JavaScript syntax
- No placeholder text ("TBD", "TODO", etc.)

- [ ] **Step 4: Commit**

```bash
git add src/data/projects.js
git commit -m "feat: add project data structure

- Create projects.js with all 14 projects
- Include complete tech stacks, features, deep dive content
- Add code snippets for technical depth

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

## Global Constraints

- All 14 projects must be included with accurate data
- No placeholders in production code (no "TODO", "TBD", "implement later")
- Use exact domain values: "mobile", "web", "ai-ml", "blockchain", "computer-vision"
- Use exact status values: "complete", "in-progress", "prototype", "educational"

## Interfaces

**Consumes:** Project catalog data from exploration agent

**Produces:** 
- `export const projects = [...]` — array of 14 project objects
- Each object has: name, tagline, domain, techStack (primary, full), status, year, features, deepDive (purpose, architecture, highlights, lessons, codeSnippets)

## Success Criteria

- projects.js exports valid array of 14 projects
- Each project has complete, accurate data
- No placeholder text
- Valid JavaScript that can be imported
- Committed to git
