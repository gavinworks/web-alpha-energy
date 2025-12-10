# Setup Checklist

Use this checklist to verify your setup is complete.

## Initial Setup

- [ ] Run `./setup.sh <project-name>`
- [ ] All dependencies installed
- [ ] Shadcn initialized

## After AI Agent Initialization

### Files Created (in src/)
- [ ] `src/lib/utils.ts` - cn() helper function
- [ ] `src/lib/directus.ts` - Directus client
- [ ] `src/lib/types.ts` - TypeScript types
- [ ] `src/config/site.ts` - Site configuration
- [ ] `.env.example` - Environment variables template

### App Directory (src/app/)
- [ ] `src/app/layout.tsx` - Root layout with metadata
- [ ] `src/app/page.tsx` - Homepage
- [ ] `src/app/loading.tsx` - Loading UI
- [ ] `src/app/error.tsx` - Error boundary
- [ ] `src/app/not-found.tsx` - 404 page
- [ ] `src/app/globals.css` - Global styles

### Configuration (root)
- [ ] `.prettierrc` - Prettier config
- [ ] `.prettierignore` - Prettier ignore
- [ ] `tailwind.config.ts` - Tailwind config with animate plugin

### Directories (in src/)
- [ ] `src/components/shared/` - Shared components directory
- [ ] `src/components/ui/` - Shadcn components (auto-created)

## Verification

- [ ] `pnpm install` runs without errors
- [ ] `pnpm run build` succeeds
- [ ] `pnpm dev` starts successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors

## Next Steps

- [ ] Create `.env.local` from `.env.example`
- [ ] Customize `src/config/site.ts`
- [ ] Add first Shadcn component
- [ ] Set up Directus instance
- [ ] Start building!

