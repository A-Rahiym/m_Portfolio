# Portfolio — Abdulrahman Abdulrahim

Personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4. Features a neo-brutalist design with a grid dashboard layout, pixel art icons, MDX blog, and a filterable project showcase spanning web apps, mobile apps, and AI/ML models.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** pxlkit (pixel art icon system)
- **Internationalization:** next-intl v4
- **Content:** MDX (blog posts)
- **Package Manager:** pnpm

## Structure

```
app/                        # Next.js App Router pages
├── about/                  # CV / about page
├── blog/                   # Blog list + [slug] detail
├── contact/                # Contact form page
├── projects/               # Project list + [slug] detail
├── layout.tsx              # Root layout (sidebar + grid)
└── page.tsx                # Home dashboard

src/
├── components/
│   ├── icons/
│   │   ├── PixelIcon.tsx           # Icon component
│   │   └── data/                   # Icon definitions by category
│   │       ├── navigation.ts       # Nav icons (home, projects, blog, etc.)
│   │       ├── projects.ts         # Project icons (cart, medical, globe, etc.)
│   │       └── social.ts           # Social icons (github, linkedin)
│   ├── layout/                     # Sidebar, DashboardGrid
│   └── ui/                         # BrutalistSection, ProjectCard, Button, etc.
├── data/
│   └── projects.ts                 # Project data + filters
└── features/
    └── game/
        └── SnakeGame.tsx           # Canvas snake game widget

content/                    # MDX blog posts
html/                       # HTML references (design comps)
messages/                   # next-intl translation strings (en.json)
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Dashboard grid with profile, "Currently" tile, snake game, blog preview, proficiency, contact |
| Projects | `/projects` | Filterable grid (ALL / WEB APPS / MOBILE / AI) with project cards |
| Blog | `/blog` | Blog post list with terminal-style entries |
| About | `/about` | CV: experience, education, skills, credentials |
| Contact | `/contact` | Contact form with status card and social links |

## Design

- **Neo-brutalist:** Press-down interactions, hover-reveal shadow colors, thick borders
- **Grid dashboard:** 12-column / 6-row at xl, 2-column auto-rows at md, single column at mobile
- **Sidebar:** Fixed 280px desktop sidebar, collapsible drawer on mobile
- **Typography:** VT323 for headings, IBM Plex Sans for body/labels
- **Color:** Dark theme with teal primary (`#32E6E2`), nav-active state (`#2DD4BF`)

## Running

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # Production build
pnpm lint      # ESLint
```
