# Next.js Project Initialization Prompt

Use this prompt with an AI agent after running the setup script to initialize the project structure.

---

## Project Setup Complete - Initialize Structure

The Next.js project has been created with:
- ✅ Next.js 14+ (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Shadcn/ui (initialized)
- ✅ Directus SDK
- ✅ React Hook Form + Zod
- ✅ Prettier + ESLint

### Your Task

Initialize the project structure and configuration files. Follow these steps:

### 1. Create Directory Structure

Create the following directory structure (using `src/` pattern for a tidy root):

```
project-root/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── loading.tsx         # Loading UI
│   │   ├── error.tsx           # Error boundary
│   │   └── not-found.tsx       # 404 page
│   ├── components/
│   │   ├── ui/                 # Shadcn components (already exists)
│   │   └── shared/             # Shared components
│   ├── lib/
│   │   ├── utils.ts            # Utility functions (cn helper)
│   │   ├── directus.ts         # Directus client setup
│   │   └── types.ts            # TypeScript types
│   └── config/
│       └── site.ts             # Site configuration
├── public/                     # Static assets
└── ... (config files)
```

### 2. Configure Files

#### `src/lib/utils.ts`
Create the `cn` utility function for Tailwind class merging:
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

#### `src/lib/directus.ts`
Set up Directus SDK client:
```typescript
import { createDirectus, rest, staticToken } from "@directus/sdk";

type Schema = {};

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";
const directusToken = process.env.DIRECTUS_STATIC_TOKEN || "";

export const directus = createDirectus<Schema>(directusUrl)
  .with(rest())
  .with(staticToken(directusToken));
```

#### `src/config/site.ts`
Create site configuration:
```typescript
export const siteConfig = {
  name: "Project Name",
  url: "https://example.com",
  // Add your site configuration here
} as const;
```

#### `.env.example`
Create environment variables template:
```env
NEXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
DIRECTUS_STATIC_TOKEN=your-token-here
```

### 3. Update Root Layout

Update `src/app/layout.tsx` to include:
- Metadata configuration
- Font loading (Inter recommended)
- Global styles import
- Basic HTML structure

### 4. Create Basic Pages

#### `src/app/page.tsx`
Create a simple homepage with:
- Hero section
- Basic content
- Example component usage

#### `src/app/loading.tsx`
Create loading UI:
```typescript
export default function Loading() {
  return <div>Loading...</div>;
}
```

#### `src/app/error.tsx`
Create error boundary:
```typescript
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

#### `src/app/not-found.tsx`
Create 404 page:
```typescript
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
```

### 5. Configure Prettier

Create `.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

Create `.prettierignore`:
```
node_modules
.next
out
dist
build
```

### 6. Update Tailwind Config

Ensure `tailwind.config.ts` includes:
- Content paths
- Theme extensions (if needed)
- Plugins: `tailwindcss-animate`

### 7. Verify Setup

After creating all files:
1. Run `pnpm install` to ensure all dependencies are installed
2. Run `pnpm run build` to verify the project builds
3. Run `pnpm dev` to start development server

### Constraints

- Use TypeScript strict mode
- Use Server Components by default (only mark Client Components with "use client")
- Follow Next.js App Router conventions
- Use Tailwind CSS for all styling (no custom CSS files except globals.css)
- Keep components small and focused
- Use Shadcn components as base, extend as needed

### Deliverables

Create all the files listed above with proper TypeScript types and basic implementations. The project should build successfully and be ready for development.

---

**Note:** This is a simplified initialization. Customize as needed for your specific project requirements.

