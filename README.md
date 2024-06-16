# start-next-base

A baseline Next.js 14 project with Docker, ESLint, TailwindCSS, Prettier, pnpm for build, TypeScript, and Husky with pre-commit hook.

### Naming Conventions

**File Naming**

Components: Use PascalCase (e.g., IndustryList.tsx, IndustryDetails.tsx). This convention helps distinguish components from other types of files.

Hooks: Use camelCase (e.g., useIndustries.ts, useIndustry.ts).

Utility Files: Use camelCase (e.g., apiClient.ts, reactQuery.ts).

Page Files: Use lowercase with dashes (e.g., page.tsx for the root page, [id]/page.tsx for dynamic routes).

Example:

PascalCase: For React components, which makes it clear they are components.
camelCase: For hooks and utility functions, which follow JavaScript/TypeScript naming conventions for functions.
lowercase-with-dashes: For page files, which helps differentiate between route files and other files.
