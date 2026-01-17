# 🧠 Deep Context Snapshot

**Generated at:** 2026-01-17 09:14:47
**Project:** forfan_cmo (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 32

```text
.
│   ├── next-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── SNAPSHOT_APP_FE.md
│   ├── next.config.ts
│   app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   content/
│   │   ├── data.ts
│   │   ├── types.ts
│   components/
│   │   ├── DynamicIsland.tsx
│   │   ├── SectionGrid.tsx
│   │   ├── Tabs.tsx
│   │   ├── Icon.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── FloatingDock.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ItemCard.tsx
│   │   ├── SectionShell.tsx
│   │   ├── Anchor.tsx
│   │   sections/
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── RevenueSection.tsx
│   │   │   ├── AppleWalletSection.tsx
│   │   │   ├── QuietRewardsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── AppleIdentitySection.tsx
│   │   │   ├── PrincipleSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── CreatorEconomySection.tsx
│   │   │   ├── DosDontsSection.tsx
│   public/
│   lib/
│   │   ├── useLanguage.tsx
```

---

## 💻 Source Details

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "forfan_cmo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

        ### 📄 SNAPSHOT_APP_FE.md
        > **Context Summary**
        * (No structural elements detected)

        ```md
        # 🧠 Deep Context Snapshot

**Generated at:** 2026-01-16 15:51:13
**Project:** forfan_cmo (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 32

```text
.
│   ├── next-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── SNAPSHOT_APP_FE.md
│   ├── next.config.ts
│   app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   content/
│   │   ├── data.ts
│   │   ├── types.ts
│   components/
│   │   ├── DynamicIsland.tsx
│   │   ├── SectionGrid.tsx
│   │   ├── Tabs.tsx
│   │   ├── Icon.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── FloatingDock.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ItemCard.tsx
│   │   ├── SectionShell.tsx
│   │   ├── Anchor.tsx
│   │   sections/
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── RevenueSection.tsx
│   │   │   ├── AppleWalletSection.tsx
│   │   │   ├── QuietRewardsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── AppleIdentitySection.tsx
│   │   │   ├── PrincipleSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── CreatorEconomySection.tsx
│   │   │   ├── DosDontsSection.tsx
│   public/
│   lib/
│   │   ├── useLanguage.tsx
```

---

## 💻 Source Details

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "forfan_cmo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

        ### 📄 SNAPSHOT_APP_FE.md
        > **Context Summary**
        * (No structural elements detected)

        ```md
        # 🧠 Deep Context Snapshot

**Generated at:** 2026-01-14 18:13:06
**Project:** forfan_cmo (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 32

```text
.
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── SNAPSHOT_APP_FE.md
│   ├── tsconfig.json
│   app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   components/
│   │   ├── Anchor.tsx
│   │   ├── DynamicIsland.tsx
│   │   ├── FloatingDock.tsx
│   │   ├── Icon.tsx
│   │   ├── ItemCard.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SectionGrid.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SectionShell.tsx
│   │   ├── Tabs.tsx
│   │   sections/
│   │   │   ├── AppleIdentitySection.tsx
│   │   │   ├── AppleWalletSection.tsx
│   │   │   ├── CreatorEconomySection.tsx
│   │   │   ├── DosDontsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── PrincipleSection.tsx
│   │   │   ├── QuietRewardsSection.tsx
│   │   │   ├── RevenueSection.tsx
│   content/
│   │   ├── data.ts
│   │   ├── types.ts
│   lib/
│   │   ├── useLanguage.tsx
│   public/
```

---

## 💻 Source Details

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

        ### 📄 next.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "forfan_cmo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

        ### 📄 SNAPSHOT_APP_FE.md
        > **Context Summary**
        * (No structural elements detected)

        ```md
        # 🧠 Deep Context Snapshot

**Generated at:** 2026-01-14 13:01:44
**Project:** forfan_cmo (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 27

```text
.
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── SNAPSHOT_APP_FE.md
│   ├── tsconfig.json
│   app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   components/
│   │   ├── Anchor.tsx
│   │   ├── Icon.tsx
│   │   ├── ItemCard.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SectionGrid.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SectionShell.tsx
│   │   ├── Tabs.tsx
│   │   sections/
│   │   │   ├── AppleIdentitySection.tsx
│   │   │   ├── DosDontsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── PrincipleSection.tsx
│   │   │   ├── QuietRewardsSection.tsx
│   │   │   ├── RevenueSection.tsx
│   content/
│   │   ├── data.ts
│   │   ├── types.ts
│   public/
```

---

## 💻 Source Details

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

        ### 📄 next.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "forfan_cmo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

        ### 📄 SNAPSHOT_APP_FE.md
        > **Context Summary**
        * (No structural elements detected)

        ```md
        # 🧠 Deep Context Snapshot

**Generated at:** 2026-01-14 11:39:34
**Project:** forfan_cmo (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 24

```text
.
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   components/
│   │   ├── Anchor.tsx
│   │   ├── Icon.tsx
│   │   ├── ItemCard.tsx
│   │   ├── SectionGrid.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SectionShell.tsx
│   │   ├── Tabs.tsx
│   │   sections/
│   │   │   ├── DosDontsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── JourneySection.tsx
│   │   │   ├── PartnersSection.tsx
│   │   │   ├── PrincipleSection.tsx
│   │   │   ├── QuietRewardsSection.tsx
│   │   │   ├── RevenueSection.tsx
│   content/
│   │   ├── data.ts
│   │   ├── types.ts
│   public/
```

---

## 💻 Source Details

        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

        ### 📄 next.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "forfan_cmo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

        ### 📄 app\globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        :root{
  --bg: #f5f5f7;              /* Apple-like background */
  --surface: rgba(255,255,255,0.78);
  --surface2: rgba(255,255,255,0.92);
  --border: rgba(0,0,0,0.08);
  --text: rgba(0,0,0,0.90);
  --muted: rgba(0,0,0,0.58);
  --soft: rgba(0,0,0,0.10);
  --accent: #111111;
  --shadow: 0 18px 50px rgba(0,0,0,0.08);
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  color:var(--text);
  background:
    radial-gradient(1200px 800px at 70% 10%, rgba(0,0,0,0.04), transparent 60%),
    radial-gradient(900px 700px at 20% 30%, rgba(0,0,0,0.03), transparent 55%),
    var(--bg);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, "Apple SD Gothic Neo";
  letter-spacing:-0.2px;
}

a{ color:inherit; text-decoration:none; }

.container{
  width:min(1100px, calc(100% - 32px));
  margin:0 auto;
}

/* NAV */
.nav{
  position:sticky;
  top:0;
  z-index:20;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom:1px solid var(--border);
  background: rgba(245,245,247,0.75);
}

.navInner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 0;
  gap:12px;
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:800;
}

.dot{
  width:10px; height:10px;
  border-radius:999px;
  background: var(--accent);
  box-shadow: 0 0 18px rgba(0,0,0,0.18);
}

.navLinks{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
  justify-content:flex-end;
}

.pill{
  padding:8px 10px;
  border:1px solid var(--border);
  background: rgba(255,255,255,0.7);
  border-radius:999px;
  font-size:13px;
  color: var(--muted);
}
.pill:hover{ background: rgba(255,255,255,0.95); color: var(--text); }

/* HERO */
.hero{ padding: 64px 0 28px; }

.kicker{ color: var(--muted); font-size:14px; margin-bottom:12px; }

.h1{
  font-size: clamp(34px, 4.2vw, 56px);
  line-height:1.03;
  letter-spacing:-1.2px;
  margin:0 0 16px;
}

.sub{
  font-size:16px;
  color: var(--muted);
  max-width: 820px;
  line-height:1.7;
  margin:0 0 26px;
}

.heroCards{
  display:grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap:14px;
  margin-top:18px;
}
@media (max-width: 920px){ .heroCards{ grid-template-columns:1fr; } }

/* SURFACES */
.card{
  border:1px solid var(--border);
  background: var(--surface2);
  border-radius:18px;
  box-shadow: var(--shadow);
  overflow:hidden;
}

.cardPad{ padding:18px; }

.quote{
  padding:18px;
  background: linear-gradient(135deg, rgba(0,0,0,0.04), rgba(255,255,255,0.55));
  border-bottom:1px solid var(--border);
}

.quoteText{ margin:0; font-size:18px; line-height:1.55; }
.quoteSmall{ margin-top:10px; font-size:13px; color: var(--muted); }

.badges{ display:flex; gap:8px; flex-wrap:wrap; margin-top:14px; }
.badge{
  font-size:12px;
  padding:7px 10px;
  border-radius:999px;
  border:1px solid var(--border);
  background: rgba(255,255,255,0.72);
  color: var(--muted);
}

/* SECTIONS */
.section{ padding:34px 0; }

.h2{ font-size:22px; margin:0 0 10px; letter-spacing:-0.6px; }
.lead{ margin:0 0 18px; color: var(--muted); line-height:1.7; }

.grid{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap:12px;
}

/* CARDS */
.item{
  grid-column: span 6;
  border:1px solid var(--border);
  background: var(--surface);
  border-radius:18px;
  padding:16px;
  position:relative;
  overflow:hidden;
  box-shadow: 0 12px 32px rgba(0,0,0,0.06);
}
@media (max-width: 900px){ .item{ grid-column: span 12; } }

.itemTop{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:12px;
}

.tag{
  font-size:12px;
  padding:6px 10px;
  border-radius:999px;
  border:1px solid var(--border);
  background: rgba(255,255,255,0.78);
  color: var(--muted);
  white-space:nowrap;
}

.itemTitle{ margin:0; font-size:16px; letter-spacing:-0.3px; }
.itemDesc{ margin:10px 0 0; color: var(--muted); line-height:1.65; }

.bullets{ margin:12px 0 0; padding-left:18px; color: var(--muted); line-height:1.7; }

/* DO/DON'T */
.split{ display:grid; grid-template-columns:1fr 1fr; gap:12px; }
@media (max-width: 920px){ .split{ grid-template-columns:1fr; } }

.doDont{
  padding:18px;
  border-radius:18px;
  border:1px solid var(--border);
  background: var(--surface2);
  box-shadow: 0 12px 32px rgba(0,0,0,0.05);
}

.listTitle{ font-weight:800; margin:0 0 10px; letter-spacing:-0.3px; }

/* UTIL */
.kbd{
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size:12px;
  border:1px solid var(--border);
  background: rgba(255,255,255,0.75);
  padding:2px 6px;
  border-radius:7px;
  color: var(--muted);
}

.footer{
  padding:34px 0 60px;
  border-top:1px solid var(--border);
  margin-top:26px;
  color: var(--muted);
}

.ctaRow{ display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; }

.button{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  padding:10px 12px;
  border-radius:12px;
  border:1px solid var(--border);
  background: rgba(255,255,255,0.82);
  color: var(--text);
  font-weight:800;
  font-size:13px;
}
.button:hover{ background: rgba(255,255,255,0.98); }

.hr{ height:1px; background: var(--border); margin:12px 0; }

/* Tabs */
.tabs{
  display:inline-flex;
  gap:8px;
  padding:6px;
  border:1px solid var(--border);
  background: rgba(255,255,255,0.72);
  border-radius:999px;
  margin:10px 0 18px;
}

.tabBtn{
  padding:9px 12px;
  border-radius:999px;
  border:1px solid transparent;
  background:transparent;
  color: var(--muted);
  font-weight:800;
  cursor:pointer;
  font-size:13px;
}
.tabBtn:hover{ color: var(--text); background: rgba(0,0,0,0.03); }
.tabActive{
  background: rgba(0,0,0,0.06);
  color: var(--text);
  border:1px solid var(--border);
}

/* Icon / Mini illustration */
.iconWrap{
  width:38px;
  height:38px;
  border-radius:14px;
  border:1px solid var(--border);
  background: linear-gradient(135deg, rgba(0,0,0,0.05), rgba(255,255,255,0.9));
  box-shadow: 0 14px 30px rgba(0,0,0,0.08);
  display:inline-flex;
  align-items:center;
  justify-content:center;
  margin-bottom:12px;
  color: rgba(0,0,0,0.72);
}

/* Mini Art: lighten & soften */
.miniArt{
  position:absolute;
  right:-26px;
  top:-30px;
  width:160px;
  height:160px;
  border-radius:999px;
  background: radial-gradient(circle at 30% 30%, rgba(0,0,0,0.06), rgba(0,0,0,0.01) 55%, transparent 62%);
  pointer-events:none;
}

.miniArt2{
  position:absolute;
  left:-34px;
  bottom:-42px;
  width:190px;
  height:190px;
  border-radius:999px;
  background: radial-gradient(circle at 60% 35%, rgba(0,0,0,0.05), rgba(0,0,0,0.01) 55%, transparent 62%);
  pointer-events:none;
}

/* Section flavor wrappers */
.sectionInner{
  position: relative;
  border-radius: 24px;
  padding: 6px 0;
}

/* subtle “Keynote panel” background per section */
.section--journey .sectionInner{
  background: radial-gradient(900px 220px at 20% 0%, rgba(0,0,0,0.04), transparent 60%);
}
.section--experience .sectionInner{
  background: radial-gradient(900px 240px at 80% 0%, rgba(0,0,0,0.04), transparent 60%);
}
.section--quiet .sectionInner{
  background: linear-gradient(180deg, rgba(0,0,0,0.03), transparent 70%);
}
.section--revenue .sectionInner{
  background: radial-gradient(900px 260px at 50% 0%, rgba(0,0,0,0.045), transparent 62%);
}
.section--partners .sectionInner{
  background: radial-gradient(900px 260px at 10% 0%, rgba(0,0,0,0.035), transparent 62%);
}
.section--rules .sectionInner{
  background: linear-gradient(180deg, rgba(0,0,0,0.025), transparent 65%);
}

/* A tiny “section marker” line */
.section--journey .h2,
.section--experience .h2,
.section--quiet .h2,
.section--revenue .h2,
.section--partners .h2,
.section--rules .h2{
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.section--journey .h2::before,
.section--experience .h2::before,
.section--quiet .h2::before,
.section--revenue .h2::before,
.section--partners .h2::before,
.section--rules .h2::before{
  content:"";
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(0,0,0,0.18);
}

/* Experience rail */
.rail{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px 0 14px;
}
.railStep{
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.70);
  border-radius: 16px;
  padding: 12px;
  position: relative;
  overflow: hidden;
}
.railStep::after{
  content:"";
  position:absolute;
  right:-40px;
  top:-50px;
  width:140px;
  height:140px;
  border-radius:999px;
  background: radial-gradient(circle at 30% 30%, rgba(0,0,0,0.05), transparent 60%);
}
.railTitle{ font-weight: 900; letter-spacing: -0.3px; }
.railDesc{ margin-top: 6px; color: var(--muted); line-height: 1.6; font-size: 13px; }
.railActive{
  background: rgba(0,0,0,0.06);
}

/* Flow hint under tabs */
.flowHint{
  margin: 8px 0 14px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}
.flowHint b{ color: var(--text); }

        ### 📄 app\layout.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `RootLayout`

        ```typescript
        import "./globals.css";

export const metadata = {
  title: "forFAN — Apple CMO View",
  description: "forFAN을 '찍는 앱'이 아닌 '경험을 설계하는 브랜드 플랫폼'으로",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

        ### 📄 app\page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/Anchor, @/components/sections/HeroSection, @/components/sections/PrincipleSection, @/components/sections/JourneySection, @/components/sections/ExperienceSection`...
* 🧩 **Component (Default):** `Page`

        ```typescript
        import Anchor from "@/components/Anchor";
import HeroSection from "@/components/sections/HeroSection";
import PrincipleSection from "@/components/sections/PrincipleSection";
import JourneySection from "@/components/sections/JourneySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import QuietRewardsSection from "@/components/sections/QuietRewardsSection";
import RevenueSection from "@/components/sections/RevenueSection";
import PartnersSection from "@/components/sections/PartnersSection";
import DosDontsSection from "@/components/sections/DosDontsSection";
import { navLinks } from "@/content/data";

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <span className="dot" />
            <span>forFAN · Apple CMO View</span>
          </div>
          <nav className="navLinks">
            {navLinks.map((n) => (
              <Anchor key={n.href} href={n.href} label={n.label} />
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        <HeroSection />
        <PrincipleSection />
        <JourneySection />
        <ExperienceSection />
        <QuietRewardsSection />
        <RevenueSection />
        <PartnersSection />
        <DosDontsSection />

        <footer className="footer">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800, color: "var(--text)" }}>forFAN · Experience-first Brief</div>
              <div style={{ marginTop: 6 }}>
                촬영/필터 없이도 강한 앱은 “설렘·자신감·여운”을 연결하고, 그 연결이 리텐션과 매출이 됩니다.
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div>
                <span className="kbd">Key message</span>
              </div>
              <div style={{ marginTop: 8, color: "var(--text)" }}>
                “사진을 찍게 하지는 않습니다.
                <br />
                그 순간을 더 오래 기억하게 합니다.”
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

        ### 📄 components\Anchor.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Anchor`

        ```typescript
        export default function Anchor({ href, label }: { href: string; label: string }) {
  return (
    <a className="pill" href={href}>
      {label}
    </a>
  );
}

        ### 📄 components\Icon.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Icon`

        ```typescript
        export default function Icon({ name }: { name?: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z" />
          <path d="M19 3l.6 2.2L22 6l-2.4.8L19 9l-.6-2.2L16 6l2.4-.8L19 3z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" />
          <path d="M21 21v-2a4 4 0 00-3-3.9" />
          <path d="M16 3.1a4 4 0 010 7.8" />
        </svg>
      );
    case "hint":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 00-4 12c.7.7 1 1.5 1 2.5V17h6v-.5c0-1 .3-1.8 1-2.5A7 7 0 0012 2z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "mood":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 11-9-9" />
          <path d="M21 3v9h-9" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7c0-2 1-4 3-4 2.5 0 3.5 2.2 2 4" />
          <path d="M12 7c0-2-1-4-3-4-2.5 0-3.5 2.2-2 4" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <path d="M9 9h10v10H9z" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
          <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14v4" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

        ### 📄 components\ItemCard.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types`
* 🧩 **Component (Default):** `ItemCard`

        ```typescript
        import Icon from "./Icon";
import { CardItem } from "@/content/types";

export default function ItemCard({
  item,
  span = 6,
  showArt = true,
}: {
  item: CardItem;
  span?: 4 | 6 | 12;
  showArt?: boolean;
}) {
  return (
    <article className="item" style={{ gridColumn: `span ${span}` as any }}>
      {showArt ? (
        <>
          <div className="miniArt" />
          <div className="miniArt2" />
        </>
      ) : null}
      {item.icon ? (
        <div className="iconWrap">
          <Icon name={item.icon} />
        </div>
      ) : null}

      <div className="itemTop">
        <div>
          <h3 className="itemTitle">{item.title}</h3>
          <p className="itemDesc">{item.desc}</p>
        </div>
        <span className="tag">{item.tag}</span>
      </div>

      <ul className="bullets">
        {item.bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

        ### 📄 components\SectionGrid.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionGrid`

        ```typescript
        export default function SectionGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid">{children}</div>;
}

        ### 📄 components\SectionHeader.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionHeader`

        ```typescript
        export default function SectionHeader({
  title,
  lead,
}: {
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

        ### 📄 components\SectionShell.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionShell`

        ```typescript
        export default function SectionShell({
  id,
  variant,
  children,
}: {
  id: string;
  variant:
    | "principle"
    | "journey"
    | "experience"
    | "quiet"
    | "revenue"
    | "partners"
    | "rules";
  children: React.ReactNode;
}) {
  return (
    <section className={`section section--${variant}`} id={id}>
      <div className="sectionInner">{children}</div>
    </section>
  );
}

        ### 📄 components\Tabs.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types`
* 🧩 **Component (Default):** `Tabs`

        ```typescript
        import { Phase } from "@/content/types";

export default function Tabs({
  value,
  onChange,
}: {
  value: Phase;
  onChange: (v: Phase) => void;
}) {
  return (
    <div className="tabs" role="tablist" aria-label="Experience Tabs">
      {(["Before", "During", "After"] as Phase[]).map((p) => (
        <button
          key={p}
          className={`tabBtn ${value === p ? "tabActive" : ""}`}
          onClick={() => onChange(p)}
          type="button"
        >
          {p}
        </button>
      ))}
    </div>
  );
}

        ### 📄 components\sections\DosDontsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `DosDontsSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import { doList, dontList } from "@/content/data";

export default function DosDontsSection() {
  return (
    <section className="section" id="dosdonts">
      <SectionHeader title="DO / DON’T (브랜드를 지키는 룰)" lead="인생네컷식 브랜드 톤을 유지하려면 “추가하지 말아야 할 것”이 더 중요합니다." />

      <div className="split">
        <div className="doDont">
          <p className="listTitle">✅ DO</p>
          <ul className="bullets">
            {doList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="doDont">
          <p className="listTitle">⛔ DON’T</p>
          <ul className="bullets">
            {dontList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

        ### 📄 components\sections\ExperienceSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/content/data, @/content/types`
* 🧩 **Component (Default):** `ExperienceSection`
* ww **Hooks:** `useMemo`

        ```typescript
        "use client";

import { useMemo, useState } from "react";
import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import Tabs from "../Tabs";
import SectionShell from "../SectionShell";
import { experienceItems } from "@/content/data";
import { Phase } from "@/content/types";

const railCopy: Record<Phase, { title: string; desc: string }> = {
  Before: { title: "Before — 설렘을 만든다", desc: "앱을 여는 이유를 만들고, ‘찍고 싶다’를 자연스럽게 만든다." },
  During: { title: "During — 자신감을 만든다", desc: "현장에서 망설임을 줄이고, 결과 만족도를 높인다." },
  After: { title: "After — 여운이 재방문을 만든다", desc: "추억이 다시 행동으로 이어지게(리텐션/확산) 만든다." },
};

const flowHint: Record<Phase, string> = {
  Before: "Before의 목표는 ‘방문 의도’. 이 설렘이 During에서 ‘자신감’으로 바뀝니다.",
  During: "During의 목표는 ‘만족/확신’. 이 만족이 After에서 ‘여운/재방문’으로 이어집니다.",
  After: "After의 목표는 ‘리텐션/확산’. 이 여운이 다시 Before의 ‘다음 방문’이 됩니다.",
};

export default function ExperienceSection() {
  const [tab, setTab] = useState<Phase>("Before");
  const filtered = useMemo(() => experienceItems.filter((x) => x.phase === tab), [tab]);

  return (
    <SectionShell id="experience" variant="experience">
      <SectionHeader
        title="“고객 경험 7가지” — Before / During / After"
        lead="고객 경험은 ‘기능 목록’이 아니라 ‘흐름’입니다. 전→중→후가 이어지게 보이도록 설계합니다."
      />

      {/* Flow rail (always visible) */}
      <div className="rail">
        {(["Before", "During", "After"] as Phase[]).map((p) => (
          <div key={p} className={`railStep ${tab === p ? "railActive" : ""}`}>
            <div className="railTitle">{railCopy[p].title}</div>
            <div className="railDesc">{railCopy[p].desc}</div>
          </div>
        ))}
      </div>

      <Tabs value={tab} onChange={setTab} />
      <div className="flowHint">
        <b>Flow:</b> {flowHint[tab]}
      </div>

      <SectionGrid>
        {filtered.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </SectionGrid>
    </SectionShell>
  );
}

        ### 📄 components\sections\HeroSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `HeroSection`

        ```typescript
        export default function HeroSection() {
  return (
    <section className="hero">
      <div className="kicker">Brand Platform • Experience-first • Subtle Growth</div>
      <h1 className="h1">
        forFAN은 ‘찍는 앱’이 아니라
        <br />
        <span style={{ opacity: 0.92 }}>‘경험을 설계하는 브랜드 플랫폼’</span>이어야 합니다.
      </h1>
      <p className="sub">
        촬영/필터 기능 없이도 충분히 강해질 수 있습니다. 핵심은 고객이 느끼는{" "}
        <b>설렘(전) · 자신감(중) · 여운(후)</b>을 연결하는 것. 아래는 그 구조를 한 페이지로 정리한 제안입니다.
      </p>

      <div className="heroCards">
        <div className="card">
          <div className="quote">
            <p className="quoteText">
              <b>Technology doesn’t sell.</b>
              <br />
              <b>Experience does.</b>
            </p>
            <div className="quoteSmall">
              원칙: forFAN은 사진을 찍게 하지 않습니다. <br />
              그 순간을 ‘의미 있게’ 남기게 합니다.
            </div>
          </div>
          <div className="cardPad">
            <div className="badges">
              <span className="badge">Before / During / After</span>
              <span className="badge">Quiet Rewards</span>
              <span className="badge">Belonging</span>
              <span className="badge">Creator Economy</span>
            </div>
            <div className="hr" />
            <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              <div>
                <span className="kbd">Key message</span>
              </div>
              <div style={{ marginTop: 10, fontSize: 16, color: "var(--text)" }}>
                “사진을 찍게 하지는 않습니다.
                <br />
                그 순간을 더 오래 기억하게 합니다.”
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardPad">
            <h3 style={{ margin: 0, letterSpacing: "-0.4px" }}>forFAN이 지켜야 할 경계</h3>
            <p style={{ margin: "10px 0 0", color: "var(--muted)", lineHeight: 1.7 }}>
              촬영과 필터는 <b>키오스크의 영역</b>. 앱은 연결/선택/기억/커뮤니티의 영역.
            </p>
            <div className="hr" />
            <div style={{ display: "grid", gap: 10 }}>
              <div className="badge">앱: Hub</div>
              <div className="badge">키오스크: Core Experience</div>
              <div className="badge">리워드: Quiet</div>
              <div className="badge">성장: UGC + RS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

        ### 📄 components\sections\JourneySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `JourneySection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import SectionShell from "../SectionShell";
import { journeyMap } from "@/content/data";

export default function JourneySection() {
  return (
    <SectionShell id="journey" variant="journey">
      <SectionHeader
        title="forFAN 고객 여정 지도 (Before / During / After)"
        lead={
          <>
            고객 경험을 시간 순서로 정리하면 기능 설계가 쉬워집니다. ‘전·중·후’가 끊기지 않도록 연결하는 것이 핵심입니다.
          </>
        }
      />
      <SectionGrid>
        {journeyMap.map((j) => (
          <ItemCard
            key={j.phase}
            span={4}
            item={{
              id: j.phase,
              tag: j.phase,
              title: j.title,
              desc:
                "핵심 목표: " +
                (j.phase === "Before"
                  ? "방문 의도 만들기"
                  : j.phase === "During"
                    ? "만족도/자신감 높이기"
                    : "재방문/확산 만들기"),
              bullets: j.bullets,
              icon: j.icon,
            }}
          />
        ))}
      </SectionGrid>
    </SectionShell>
  );
}

        ### 📄 components\sections\PartnersSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `PartnersSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { partnerValue } from "@/content/data";
import SectionShell from "../SectionShell";

export default function PartnersSection() {
  return (
    <SectionShell id="partners" variant="partners">
      <SectionHeader
        title="가맹점주 · 해외 총판(마스터 프랜차이즈) 관점의 실질적 이점"
        lead={
          <>
            “앱을 런칭하면 무엇이 좋아지나요?”에 대한 답은 <b>매출·운영·데이터·마케팅 비용</b>입니다.
          </>
        }
      />

      <SectionGrid>
        {partnerValue.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </SectionGrid>
    </SectionShell>
  );
}

        ### 📄 components\sections\PrincipleSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `PrincipleSection`

        ```typescript
        import SectionHeader from "../SectionHeader";

export default function PrincipleSection() {
  return (
    <section className="section" id="principle">
      <SectionHeader
        title="1원칙"
        lead={
          <>
            기능을 늘리는 게 아니라 <b>경험의 질</b>을 설계합니다. 고객이 앱을 열었을 때 느끼는 감정(설렘→확신→여운)을 연결하면,
            그 자체가 리텐션이 되고 매출이 됩니다.
          </>
        }
      />
    </section>
  );
}

        ### 📄 components\sections\QuietRewardsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `QuietRewardsSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { quietRewardsCopy } from "@/content/data";

export default function QuietRewardsSection() {
  return (
    <section className="section" id="quiet">
      <SectionHeader
        title="“Quiet Rewards” UX 카피 세트 (경험 중심)"
        lead={
          <>
            리워드는 ‘코인’이 아니라 ‘감정’을 설계하는 언어입니다. 노출은 최소화하고, 체감 혜택을 자연스럽게 전달합니다.
          </>
        }
      />

      <SectionGrid>
        {quietRewardsCopy.map((c) => (
          <ItemCard
            key={c.title}
            span={4}
            item={{
              id: c.title,
              tag: "Copy",
              title: c.title,
              desc: "톤 가이드: 조용하게, 그러나 따뜻하게.",
              bullets: c.lines,
              icon: c.icon,
            }}
          />
        ))}
      </SectionGrid>
    </section>
  );
}

        ### 📄 components\sections\RevenueSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `RevenueSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { revenueLogic } from "@/content/data";

export default function RevenueSection() {
  return (
    <section className="section" id="revenue">
      <SectionHeader
        title="임원회의용: “왜 이 경험이 매출로 이어지는가” 연결 논리"
        lead={
          <>
            고객 경험은 감성이 아니라 KPI로 연결돼야 합니다. 아래 3단 연결(리텐션→객단가→유입)을 기준으로 설명하면 설득력이 올라갑니다.
          </>
        }
      />

      <SectionGrid>
        {revenueLogic.map((r) => (
          <ItemCard
            key={r.title}
            span={4}
            item={{
              id: r.title,
              tag: "Logic",
              title: r.title,
              desc: r.desc,
              bullets: r.bullets,
              icon: r.icon,
            }}
          />
        ))}
      </SectionGrid>
    </section>
  );
}

        ### 📄 content\data.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import { CardItem, CopyBucket, JourneyItem, LogicItem, Phase } from "./types";

export const brandItems: CardItem[] = [
  {
    id: "moment",
    tag: "1) Moment Ownership",
    title: "Moment Card — 순간을 ‘소유’하게 만들기",
    desc:
      "사진이 아니라 ‘그날의 선택과 감정’을 기록합니다. 촬영 후 자동으로 생성되는 카드로, 프레임/매장/날짜/친구 태그 등 ‘순간 메타’를 남깁니다.",
    bullets: [
      "촬영 후 자동 생성: 날짜 · 매장 · 프레임 · 참여자(태그)",
      "사진 없이도 ‘기억의 증거’가 남는 구조",
      "공유는 ‘이미지’가 아니라 ‘경험’ 중심으로",
    ],
    icon: "spark",
  },
  {
    id: "story",
    tag: "2) Story Layer",
    title: "Frame Story Layer — ‘왜 이 프레임인가’",
    desc:
      "프레임 선택을 단순 구매에서 ‘공감한 선택’으로 바꿉니다. 프레임마다 기획 의도/추천 상황/촬영 팁/제작자 스토리를 얹습니다.",
    bullets: [
      "프레임 설명: 감정/상황/추천 포즈/촬영 팁",
      "제작자/브랜드/아티스트의 의도 한 줄",
      "선택의 이유를 만드는 스토리 UX",
    ],
    icon: "map",
  },
  {
    id: "status",
    tag: "3) Subtle Status",
    title: "Invisible Fan Status — 배지가 아닌 ‘정체성 문장’",
    desc:
      "레벨 숫자 대신 ‘당신이 만든 영향’을 문장으로 제공합니다. 은근한 인정(Recognition)이 재방문과 자발적 확산을 만듭니다.",
    bullets: [
      "예: ‘이 프레임이 뜰 때 당신이 있었다’",
      "랭킹/서열 대신 ‘기여 기반’ 문장",
      "SNS 공유 가능한 ‘짧은 문장’ 중심",
    ],
    icon: "people",
  },
  {
    id: "rewards",
    tag: "4) Quiet Rewards",
    title: "Quiet Rewards — 코인은 조용히, 혜택은 체감되게",
    desc:
      "리워드(블록체인 코인)를 전면에 내세우지 않습니다. 대신 ‘잠금 해제/먼저 보기/조용한 쿠폰’처럼 체감 혜택을 자연스럽게 제공합니다.",
    bullets: [
      "키오스크 이용/앱 결제 → 코인 적립(백그라운드)",
      "사용처: 프레임 잠금 해제 · 할인 · 우선 접근",
      "메시지 톤: ‘Thanks for being here’",
    ],
    icon: "gift",
  },
  {
    id: "creator",
    tag: "5) Creator as Brand",
    title: "Creator Profile — 프레임 제작자를 ‘브랜드’로",
    desc:
      "forFAN의 핵심은 프레임=콘텐츠=브랜드입니다. 제작자 프로필을 단순 판매자가 아닌 ‘크리에이터’로 설계합니다.",
    bullets: [
      "한 줄 소개 + 대표 프레임 3개",
      "‘이 프레임은 이런 사람에게 추천’",
      "커뮤니티/RS(수익 분배)와 결합",
    ],
    icon: "circle",
  },
  {
    id: "philosophy",
    tag: "6) One Line Philosophy",
    title: "앱의 철학 한 줄 — 모든 기능의 기준점",
    desc:
      "기능보다 중요한 건 ‘왜 존재하는가’입니다. 앱 안에 문장으로 철학을 고정하고, 모든 UX가 그 문장을 설명하게 만듭니다.",
    bullets: [
      "“사진을 찍게 하지는 않습니다. 그 순간을 더 오래 기억하게 합니다.”",
      "온보딩/홈/프레임 상세에 일관되게 노출",
      "브랜드 메시지의 통일성 강화",
    ],
    icon: "copy",
  },
];

export const experienceItems: CardItem[] = [
  {
    id: "before_preview",
    phase: "Before" as Phase,
    icon: "spark",
    tag: "Before the Moment",
    title: "Moment Preview — 찍기 전의 설렘",
    desc: "오늘/이번 주에 어울리는 프레임과 무드를 가볍게 추천해, 앱을 여는 이유를 ‘설렘’으로 만듭니다.",
    bullets: [
      "오늘의 추천 프레임(가벼운 큐레이션)",
      "요일/시간대 기반 추천(과하지 않게)",
      "‘찍을까?’를 ‘찍자’로 바꾸는 트리거",
    ],
  },
  {
    id: "during_people",
    phase: "During" as Phase,
    icon: "people",
    tag: "People, not Photos",
    title: "People Tag Memory — 사람을 기억",
    desc: "사진보다 중요한 ‘누구와 함께였는지’를 남깁니다. 통계가 아니라 문장으로 관계를 표현합니다.",
    bullets: ["촬영 순간 참여자 태그", "관계는 숫자가 아니라 ‘문장’", "재방문 동기를 ‘사람’으로 연결"],
  },
  {
    id: "during_hint",
    phase: "During" as Phase,
    icon: "hint",
    tag: "Soft Guidance",
    title: "Quiet Pose & Mood Tips — 조용한 힌트",
    desc: "강요하는 튜토리얼이 아니라 ‘힌트’ 수준으로 프레임별 팁 1~2줄을 제공합니다.",
    bullets: ["프레임별 ‘이렇게 서면 좋아요’", "현장 문의 감소 + 만족도 상승", "텍스트 기반으로도 충분히 가능"],
  },
  {
    id: "after_follow",
    phase: "After" as Phase,
    icon: "clock",
    tag: "After the Moment",
    title: "Gentle Follow-up — 여운을 이어줌",
    desc: "촬영 다음 날/일주일 뒤에도 경험이 자연스럽게 이어집니다. 과도한 알림 대신 부드러운 리마인드.",
    bullets: ["‘어제의 순간’ 리마인드", "관련 프레임/스토리 추천", "재방문 이유를 ‘추억’으로 만든다"],
  },
  {
    id: "after_taste",
    phase: "After" as Phase,
    icon: "mood",
    tag: "My Taste, Quietly",
    title: "Taste Memory — 말하지 않아도 알아주는 취향",
    desc: "취향 설정을 강요하지 않고 사용 패턴을 바탕으로 무드를 형용사로 표현합니다.",
    bullets: ["Playful · Cozy · Minimal 같은 무드", "개인화지만 ‘가벼운’ 개인화", "브랜드 톤을 해치지 않음"],
  },
  {
    id: "after_circle",
    phase: "After" as Phase,
    icon: "circle",
    tag: "Belonging, Not Community",
    title: "Quiet Circles — 커뮤니티보다 소속감",
    desc: "광장형 커뮤니티 대신 같은 프레임을 좋아하는 사람들의 느슨한 서클. 글을 쓰지 않아도 함께 있는 느낌.",
    bullets: ["‘이 프레임을 좋아한 사람들’ 중심", "운영 부담 최소화", "자연스러운 UGC 유도"],
  },
  {
    id: "after_surprise",
    phase: "After" as Phase,
    icon: "gift",
    tag: "Small Surprise",
    title: "Unexpected Moments — 작은 기쁨",
    desc: "보상보다 강력한 건 예상 밖의 기쁨. 특정 순간에 조용히 열리는 프레임/혜택으로 감정을 남깁니다.",
    bullets: ["n번째 방문/첫 사용/기념일에 제공", "카피 톤: “We thought you’d like this.”", "리워드는 전면 노출하지 않는다"],
  },
];

export const journeyMap: JourneyItem[] = [
  {
    phase: "Before",
    icon: "map",
    title: "Before — ‘오늘은 뭘 찍지?’",
    bullets: ["Moment Preview로 ‘오늘의 프레임’ 제안", "매장/지역 기반 ‘가까운 경험’ 제안(조용히)", "촬영 팁 한 줄로 불안감 낮추기"],
  },
  {
    phase: "During",
    icon: "hint",
    title: "During — ‘지금 이 순간을 더 잘’",
    bullets: ["프레임별 Quiet Pose Tip (1~2줄)", "People Tag: 누구와 함께인지 남기기", "리워드는 보이지 않게 누적(Quiet Rewards)"],
  },
  {
    phase: "After",
    icon: "clock",
    title: "After — ‘여운이 다시 방문을 만든다’",
    bullets: ["Gentle Follow-up으로 자연스러운 리마인드", "Taste Memory로 ‘내 취향’ 문장화", "Quiet Circles로 소속감 + UGC 흐름 생성"],
  },
];

export const quietRewardsCopy: CopyBucket[] = [
  {
    icon: "gift",
    title: "적립(노출 최소화)",
    lines: ["“Thanks for being here.”", "“오늘의 순간에 작은 선물을 남겼어요.”", "“방금 경험이 조용히 저장됐어요.”"],
  },
  {
    icon: "copy",
    title: "사용(체감 중심)",
    lines: ["“This one’s on us.”", "“이 프레임, 오늘은 열어둘게요.”", "“조용히 혜택을 적용했어요.”"],
  },
  {
    icon: "spark",
    title: "서프라이즈(감정 설계)",
    lines: ["“We thought you’d like this.”", "“당신의 취향에 맞춰 하나 골라뒀어요.”", "“오늘은 이 무드가 잘 어울릴 것 같아요.”"],
  },
];

export const revenueLogic: LogicItem[] = [
  {
    icon: "link",
    title: "1) 경험 → 재방문(리텐션)",
    desc: "찍기 전(Preview)·찍는 중(Tips)·찍고 난 뒤(Follow-up)가 연결되면 ‘한 번’이 ‘반복’이 됩니다.",
    bullets: ["방문 빈도 ↑", "비수기 완충(캠페인/추천)", "재방문이 매출의 가장 큰 레버"],
  },
  {
    icon: "chart",
    title: "2) 재방문 → 객단가(ARPU) 상승",
    desc: "Quiet Rewards는 ‘코인’이 아니라 ‘체감 혜택’으로 설계됩니다. 프레임 잠금해제/쿠폰은 구매를 자연스럽게 만듭니다.",
    bullets: ["앱 전용 프레임/프로모션 전환 ↑", "업셀(프레임/굿즈) 가능성 ↑", "할인은 ‘조용히’ 적용해 거부감 ↓"],
  },
  {
    icon: "people",
    title: "3) 소속감 → 유입(Organic Growth)",
    desc: "Quiet Circles/UGC는 광고비를 줄이고, ‘친구와 함께’ 오게 만듭니다. 촬영은 사회적 행위입니다.",
    bullets: ["자발적 공유/추천 ↑", "신규 유입 CAC ↓", "프레임이 ‘밈’처럼 확산"],
  },
];

export const partnerValue: CardItem[] = [
  {
    id: "p_rev",
    tag: "Revenue",
    title: "추가 매출원: 앱-기반 리텐션 & 재방문 촉진",
    desc:
      "오프라인 ‘1회 방문’이 앱을 통해 ‘반복 방문’으로 바뀝니다. 쿠폰/리워드/프레임 잠금해제는 현장 매출을 직접 끌어올립니다.",
    bullets: ["직영/가맹 공통: 촬영권·리워드로 재방문 유도", "앱 전용 프레임/프로모션으로 객단가(ARPU) 상승", "성수기·비수기 편차 완화(캠페인으로 수요 조절)"],
    icon: "chart",
  },
  {
    id: "p_mkt",
    tag: "Marketing",
    title: "마케팅 비용 절감: 앱이 ‘로컬 CRM’ 역할",
    desc:
      "가맹점주/해외 총판에게 가장 큰 고통은 ‘지역별 마케팅’입니다. 앱은 고객을 직접 연결하고, 매장 단위 쿠폰/메시지로 전환 비용을 낮춥니다.",
    bullets: ["매장 단위 쿠폰(예: 4,000원)으로 즉시 유입", "공지/이벤트/신규 프레임을 앱으로 푸시(소셜보다 효율적)", "UGC/커뮤니티가 자연 노출을 만들며 광고 의존도 감소"],
    icon: "spark",
  },
  {
    id: "p_data",
    tag: "Data",
    title: "데이터 기반 운영: ‘감’이 아니라 ‘지표’로 매장 운영",
    desc:
      "오프라인 운영에서 가장 부족한 건 ‘누가 왜 오는지’ 데이터입니다. 앱은 방문-결제-프레임-리워드를 연결해, 매장 운영 의사결정을 숫자로 바꿉니다.",
    bullets: ["프레임별 판매/선호, 시간대별 수요, 재방문율 추적", "지역별 트렌드 감지 → 로컬 전용 프레임 기획 가능", "프로모션 A/B 테스트로 최적의 쿠폰/경품 구조 도출"],
    icon: "link",
  },
  {
    id: "p_ops",
    tag: "Operations",
    title: "운영 효율: 현장 응대/CS 부담 감소",
    desc:
      "고객 문의(‘어떤 프레임이 예뻐요?’, ‘어떻게 찍어요?’)의 상당 부분을 커뮤니티/가이드로 흡수해 매장 운영 부담을 줄입니다.",
    bullets: ["프레임별 촬영 팁/가이드 → 현장 문의 감소", "커뮤니티 Q&A로 고객이 고객을 돕는 구조", "이벤트/공지의 앱화로 현장 안내물·인력 부담 축소"],
    icon: "hint",
  },
  {
    id: "p_global",
    tag: "Global Expansion",
    title: "해외 총판 관점: ‘로컬 표준화’와 ‘본사 콘텐츠 동기화’",
    desc:
      "마스터 프랜차이즈의 어려움은 국가별 운영 편차입니다. 앱은 콘텐츠/정책을 표준화하고, 본사 기획을 국가별로 안전하게 확장하는 채널이 됩니다.",
    bullets: ["본사 프레임/이벤트를 글로벌 동기화(국가별 스케줄 분리 가능)", "권역별 리워드/쿠폰 정책 분리(환율/가격/규제 대응)", "멀티 리전 인프라로 성능/안정성 확보(1M MAU 확장)"],
    icon: "map",
  },
  {
    id: "p_ecosys",
    tag: "Partner Ecosystem",
    title: "파트너 생태계: 로컬 IP/인플루언서 콜라보를 ‘제품화’",
    desc:
      "총판/가맹점주는 로컬 IP와 협업을 ‘한 번 이벤트’로 끝내기 쉽습니다. 앱은 이를 프레임 마켓/채널로 전환해 지속 매출로 만드는 장치입니다.",
    bullets: ["로컬 인플루언서 프레임 → 앱 전용 판매로 지속화", "판매 시 RS(수익 분배) 구조로 파트너/크리에이터 참여 촉진", "국가별 인기 프레임을 본사로 역수출(글로벌 확산 소재)"],
    icon: "people",
  },
];

export const doList = [
  "앱은 Hub, 키오스크는 Core Experience",
  "보상은 조용히, 체감 혜택은 확실히",
  "기억/기여를 ‘문장’으로 남기는 UX",
  "프레임 스토리로 선택의 이유를 만든다",
];

export const dontList = [
  "앱 내 촬영/필터 추가 (키오스크 경험과 충돌)",
  "과한 커뮤니티 기능(피드 과열, 운영 비용 폭증)",
  "랭킹/서열 중심 구조(브랜드 톤 훼손)",
  "리워드 과잉 노출 UI(‘코인 앱’으로 인식될 리스크)",
];

export const navLinks = [
  { href: "#principle", label: "원칙" },
  { href: "#journey", label: "여정 지도" },
  { href: "#experience", label: "고객 경험(탭)" },
  { href: "#quiet", label: "Quiet Rewards 카피" },
  { href: "#revenue", label: "경험→매출 논리" },
  { href: "#partners", label: "파트너 이점" },
  { href: "#dosdonts", label: "DO / DON'T" },
] as const;

        ### 📄 content\types.ts
        > **Context Summary**
        * wb **Type/Intf:** `Phase`
* wb **Type/Intf:** `CardItem`
* wb **Type/Intf:** `JourneyItem`
* wb **Type/Intf:** `CopyBucket`
* wb **Type/Intf:** `LogicItem`

        ```ts
        export type Phase = "Before" | "During" | "After";

export type CardItem = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  icon?: string;
  phase?: Phase;
};

export type JourneyItem = {
  phase: Phase;
  icon: string;
  title: string;
  bullets: string[];
};

export type CopyBucket = {
  icon: string;
  title: string;
  lines: string[];
};

export type LogicItem = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
};

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

        ### 📄 app\globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        @tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Apple Pro Color Palette */
  --bg: #f5f5f7; /* 배경색 */
  --card-bg: #ffffff; /* 카드 배경 */
  --text-primary: #1d1d1f; /* 진한 텍스트 */
  --text-secondary: #86868b; /* 연한 텍스트 */
  --accent-blue: #0071e3;
  
  /* Easing Functions */
  --ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1);
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; /* 폰트 부드럽게 */
}

/* 🟢 [핵심] Bento Grid Layout System 
   이 부분이 없어서 다른 섹션들이 깨졌던 것입니다. */
.bento-grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12열 그리드 */
  gap: 20px; /* 카드 사이 간격 */
  width: 100%;
}

/* 모바일 대응: 1단 그리드 */
@media (max-width: 900px) {
  .bento-grid-container {
    grid-template-columns: 1fr;
  }
}

/* 섹션 공통 스타일 */
.section {
  padding: 60px 0;
  position: relative;
}

.container {
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

/* Typography */
.h1 {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 20px;
}

.h2 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.lead {
  font-size: 19px;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 400;
  max-width: 700px;
  margin-bottom: 40px;
}

/* Nav & Footer (기존 유지 + 정돈) */
.nav {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(20px);
  background: rgba(245, 245, 247, 0.72);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.navInner { display: flex; justify-content: space-between; padding: 14px 0; align-items: center; }
.navLinks { display: flex; gap: 8px; flex-wrap: wrap; }
.pill { padding: 8px 14px; border-radius: 99px; font-size: 12px; font-weight: 600; background: rgba(0,0,0,0.05); color: var(--text-secondary); transition: 0.2s; }
.pill:hover { background: #000; color: #fff; }

.footer { padding: 80px 0; border-top: 1px solid rgba(0,0,0,0.05); color: var(--text-secondary); font-size: 12px; }

/* Animation Utility */
.reveal-container {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-apple), transform 0.8s var(--ease-apple);
}
.reveal-visible { opacity: 1; transform: translateY(0); }
        ### 📄 app\layout.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `RootLayout`

        ```typescript
        import "./globals.css";

export const metadata = {
  title: "forFAN — Apple CMO View",
  description: "forFAN을 '찍는 앱'이 아닌 '경험을 설계하는 브랜드 플랫폼'으로",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

        ### 📄 app\page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/Anchor, @/components/ScrollReveal, @/components/sections/HeroSection, @/components/sections/PrincipleSection, @/components/sections/JourneySection`...
* 🧩 **Component (Default):** `Page`

        ```typescript
        // app/page.tsx
import Anchor from "@/components/Anchor";
import ScrollReveal from "@/components/ScrollReveal"; // 👈 New Wrapper
import HeroSection from "@/components/sections/HeroSection";
import PrincipleSection from "@/components/sections/PrincipleSection";
import JourneySection from "@/components/sections/JourneySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AppleIdentitySection from "@/components/sections/AppleIdentitySection"; // 👈 The Pro Section
import QuietRewardsSection from "@/components/sections/QuietRewardsSection";
import RevenueSection from "@/components/sections/RevenueSection";
import PartnersSection from "@/components/sections/PartnersSection";
import DosDontsSection from "@/components/sections/DosDontsSection";
import { navLinks } from "@/content/data";

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <span className="dot" />
            <span>forFAN · Apple CMO View</span>
          </div>
          <nav className="navLinks">
            {navLinks.map((n) => (
              <Anchor key={n.href} href={n.href} label={n.label} />
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* Sections wrapped in structural styling, not just container */}
        <div className="container" style={{ paddingTop: 40 }}>
          <ScrollReveal><HeroSection /></ScrollReveal>
          <ScrollReveal delay={100}><PrincipleSection /></ScrollReveal>
        </div>
        
        {/* Full-width visual flow */}
        <div className="container">
           <JourneySection />
           <ExperienceSection />
        </div>

        {/* The "Pro" Section breaks the rhythm intentionally */}
        <AppleIdentitySection />

        <div className="container">
          <QuietRewardsSection />
          <RevenueSection />
          <PartnersSection />
          <DosDontsSection />
        </div>

        <footer className="footer container">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800, color: "var(--text-primary)" }}>forFAN · Experience-first Brief</div>
              <div style={{ marginTop: 6, color: "var(--text-secondary)" }}>
                Designed by Apple Aesthetic.
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
               <span className="kbd">Confidential</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
        ### 📄 components\Anchor.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Anchor`

        ```typescript
        export default function Anchor({ href, label }: { href: string; label: string }) {
  return (
    <a className="pill" href={href}>
      {label}
    </a>
  );
}

        ### 📄 components\Icon.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Icon`

        ```typescript
        export default function Icon({ name }: { name?: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z" />
          <path d="M19 3l.6 2.2L22 6l-2.4.8L19 9l-.6-2.2L16 6l2.4-.8L19 3z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" />
          <path d="M21 21v-2a4 4 0 00-3-3.9" />
          <path d="M16 3.1a4 4 0 010 7.8" />
        </svg>
      );
    case "hint":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 00-4 12c.7.7 1 1.5 1 2.5V17h6v-.5c0-1 .3-1.8 1-2.5A7 7 0 0012 2z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "mood":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 11-9-9" />
          <path d="M21 3v9h-9" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7c0-2 1-4 3-4 2.5 0 3.5 2.2 2 4" />
          <path d="M12 7c0-2-1-4-3-4-2.5 0-3.5 2.2-2 4" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <path d="M9 9h10v10H9z" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
          <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14v4" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

        ### 📄 components\ItemCard.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types`
* 🧩 **Component (Default):** `ItemCard`

        ```typescript
        "use client"; // 👈 이 줄이 반드시 필요합니다!

import Icon from "./Icon";
import { CardItem } from "@/content/types";
import ScrollReveal from "./ScrollReveal";

export default function ItemCard({
  item,
  span = 6,
  delay = 0,
}: {
  item: CardItem;
  span?: 4 | 6 | 12;
  showArt?: boolean;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <article
        className="bento-card"
        style={{ gridColumn: `span ${span}` }}
      >
        <div className="bento-content">
          {item.icon && (
            <div className="icon-box">
              <Icon name={item.icon} />
            </div>
          )}
          <span className="bento-tag">{item.tag}</span>
          <h3 className="bento-title">{item.title}</h3>
          <p className="bento-desc">{item.desc}</p>
          
          {item.bullets.length > 0 && (
            <ul className="bento-list">
              {item.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
        </div>

        <style jsx>{`
          .bento-card {
            height: 100%;
            background: #ffffff;
            border-radius: 24px;
            padding: 28px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.04);
            transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .bento-card:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
            z-index: 10;
          }
          .icon-box {
            width: 40px; height: 40px;
            background: #f5f5f7;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 16px;
            color: #1d1d1f;
          }
          .bento-tag {
            font-size: 11px;
            font-weight: 700;
            color: #86868b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: block;
            margin-bottom: 8px;
          }
          .bento-title {
            font-size: 20px;
            font-weight: 700;
            color: #1d1d1f;
            margin: 0 0 10px 0;
            line-height: 1.3;
          }
          .bento-desc {
            font-size: 15px;
            line-height: 1.6;
            color: #86868b;
            margin: 0 0 20px 0;
          }
          .bento-list {
            padding: 0; margin: 0; list-style: none;
            border-top: 1px solid rgba(0,0,0,0.05);
            padding-top: 16px;
          }
          .bento-list li {
            font-size: 13px;
            color: #6e6e73;
            margin-bottom: 6px;
            position: relative;
            padding-left: 12px;
          }
          .bento-list li::before {
            content: "•"; position: absolute; left: 0; color: #d2d2d7;
          }
        `}</style>
      </article>
    </ScrollReveal>
  );
}
        ### 📄 components\ScrollReveal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `ScrollReveal`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        "use client"; // 👈 이 줄이 반드시 필요합니다!

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-container ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
        ### 📄 components\SectionGrid.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionGrid`

        ```typescript
        "use client";

export default function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="bento-grid-container">
      {children}
    </div>
  );
}
        ### 📄 components\SectionHeader.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionHeader`

        ```typescript
        export default function SectionHeader({
  title,
  lead,
}: {
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

        ### 📄 components\SectionShell.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionShell`

        ```typescript
        "use client";

export default function SectionShell({
  id,
  variant, // variant는 이제 CSS 클래스보다는 의미론적 구분으로 둡니다.
  children,
}: {
  id: string;
  variant?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      {/* sectionInner 등의 복잡한 래퍼 제거하고 바로 children 렌더링 */}
      {children}
    </section>
  );
}
        ### 📄 components\Tabs.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types`
* 🧩 **Component (Default):** `Tabs`

        ```typescript
        "use client";

import { Phase } from "@/content/types";

export default function Tabs({
  value,
  onChange,
}: {
  value: Phase;
  onChange: (v: Phase) => void;
}) {
  return (
    <div className="segmented-control">
      {(["Before", "During", "After"] as Phase[]).map((p) => (
        <button
          key={p}
          className={`segment-btn ${value === p ? "active" : ""}`}
          onClick={() => onChange(p)}
          type="button"
        >
          {p}
        </button>
      ))}

      <style jsx>{`
        .segmented-control {
          display: inline-flex;
          background: rgba(118, 118, 128, 0.12);
          padding: 2px;
          border-radius: 9px;
          margin-bottom: 32px;
        }
        .segment-btn {
          padding: 6px 20px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #1d1d1f;
          transition: all 0.2s ease;
        }
        .segment-btn:hover { opacity: 0.7; }
        .segment-btn.active {
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
        ### 📄 components\sections\AppleIdentitySection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `AppleIdentitySection`

        ```typescript
        "use client"; // 👈 이 줄이 반드시 필요합니다!

import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function AppleIdentitySection() {
  return (
    <section className="section-dark">
      <div className="container">
        <ScrollReveal>
          <div className="header-group">
            <h2 className="title-grad">Beyond the Touch.</h2>
            <p className="lead-text">
              소프트웨어를 넘어, <b>Taptic Engine</b>과 <b>Dynamic Island</b>까지.<br />
              인생네컷 디바이스의 하드웨어 감각을 앱 경험으로 연결합니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-pro">
          {/* Card 1: Haptic Touch */}
          <ScrollReveal delay={100}>
            <div className="card-pro card-large">
              <div className="content">
                <div className="icon-badge"><Icon name="spark" /></div>
                <h3>Feel the Moment</h3>
                <p>리워드가 쌓이는 순간, 기분 좋은 미세 진동으로 완성감을 전달합니다.</p>
              </div>
              
              {/* ✅ 수정된 부분: Math.random() 제거 
                 인덱스(i)를 기반으로 고정된 높이를 계산하여 서버/클라이언트 불일치를 방지합니다.
              */}
              <div className="waveform-viz">
                {[...Array(20)].map((_, i) => {
                  // i를 사용하여 항상 같은 결과를 내지만, 랜덤처럼 보이는 높이를 계산합니다.
                  // Math.sin에 큰 소수를 곱해 불규칙한 파형을 만듭니다.
                  const height = 15 + Math.abs(Math.sin((i + 1) * 12.5)) * 50;
                  
                  return (
                    <div 
                      key={i} 
                      className="wave-bar" 
                      style={{ 
                        animationDelay: `${i * 0.05}s`,
                        height: `${height}%` // 👈 여기가 수정되었습니다.
                      }} 
                    />
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Dynamic Island */}
          <ScrollReveal delay={200}>
            <div className="card-pro">
              <div className="content">
                <div className="icon-badge"><Icon name="clock" /></div>
                <h3>Always Glancable</h3>
                <p>앱을 열지 않아도, 잠금 화면과 다이내믹 아일랜드에서 대기 순서를 확인합니다.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Privacy */}
          <ScrollReveal delay={300}>
            <div className="card-pro">
              <div className="content">
                <div className="icon-badge"><Icon name="mood" /></div>
                <h3>Privacy First</h3>
                <p>얼굴 데이터는 저장되지 않습니다. 오직 취향 데이터만 기기에 남습니다.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .section-dark {
          background: #000000;
          padding: 80px 0;
          position: relative;
          color: #f5f5f7;
          overflow: hidden;
          margin: 40px 0;
          border-radius: 32px;
        }
        
        .header-group { text-align: center; margin-bottom: 60px; }
        
        .title-grad {
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, #fff 30%, #86868b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 16px;
          letter-spacing: -0.03em;
        }
        
        .lead-text {
          font-size: 21px;
          color: #86868b;
          font-weight: 400;
          line-height: 1.5;
        }
        .lead-text b { color: #f5f5f7; }

        .grid-pro {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .card-pro {
          background: rgba(28,28,30, 0.6);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 24px;
          padding: 32px;
          position: relative;
          backdrop-filter: blur(20px);
          overflow: hidden;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .card-large { grid-column: span 2; flex-direction: row; align-items: center; }

        .icon-badge {
          width: 48px; height: 48px;
          background: #fff;
          color: #000;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        
        .card-pro h3 { font-size: 24px; margin: 0 0 10px; color: #fff; }
        .card-pro p { font-size: 16px; color: #a1a1a6; line-height: 1.5; margin: 0; }

        .waveform-viz {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 80px;
          margin-left: auto;
          padding-left: 40px;
        }
        
        .wave-bar {
          width: 6px;
          background: rgba(255,255,255,0.3);
          border-radius: 99px;
          animation: bar-dance 1.4s infinite ease-in-out;
        }
        
        @keyframes bar-dance {
          0%, 100% { height: 20%; background: rgba(255,255,255,0.3); }
          50% { height: 100%; background: #0071e3; box-shadow: 0 0 15px rgba(0,113,227,0.6); }
        }

        @media (max-width: 768px) {
          .grid-pro { grid-template-columns: 1fr; }
          .card-large { grid-column: span 1; flex-direction: column; align-items: flex-start; }
          .waveform-viz { margin: 30px auto 0; padding: 0; width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components\sections\DosDontsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `DosDontsSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import { doList, dontList } from "@/content/data";

export default function DosDontsSection() {
  return (
    <section className="section" id="dosdonts">
      <SectionHeader title="DO / DON’T (브랜드를 지키는 룰)" lead="인생네컷식 브랜드 톤을 유지하려면 “추가하지 말아야 할 것”이 더 중요합니다." />

      <div className="split">
        <div className="doDont">
          <p className="listTitle">✅ DO</p>
          <ul className="bullets">
            {doList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="doDont">
          <p className="listTitle">⛔ DON’T</p>
          <ul className="bullets">
            {dontList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

        ### 📄 components\sections\ExperienceSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/content/data, @/content/types`
* 🧩 **Component (Default):** `ExperienceSection`
* ww **Hooks:** `useMemo`

        ```typescript
        "use client";

import { useMemo, useState } from "react";
import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import Tabs from "../Tabs";
import SectionShell from "../SectionShell";
import { experienceItems } from "@/content/data";
import { Phase } from "@/content/types";

const railCopy: Record<Phase, { title: string; desc: string }> = {
  Before: { title: "Before — 설렘을 만든다", desc: "앱을 여는 이유를 만들고, ‘찍고 싶다’를 자연스럽게 만든다." },
  During: { title: "During — 자신감을 만든다", desc: "현장에서 망설임을 줄이고, 결과 만족도를 높인다." },
  After: { title: "After — 여운이 재방문을 만든다", desc: "추억이 다시 행동으로 이어지게(리텐션/확산) 만든다." },
};

const flowHint: Record<Phase, string> = {
  Before: "Before의 목표는 ‘방문 의도’. 이 설렘이 During에서 ‘자신감’으로 바뀝니다.",
  During: "During의 목표는 ‘만족/확신’. 이 만족이 After에서 ‘여운/재방문’으로 이어집니다.",
  After: "After의 목표는 ‘리텐션/확산’. 이 여운이 다시 Before의 ‘다음 방문’이 됩니다.",
};

export default function ExperienceSection() {
  const [tab, setTab] = useState<Phase>("Before");
  const filtered = useMemo(() => experienceItems.filter((x) => x.phase === tab), [tab]);

  return (
    <SectionShell id="experience" variant="experience">
      <SectionHeader
        title="“고객 경험 7가지” — Before / During / After"
        lead="고객 경험은 ‘기능 목록’이 아니라 ‘흐름’입니다. 전→중→후가 이어지게 보이도록 설계합니다."
      />

      {/* Flow rail (always visible) */}
      <div className="rail">
        {(["Before", "During", "After"] as Phase[]).map((p) => (
          <div key={p} className={`railStep ${tab === p ? "railActive" : ""}`}>
            <div className="railTitle">{railCopy[p].title}</div>
            <div className="railDesc">{railCopy[p].desc}</div>
          </div>
        ))}
      </div>

      <Tabs value={tab} onChange={setTab} />
      <div className="flowHint">
        <b>Flow:</b> {flowHint[tab]}
      </div>

      <SectionGrid>
        {filtered.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </SectionGrid>
    </SectionShell>
  );
}

        ### 📄 components\sections\HeroSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `HeroSection`

        ```typescript
        export default function HeroSection() {
  return (
    <section className="hero">
      <div className="kicker">Brand Platform • Experience-first • Subtle Growth</div>
      <h1 className="h1">
        forFAN은 ‘찍는 앱’이 아니라
        <br />
        <span style={{ opacity: 0.92 }}>‘경험을 설계하는 브랜드 플랫폼’</span>이어야 합니다.
      </h1>
      <p className="sub">
        촬영/필터 기능 없이도 충분히 강해질 수 있습니다. 핵심은 고객이 느끼는{" "}
        <b>설렘(전) · 자신감(중) · 여운(후)</b>을 연결하는 것. 아래는 그 구조를 한 페이지로 정리한 제안입니다.
      </p>

      <div className="heroCards">
        <div className="card">
          <div className="quote">
            <p className="quoteText">
              <b>Technology doesn’t sell.</b>
              <br />
              <b>Experience does.</b>
            </p>
            <div className="quoteSmall">
              원칙: forFAN은 사진을 찍게 하지 않습니다. <br />
              그 순간을 ‘의미 있게’ 남기게 합니다.
            </div>
          </div>
          <div className="cardPad">
            <div className="badges">
              <span className="badge">Before / During / After</span>
              <span className="badge">Quiet Rewards</span>
              <span className="badge">Belonging</span>
              <span className="badge">Creator Economy</span>
            </div>
            <div className="hr" />
            <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              <div>
                <span className="kbd">Key message</span>
              </div>
              <div style={{ marginTop: 10, fontSize: 16, color: "var(--text)" }}>
                “사진을 찍게 하지는 않습니다.
                <br />
                그 순간을 더 오래 기억하게 합니다.”
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cardPad">
            <h3 style={{ margin: 0, letterSpacing: "-0.4px" }}>forFAN이 지켜야 할 경계</h3>
            <p style={{ margin: "10px 0 0", color: "var(--muted)", lineHeight: 1.7 }}>
              촬영과 필터는 <b>키오스크의 영역</b>. 앱은 연결/선택/기억/커뮤니티의 영역.
            </p>
            <div className="hr" />
            <div style={{ display: "grid", gap: 10 }}>
              <div className="badge">앱: Hub</div>
              <div className="badge">키오스크: Core Experience</div>
              <div className="badge">리워드: Quiet</div>
              <div className="badge">성장: UGC + RS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

        ### 📄 components\sections\JourneySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `JourneySection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import SectionShell from "../SectionShell";
import { journeyMap } from "@/content/data";

export default function JourneySection() {
  return (
    <SectionShell id="journey" variant="journey">
      <SectionHeader
        title="forFAN 고객 여정 지도 (Before / During / After)"
        lead={
          <>
            고객 경험을 시간 순서로 정리하면 기능 설계가 쉬워집니다. ‘전·중·후’가 끊기지 않도록 연결하는 것이 핵심입니다.
          </>
        }
      />
      <SectionGrid>
        {journeyMap.map((j) => (
          <ItemCard
            key={j.phase}
            span={4}
            item={{
              id: j.phase,
              tag: j.phase,
              title: j.title,
              desc:
                "핵심 목표: " +
                (j.phase === "Before"
                  ? "방문 의도 만들기"
                  : j.phase === "During"
                    ? "만족도/자신감 높이기"
                    : "재방문/확산 만들기"),
              bullets: j.bullets,
              icon: j.icon,
            }}
          />
        ))}
      </SectionGrid>
    </SectionShell>
  );
}

        ### 📄 components\sections\PartnersSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `PartnersSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { partnerValue } from "@/content/data";
import SectionShell from "../SectionShell";

export default function PartnersSection() {
  return (
    <SectionShell id="partners" variant="partners">
      <SectionHeader
        title="가맹점주 · 해외 총판(마스터 프랜차이즈) 관점의 실질적 이점"
        lead={
          <>
            “앱을 런칭하면 무엇이 좋아지나요?”에 대한 답은 <b>매출·운영·데이터·마케팅 비용</b>입니다.
          </>
        }
      />

      <SectionGrid>
        {partnerValue.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </SectionGrid>
    </SectionShell>
  );
}

        ### 📄 components\sections\PrincipleSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `PrincipleSection`

        ```typescript
        import SectionHeader from "../SectionHeader";

export default function PrincipleSection() {
  return (
    <section className="section" id="principle">
      <SectionHeader
        title="1원칙"
        lead={
          <>
            기능을 늘리는 게 아니라 <b>경험의 질</b>을 설계합니다. 고객이 앱을 열었을 때 느끼는 감정(설렘→확신→여운)을 연결하면,
            그 자체가 리텐션이 되고 매출이 됩니다.
          </>
        }
      />
    </section>
  );
}

        ### 📄 components\sections\QuietRewardsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `QuietRewardsSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { quietRewardsCopy } from "@/content/data";

export default function QuietRewardsSection() {
  return (
    <section className="section" id="quiet">
      <SectionHeader
        title="“Quiet Rewards” UX 카피 세트 (경험 중심)"
        lead={
          <>
            리워드는 ‘코인’이 아니라 ‘감정’을 설계하는 언어입니다. 노출은 최소화하고, 체감 혜택을 자연스럽게 전달합니다.
          </>
        }
      />

      <SectionGrid>
        {quietRewardsCopy.map((c) => (
          <ItemCard
            key={c.title}
            span={4}
            item={{
              id: c.title,
              tag: "Copy",
              title: c.title,
              desc: "톤 가이드: 조용하게, 그러나 따뜻하게.",
              bullets: c.lines,
              icon: c.icon,
            }}
          />
        ))}
      </SectionGrid>
    </section>
  );
}

        ### 📄 components\sections\RevenueSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `RevenueSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { revenueLogic } from "@/content/data";

export default function RevenueSection() {
  return (
    <section className="section" id="revenue">
      <SectionHeader
        title="임원회의용: “왜 이 경험이 매출로 이어지는가” 연결 논리"
        lead={
          <>
            고객 경험은 감성이 아니라 KPI로 연결돼야 합니다. 아래 3단 연결(리텐션→객단가→유입)을 기준으로 설명하면 설득력이 올라갑니다.
          </>
        }
      />

      <SectionGrid>
        {revenueLogic.map((r) => (
          <ItemCard
            key={r.title}
            span={4}
            item={{
              id: r.title,
              tag: "Logic",
              title: r.title,
              desc: r.desc,
              bullets: r.bullets,
              icon: r.icon,
            }}
          />
        ))}
      </SectionGrid>
    </section>
  );
}

        ### 📄 content\data.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import { CardItem, CopyBucket, JourneyItem, LogicItem, Phase } from "./types";

export const brandItems: CardItem[] = [
  {
    id: "moment",
    tag: "1) Moment Ownership",
    title: "Moment Card — 순간을 ‘소유’하게 만들기",
    desc:
      "사진이 아니라 ‘그날의 선택과 감정’을 기록합니다. 촬영 후 자동으로 생성되는 카드로, 프레임/매장/날짜/친구 태그 등 ‘순간 메타’를 남깁니다.",
    bullets: [
      "촬영 후 자동 생성: 날짜 · 매장 · 프레임 · 참여자(태그)",
      "사진 없이도 ‘기억의 증거’가 남는 구조",
      "공유는 ‘이미지’가 아니라 ‘경험’ 중심으로",
    ],
    icon: "spark",
  },
  {
    id: "story",
    tag: "2) Story Layer",
    title: "Frame Story Layer — ‘왜 이 프레임인가’",
    desc:
      "프레임 선택을 단순 구매에서 ‘공감한 선택’으로 바꿉니다. 프레임마다 기획 의도/추천 상황/촬영 팁/제작자 스토리를 얹습니다.",
    bullets: [
      "프레임 설명: 감정/상황/추천 포즈/촬영 팁",
      "제작자/브랜드/아티스트의 의도 한 줄",
      "선택의 이유를 만드는 스토리 UX",
    ],
    icon: "map",
  },
  {
    id: "status",
    tag: "3) Subtle Status",
    title: "Invisible Fan Status — 배지가 아닌 ‘정체성 문장’",
    desc:
      "레벨 숫자 대신 ‘당신이 만든 영향’을 문장으로 제공합니다. 은근한 인정(Recognition)이 재방문과 자발적 확산을 만듭니다.",
    bullets: [
      "예: ‘이 프레임이 뜰 때 당신이 있었다’",
      "랭킹/서열 대신 ‘기여 기반’ 문장",
      "SNS 공유 가능한 ‘짧은 문장’ 중심",
    ],
    icon: "people",
  },
  {
    id: "rewards",
    tag: "4) Quiet Rewards",
    title: "Quiet Rewards — 코인은 조용히, 혜택은 체감되게",
    desc:
      "리워드(블록체인 코인)를 전면에 내세우지 않습니다. 대신 ‘잠금 해제/먼저 보기/조용한 쿠폰’처럼 체감 혜택을 자연스럽게 제공합니다.",
    bullets: [
      "키오스크 이용/앱 결제 → 코인 적립(백그라운드)",
      "사용처: 프레임 잠금 해제 · 할인 · 우선 접근",
      "메시지 톤: ‘Thanks for being here’",
    ],
    icon: "gift",
  },
  {
    id: "creator",
    tag: "5) Creator as Brand",
    title: "Creator Profile — 프레임 제작자를 ‘브랜드’로",
    desc:
      "forFAN의 핵심은 프레임=콘텐츠=브랜드입니다. 제작자 프로필을 단순 판매자가 아닌 ‘크리에이터’로 설계합니다.",
    bullets: [
      "한 줄 소개 + 대표 프레임 3개",
      "‘이 프레임은 이런 사람에게 추천’",
      "커뮤니티/RS(수익 분배)와 결합",
    ],
    icon: "circle",
  },
  {
    id: "philosophy",
    tag: "6) One Line Philosophy",
    title: "앱의 철학 한 줄 — 모든 기능의 기준점",
    desc:
      "기능보다 중요한 건 ‘왜 존재하는가’입니다. 앱 안에 문장으로 철학을 고정하고, 모든 UX가 그 문장을 설명하게 만듭니다.",
    bullets: [
      "“사진을 찍게 하지는 않습니다. 그 순간을 더 오래 기억하게 합니다.”",
      "온보딩/홈/프레임 상세에 일관되게 노출",
      "브랜드 메시지의 통일성 강화",
    ],
    icon: "copy",
  },
];

export const experienceItems: CardItem[] = [
  {
    id: "before_preview",
    phase: "Before" as Phase,
    icon: "spark",
    tag: "Before the Moment",
    title: "Moment Preview — 찍기 전의 설렘",
    desc: "오늘/이번 주에 어울리는 프레임과 무드를 가볍게 추천해, 앱을 여는 이유를 ‘설렘’으로 만듭니다.",
    bullets: [
      "오늘의 추천 프레임(가벼운 큐레이션)",
      "요일/시간대 기반 추천(과하지 않게)",
      "‘찍을까?’를 ‘찍자’로 바꾸는 트리거",
    ],
  },
  {
    id: "during_people",
    phase: "During" as Phase,
    icon: "people",
    tag: "People, not Photos",
    title: "People Tag Memory — 사람을 기억",
    desc: "사진보다 중요한 ‘누구와 함께였는지’를 남깁니다. 통계가 아니라 문장으로 관계를 표현합니다.",
    bullets: ["촬영 순간 참여자 태그", "관계는 숫자가 아니라 ‘문장’", "재방문 동기를 ‘사람’으로 연결"],
  },
  {
    id: "during_hint",
    phase: "During" as Phase,
    icon: "hint",
    tag: "Soft Guidance",
    title: "Quiet Pose & Mood Tips — 조용한 힌트",
    desc: "강요하는 튜토리얼이 아니라 ‘힌트’ 수준으로 프레임별 팁 1~2줄을 제공합니다.",
    bullets: ["프레임별 ‘이렇게 서면 좋아요’", "현장 문의 감소 + 만족도 상승", "텍스트 기반으로도 충분히 가능"],
  },
  {
    id: "after_follow",
    phase: "After" as Phase,
    icon: "clock",
    tag: "After the Moment",
    title: "Gentle Follow-up — 여운을 이어줌",
    desc: "촬영 다음 날/일주일 뒤에도 경험이 자연스럽게 이어집니다. 과도한 알림 대신 부드러운 리마인드.",
    bullets: ["‘어제의 순간’ 리마인드", "관련 프레임/스토리 추천", "재방문 이유를 ‘추억’으로 만든다"],
  },
  {
    id: "after_taste",
    phase: "After" as Phase,
    icon: "mood",
    tag: "My Taste, Quietly",
    title: "Taste Memory — 말하지 않아도 알아주는 취향",
    desc: "취향 설정을 강요하지 않고 사용 패턴을 바탕으로 무드를 형용사로 표현합니다.",
    bullets: ["Playful · Cozy · Minimal 같은 무드", "개인화지만 ‘가벼운’ 개인화", "브랜드 톤을 해치지 않음"],
  },
  {
    id: "after_circle",
    phase: "After" as Phase,
    icon: "circle",
    tag: "Belonging, Not Community",
    title: "Quiet Circles — 커뮤니티보다 소속감",
    desc: "광장형 커뮤니티 대신 같은 프레임을 좋아하는 사람들의 느슨한 서클. 글을 쓰지 않아도 함께 있는 느낌.",
    bullets: ["‘이 프레임을 좋아한 사람들’ 중심", "운영 부담 최소화", "자연스러운 UGC 유도"],
  },
  {
    id: "after_surprise",
    phase: "After" as Phase,
    icon: "gift",
    tag: "Small Surprise",
    title: "Unexpected Moments — 작은 기쁨",
    desc: "보상보다 강력한 건 예상 밖의 기쁨. 특정 순간에 조용히 열리는 프레임/혜택으로 감정을 남깁니다.",
    bullets: ["n번째 방문/첫 사용/기념일에 제공", "카피 톤: “We thought you’d like this.”", "리워드는 전면 노출하지 않는다"],
  },
];

export const journeyMap: JourneyItem[] = [
  {
    phase: "Before",
    icon: "map",
    title: "Before — ‘오늘은 뭘 찍지?’",
    bullets: ["Moment Preview로 ‘오늘의 프레임’ 제안", "매장/지역 기반 ‘가까운 경험’ 제안(조용히)", "촬영 팁 한 줄로 불안감 낮추기"],
  },
  {
    phase: "During",
    icon: "hint",
    title: "During — ‘지금 이 순간을 더 잘’",
    bullets: ["프레임별 Quiet Pose Tip (1~2줄)", "People Tag: 누구와 함께인지 남기기", "리워드는 보이지 않게 누적(Quiet Rewards)"],
  },
  {
    phase: "After",
    icon: "clock",
    title: "After — ‘여운이 다시 방문을 만든다’",
    bullets: ["Gentle Follow-up으로 자연스러운 리마인드", "Taste Memory로 ‘내 취향’ 문장화", "Quiet Circles로 소속감 + UGC 흐름 생성"],
  },
];

export const quietRewardsCopy: CopyBucket[] = [
  {
    icon: "gift",
    title: "적립(노출 최소화)",
    lines: ["“Thanks for being here.”", "“오늘의 순간에 작은 선물을 남겼어요.”", "“방금 경험이 조용히 저장됐어요.”"],
  },
  {
    icon: "copy",
    title: "사용(체감 중심)",
    lines: ["“This one’s on us.”", "“이 프레임, 오늘은 열어둘게요.”", "“조용히 혜택을 적용했어요.”"],
  },
  {
    icon: "spark",
    title: "서프라이즈(감정 설계)",
    lines: ["“We thought you’d like this.”", "“당신의 취향에 맞춰 하나 골라뒀어요.”", "“오늘은 이 무드가 잘 어울릴 것 같아요.”"],
  },
];

export const revenueLogic: LogicItem[] = [
  {
    icon: "link",
    title: "1) 경험 → 재방문(리텐션)",
    desc: "찍기 전(Preview)·찍는 중(Tips)·찍고 난 뒤(Follow-up)가 연결되면 ‘한 번’이 ‘반복’이 됩니다.",
    bullets: ["방문 빈도 ↑", "비수기 완충(캠페인/추천)", "재방문이 매출의 가장 큰 레버"],
  },
  {
    icon: "chart",
    title: "2) 재방문 → 객단가(ARPU) 상승",
    desc: "Quiet Rewards는 ‘코인’이 아니라 ‘체감 혜택’으로 설계됩니다. 프레임 잠금해제/쿠폰은 구매를 자연스럽게 만듭니다.",
    bullets: ["앱 전용 프레임/프로모션 전환 ↑", "업셀(프레임/굿즈) 가능성 ↑", "할인은 ‘조용히’ 적용해 거부감 ↓"],
  },
  {
    icon: "people",
    title: "3) 소속감 → 유입(Organic Growth)",
    desc: "Quiet Circles/UGC는 광고비를 줄이고, ‘친구와 함께’ 오게 만듭니다. 촬영은 사회적 행위입니다.",
    bullets: ["자발적 공유/추천 ↑", "신규 유입 CAC ↓", "프레임이 ‘밈’처럼 확산"],
  },
];

export const partnerValue: CardItem[] = [
  {
    id: "p_rev",
    tag: "Revenue",
    title: "추가 매출원: 앱-기반 리텐션 & 재방문 촉진",
    desc:
      "오프라인 ‘1회 방문’이 앱을 통해 ‘반복 방문’으로 바뀝니다. 쿠폰/리워드/프레임 잠금해제는 현장 매출을 직접 끌어올립니다.",
    bullets: ["직영/가맹 공통: 촬영권·리워드로 재방문 유도", "앱 전용 프레임/프로모션으로 객단가(ARPU) 상승", "성수기·비수기 편차 완화(캠페인으로 수요 조절)"],
    icon: "chart",
  },
  {
    id: "p_mkt",
    tag: "Marketing",
    title: "마케팅 비용 절감: 앱이 ‘로컬 CRM’ 역할",
    desc:
      "가맹점주/해외 총판에게 가장 큰 고통은 ‘지역별 마케팅’입니다. 앱은 고객을 직접 연결하고, 매장 단위 쿠폰/메시지로 전환 비용을 낮춥니다.",
    bullets: ["매장 단위 쿠폰(예: 4,000원)으로 즉시 유입", "공지/이벤트/신규 프레임을 앱으로 푸시(소셜보다 효율적)", "UGC/커뮤니티가 자연 노출을 만들며 광고 의존도 감소"],
    icon: "spark",
  },
  {
    id: "p_data",
    tag: "Data",
    title: "데이터 기반 운영: ‘감’이 아니라 ‘지표’로 매장 운영",
    desc:
      "오프라인 운영에서 가장 부족한 건 ‘누가 왜 오는지’ 데이터입니다. 앱은 방문-결제-프레임-리워드를 연결해, 매장 운영 의사결정을 숫자로 바꿉니다.",
    bullets: ["프레임별 판매/선호, 시간대별 수요, 재방문율 추적", "지역별 트렌드 감지 → 로컬 전용 프레임 기획 가능", "프로모션 A/B 테스트로 최적의 쿠폰/경품 구조 도출"],
    icon: "link",
  },
  {
    id: "p_ops",
    tag: "Operations",
    title: "운영 효율: 현장 응대/CS 부담 감소",
    desc:
      "고객 문의(‘어떤 프레임이 예뻐요?’, ‘어떻게 찍어요?’)의 상당 부분을 커뮤니티/가이드로 흡수해 매장 운영 부담을 줄입니다.",
    bullets: ["프레임별 촬영 팁/가이드 → 현장 문의 감소", "커뮤니티 Q&A로 고객이 고객을 돕는 구조", "이벤트/공지의 앱화로 현장 안내물·인력 부담 축소"],
    icon: "hint",
  },
  {
    id: "p_global",
    tag: "Global Expansion",
    title: "해외 총판 관점: ‘로컬 표준화’와 ‘본사 콘텐츠 동기화’",
    desc:
      "마스터 프랜차이즈의 어려움은 국가별 운영 편차입니다. 앱은 콘텐츠/정책을 표준화하고, 본사 기획을 국가별로 안전하게 확장하는 채널이 됩니다.",
    bullets: ["본사 프레임/이벤트를 글로벌 동기화(국가별 스케줄 분리 가능)", "권역별 리워드/쿠폰 정책 분리(환율/가격/규제 대응)", "멀티 리전 인프라로 성능/안정성 확보(1M MAU 확장)"],
    icon: "map",
  },
  {
    id: "p_ecosys",
    tag: "Partner Ecosystem",
    title: "파트너 생태계: 로컬 IP/인플루언서 콜라보를 ‘제품화’",
    desc:
      "총판/가맹점주는 로컬 IP와 협업을 ‘한 번 이벤트’로 끝내기 쉽습니다. 앱은 이를 프레임 마켓/채널로 전환해 지속 매출로 만드는 장치입니다.",
    bullets: ["로컬 인플루언서 프레임 → 앱 전용 판매로 지속화", "판매 시 RS(수익 분배) 구조로 파트너/크리에이터 참여 촉진", "국가별 인기 프레임을 본사로 역수출(글로벌 확산 소재)"],
    icon: "people",
  },
];

export const doList = [
  "앱은 Hub, 키오스크는 Core Experience",
  "보상은 조용히, 체감 혜택은 확실히",
  "기억/기여를 ‘문장’으로 남기는 UX",
  "프레임 스토리로 선택의 이유를 만든다",
];

export const dontList = [
  "앱 내 촬영/필터 추가 (키오스크 경험과 충돌)",
  "과한 커뮤니티 기능(피드 과열, 운영 비용 폭증)",
  "랭킹/서열 중심 구조(브랜드 톤 훼손)",
  "리워드 과잉 노출 UI(‘코인 앱’으로 인식될 리스크)",
];

export const navLinks = [
  { href: "#principle", label: "원칙" },
  { href: "#journey", label: "여정 지도" },
  { href: "#experience", label: "고객 경험(탭)" },
  { href: "#quiet", label: "Quiet Rewards 카피" },
  { href: "#revenue", label: "경험→매출 논리" },
  { href: "#partners", label: "파트너 이점" },
  { href: "#dosdonts", label: "DO / DON'T" },
] as const;

// content/data.ts 에 아래 내용을 추가하세요.
import { CardItem } from "./types";

export const appleIdentityItems: CardItem[] = [
  {
    id: "haptic",
    tag: "Taptic Engine",
    title: "Feel the moment.",
    desc: "화면을 터치하는 순간, 손끝에 전해지는 미세하고 기분 좋은 진동. 리워드가 쌓이는 순간을 '무게감' 있게 전달합니다.",
    bullets: [
      "리워드 획득 시 '딸깍'하는 아날로그 감각",
      "프레임 선택 시 부드러운 텐션 피드백",
      "성공/실패가 아닌 '완성'의 감각 전달"
    ],
    icon: "spark" // 기존 아이콘 재사용 또는 'wave' 등 추가 가능
  },
  {
    id: "dynamic",
    tag: "Live Activities",
    title: "Always at a glance.",
    desc: "앱을 굳이 열지 않아도 됩니다. 다이내믹 아일랜드가 당신의 촬영 순서와 매장 위치를 조용히 알려줍니다.",
    bullets: [
      "잠금 화면에서 대기 순서 실시간 확인",
      "매장 근처 진입 시 추천 프레임 팝업",
      "앱 진입 뎁스(Depth)를 0으로 단축"
    ],
    icon: "clock"
  },
  {
    id: "privacy",
    tag: "Privacy by Design",
    title: "Your data. Your story.",
    desc: "당신의 추억은 온전히 당신의 것입니다. 우리는 당신이 누구인지보다, 무엇을 좋아하는지만 기억합니다.",
    bullets: [
      "얼굴 데이터 저장 없음 (On-device 처리)",
      "위치 기록 미저장 (실시간 트리거만 활용)",
      "투명한 데이터 사용 리포트 제공"
    ],
    icon: "lock" // Icon.tsx에 lock 추가 필요 (또는 기존 circle 등 사용)
  }
];
        ### 📄 content\types.ts
        > **Context Summary**
        * wb **Type/Intf:** `Phase`
* wb **Type/Intf:** `CardItem`
* wb **Type/Intf:** `JourneyItem`
* wb **Type/Intf:** `CopyBucket`
* wb **Type/Intf:** `LogicItem`

        ```ts
        export type Phase = "Before" | "During" | "After";

export type CardItem = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  icon?: string;
  phase?: Phase;
};

export type JourneyItem = {
  phase: Phase;
  icon: string;
  title: string;
  bullets: string[];
};

export type CopyBucket = {
  icon: string;
  title: string;
  lines: string[];
};

export type LogicItem = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
};

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

        ### 📄 app\globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        @tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Apple Pro Color Palette */
  --bg: #f5f5f7;
  --card-bg: #ffffff;
  --text-primary: #1d1d1f;
  --text-secondary: #86868b;
  --text-tertiary: #a1a1a6;
  --accent-blue: #0071e3;
  --border-light: rgba(0, 0, 0, 0.05);
  
  /* Easing */
  --ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1);
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden; /* 가로 스크롤 방지 */
}

/* 🟢 1. Shared Layout System */
.container {
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.section {
  padding: 80px 0;
  position: relative;
}

/* Bento Grid (ItemCard용) */
.bento-grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;
}
@media (max-width: 900px) {
  .bento-grid-container { grid-template-columns: 1fr; }
}

/* Typography */
.h1 {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0 0 24px 0;
  color: #1d1d1f;
}

.h2 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: #1d1d1f;
}

.lead {
  font-size: 21px;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 400;
  max-width: 920px;
  margin: 0 auto 50px;
  word-break: keep-all;
}
.lead b { color: var(--text-primary); }

/* 🟢 2. Hero Section Styles (복구됨) */
.hero { padding: 60px 0 40px; }
.kicker { 
  font-size: 13px; font-weight: 600; color: #f56300; 
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; 
}
.sub { 
  font-size: 20px; line-height: 1.6; color: var(--text-secondary); 
  max-width: 800px; margin-bottom: 40px; 
}

.heroCards {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  margin-top: 40px;
}
@media (max-width: 900px) { .heroCards { grid-template-columns: 1fr; } }

.card {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.02);
}
.quote {
  padding: 40px;
  background: linear-gradient(135deg, #fafafa, #f5f5f7);
  border-bottom: 1px solid rgba(0,0,0,0.03);
}
.quoteText { font-size: 24px; font-weight: 700; line-height: 1.3; color: #1d1d1f; }
.quoteSmall { margin-top: 12px; font-size: 15px; color: var(--text-secondary); }
.cardPad { padding: 32px; }
.badges { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.badge {
  font-size: 13px; font-weight: 500; color: var(--text-secondary);
  background: #f5f5f7; padding: 6px 12px; border-radius: 8px;
}
.hr { height: 1px; background: rgba(0,0,0,0.06); margin: 24px 0; }
.kbd { 
  font-size: 11px; font-weight: 700; text-transform: uppercase; color: #86868b;
  border: 1px solid rgba(0,0,0,0.1); padding: 3px 6px; border-radius: 6px; 
}

/* 🟢 3. Experience Rail Styles (복구됨) */
.rail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}
@media (max-width: 768px) { .rail { grid-template-columns: 1fr; } }

.railStep {
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 18px;
  padding: 20px;
  transition: 0.3s var(--ease-apple);
}
.railActive {
  background: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  border-color: transparent;
  transform: scale(1.02);
}
.railTitle { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: #1d1d1f; }
.railDesc { font-size: 13px; color: var(--text-secondary); line-height: 1.4; }

.flowHint {
  margin: 0 0 40px;
  padding: 16px;
  background: rgba(0,113,227,0.05);
  border-radius: 12px;
  color: #0071e3;
  font-size: 14px;
  text-align: center;
}

/* 🟢 4. DO / DON'T Styles (복구됨) */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 768px) { .split { grid-template-columns: 1fr; } }

.doDont {
  background: #fff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}
.listTitle {
  font-size: 18px; font-weight: 800; margin-bottom: 20px;
  display: flex; align-items: center; gap: 8px;
}

/* 기존 Bullets 재정의 (ItemCard와 DoDont 공용) */
.bullets { list-style: none; padding: 0; margin: 0; }
.bullets li {
  position: relative;
  padding-left: 14px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #424245;
  line-height: 1.6;
}
.bullets li::before {
  content: "•"; position: absolute; left: 0; color: #d2d2d7;
}

/* 🟢 5. Nav & Footer (유지) */
.nav {
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  background: rgba(245, 245, 247, 0.8);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.navInner { display: flex; justify-content: space-between; padding: 14px 0; align-items: center; }
.navLinks { display: flex; gap: 8px; flex-wrap: wrap; }
.pill { padding: 8px 16px; border-radius: 99px; font-size: 12px; font-weight: 600; background: rgba(0,0,0,0.04); color: var(--text-secondary); transition: 0.2s; text-decoration: none; }
.pill:hover { background: #000; color: #fff; }

.footer { padding: 80px 0; border-top: 1px solid rgba(0,0,0,0.05); color: var(--text-secondary); font-size: 12px; margin-top: 60px; }

/* 🟢 6. Animation Utility */
.reveal-container {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s var(--ease-apple), transform 0.8s var(--ease-apple);
  display: block; 
}
.reveal-visible { opacity: 1; transform: translateY(0); }

/* ... 기존 코드 아래에 추가 ... */

/* 🟢 Ambient Aurora Background */
.aurora-bg {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: 
    radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.15) 0px, transparent 50%);
  filter: blur(80px);
  z-index: -1;
  opacity: 0.8;
  animation: aurora-move 20s ease infinite alternate;
  pointer-events: none; /* 클릭 방해 금지 */
}

@keyframes aurora-move {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-2%, 2%) scale(1.05); }
  100% { transform: translate(2%, -2%) scale(1); }
}

/* 🟢 Text Gradient (강조용) */
.text-gradient {
  background: linear-gradient(135deg, #1d1d1f 0%, #86868b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* ... 기존 globals.css 내용 아래에 추가 ... */

/* 🟢 Section Box System (공통) */
.section-island {
  border-radius: 48px; /* 더 둥글고 유려하게 */
  padding: 80px 40px;
  margin: 40px auto;
  position: relative;
  overflow: hidden;
  /* 기본적으로 모든 섹션에 미세한 깊이감 부여 */
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
}

@media (max-width: 768px) {
  .section-island { padding: 40px 24px; border-radius: 32px; margin: 24px auto; }
}

/* ⚪️ Theme 1: Clean White (Journey, Do/Dont) */
.theme-clean {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.03);
}

/* 🌫️ Theme 2: Soft Mist (Experience, Revenue) */
.theme-mist {
  background: #fbfbfd;
  border: 1px solid rgba(0,0,0,0.05);
}

/* 💎 Theme 3: Flashy Growth (Partners - 수익 극대화) */
.theme-growth {
  background: linear-gradient(135deg, #F0F9FF 0%, #E6FFFA 50%, #F5F3FF 100%);
  border: 1px solid rgba(255,255,255,0.5);
}
/* 움직이는 오로라 효과 (Partners용) */
.theme-growth::before {
  content: "";
  position: absolute;
  top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at 50% 50%, rgba(52, 199, 89, 0.15), transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(0, 113, 227, 0.15), transparent 50%);
  animation: aurora-spin 15s linear infinite;
  z-index: 0; pointer-events: none;
}

/* 🪙 Theme 4: Flashy Gold (Quiet Rewards - 코인) */
.theme-gold {
  background: linear-gradient(180deg, #FFFBF0 0%, #FFFFFF 80%);
  border: 1px solid rgba(218, 165, 32, 0.1);
}
/* 골드 쉬머 효과 (Rewards용) */
.theme-gold::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.15) 0%, transparent 60%),
    repeating-linear-gradient(45deg, rgba(218, 165, 32, 0.03) 0px, rgba(218, 165, 32, 0.03) 1px, transparent 1px, transparent 10px);
  z-index: 0; pointer-events: none;
}

@keyframes aurora-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
        ### 📄 app\layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/DynamicIsland`
* 🧩 **Component (Default):** `RootLayout`

        ```typescript
        import "./globals.css";
import DynamicIslandProvider from "@/components/DynamicIsland"; // 👈 Import

export const metadata = {
  title: "forFAN — Apple CMO View",
  description: "forFAN을 '찍는 앱'이 아닌 '경험을 설계하는 브랜드 플랫폼'으로",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* 🟢 Provider로 감싸줍니다 */}
        <DynamicIslandProvider>
          {children}
        </DynamicIslandProvider>
      </body>
    </html>
  );
}
        ### 📄 app\page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/lib/useLanguage, @/components/ScrollReveal, @/components/SectionShell, @/components/sections/HeroSection, @/components/sections/PrincipleSection`...
* 🧩 **Component (Default):** `Page`

        ```typescript
        "use client";

import { LanguageProvider } from "@/lib/useLanguage"; // 👈 Provider Import
import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";
import HeroSection from "@/components/sections/HeroSection";
import PrincipleSection from "@/components/sections/PrincipleSection";
import JourneySection from "@/components/sections/JourneySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AppleIdentitySection from "@/components/sections/AppleIdentitySection";
import AppleWalletSection from "@/components/sections/AppleWalletSection";
import QuietRewardsSection from "@/components/sections/QuietRewardsSection";
import RevenueSection from "@/components/sections/RevenueSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CreatorEconomySection from "@/components/sections/CreatorEconomySection";
import DosDontsSection from "@/components/sections/DosDontsSection";
import FloatingDock from "@/components/FloatingDock";

export default function Page() {
  return (
    /* 🟢 최상위 래퍼를 LanguageProvider로 설정 */
    <LanguageProvider>
      
      {/* 이제 FloatingDock이 Provider 내부에 있으므로 에러가 사라집니다 */}
      <FloatingDock />
      
      <main>
        <HeroSection />

        <div className="container" style={{ paddingTop: 40 }}>
          <ScrollReveal delay={100}><PrincipleSection /></ScrollReveal>
        </div>
        
        <div className="container">
          <SectionShell id="journey" className="theme-clean">
            <JourneySection />
          </SectionShell>
        </div>

        <div className="container">
          <SectionShell id="experience" className="theme-mist">
             <ExperienceSection />
          </SectionShell>
        </div>

        <AppleIdentitySection />
        
        <div className="container">
          <AppleWalletSection /> 
        </div>

        <QuietRewardsSection />

        {/* Revenue Section (Self-contained Theme) */}
        <RevenueSection />

        {/* Partners Section (Self-contained Theme) */}
        <PartnersSection />

        {/* Creator Economy Section (Self-contained Theme) */}
        <CreatorEconomySection />

        <div className="container">
           <SectionShell id="dosdonts" className="theme-clean">
             <DosDontsSection />
           </SectionShell>
        </div>

        <footer className="footer container" style={{ marginBottom: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800, color: "var(--text-primary)" }}>forFAN Global · Experience-first Brief</div>
              <div style={{ marginTop: 6, color: "var(--text-secondary)" }}>
                Designed by LK Ventures for customers.
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
               <span className="kbd">Confidential</span>
            </div>
          </div>
        </footer>
      </main>
    </LanguageProvider>
  );
}
        ### 📄 components\Anchor.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Anchor`

        ```typescript
        export default function Anchor({ href, label }: { href: string; label: string }) {
  return (
    <a className="pill" href={href}>
      {label}
    </a>
  );
}

        ### 📄 components\DynamicIsland.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `DynamicIslandProvider`
* ww **Hooks:** `useContext`

        ```typescript
        "use client";

import React, { createContext, useContext, useState } from "react";
import Icon from "./Icon";

// 1. Context 정의
type IslandState = {
  isActive: boolean;
  message: string;
  subMessage?: string;
  icon?: string;
};

type IslandContextType = {
  triggerIsland: (msg: string, sub?: string, icon?: string) => void;
};

const IslandContext = createContext<IslandContextType | null>(null);

export const useDynamicIsland = () => {
  const context = useContext(IslandContext);
  if (!context) throw new Error("useDynamicIsland must be used within a DynamicIslandProvider");
  return context;
};

export default function DynamicIslandProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IslandState>({ isActive: false, message: "", icon: "spark" });

  const triggerIsland = (message: string, subMessage: string = "", icon: string = "spark") => {
    setState({ isActive: false, message: "", icon }); // Reset to re-trigger animation
    
    setTimeout(() => {
      setState({ isActive: true, message, subMessage, icon });
    }, 50);

    setTimeout(() => {
      setState((prev) => ({ ...prev, isActive: false }));
    }, 4000); // 4초 후 닫힘
  };

  return (
    <IslandContext.Provider value={{ triggerIsland }}>
      {children}
      
      {/* 🏝️ UI Container */}
      <div className="island-container">
        <div className={`island-pill ${state.isActive ? "expanded" : "idle"}`}>
          <div className="island-content">
            <div className="content-layout">
              <div className="icon-area">
                <div className={`anim-icon ${state.isActive ? "pop-in" : ""}`}>
                   <Icon name={state.icon} />
                </div>
              </div>
              <div className="text-area">
                <span className="title">{state.message}</span>
                {state.subMessage && <span className="desc">{state.subMessage}</span>}
              </div>
              {/* 장식용 오디오 바 */}
              <div className="audio-bars">
                 <span className="bar" />
                 <span className="bar" />
                 <span className="bar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .island-container {
          position: fixed;
          /* 🟢 [수정] 헤더 높이(약 64px) + 여백(16px) = 80px 아래에 위치 */
          top: 15px; 
          left: 0; 
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 999; /* 네비게이션바보다 위, 혹은 상황에 따라 아래로 조정 */
          pointer-events: none;
        }

        .island-pill {
          background: #000;
          color: #fff;
          border-radius: 99px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 쫀득한 모션 */
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        /* Idle: 숨겨진 상태 (크기 0이 아니라 작게 대기하다가 사라짐) */
        .island-pill.idle {
          width: 0px; 
          height: 36px;
          opacity: 0;
          transform: translateY(-10px);
        }

        /* Expanded: 알림 표시 */
        .island-pill.expanded {
          width: 380px;
          height: 88px;
          opacity: 1;
          transform: translateY(0);
          border-radius: 44px;
        }

        .island-content {
          width: 380px; 
          height: 88px;
          display: flex;
          align-items: center;
          padding: 0 28px;
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }
        
        .island-pill.expanded .island-content {
          opacity: 1;
          transition-delay: 0.2s;
        }

        .content-layout {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 18px;
        }

        .icon-area {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #FFD700;
        }

        .anim-icon.pop-in {
          animation: pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .text-area {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
        }
        .title { font-size: 15px; font-weight: 600; color: #fff; line-height: 1.3; }
        .desc { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.3; }

        .audio-bars { display: flex; gap: 4px; align-items: center; height: 20px; }
        .bar {
          width: 4px; background: #0071e3; border-radius: 99px;
          animation: eq 1s infinite ease-in-out;
        }
        .bar:nth-child(1) { height: 12px; animation-delay: 0s; }
        .bar:nth-child(2) { height: 20px; animation-delay: 0.1s; }
        .bar:nth-child(3) { height: 16px; animation-delay: 0.2s; }

        @keyframes pop {
          0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); }
        }
        @keyframes eq {
          0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); }
        }

        @media (max-width: 450px) {
          .island-pill.expanded { width: 92vw; }
          .island-content { width: 100%; padding: 0 20px; }
        }
      `}</style>
    </IslandContext.Provider>
  );
}
        ### 📄 components\FloatingDock.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react, @/lib/useLanguage`
* 🧩 **Component (Default):** `FloatingDock`
* ww **Hooks:** `useEffect, useLanguage, useState`

        ```typescript
        "use client";

import { navLinks } from "@/content/data";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/useLanguage";

export default function FloatingDock() {
  const [activeId, setActiveId] = useState("");
  const { lang, toggleLang } = useLanguage();

  // 🟢 [추가] 언어별 라벨/국기 매핑
  const langLabel = {
    "ko": "🇰🇷",
    "en": "🇺🇸",
    "zh-CN": "🇨🇳",
    "zh-TW": "🇹🇼"
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((sec) => {
        if (!sec) return;
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveId(`#${sec.id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="floating-dock">
      <div className="dock-glass">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`dock-item ${activeId === link.href ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              setActiveId(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        
        <div className="dock-divider" />
        
        {/* 🟢 [수정] 4개 국어 순환 버튼 */}
        <button 
          className="dock-item lang-btn" 
          onClick={toggleLang}
          title="Change Language"
        >
          {langLabel[lang]}
        </button>
      </div>

      <style jsx>{`
        .floating-dock {
          position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: auto; max-width: 90vw;
        }
        .dock-glass {
          display: flex; align-items: center; gap: 4px; padding: 6px;
          background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.05);
          overflow-x: auto;
        }
        .dock-item {
          padding: 10px 16px; border-radius: 18px; font-size: 13px; font-weight: 600; color: #86868b;
          white-space: nowrap; transition: all 0.2s ease; text-decoration: none; border: none; background: transparent; cursor: pointer;
        }
        .dock-item:hover { background: rgba(0, 0, 0, 0.05); color: #1d1d1f; }
        .dock-item.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
        
        .dock-divider { width: 1px; height: 20px; background: rgba(0,0,0,0.1); margin: 0 4px; }
        
        /* 국기 아이콘 크기 최적화 */
        .lang-btn { font-size: 18px; padding: 6px 12px; line-height: 1; }

        @media (max-width: 600px) {
          .dock-glass { padding: 4px; border-radius: 16px; }
          .dock-item { padding: 8px 12px; font-size: 12px; }
        }
      `}</style>
    </nav>
  );
}
        ### 📄 components\Icon.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Icon`

        ```typescript
        export default function Icon({ name }: { name?: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z" />
          <path d="M19 3l.6 2.2L22 6l-2.4.8L19 9l-.6-2.2L16 6l2.4-.8L19 3z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" />
          <path d="M21 21v-2a4 4 0 00-3-3.9" />
          <path d="M16 3.1a4 4 0 010 7.8" />
        </svg>
      );
    case "hint":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 00-4 12c.7.7 1 1.5 1 2.5V17h6v-.5c0-1 .3-1.8 1-2.5A7 7 0 0012 2z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "mood":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 11-9-9" />
          <path d="M21 3v9h-9" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7c0-2 1-4 3-4 2.5 0 3.5 2.2 2 4" />
          <path d="M12 7c0-2-1-4-3-4-2.5 0-3.5 2.2-2 4" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <path d="M9 9h10v10H9z" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
          <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14v4" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

        ### 📄 components\ItemCard.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types, react`
* 🧩 **Component (Default):** `ItemCard`
* ww **Hooks:** `useState`

        ```typescript
        "use client";

import Icon from "./Icon";
import { CardItem } from "@/content/types";
import ScrollReveal from "./ScrollReveal";
import { useRef, useState } from "react";

export default function ItemCard({
  item,
  span = 6,
  delay = 0,
}: {
  item: CardItem;
  span?: 4 | 6 | 12;
  showArt?: boolean;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // 🖱️ 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // 카드 내 X 좌표
    const y = e.clientY - rect.top;  // 카드 내 Y 좌표

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3; // 상하 기울기 (최대 3도)
    const rotateY = ((x - centerX) / centerX) * 3;  // 좌우 기울기 (최대 3도)

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // 마우스 나가면 원상복구
  };

  return (
    <ScrollReveal
      delay={delay}
      style={{ gridColumn: `span ${span}` }}
      className="bento-wrapper"
    >
      <div
        style={{ perspective: "1000px" }} // 3D 공간 정의
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <article
          ref={cardRef}
          className="bento-card"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.1s ease-out, box-shadow 0.3s ease", // 회전은 즉각적으로, 그림자는 부드럽게
          }}
        >
          <div className="bento-content">
            {item.icon && (
              <div className="icon-box">
                <Icon name={item.icon} />
              </div>
            )}
            <span className="bento-tag">{item.tag}</span>
            <h3 className="bento-title">{item.title}</h3>
            <p className="bento-desc">{item.desc}</p>

            {item.bullets.length > 0 && (
              <ul className="bento-list">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </div>

          <style jsx>{`
            .bento-card {
              height: 100%;
              background: #ffffff;
              border-radius: 24px;
              padding: 28px;
              /* 기본 그림자 */
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.03);
              border: 1px solid rgba(0, 0, 0, 0.04);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              /* 하드웨어 가속 */
              will-change: transform;
            }
            
            /* Hover 시 더 깊은 그림자와 하이라이트 */
            .bento-card:hover {
              box-shadow: 
                0 20px 40px -5px rgba(0, 0, 0, 0.1), /* 깊은 그림자 */
                0 0 0 1px rgba(0,0,0,0.05); /* 경계선 강화 */
            }

            .icon-box {
              width: 44px; height: 44px;
              background: #f5f5f7;
              border-radius: 12px; /* iOS 스타일 스퀘어클 */
              display: flex; align-items: center; justify-content: center;
              margin-bottom: 16px;
              color: #1d1d1f;
            }
            .bento-tag {
              font-size: 11px; font-weight: 700; color: #86868b;
              text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;
            }
            .bento-title {
              font-size: 20px; font-weight: 700; color: #1d1d1f;
              margin: 0 0 10px 0; line-height: 1.3;
              letter-spacing: -0.01em;
            }
            .bento-desc {
              font-size: 15px; line-height: 1.6; color: #86868b; margin: 0 0 20px 0;
            }
            .bento-list {
              padding: 0; margin: 0; list-style: none;
              border-top: 1px solid rgba(0,0,0,0.05); padding-top: 16px;
            }
            .bento-list li {
              font-size: 13px; color: #6e6e73; margin-bottom: 6px;
              position: relative; padding-left: 12px;
            }
            .bento-list li::before {
              content: "•"; position: absolute; left: 0; color: #d2d2d7;
            }
          `}</style>
        </article>
      </div>
    </ScrollReveal>
  );
}
        ### 📄 components\ScrollReveal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `ScrollReveal`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        "use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "", // 👈 추가
  style = {},     // 👈 추가
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // 외부에서 받은 className과 내부 스타일을 병합합니다.
      className={`reveal-container ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...style // 👈 외부 스타일(Grid 속성 등)을 여기에 적용합니다.
      }}
    >
      {children}
    </div>
  );
}
        ### 📄 components\SectionGrid.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionGrid`

        ```typescript
        "use client";

export default function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="bento-grid-container">
      {children}
    </div>
  );
}
        ### 📄 components\SectionHeader.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionHeader`

        ```typescript
        export default function SectionHeader({
  title,
  lead,
}: {
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

        ### 📄 components\SectionShell.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionShell`

        ```typescript
        "use client";

export default function SectionShell({
  id,
  className = "theme-clean", // 기본값: Clean White
  children,
}: {
  id: string;
  className?: string; // variant 대신 className으로 직접 제어
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-wrapper">
      <div className="container">
        <div className={`section-island ${className}`}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .section-wrapper {
          padding: 20px 0; /* 섹션 간 간격 조절 */
          width: 100%;
        }
        /* section-island 내부는 z-index 관리가 필요할 수 있음 */
        .section-island > :global(*) {
          position: relative; z-index: 1;
        }
      `}</style>
    </section>
  );
}
        ### 📄 components\Tabs.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types`
* 🧩 **Component (Default):** `Tabs`

        ```typescript
        "use client";

import { Phase } from "@/content/types";

export default function Tabs({
  value,
  onChange,
}: {
  value: Phase;
  onChange: (v: Phase) => void;
}) {
  return (
    <div className="segmented-control">
      {(["Before", "During", "After"] as Phase[]).map((p) => (
        <button
          key={p}
          className={`segment-btn ${value === p ? "active" : ""}`}
          onClick={() => onChange(p)}
          type="button"
        >
          {p}
        </button>
      ))}

      <style jsx>{`
        .segmented-control {
          display: inline-flex;
          background: rgba(118, 118, 128, 0.12);
          padding: 2px;
          border-radius: 9px;
          margin-bottom: 32px;
        }
        .segment-btn {
          padding: 6px 20px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #1d1d1f;
          transition: all 0.2s ease;
        }
        .segment-btn:hover { opacity: 0.7; }
        .segment-btn.active {
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
        ### 📄 components\sections\AppleIdentitySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `AppleIdentitySection`
* ww **Hooks:** `useDynamicIsland, useState`

        ```typescript
        "use client";

import { useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useDynamicIsland } from "../DynamicIsland";

export default function AppleIdentitySection() {
  const { triggerIsland } = useDynamicIsland();
  
  // 🔦 Spotlight & 3D Tilt Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  // 3D Tilt 상태
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const div = containerRef.current;
    const rect = div.getBoundingClientRect();
    
    // 마우스 좌표 (컨테이너 기준)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight 위치 업데이트
    setPosition({ x, y });
    setOpacity(1);

    // 3D Tilt 계산 (중앙을 0,0으로 기준)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 기울기 강도 조절 (너무 심하면 어지러우니 미세하게)
    const rotateX = ((y - centerY) / centerY) * -2; // 상하 (최대 2도)
    const rotateY = ((x - centerX) / centerX) * 2;  // 좌우 (최대 2도)

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 }); // 원위치
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-rounded-bg identity-bg">
        <ScrollReveal>
          <div className="header-group">
            <h2 className="title-grad">Beyond the Touch.</h2>
            <p className="lead-text">
              소프트웨어를 넘어, <b>Taptic Engine</b>과 <b>Dynamic Island</b>까지.<br />
              인생네컷 디바이스의 하드웨어 감각을 앱 경험으로 연결합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 🔦 Container: Spotlight + 3D Tilt Wrapper */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid-pro spotlight-group"
          style={{
            // 3D 변환을 위한 원근감 설정
            perspective: "1000px" 
          }}
        >
          {/* 🔦 Spotlight Overlay */}
          <div 
            className="spotlight-overlay"
            style={{
              opacity,
              background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
              // 조명은 기울어지지 않고 평면에 머물도록 설정 (선택사항)
              transform: `translateZ(0)`
            }}
          />

          {/* 🧊 3D Tilt 적용 그룹 */}
          <div 
            className="tilt-layer"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.1s ease-out" // 부드러우면서 즉각적인 반응
            }}
          >
            {/* Card 1 */}
            <ScrollReveal delay={100}>
              <div 
                className="card-pro card-large clickable"
                onClick={() => triggerIsland("Quiet Reward", "기분 좋은 햅틱과 함께 적립되었습니다.", "spark")}
              >
                <div className="card-border" />
                <div className="content">
                  <div className="icon-badge"><Icon name="spark" /></div>
                  <h3>Feel the Moment</h3>
                  <p>리워드가 쌓이는 순간, 기분 좋은 미세 진동으로 완성감을 전달합니다.</p>
                </div>
                
                {/* Waveform Logic (Fixed Hydration) */}
                <div className="waveform-viz">
                  {[...Array(20)].map((_, i) => {
                    const rawHeight = 15 + Math.abs(Math.sin((i + 1) * 12.5)) * 50;
                    const height = rawHeight.toFixed(1); 
                    const delay = (i * 0.05).toFixed(2);
                    return (
                      <div 
                        key={i} 
                        className="wave-bar" 
                        style={{ animationDelay: `${delay}s`, height: `${height}%` }} 
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <div className="sub-grid">
              {/* Card 2 */}
              <ScrollReveal delay={200}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Nearby Frame", "50m 앞, 홍대 매장이 있습니다.", "map")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="clock" /></div>
                    <h3>Always Glancable</h3>
                    <p>앱을 열지 않아도, 잠금 화면과 다이내믹 아일랜드에서 대기 순서를 확인합니다.</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal delay={300}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Data Protected", "얼굴 데이터는 서버에 전송되지 않습니다.", "lock")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="mood" /></div>
                    <h3>Privacy First</h3>
                    <p>얼굴 데이터는 저장되지 않습니다. 오직 취향 데이터만 기기에 남습니다.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style jsx>{`
        .identity-bg {
          background: #000000;
          padding: 100px 0;
          position: relative;
          color: #f5f5f7;
          border-radius: 40px;
          margin: 60px 0;
          overflow: hidden;
        }
        
        .header-group { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        
        .title-grad {
          font-size: 56px; font-weight: 700;
          background: linear-gradient(135deg, #fff 40%, #6e6e73);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin: 0 0 20px; letter-spacing: -0.04em;
        }
        .lead-text { font-size: 22px; color: #86868b; font-weight: 400; line-height: 1.5; }
        .lead-text b { color: #f5f5f7; }

        .grid-pro {
          position: relative;
          /* 3D Context */
          transform-style: preserve-3d;
        }

        .tilt-layer {
          display: flex;
          flex-direction: column;
          gap: 20px;
          /* 3D Context 유지 */
          transform-style: preserve-3d;
        }

        .sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .spotlight-overlay {
          pointer-events: none;
          position: absolute;
          inset: -100px; /* 여유 있게 확장 */
          z-index: 0;
          transition: opacity 0.3s;
        }

        .card-pro {
          background: rgba(28,28,30, 0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: 40px;
          position: relative; 
          backdrop-filter: blur(20px);
          overflow: hidden; min-height: 320px;
          display: flex; flex-direction: column; justify-content: space-between;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          /* 3D 깊이감 */
          transform: translateZ(20px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .card-border {
          position: absolute; inset: 0; border-radius: 24px; padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none;
        }

        .card-pro:hover {
          background: rgba(44,44,46, 0.6);
          border-color: rgba(255,255,255,0.2);
        }
        .card-pro:active {
           transform: translateZ(10px) scale(0.98); /* 클릭 시 살짝 들어가는 느낌 */
        }

        .card-large { flex-direction: row; align-items: center; }

        .content { position: relative; z-index: 2; }
        .icon-badge {
          width: 52px; height: 52px; background: #fff; color: #000;
          border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(255,255,255,0.15);
        }
        .card-pro h3 { font-size: 26px; margin: 0 0 12px; color: #fff; letter-spacing: -0.01em; }
        .card-pro p { font-size: 17px; color: #a1a1a6; line-height: 1.6; margin: 0; max-width: 90%; }
        
        .waveform-viz { display: flex; align-items: center; gap: 6px; height: 80px; margin-left: auto; padding-left: 40px; opacity: 0.8; }
        .wave-bar { width: 6px; background: rgba(255,255,255,0.2); border-radius: 99px; animation: bar-dance 1.4s infinite ease-in-out; }
        
        @keyframes bar-dance {
          0%, 100% { height: 20%; background: rgba(255,255,255,0.2); }
          50% { height: 100%; background: #0071e3; box-shadow: 0 0 20px rgba(0,113,227,0.8); }
        }

        @media (max-width: 768px) {
          .sub-grid { grid-template-columns: 1fr; }
          .card-large { flex-direction: column; align-items: flex-start; }
          .waveform-viz { margin: 40px auto 0; padding: 0; width: 100%; justify-content: center; }
          .title-grad { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components\sections\AppleWalletSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `AppleWalletSection`

        ```typescript
        "use client";

import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function AppleWalletSection() {
  return (
    <section className="section-wallet">
      <div className="container">
        <div className="layout-split">
          {/* Left: Text Context */}
          <div className="text-col">
            <ScrollReveal>
              <div className="badge-pill">The Best App is No App</div>
              <h2 className="h2-wallet">
                지갑 속에<br />
                <span className="text-gradient-gold">Golden Ticket</span>을.
              </h2>
              <p className="p-wallet">
                앱을 켜지 않아도 됩니다. <br />
                매장 근처에 가면, 당신의 <b>추억 티켓</b>이 잠금 화면에 조용히 떠오릅니다.
                가장 인생네컷스러운 방식의 멤버십 경험입니다.
              </p>
              <ul className="wallet-bullets">
                <li><Icon name="spark" /> 촬영 직후 자동 발급 (NFC/QR)</li>
                <li><Icon name="map" /> 매장 방문 시 위치 기반 팝업</li>
                <li><Icon name="gift" /> 등급에 따라 변하는 카드 디자인</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: Wallet Pass Visual */}
          <div className="visual-col">
            <ScrollReveal delay={200}>
              <div className="wallet-stack">
                {/* Back Card (Depth) */}
                <div className="wallet-card back-card" />
                
                {/* Main Pass */}
                <div className="wallet-card main-pass">
                  <div className="pass-header">
                    <div className="pass-logo">
                      <span className="logo-dot" />
                      forFAN
                    </div>
                    <span className="pass-label">STORE PASS</span>
                  </div>
                  
                  <div className="pass-body">
                    <div className="pass-row">
                      <div className="pass-field">
                        <label>GRADE</label>
                        <div className="value gold">Golden Fan</div>
                      </div>
                      <div className="pass-field right">
                        <label>POINTS</label>
                        <div className="value">2,400</div>
                      </div>
                    </div>
                    <div className="pass-row">
                      <div className="pass-field">
                        <label>LATEST MOMENT</label>
                        <div className="value">Hongdae Flagship</div>
                      </div>
                    </div>
                  </div>

                  <div className="pass-barcode">
                    {/* Fake Barcode Lines */}
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="bar-line" 
                        style={{ 
                          height: i % 2 === 0 ? '100%' : '80%', 
                          width: i % 3 === 0 ? 3 : 1,
                          opacity: 0.8 
                        }} 
                      />
                    ))}
                  </div>
                  
                  {/* Holographic Shine Effect */}
                  <div className="holo-shine" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-wallet {
          padding: 100px 0;
          background: #000; /* Apple Wallet Context */
          color: #fff;
          border-radius: 40px;
          margin: 40px 0;
          overflow: hidden;
          position: relative;
        }

        .layout-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .badge-pill {
          display: inline-block;
          font-size: 11px; font-weight: 700; color: #FFD700;
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 6px 12px; border-radius: 99px;
          margin-bottom: 20px;
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        .h2-wallet {
          font-size: 48px; font-weight: 700; line-height: 1.1; margin-bottom: 24px;
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #FFD700 0%, #FDB931 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .p-wallet {
          font-size: 18px; color: #86868b; line-height: 1.6; margin-bottom: 40px;
        }
        .p-wallet b { color: #f5f5f7; }

        .wallet-bullets { list-style: none; padding: 0; margin: 0; }
        .wallet-bullets li {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 16px; color: #d2d2d7; font-size: 15px;
        }

        /* Wallet UI */
        .visual-col {
          display: flex; justify-content: center; position: relative;
        }

        .wallet-stack {
          position: relative;
          width: 300px; height: 460px;
          perspective: 1000px;
        }

        .wallet-card {
          width: 100%; height: 100%;
          border-radius: 20px;
          position: absolute;
          top: 0; left: 0;
        }

        .back-card {
          background: #333;
          transform: translateY(16px) scale(0.95);
          opacity: 0.5;
          z-index: 1;
        }

        .main-pass {
          background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%);
          z-index: 2;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; flex-direction: column;
          animation: float-pass 6s ease-in-out infinite;
        }

        .pass-header {
          padding: 20px;
          display: flex; justify-content: space-between; align-items: center;
          background: rgba(255,255,255,0.03);
        }
        .pass-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; }
        .logo-dot { width: 10px; height: 10px; background: #FFD700; border-radius: 50%; }
        .pass-label { font-size: 10px; color: #86868b; letter-spacing: 1px; font-weight: 600; }

        .pass-body { padding: 24px; flex: 1; }
        .pass-row { display: flex; justify-content: space-between; margin-bottom: 24px; }
        .pass-field label { display: block; font-size: 10px; color: #86868b; margin-bottom: 4px; font-weight: 600; }
        .pass-field .value { font-size: 16px; font-weight: 600; }
        .pass-field .value.gold { color: #FFD700; }
        .pass-field.right { text-align: right; }

        .pass-barcode {
          height: 60px;
          background: #fff;
          margin: 0 20px 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 0 10px;
        }
        .bar-line { background: #000; }

        /* Holographic Effect */
        .holo-shine {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(
            45deg,
            transparent 40%,
            rgba(255, 215, 0, 0.1) 45%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 215, 0, 0.1) 55%,
            transparent 60%
          );
          transform: rotate(30deg);
          animation: holo-move 4s infinite linear;
          pointer-events: none;
        }

        @keyframes float-pass {
          0%, 100% { transform: translateY(0) rotateX(0); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }
        @keyframes holo-move {
          0% { transform: translateY(0) translateX(0) rotate(30deg); }
          100% { transform: translateY(20%) translateX(-20%) rotate(30deg); }
        }

        @media (max-width: 900px) {
          .layout-split { grid-template-columns: 1fr; gap: 40px; }
          .visual-col { margin-top: 20px; }
          .h2-wallet { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components\sections\CreatorEconomySection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `CreatorEconomySection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function CreatorEconomySection() {
  return (
    <section className="section">
      <div className="container">
        {/* 🟢 [Round] 섹션 전체를 감싸는 둥근 컨테이너 */}
        <div className="section-rounded-bg creator-bg">
          
          <ScrollReveal>
            <div className="creator-header">
              <div className="badge-pro">The Next Chapter</div>
              <h2 className="h2-creator">
                Make it. Sell it.<br />
                <span className="text-gradient-creative">Global.</span>
              </h2>
              <p className="p-creator">
                누구나 크리에이터가 됩니다. 당신의 감각이 담긴 프레임이<br />
                전 세계 forFAN 키오스크에서 판매되고, 글로벌 수익으로 연결됩니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 메인 비주얼: Abstract Glass Studio */}
          <div className="studio-visual">
            
            {/* 🌍 Background: World Map + ⚡ Live Traffic */}
            <div className="global-map-bg">
              {/* Map Dots */}
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="map-dot"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 90 + 5}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
              
              {/* ⚡ Live Traffic Arcs */}
              <svg className="network-arcs" viewBox="0 0 800 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                    <stop offset="50%" stopColor="#d4a5ff" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                  </linearGradient>
                </defs>
                <path className="arc-path" d="M400,250 Q600,50 700,100" />
                <circle r="3" fill="#fff"><animateMotion dur="3s" repeatCount="indefinite" path="M400,250 Q600,50 700,100" /></circle>
                <path className="arc-path" d="M400,250 Q200,50 100,150" />
                <circle r="3" fill="#fff"><animateMotion dur="4s" repeatCount="indefinite" path="M400,250 Q200,50 100,150" /></circle>
                <path className="arc-path" d="M400,250 Q500,400 700,350" />
                <circle r="3" fill="#fff"><animateMotion dur="3.5s" repeatCount="indefinite" path="M400,250 Q500,400 700,350" /></circle>
              </svg>
            </div>

            {/* 🎨 Center: Floating Glass Canvas (Abstract iPad) */}
            <ScrollReveal delay={200}>
              <div className="glass-canvas-wrapper">
                {/* Layer 1: The Backing (Glass) */}
                <div className="layer glass-back" />
                
                {/* Layer 2: The Art (Glowing Gradient) */}
                <div className="layer art-layer">
                  <div className="art-gradient" />
                  <div className="art-symbol"><Icon name="spark" /></div>
                </div>

                {/* Layer 3: The UI (Minimal Floating Tools) */}
                <div className="layer ui-layer">
                  <div className="floating-tool t-left" />
                  <div className="floating-tool t-right" />
                  <div className="floating-btn">Publish</div>
                </div>
              </div>
            </ScrollReveal>

            {/* 💸 Global Revenue Stack (Multi-Currency) */}
            <div className="revenue-stack">
              {/* Card 1: EUR (Paris) */}
              <div className="rev-card card-1">
                <div className="rev-icon blue">€</div>
                <div className="rev-info">
                  <span className="rev-label">Paris, FR</span>
                  <span className="rev-val">+€3.50</span>
                </div>
              </div>
              
              {/* Card 2: KRW (Seoul) */}
              <div className="rev-card card-2">
                <div className="rev-icon purple">₩</div>
                <div className="rev-info">
                  <span className="rev-label">Seoul, KR</span>
                  <span className="rev-val">+₩5,400</span>
                </div>
              </div>
              
              {/* Card 3: USD (New York) */}
              <div className="rev-card card-3">
                <div className="rev-icon green">$</div>
                <div className="rev-info">
                  <span className="rev-label">New York, US</span>
                  <span className="rev-val">+$4.20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="feature-grid">
            <ScrollReveal delay={300}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="spark" /></div>
                <h4>Infinite Creativity</h4>
                <p>유저들이 매일 수천 개의 트렌디한 프레임을 쏟아냅니다.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="map" /></div>
                <h4>No Borders</h4>
                <p>한국에서 만든 프레임을 전 세계 어디서든 즉시 사용합니다.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="chart" /></div>
                <h4>Global Revenue</h4>
                <p>원화, 달러, 유로. 국경 없는 정산 시스템을 경험하세요.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 🟢 Rounded Grouping Box */
        .creator-bg {
          background: #000;
          background-image: radial-gradient(circle at 50% 0%, #1a1a1a 0%, #000 80%);
          color: #fff;
          border-radius: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .creator-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        .badge-pro {
          display: inline-block; font-size: 11px; font-weight: 700; color: #d4a5ff;
          border: 1px solid rgba(212, 165, 255, 0.3); padding: 6px 12px; border-radius: 99px;
          margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;
          background: rgba(212, 165, 255, 0.1);
        }
        .h2-creator { font-size: 48px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
        .text-gradient-creative {
          background: linear-gradient(135deg, #d4a5ff 0%, #a855f7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .p-creator { font-size: 18px; color: #888; line-height: 1.6; max-width: 600px; margin: 0 auto; }

        .studio-visual {
          position: relative; height: 500px; display: flex; justify-content: center; align-items: center;
          margin-bottom: 60px; perspective: 1000px; /* Depth for 3D layers */
        }

        .global-map-bg { position: absolute; inset: 0; opacity: 0.5; pointer-events: none; }
        .map-dot {
          position: absolute; width: 4px; height: 4px; background: #555; border-radius: 50%;
          animation: pulse-dot 4s infinite;
        }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); background: #d4a5ff; } }

        .network-arcs { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .arc-path { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 1; stroke-dasharray: 4; }

        /* 🎨 Abstract Glass Canvas (The Apple Essence) */
        .glass-canvas-wrapper {
          width: 400px; height: 280px; position: relative;
          transform: rotateX(10deg) rotateY(-10deg);
          transform-style: preserve-3d;
          animation: float-canvas 6s ease-in-out infinite;
        }
        @keyframes float-canvas { 0%, 100% { transform: rotateX(10deg) rotateY(-10deg) translateY(0); } 50% { transform: rotateX(5deg) rotateY(-5deg) translateY(-20px); } }

        .layer {
          position: absolute; inset: 0; border-radius: 24px;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s;
        }

        /* Layer 1: Glass Back */
        .glass-back {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          transform: translateZ(-20px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }

        /* Layer 2: Glowing Art */
        .art-layer {
          transform: translateZ(0px);
        }
        .art-gradient {
          width: 200px; height: 200px; border-radius: 50%;
          background: linear-gradient(135deg, #d4a5ff, #0071e3);
          filter: blur(40px); opacity: 0.6;
          animation: breath-art 4s infinite alternate;
        }
        @keyframes breath-art { from { opacity: 0.4; transform: scale(0.9); } to { opacity: 0.8; transform: scale(1.1); } }
        .art-symbol { position: absolute; font-size: 40px; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.5); }

        /* Layer 3: Minimal UI */
        .ui-layer {
          transform: translateZ(30px);
        }
        .floating-tool {
          position: absolute; width: 40px; height: 40px; border-radius: 12px;
          background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .t-left { left: -20px; top: 30%; }
        .t-right { right: -20px; top: 50%; width: 50px; height: 50px; border-radius: 50%; }
        
        .floating-btn {
          position: absolute; bottom: -20px;
          background: #fff; color: #000;
          padding: 8px 20px; border-radius: 99px; font-weight: 700; font-size: 12px;
          box-shadow: 0 0 20px rgba(255,255,255,0.4);
        }

        /* 💸 Multi-Currency Revenue Stack */
        .revenue-stack {
          position: absolute; bottom: 40px; right: 5%; z-index: 5;
          display: flex; flex-direction: column; gap: 10px;
          perspective: 1000px;
        }
        .rev-card {
          background: rgba(30, 30, 30, 0.85); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 16px; border-radius: 16px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          animation: float-stack 4s ease-in-out infinite;
          width: 190px;
        }
        /* Stacking Visuals with Currency Colors */
        .card-1 { transform: scale(0.9) translateY(20px); opacity: 0.6; z-index: 1; animation-delay: 0s; }
        .card-2 { transform: scale(0.95) translateY(10px); opacity: 0.8; z-index: 2; animation-delay: 0.5s; }
        .card-3 { transform: scale(1) translateY(0); opacity: 1; z-index: 3; animation-delay: 1s; border-color: rgba(255,255,255,0.3); }

        .rev-icon {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;
        }
        .blue { background: #0071e3; color: #fff; }   /* Euro */
        .purple { background: #AF52DE; color: #fff; } /* Won */
        .green { background: #34C759; color: #fff; }  /* Dollar */

        .rev-info { display: flex; flex-direction: column; }
        .rev-label { font-size: 9px; color: #888; text-transform: uppercase; }
        .rev-val { font-size: 14px; font-weight: 700; color: #fff; }

        @keyframes float-stack { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-5px); } 
        }

        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 60px; }
        .feature-item { text-align: center; padding: 20px; }
        .f-icon { width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #d4a5ff; }
        .feature-item h4 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .feature-item p { font-size: 14px; color: #888; line-height: 1.5; }

        @media (max-width: 900px) {
          .h2-creator { font-size: 32px; }
          .studio-visual { height: 400px; }
          .feature-grid { grid-template-columns: 1fr; gap: 40px; }
          .revenue-stack { right: 50%; transform: translateX(50%); bottom: -20px; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components\sections\DosDontsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `DosDontsSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import { doList, dontList } from "@/content/data";

export default function DosDontsSection() {
  return (
    <section className="section" id="dosdonts">
      <SectionHeader title="DO / DON’T (브랜드를 지키는 룰)" lead="인생네컷식 브랜드 톤을 유지하려면 “추가하지 말아야 할 것”이 더 중요합니다." />

      <div className="split">
        <div className="doDont">
          <p className="listTitle">✅ DO</p>
          <ul className="bullets">
            {doList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="doDont">
          <p className="listTitle">⛔ DON’T</p>
          <ul className="bullets">
            {dontList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

        ### 📄 components\sections\ExperienceSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/content/data, @/content/types`
* 🧩 **Component (Default):** `ExperienceSection`
* ww **Hooks:** `useEffect, useMemo, useState`

        ```typescript
        "use client";

import { useMemo, useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../Icon";
import { experienceItems } from "@/content/data";
import { Phase } from "@/content/types";

// ScreenContent 컴포넌트는 이전과 동일하므로 생략하거나 기존 코드를 유지하세요.
const ScreenContent = ({ phase }: { phase: Phase }) => {
    // ... (이전 코드의 ScreenContent 내용 그대로 사용)
    if (phase === "Before") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-header">Today's Pick</div>
            <div className="mock-card big"><Icon name="spark" /><span>Romantic Mood</span></div>
            <div className="mock-row"><div className="mock-card small" /><div className="mock-card small" /></div>
            <div className="mock-msg">촬영 전, 설렘을 미리 확인하세요.</div>
          </div>
        );
      }
      if (phase === "During") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-cam-view">
              <div className="focus-ring" />
              <div className="pose-tip"><Icon name="hint" /><span>고개를 살짝 왼쪽으로 15°</span></div>
            </div>
            <div className="mock-controls"><div className="shutter-btn" /></div>
            <div className="mock-msg">망설임 없는 완벽한 포즈 가이드.</div>
          </div>
        );
      }
      return (
        <div className="screen-inner fade-in">
          <div className="mock-header">Your Memories</div>
          <div className="mock-list">
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '60%'}}/><span style={{width: '40%'}}/></div></div>
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '70%'}}/></div></div>
          </div>
          <div className="mock-toast"><Icon name="gift" /><span>Quiet Reward Arrived</span></div>
        </div>
      );
};

export default function ExperienceSection() {
  const phases: Phase[] = ["Before", "During", "After"];
  const [tab, setTab] = useState<Phase>("Before");
  const [isPaused, setIsPaused] = useState(false);
  
  const filtered = useMemo(() => experienceItems.filter((x) => x.phase === tab), [tab]);

  // 🔄 Auto-Play Logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTab((prev) => {
        const idx = phases.indexOf(prev);
        const nextIdx = (idx + 1) % phases.length;
        return phases[nextIdx];
      });
    }, 4000); // 4초마다 전환

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    // SectionShell은 page.tsx에서 감싸고 있으므로 여기선 div로 처리
    <div 
      className="experience-inner"
      onMouseEnter={() => setIsPaused(true)} // 마우스 올리면 일시정지
      onMouseLeave={() => setIsPaused(false)} // 떼면 다시 재생
    >
      <div className="container">
        <SectionHeader
          title="경험의 흐름: Before · During · After"
          lead="경험은 멈추지 않고 흐릅니다. 앱 화면 속에서 시간의 흐름에 따라 변화하는 가치를 확인하세요."
        />

        <div className="exp-layout">
          {/* Left: Controls with Progress */}
          <div className="exp-controls" style={{ minHeight: "420px" }}>
            <div className="tab-pills">
              {phases.map((p) => (
                <button
                  key={p}
                  onClick={() => setTab(p)}
                  className={`tab-pill ${tab === p ? "active" : ""}`}
                >
                  <span className="tab-text">{p}</span>
                  {/* ⏳ Progress Bar (Active일 때만 보임) */}
                  {tab === p && !isPaused && (
                    <div className="progress-track">
                      <div className="progress-bar" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="exp-detail-list">
              {filtered.map((item) => (
                <div key={item.id} className="exp-detail-card fade-in-card">
                  <div className="detail-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h4 className="detail-title">{item.title}</h4>
                    <p className="detail-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: iPhone Mockup */}
          <div className="exp-visual">
            <div className="iphone-frame">
              <div className="notch" />
              <div className="screen">
                <ScreenContent phase={tab} />
              </div>
            </div>
            
            {/* Background Glow */}
            <div className={`visual-glow ${tab.toLowerCase()}`} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-inner { width: 100%; position: relative; }

        .exp-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: start; margin-top: 40px;
        }

        /* Tabs with Progress */
        .tab-pills {
          display: flex; gap: 8px; margin-bottom: 40px;
          background: rgba(0,0,0,0.05); padding: 4px; border-radius: 99px;
          width: fit-content;
        }
        .tab-pill {
          position: relative; overflow: hidden;
          padding: 10px 24px; border-radius: 99px; border: none; font-size: 14px; font-weight: 600; cursor: pointer;
          background: transparent; color: #86868b; transition: color 0.3s;
        }
        .tab-pill.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        
        .tab-text { position: relative; z-index: 2; }

        /* ⏳ Progress Animation */
        .progress-track {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 3px;
          background: transparent;
        }
        .progress-bar {
          height: 100%; background: #0071e3; width: 0;
          animation: progress 4s linear forwards;
        }
        @keyframes progress { from { width: 0; } to { width: 100%; } }

        /* Detail Cards Animation */
        .exp-detail-card {
          background: #fff; padding: 20px; border-radius: 20px;
          display: flex; gap: 16px; margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .fade-in-card { animation: fadeInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .detail-icon { min-width: 40px; height: 40px; background: #f5f5f7; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #1d1d1f; }
        .detail-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; }
        .detail-desc { margin: 0; font-size: 14px; color: #86868b; line-height: 1.5; }

        /* iPhone Visuals (Same as before) */
        .exp-visual { position: relative; display: flex; justify-content: center; }
        .iphone-frame {
          width: 280px; height: 560px; background: #000; border-radius: 40px; padding: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2); position: relative; z-index: 2; border: 4px solid #333;
        }
        .notch { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); width: 80px; height: 20px; background: #000; border-radius: 12px; z-index: 10; }
        .screen { width: 100%; height: 100%; background: #fff; border-radius: 28px; overflow: hidden; position: relative; display: flex; flex-direction: column; }
        
        .screen-inner { padding: 40px 20px; height: 100%; display: flex; flex-direction: column; }
        .fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .mock-header { font-size: 24px; font-weight: 800; margin-bottom: 20px; }
        .mock-card { background: #f5f5f7; border-radius: 16px; }
        .mock-card.big { height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; font-weight: 600; color: #555; margin-bottom: 12px; }
        .mock-row { display: flex; gap: 12px; margin-bottom: 20px; }
        .mock-card.small { height: 80px; flex: 1; }
        .mock-msg { margin-top: auto; font-size: 12px; color: #86868b; text-align: center; }

        .mock-cam-view { flex: 1; background: #333; border-radius: 16px; position: relative; margin-bottom: 20px; }
        .focus-ring { width: 80px; height: 80px; border: 1px solid #fff; border-radius: 50%; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); opacity: 0.5; }
        .pose-tip { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.6); color: #fff; padding: 8px 16px; border-radius: 99px; font-size: 12px; display: flex; gap: 6px; white-space: nowrap; }
        .shutter-btn { width: 60px; height: 60px; border-radius: 50%; border: 4px solid #ccc; margin: 0 auto; }

        .mock-item { display: flex; gap: 12px; margin-bottom: 16px; }
        .mock-thumb { width: 50px; height: 50px; background: #eee; border-radius: 12px; }
        .mock-text-lines { flex: 1; display: flex; flex-direction: column; gap: 6px; justify-content: center; }
        .mock-text-lines span { height: 8px; background: #f5f5f7; border-radius: 4px; display: block; }
        .mock-toast { background: #000; color: #fff; padding: 10px 16px; border-radius: 99px; display: flex; align-items: center; gap: 8px; font-size: 12px; margin-top: auto; width: fit-content; align-self: center; }

        .visual-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 350px; height: 600px; z-index: 1; filter: blur(60px); opacity: 0.6; transition: background 0.5s; }
        .visual-glow.before { background: radial-gradient(circle, #FFA500 0%, transparent 70%); }
        .visual-glow.during { background: radial-gradient(circle, #0071e3 0%, transparent 70%); }
        .visual-glow.after { background: radial-gradient(circle, #AF52DE 0%, transparent 70%); }

        @media (max-width: 900px) { .exp-layout { grid-template-columns: 1fr; } .exp-visual { margin-top: 40px; } }
      `}</style>
    </div>
  );
}
        ### 📄 components\sections\HeroSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `HeroSection`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        "use client";

import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 섹션 전체 진행률 (0 ~ 1)
      let p = (windowHeight - top) / (windowHeight + height);
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    // 초기 로딩 시 강제 실행하여 텍스트 표시
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="hero-cinematic">
      <div className="sticky-wrapper">
        <div className="kicker">Brand Platform • Experience-first</div>
        
        {/* Scene 1: Technology doesn't sell. */}
        <div 
          className="msg-layer"
          style={{ 
            // 🟢 [수정] 0~20% 구간까지는 무조건 잘 보이게 유지
            opacity: progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 4), 
            transform: `translate(-50%, -50%) scale(${1 - progress * 0.3})`,
            // 블러도 천천히 먹임
            filter: `blur(${Math.max(0, (progress - 0.2) * 20)}px)`
          }}
        >
          <h1 className="hero-title">
            Technology<br />doesn’t sell.
          </h1>
        </div>

        {/* Scene 2: Experience does. */}
        <div 
          className="msg-layer"
          style={{ 
            // 40% 지점부터 나타나기 시작
            opacity: Math.min(1, Math.max(0, (progress - 0.4) * 3)),
            // 줌인 효과
            transform: `translate(-50%, -50%) scale(${1.8 - (Math.min(1, Math.max(0, (progress - 0.4) * 2)) * 0.8)})`,
            filter: `blur(${Math.max(0, (0.6 - progress) * 20)}px)`
          }}
        >
          <h1 className="hero-title accent">
            Experience<br />does.
          </h1>
        </div>

        <p className="sub-text" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.6) * 4)) }}>
          forFAN은 사진을 찍게 하지 않습니다.<br/>
          그 순간을 <b>‘의미 있게’</b> 남기게 합니다.
        </p>
      </div>

      <style jsx>{`
        .hero-cinematic {
          height: 200vh; /* 적절한 스크롤 길이 */
          position: relative;
          width: 100%;
        }
        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .kicker { 
          position: absolute; top: 15%; left: 50%; transform: translateX(-50%);
          font-size: 13px; font-weight: 700; color: #86868b; 
          text-transform: uppercase; letter-spacing: 1px; z-index: 10;
        }
        
        .msg-layer {
          position: absolute;
          top: 50%; left: 50%;
          /* transform은 inline style이 제어 */
          width: 100%;
          text-align: center;
          pointer-events: none;
          will-change: opacity, transform, filter;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: clamp(50px, 9vw, 130px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #1d1d1f;
          margin: 0;
          white-space: nowrap;
        }
        .hero-title.accent {
          background: linear-gradient(135deg, #000 0%, #555 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-text {
          position: absolute;
          bottom: 15%; left: 50%; transform: translateX(-50%);
          font-size: 20px;
          line-height: 1.5;
          color: #86868b;
          text-align: center;
          width: 90%;
          max-width: 600px;
          transition: opacity 0.5s;
        }
        .sub-text b { color: #1d1d1f; }
      `}</style>
    </section>
  );
}
        ### 📄 components\sections\JourneySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `JourneySection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { journeyMap } from "@/content/data";

export default function JourneySection() {
  return (
    <div className="journey-inner">
      <SectionHeader
        title="forFAN 고객 여정 지도"
        lead={
          <>
            고객의 시간은 멈춰있지 않습니다.<br/>
            <b>Before(기대)</b>에서 <b>During(몰입)</b>을 거쳐 <b>After(여운)</b>까지, 끊김 없는 빛의 흐름을 설계합니다.
          </>
        }
      />

      <div className="journey-wrapper">
        
        {/* 🌟 The Active Pipeline (움직이는 경로) */}
        <div className="pipeline-container">
          {/* 1. Base Track (어두운 레일) */}
          <div className="track-rail" />

          {/* 2. Traveling Beam (이동하는 에너지) */}
          <div className="energy-packet">
            <div className="beam-head" />
            <div className="beam-tail" />
          </div>

          {/* 3. Nodes (정거장) - 색상 적용 */}
          <div className="node n-before">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-during">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-after">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
        </div>

        {/* Cards Grid */}
        <SectionGrid>
          {journeyMap.map((j, idx) => (
            <ItemCard
              key={j.phase}
              span={4}
              delay={idx * 150} 
              item={{
                id: j.phase,
                tag: j.phase,
                title: j.title,
                desc: "단계별 핵심 목표를 달성합니다.",
                bullets: j.bullets,
                icon: j.icon,
              }}
            />
          ))}
        </SectionGrid>
      </div>

      <style jsx>{`
        .journey-inner { position: relative; width: 100%; }
        .journey-wrapper { position: relative; padding-top: 40px; }

        /* 🛤️ Pipeline System */
        .pipeline-container {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          margin-top: -20px; /* 카드 위쪽으로 배치 */
          z-index: 0;
        }

        /* 1. Track */
        .track-rail {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          background: rgba(0,0,0,0.06); border-radius: 4px;
        }

        /* 2. Traveling Beam Animation */
        .energy-packet {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          overflow: hidden;
        }
        
        .beam-head {
          position: absolute; top: 0; width: 60px; height: 100%;
          background: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          filter: blur(1px);
          animation: travel-x 4s linear infinite;
        }
        
        .beam-tail {
          position: absolute; top: 0; width: 200px; height: 100%;
          /* 그라디언트: Orange -> Blue -> Purple 순으로 섞인 빛 */
          background: linear-gradient(90deg, transparent, #FF9500, #0071e3, #AF52DE, transparent);
          opacity: 0.8;
          animation: travel-x 4s linear infinite;
        }

        @keyframes travel-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); } /* 화면 밖으로 충분히 이동 */
        }

        /* 3. Nodes (Color Coded) */
        .node {
          position: absolute; top: -5px; width: 12px; height: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .node-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #fff;
          border: 2px solid #e5e5ea; z-index: 2; transition: all 0.3s;
        }
        .node-ripple {
          position: absolute; width: 20px; height: 20px; border-radius: 50%;
          opacity: 0; z-index: 1;
        }

        /* Positioning Nodes (Grid 중앙 정렬) */
        .n-before { left: 16.5%; }
        .n-during { left: 50%; transform: translateX(-50%); }
        .n-after  { left: 83.5%; }

        /* 🔥 Animations per Phase Color */
        /* Before: Orange */
        .n-before .node-dot { animation: hit-orange 4s infinite linear; animation-delay: 0.4s; }
        .n-before .node-ripple { border: 2px solid #FF9500; animation: ripple 4s infinite linear; animation-delay: 0.4s; }

        /* During: Blue */
        .n-during .node-dot { animation: hit-blue 4s infinite linear; animation-delay: 1.5s; }
        .n-during .node-ripple { border: 2px solid #0071e3; animation: ripple 4s infinite linear; animation-delay: 1.5s; }

        /* After: Purple */
        .n-after .node-dot { animation: hit-purple 4s infinite linear; animation-delay: 2.6s; }
        .n-after .node-ripple { border: 2px solid #AF52DE; animation: ripple 4s infinite linear; animation-delay: 2.6s; }

        @keyframes hit-orange { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #FF9500; background: #FF9500; } }
        @keyframes hit-blue   { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #0071e3; background: #0071e3; } }
        @keyframes hit-purple { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #AF52DE; background: #AF52DE; } }

        @keyframes ripple { 
          0% { transform: scale(1); opacity: 1; } 
          100% { transform: scale(3); opacity: 0; } 
        }

        @media (max-width: 900px) {
          .pipeline-container { width: 2px; height: 100%; left: 50%; top: 0; margin-top: 0; transform: translateX(-50%); }
          .track-rail { width: 2px; height: 100%; top: 0; left: 0; }
          .energy-packet { width: 2px; height: 100%; top: 0; left: 0; }
          .beam-head { width: 2px; height: 60px; animation: travel-y 4s linear infinite; }
          .beam-tail { width: 2px; height: 200px; background: linear-gradient(180deg, transparent, #FF9500, #0071e3, #AF52DE, transparent); animation: travel-y 4s linear infinite; }
          
          .node { left: -5px !important; transform: none !important; }
          .n-before { top: 16%; }
          .n-during { top: 50%; }
          .n-after  { top: 83%; }

          @keyframes travel-y { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }
        }
      `}</style>
    </div>
  );
}
        ### 📄 components\sections\PartnersSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react, @/lib/useLanguage`
* 🧩 **Component (Default):** `PartnersSection`
* ww **Hooks:** `useLanguage, useState`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import SectionShell from "../SectionShell";
import ScrollReveal from "../ScrollReveal";
import { partnerValue } from "@/content/data";
import ItemCard from "../ItemCard";
import { useState } from "react";
import { useLanguage } from "@/lib/useLanguage"; // 👈 다국어 지원

export default function PartnersSection() {
  const { t } = useLanguage();
  const [visitors, setVisitors] = useState(1000); 
  const conversionRate = 0.45;
  const ticketPrice = 5000;
  const uplift = Math.floor(visitors * conversionRate * ticketPrice);
  const progress = (visitors - 500) / (5000 - 500); // 0 ~ 1

  // 🌈 Dynamic Color Logic (Blue -> Purple -> Red)
  let resultColor = "#0071e3"; // Default: Blue
  let glowColor = "rgba(0, 113, 227, 0.1)";

  if (progress > 0.7) { 
    // 🔥 High: Red (강렬한 수익)
    resultColor = "#FF3B30"; 
    glowColor = "rgba(255, 59, 48, 0.2)";
  } else if (progress > 0.4) { 
    // 🔮 Mid: Purple (성장 단계)
    resultColor = "#AF52DE"; 
    glowColor = "rgba(175, 82, 222, 0.15)";
  }

  return (
    <SectionShell id="partners" className="theme-growth">
      <SectionHeader
        title={t("partners.title")}
        lead={t("partners.lead")}
      />

      <ScrollReveal>
        {/* Simulator: Dynamic Glow Effect */}
        <div 
          className="simulator-glass"
          style={{ 
            boxShadow: `0 20px 60px ${glowColor}`,
            borderColor: progress > 0.7 ? "rgba(255, 59, 48, 0.3)" : "rgba(255,255,255,0.4)"
          }}
        >
          <div className="sim-header">
            <h3>{t("partners.sim.title")}</h3>
            <p>{t("partners.sim.desc")}</p>
          </div>

          <div className="sim-body">
            <div className="input-group">
              <label>Visitors: <b>{visitors.toLocaleString()}</b></label>
              <input 
                type="range" min="500" max="5000" step="100" 
                value={visitors} onChange={(e) => setVisitors(Number(e.target.value))}
                className="slider"
                style={{ 
                  background: `linear-gradient(90deg, ${resultColor} ${progress * 100}%, #e5e5ea ${progress * 100}%)` 
                }}
              />
              <div className="range-labels"><span>Small</span><span>Flagship</span></div>
            </div>

            <div className="result-group">
              <div className="result-label">Monthly Uplift</div>
              <div 
                className="result-value" 
                style={{ 
                  color: resultColor, 
                  transform: `scale(${1 + progress * 0.2})`,
                  textShadow: progress > 0.7 ? `0 0 20px ${glowColor}` : 'none'
                }}
              >
                + ₩{uplift.toLocaleString()}
              </div>
              <div className="result-desc">*Based on 45% Retention Rate</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="bento-grid-container" style={{ marginTop: 60 }}>
        {partnerValue.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </div>

      <style jsx>{`
        /* Glassmorphism Simulator */
        .simulator-glass {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 40px;
          border: 1px solid rgba(255,255,255,0.4);
          margin-bottom: 60px; max-width: 800px; margin-left: auto; margin-right: auto;
          transition: all 0.3s ease;
        }

        .sim-header { text-align: center; margin-bottom: 40px; }
        .sim-header h3 { font-size: 24px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px; }
        .sim-header p { color: #86868b; font-size: 16px; word-break: keep-all; }
        
        .sim-body { display: flex; gap: 40px; align-items: center; justify-content: space-between; }
        
        .input-group { flex: 1; }
        .input-group label { display: block; font-size: 15px; color: #1d1d1f; margin-bottom: 16px; }
        .input-group label b { font-size: 20px; color: #1d1d1f; margin-left: 8px; }
        
        .slider { 
          -webkit-appearance: none; width: 100%; height: 8px; border-radius: 5px; outline: none; margin-bottom: 12px; 
          transition: background 0.1s; 
        }
        .slider::-webkit-slider-thumb { 
          -webkit-appearance: none; width: 32px; height: 32px; border-radius: 50%; background: #fff; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.2); cursor: grab; transition: transform 0.1s; 
          border: 1px solid rgba(0,0,0,0.05);
        }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .slider:active::-webkit-slider-thumb { cursor: grabbing; transform: scale(1.2); }
        
        .range-labels { display: flex; justify-content: space-between; font-size: 12px; color: #86868b; font-weight: 600; }
        
        .result-group { 
          background: rgba(255,255,255,0.8); padding: 24px 40px; border-radius: 16px; 
          text-align: center; min-width: 280px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); 
        }
        .result-label { font-size: 14px; font-weight: 600; color: #86868b; margin-bottom: 8px; text-transform: uppercase; }
        .result-value { font-size: 36px; font-weight: 800; margin-bottom: 6px; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .result-desc { font-size: 11px; color: #a1a1a6; }

        @media (max-width: 768px) { .sim-body { flex-direction: column; gap: 30px; } .result-group { width: 100%; } }
      `}</style>
    </SectionShell>
  );
}
        ### 📄 components\sections\PrincipleSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `PrincipleSection`

        ```typescript
        "use client";

import ScrollReveal from "../ScrollReveal";

export default function PrincipleSection() {
  return (
    <section className="section-principle" id="principle">
      <div className="container">
        <div className="manifesto-wrapper">
          <ScrollReveal>
            <div className="label-badge">The First Principle</div>
          </ScrollReveal>
          
          <div className="manifesto-text">
            <ScrollReveal delay={100}>
              <h2 className="line">우리는 기능을</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="line outline">팔지 않습니다.</h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h2 className="line highlight">경험의 질을</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <h2 className="line">설계합니다.</h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <p className="manifesto-desc">
              고객이 앱을 열었을 때 느끼는 감정<br/>
              <b>설렘 → 확신 → 여운</b>을 연결하는 것.<br/>
              그것이 유일한 우리의 전략입니다.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .section-principle {
          padding: 120px 0;
          background: #111; /* Deep Black */
          color: #fff;
          border-radius: 40px; /* 섹션 자체를 둥글게 */
          margin: 40px 0;
          position: relative;
          overflow: hidden;
        }

        .manifesto-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 2; position: relative;
        }

        .label-badge {
          font-size: 12px; font-weight: 700; color: #86868b;
          text-transform: uppercase; letter-spacing: 2px;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 16px; border-radius: 99px;
          margin-bottom: 40px;
        }

        .manifesto-text {
          display: flex; flex-direction: column; gap: 0;
          margin-bottom: 50px;
        }

        .line {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          line-height: 1.05;
          margin: 0;
          letter-spacing: -0.03em;
        }

        /* Outline Text Effect */
        .outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.4);
        }

        /* Highlight Gradient */
        .highlight {
          background: linear-gradient(90deg, #fff, #86868b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manifesto-desc {
          font-size: 20px;
          line-height: 1.6;
          color: #86868b;
          max-width: 480px;
        }
        .manifesto-desc b { color: #fff; }

        /* Background Glow Animation */
        .section-principle::before {
          content: "";
          position: absolute;
          top: 50%; left: 50%;
          width: 60%; height: 60%;
          background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
        ### 📄 components\sections\QuietRewardsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `QuietRewardsSection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import { quietRewardsCopy } from "@/content/data";
import Icon from "../Icon";
import ScrollReveal from "../ScrollReveal";

export default function QuietRewardsSection() {
  return (
    <section className="section" id="quiet">
      <div className="container">
        {/* 🟢 [적용] 화려한 골드 테마 (theme-gold) - 직접 div에 적용 */}
        <div className="section-island theme-gold">
          
          {/* 🪙 Background Giant Coin (섹션 내부로 이동) */}
          <div className="giant-coin-bg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.15" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
              <text x="100" y="115" fontSize="60" fontWeight="bold" textAnchor="middle" fill="currentColor" opacity="0.1" style={{ fontFamily: 'serif' }}>4</text>
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <SectionHeader
              title="“Quiet Rewards” — 4CUT Coin"
              lead="발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요."
            />

            <div className="reveal-grid">
              {quietRewardsCopy.map((c, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="reveal-card">
                    <div className="blockchain-mesh" />
                    <div className="icon-header">
                      <div className={`coin-visual coin-${idx}`}>
                        <span className="coin-face">$</span>
                      </div>
                      <span className="card-title">{c.title}</span>
                    </div>
                    
                    <div className="frost-container">
                      <div className="hidden-content">
                        <div className="hash-code">
                          <span className="dot active"/>
                          0x7F...{Math.floor(Math.random() * 900) + 100}
                        </div>
                        <div className="text-lines">
                          {c.lines.map((line, i) => (
                            <p key={i} className="line-item">{line}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="frost-overlay">
                        <div className="lock-icon"><Icon name="lock" /></div>
                        <span className="hint-text">Hover to Decrypt</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .giant-coin-bg {
          position: absolute; top: -100px; right: -100px;
          width: 600px; height: 600px;
          color: #DAA520;
          animation: spin-slow 60s linear infinite;
          pointer-events: none; z-index: 0;
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ... 기존 스타일 유지 ... */
        .reveal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .reveal-grid { grid-template-columns: 1fr; } }
        .reveal-card { background: #fff; border-radius: 28px; padding: 32px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 10px 40px rgba(0,0,0,0.04); min-height: 360px; display: flex; flex-direction: column; position: relative; overflow: hidden; transition: transform 0.3s ease; }
        .reveal-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(218, 165, 32, 0.15); border-color: rgba(218, 165, 32, 0.3); }
        .blockchain-mesh { position: absolute; inset: 0; background-image: radial-gradient(#DAA520 1px, transparent 1px); background-size: 24px 24px; opacity: 0.1; z-index: 0; }
        .icon-header { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 24px; position: relative; z-index: 1; }
        .coin-visual { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.5); }
        .coin-0 { background: linear-gradient(135deg, #FFD700, #FDB931); color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .coin-1 { background: linear-gradient(135deg, #E0E0E0, #BDBDBD); color: #fff; }
        .coin-2 { background: linear-gradient(135deg, #f6d365, #fda085); color: #fff; }
        .card-title { font-size: 20px; font-weight: 700; color: #1d1d1f; letter-spacing: -0.02em; }
        .frost-container { position: relative; flex: 1; border-radius: 20px; overflow: hidden; background: #fbfbfd; border: 1px solid rgba(0,0,0,0.03); z-index: 1; }
        .hidden-content { padding: 24px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
        .hash-code { font-family: monospace; font-size: 11px; color: #86868b; background: rgba(0,0,0,0.05); padding: 4px 8px; border-radius: 6px; width: fit-content; margin: 0 auto 16px; display: flex; align-items: center; gap: 6px; }
        .dot { width: 6px; height: 6px; background: #34C759; border-radius: 50%; }
        .dot.active { animation: blink 2s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .text-lines { display: flex; flex-direction: column; gap: 10px; text-align: center; }
        .line-item { font-size: 15px; color: #1d1d1f; font-weight: 600; line-height: 1.5; margin: 0; }
        .line-item::before { content: "“"; color: #DAA520; margin-right: 4px; }
        .line-item::after { content: "”"; color: #DAA520; }
        .frost-overlay { position: absolute; inset: 0; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; transition: opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1); z-index: 10; }
        .reveal-card:hover .frost-overlay { opacity: 0; pointer-events: none; }
        .lock-icon { color: #86868b; opacity: 0.5; }
        .hint-text { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #86868b; border: 1px solid #d2d2d7; padding: 6px 14px; border-radius: 99px; background: rgba(255,255,255,0.9); }
      `}</style>
    </section>
  );
}
        ### 📄 components\sections\RevenueSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react`
* 🧩 **Component (Default):** `RevenueSection`
* ww **Hooks:** `useEffect`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { revenueLogic } from "@/content/data";
import { useState, useEffect } from "react";

export default function RevenueSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Auto-cycle logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === null || prev >= 2 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="revenue">
      <div className="container">
        
        {/* 🟢 [수정] Round Styling 강화: overflow-hidden 필수 */}
        <div className="revenue-bg">
          
          {/* ⚡ Background Circuit Grid */}
          <div className="circuit-grid-bg">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="20%" cy="20%" r="200" fill="rgba(0, 113, 227, 0.15)" filter="blur(80px)" />
              <circle cx="80%" cy="80%" r="200" fill="rgba(175, 82, 222, 0.15)" filter="blur(80px)" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="dark-header">
              <SectionHeader
                title="Logic Flow: 24시간 멈추지 않는 매출 회로"
                lead={<span style={{color: '#a1a1a6'}}>고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다. <br/>이 흐름은 지금도 멈추지 않고 매출을 만들고 있습니다.</span>}
              />
            </div>

            <div className="circuit-board">
              {revenueLogic.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`circuit-node ${activeStep === idx ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <ScrollReveal delay={idx * 150}>
                    <div className="logic-card glass-card">
                      <div className="card-header-row">
                         <div className="status-dot-wrapper">
                           <div className="status-dot" />
                           <div className="status-ping" />
                         </div>
                         <div className="card-icon"><Icon name={item.icon} /></div>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.desc}</p>
                      
                      {idx < revenueLogic.length - 1 && (
                        <div className="connector-line flowing">
                          <div className="energy-beam" />
                          <div className="arrow-head">▶</div>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 🟢 Rounded Box Styling */
        .revenue-bg {
          position: relative;
          background: #0d1117; 
          background-image: linear-gradient(180deg, #0d1117 0%, #161b22 100%);
          color: #fff;
          /* 핵심: 둥근 모서리와 넘침 방지 */
          border-radius: 48px; 
          overflow: hidden; 
          padding: 80px 40px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
          margin: 40px 0;
        }

        .circuit-grid-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .dark-header :global(h2) { color: #fff !important; }
        
        .circuit-board { display: flex; gap: 40px; align-items: flex-start; padding: 20px 0; position: relative; }
        .circuit-node { flex: 1; position: relative; }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative; z-index: 2;
        }

        .circuit-node.active .glass-card {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 113, 227, 0.25);
          border-color: rgba(0, 113, 227, 0.5);
        }

        .card-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        
        .status-dot-wrapper { position: relative; width: 8px; height: 8px; }
        .status-dot { width: 100%; height: 100%; border-radius: 50%; background: #333; }
        .circuit-node.active .status-dot { background: #00ff41; box-shadow: 0 0 10px #00ff41; }
        .status-ping { position: absolute; inset: -4px; border-radius: 50%; border: 1px solid #00ff41; opacity: 0; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .circuit-node.active .status-ping { opacity: 1; }
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }

        .card-icon { width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #fff; transition: 0.3s; }
        .circuit-node.active .card-icon { background: #0071e3; color: #fff; box-shadow: 0 0 20px rgba(0,113,227,0.4); }

        .card-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; color: #fff; }
        .card-desc { font-size: 14px; color: #a1a1a6; line-height: 1.6; }

        .connector-line { position: absolute; top: 50%; left: 100%; width: 40px; height: 4px; background: rgba(255,255,255,0.1); transform: translateY(-50%); z-index: 1; overflow: hidden; }
        .energy-beam { width: 50%; height: 100%; background: linear-gradient(90deg, transparent, #00e5ff, transparent); animation: beam-flow 1.5s infinite linear; filter: drop-shadow(0 0 5px #00e5ff); }
        .arrow-head { position: absolute; right: -6px; top: -7px; font-size: 12px; color: rgba(255,255,255,0.2); }
        .circuit-node.active + div .arrow-head { color: #00e5ff; }

        @keyframes beam-flow { 0% { transform: translateX(-150%); } 100% { transform: translateX(250%); } }

        @media (max-width: 900px) {
          .revenue-bg { padding: 40px 24px; border-radius: 32px; }
          .circuit-board { flex-direction: column; gap: 40px; }
          .connector-line { top: 100%; left: 50%; width: 4px; height: 40px; transform: translateX(-50%); }
          .energy-beam { width: 100%; height: 50%; background: linear-gradient(180deg, transparent, #00e5ff, transparent); animation: beam-flow-vert 1.5s infinite linear; }
          @keyframes beam-flow-vert { 0% { transform: translateY(-150%); } 100% { transform: translateY(250%); } }
          .arrow-head { right: -4px; top: auto; bottom: -10px; transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
}
        ### 📄 content\data.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import { CardItem, CopyBucket, JourneyItem, LogicItem, Phase } from "./types";

export const brandItems: CardItem[] = [
  {
    id: "moment",
    tag: "1) Moment Ownership",
    title: "Moment Card — 순간을 ‘소유’하게 만들기",
    desc:
      "사진이 아니라 ‘그날의 선택과 감정’을 기록합니다. 촬영 후 자동으로 생성되는 카드로, 프레임/매장/날짜/친구 태그 등 ‘순간 메타’를 남깁니다.",
    bullets: [
      "촬영 후 자동 생성: 날짜 · 매장 · 프레임 · 참여자(태그)",
      "사진 없이도 ‘기억의 증거’가 남는 구조",
      "공유는 ‘이미지’가 아니라 ‘경험’ 중심으로",
    ],
    icon: "spark",
  },
  {
    id: "story",
    tag: "2) Story Layer",
    title: "Frame Story Layer — ‘왜 이 프레임인가’",
    desc:
      "프레임 선택을 단순 구매에서 ‘공감한 선택’으로 바꿉니다. 프레임마다 기획 의도/추천 상황/촬영 팁/제작자 스토리를 얹습니다.",
    bullets: [
      "프레임 설명: 감정/상황/추천 포즈/촬영 팁",
      "제작자/브랜드/아티스트의 의도 한 줄",
      "선택의 이유를 만드는 스토리 UX",
    ],
    icon: "map",
  },
  {
    id: "status",
    tag: "3) Subtle Status",
    title: "Invisible Fan Status — 배지가 아닌 ‘정체성 문장’",
    desc:
      "레벨 숫자 대신 ‘당신이 만든 영향’을 문장으로 제공합니다. 은근한 인정(Recognition)이 재방문과 자발적 확산을 만듭니다.",
    bullets: [
      "예: ‘이 프레임이 뜰 때 당신이 있었다’",
      "랭킹/서열 대신 ‘기여 기반’ 문장",
      "SNS 공유 가능한 ‘짧은 문장’ 중심",
    ],
    icon: "people",
  },
  {
    id: "rewards",
    tag: "4) Quiet Rewards",
    title: "Quiet Rewards — 코인은 조용히, 혜택은 체감되게",
    desc:
      "리워드(블록체인 코인)를 전면에 내세우지 않습니다. 대신 ‘잠금 해제/먼저 보기/조용한 쿠폰’처럼 체감 혜택을 자연스럽게 제공합니다.",
    bullets: [
      "키오스크 이용/앱 결제 → 코인 적립(백그라운드)",
      "사용처: 프레임 잠금 해제 · 할인 · 우선 접근",
      "메시지 톤: ‘Thanks for being here’",
    ],
    icon: "gift",
  },
  {
    id: "creator",
    tag: "5) Creator as Brand",
    title: "Creator Profile — 프레임 제작자를 ‘브랜드’로",
    desc:
      "forFAN의 핵심은 프레임=콘텐츠=브랜드입니다. 제작자 프로필을 단순 판매자가 아닌 ‘크리에이터’로 설계합니다.",
    bullets: [
      "한 줄 소개 + 대표 프레임 3개",
      "‘이 프레임은 이런 사람에게 추천’",
      "커뮤니티/RS(수익 분배)와 결합",
    ],
    icon: "circle",
  },
  {
    id: "philosophy",
    tag: "6) One Line Philosophy",
    title: "앱의 철학 한 줄 — 모든 기능의 기준점",
    desc:
      "기능보다 중요한 건 ‘왜 존재하는가’입니다. 앱 안에 문장으로 철학을 고정하고, 모든 UX가 그 문장을 설명하게 만듭니다.",
    bullets: [
      "“사진을 찍게 하지는 않습니다. 그 순간을 더 오래 기억하게 합니다.”",
      "온보딩/홈/프레임 상세에 일관되게 노출",
      "브랜드 메시지의 통일성 강화",
    ],
    icon: "copy",
  },
];

export const experienceItems: CardItem[] = [
  {
    id: "before_preview",
    phase: "Before" as Phase,
    icon: "spark",
    tag: "Before the Moment",
    title: "Moment Preview — 찍기 전의 설렘",
    desc: "오늘/이번 주에 어울리는 프레임과 무드를 가볍게 추천해, 앱을 여는 이유를 ‘설렘’으로 만듭니다.",
    bullets: [
      "오늘의 추천 프레임(가벼운 큐레이션)",
      "요일/시간대 기반 추천(과하지 않게)",
      "‘찍을까?’를 ‘찍자’로 바꾸는 트리거",
    ],
  },
  {
    id: "during_people",
    phase: "During" as Phase,
    icon: "people",
    tag: "People, not Photos",
    title: "People Tag Memory — 사람을 기억",
    desc: "사진보다 중요한 ‘누구와 함께였는지’를 남깁니다. 통계가 아니라 문장으로 관계를 표현합니다.",
    bullets: ["촬영 순간 참여자 태그", "관계는 숫자가 아니라 ‘문장’", "재방문 동기를 ‘사람’으로 연결"],
  },
  {
    id: "during_hint",
    phase: "During" as Phase,
    icon: "hint",
    tag: "Soft Guidance",
    title: "Quiet Pose & Mood Tips — 조용한 힌트",
    desc: "강요하는 튜토리얼이 아니라 ‘힌트’ 수준으로 프레임별 팁 1~2줄을 제공합니다.",
    bullets: ["프레임별 ‘이렇게 서면 좋아요’", "현장 문의 감소 + 만족도 상승", "텍스트 기반으로도 충분히 가능"],
  },
  {
    id: "after_follow",
    phase: "After" as Phase,
    icon: "clock",
    tag: "After the Moment",
    title: "Gentle Follow-up — 여운을 이어줌",
    desc: "촬영 다음 날/일주일 뒤에도 경험이 자연스럽게 이어집니다. 과도한 알림 대신 부드러운 리마인드.",
    bullets: ["‘어제의 순간’ 리마인드", "관련 프레임/스토리 추천", "재방문 이유를 ‘추억’으로 만든다"],
  },
  {
    id: "after_taste",
    phase: "After" as Phase,
    icon: "mood",
    tag: "My Taste, Quietly",
    title: "Taste Memory — 말하지 않아도 알아주는 취향",
    desc: "취향 설정을 강요하지 않고 사용 패턴을 바탕으로 무드를 형용사로 표현합니다.",
    bullets: ["Playful · Cozy · Minimal 같은 무드", "개인화지만 ‘가벼운’ 개인화", "브랜드 톤을 해치지 않음"],
  },
  {
    id: "after_circle",
    phase: "After" as Phase,
    icon: "circle",
    tag: "Belonging, Not Community",
    title: "Quiet Circles — 커뮤니티보다 소속감",
    desc: "광장형 커뮤니티 대신 같은 프레임을 좋아하는 사람들의 느슨한 서클. 글을 쓰지 않아도 함께 있는 느낌.",
    bullets: ["‘이 프레임을 좋아한 사람들’ 중심", "운영 부담 최소화", "자연스러운 UGC 유도"],
  },
  {
    id: "after_surprise",
    phase: "After" as Phase,
    icon: "gift",
    tag: "Small Surprise",
    title: "Unexpected Moments — 작은 기쁨",
    desc: "보상보다 강력한 건 예상 밖의 기쁨. 특정 순간에 조용히 열리는 프레임/혜택으로 감정을 남깁니다.",
    bullets: ["n번째 방문/첫 사용/기념일에 제공", "카피 톤: “We thought you’d like this.”", "리워드는 전면 노출하지 않는다"],
  },
];

export const journeyMap: JourneyItem[] = [
  {
    phase: "Before",
    icon: "map",
    title: "Before — ‘오늘은 뭘 찍지?’",
    bullets: ["Moment Preview로 ‘오늘의 프레임’ 제안", "매장/지역 기반 ‘가까운 경험’ 제안(조용히)", "촬영 팁 한 줄로 불안감 낮추기"],
  },
  {
    phase: "During",
    icon: "hint",
    title: "During — ‘지금 이 순간을 더 잘’",
    bullets: ["프레임별 Quiet Pose Tip (1~2줄)", "People Tag: 누구와 함께인지 남기기", "리워드는 보이지 않게 누적(Quiet Rewards)"],
  },
  {
    phase: "After",
    icon: "clock",
    title: "After — ‘여운이 다시 방문을 만든다’",
    bullets: ["Gentle Follow-up으로 자연스러운 리마인드", "Taste Memory로 ‘내 취향’ 문장화", "Quiet Circles로 소속감 + UGC 흐름 생성"],
  },
];

export const quietRewardsCopy: CopyBucket[] = [
  {
    icon: "gift",
    title: "적립(노출 최소화)",
    lines: ["“Thanks for being here.”", "“오늘의 순간에 작은 선물을 남겼어요.”", "“방금 경험이 조용히 저장됐어요.”"],
  },
  {
    icon: "copy",
    title: "사용(체감 중심)",
    lines: ["“This one’s on us.”", "“이 프레임, 오늘은 열어둘게요.”", "“조용히 혜택을 적용했어요.”"],
  },
  {
    icon: "spark",
    title: "서프라이즈(감정 설계)",
    lines: ["“We thought you’d like this.”", "“당신의 취향에 맞춰 하나 골라뒀어요.”", "“오늘은 이 무드가 잘 어울릴 것 같아요.”"],
  },
];

export const revenueLogic: LogicItem[] = [
  {
    icon: "link",
    title: "1) 경험 → 재방문(리텐션)",
    desc: "찍기 전(Preview)·찍는 중(Tips)·찍고 난 뒤(Follow-up)가 연결되면 ‘한 번’이 ‘반복’이 됩니다.",
    bullets: ["방문 빈도 ↑", "비수기 완충(캠페인/추천)", "재방문이 매출의 가장 큰 레버"],
  },
  {
    icon: "chart",
    title: "2) 재방문 → 객단가(ARPU) 상승",
    desc: "Quiet Rewards는 ‘코인’이 아니라 ‘체감 혜택’으로 설계됩니다. 프레임 잠금해제/쿠폰은 구매를 자연스럽게 만듭니다.",
    bullets: ["앱 전용 프레임/프로모션 전환 ↑", "업셀(프레임/굿즈) 가능성 ↑", "할인은 ‘조용히’ 적용해 거부감 ↓"],
  },
  {
    icon: "people",
    title: "3) 소속감 → 유입(Organic Growth)",
    desc: "Quiet Circles/UGC는 광고비를 줄이고, ‘친구와 함께’ 오게 만듭니다. 촬영은 사회적 행위입니다.",
    bullets: ["자발적 공유/추천 ↑", "신규 유입 CAC ↓", "프레임이 ‘밈’처럼 확산"],
  },
];

export const partnerValue: CardItem[] = [
  {
    id: "p_rev",
    tag: "Revenue",
    title: "추가 매출원: 앱-기반 리텐션 & 재방문 촉진",
    desc:
      "오프라인 ‘1회 방문’이 앱을 통해 ‘반복 방문’으로 바뀝니다. 쿠폰/리워드/프레임 잠금해제는 현장 매출을 직접 끌어올립니다.",
    bullets: ["직영/가맹 공통: 촬영권·리워드로 재방문 유도", "앱 전용 프레임/프로모션으로 객단가(ARPU) 상승", "성수기·비수기 편차 완화(캠페인으로 수요 조절)"],
    icon: "chart",
  },
  {
    id: "p_mkt",
    tag: "Marketing",
    title: "마케팅 비용 절감: 앱이 ‘로컬 CRM’ 역할",
    desc:
      "가맹점주/해외 총판에게 가장 큰 고통은 ‘지역별 마케팅’입니다. 앱은 고객을 직접 연결하고, 매장 단위 쿠폰/메시지로 전환 비용을 낮춥니다.",
    bullets: ["매장 단위 쿠폰(예: 4,000원)으로 즉시 유입", "공지/이벤트/신규 프레임을 앱으로 푸시(소셜보다 효율적)", "UGC/커뮤니티가 자연 노출을 만들며 광고 의존도 감소"],
    icon: "spark",
  },
  {
    id: "p_data",
    tag: "Data",
    title: "데이터 기반 운영: ‘감’이 아니라 ‘지표’로 매장 운영",
    desc:
      "오프라인 운영에서 가장 부족한 건 ‘누가 왜 오는지’ 데이터입니다. 앱은 방문-결제-프레임-리워드를 연결해, 매장 운영 의사결정을 숫자로 바꿉니다.",
    bullets: ["프레임별 판매/선호, 시간대별 수요, 재방문율 추적", "지역별 트렌드 감지 → 로컬 전용 프레임 기획 가능", "프로모션 A/B 테스트로 최적의 쿠폰/경품 구조 도출"],
    icon: "link",
  },
  {
    id: "p_ops",
    tag: "Operations",
    title: "운영 효율: 현장 응대/CS 부담 감소",
    desc:
      "고객 문의(‘어떤 프레임이 예뻐요?’, ‘어떻게 찍어요?’)의 상당 부분을 커뮤니티/가이드로 흡수해 매장 운영 부담을 줄입니다.",
    bullets: ["프레임별 촬영 팁/가이드 → 현장 문의 감소", "커뮤니티 Q&A로 고객이 고객을 돕는 구조", "이벤트/공지의 앱화로 현장 안내물·인력 부담 축소"],
    icon: "hint",
  },
  {
    id: "p_global",
    tag: "Global Expansion",
    title: "해외 총판 관점: ‘로컬 표준화’와 ‘본사 콘텐츠 동기화’",
    desc:
      "마스터 프랜차이즈의 어려움은 국가별 운영 편차입니다. 앱은 콘텐츠/정책을 표준화하고, 본사 기획을 국가별로 안전하게 확장하는 채널이 됩니다.",
    bullets: ["본사 프레임/이벤트를 글로벌 동기화(국가별 스케줄 분리 가능)", "권역별 리워드/쿠폰 정책 분리(환율/가격/규제 대응)", "멀티 리전 인프라로 성능/안정성 확보(1M MAU 확장)"],
    icon: "map",
  },
  {
    id: "p_ecosys",
    tag: "Partner Ecosystem",
    title: "파트너 생태계: 로컬 IP/인플루언서 콜라보를 ‘제품화’",
    desc:
      "총판/가맹점주는 로컬 IP와 협업을 ‘한 번 이벤트’로 끝내기 쉽습니다. 앱은 이를 프레임 마켓/채널로 전환해 지속 매출로 만드는 장치입니다.",
    bullets: ["로컬 인플루언서 프레임 → 앱 전용 판매로 지속화", "판매 시 RS(수익 분배) 구조로 파트너/크리에이터 참여 촉진", "국가별 인기 프레임을 본사로 역수출(글로벌 확산 소재)"],
    icon: "people",
  },
];

export const doList = [
  "앱은 Hub, 키오스크는 Core Experience",
  "보상은 조용히, 체감 혜택은 확실히",
  "기억/기여를 ‘문장’으로 남기는 UX",
  "프레임 스토리로 선택의 이유를 만든다",
];

export const dontList = [
  "앱 내 촬영/필터 추가 (키오스크 경험과 충돌)",
  "과한 커뮤니티 기능(피드 과열, 운영 비용 폭증)",
  "랭킹/서열 중심 구조(브랜드 톤 훼손)",
  "리워드 과잉 노출 UI(‘코인 앱’으로 인식될 리스크)",
];

export const navLinks = [
  { href: "#principle", label: "원칙" },
  { href: "#journey", label: "여정 지도" },
  { href: "#experience", label: "고객 경험(탭)" },
  { href: "#quiet", label: "Quiet Rewards 카피" },
  { href: "#revenue", label: "경험→매출 논리" },
  { href: "#partners", label: "파트너 이점" },
  { href: "#dosdonts", label: "DO / DON'T" },
] as const;

// content/data.ts 에 아래 내용을 추가하세요.
import { CardItem } from "./types";

export const appleIdentityItems: CardItem[] = [
  {
    id: "haptic",
    tag: "Taptic Engine",
    title: "Feel the moment.",
    desc: "화면을 터치하는 순간, 손끝에 전해지는 미세하고 기분 좋은 진동. 리워드가 쌓이는 순간을 '무게감' 있게 전달합니다.",
    bullets: [
      "리워드 획득 시 '딸깍'하는 아날로그 감각",
      "프레임 선택 시 부드러운 텐션 피드백",
      "성공/실패가 아닌 '완성'의 감각 전달"
    ],
    icon: "spark" // 기존 아이콘 재사용 또는 'wave' 등 추가 가능
  },
  {
    id: "dynamic",
    tag: "Live Activities",
    title: "Always at a glance.",
    desc: "앱을 굳이 열지 않아도 됩니다. 다이내믹 아일랜드가 당신의 촬영 순서와 매장 위치를 조용히 알려줍니다.",
    bullets: [
      "잠금 화면에서 대기 순서 실시간 확인",
      "매장 근처 진입 시 추천 프레임 팝업",
      "앱 진입 뎁스(Depth)를 0으로 단축"
    ],
    icon: "clock"
  },
  {
    id: "privacy",
    tag: "Privacy by Design",
    title: "Your data. Your story.",
    desc: "당신의 추억은 온전히 당신의 것입니다. 우리는 당신이 누구인지보다, 무엇을 좋아하는지만 기억합니다.",
    bullets: [
      "얼굴 데이터 저장 없음 (On-device 처리)",
      "위치 기록 미저장 (실시간 트리거만 활용)",
      "투명한 데이터 사용 리포트 제공"
    ],
    icon: "lock" // Icon.tsx에 lock 추가 필요 (또는 기존 circle 등 사용)
  }
];
        ### 📄 content\types.ts
        > **Context Summary**
        * wb **Type/Intf:** `Phase`
* wb **Type/Intf:** `CardItem`
* wb **Type/Intf:** `JourneyItem`
* wb **Type/Intf:** `CopyBucket`
* wb **Type/Intf:** `LogicItem`

        ```ts
        export type Phase = "Before" | "During" | "After";

export type CardItem = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  icon?: string;
  phase?: Phase;
};

export type JourneyItem = {
  phase: Phase;
  icon: string;
  title: string;
  bullets: string[];
};

export type CopyBucket = {
  icon: string;
  title: string;
  lines: string[];
};

export type LogicItem = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
};

        ### 📄 lib\useLanguage.tsx
        > **Context Summary**
        * wf **Function:** `LanguageProvider`
* wf **Function:** `useLanguage`
* ww **Hooks:** `useLanguage, useContext`

        ```typescript
        "use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// 🟢 [수정] 4개 국어 타입 정의
type Lang = "ko" | "en" | "zh-CN" | "zh-TW";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 🟢 [수정] 다국어 딕셔너리 확장
const dictionary: Record<string, Record<Lang, string>> = {
  // Journey Section
  "journey.title": { 
    ko: "forFAN 고객 여정 지도", 
    en: "Customer Journey Map",
    "zh-CN": "forFAN 客户旅程地图",
    "zh-TW": "forFAN 客戶旅程地圖"
  },
  "journey.lead": { 
    ko: "고객의 시간은 멈춰있지 않습니다. Before(기대)에서 After(여운)까지 끊김 없는 빛의 흐름을 설계합니다.", 
    en: "Customer time never stops. We design a seamless flow of light from Before (Expectation) to After (Afterglow).",
    "zh-CN": "客户的时间从未停止。我们设计了从 Before (期待) 到 After (回味) 的无缝光流体验。",
    "zh-TW": "客戶的時間從未停止。我們設計了從 Before (期待) 到 After (回味) 的無縫光流體驗。"
  },
  
  // Experience Section
  "exp.title": { 
    ko: "경험의 흐름: Before · During · After", 
    en: "Flow of Experience",
    "zh-CN": "体验流程: Before · During · After",
    "zh-TW": "體驗流程: Before · During · After"
  },
  "exp.lead": { 
    ko: "경험은 멈추지 않고 흐릅니다. 시간의 흐름에 따라 변화하는 가치를 확인하세요.", 
    en: "Experience flows continuously. Witness how value transforms over time.",
    "zh-CN": "体验川流不息。请见证价值随时间流逝而发生的转变。",
    "zh-TW": "體驗川流不息。請見證價值隨時間流逝而發生的轉變。"
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  // 🟢 [수정] 4개 국어 순환 로직
  const toggleLang = () => {
    setLang((prev) => {
      if (prev === "ko") return "en";
      if (prev === "en") return "zh-CN";
      if (prev === "zh-CN") return "zh-TW";
      return "ko";
    });
  };
  
  const t = (key: string) => {
    return dictionary[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
        ### 📄 next.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

        ### 📄 app/layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/DynamicIsland`
* 🧩 **Component (Default):** `RootLayout`

        ```typescript
        import "./globals.css";
import DynamicIslandProvider from "@/components/DynamicIsland"; // 👈 Import

export const metadata = {
  title: "forFAN — LK Ventures NX View",
  description: "forFAN을 '찍는 앱'이 아닌 '경험을 설계하는 브랜드 플랫폼'으로",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* 🟢 Provider로 감싸줍니다 */}
        <DynamicIslandProvider>
          {children}
        </DynamicIslandProvider>
      </body>
    </html>
  );
}
        ### 📄 app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/lib/useLanguage, @/components/ScrollReveal, @/components/SectionShell, @/components/sections/HeroSection, @/components/sections/PrincipleSection`...
* 🧩 **Component (Default):** `Page`

        ```typescript
        "use client";

import { LanguageProvider } from "@/lib/useLanguage"; // 👈 Provider Import
import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";
import HeroSection from "@/components/sections/HeroSection";
import PrincipleSection from "@/components/sections/PrincipleSection";
import JourneySection from "@/components/sections/JourneySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AppleIdentitySection from "@/components/sections/AppleIdentitySection";
import AppleWalletSection from "@/components/sections/AppleWalletSection";
import QuietRewardsSection from "@/components/sections/QuietRewardsSection";
import RevenueSection from "@/components/sections/RevenueSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CreatorEconomySection from "@/components/sections/CreatorEconomySection";
import DosDontsSection from "@/components/sections/DosDontsSection";
import FloatingDock from "@/components/FloatingDock";

export default function Page() {
  return (
    /* 🟢 최상위 래퍼를 LanguageProvider로 설정 */
    <LanguageProvider>
      
      {/* 이제 FloatingDock이 Provider 내부에 있으므로 에러가 사라집니다 */}
      <FloatingDock />
      
      <main>
        <HeroSection />

        <div className="container" style={{ paddingTop: 40 }}>
          <ScrollReveal delay={100}><PrincipleSection /></ScrollReveal>
        </div>
        
        <div className="container">
          <SectionShell id="journey" className="theme-clean">
            <JourneySection />
          </SectionShell>
        </div>

        <div className="container">
          <SectionShell id="experience" className="theme-mist">
             <ExperienceSection />
          </SectionShell>
        </div>

        <AppleIdentitySection />
        
        <div className="container">
          <AppleWalletSection /> 
        </div>

        <QuietRewardsSection />

        {/* Revenue Section (Self-contained Theme) */}
        <RevenueSection />

        {/* Partners Section (Self-contained Theme) */}
        <PartnersSection />

        {/* Creator Economy Section (Self-contained Theme) */}
        <CreatorEconomySection />

        <div className="container">
           <SectionShell id="dosdonts" className="theme-clean">
             <DosDontsSection />
           </SectionShell>
        </div>

        <footer className="footer container" style={{ marginBottom: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800, color: "var(--text-primary)" }}>forFAN Global · Experience-first Brief</div>
              <div style={{ marginTop: 6, color: "var(--text-secondary)" }}>
                Designed by LK Ventures for customers.
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
               <span className="kbd">Confidential</span>
            </div>
          </div>
        </footer>
      </main>
    </LanguageProvider>
  );
}
        ### 📄 app/globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        @tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Apple Pro Color Palette */
  --bg: #f5f5f7;
  --card-bg: #ffffff;
  --text-primary: #1d1d1f;
  --text-secondary: #86868b;
  --text-tertiary: #a1a1a6;
  --accent-blue: #0071e3;
  --border-light: rgba(0, 0, 0, 0.05);
  
  /* Easing */
  --ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1);
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden; /* 가로 스크롤 방지 */
}

/* 🟢 1. Shared Layout System */
.container {
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.section {
  padding: 80px 0;
  position: relative;
}

/* Bento Grid (ItemCard용) */
.bento-grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;
}
@media (max-width: 900px) {
  .bento-grid-container { grid-template-columns: 1fr; }
}

/* Typography */
.h1 {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0 0 24px 0;
  color: #1d1d1f;
}

.h2 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: #1d1d1f;
}

.lead {
  font-size: 21px;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 400;
  max-width: 920px;
  margin: 0 auto 50px;
  word-break: keep-all;
}
.lead b { color: var(--text-primary); }

/* 🟢 2. Hero Section Styles (복구됨) */
.hero { padding: 60px 0 40px; }
.kicker { 
  font-size: 13px; font-weight: 600; color: #f56300; 
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; 
}
.sub { 
  font-size: 20px; line-height: 1.6; color: var(--text-secondary); 
  max-width: 800px; margin-bottom: 40px; 
}

.heroCards {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  margin-top: 40px;
}
@media (max-width: 900px) { .heroCards { grid-template-columns: 1fr; } }

.card {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.02);
}
.quote {
  padding: 40px;
  background: linear-gradient(135deg, #fafafa, #f5f5f7);
  border-bottom: 1px solid rgba(0,0,0,0.03);
}
.quoteText { font-size: 24px; font-weight: 700; line-height: 1.3; color: #1d1d1f; }
.quoteSmall { margin-top: 12px; font-size: 15px; color: var(--text-secondary); }
.cardPad { padding: 32px; }
.badges { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.badge {
  font-size: 13px; font-weight: 500; color: var(--text-secondary);
  background: #f5f5f7; padding: 6px 12px; border-radius: 8px;
}
.hr { height: 1px; background: rgba(0,0,0,0.06); margin: 24px 0; }
.kbd { 
  font-size: 11px; font-weight: 700; text-transform: uppercase; color: #86868b;
  border: 1px solid rgba(0,0,0,0.1); padding: 3px 6px; border-radius: 6px; 
}

/* 🟢 3. Experience Rail Styles (복구됨) */
.rail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}
@media (max-width: 768px) { .rail { grid-template-columns: 1fr; } }

.railStep {
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 18px;
  padding: 20px;
  transition: 0.3s var(--ease-apple);
}
.railActive {
  background: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  border-color: transparent;
  transform: scale(1.02);
}
.railTitle { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: #1d1d1f; }
.railDesc { font-size: 13px; color: var(--text-secondary); line-height: 1.4; }

.flowHint {
  margin: 0 0 40px;
  padding: 16px;
  background: rgba(0,113,227,0.05);
  border-radius: 12px;
  color: #0071e3;
  font-size: 14px;
  text-align: center;
}

/* 🟢 4. DO / DON'T Styles (복구됨) */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 768px) { .split { grid-template-columns: 1fr; } }

.doDont {
  background: #fff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}
.listTitle {
  font-size: 18px; font-weight: 800; margin-bottom: 20px;
  display: flex; align-items: center; gap: 8px;
}

/* 기존 Bullets 재정의 (ItemCard와 DoDont 공용) */
.bullets { list-style: none; padding: 0; margin: 0; }
.bullets li {
  position: relative;
  padding-left: 14px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #424245;
  line-height: 1.6;
}
.bullets li::before {
  content: "•"; position: absolute; left: 0; color: #d2d2d7;
}

/* 🟢 5. Nav & Footer (유지) */
.nav {
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  background: rgba(245, 245, 247, 0.8);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.navInner { display: flex; justify-content: space-between; padding: 14px 0; align-items: center; }
.navLinks { display: flex; gap: 8px; flex-wrap: wrap; }
.pill { padding: 8px 16px; border-radius: 99px; font-size: 12px; font-weight: 600; background: rgba(0,0,0,0.04); color: var(--text-secondary); transition: 0.2s; text-decoration: none; }
.pill:hover { background: #000; color: #fff; }

.footer { padding: 80px 0; border-top: 1px solid rgba(0,0,0,0.05); color: var(--text-secondary); font-size: 12px; margin-top: 60px; }

/* 🟢 6. Animation Utility */
.reveal-container {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s var(--ease-apple), transform 0.8s var(--ease-apple);
  display: block; 
}
.reveal-visible { opacity: 1; transform: translateY(0); }

/* ... 기존 코드 아래에 추가 ... */

/* 🟢 Ambient Aurora Background */
.aurora-bg {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: 
    radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.15) 0px, transparent 50%);
  filter: blur(80px);
  z-index: -1;
  opacity: 0.8;
  animation: aurora-move 20s ease infinite alternate;
  pointer-events: none; /* 클릭 방해 금지 */
}

@keyframes aurora-move {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-2%, 2%) scale(1.05); }
  100% { transform: translate(2%, -2%) scale(1); }
}

/* 🟢 Text Gradient (강조용) */
.text-gradient {
  background: linear-gradient(135deg, #1d1d1f 0%, #86868b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* ... 기존 globals.css 내용 아래에 추가 ... */

/* 🟢 Section Box System (공통) */
.section-island {
  border-radius: 48px; /* 더 둥글고 유려하게 */
  padding: 80px 40px;
  margin: 40px auto;
  position: relative;
  overflow: hidden;
  /* 기본적으로 모든 섹션에 미세한 깊이감 부여 */
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
}

@media (max-width: 768px) {
  .section-island { padding: 40px 24px; border-radius: 32px; margin: 24px auto; }
}

/* ⚪️ Theme 1: Clean White (Journey, Do/Dont) */
.theme-clean {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.03);
}

/* 🌫️ Theme 2: Soft Mist (Experience, Revenue) */
.theme-mist {
  background: #fbfbfd;
  border: 1px solid rgba(0,0,0,0.05);
}

/* 💎 Theme 3: Flashy Growth (Partners - 수익 극대화) */
.theme-growth {
  background: linear-gradient(135deg, #F0F9FF 0%, #E6FFFA 50%, #F5F3FF 100%);
  border: 1px solid rgba(255,255,255,0.5);
}
/* 움직이는 오로라 효과 (Partners용) */
.theme-growth::before {
  content: "";
  position: absolute;
  top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at 50% 50%, rgba(52, 199, 89, 0.15), transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(0, 113, 227, 0.15), transparent 50%);
  animation: aurora-spin 15s linear infinite;
  z-index: 0; pointer-events: none;
}

/* 🪙 Theme 4: Flashy Gold (Quiet Rewards - 코인) */
.theme-gold {
  background: linear-gradient(180deg, #FFFBF0 0%, #FFFFFF 80%);
  border: 1px solid rgba(218, 165, 32, 0.1);
}
/* 골드 쉬머 효과 (Rewards용) */
.theme-gold::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.15) 0%, transparent 60%),
    repeating-linear-gradient(45deg, rgba(218, 165, 32, 0.03) 0px, rgba(218, 165, 32, 0.03) 1px, transparent 1px, transparent 10px);
  z-index: 0; pointer-events: none;
}

@keyframes aurora-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
        ### 📄 content/data.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import { CardItem, CopyBucket, JourneyItem, LogicItem, Phase } from "./types";

export const brandItems: CardItem[] = [
  {
    id: "moment",
    tag: "1) Moment Ownership",
    title: "Moment Card — 순간을 ‘소유’하게 만들기",
    desc:
      "사진이 아니라 ‘그날의 선택과 감정’을 기록합니다. 촬영 후 자동으로 생성되는 카드로, 프레임/매장/날짜/친구 태그 등 ‘순간 메타’를 남깁니다.",
    bullets: [
      "촬영 후 자동 생성: 날짜 · 매장 · 프레임 · 참여자(태그)",
      "사진 없이도 ‘기억의 증거’가 남는 구조",
      "공유는 ‘이미지’가 아니라 ‘경험’ 중심으로",
    ],
    icon: "spark",
  },
  {
    id: "story",
    tag: "2) Story Layer",
    title: "Frame Story Layer — ‘왜 이 프레임인가’",
    desc:
      "프레임 선택을 단순 구매에서 ‘공감한 선택’으로 바꿉니다. 프레임마다 기획 의도/추천 상황/촬영 팁/제작자 스토리를 얹습니다.",
    bullets: [
      "프레임 설명: 감정/상황/추천 포즈/촬영 팁",
      "제작자/브랜드/아티스트의 의도 한 줄",
      "선택의 이유를 만드는 스토리 UX",
    ],
    icon: "map",
  },
  {
    id: "status",
    tag: "3) Subtle Status",
    title: "Invisible Fan Status — 배지가 아닌 ‘정체성 문장’",
    desc:
      "레벨 숫자 대신 ‘당신이 만든 영향’을 문장으로 제공합니다. 은근한 인정(Recognition)이 재방문과 자발적 확산을 만듭니다.",
    bullets: [
      "예: ‘이 프레임이 뜰 때 당신이 있었다’",
      "랭킹/서열 대신 ‘기여 기반’ 문장",
      "SNS 공유 가능한 ‘짧은 문장’ 중심",
    ],
    icon: "people",
  },
  {
    id: "rewards",
    tag: "4) Quiet Rewards",
    title: "Quiet Rewards — 코인은 조용히, 혜택은 체감되게",
    desc:
      "리워드(블록체인 코인)를 전면에 내세우지 않습니다. 대신 ‘잠금 해제/먼저 보기/조용한 쿠폰’처럼 체감 혜택을 자연스럽게 제공합니다.",
    bullets: [
      "키오스크 이용/앱 결제 → 코인 적립(백그라운드)",
      "사용처: 프레임 잠금 해제 · 할인 · 우선 접근",
      "메시지 톤: ‘Thanks for being here’",
    ],
    icon: "gift",
  },
  {
    id: "creator",
    tag: "5) Creator as Brand",
    title: "Creator Profile — 프레임 제작자를 ‘브랜드’로",
    desc:
      "forFAN의 핵심은 프레임=콘텐츠=브랜드입니다. 제작자 프로필을 단순 판매자가 아닌 ‘크리에이터’로 설계합니다.",
    bullets: [
      "한 줄 소개 + 대표 프레임 3개",
      "‘이 프레임은 이런 사람에게 추천’",
      "커뮤니티/RS(수익 분배)와 결합",
    ],
    icon: "circle",
  },
  {
    id: "philosophy",
    tag: "6) One Line Philosophy",
    title: "앱의 철학 한 줄 — 모든 기능의 기준점",
    desc:
      "기능보다 중요한 건 ‘왜 존재하는가’입니다. 앱 안에 문장으로 철학을 고정하고, 모든 UX가 그 문장을 설명하게 만듭니다.",
    bullets: [
      "“사진을 찍게 하지는 않습니다. 그 순간을 더 오래 기억하게 합니다.”",
      "온보딩/홈/프레임 상세에 일관되게 노출",
      "브랜드 메시지의 통일성 강화",
    ],
    icon: "copy",
  },
];

export const experienceItems: CardItem[] = [
  {
    id: "before_preview",
    phase: "Before" as Phase,
    icon: "spark",
    tag: "Before the Moment",
    title: "Moment Preview — 찍기 전의 설렘",
    desc: "오늘/이번 주에 어울리는 프레임과 무드를 가볍게 추천해, 앱을 여는 이유를 ‘설렘’으로 만듭니다.",
    bullets: [
      "오늘의 추천 프레임(가벼운 큐레이션)",
      "요일/시간대 기반 추천(과하지 않게)",
      "‘찍을까?’를 ‘찍자’로 바꾸는 트리거",
    ],
  },
  {
    id: "during_people",
    phase: "During" as Phase,
    icon: "people",
    tag: "People, not Photos",
    title: "People Tag Memory — 사람을 기억",
    desc: "사진보다 중요한 ‘누구와 함께였는지’를 남깁니다. 통계가 아니라 문장으로 관계를 표현합니다.",
    bullets: ["촬영 순간 참여자 태그", "관계는 숫자가 아니라 ‘문장’", "재방문 동기를 ‘사람’으로 연결"],
  },
  {
    id: "during_hint",
    phase: "During" as Phase,
    icon: "hint",
    tag: "Soft Guidance",
    title: "Quiet Pose & Mood Tips — 조용한 힌트",
    desc: "강요하는 튜토리얼이 아니라 ‘힌트’ 수준으로 프레임별 팁 1~2줄을 제공합니다.",
    bullets: ["프레임별 ‘이렇게 서면 좋아요’", "현장 문의 감소 + 만족도 상승", "텍스트 기반으로도 충분히 가능"],
  },
  {
    id: "after_follow",
    phase: "After" as Phase,
    icon: "clock",
    tag: "After the Moment",
    title: "Gentle Follow-up — 여운을 이어줌",
    desc: "촬영 다음 날/일주일 뒤에도 경험이 자연스럽게 이어집니다. 과도한 알림 대신 부드러운 리마인드.",
    bullets: ["‘어제의 순간’ 리마인드", "관련 프레임/스토리 추천", "재방문 이유를 ‘추억’으로 만든다"],
  },
  {
    id: "after_taste",
    phase: "After" as Phase,
    icon: "mood",
    tag: "My Taste, Quietly",
    title: "Taste Memory — 말하지 않아도 알아주는 취향",
    desc: "취향 설정을 강요하지 않고 사용 패턴을 바탕으로 무드를 형용사로 표현합니다.",
    bullets: ["Playful · Cozy · Minimal 같은 무드", "개인화지만 ‘가벼운’ 개인화", "브랜드 톤을 해치지 않음"],
  },
  {
    id: "after_circle",
    phase: "After" as Phase,
    icon: "circle",
    tag: "Belonging, Not Community",
    title: "Quiet Circles — 커뮤니티보다 소속감",
    desc: "광장형 커뮤니티 대신 같은 프레임을 좋아하는 사람들의 느슨한 서클. 글을 쓰지 않아도 함께 있는 느낌.",
    bullets: ["‘이 프레임을 좋아한 사람들’ 중심", "운영 부담 최소화", "자연스러운 UGC 유도"],
  },
  {
    id: "after_surprise",
    phase: "After" as Phase,
    icon: "gift",
    tag: "Small Surprise",
    title: "Unexpected Moments — 작은 기쁨",
    desc: "보상보다 강력한 건 예상 밖의 기쁨. 특정 순간에 조용히 열리는 프레임/혜택으로 감정을 남깁니다.",
    bullets: ["n번째 방문/첫 사용/기념일에 제공", "카피 톤: “We thought you’d like this.”", "리워드는 전면 노출하지 않는다"],
  },
];

export const journeyMap: JourneyItem[] = [
  {
    phase: "Before",
    icon: "map",
    title: "Before — ‘오늘은 뭘 찍지?’",
    bullets: ["Moment Preview로 ‘오늘의 프레임’ 제안", "매장/지역 기반 ‘가까운 경험’ 제안(조용히)", "촬영 팁 한 줄로 불안감 낮추기"],
  },
  {
    phase: "During",
    icon: "hint",
    title: "During — ‘지금 이 순간을 더 잘’",
    bullets: ["프레임별 Quiet Pose Tip (1~2줄)", "People Tag: 누구와 함께인지 남기기", "리워드는 보이지 않게 누적(Quiet Rewards)"],
  },
  {
    phase: "After",
    icon: "clock",
    title: "After — ‘여운이 다시 방문을 만든다’",
    bullets: ["Gentle Follow-up으로 자연스러운 리마인드", "Taste Memory로 ‘내 취향’ 문장화", "Quiet Circles로 소속감 + UGC 흐름 생성"],
  },
];

export const quietRewardsCopy: CopyBucket[] = [
  {
    icon: "gift",
    title: "적립(노출 최소화)",
    lines: ["“Thanks for being here.”", "“오늘의 순간에 작은 선물을 남겼어요.”", "“방금 경험이 조용히 저장됐어요.”"],
  },
  {
    icon: "copy",
    title: "사용(체감 중심)",
    lines: ["“This one’s on us.”", "“이 프레임, 오늘은 열어둘게요.”", "“조용히 혜택을 적용했어요.”"],
  },
  {
    icon: "spark",
    title: "서프라이즈(감정 설계)",
    lines: ["“We thought you’d like this.”", "“당신의 취향에 맞춰 하나 골라뒀어요.”", "“오늘은 이 무드가 잘 어울릴 것 같아요.”"],
  },
];

export const revenueLogic: LogicItem[] = [
  {
    icon: "link",
    title: "1) 경험 → 재방문(리텐션)",
    desc: "찍기 전(Preview)·찍는 중(Tips)·찍고 난 뒤(Follow-up)가 연결되면 ‘한 번’이 ‘반복’이 됩니다.",
    bullets: ["방문 빈도 ↑", "비수기 완충(캠페인/추천)", "재방문이 매출의 가장 큰 레버"],
  },
  {
    icon: "chart",
    title: "2) 재방문 → 객단가(ARPU) 상승",
    desc: "Quiet Rewards는 ‘코인’이 아니라 ‘체감 혜택’으로 설계됩니다. 프레임 잠금해제/쿠폰은 구매를 자연스럽게 만듭니다.",
    bullets: ["앱 전용 프레임/프로모션 전환 ↑", "업셀(프레임/굿즈) 가능성 ↑", "할인은 ‘조용히’ 적용해 거부감 ↓"],
  },
  {
    icon: "people",
    title: "3) 소속감 → 유입(Organic Growth)",
    desc: "Quiet Circles/UGC는 광고비를 줄이고, ‘친구와 함께’ 오게 만듭니다. 촬영은 사회적 행위입니다.",
    bullets: ["자발적 공유/추천 ↑", "신규 유입 CAC ↓", "프레임이 ‘밈’처럼 확산"],
  },
];

export const partnerValue: CardItem[] = [
  {
    id: "p_rev",
    tag: "Revenue",
    title: "추가 매출원: 앱-기반 리텐션 & 재방문 촉진",
    desc:
      "오프라인 ‘1회 방문’이 앱을 통해 ‘반복 방문’으로 바뀝니다. 쿠폰/리워드/프레임 잠금해제는 현장 매출을 직접 끌어올립니다.",
    bullets: ["직영/가맹 공통: 촬영권·리워드로 재방문 유도", "앱 전용 프레임/프로모션으로 객단가(ARPU) 상승", "성수기·비수기 편차 완화(캠페인으로 수요 조절)"],
    icon: "chart",
  },
  {
    id: "p_mkt",
    tag: "Marketing",
    title: "마케팅 비용 절감: 앱이 ‘로컬 CRM’ 역할",
    desc:
      "가맹점주/해외 총판에게 가장 큰 고통은 ‘지역별 마케팅’입니다. 앱은 고객을 직접 연결하고, 매장 단위 쿠폰/메시지로 전환 비용을 낮춥니다.",
    bullets: ["매장 단위 쿠폰(예: 4,000원)으로 즉시 유입", "공지/이벤트/신규 프레임을 앱으로 푸시(소셜보다 효율적)", "UGC/커뮤니티가 자연 노출을 만들며 광고 의존도 감소"],
    icon: "spark",
  },
  {
    id: "p_data",
    tag: "Data",
    title: "데이터 기반 운영: ‘감’이 아니라 ‘지표’로 매장 운영",
    desc:
      "오프라인 운영에서 가장 부족한 건 ‘누가 왜 오는지’ 데이터입니다. 앱은 방문-결제-프레임-리워드를 연결해, 매장 운영 의사결정을 숫자로 바꿉니다.",
    bullets: ["프레임별 판매/선호, 시간대별 수요, 재방문율 추적", "지역별 트렌드 감지 → 로컬 전용 프레임 기획 가능", "프로모션 A/B 테스트로 최적의 쿠폰/경품 구조 도출"],
    icon: "link",
  },
  {
    id: "p_ops",
    tag: "Operations",
    title: "운영 효율: 현장 응대/CS 부담 감소",
    desc:
      "고객 문의(‘어떤 프레임이 예뻐요?’, ‘어떻게 찍어요?’)의 상당 부분을 커뮤니티/가이드로 흡수해 매장 운영 부담을 줄입니다.",
    bullets: ["프레임별 촬영 팁/가이드 → 현장 문의 감소", "커뮤니티 Q&A로 고객이 고객을 돕는 구조", "이벤트/공지의 앱화로 현장 안내물·인력 부담 축소"],
    icon: "hint",
  },
  {
    id: "p_global",
    tag: "Global Expansion",
    title: "해외 총판 관점: ‘로컬 표준화’와 ‘본사 콘텐츠 동기화’",
    desc:
      "마스터 프랜차이즈의 어려움은 국가별 운영 편차입니다. 앱은 콘텐츠/정책을 표준화하고, 본사 기획을 국가별로 안전하게 확장하는 채널이 됩니다.",
    bullets: ["본사 프레임/이벤트를 글로벌 동기화(국가별 스케줄 분리 가능)", "권역별 리워드/쿠폰 정책 분리(환율/가격/규제 대응)", "멀티 리전 인프라로 성능/안정성 확보(1M MAU 확장)"],
    icon: "map",
  },
  {
    id: "p_ecosys",
    tag: "Partner Ecosystem",
    title: "파트너 생태계: 로컬 IP/인플루언서 콜라보를 ‘제품화’",
    desc:
      "총판/가맹점주는 로컬 IP와 협업을 ‘한 번 이벤트’로 끝내기 쉽습니다. 앱은 이를 프레임 마켓/채널로 전환해 지속 매출로 만드는 장치입니다.",
    bullets: ["로컬 인플루언서 프레임 → 앱 전용 판매로 지속화", "판매 시 RS(수익 분배) 구조로 파트너/크리에이터 참여 촉진", "국가별 인기 프레임을 본사로 역수출(글로벌 확산 소재)"],
    icon: "people",
  },
];

export const doList = [
  "앱은 Hub, 키오스크는 Core Experience",
  "보상은 조용히, 체감 혜택은 확실히",
  "기억/기여를 ‘문장’으로 남기는 UX",
  "프레임 스토리로 선택의 이유를 만든다",
];

export const dontList = [
  "앱 내 촬영/필터 추가 (키오스크 경험과 충돌)",
  "과한 커뮤니티 기능(피드 과열, 운영 비용 폭증)",
  "랭킹/서열 중심 구조(브랜드 톤 훼손)",
  "리워드 과잉 노출 UI(‘코인 앱’으로 인식될 리스크)",
];

export const navLinks = [
  { href: "#principle", label: "원칙" },
  { href: "#journey", label: "여정 지도" },
  { href: "#experience", label: "고객 경험(탭)" },
  { href: "#quiet", label: "Quiet Rewards 카피" },
  { href: "#revenue", label: "경험→매출 논리" },
  { href: "#partners", label: "파트너 이점" },
  { href: "#dosdonts", label: "DO / DON'T" },
] as const;

export const appleIdentityItems: CardItem[] = [
  {
    id: "haptic",
    tag: "Taptic Engine",
    title: "Feel the moment.",
    desc: "화면을 터치하는 순간, 손끝에 전해지는 미세하고 기분 좋은 진동. 리워드가 쌓이는 순간을 '무게감' 있게 전달합니다.",
    bullets: [
      "리워드 획득 시 '딸깍'하는 아날로그 감각",
      "프레임 선택 시 부드러운 텐션 피드백",
      "성공/실패가 아닌 '완성'의 감각 전달"
    ],
    icon: "spark" // 기존 아이콘 재사용 또는 'wave' 등 추가 가능
  },
  {
    id: "dynamic",
    tag: "Live Activities",
    title: "Always at a glance.",
    desc: "앱을 굳이 열지 않아도 됩니다. 다이내믹 아일랜드가 당신의 촬영 순서와 매장 위치를 조용히 알려줍니다.",
    bullets: [
      "잠금 화면에서 대기 순서 실시간 확인",
      "매장 근처 진입 시 추천 프레임 팝업",
      "앱 진입 뎁스(Depth)를 0으로 단축"
    ],
    icon: "clock"
  },
  {
    id: "privacy",
    tag: "Privacy by Design",
    title: "Your data. Your story.",
    desc: "당신의 추억은 온전히 당신의 것입니다. 우리는 당신이 누구인지보다, 무엇을 좋아하는지만 기억합니다.",
    bullets: [
      "얼굴 데이터 저장 없음 (On-device 처리)",
      "위치 기록 미저장 (실시간 트리거만 활용)",
      "투명한 데이터 사용 리포트 제공"
    ],
    icon: "lock" // Icon.tsx에 lock 추가 필요 (또는 기존 circle 등 사용)
  }
];
        ### 📄 content/types.ts
        > **Context Summary**
        * wb **Type/Intf:** `Phase`
* wb **Type/Intf:** `CardItem`
* wb **Type/Intf:** `JourneyItem`
* wb **Type/Intf:** `CopyBucket`
* wb **Type/Intf:** `LogicItem`

        ```ts
        export type Phase = "Before" | "During" | "After";

export type CardItem = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  icon?: string;
  phase?: Phase;
};

export type JourneyItem = {
  phase: Phase;
  icon: string;
  title: string;
  bullets: string[];
};

export type CopyBucket = {
  icon: string;
  title: string;
  lines: string[];
};

export type LogicItem = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
};

        ### 📄 components/DynamicIsland.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `DynamicIslandProvider`
* ww **Hooks:** `useContext`

        ```typescript
        "use client";

import React, { createContext, useContext, useState } from "react";
import Icon from "./Icon";

// 1. Context 정의
type IslandState = {
  isActive: boolean;
  message: string;
  subMessage?: string;
  icon?: string;
};

type IslandContextType = {
  triggerIsland: (msg: string, sub?: string, icon?: string) => void;
};

const IslandContext = createContext<IslandContextType | null>(null);

export const useDynamicIsland = () => {
  const context = useContext(IslandContext);
  if (!context) throw new Error("useDynamicIsland must be used within a DynamicIslandProvider");
  return context;
};

export default function DynamicIslandProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IslandState>({ isActive: false, message: "", icon: "spark" });

  const triggerIsland = (message: string, subMessage: string = "", icon: string = "spark") => {
    setState({ isActive: false, message: "", icon }); // Reset to re-trigger animation
    
    setTimeout(() => {
      setState({ isActive: true, message, subMessage, icon });
    }, 50);

    setTimeout(() => {
      setState((prev) => ({ ...prev, isActive: false }));
    }, 4000); // 4초 후 닫힘
  };

  return (
    <IslandContext.Provider value={{ triggerIsland }}>
      {children}
      
      {/* 🏝️ UI Container */}
      <div className="island-container">
        <div className={`island-pill ${state.isActive ? "expanded" : "idle"}`}>
          <div className="island-content">
            <div className="content-layout">
              <div className="icon-area">
                <div className={`anim-icon ${state.isActive ? "pop-in" : ""}`}>
                   <Icon name={state.icon} />
                </div>
              </div>
              <div className="text-area">
                <span className="title">{state.message}</span>
                {state.subMessage && <span className="desc">{state.subMessage}</span>}
              </div>
              {/* 장식용 오디오 바 */}
              <div className="audio-bars">
                 <span className="bar" />
                 <span className="bar" />
                 <span className="bar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .island-container {
          position: fixed;
          /* 🟢 [수정] 헤더 높이(약 64px) + 여백(16px) = 80px 아래에 위치 */
          top: 15px; 
          left: 0; 
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 999; /* 네비게이션바보다 위, 혹은 상황에 따라 아래로 조정 */
          pointer-events: none;
        }

        .island-pill {
          background: #000;
          color: #fff;
          border-radius: 99px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 쫀득한 모션 */
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        /* Idle: 숨겨진 상태 (크기 0이 아니라 작게 대기하다가 사라짐) */
        .island-pill.idle {
          width: 0px; 
          height: 36px;
          opacity: 0;
          transform: translateY(-10px);
        }

        /* Expanded: 알림 표시 */
        .island-pill.expanded {
          width: 380px;
          height: 88px;
          opacity: 1;
          transform: translateY(0);
          border-radius: 44px;
        }

        .island-content {
          width: 380px; 
          height: 88px;
          display: flex;
          align-items: center;
          padding: 0 28px;
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }
        
        .island-pill.expanded .island-content {
          opacity: 1;
          transition-delay: 0.2s;
        }

        .content-layout {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 18px;
        }

        .icon-area {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #FFD700;
        }

        .anim-icon.pop-in {
          animation: pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .text-area {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
        }
        .title { font-size: 15px; font-weight: 600; color: #fff; line-height: 1.3; }
        .desc { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.3; }

        .audio-bars { display: flex; gap: 4px; align-items: center; height: 20px; }
        .bar {
          width: 4px; background: #0071e3; border-radius: 99px;
          animation: eq 1s infinite ease-in-out;
        }
        .bar:nth-child(1) { height: 12px; animation-delay: 0s; }
        .bar:nth-child(2) { height: 20px; animation-delay: 0.1s; }
        .bar:nth-child(3) { height: 16px; animation-delay: 0.2s; }

        @keyframes pop {
          0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); }
        }
        @keyframes eq {
          0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); }
        }

        @media (max-width: 450px) {
          .island-pill.expanded { width: 92vw; }
          .island-content { width: 100%; padding: 0 20px; }
        }
      `}</style>
    </IslandContext.Provider>
  );
}
        ### 📄 components/SectionGrid.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionGrid`

        ```typescript
        "use client";

export default function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="bento-grid-container">
      {children}
    </div>
  );
}
        ### 📄 components/Tabs.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types`
* 🧩 **Component (Default):** `Tabs`

        ```typescript
        "use client";

import { Phase } from "@/content/types";

export default function Tabs({
  value,
  onChange,
}: {
  value: Phase;
  onChange: (v: Phase) => void;
}) {
  return (
    <div className="segmented-control">
      {(["Before", "During", "After"] as Phase[]).map((p) => (
        <button
          key={p}
          className={`segment-btn ${value === p ? "active" : ""}`}
          onClick={() => onChange(p)}
          type="button"
        >
          {p}
        </button>
      ))}

      <style jsx>{`
        .segmented-control {
          display: inline-flex;
          background: rgba(118, 118, 128, 0.12);
          padding: 2px;
          border-radius: 9px;
          margin-bottom: 32px;
        }
        .segment-btn {
          padding: 6px 20px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #1d1d1f;
          transition: all 0.2s ease;
        }
        .segment-btn:hover { opacity: 0.7; }
        .segment-btn.active {
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
        ### 📄 components/Icon.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Icon`

        ```typescript
        export default function Icon({ name }: { name?: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z" />
          <path d="M19 3l.6 2.2L22 6l-2.4.8L19 9l-.6-2.2L16 6l2.4-.8L19 3z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" />
          <path d="M21 21v-2a4 4 0 00-3-3.9" />
          <path d="M16 3.1a4 4 0 010 7.8" />
        </svg>
      );
    case "hint":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 00-4 12c.7.7 1 1.5 1 2.5V17h6v-.5c0-1 .3-1.8 1-2.5A7 7 0 0012 2z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "mood":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 11-9-9" />
          <path d="M21 3v9h-9" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7c0-2 1-4 3-4 2.5 0 3.5 2.2 2 4" />
          <path d="M12 7c0-2-1-4-3-4-2.5 0-3.5 2.2-2 4" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <path d="M9 9h10v10H9z" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
          <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14v4" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

        ### 📄 components/ScrollReveal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `ScrollReveal`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        "use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "", // 👈 추가
  style = {},     // 👈 추가
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // 외부에서 받은 className과 내부 스타일을 병합합니다.
      className={`reveal-container ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...style // 👈 외부 스타일(Grid 속성 등)을 여기에 적용합니다.
      }}
    >
      {children}
    </div>
  );
}
        ### 📄 components/FloatingDock.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react, @/lib/useLanguage`
* 🧩 **Component (Default):** `FloatingDock`
* ww **Hooks:** `useState, useEffect, useLanguage`

        ```typescript
        "use client";

import { navLinks } from "@/content/data";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/useLanguage";

export default function FloatingDock() {
  const [activeId, setActiveId] = useState("");
  const { lang, toggleLang } = useLanguage();

  // 🟢 [추가] 언어별 라벨/국기 매핑
  const langLabel = {
    "ko": "🇰🇷",
    "en": "🇺🇸",
    "zh-CN": "🇨🇳",
    "zh-TW": "🇹🇼"
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((sec) => {
        if (!sec) return;
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveId(`#${sec.id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="floating-dock">
      <div className="dock-glass">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`dock-item ${activeId === link.href ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              setActiveId(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        
        <div className="dock-divider" />
        
        {/* 🟢 [수정] 4개 국어 순환 버튼 */}
        <button 
          className="dock-item lang-btn" 
          onClick={toggleLang}
          title="Change Language"
        >
          {langLabel[lang]}
        </button>
      </div>

      <style jsx>{`
        .floating-dock {
          position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: auto; max-width: 90vw;
        }
        .dock-glass {
          display: flex; align-items: center; gap: 4px; padding: 6px;
          background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.05);
          overflow-x: auto;
        }
        .dock-item {
          padding: 10px 16px; border-radius: 18px; font-size: 13px; font-weight: 600; color: #86868b;
          white-space: nowrap; transition: all 0.2s ease; text-decoration: none; border: none; background: transparent; cursor: pointer;
        }
        .dock-item:hover { background: rgba(0, 0, 0, 0.05); color: #1d1d1f; }
        .dock-item.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
        
        .dock-divider { width: 1px; height: 20px; background: rgba(0,0,0,0.1); margin: 0 4px; }
        
        /* 국기 아이콘 크기 최적화 */
        .lang-btn { font-size: 18px; padding: 6px 12px; line-height: 1; }

        @media (max-width: 600px) {
          .dock-glass { padding: 4px; border-radius: 16px; }
          .dock-item { padding: 8px 12px; font-size: 12px; }
        }
      `}</style>
    </nav>
  );
}
        ### 📄 components/SectionHeader.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionHeader`

        ```typescript
        export default function SectionHeader({
  title,
  lead,
}: {
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

        ### 📄 components/ItemCard.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types, react`
* 🧩 **Component (Default):** `ItemCard`
* ww **Hooks:** `useState`

        ```typescript
        "use client";

import Icon from "./Icon";
import { CardItem } from "@/content/types";
import ScrollReveal from "./ScrollReveal";
import { useRef, useState } from "react";

export default function ItemCard({
  item,
  span = 6,
  delay = 0,
}: {
  item: CardItem;
  span?: 4 | 6 | 12;
  showArt?: boolean;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // 🖱️ 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // 카드 내 X 좌표
    const y = e.clientY - rect.top;  // 카드 내 Y 좌표

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3; // 상하 기울기 (최대 3도)
    const rotateY = ((x - centerX) / centerX) * 3;  // 좌우 기울기 (최대 3도)

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // 마우스 나가면 원상복구
  };

  return (
    <ScrollReveal
      delay={delay}
      style={{ gridColumn: `span ${span}` }}
      className="bento-wrapper"
    >
      <div
        style={{ perspective: "1000px" }} // 3D 공간 정의
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <article
          ref={cardRef}
          className="bento-card"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.1s ease-out, box-shadow 0.3s ease", // 회전은 즉각적으로, 그림자는 부드럽게
          }}
        >
          <div className="bento-content">
            {item.icon && (
              <div className="icon-box">
                <Icon name={item.icon} />
              </div>
            )}
            <span className="bento-tag">{item.tag}</span>
            <h3 className="bento-title">{item.title}</h3>
            <p className="bento-desc">{item.desc}</p>

            {item.bullets.length > 0 && (
              <ul className="bento-list">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </div>

          <style jsx>{`
            .bento-card {
              height: 100%;
              background: #ffffff;
              border-radius: 24px;
              padding: 28px;
              /* 기본 그림자 */
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.03);
              border: 1px solid rgba(0, 0, 0, 0.04);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              /* 하드웨어 가속 */
              will-change: transform;
            }
            
            /* Hover 시 더 깊은 그림자와 하이라이트 */
            .bento-card:hover {
              box-shadow: 
                0 20px 40px -5px rgba(0, 0, 0, 0.1), /* 깊은 그림자 */
                0 0 0 1px rgba(0,0,0,0.05); /* 경계선 강화 */
            }

            .icon-box {
              width: 44px; height: 44px;
              background: #f5f5f7;
              border-radius: 12px; /* iOS 스타일 스퀘어클 */
              display: flex; align-items: center; justify-content: center;
              margin-bottom: 16px;
              color: #1d1d1f;
            }
            .bento-tag {
              font-size: 11px; font-weight: 700; color: #86868b;
              text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;
            }
            .bento-title {
              font-size: 20px; font-weight: 700; color: #1d1d1f;
              margin: 0 0 10px 0; line-height: 1.3;
              letter-spacing: -0.01em;
            }
            .bento-desc {
              font-size: 15px; line-height: 1.6; color: #86868b; margin: 0 0 20px 0;
            }
            .bento-list {
              padding: 0; margin: 0; list-style: none;
              border-top: 1px solid rgba(0,0,0,0.05); padding-top: 16px;
            }
            .bento-list li {
              font-size: 13px; color: #6e6e73; margin-bottom: 6px;
              position: relative; padding-left: 12px;
            }
            .bento-list li::before {
              content: "•"; position: absolute; left: 0; color: #d2d2d7;
            }
          `}</style>
        </article>
      </div>
    </ScrollReveal>
  );
}
        ### 📄 components/SectionShell.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionShell`

        ```typescript
        "use client";

export default function SectionShell({
  id,
  className = "theme-clean", // 기본값: Clean White
  children,
}: {
  id: string;
  className?: string; // variant 대신 className으로 직접 제어
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-wrapper">
      <div className="container">
        <div className={`section-island ${className}`}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .section-wrapper {
          padding: 20px 0; /* 섹션 간 간격 조절 */
          width: 100%;
        }
        /* section-island 내부는 z-index 관리가 필요할 수 있음 */
        .section-island > :global(*) {
          position: relative; z-index: 1;
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/Anchor.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Anchor`

        ```typescript
        export default function Anchor({ href, label }: { href: string; label: string }) {
  return (
    <a className="pill" href={href}>
      {label}
    </a>
  );
}

        ### 📄 components/sections/PartnersSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react, @/lib/useLanguage`
* 🧩 **Component (Default):** `PartnersSection`
* ww **Hooks:** `useState, useLanguage`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import SectionShell from "../SectionShell";
import ScrollReveal from "../ScrollReveal";
import { partnerValue } from "@/content/data";
import ItemCard from "../ItemCard";
import { useState } from "react";
import { useLanguage } from "@/lib/useLanguage"; // 👈 다국어 지원

export default function PartnersSection() {
  const { t } = useLanguage();
  const [visitors, setVisitors] = useState(1000); 
  const conversionRate = 0.45;
  const ticketPrice = 5000;
  const uplift = Math.floor(visitors * conversionRate * ticketPrice);
  const progress = (visitors - 500) / (5000 - 500); // 0 ~ 1

  // 🌈 Dynamic Color Logic (Blue -> Purple -> Red)
  let resultColor = "#0071e3"; // Default: Blue
  let glowColor = "rgba(0, 113, 227, 0.1)";

  if (progress > 0.7) { 
    // 🔥 High: Red (강렬한 수익)
    resultColor = "#FF3B30"; 
    glowColor = "rgba(255, 59, 48, 0.2)";
  } else if (progress > 0.4) { 
    // 🔮 Mid: Purple (성장 단계)
    resultColor = "#AF52DE"; 
    glowColor = "rgba(175, 82, 222, 0.15)";
  }

  return (
    <SectionShell id="partners" className="theme-growth">
      <SectionHeader
        title={t("partners.title")}
        lead={t("partners.lead")}
      />

      <ScrollReveal>
        {/* Simulator: Dynamic Glow Effect */}
        <div 
          className="simulator-glass"
          style={{ 
            boxShadow: `0 20px 60px ${glowColor}`,
            borderColor: progress > 0.7 ? "rgba(255, 59, 48, 0.3)" : "rgba(255,255,255,0.4)"
          }}
        >
          <div className="sim-header">
            <h3>{t("partners.sim.title")}</h3>
            <p>{t("partners.sim.desc")}</p>
          </div>

          <div className="sim-body">
            <div className="input-group">
              <label>Visitors: <b>{visitors.toLocaleString()}</b></label>
              <input 
                type="range" min="500" max="5000" step="100" 
                value={visitors} onChange={(e) => setVisitors(Number(e.target.value))}
                className="slider"
                style={{ 
                  background: `linear-gradient(90deg, ${resultColor} ${progress * 100}%, #e5e5ea ${progress * 100}%)` 
                }}
              />
              <div className="range-labels"><span>Small</span><span>Flagship</span></div>
            </div>

            <div className="result-group">
              <div className="result-label">Monthly Uplift</div>
              <div 
                className="result-value" 
                style={{ 
                  color: resultColor, 
                  transform: `scale(${1 + progress * 0.2})`,
                  textShadow: progress > 0.7 ? `0 0 20px ${glowColor}` : 'none'
                }}
              >
                + ₩{uplift.toLocaleString()}
              </div>
              <div className="result-desc">*Based on 45% Retention Rate</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="bento-grid-container" style={{ marginTop: 60 }}>
        {partnerValue.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </div>

      <style jsx>{`
        /* Glassmorphism Simulator */
        .simulator-glass {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 40px;
          border: 1px solid rgba(255,255,255,0.4);
          margin-bottom: 60px; max-width: 800px; margin-left: auto; margin-right: auto;
          transition: all 0.3s ease;
        }

        .sim-header { text-align: center; margin-bottom: 40px; }
        .sim-header h3 { font-size: 24px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px; }
        .sim-header p { color: #86868b; font-size: 16px; word-break: keep-all; }
        
        .sim-body { display: flex; gap: 40px; align-items: center; justify-content: space-between; }
        
        .input-group { flex: 1; }
        .input-group label { display: block; font-size: 15px; color: #1d1d1f; margin-bottom: 16px; }
        .input-group label b { font-size: 20px; color: #1d1d1f; margin-left: 8px; }
        
        .slider { 
          -webkit-appearance: none; width: 100%; height: 8px; border-radius: 5px; outline: none; margin-bottom: 12px; 
          transition: background 0.1s; 
        }
        .slider::-webkit-slider-thumb { 
          -webkit-appearance: none; width: 32px; height: 32px; border-radius: 50%; background: #fff; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.2); cursor: grab; transition: transform 0.1s; 
          border: 1px solid rgba(0,0,0,0.05);
        }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .slider:active::-webkit-slider-thumb { cursor: grabbing; transform: scale(1.2); }
        
        .range-labels { display: flex; justify-content: space-between; font-size: 12px; color: #86868b; font-weight: 600; }
        
        .result-group { 
          background: rgba(255,255,255,0.8); padding: 24px 40px; border-radius: 16px; 
          text-align: center; min-width: 280px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); 
        }
        .result-label { font-size: 14px; font-weight: 600; color: #86868b; margin-bottom: 8px; text-transform: uppercase; }
        .result-value { font-size: 36px; font-weight: 800; margin-bottom: 6px; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .result-desc { font-size: 11px; color: #a1a1a6; }

        @media (max-width: 768px) { .sim-body { flex-direction: column; gap: 30px; } .result-group { width: 100%; } }
      `}</style>
    </SectionShell>
  );
}
        ### 📄 components/sections/RevenueSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react`
* 🧩 **Component (Default):** `RevenueSection`
* ww **Hooks:** `useEffect`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { revenueLogic } from "@/content/data";
import { useState, useEffect } from "react";

export default function RevenueSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Auto-cycle logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === null || prev >= 2 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="revenue">
      <div className="container">
        
        {/* 🟢 [수정] Round Styling 강화: overflow-hidden 필수 */}
        <div className="revenue-bg">
          
          {/* ⚡ Background Circuit Grid */}
          <div className="circuit-grid-bg">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="20%" cy="20%" r="200" fill="rgba(0, 113, 227, 0.15)" filter="blur(80px)" />
              <circle cx="80%" cy="80%" r="200" fill="rgba(175, 82, 222, 0.15)" filter="blur(80px)" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="dark-header">
              <SectionHeader
                title="Logic Flow: 24시간 멈추지 않는 매출 회로"
                lead={<span style={{color: '#a1a1a6'}}>고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다. <br/>이 흐름은 지금도 멈추지 않고 매출을 만들고 있습니다.</span>}
              />
            </div>

            <div className="circuit-board">
              {revenueLogic.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`circuit-node ${activeStep === idx ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <ScrollReveal delay={idx * 150}>
                    <div className="logic-card glass-card">
                      <div className="card-header-row">
                         <div className="status-dot-wrapper">
                           <div className="status-dot" />
                           <div className="status-ping" />
                         </div>
                         <div className="card-icon"><Icon name={item.icon} /></div>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.desc}</p>
                      
                      {idx < revenueLogic.length - 1 && (
                        <div className="connector-line flowing">
                          <div className="energy-beam" />
                          <div className="arrow-head">▶</div>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 🟢 Rounded Box Styling */
        .revenue-bg {
          position: relative;
          background: #0d1117; 
          background-image: linear-gradient(180deg, #0d1117 0%, #161b22 100%);
          color: #fff;
          /* 핵심: 둥근 모서리와 넘침 방지 */
          border-radius: 48px; 
          overflow: hidden; 
          padding: 80px 40px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
          margin: 40px 0;
        }

        .circuit-grid-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .dark-header :global(h2) { color: #fff !important; }
        
        .circuit-board { display: flex; gap: 40px; align-items: flex-start; padding: 20px 0; position: relative; }
        .circuit-node { flex: 1; position: relative; }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative; z-index: 2;
        }

        .circuit-node.active .glass-card {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 113, 227, 0.25);
          border-color: rgba(0, 113, 227, 0.5);
        }

        .card-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        
        .status-dot-wrapper { position: relative; width: 8px; height: 8px; }
        .status-dot { width: 100%; height: 100%; border-radius: 50%; background: #333; }
        .circuit-node.active .status-dot { background: #00ff41; box-shadow: 0 0 10px #00ff41; }
        .status-ping { position: absolute; inset: -4px; border-radius: 50%; border: 1px solid #00ff41; opacity: 0; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .circuit-node.active .status-ping { opacity: 1; }
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }

        .card-icon { width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #fff; transition: 0.3s; }
        .circuit-node.active .card-icon { background: #0071e3; color: #fff; box-shadow: 0 0 20px rgba(0,113,227,0.4); }

        .card-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; color: #fff; }
        .card-desc { font-size: 14px; color: #a1a1a6; line-height: 1.6; }

        .connector-line { position: absolute; top: 50%; left: 100%; width: 40px; height: 4px; background: rgba(255,255,255,0.1); transform: translateY(-50%); z-index: 1; overflow: hidden; }
        .energy-beam { width: 50%; height: 100%; background: linear-gradient(90deg, transparent, #00e5ff, transparent); animation: beam-flow 1.5s infinite linear; filter: drop-shadow(0 0 5px #00e5ff); }
        .arrow-head { position: absolute; right: -6px; top: -7px; font-size: 12px; color: rgba(255,255,255,0.2); }
        .circuit-node.active + div .arrow-head { color: #00e5ff; }

        @keyframes beam-flow { 0% { transform: translateX(-150%); } 100% { transform: translateX(250%); } }

        @media (max-width: 900px) {
          .revenue-bg { padding: 40px 24px; border-radius: 32px; }
          .circuit-board { flex-direction: column; gap: 40px; }
          .connector-line { top: 100%; left: 50%; width: 4px; height: 40px; transform: translateX(-50%); }
          .energy-beam { width: 100%; height: 50%; background: linear-gradient(180deg, transparent, #00e5ff, transparent); animation: beam-flow-vert 1.5s infinite linear; }
          @keyframes beam-flow-vert { 0% { transform: translateY(-150%); } 100% { transform: translateY(250%); } }
          .arrow-head { right: -4px; top: auto; bottom: -10px; transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/AppleWalletSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `AppleWalletSection`

        ```typescript
        "use client";

import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function AppleWalletSection() {
  return (
    <section className="section-wallet">
      <div className="container">
        <div className="layout-split">
          {/* Left: Text Context */}
          <div className="text-col">
            <ScrollReveal>
              <div className="badge-pill">The Best App is No App</div>
              <h2 className="h2-wallet">
                지갑 속에<br />
                <span className="text-gradient-gold">Golden Ticket</span>을.
              </h2>
              <p className="p-wallet">
                앱을 켜지 않아도 됩니다. <br />
                매장 근처에 가면, 당신의 <b>추억 티켓</b>이 잠금 화면에 조용히 떠오릅니다.
                가장 인생네컷스러운 방식의 멤버십 경험입니다.
              </p>
              <ul className="wallet-bullets">
                <li><Icon name="spark" /> 촬영 직후 자동 발급 (NFC/QR)</li>
                <li><Icon name="map" /> 매장 방문 시 위치 기반 팝업</li>
                <li><Icon name="gift" /> 등급에 따라 변하는 카드 디자인</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: Wallet Pass Visual */}
          <div className="visual-col">
            <ScrollReveal delay={200}>
              <div className="wallet-stack">
                {/* Back Card (Depth) */}
                <div className="wallet-card back-card" />
                
                {/* Main Pass */}
                <div className="wallet-card main-pass">
                  <div className="pass-header">
                    <div className="pass-logo">
                      <span className="logo-dot" />
                      forFAN
                    </div>
                    <span className="pass-label">STORE PASS</span>
                  </div>
                  
                  <div className="pass-body">
                    <div className="pass-row">
                      <div className="pass-field">
                        <label>GRADE</label>
                        <div className="value gold">Golden Fan</div>
                      </div>
                      <div className="pass-field right">
                        <label>POINTS</label>
                        <div className="value">2,400</div>
                      </div>
                    </div>
                    <div className="pass-row">
                      <div className="pass-field">
                        <label>LATEST MOMENT</label>
                        <div className="value">Hongdae Flagship</div>
                      </div>
                    </div>
                  </div>

                  <div className="pass-barcode">
                    {/* Fake Barcode Lines */}
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="bar-line" 
                        style={{ 
                          height: i % 2 === 0 ? '100%' : '80%', 
                          width: i % 3 === 0 ? 3 : 1,
                          opacity: 0.8 
                        }} 
                      />
                    ))}
                  </div>
                  
                  {/* Holographic Shine Effect */}
                  <div className="holo-shine" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-wallet {
          padding: 100px 0;
          background: #000; /* Apple Wallet Context */
          color: #fff;
          border-radius: 40px;
          margin: 40px 0;
          overflow: hidden;
          position: relative;
        }

        .layout-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .badge-pill {
          display: inline-block;
          font-size: 11px; font-weight: 700; color: #FFD700;
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 6px 12px; border-radius: 99px;
          margin-bottom: 20px;
          letter-spacing: 0.05em; text-transform: uppercase;
        }

        .h2-wallet {
          font-size: 48px; font-weight: 700; line-height: 1.1; margin-bottom: 24px;
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #FFD700 0%, #FDB931 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .p-wallet {
          font-size: 18px; color: #86868b; line-height: 1.6; margin-bottom: 40px;
        }
        .p-wallet b { color: #f5f5f7; }

        .wallet-bullets { list-style: none; padding: 0; margin: 0; }
        .wallet-bullets li {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 16px; color: #d2d2d7; font-size: 15px;
        }

        /* Wallet UI */
        .visual-col {
          display: flex; justify-content: center; position: relative;
        }

        .wallet-stack {
          position: relative;
          width: 300px; height: 460px;
          perspective: 1000px;
        }

        .wallet-card {
          width: 100%; height: 100%;
          border-radius: 20px;
          position: absolute;
          top: 0; left: 0;
        }

        .back-card {
          background: #333;
          transform: translateY(16px) scale(0.95);
          opacity: 0.5;
          z-index: 1;
        }

        .main-pass {
          background: linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%);
          z-index: 2;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; flex-direction: column;
          animation: float-pass 6s ease-in-out infinite;
        }

        .pass-header {
          padding: 20px;
          display: flex; justify-content: space-between; align-items: center;
          background: rgba(255,255,255,0.03);
        }
        .pass-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; }
        .logo-dot { width: 10px; height: 10px; background: #FFD700; border-radius: 50%; }
        .pass-label { font-size: 10px; color: #86868b; letter-spacing: 1px; font-weight: 600; }

        .pass-body { padding: 24px; flex: 1; }
        .pass-row { display: flex; justify-content: space-between; margin-bottom: 24px; }
        .pass-field label { display: block; font-size: 10px; color: #86868b; margin-bottom: 4px; font-weight: 600; }
        .pass-field .value { font-size: 16px; font-weight: 600; }
        .pass-field .value.gold { color: #FFD700; }
        .pass-field.right { text-align: right; }

        .pass-barcode {
          height: 60px;
          background: #fff;
          margin: 0 20px 20px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 0 10px;
        }
        .bar-line { background: #000; }

        /* Holographic Effect */
        .holo-shine {
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(
            45deg,
            transparent 40%,
            rgba(255, 215, 0, 0.1) 45%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 215, 0, 0.1) 55%,
            transparent 60%
          );
          transform: rotate(30deg);
          animation: holo-move 4s infinite linear;
          pointer-events: none;
        }

        @keyframes float-pass {
          0%, 100% { transform: translateY(0) rotateX(0); }
          50% { transform: translateY(-10px) rotateX(2deg); }
        }
        @keyframes holo-move {
          0% { transform: translateY(0) translateX(0) rotate(30deg); }
          100% { transform: translateY(20%) translateX(-20%) rotate(30deg); }
        }

        @media (max-width: 900px) {
          .layout-split { grid-template-columns: 1fr; gap: 40px; }
          .visual-col { margin-top: 20px; }
          .h2-wallet { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/QuietRewardsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `QuietRewardsSection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import { quietRewardsCopy } from "@/content/data";
import Icon from "../Icon";
import ScrollReveal from "../ScrollReveal";

export default function QuietRewardsSection() {
  return (
    <section className="section" id="quiet">
      <div className="container">
        {/* 🟢 [적용] 화려한 골드 테마 (theme-gold) - 직접 div에 적용 */}
        <div className="section-island theme-gold">
          
          {/* 🪙 Background Giant Coin (섹션 내부로 이동) */}
          <div className="giant-coin-bg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.15" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
              <text x="100" y="115" fontSize="60" fontWeight="bold" textAnchor="middle" fill="currentColor" opacity="0.1" style={{ fontFamily: 'serif' }}>4</text>
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <SectionHeader
              title="“Quiet Rewards” — 4CUT Coin"
              lead="발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요."
            />

            <div className="reveal-grid">
              {quietRewardsCopy.map((c, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="reveal-card">
                    <div className="blockchain-mesh" />
                    <div className="icon-header">
                      <div className={`coin-visual coin-${idx}`}>
                        <span className="coin-face">$</span>
                      </div>
                      <span className="card-title">{c.title}</span>
                    </div>
                    
                    <div className="frost-container">
                      <div className="hidden-content">
                        <div className="hash-code">
                          <span className="dot active"/>
                          0x7F...{300 + idx * 127}
                        </div>
                        <div className="text-lines">
                          {c.lines.map((line, i) => (
                            <p key={i} className="line-item">{line}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="frost-overlay">
                        <div className="lock-icon"><Icon name="lock" /></div>
                        <span className="hint-text">Hover to Decrypt</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .giant-coin-bg {
          position: absolute; top: -100px; right: -100px;
          width: 600px; height: 600px;
          color: #DAA520;
          animation: spin-slow 60s linear infinite;
          pointer-events: none; z-index: 0;
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ... 기존 스타일 유지 ... */
        .reveal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .reveal-grid { grid-template-columns: 1fr; } }
        .reveal-card { background: #fff; border-radius: 28px; padding: 32px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 10px 40px rgba(0,0,0,0.04); min-height: 360px; display: flex; flex-direction: column; position: relative; overflow: hidden; transition: transform 0.3s ease; }
        .reveal-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(218, 165, 32, 0.15); border-color: rgba(218, 165, 32, 0.3); }
        .blockchain-mesh { position: absolute; inset: 0; background-image: radial-gradient(#DAA520 1px, transparent 1px); background-size: 24px 24px; opacity: 0.1; z-index: 0; }
        .icon-header { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 24px; position: relative; z-index: 1; }
        .coin-visual { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.5); }
        .coin-0 { background: linear-gradient(135deg, #FFD700, #FDB931); color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .coin-1 { background: linear-gradient(135deg, #E0E0E0, #BDBDBD); color: #fff; }
        .coin-2 { background: linear-gradient(135deg, #f6d365, #fda085); color: #fff; }
        .card-title { font-size: 20px; font-weight: 700; color: #1d1d1f; letter-spacing: -0.02em; }
        .frost-container { position: relative; flex: 1; border-radius: 20px; overflow: hidden; background: #fbfbfd; border: 1px solid rgba(0,0,0,0.03); z-index: 1; }
        .hidden-content { padding: 24px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
        .hash-code { font-family: monospace; font-size: 11px; color: #86868b; background: rgba(0,0,0,0.05); padding: 4px 8px; border-radius: 6px; width: fit-content; margin: 0 auto 16px; display: flex; align-items: center; gap: 6px; }
        .dot { width: 6px; height: 6px; background: #34C759; border-radius: 50%; }
        .dot.active { animation: blink 2s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .text-lines { display: flex; flex-direction: column; gap: 10px; text-align: center; }
        .line-item { font-size: 15px; color: #1d1d1f; font-weight: 600; line-height: 1.5; margin: 0; }
        .line-item::before { content: "“"; color: #DAA520; margin-right: 4px; }
        .line-item::after { content: "”"; color: #DAA520; }
        .frost-overlay { position: absolute; inset: 0; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; transition: opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1); z-index: 10; }
        .reveal-card:hover .frost-overlay { opacity: 0; pointer-events: none; }
        .lock-icon { color: #86868b; opacity: 0.5; }
        .hint-text { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #86868b; border: 1px solid #d2d2d7; padding: 6px 14px; border-radius: 99px; background: rgba(255,255,255,0.9); }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/ExperienceSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/content/data, @/content/types`
* 🧩 **Component (Default):** `ExperienceSection`
* ww **Hooks:** `useState, useMemo, useEffect`

        ```typescript
        "use client";

import { useMemo, useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../Icon";
import { experienceItems } from "@/content/data";
import { Phase } from "@/content/types";

// ScreenContent 컴포넌트는 이전과 동일하므로 생략하거나 기존 코드를 유지하세요.
const ScreenContent = ({ phase }: { phase: Phase }) => {
    // ... (이전 코드의 ScreenContent 내용 그대로 사용)
    if (phase === "Before") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-header">Today's Pick</div>
            <div className="mock-card big"><Icon name="spark" /><span>Romantic Mood</span></div>
            <div className="mock-row"><div className="mock-card small" /><div className="mock-card small" /></div>
            <div className="mock-msg">촬영 전, 설렘을 미리 확인하세요.</div>
          </div>
        );
      }
      if (phase === "During") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-cam-view">
              <div className="focus-ring" />
              <div className="pose-tip"><Icon name="hint" /><span>고개를 살짝 왼쪽으로 15°</span></div>
            </div>
            <div className="mock-controls"><div className="shutter-btn" /></div>
            <div className="mock-msg">망설임 없는 완벽한 포즈 가이드.</div>
          </div>
        );
      }
      return (
        <div className="screen-inner fade-in">
          <div className="mock-header">Your Memories</div>
          <div className="mock-list">
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '60%'}}/><span style={{width: '40%'}}/></div></div>
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '70%'}}/></div></div>
          </div>
          <div className="mock-toast"><Icon name="gift" /><span>Quiet Reward Arrived</span></div>
        </div>
      );
};

export default function ExperienceSection() {
  const phases: Phase[] = ["Before", "During", "After"];
  const [tab, setTab] = useState<Phase>("Before");
  const [isPaused, setIsPaused] = useState(false);
  
  const filtered = useMemo(() => experienceItems.filter((x) => x.phase === tab), [tab]);

  // 🔄 Auto-Play Logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTab((prev) => {
        const idx = phases.indexOf(prev);
        const nextIdx = (idx + 1) % phases.length;
        return phases[nextIdx];
      });
    }, 4000); // 4초마다 전환

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    // SectionShell은 page.tsx에서 감싸고 있으므로 여기선 div로 처리
    <div 
      className="experience-inner"
      onMouseEnter={() => setIsPaused(true)} // 마우스 올리면 일시정지
      onMouseLeave={() => setIsPaused(false)} // 떼면 다시 재생
    >
      <div className="container">
        <SectionHeader
          title="경험의 흐름: Before · During · After"
          lead="경험은 멈추지 않고 흐릅니다. 앱 화면 속에서 시간의 흐름에 따라 변화하는 가치를 확인하세요."
        />

        <div className="exp-layout">
          {/* Left: Controls with Progress */}
          <div className="exp-controls" style={{ minHeight: "420px" }}>
            <div className="tab-pills">
              {phases.map((p) => (
                <button
                  key={p}
                  onClick={() => setTab(p)}
                  className={`tab-pill ${tab === p ? "active" : ""}`}
                >
                  <span className="tab-text">{p}</span>
                  {/* ⏳ Progress Bar (Active일 때만 보임) */}
                  {tab === p && !isPaused && (
                    <div className="progress-track">
                      <div className="progress-bar" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="exp-detail-list">
              {filtered.map((item) => (
                <div key={item.id} className="exp-detail-card fade-in-card">
                  <div className="detail-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h4 className="detail-title">{item.title}</h4>
                    <p className="detail-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: iPhone Mockup */}
          <div className="exp-visual">
            <div className="iphone-frame">
              <div className="notch" />
              <div className="screen">
                <ScreenContent phase={tab} />
              </div>
            </div>
            
            {/* Background Glow */}
            <div className={`visual-glow ${tab.toLowerCase()}`} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-inner { width: 100%; position: relative; }

        .exp-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: start; margin-top: 40px;
        }

        /* Tabs with Progress */
        .tab-pills {
          display: flex; gap: 8px; margin-bottom: 40px;
          background: rgba(0,0,0,0.05); padding: 4px; border-radius: 99px;
          width: fit-content;
        }
        .tab-pill {
          position: relative; overflow: hidden;
          padding: 10px 24px; border-radius: 99px; border: none; font-size: 14px; font-weight: 600; cursor: pointer;
          background: transparent; color: #86868b; transition: color 0.3s;
        }
        .tab-pill.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        
        .tab-text { position: relative; z-index: 2; }

        /* ⏳ Progress Animation */
        .progress-track {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 3px;
          background: transparent;
        }
        .progress-bar {
          height: 100%; background: #0071e3; width: 0;
          animation: progress 4s linear forwards;
        }
        @keyframes progress { from { width: 0; } to { width: 100%; } }

        /* Detail Cards Animation */
        .exp-detail-card {
          background: #fff; padding: 20px; border-radius: 20px;
          display: flex; gap: 16px; margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .fade-in-card { animation: fadeInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .detail-icon { min-width: 40px; height: 40px; background: #f5f5f7; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #1d1d1f; }
        .detail-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; }
        .detail-desc { margin: 0; font-size: 14px; color: #86868b; line-height: 1.5; }

        /* iPhone Visuals (Same as before) */
        .exp-visual { position: relative; display: flex; justify-content: center; }
        .iphone-frame {
          width: 280px; height: 560px; background: #000; border-radius: 40px; padding: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2); position: relative; z-index: 2; border: 4px solid #333;
        }
        .notch { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); width: 80px; height: 20px; background: #000; border-radius: 12px; z-index: 10; }
        .screen { width: 100%; height: 100%; background: #fff; border-radius: 28px; overflow: hidden; position: relative; display: flex; flex-direction: column; }
        
        .screen-inner { padding: 40px 20px; height: 100%; display: flex; flex-direction: column; }
        .fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .mock-header { font-size: 24px; font-weight: 800; margin-bottom: 20px; }
        .mock-card { background: #f5f5f7; border-radius: 16px; }
        .mock-card.big { height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; font-weight: 600; color: #555; margin-bottom: 12px; }
        .mock-row { display: flex; gap: 12px; margin-bottom: 20px; }
        .mock-card.small { height: 80px; flex: 1; }
        .mock-msg { margin-top: auto; font-size: 12px; color: #86868b; text-align: center; }

        .mock-cam-view { flex: 1; background: #333; border-radius: 16px; position: relative; margin-bottom: 20px; }
        .focus-ring { width: 80px; height: 80px; border: 1px solid #fff; border-radius: 50%; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); opacity: 0.5; }
        .pose-tip { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.6); color: #fff; padding: 8px 16px; border-radius: 99px; font-size: 12px; display: flex; gap: 6px; white-space: nowrap; }
        .shutter-btn { width: 60px; height: 60px; border-radius: 50%; border: 4px solid #ccc; margin: 0 auto; }

        .mock-item { display: flex; gap: 12px; margin-bottom: 16px; }
        .mock-thumb { width: 50px; height: 50px; background: #eee; border-radius: 12px; }
        .mock-text-lines { flex: 1; display: flex; flex-direction: column; gap: 6px; justify-content: center; }
        .mock-text-lines span { height: 8px; background: #f5f5f7; border-radius: 4px; display: block; }
        .mock-toast { background: #000; color: #fff; padding: 10px 16px; border-radius: 99px; display: flex; align-items: center; gap: 8px; font-size: 12px; margin-top: auto; width: fit-content; align-self: center; }

        .visual-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 350px; height: 600px; z-index: 1; filter: blur(60px); opacity: 0.6; transition: background 0.5s; }
        .visual-glow.before { background: radial-gradient(circle, #FFA500 0%, transparent 70%); }
        .visual-glow.during { background: radial-gradient(circle, #0071e3 0%, transparent 70%); }
        .visual-glow.after { background: radial-gradient(circle, #AF52DE 0%, transparent 70%); }

        @media (max-width: 900px) { .exp-layout { grid-template-columns: 1fr; } .exp-visual { margin-top: 40px; } }
      `}</style>
    </div>
  );
}
        ### 📄 components/sections/AppleIdentitySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `AppleIdentitySection`
* ww **Hooks:** `useState, useDynamicIsland`

        ```typescript
        "use client";

import { useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useDynamicIsland } from "../DynamicIsland";

export default function AppleIdentitySection() {
  const { triggerIsland } = useDynamicIsland();
  
  // 🔦 Spotlight & 3D Tilt Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  // 3D Tilt 상태
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const div = containerRef.current;
    const rect = div.getBoundingClientRect();
    
    // 마우스 좌표 (컨테이너 기준)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight 위치 업데이트
    setPosition({ x, y });
    setOpacity(1);

    // 3D Tilt 계산 (중앙을 0,0으로 기준)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 기울기 강도 조절 (너무 심하면 어지러우니 미세하게)
    const rotateX = ((y - centerY) / centerY) * -2; // 상하 (최대 2도)
    const rotateY = ((x - centerX) / centerX) * 2;  // 좌우 (최대 2도)

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 }); // 원위치
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-rounded-bg identity-bg">
        <ScrollReveal>
          <div className="header-group">
            <h2 className="title-grad">Beyond the Touch.</h2>
            <p className="lead-text">
              소프트웨어를 넘어, <b>Taptic Engine</b>과 <b>Dynamic Island</b>까지.<br />
              인생네컷 디바이스의 하드웨어 감각을 앱 경험으로 연결합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 🔦 Container: Spotlight + 3D Tilt Wrapper */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid-pro spotlight-group"
          style={{
            // 3D 변환을 위한 원근감 설정
            perspective: "1000px" 
          }}
        >
          {/* 🔦 Spotlight Overlay */}
          <div 
            className="spotlight-overlay"
            style={{
              opacity,
              background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
              // 조명은 기울어지지 않고 평면에 머물도록 설정 (선택사항)
              transform: `translateZ(0)`
            }}
          />

          {/* 🧊 3D Tilt 적용 그룹 */}
          <div 
            className="tilt-layer"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.1s ease-out" // 부드러우면서 즉각적인 반응
            }}
          >
            {/* Card 1 */}
            <ScrollReveal delay={100}>
              <div 
                className="card-pro card-large clickable"
                onClick={() => triggerIsland("Quiet Reward", "기분 좋은 햅틱과 함께 적립되었습니다.", "spark")}
              >
                <div className="card-border" />
                <div className="content">
                  <div className="icon-badge"><Icon name="spark" /></div>
                  <h3>Feel the Moment</h3>
                  <p>리워드가 쌓이는 순간, 기분 좋은 미세 진동으로 완성감을 전달합니다.</p>
                </div>
                
                {/* Waveform Logic (Fixed Hydration) */}
                <div className="waveform-viz">
                  {[...Array(20)].map((_, i) => {
                    const rawHeight = 15 + Math.abs(Math.sin((i + 1) * 12.5)) * 50;
                    const height = rawHeight.toFixed(1); 
                    const delay = (i * 0.05).toFixed(2);
                    return (
                      <div 
                        key={i} 
                        className="wave-bar" 
                        style={{ animationDelay: `${delay}s`, height: `${height}%` }} 
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <div className="sub-grid">
              {/* Card 2 */}
              <ScrollReveal delay={200}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Nearby Frame", "50m 앞, 홍대 매장이 있습니다.", "map")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="clock" /></div>
                    <h3>Always Glancable</h3>
                    <p>앱을 열지 않아도, 잠금 화면과 다이내믹 아일랜드에서 대기 순서를 확인합니다.</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal delay={300}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Data Protected", "얼굴 데이터는 서버에 전송되지 않습니다.", "lock")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="mood" /></div>
                    <h3>Privacy First</h3>
                    <p>얼굴 데이터는 저장되지 않습니다. 오직 취향 데이터만 기기에 남습니다.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style jsx>{`
        .identity-bg {
          background: #000000;
          padding: 100px 0;
          position: relative;
          color: #f5f5f7;
          border-radius: 40px;
          margin: 60px 0;
          overflow: hidden;
        }
        
        .header-group { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        
        .title-grad {
          font-size: 56px; font-weight: 700;
          background: linear-gradient(135deg, #fff 40%, #6e6e73);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin: 0 0 20px; letter-spacing: -0.04em;
        }
        .lead-text { font-size: 22px; color: #86868b; font-weight: 400; line-height: 1.5; }
        .lead-text b { color: #f5f5f7; }

        .grid-pro {
          position: relative;
          /* 3D Context */
          transform-style: preserve-3d;
        }

        .tilt-layer {
          display: flex;
          flex-direction: column;
          gap: 20px;
          /* 3D Context 유지 */
          transform-style: preserve-3d;
        }

        .sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .spotlight-overlay {
          pointer-events: none;
          position: absolute;
          inset: -100px; /* 여유 있게 확장 */
          z-index: 0;
          transition: opacity 0.3s;
        }

        .card-pro {
          background: rgba(28,28,30, 0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: 40px;
          position: relative; 
          backdrop-filter: blur(20px);
          overflow: hidden; min-height: 320px;
          display: flex; flex-direction: column; justify-content: space-between;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          /* 3D 깊이감 */
          transform: translateZ(20px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .card-border {
          position: absolute; inset: 0; border-radius: 24px; padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none;
        }

        .card-pro:hover {
          background: rgba(44,44,46, 0.6);
          border-color: rgba(255,255,255,0.2);
        }
        .card-pro:active {
           transform: translateZ(10px) scale(0.98); /* 클릭 시 살짝 들어가는 느낌 */
        }

        .card-large { flex-direction: row; align-items: center; }

        .content { position: relative; z-index: 2; }
        .icon-badge {
          width: 52px; height: 52px; background: #fff; color: #000;
          border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(255,255,255,0.15);
        }
        .card-pro h3 { font-size: 26px; margin: 0 0 12px; color: #fff; letter-spacing: -0.01em; }
        .card-pro p { font-size: 17px; color: #a1a1a6; line-height: 1.6; margin: 0; max-width: 90%; }
        
        .waveform-viz { display: flex; align-items: center; gap: 6px; height: 80px; margin-left: auto; padding-left: 40px; opacity: 0.8; }
        .wave-bar { width: 6px; background: rgba(255,255,255,0.2); border-radius: 99px; animation: bar-dance 1.4s infinite ease-in-out; }
        
        @keyframes bar-dance {
          0%, 100% { height: 20%; background: rgba(255,255,255,0.2); }
          50% { height: 100%; background: #0071e3; box-shadow: 0 0 20px rgba(0,113,227,0.8); }
        }

        @media (max-width: 768px) {
          .sub-grid { grid-template-columns: 1fr; }
          .card-large { flex-direction: column; align-items: flex-start; }
          .waveform-viz { margin: 40px auto 0; padding: 0; width: 100%; justify-content: center; }
          .title-grad { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/PrincipleSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `PrincipleSection`

        ```typescript
        "use client";

import ScrollReveal from "../ScrollReveal";

export default function PrincipleSection() {
  return (
    <section className="section-principle" id="principle">
      <div className="container">
        <div className="manifesto-wrapper">
          <ScrollReveal>
            <div className="label-badge">The First Principle</div>
          </ScrollReveal>
          
          <div className="manifesto-text">
            <ScrollReveal delay={100}>
              <h2 className="line">우리는 기능을</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="line outline">팔지 않습니다.</h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h2 className="line highlight">경험의 질을</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <h2 className="line">설계합니다.</h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <p className="manifesto-desc">
              고객이 앱을 열었을 때 느끼는 감정<br/>
              <b>설렘 → 확신 → 여운</b>을 연결하는 것.<br/>
              그것이 유일한 우리의 전략입니다.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .section-principle {
          padding: 120px 0;
          background: #111; /* Deep Black */
          color: #fff;
          border-radius: 40px; /* 섹션 자체를 둥글게 */
          margin: 40px 0;
          position: relative;
          overflow: hidden;
        }

        .manifesto-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 2; position: relative;
        }

        .label-badge {
          font-size: 12px; font-weight: 700; color: #86868b;
          text-transform: uppercase; letter-spacing: 2px;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 16px; border-radius: 99px;
          margin-bottom: 40px;
        }

        .manifesto-text {
          display: flex; flex-direction: column; gap: 0;
          margin-bottom: 50px;
        }

        .line {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          line-height: 1.05;
          margin: 0;
          letter-spacing: -0.03em;
        }

        /* Outline Text Effect */
        .outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.4);
        }

        /* Highlight Gradient */
        .highlight {
          background: linear-gradient(90deg, #fff, #86868b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manifesto-desc {
          font-size: 20px;
          line-height: 1.6;
          color: #86868b;
          max-width: 480px;
        }
        .manifesto-desc b { color: #fff; }

        /* Background Glow Animation */
        .section-principle::before {
          content: "";
          position: absolute;
          top: 50%; left: 50%;
          width: 60%; height: 60%;
          background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/HeroSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `HeroSection`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        "use client";

import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 섹션 전체 진행률 (0 ~ 1)
      let p = (windowHeight - top) / (windowHeight + height);
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    // 초기 로딩 시 강제 실행하여 텍스트 표시
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="hero-cinematic">
      <div className="sticky-wrapper">
        <div className="kicker">Brand Platform • Experience-first</div>
        
        {/* Scene 1: Technology doesn't sell. */}
        <div 
          className="msg-layer"
          style={{ 
            // 🟢 [수정] 0~20% 구간까지는 무조건 잘 보이게 유지
            opacity: progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 4), 
            transform: `translate(-50%, -50%) scale(${1 - progress * 0.3})`,
            // 블러도 천천히 먹임
            filter: `blur(${Math.max(0, (progress - 0.2) * 20)}px)`
          }}
        >
          <h1 className="hero-title">
            Technology<br />doesn’t sell.
          </h1>
        </div>

        {/* Scene 2: Experience does. */}
        <div 
          className="msg-layer"
          style={{ 
            // 40% 지점부터 나타나기 시작
            opacity: Math.min(1, Math.max(0, (progress - 0.4) * 3)),
            // 줌인 효과
            transform: `translate(-50%, -50%) scale(${1.8 - (Math.min(1, Math.max(0, (progress - 0.4) * 2)) * 0.8)})`,
            filter: `blur(${Math.max(0, (0.6 - progress) * 20)}px)`
          }}
        >
          <h1 className="hero-title accent">
            Experience<br />does.
          </h1>
        </div>

        <p className="sub-text" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.6) * 4)) }}>
          forFAN은 사진을 찍게 하지 않습니다.<br/>
          그 순간을 <b>‘의미 있게’</b> 남기게 합니다.
        </p>
      </div>

      <style jsx>{`
        .hero-cinematic {
          height: 200vh; /* 적절한 스크롤 길이 */
          position: relative;
          width: 100%;
        }
        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .kicker { 
          position: absolute; top: 15%; left: 50%; transform: translateX(-50%);
          font-size: 13px; font-weight: 700; color: #86868b; 
          text-transform: uppercase; letter-spacing: 1px; z-index: 10;
        }
        
        .msg-layer {
          position: absolute;
          top: 50%; left: 50%;
          /* transform은 inline style이 제어 */
          width: 100%;
          text-align: center;
          pointer-events: none;
          will-change: opacity, transform, filter;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: clamp(50px, 9vw, 130px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #1d1d1f;
          margin: 0;
          white-space: nowrap;
        }
        .hero-title.accent {
          background: linear-gradient(135deg, #000 0%, #555 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-text {
          position: absolute;
          bottom: 15%; left: 50%; transform: translateX(-50%);
          font-size: 20px;
          line-height: 1.5;
          color: #86868b;
          text-align: center;
          width: 90%;
          max-width: 600px;
          transition: opacity 0.5s;
        }
        .sub-text b { color: #1d1d1f; }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/JourneySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `JourneySection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { journeyMap } from "@/content/data";

export default function JourneySection() {
  return (
    <div className="journey-inner">
      <SectionHeader
        title="forFAN 고객 여정 지도"
        lead={
          <>
            고객의 시간은 멈춰있지 않습니다.<br/>
            <b>Before(기대)</b>에서 <b>During(몰입)</b>을 거쳐 <b>After(여운)</b>까지, 끊김 없는 빛의 흐름을 설계합니다.
          </>
        }
      />

      <div className="journey-wrapper">
        
        {/* 🌟 The Active Pipeline (움직이는 경로) */}
        <div className="pipeline-container">
          {/* 1. Base Track (어두운 레일) */}
          <div className="track-rail" />

          {/* 2. Traveling Beam (이동하는 에너지) */}
          <div className="energy-packet">
            <div className="beam-head" />
            <div className="beam-tail" />
          </div>

          {/* 3. Nodes (정거장) - 색상 적용 */}
          <div className="node n-before">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-during">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-after">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
        </div>

        {/* Cards Grid */}
        <SectionGrid>
          {journeyMap.map((j, idx) => (
            <ItemCard
              key={j.phase}
              span={4}
              delay={idx * 150} 
              item={{
                id: j.phase,
                tag: j.phase,
                title: j.title,
                desc: "단계별 핵심 목표를 달성합니다.",
                bullets: j.bullets,
                icon: j.icon,
              }}
            />
          ))}
        </SectionGrid>
      </div>

      <style jsx>{`
        .journey-inner { position: relative; width: 100%; }
        .journey-wrapper { position: relative; padding-top: 40px; }

        /* 🛤️ Pipeline System */
        .pipeline-container {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          margin-top: -20px; /* 카드 위쪽으로 배치 */
          z-index: 0;
        }

        /* 1. Track */
        .track-rail {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          background: rgba(0,0,0,0.06); border-radius: 4px;
        }

        /* 2. Traveling Beam Animation */
        .energy-packet {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          overflow: hidden;
        }
        
        .beam-head {
          position: absolute; top: 0; width: 60px; height: 100%;
          background: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          filter: blur(1px);
          animation: travel-x 4s linear infinite;
        }
        
        .beam-tail {
          position: absolute; top: 0; width: 200px; height: 100%;
          /* 그라디언트: Orange -> Blue -> Purple 순으로 섞인 빛 */
          background: linear-gradient(90deg, transparent, #FF9500, #0071e3, #AF52DE, transparent);
          opacity: 0.8;
          animation: travel-x 4s linear infinite;
        }

        @keyframes travel-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); } /* 화면 밖으로 충분히 이동 */
        }

        /* 3. Nodes (Color Coded) */
        .node {
          position: absolute; top: -5px; width: 12px; height: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .node-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #fff;
          border: 2px solid #e5e5ea; z-index: 2; transition: all 0.3s;
        }
        .node-ripple {
          position: absolute; width: 20px; height: 20px; border-radius: 50%;
          opacity: 0; z-index: 1;
        }

        /* Positioning Nodes (Grid 중앙 정렬) */
        .n-before { left: 16.5%; }
        .n-during { left: 50%; transform: translateX(-50%); }
        .n-after  { left: 83.5%; }

        /* 🔥 Animations per Phase Color */
        /* Before: Orange */
        .n-before .node-dot { animation: hit-orange 4s infinite linear; animation-delay: 0.4s; }
        .n-before .node-ripple { border: 2px solid #FF9500; animation: ripple 4s infinite linear; animation-delay: 0.4s; }

        /* During: Blue */
        .n-during .node-dot { animation: hit-blue 4s infinite linear; animation-delay: 1.5s; }
        .n-during .node-ripple { border: 2px solid #0071e3; animation: ripple 4s infinite linear; animation-delay: 1.5s; }

        /* After: Purple */
        .n-after .node-dot { animation: hit-purple 4s infinite linear; animation-delay: 2.6s; }
        .n-after .node-ripple { border: 2px solid #AF52DE; animation: ripple 4s infinite linear; animation-delay: 2.6s; }

        @keyframes hit-orange { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #FF9500; background: #FF9500; } }
        @keyframes hit-blue   { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #0071e3; background: #0071e3; } }
        @keyframes hit-purple { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #AF52DE; background: #AF52DE; } }

        @keyframes ripple { 
          0% { transform: scale(1); opacity: 1; } 
          100% { transform: scale(3); opacity: 0; } 
        }

        @media (max-width: 900px) {
          .pipeline-container { width: 2px; height: 100%; left: 50%; top: 0; margin-top: 0; transform: translateX(-50%); }
          .track-rail { width: 2px; height: 100%; top: 0; left: 0; }
          .energy-packet { width: 2px; height: 100%; top: 0; left: 0; }
          .beam-head { width: 2px; height: 60px; animation: travel-y 4s linear infinite; }
          .beam-tail { width: 2px; height: 200px; background: linear-gradient(180deg, transparent, #FF9500, #0071e3, #AF52DE, transparent); animation: travel-y 4s linear infinite; }
          
          .node { left: -5px !important; transform: none !important; }
          .n-before { top: 16%; }
          .n-during { top: 50%; }
          .n-after  { top: 83%; }

          @keyframes travel-y { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }
        }
      `}</style>
    </div>
  );
}
        ### 📄 components/sections/CreatorEconomySection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `CreatorEconomySection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";

export default function CreatorEconomySection() {
  return (
    <section className="section">
      <div className="container">
        {/* 🟢 [Round] 섹션 전체를 감싸는 둥근 컨테이너 */}
        <div className="section-rounded-bg creator-bg">
          
          <ScrollReveal>
            <div className="creator-header">
              <div className="badge-pro">The Next Chapter</div>
              <h2 className="h2-creator">
                Make it. Sell it.<br />
                <span className="text-gradient-creative">Global.</span>
              </h2>
              <p className="p-creator">
                누구나 크리에이터가 됩니다. 당신의 감각이 담긴 프레임이<br />
                전 세계 forFAN 키오스크에서 판매되고, 글로벌 수익으로 연결됩니다.
              </p>
            </div>
          </ScrollReveal>

          {/* 메인 비주얼: Abstract Glass Studio */}
          <div className="studio-visual">
            
            {/* 🌍 Background: World Map + ⚡ Live Traffic */}
            <div className="global-map-bg">
              {/* Map Dots */}
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="map-dot"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 90 + 5}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
              
              {/* ⚡ Live Traffic Arcs */}
              <svg className="network-arcs" viewBox="0 0 800 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                    <stop offset="50%" stopColor="#d4a5ff" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                  </linearGradient>
                </defs>
                <path className="arc-path" d="M400,250 Q600,50 700,100" />
                <circle r="3" fill="#fff"><animateMotion dur="3s" repeatCount="indefinite" path="M400,250 Q600,50 700,100" /></circle>
                <path className="arc-path" d="M400,250 Q200,50 100,150" />
                <circle r="3" fill="#fff"><animateMotion dur="4s" repeatCount="indefinite" path="M400,250 Q200,50 100,150" /></circle>
                <path className="arc-path" d="M400,250 Q500,400 700,350" />
                <circle r="3" fill="#fff"><animateMotion dur="3.5s" repeatCount="indefinite" path="M400,250 Q500,400 700,350" /></circle>
              </svg>
            </div>

            {/* 🎨 Center: Floating Glass Canvas (Abstract iPad) */}
            <ScrollReveal delay={200}>
              <div className="glass-canvas-wrapper">
                {/* Layer 1: The Backing (Glass) */}
                <div className="layer glass-back" />
                
                {/* Layer 2: The Art (Glowing Gradient) */}
                <div className="layer art-layer">
                  <div className="art-gradient" />
                  <div className="art-symbol"><Icon name="spark" /></div>
                </div>

                {/* Layer 3: The UI (Minimal Floating Tools) */}
                <div className="layer ui-layer">
                  <div className="floating-tool t-left" />
                  <div className="floating-tool t-right" />
                  <div className="floating-btn">Publish</div>
                </div>
              </div>
            </ScrollReveal>

            {/* 💸 Global Revenue Stack (Multi-Currency) */}
            <div className="revenue-stack">
              {/* Card 1: EUR (Paris) */}
              <div className="rev-card card-1">
                <div className="rev-icon blue">€</div>
                <div className="rev-info">
                  <span className="rev-label">Paris, FR</span>
                  <span className="rev-val">+€3.50</span>
                </div>
              </div>
              
              {/* Card 2: KRW (Seoul) */}
              <div className="rev-card card-2">
                <div className="rev-icon purple">₩</div>
                <div className="rev-info">
                  <span className="rev-label">Seoul, KR</span>
                  <span className="rev-val">+₩5,400</span>
                </div>
              </div>
              
              {/* Card 3: USD (New York) */}
              <div className="rev-card card-3">
                <div className="rev-icon green">$</div>
                <div className="rev-info">
                  <span className="rev-label">New York, US</span>
                  <span className="rev-val">+$4.20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="feature-grid">
            <ScrollReveal delay={300}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="spark" /></div>
                <h4>Infinite Creativity</h4>
                <p>유저들이 매일 수천 개의 트렌디한 프레임을 쏟아냅니다.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="map" /></div>
                <h4>No Borders</h4>
                <p>한국에서 만든 프레임을 전 세계 어디서든 즉시 사용합니다.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="chart" /></div>
                <h4>Global Revenue</h4>
                <p>원화, 달러, 유로. 국경 없는 정산 시스템을 경험하세요.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 🟢 Rounded Grouping Box */
        .creator-bg {
          background: #000;
          background-image: radial-gradient(circle at 50% 0%, #1a1a1a 0%, #000 80%);
          color: #fff;
          border-radius: 48px;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
        }

        .creator-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        .badge-pro {
          display: inline-block; font-size: 11px; font-weight: 700; color: #d4a5ff;
          border: 1px solid rgba(212, 165, 255, 0.3); padding: 6px 12px; border-radius: 99px;
          margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;
          background: rgba(212, 165, 255, 0.1);
        }
        .h2-creator { font-size: 48px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
        .text-gradient-creative {
          background: linear-gradient(135deg, #d4a5ff 0%, #a855f7 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .p-creator { font-size: 18px; color: #888; line-height: 1.6; max-width: 600px; margin: 0 auto; }

        .studio-visual {
          position: relative; height: 500px; display: flex; justify-content: center; align-items: center;
          margin-bottom: 60px; perspective: 1000px; /* Depth for 3D layers */
        }

        .global-map-bg { position: absolute; inset: 0; opacity: 0.5; pointer-events: none; }
        .map-dot {
          position: absolute; width: 4px; height: 4px; background: #555; border-radius: 50%;
          animation: pulse-dot 4s infinite;
        }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); background: #d4a5ff; } }

        .network-arcs { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .arc-path { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 1; stroke-dasharray: 4; }

        /* 🎨 Abstract Glass Canvas (The Apple Essence) */
        .glass-canvas-wrapper {
          width: 400px; height: 280px; position: relative;
          transform: rotateX(10deg) rotateY(-10deg);
          transform-style: preserve-3d;
          animation: float-canvas 6s ease-in-out infinite;
        }
        @keyframes float-canvas { 0%, 100% { transform: rotateX(10deg) rotateY(-10deg) translateY(0); } 50% { transform: rotateX(5deg) rotateY(-5deg) translateY(-20px); } }

        .layer {
          position: absolute; inset: 0; border-radius: 24px;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s;
        }

        /* Layer 1: Glass Back */
        .glass-back {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          transform: translateZ(-20px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }

        /* Layer 2: Glowing Art */
        .art-layer {
          transform: translateZ(0px);
        }
        .art-gradient {
          width: 200px; height: 200px; border-radius: 50%;
          background: linear-gradient(135deg, #d4a5ff, #0071e3);
          filter: blur(40px); opacity: 0.6;
          animation: breath-art 4s infinite alternate;
        }
        @keyframes breath-art { from { opacity: 0.4; transform: scale(0.9); } to { opacity: 0.8; transform: scale(1.1); } }
        .art-symbol { position: absolute; font-size: 40px; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.5); }

        /* Layer 3: Minimal UI */
        .ui-layer {
          transform: translateZ(30px);
        }
        .floating-tool {
          position: absolute; width: 40px; height: 40px; border-radius: 12px;
          background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        .t-left { left: -20px; top: 30%; }
        .t-right { right: -20px; top: 50%; width: 50px; height: 50px; border-radius: 50%; }
        
        .floating-btn {
          position: absolute; bottom: -20px;
          background: #fff; color: #000;
          padding: 8px 20px; border-radius: 99px; font-weight: 700; font-size: 12px;
          box-shadow: 0 0 20px rgba(255,255,255,0.4);
        }

        /* 💸 Multi-Currency Revenue Stack */
        .revenue-stack {
          position: absolute; bottom: 40px; right: 5%; z-index: 5;
          display: flex; flex-direction: column; gap: 10px;
          perspective: 1000px;
        }
        .rev-card {
          background: rgba(30, 30, 30, 0.85); backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 16px; border-radius: 16px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          animation: float-stack 4s ease-in-out infinite;
          width: 190px;
        }
        /* Stacking Visuals with Currency Colors */
        .card-1 { transform: scale(0.9) translateY(20px); opacity: 0.6; z-index: 1; animation-delay: 0s; }
        .card-2 { transform: scale(0.95) translateY(10px); opacity: 0.8; z-index: 2; animation-delay: 0.5s; }
        .card-3 { transform: scale(1) translateY(0); opacity: 1; z-index: 3; animation-delay: 1s; border-color: rgba(255,255,255,0.3); }

        .rev-icon {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;
        }
        .blue { background: #0071e3; color: #fff; }   /* Euro */
        .purple { background: #AF52DE; color: #fff; } /* Won */
        .green { background: #34C759; color: #fff; }  /* Dollar */

        .rev-info { display: flex; flex-direction: column; }
        .rev-label { font-size: 9px; color: #888; text-transform: uppercase; }
        .rev-val { font-size: 14px; font-weight: 700; color: #fff; }

        @keyframes float-stack { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-5px); } 
        }

        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 60px; }
        .feature-item { text-align: center; padding: 20px; }
        .f-icon { width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #d4a5ff; }
        .feature-item h4 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .feature-item p { font-size: 14px; color: #888; line-height: 1.5; }

        @media (max-width: 900px) {
          .h2-creator { font-size: 32px; }
          .studio-visual { height: 400px; }
          .feature-grid { grid-template-columns: 1fr; gap: 40px; }
          .revenue-stack { right: 50%; transform: translateX(50%); bottom: -20px; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/DosDontsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `DosDontsSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import { doList, dontList } from "@/content/data";

export default function DosDontsSection() {
  return (
    <section className="section" id="dosdonts">
      <SectionHeader title="DO / DON’T (브랜드를 지키는 룰)" lead="인생네컷식 브랜드 톤을 유지하려면 “추가하지 말아야 할 것”이 더 중요합니다." />

      <div className="split">
        <div className="doDont">
          <p className="listTitle">✅ DO</p>
          <ul className="bullets">
            {doList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="doDont">
          <p className="listTitle">⛔ DON’T</p>
          <ul className="bullets">
            {dontList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

        ### 📄 lib/useLanguage.tsx
        > **Context Summary**
        * wf **Function:** `LanguageProvider`
* wf **Function:** `useLanguage`
* ww **Hooks:** `useContext, useLanguage`

        ```typescript
        "use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// 🌐 지원 언어 타입
type Lang = "ko" | "en" | "zh-CN" | "zh-TW";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 📚 통합 번역 사전 (Dictionary)
const dictionary: Record<string, Record<Lang, string>> = {
  // 1. Hero
  "hero.kicker": { ko: "Brand Platform • Experience-first", en: "Brand Platform • Experience-first", "zh-CN": "品牌平台 • 体验至上", "zh-TW": "品牌平台 • 體驗至上" },
  "hero.title1": { ko: "Technology\ndoesn’t sell.", en: "Technology\ndoesn’t sell.", "zh-CN": "技术\n本身无法销售", "zh-TW": "技術\n本身無法銷售" },
  "hero.title2": { ko: "Experience\ndoes.", en: "Experience\ndoes.", "zh-CN": "体验\n才是关键", "zh-TW": "體驗\n才是關鍵" },
  "hero.sub": { ko: "forFAN은 사진을 찍게 하지 않습니다. 그 순간을 ‘의미 있게’ 남기게 합니다.", en: "forFAN doesn't just make you take photos. We make the moment 'meaningful'.", "zh-CN": "forFAN 不仅仅是让您拍照。我们让那个瞬间变得“有意义”。", "zh-TW": "forFAN 不僅僅是讓您拍照。我們讓那個瞬間變得「有意義」。" },

  // 2. Principle
  "principle.badge": { ko: "The First Principle", en: "The First Principle", "zh-CN": "第一原则", "zh-TW": "第一原則" },
  "principle.line1": { ko: "우리는 기능을", en: "We don't sell", "zh-CN": "我们要销售的", "zh-TW": "我們要銷售的" },
  "principle.line2": { ko: "팔지 않습니다.", en: "Features.", "zh-CN": "不是功能。", "zh-TW": "不是功能。" },
  "principle.line3": { ko: "경험의 질을", en: "We design", "zh-CN": "而是设计", "zh-TW": "而是設計" },
  "principle.line4": { ko: "설계합니다.", en: "Quality of Experience.", "zh-CN": "体验的质量。", "zh-TW": "體驗的質量。" },
  "principle.desc": { ko: "고객이 앱을 열었을 때 느끼는 감정 설렘 → 확신 → 여운을 연결하는 것. 그것이 유일한 우리의 전략입니다.", en: "Connecting the emotions: Excitement → Confidence → Afterglow. That is our only strategy.", "zh-CN": "连接客户打开应用时的情感：心动 → 确信 → 回味。这是我们唯一的策略。", "zh-TW": "連接客戶打開應用時的情感：心動 → 確信 → 回味。這是我們唯一的策略。" },

  // 3. Journey
  "journey.title": { ko: "forFAN 고객 여정 지도", en: "Customer Journey Map", "zh-CN": "forFAN 客户旅程地图", "zh-TW": "forFAN 客戶旅程地圖" },
  "journey.lead": { ko: "고객의 시간은 멈춰있지 않습니다. Before(기대)에서 After(여운)까지 끊김 없는 빛의 흐름을 설계합니다.", en: "Customer time never stops. We design a seamless flow from Before to After.", "zh-CN": "客户的时间从未停止。设计从 Before(期待) 到 After(回味) 的无缝流程。", "zh-TW": "客戶的時間從未停止。設計從 Before(期待) 到 After(回味) 的無縫流程。" },

  // 4. Experience
  "exp.title": { ko: "경험의 흐름: Before · During · After", en: "Flow of Experience", "zh-CN": "体验流程", "zh-TW": "體驗流程" },
  "exp.lead": { ko: "경험은 멈추지 않고 흐릅니다. 시간의 흐름에 따라 변화하는 가치를 확인하세요.", en: "Experience flows continuously. Witness the value transforming over time.", "zh-CN": "体验川流不息。请见证价值随时间流逝而发生的转变。", "zh-TW": "體驗川流不息。請見證價值隨時間流逝而發生的轉變。" },

  // 5. Wallet
  "wallet.badge": { ko: "The Best App is No App", en: "The Best App is No App", "zh-CN": "最好的应用是无感应用", "zh-TW": "最好的應用是無感應用" },
  "wallet.title": { ko: "지갑 속에 Golden Ticket을.", en: "Golden Ticket in your Wallet.", "zh-CN": "钱包里的金票", "zh-TW": "錢包裡的金票" },
  "wallet.desc": { ko: "앱을 켜지 않아도 됩니다. 매장 근처에 가면, 당신의 추억 티켓이 잠금 화면에 조용히 떠오릅니다.", en: "No need to open the app. Your memory ticket quietly appears on the lock screen.", "zh-CN": "无需打开应用程序。当您靠近商店时，您的回忆票据会静静地浮现在锁屏上。", "zh-TW": "無需打開應用程序。當您靠近商店時，您的回憶票據會靜靜地浮現在鎖屏上。" },
  "wallet.li1": { ko: "촬영 직후 자동 발급", en: "Instant Issuance", "zh-CN": "拍摄后自动签发", "zh-TW": "拍攝後自動簽發" },
  "wallet.li2": { ko: "매장 방문 시 위치 기반 팝업", en: "Location-based Popup", "zh-CN": "基于位置的弹出窗口", "zh-TW": "基於位置的彈出窗口" },
  "wallet.li3": { ko: "등급에 따라 변하는 디자인", en: "Dynamic Design by Grade", "zh-CN": "根据等级变化的设计", "zh-TW": "根據等級變化的設計" },

  // 6. Rewards (Quiet Rewards)
  "rewards.title": { ko: "“Quiet Rewards” — 4CUT Coin", en: "“Quiet Rewards” — 4CUT Coin", "zh-CN": "“静谧奖励” — 4CUT Coin", "zh-TW": "“靜謐獎勵” — 4CUT Coin" },
  "rewards.lead": { ko: "발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요.", en: "Aesthetics of discovery. Wipe the frosted glass (Hover) to reveal hidden value.", "zh-CN": "发现的美学。像擦拭磨砂玻璃一样（悬停），发现隐藏的价值。", "zh-TW": "發現的美學。像擦拭磨砂玻璃一樣（懸停），發現隱藏的價值。" },

  // 7. Revenue
  "revenue.title": { ko: "Logic Flow: 24시간 멈추지 않는 매출 회로", en: "Logic Flow: 24/7 Revenue Circuit", "zh-CN": "逻辑流：24小时不间断的营收回路", "zh-TW": "邏輯流：24小時不間斷的營收迴路" },
  "revenue.lead": { ko: "고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다.", en: "CX is a precisely engineered KPI circuit.", "zh-CN": "客户体验是精心设计的 KPI 回路。", "zh-TW": "客戶體驗是精心設計的 KPI 迴路。" },

  // 🟢 [누락되었던 부분] 8. Partners (수익 극대화 섹션)
  "partners.title": { ko: "실질적 수익 극대화", en: "Maximize Real Revenue", "zh-CN": "最大化实际收益", "zh-TW": "最大化實際收益" },
  "partners.lead": { ko: "데이터로 증명하는 효과 — 로컬 비즈니스를 글로벌 수익 모델로 전환합니다.", en: "Data-proven effects — Transforming local business into a global revenue model.", "zh-CN": "数据证明的效果 — 将本地业务转化为全球盈利模式。", "zh-TW": "數據證明的效果 — 將本地業務轉化為全球盈利模式。" },
  "partners.sim.title": { ko: "Monthly Revenue Uplift Simulator", en: "Monthly Revenue Uplift Simulator", "zh-CN": "月收入增长模拟器", "zh-TW": "月收入增長模擬器" },
  "partners.sim.desc": { ko: "앱 도입 시, 재방문 유도로 인한 월 추가 예상 매출을 확인하세요.", en: "Estimated monthly revenue uplift driven by revisit retention.", "zh-CN": "查看引入应用后，因回头客增加而带来的月度额外收入预测。", "zh-TW": "查看引入應用後，因回頭客增加而帶來的月度額外收入預測。" },

  // 9. Creator Economy
  "creator.badge": { ko: "The Next Chapter", en: "The Next Chapter", "zh-CN": "下一章", "zh-TW": "下一章" },
  "creator.title": { ko: "Make it. Sell it. Global.", en: "Make it. Sell it. Global.", "zh-CN": "Make it. Sell it. Global.", "zh-TW": "Make it. Sell it. Global." },
  "creator.lead": { ko: "누구나 크리에이터가 됩니다. 당신의 감각이 담긴 프레임이 전 세계 forFAN 키오스크에서 판매됩니다.", en: "Everyone becomes a creator. Your designed frames are sold worldwide.", "zh-CN": "每个人都可以成为创作者。您设计的相框将在全球销售。", "zh-TW": "每個人都可以成為創作者。您設計的相框將在全球銷售。" },
  "creator.feat1": { ko: "Infinite Creativity", en: "Infinite Creativity", "zh-CN": "无限创意", "zh-TW": "無限創意" },
  "creator.desc1": { ko: "유저들이 매일 수천 개의 트렌디한 프레임을 쏟아냅니다.", en: "Users generate thousands of trendy frames daily.", "zh-CN": "用户每天生成数千个潮流相框。", "zh-TW": "用戶每天生成數千個潮流相框。" },
  "creator.feat2": { ko: "No Borders", en: "No Borders", "zh-CN": "无国界", "zh-TW": "無國界" },
  "creator.desc2": { ko: "한국에서 만든 프레임을 전 세계 어디서든 즉시 사용합니다.", en: "Frames made in Korea are instantly used globally.", "zh-CN": "在韩国制作的相框可在全球即时使用。", "zh-TW": "在韓國製作的相框可在全球即時使用。" },
  "creator.feat3": { ko: "Global Revenue", en: "Global Revenue", "zh-CN": "全球收益", "zh-TW": "全球收益" },
  "creator.desc3": { ko: "원화, 달러, 유로. 국경 없는 정산 시스템을 경험하세요.", en: "KRW, USD, EUR. Experience a borderless settlement.", "zh-CN": "韩元、美元、欧元。体验无国界的结算系统。", "zh-TW": "韓元、美元、歐元。體驗無國界的結算系統。" },
};

// Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  // 언어 순환 로직
  const toggleLang = () => {
    setLang((prev) => {
      if (prev === "ko") return "en";
      if (prev === "en") return "zh-CN";
      if (prev === "zh-CN") return "zh-TW";
      return "ko";
    });
  };
  
  // 번역 함수 (키가 없으면 키를 그대로 반환)
  const t = (key: string) => {
    return dictionary[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
        ### 📄 next.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

        ### 📄 app/layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/components/DynamicIsland`
* 🧩 **Component (Default):** `RootLayout`

        ```typescript
        import "./globals.css";
import DynamicIslandProvider from "@/components/DynamicIsland"; // 👈 Import

export const metadata = {
  title: "forFAN — LK Ventures NX View",
  description: "forFAN을 '찍는 앱'이 아닌 '경험을 설계하는 브랜드 플랫폼'으로",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* 🟢 Provider로 감싸줍니다 */}
        <DynamicIslandProvider>
          {children}
        </DynamicIslandProvider>
      </body>
    </html>
  );
}
        ### 📄 app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/lib/useLanguage, @/components/ScrollReveal, @/components/SectionShell, @/components/sections/HeroSection, @/components/sections/PrincipleSection`...
* 🧩 **Component (Default):** `Page`

        ```typescript
        "use client";

import { LanguageProvider } from "@/lib/useLanguage"; // 👈 Provider Import
import ScrollReveal from "@/components/ScrollReveal";
import SectionShell from "@/components/SectionShell";
import HeroSection from "@/components/sections/HeroSection";
import PrincipleSection from "@/components/sections/PrincipleSection";
import JourneySection from "@/components/sections/JourneySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AppleIdentitySection from "@/components/sections/AppleIdentitySection";
import AppleWalletSection from "@/components/sections/AppleWalletSection";
import QuietRewardsSection from "@/components/sections/QuietRewardsSection";
import RevenueSection from "@/components/sections/RevenueSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CreatorEconomySection from "@/components/sections/CreatorEconomySection";
import DosDontsSection from "@/components/sections/DosDontsSection";
import FloatingDock from "@/components/FloatingDock";

export default function Page() {
  return (
    /* 🟢 최상위 래퍼를 LanguageProvider로 설정 */
    <LanguageProvider>
      
      {/* 이제 FloatingDock이 Provider 내부에 있으므로 에러가 사라집니다 */}
      <FloatingDock />
      
      <main>
        <HeroSection />

        <div className="container" style={{ paddingTop: 40 }}>
          <ScrollReveal delay={100}><PrincipleSection /></ScrollReveal>
        </div>
        
        <div className="container">
          <SectionShell id="journey" className="theme-clean">
            <JourneySection />
          </SectionShell>
        </div>

        <div className="container">
          <SectionShell id="experience" className="theme-mist">
             <ExperienceSection />
          </SectionShell>
        </div>

        <AppleIdentitySection />
        
        <div className="container">
          <AppleWalletSection /> 
        </div>

        <QuietRewardsSection />

        {/* Revenue Section (Self-contained Theme) */}
        <RevenueSection />

        {/* Partners Section (Self-contained Theme) */}
        <PartnersSection />

        {/* Creator Economy Section (Self-contained Theme) */}
        <CreatorEconomySection />

        <div className="container">
           <SectionShell id="dosdonts" className="theme-clean">
             <DosDontsSection />
           </SectionShell>
        </div>

        <footer className="footer container" style={{ marginBottom: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800, color: "var(--text-primary)" }}>forFAN Global · Experience-first Brief</div>
              <div style={{ marginTop: 6, color: "var(--text-secondary)" }}>
                Designed by LK Ventures for customers.
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
               <span className="kbd">Confidential</span>
            </div>
          </div>
        </footer>
      </main>
    </LanguageProvider>
  );
}
        ### 📄 app/globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        @tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Apple Pro Color Palette */
  --bg: #f5f5f7;
  --card-bg: #ffffff;
  --text-primary: #1d1d1f;
  --text-secondary: #86868b;
  --text-tertiary: #a1a1a6;
  --accent-blue: #0071e3;
  --border-light: rgba(0, 0, 0, 0.05);
  
  /* Easing */
  --ease-apple: cubic-bezier(0.25, 0.1, 0.25, 1);
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden; /* 가로 스크롤 방지 */
}

/* 🟢 1. Shared Layout System */
.container {
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.section {
  padding: 80px 0;
  position: relative;
}

/* Bento Grid (ItemCard용) */
.bento-grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  width: 100%;
}
@media (max-width: 900px) {
  .bento-grid-container { grid-template-columns: 1fr; }
}

/* Typography */
.h1 {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0 0 24px 0;
  color: #1d1d1f;
}

.h2 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: #1d1d1f;
}

.lead {
  font-size: 21px;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 400;
  max-width: 920px;
  margin: 0 auto 50px;
  word-break: keep-all;
}
.lead b { color: var(--text-primary); }

/* 🟢 2. Hero Section Styles (복구됨) */
.hero { padding: 60px 0 40px; }
.kicker { 
  font-size: 13px; font-weight: 600; color: #f56300; 
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; 
}
.sub { 
  font-size: 20px; line-height: 1.6; color: var(--text-secondary); 
  max-width: 800px; margin-bottom: 40px; 
}

.heroCards {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  margin-top: 40px;
}
@media (max-width: 900px) { .heroCards { grid-template-columns: 1fr; } }

.card {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.02);
}
.quote {
  padding: 40px;
  background: linear-gradient(135deg, #fafafa, #f5f5f7);
  border-bottom: 1px solid rgba(0,0,0,0.03);
}
.quoteText { font-size: 24px; font-weight: 700; line-height: 1.3; color: #1d1d1f; }
.quoteSmall { margin-top: 12px; font-size: 15px; color: var(--text-secondary); }
.cardPad { padding: 32px; }
.badges { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.badge {
  font-size: 13px; font-weight: 500; color: var(--text-secondary);
  background: #f5f5f7; padding: 6px 12px; border-radius: 8px;
}
.hr { height: 1px; background: rgba(0,0,0,0.06); margin: 24px 0; }
.kbd { 
  font-size: 11px; font-weight: 700; text-transform: uppercase; color: #86868b;
  border: 1px solid rgba(0,0,0,0.1); padding: 3px 6px; border-radius: 6px; 
}

/* 🟢 3. Experience Rail Styles (복구됨) */
.rail {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 30px;
}
@media (max-width: 768px) { .rail { grid-template-columns: 1fr; } }

.railStep {
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 18px;
  padding: 20px;
  transition: 0.3s var(--ease-apple);
}
.railActive {
  background: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  border-color: transparent;
  transform: scale(1.02);
}
.railTitle { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: #1d1d1f; }
.railDesc { font-size: 13px; color: var(--text-secondary); line-height: 1.4; }

.flowHint {
  margin: 0 0 40px;
  padding: 16px;
  background: rgba(0,113,227,0.05);
  border-radius: 12px;
  color: #0071e3;
  font-size: 14px;
  text-align: center;
}

/* 🟢 4. DO / DON'T Styles (복구됨) */
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
@media (max-width: 768px) { .split { grid-template-columns: 1fr; } }

.doDont {
  background: #fff;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}
.listTitle {
  font-size: 18px; font-weight: 800; margin-bottom: 20px;
  display: flex; align-items: center; gap: 8px;
}

/* 기존 Bullets 재정의 (ItemCard와 DoDont 공용) */
.bullets { list-style: none; padding: 0; margin: 0; }
.bullets li {
  position: relative;
  padding-left: 14px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #424245;
  line-height: 1.6;
}
.bullets li::before {
  content: "•"; position: absolute; left: 0; color: #d2d2d7;
}

/* 🟢 5. Nav & Footer (유지) */
.nav {
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  background: rgba(245, 245, 247, 0.8);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
.navInner { display: flex; justify-content: space-between; padding: 14px 0; align-items: center; }
.navLinks { display: flex; gap: 8px; flex-wrap: wrap; }
.pill { padding: 8px 16px; border-radius: 99px; font-size: 12px; font-weight: 600; background: rgba(0,0,0,0.04); color: var(--text-secondary); transition: 0.2s; text-decoration: none; }
.pill:hover { background: #000; color: #fff; }

.footer { padding: 80px 0; border-top: 1px solid rgba(0,0,0,0.05); color: var(--text-secondary); font-size: 12px; margin-top: 60px; }

/* 🟢 6. Animation Utility */
.reveal-container {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s var(--ease-apple), transform 0.8s var(--ease-apple);
  display: block; 
}
.reveal-visible { opacity: 1; transform: translateY(0); }

/* ... 기존 코드 아래에 추가 ... */

/* 🟢 Ambient Aurora Background */
.aurora-bg {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: 
    radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(56, 189, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.15) 0px, transparent 50%);
  filter: blur(80px);
  z-index: -1;
  opacity: 0.8;
  animation: aurora-move 20s ease infinite alternate;
  pointer-events: none; /* 클릭 방해 금지 */
}

@keyframes aurora-move {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-2%, 2%) scale(1.05); }
  100% { transform: translate(2%, -2%) scale(1); }
}

/* 🟢 Text Gradient (강조용) */
.text-gradient {
  background: linear-gradient(135deg, #1d1d1f 0%, #86868b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* ... 기존 globals.css 내용 아래에 추가 ... */

/* 🟢 Section Box System (공통) */
.section-island {
  border-radius: 48px; /* 더 둥글고 유려하게 */
  padding: 80px 40px;
  margin: 40px auto;
  position: relative;
  overflow: hidden;
  /* 기본적으로 모든 섹션에 미세한 깊이감 부여 */
  box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
}

@media (max-width: 768px) {
  .section-island { padding: 40px 24px; border-radius: 32px; margin: 24px auto; }
}

/* ⚪️ Theme 1: Clean White (Journey, Do/Dont) */
.theme-clean {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.03);
}

/* 🌫️ Theme 2: Soft Mist (Experience, Revenue) */
.theme-mist {
  background: #fbfbfd;
  border: 1px solid rgba(0,0,0,0.05);
}

/* 💎 Theme 3: Flashy Growth (Partners - 수익 극대화) */
.theme-growth {
  background: linear-gradient(135deg, #F0F9FF 0%, #E6FFFA 50%, #F5F3FF 100%);
  border: 1px solid rgba(255,255,255,0.5);
}
/* 움직이는 오로라 효과 (Partners용) */
.theme-growth::before {
  content: "";
  position: absolute;
  top: -50%; left: -50%; width: 200%; height: 200%;
  background: radial-gradient(circle at 50% 50%, rgba(52, 199, 89, 0.15), transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(0, 113, 227, 0.15), transparent 50%);
  animation: aurora-spin 15s linear infinite;
  z-index: 0; pointer-events: none;
}

/* 🪙 Theme 4: Flashy Gold (Quiet Rewards - 코인) */
.theme-gold {
  background: linear-gradient(180deg, #FFFBF0 0%, #FFFFFF 80%);
  border: 1px solid rgba(218, 165, 32, 0.1);
}
/* 골드 쉬머 효과 (Rewards용) */
.theme-gold::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.15) 0%, transparent 60%),
    repeating-linear-gradient(45deg, rgba(218, 165, 32, 0.03) 0px, rgba(218, 165, 32, 0.03) 1px, transparent 1px, transparent 10px);
  z-index: 0; pointer-events: none;
}

@keyframes aurora-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
        ### 📄 content/data.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import { CardItem, CopyBucket, JourneyItem, LogicItem, Phase } from "./types";

export const brandItems: CardItem[] = [
  {
    id: "moment",
    tag: "1) Moment Ownership",
    title: "Moment Card — 순간을 ‘소유’하게 만들기",
    desc:
      "사진이 아니라 ‘그날의 선택과 감정’을 기록합니다. 촬영 후 자동으로 생성되는 카드로, 프레임/매장/날짜/친구 태그 등 ‘순간 메타’를 남깁니다.",
    bullets: [
      "촬영 후 자동 생성: 날짜 · 매장 · 프레임 · 참여자(태그)",
      "사진 없이도 ‘기억의 증거’가 남는 구조",
      "공유는 ‘이미지’가 아니라 ‘경험’ 중심으로",
    ],
    icon: "spark",
  },
  {
    id: "story",
    tag: "2) Story Layer",
    title: "Frame Story Layer — ‘왜 이 프레임인가’",
    desc:
      "프레임 선택을 단순 구매에서 ‘공감한 선택’으로 바꿉니다. 프레임마다 기획 의도/추천 상황/촬영 팁/제작자 스토리를 얹습니다.",
    bullets: [
      "프레임 설명: 감정/상황/추천 포즈/촬영 팁",
      "제작자/브랜드/아티스트의 의도 한 줄",
      "선택의 이유를 만드는 스토리 UX",
    ],
    icon: "map",
  },
  {
    id: "status",
    tag: "3) Subtle Status",
    title: "Invisible Fan Status — 배지가 아닌 ‘정체성 문장’",
    desc:
      "레벨 숫자 대신 ‘당신이 만든 영향’을 문장으로 제공합니다. 은근한 인정(Recognition)이 재방문과 자발적 확산을 만듭니다.",
    bullets: [
      "예: ‘이 프레임이 뜰 때 당신이 있었다’",
      "랭킹/서열 대신 ‘기여 기반’ 문장",
      "SNS 공유 가능한 ‘짧은 문장’ 중심",
    ],
    icon: "people",
  },
  {
    id: "rewards",
    tag: "4) Quiet Rewards",
    title: "Quiet Rewards — 코인은 조용히, 혜택은 체감되게",
    desc:
      "리워드(블록체인 코인)를 전면에 내세우지 않습니다. 대신 ‘잠금 해제/먼저 보기/조용한 쿠폰’처럼 체감 혜택을 자연스럽게 제공합니다.",
    bullets: [
      "키오스크 이용/앱 결제 → 코인 적립(백그라운드)",
      "사용처: 프레임 잠금 해제 · 할인 · 우선 접근",
      "메시지 톤: ‘Thanks for being here’",
    ],
    icon: "gift",
  },
  {
    id: "creator",
    tag: "5) Creator as Brand",
    title: "Creator Profile — 프레임 제작자를 ‘브랜드’로",
    desc:
      "forFAN의 핵심은 프레임=콘텐츠=브랜드입니다. 제작자 프로필을 단순 판매자가 아닌 ‘크리에이터’로 설계합니다.",
    bullets: [
      "한 줄 소개 + 대표 프레임 3개",
      "‘이 프레임은 이런 사람에게 추천’",
      "커뮤니티/RS(수익 분배)와 결합",
    ],
    icon: "circle",
  },
  {
    id: "philosophy",
    tag: "6) One Line Philosophy",
    title: "앱의 철학 한 줄 — 모든 기능의 기준점",
    desc:
      "기능보다 중요한 건 ‘왜 존재하는가’입니다. 앱 안에 문장으로 철학을 고정하고, 모든 UX가 그 문장을 설명하게 만듭니다.",
    bullets: [
      "“사진을 찍게 하지는 않습니다. 그 순간을 더 오래 기억하게 합니다.”",
      "온보딩/홈/프레임 상세에 일관되게 노출",
      "브랜드 메시지의 통일성 강화",
    ],
    icon: "copy",
  },
];

export const experienceItems: CardItem[] = [
  {
    id: "before_preview",
    phase: "Before" as Phase,
    icon: "spark",
    tag: "Before the Moment",
    title: "Moment Preview — 찍기 전의 설렘",
    desc: "오늘/이번 주에 어울리는 프레임과 무드를 가볍게 추천해, 앱을 여는 이유를 ‘설렘’으로 만듭니다.",
    bullets: [
      "오늘의 추천 프레임(가벼운 큐레이션)",
      "요일/시간대 기반 추천(과하지 않게)",
      "‘찍을까?’를 ‘찍자’로 바꾸는 트리거",
    ],
  },
  {
    id: "during_people",
    phase: "During" as Phase,
    icon: "people",
    tag: "People, not Photos",
    title: "People Tag Memory — 사람을 기억",
    desc: "사진보다 중요한 ‘누구와 함께였는지’를 남깁니다. 통계가 아니라 문장으로 관계를 표현합니다.",
    bullets: ["촬영 순간 참여자 태그", "관계는 숫자가 아니라 ‘문장’", "재방문 동기를 ‘사람’으로 연결"],
  },
  {
    id: "during_hint",
    phase: "During" as Phase,
    icon: "hint",
    tag: "Soft Guidance",
    title: "Quiet Pose & Mood Tips — 조용한 힌트",
    desc: "강요하는 튜토리얼이 아니라 ‘힌트’ 수준으로 프레임별 팁 1~2줄을 제공합니다.",
    bullets: ["프레임별 ‘이렇게 서면 좋아요’", "현장 문의 감소 + 만족도 상승", "텍스트 기반으로도 충분히 가능"],
  },
  {
    id: "after_follow",
    phase: "After" as Phase,
    icon: "clock",
    tag: "After the Moment",
    title: "Gentle Follow-up — 여운을 이어줌",
    desc: "촬영 다음 날/일주일 뒤에도 경험이 자연스럽게 이어집니다. 과도한 알림 대신 부드러운 리마인드.",
    bullets: ["‘어제의 순간’ 리마인드", "관련 프레임/스토리 추천", "재방문 이유를 ‘추억’으로 만든다"],
  },
  {
    id: "after_taste",
    phase: "After" as Phase,
    icon: "mood",
    tag: "My Taste, Quietly",
    title: "Taste Memory — 말하지 않아도 알아주는 취향",
    desc: "취향 설정을 강요하지 않고 사용 패턴을 바탕으로 무드를 형용사로 표현합니다.",
    bullets: ["Playful · Cozy · Minimal 같은 무드", "개인화지만 ‘가벼운’ 개인화", "브랜드 톤을 해치지 않음"],
  },
  {
    id: "after_circle",
    phase: "After" as Phase,
    icon: "circle",
    tag: "Belonging, Not Community",
    title: "Quiet Circles — 커뮤니티보다 소속감",
    desc: "광장형 커뮤니티 대신 같은 프레임을 좋아하는 사람들의 느슨한 서클. 글을 쓰지 않아도 함께 있는 느낌.",
    bullets: ["‘이 프레임을 좋아한 사람들’ 중심", "운영 부담 최소화", "자연스러운 UGC 유도"],
  },
  {
    id: "after_surprise",
    phase: "After" as Phase,
    icon: "gift",
    tag: "Small Surprise",
    title: "Unexpected Moments — 작은 기쁨",
    desc: "보상보다 강력한 건 예상 밖의 기쁨. 특정 순간에 조용히 열리는 프레임/혜택으로 감정을 남깁니다.",
    bullets: ["n번째 방문/첫 사용/기념일에 제공", "카피 톤: “We thought you’d like this.”", "리워드는 전면 노출하지 않는다"],
  },
];

export const journeyMap: JourneyItem[] = [
  {
    phase: "Before",
    icon: "map",
    title: "Before — ‘오늘은 뭘 찍지?’",
    bullets: ["Moment Preview로 ‘오늘의 프레임’ 제안", "매장/지역 기반 ‘가까운 경험’ 제안(조용히)", "촬영 팁 한 줄로 불안감 낮추기"],
  },
  {
    phase: "During",
    icon: "hint",
    title: "During — ‘지금 이 순간을 더 잘’",
    bullets: ["프레임별 Quiet Pose Tip (1~2줄)", "People Tag: 누구와 함께인지 남기기", "리워드는 보이지 않게 누적(Quiet Rewards)"],
  },
  {
    phase: "After",
    icon: "clock",
    title: "After — ‘여운이 다시 방문을 만든다’",
    bullets: ["Gentle Follow-up으로 자연스러운 리마인드", "Taste Memory로 ‘내 취향’ 문장화", "Quiet Circles로 소속감 + UGC 흐름 생성"],
  },
];

export const quietRewardsCopy: CopyBucket[] = [
  {
    icon: "gift",
    title: "적립(노출 최소화)",
    lines: ["“Thanks for being here.”", "“오늘의 순간에 작은 선물을 남겼어요.”", "“방금 경험이 조용히 저장됐어요.”"],
  },
  {
    icon: "copy",
    title: "사용(체감 중심)",
    lines: ["“This one’s on us.”", "“이 프레임, 오늘은 열어둘게요.”", "“조용히 혜택을 적용했어요.”"],
  },
  {
    icon: "spark",
    title: "서프라이즈(감정 설계)",
    lines: ["“We thought you’d like this.”", "“당신의 취향에 맞춰 하나 골라뒀어요.”", "“오늘은 이 무드가 잘 어울릴 것 같아요.”"],
  },
];

export const revenueLogic: LogicItem[] = [
  {
    icon: "link",
    title: "1) 경험 → 재방문(리텐션)",
    desc: "찍기 전(Preview)·찍는 중(Tips)·찍고 난 뒤(Follow-up)가 연결되면 ‘한 번’이 ‘반복’이 됩니다.",
    bullets: ["방문 빈도 ↑", "비수기 완충(캠페인/추천)", "재방문이 매출의 가장 큰 레버"],
  },
  {
    icon: "chart",
    title: "2) 재방문 → 객단가(ARPU) 상승",
    desc: "Quiet Rewards는 ‘코인’이 아니라 ‘체감 혜택’으로 설계됩니다. 프레임 잠금해제/쿠폰은 구매를 자연스럽게 만듭니다.",
    bullets: ["앱 전용 프레임/프로모션 전환 ↑", "업셀(프레임/굿즈) 가능성 ↑", "할인은 ‘조용히’ 적용해 거부감 ↓"],
  },
  {
    icon: "people",
    title: "3) 소속감 → 유입(Organic Growth)",
    desc: "Quiet Circles/UGC는 광고비를 줄이고, ‘친구와 함께’ 오게 만듭니다. 촬영은 사회적 행위입니다.",
    bullets: ["자발적 공유/추천 ↑", "신규 유입 CAC ↓", "프레임이 ‘밈’처럼 확산"],
  },
];

export const partnerValue: CardItem[] = [
  {
    id: "p_rev",
    tag: "Revenue",
    title: "추가 매출원: 앱-기반 리텐션 & 재방문 촉진",
    desc:
      "오프라인 ‘1회 방문’이 앱을 통해 ‘반복 방문’으로 바뀝니다. 쿠폰/리워드/프레임 잠금해제는 현장 매출을 직접 끌어올립니다.",
    bullets: ["직영/가맹 공통: 촬영권·리워드로 재방문 유도", "앱 전용 프레임/프로모션으로 객단가(ARPU) 상승", "성수기·비수기 편차 완화(캠페인으로 수요 조절)"],
    icon: "chart",
  },
  {
    id: "p_mkt",
    tag: "Marketing",
    title: "마케팅 비용 절감: 앱이 ‘로컬 CRM’ 역할",
    desc:
      "가맹점주/해외 총판에게 가장 큰 고통은 ‘지역별 마케팅’입니다. 앱은 고객을 직접 연결하고, 매장 단위 쿠폰/메시지로 전환 비용을 낮춥니다.",
    bullets: ["매장 단위 쿠폰(예: 4,000원)으로 즉시 유입", "공지/이벤트/신규 프레임을 앱으로 푸시(소셜보다 효율적)", "UGC/커뮤니티가 자연 노출을 만들며 광고 의존도 감소"],
    icon: "spark",
  },
  {
    id: "p_data",
    tag: "Data",
    title: "데이터 기반 운영: ‘감’이 아니라 ‘지표’로 매장 운영",
    desc:
      "오프라인 운영에서 가장 부족한 건 ‘누가 왜 오는지’ 데이터입니다. 앱은 방문-결제-프레임-리워드를 연결해, 매장 운영 의사결정을 숫자로 바꿉니다.",
    bullets: ["프레임별 판매/선호, 시간대별 수요, 재방문율 추적", "지역별 트렌드 감지 → 로컬 전용 프레임 기획 가능", "프로모션 A/B 테스트로 최적의 쿠폰/경품 구조 도출"],
    icon: "link",
  },
  {
    id: "p_ops",
    tag: "Operations",
    title: "운영 효율: 현장 응대/CS 부담 감소",
    desc:
      "고객 문의(‘어떤 프레임이 예뻐요?’, ‘어떻게 찍어요?’)의 상당 부분을 커뮤니티/가이드로 흡수해 매장 운영 부담을 줄입니다.",
    bullets: ["프레임별 촬영 팁/가이드 → 현장 문의 감소", "커뮤니티 Q&A로 고객이 고객을 돕는 구조", "이벤트/공지의 앱화로 현장 안내물·인력 부담 축소"],
    icon: "hint",
  },
  {
    id: "p_global",
    tag: "Global Expansion",
    title: "해외 총판 관점: ‘로컬 표준화’와 ‘본사 콘텐츠 동기화’",
    desc:
      "마스터 프랜차이즈의 어려움은 국가별 운영 편차입니다. 앱은 콘텐츠/정책을 표준화하고, 본사 기획을 국가별로 안전하게 확장하는 채널이 됩니다.",
    bullets: ["본사 프레임/이벤트를 글로벌 동기화(국가별 스케줄 분리 가능)", "권역별 리워드/쿠폰 정책 분리(환율/가격/규제 대응)", "멀티 리전 인프라로 성능/안정성 확보(1M MAU 확장)"],
    icon: "map",
  },
  {
    id: "p_ecosys",
    tag: "Partner Ecosystem",
    title: "파트너 생태계: 로컬 IP/인플루언서 콜라보를 ‘제품화’",
    desc:
      "총판/가맹점주는 로컬 IP와 협업을 ‘한 번 이벤트’로 끝내기 쉽습니다. 앱은 이를 프레임 마켓/채널로 전환해 지속 매출로 만드는 장치입니다.",
    bullets: ["로컬 인플루언서 프레임 → 앱 전용 판매로 지속화", "판매 시 RS(수익 분배) 구조로 파트너/크리에이터 참여 촉진", "국가별 인기 프레임을 본사로 역수출(글로벌 확산 소재)"],
    icon: "people",
  },
];

export const doList = [
  "앱은 Hub, 키오스크는 Core Experience",
  "보상은 조용히, 체감 혜택은 확실히",
  "기억/기여를 ‘문장’으로 남기는 UX",
  "프레임 스토리로 선택의 이유를 만든다",
];

export const dontList = [
  "앱 내 촬영/필터 추가 (키오스크 경험과 충돌)",
  "과한 커뮤니티 기능(피드 과열, 운영 비용 폭증)",
  "랭킹/서열 중심 구조(브랜드 톤 훼손)",
  "리워드 과잉 노출 UI(‘코인 앱’으로 인식될 리스크)",
];

export const navLinks = [
  { href: "#principle", label: "원칙" },
  { href: "#journey", label: "여정 지도" },
  { href: "#experience", label: "고객 경험(탭)" },
  { href: "#quiet", label: "Quiet Rewards 카피" },
  { href: "#revenue", label: "경험→매출 논리" },
  { href: "#partners", label: "파트너 이점" },
  { href: "#dosdonts", label: "DO / DON'T" },
] as const;

export const appleIdentityItems: CardItem[] = [
  {
    id: "haptic",
    tag: "Taptic Engine",
    title: "Feel the moment.",
    desc: "화면을 터치하는 순간, 손끝에 전해지는 미세하고 기분 좋은 진동. 리워드가 쌓이는 순간을 '무게감' 있게 전달합니다.",
    bullets: [
      "리워드 획득 시 '딸깍'하는 아날로그 감각",
      "프레임 선택 시 부드러운 텐션 피드백",
      "성공/실패가 아닌 '완성'의 감각 전달"
    ],
    icon: "spark" // 기존 아이콘 재사용 또는 'wave' 등 추가 가능
  },
  {
    id: "dynamic",
    tag: "Live Activities",
    title: "Always at a glance.",
    desc: "앱을 굳이 열지 않아도 됩니다. 다이내믹 아일랜드가 당신의 촬영 순서와 매장 위치를 조용히 알려줍니다.",
    bullets: [
      "잠금 화면에서 대기 순서 실시간 확인",
      "매장 근처 진입 시 추천 프레임 팝업",
      "앱 진입 뎁스(Depth)를 0으로 단축"
    ],
    icon: "clock"
  },
  {
    id: "privacy",
    tag: "Privacy by Design",
    title: "Your data. Your story.",
    desc: "당신의 추억은 온전히 당신의 것입니다. 우리는 당신이 누구인지보다, 무엇을 좋아하는지만 기억합니다.",
    bullets: [
      "얼굴 데이터 저장 없음 (On-device 처리)",
      "위치 기록 미저장 (실시간 트리거만 활용)",
      "투명한 데이터 사용 리포트 제공"
    ],
    icon: "lock" // Icon.tsx에 lock 추가 필요 (또는 기존 circle 등 사용)
  }
];
        ### 📄 content/types.ts
        > **Context Summary**
        * wb **Type/Intf:** `Phase`
* wb **Type/Intf:** `CardItem`
* wb **Type/Intf:** `JourneyItem`
* wb **Type/Intf:** `CopyBucket`
* wb **Type/Intf:** `LogicItem`

        ```ts
        export type Phase = "Before" | "During" | "After";

export type CardItem = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  icon?: string;
  phase?: Phase;
};

export type JourneyItem = {
  phase: Phase;
  icon: string;
  title: string;
  bullets: string[];
};

export type CopyBucket = {
  icon: string;
  title: string;
  lines: string[];
};

export type LogicItem = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
};

        ### 📄 components/DynamicIsland.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `DynamicIslandProvider`
* ww **Hooks:** `useContext`

        ```typescript
        "use client";

import React, { createContext, useContext, useState } from "react";
import Icon from "./Icon";

// 1. Context 정의
type IslandState = {
  isActive: boolean;
  message: string;
  subMessage?: string;
  icon?: string;
};

type IslandContextType = {
  triggerIsland: (msg: string, sub?: string, icon?: string) => void;
};

const IslandContext = createContext<IslandContextType | null>(null);

export const useDynamicIsland = () => {
  const context = useContext(IslandContext);
  if (!context) throw new Error("useDynamicIsland must be used within a DynamicIslandProvider");
  return context;
};

export default function DynamicIslandProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IslandState>({ isActive: false, message: "", icon: "spark" });

  const triggerIsland = (message: string, subMessage: string = "", icon: string = "spark") => {
    setState({ isActive: false, message: "", icon }); // Reset to re-trigger animation
    
    setTimeout(() => {
      setState({ isActive: true, message, subMessage, icon });
    }, 50);

    setTimeout(() => {
      setState((prev) => ({ ...prev, isActive: false }));
    }, 4000); // 4초 후 닫힘
  };

  return (
    <IslandContext.Provider value={{ triggerIsland }}>
      {children}
      
      {/* 🏝️ UI Container */}
      <div className="island-container">
        <div className={`island-pill ${state.isActive ? "expanded" : "idle"}`}>
          <div className="island-content">
            <div className="content-layout">
              <div className="icon-area">
                <div className={`anim-icon ${state.isActive ? "pop-in" : ""}`}>
                   <Icon name={state.icon} />
                </div>
              </div>
              <div className="text-area">
                <span className="title">{state.message}</span>
                {state.subMessage && <span className="desc">{state.subMessage}</span>}
              </div>
              {/* 장식용 오디오 바 */}
              <div className="audio-bars">
                 <span className="bar" />
                 <span className="bar" />
                 <span className="bar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .island-container {
          position: fixed;
          /* 🟢 [수정] 헤더 높이(약 64px) + 여백(16px) = 80px 아래에 위치 */
          top: 15px; 
          left: 0; 
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 999; /* 네비게이션바보다 위, 혹은 상황에 따라 아래로 조정 */
          pointer-events: none;
        }

        .island-pill {
          background: #000;
          color: #fff;
          border-radius: 99px;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* 쫀득한 모션 */
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        /* Idle: 숨겨진 상태 (크기 0이 아니라 작게 대기하다가 사라짐) */
        .island-pill.idle {
          width: 0px; 
          height: 36px;
          opacity: 0;
          transform: translateY(-10px);
        }

        /* Expanded: 알림 표시 */
        .island-pill.expanded {
          width: 380px;
          height: 88px;
          opacity: 1;
          transform: translateY(0);
          border-radius: 44px;
        }

        .island-content {
          width: 380px; 
          height: 88px;
          display: flex;
          align-items: center;
          padding: 0 28px;
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }
        
        .island-pill.expanded .island-content {
          opacity: 1;
          transition-delay: 0.2s;
        }

        .content-layout {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 18px;
        }

        .icon-area {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #FFD700;
        }

        .anim-icon.pop-in {
          animation: pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .text-area {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
        }
        .title { font-size: 15px; font-weight: 600; color: #fff; line-height: 1.3; }
        .desc { font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.3; }

        .audio-bars { display: flex; gap: 4px; align-items: center; height: 20px; }
        .bar {
          width: 4px; background: #0071e3; border-radius: 99px;
          animation: eq 1s infinite ease-in-out;
        }
        .bar:nth-child(1) { height: 12px; animation-delay: 0s; }
        .bar:nth-child(2) { height: 20px; animation-delay: 0.1s; }
        .bar:nth-child(3) { height: 16px; animation-delay: 0.2s; }

        @keyframes pop {
          0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); }
        }
        @keyframes eq {
          0%, 100% { transform: scaleY(0.5); } 50% { transform: scaleY(1); }
        }

        @media (max-width: 450px) {
          .island-pill.expanded { width: 92vw; }
          .island-content { width: 100%; padding: 0 20px; }
        }
      `}</style>
    </IslandContext.Provider>
  );
}
        ### 📄 components/SectionGrid.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionGrid`

        ```typescript
        "use client";

export default function SectionGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="bento-grid-container">
      {children}
    </div>
  );
}
        ### 📄 components/Tabs.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types`
* 🧩 **Component (Default):** `Tabs`

        ```typescript
        "use client";

import { Phase } from "@/content/types";

export default function Tabs({
  value,
  onChange,
}: {
  value: Phase;
  onChange: (v: Phase) => void;
}) {
  return (
    <div className="segmented-control">
      {(["Before", "During", "After"] as Phase[]).map((p) => (
        <button
          key={p}
          className={`segment-btn ${value === p ? "active" : ""}`}
          onClick={() => onChange(p)}
          type="button"
        >
          {p}
        </button>
      ))}

      <style jsx>{`
        .segmented-control {
          display: inline-flex;
          background: rgba(118, 118, 128, 0.12);
          padding: 2px;
          border-radius: 9px;
          margin-bottom: 32px;
        }
        .segment-btn {
          padding: 6px 20px;
          font-size: 13px;
          font-weight: 500;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #1d1d1f;
          transition: all 0.2s ease;
        }
        .segment-btn:hover { opacity: 0.7; }
        .segment-btn.active {
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
        ### 📄 components/Icon.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Icon`

        ```typescript
        export default function Icon({ name }: { name?: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 2l1.2 5.3L18 9l-4.8 1.7L12 16l-1.2-5.3L6 9l4.8-1.7L12 2z" />
          <path d="M19 3l.6 2.2L22 6l-2.4.8L19 9l-.6-2.2L16 6l2.4-.8L19 3z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" />
          <path d="M21 21v-2a4 4 0 00-3-3.9" />
          <path d="M16 3.1a4 4 0 010 7.8" />
        </svg>
      );
    case "hint":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 00-4 12c.7.7 1 1.5 1 2.5V17h6v-.5c0-1 .3-1.8 1-2.5A7 7 0 0012 2z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "mood":
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 11-9-9" />
          <path d="M21 3v9h-9" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7c0-2 1-4 3-4 2.5 0 3.5 2.2 2 4" />
          <path d="M12 7c0-2-1-4-3-4-2.5 0-3.5 2.2-2 4" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
          <path d="M9 3v15" />
          <path d="M15 6v15" />
        </svg>
      );
    case "copy":
      return (
        <svg {...common}>
          <path d="M9 9h10v10H9z" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1" />
          <path d="M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14v4" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

        ### 📄 components/ScrollReveal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `ScrollReveal`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        "use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "", // 👈 추가
  style = {},     // 👈 추가
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // 외부에서 받은 className과 내부 스타일을 병합합니다.
      className={`reveal-container ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...style // 👈 외부 스타일(Grid 속성 등)을 여기에 적용합니다.
      }}
    >
      {children}
    </div>
  );
}
        ### 📄 components/FloatingDock.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react, @/lib/useLanguage`
* 🧩 **Component (Default):** `FloatingDock`
* ww **Hooks:** `useLanguage, useState, useEffect`

        ```typescript
        "use client";

import { navLinks } from "@/content/data";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/useLanguage";

export default function FloatingDock() {
  const [activeId, setActiveId] = useState("");
  const { lang, toggleLang } = useLanguage();

  // 🟢 [추가] 언어별 라벨/국기 매핑
  const langLabel = {
    "ko": "🇰🇷",
    "en": "🇺🇸",
    "zh-CN": "🇨🇳",
    "zh-TW": "🇹🇼"
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((sec) => {
        if (!sec) return;
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveId(`#${sec.id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="floating-dock">
      <div className="dock-glass">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`dock-item ${activeId === link.href ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              setActiveId(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        
        <div className="dock-divider" />
        
        {/* 🟢 [수정] 4개 국어 순환 버튼 */}
        <button 
          className="dock-item lang-btn" 
          onClick={toggleLang}
          title="Change Language"
        >
          {langLabel[lang]}
        </button>
      </div>

      <style jsx>{`
        .floating-dock {
          position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: auto; max-width: 90vw;
        }
        .dock-glass {
          display: flex; align-items: center; gap: 4px; padding: 6px;
          background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.05);
          overflow-x: auto;
        }
        .dock-item {
          padding: 10px 16px; border-radius: 18px; font-size: 13px; font-weight: 600; color: #86868b;
          white-space: nowrap; transition: all 0.2s ease; text-decoration: none; border: none; background: transparent; cursor: pointer;
        }
        .dock-item:hover { background: rgba(0, 0, 0, 0.05); color: #1d1d1f; }
        .dock-item.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
        
        .dock-divider { width: 1px; height: 20px; background: rgba(0,0,0,0.1); margin: 0 4px; }
        
        /* 국기 아이콘 크기 최적화 */
        .lang-btn { font-size: 18px; padding: 6px 12px; line-height: 1; }

        @media (max-width: 600px) {
          .dock-glass { padding: 4px; border-radius: 16px; }
          .dock-item { padding: 8px 12px; font-size: 12px; }
        }
      `}</style>
    </nav>
  );
}
        ### 📄 components/SectionHeader.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionHeader`

        ```typescript
        export default function SectionHeader({
  title,
  lead,
}: {
  title: string;
  lead?: React.ReactNode;
}) {
  return (
    <>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </>
  );
}

        ### 📄 components/ItemCard.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/types, react`
* 🧩 **Component (Default):** `ItemCard`
* ww **Hooks:** `useState`

        ```typescript
        "use client";

import Icon from "./Icon";
import { CardItem } from "@/content/types";
import ScrollReveal from "./ScrollReveal";
import { useRef, useState } from "react";

export default function ItemCard({
  item,
  span = 6,
  delay = 0,
}: {
  item: CardItem;
  span?: 4 | 6 | 12;
  showArt?: boolean;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // 🖱️ 3D Tilt Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // 카드 내 X 좌표
    const y = e.clientY - rect.top;  // 카드 내 Y 좌표

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -3; // 상하 기울기 (최대 3도)
    const rotateY = ((x - centerX) / centerX) * 3;  // 좌우 기울기 (최대 3도)

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // 마우스 나가면 원상복구
  };

  return (
    <ScrollReveal
      delay={delay}
      style={{ gridColumn: `span ${span}` }}
      className="bento-wrapper"
    >
      <div
        style={{ perspective: "1000px" }} // 3D 공간 정의
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <article
          ref={cardRef}
          className="bento-card"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.1s ease-out, box-shadow 0.3s ease", // 회전은 즉각적으로, 그림자는 부드럽게
          }}
        >
          <div className="bento-content">
            {item.icon && (
              <div className="icon-box">
                <Icon name={item.icon} />
              </div>
            )}
            <span className="bento-tag">{item.tag}</span>
            <h3 className="bento-title">{item.title}</h3>
            <p className="bento-desc">{item.desc}</p>

            {item.bullets.length > 0 && (
              <ul className="bento-list">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            )}
          </div>

          <style jsx>{`
            .bento-card {
              height: 100%;
              background: #ffffff;
              border-radius: 24px;
              padding: 28px;
              /* 기본 그림자 */
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.03);
              border: 1px solid rgba(0, 0, 0, 0.04);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              /* 하드웨어 가속 */
              will-change: transform;
            }
            
            /* Hover 시 더 깊은 그림자와 하이라이트 */
            .bento-card:hover {
              box-shadow: 
                0 20px 40px -5px rgba(0, 0, 0, 0.1), /* 깊은 그림자 */
                0 0 0 1px rgba(0,0,0,0.05); /* 경계선 강화 */
            }

            .icon-box {
              width: 44px; height: 44px;
              background: #f5f5f7;
              border-radius: 12px; /* iOS 스타일 스퀘어클 */
              display: flex; align-items: center; justify-content: center;
              margin-bottom: 16px;
              color: #1d1d1f;
            }
            .bento-tag {
              font-size: 11px; font-weight: 700; color: #86868b;
              text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;
            }
            .bento-title {
              font-size: 20px; font-weight: 700; color: #1d1d1f;
              margin: 0 0 10px 0; line-height: 1.3;
              letter-spacing: -0.01em;
            }
            .bento-desc {
              font-size: 15px; line-height: 1.6; color: #86868b; margin: 0 0 20px 0;
            }
            .bento-list {
              padding: 0; margin: 0; list-style: none;
              border-top: 1px solid rgba(0,0,0,0.05); padding-top: 16px;
            }
            .bento-list li {
              font-size: 13px; color: #6e6e73; margin-bottom: 6px;
              position: relative; padding-left: 12px;
            }
            .bento-list li::before {
              content: "•"; position: absolute; left: 0; color: #d2d2d7;
            }
          `}</style>
        </article>
      </div>
    </ScrollReveal>
  );
}
        ### 📄 components/SectionShell.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `SectionShell`

        ```typescript
        "use client";

export default function SectionShell({
  id,
  className = "theme-clean", // 기본값: Clean White
  children,
}: {
  id: string;
  className?: string; // variant 대신 className으로 직접 제어
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-wrapper">
      <div className="container">
        <div className={`section-island ${className}`}>
          {children}
        </div>
      </div>

      <style jsx>{`
        .section-wrapper {
          padding: 20px 0; /* 섹션 간 간격 조절 */
          width: 100%;
        }
        /* section-island 내부는 z-index 관리가 필요할 수 있음 */
        .section-island > :global(*) {
          position: relative; z-index: 1;
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/Anchor.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `Anchor`

        ```typescript
        export default function Anchor({ href, label }: { href: string; label: string }) {
  return (
    <a className="pill" href={href}>
      {label}
    </a>
  );
}

        ### 📄 components/sections/PartnersSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react, @/lib/useLanguage`
* 🧩 **Component (Default):** `PartnersSection`
* ww **Hooks:** `useLanguage, useState`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import SectionShell from "../SectionShell";
import ScrollReveal from "../ScrollReveal";
import { partnerValue } from "@/content/data";
import ItemCard from "../ItemCard";
import { useState } from "react";
import { useLanguage } from "@/lib/useLanguage"; // 👈 다국어 지원

export default function PartnersSection() {
  const { t } = useLanguage();
  const [visitors, setVisitors] = useState(1000); 
  const conversionRate = 0.45;
  const ticketPrice = 5000;
  const uplift = Math.floor(visitors * conversionRate * ticketPrice);
  const progress = (visitors - 500) / (5000 - 500); // 0 ~ 1

  // 🌈 Dynamic Color Logic (Blue -> Purple -> Red)
  let resultColor = "#0071e3"; // Default: Blue
  let glowColor = "rgba(0, 113, 227, 0.1)";

  if (progress > 0.7) { 
    // 🔥 High: Red (강렬한 수익)
    resultColor = "#FF3B30"; 
    glowColor = "rgba(255, 59, 48, 0.2)";
  } else if (progress > 0.4) { 
    // 🔮 Mid: Purple (성장 단계)
    resultColor = "#AF52DE"; 
    glowColor = "rgba(175, 82, 222, 0.15)";
  }

  return (
    <SectionShell id="partners" className="theme-growth">
      <SectionHeader
        title={t("partners.title")}
        lead={t("partners.lead")}
      />

      <ScrollReveal>
        {/* Simulator: Dynamic Glow Effect */}
        <div 
          className="simulator-glass"
          style={{ 
            boxShadow: `0 20px 60px ${glowColor}`,
            borderColor: progress > 0.7 ? "rgba(255, 59, 48, 0.3)" : "rgba(255,255,255,0.4)"
          }}
        >
          <div className="sim-header">
            <h3>{t("partners.sim.title")}</h3>
            <p>{t("partners.sim.desc")}</p>
          </div>

          <div className="sim-body">
            <div className="input-group">
              <label>Visitors: <b>{visitors.toLocaleString()}</b></label>
              <input 
                type="range" min="500" max="5000" step="100" 
                value={visitors} onChange={(e) => setVisitors(Number(e.target.value))}
                className="slider"
                style={{ 
                  background: `linear-gradient(90deg, ${resultColor} ${progress * 100}%, #e5e5ea ${progress * 100}%)` 
                }}
              />
              <div className="range-labels"><span>Small</span><span>Flagship</span></div>
            </div>

            <div className="result-group">
              <div className="result-label">Monthly Uplift</div>
              <div 
                className="result-value" 
                style={{ 
                  color: resultColor, 
                  transform: `scale(${1 + progress * 0.2})`,
                  textShadow: progress > 0.7 ? `0 0 20px ${glowColor}` : 'none'
                }}
              >
                + ₩{uplift.toLocaleString()}
              </div>
              <div className="result-desc">*Based on 45% Retention Rate</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="bento-grid-container" style={{ marginTop: 60 }}>
        {partnerValue.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </div>

      <style jsx>{`
        /* Glassmorphism Simulator */
        .simulator-glass {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 40px;
          border: 1px solid rgba(255,255,255,0.4);
          margin-bottom: 60px; max-width: 800px; margin-left: auto; margin-right: auto;
          transition: all 0.3s ease;
        }

        .sim-header { text-align: center; margin-bottom: 40px; }
        .sim-header h3 { font-size: 24px; font-weight: 700; color: #1d1d1f; margin-bottom: 8px; }
        .sim-header p { color: #86868b; font-size: 16px; word-break: keep-all; }
        
        .sim-body { display: flex; gap: 40px; align-items: center; justify-content: space-between; }
        
        .input-group { flex: 1; }
        .input-group label { display: block; font-size: 15px; color: #1d1d1f; margin-bottom: 16px; }
        .input-group label b { font-size: 20px; color: #1d1d1f; margin-left: 8px; }
        
        .slider { 
          -webkit-appearance: none; width: 100%; height: 8px; border-radius: 5px; outline: none; margin-bottom: 12px; 
          transition: background 0.1s; 
        }
        .slider::-webkit-slider-thumb { 
          -webkit-appearance: none; width: 32px; height: 32px; border-radius: 50%; background: #fff; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.2); cursor: grab; transition: transform 0.1s; 
          border: 1px solid rgba(0,0,0,0.05);
        }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .slider:active::-webkit-slider-thumb { cursor: grabbing; transform: scale(1.2); }
        
        .range-labels { display: flex; justify-content: space-between; font-size: 12px; color: #86868b; font-weight: 600; }
        
        .result-group { 
          background: rgba(255,255,255,0.8); padding: 24px 40px; border-radius: 16px; 
          text-align: center; min-width: 280px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); 
        }
        .result-label { font-size: 14px; font-weight: 600; color: #86868b; margin-bottom: 8px; text-transform: uppercase; }
        .result-value { font-size: 36px; font-weight: 800; margin-bottom: 6px; transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .result-desc { font-size: 11px; color: #a1a1a6; }

        @media (max-width: 768px) { .sim-body { flex-direction: column; gap: 30px; } .result-group { width: 100%; } }
      `}</style>
    </SectionShell>
  );
}
        ### 📄 components/sections/RevenueSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data, react`
* 🧩 **Component (Default):** `RevenueSection`
* ww **Hooks:** `useEffect`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { revenueLogic } from "@/content/data";
import { useState, useEffect } from "react";

export default function RevenueSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Auto-cycle logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === null || prev >= 2 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="revenue">
      <div className="container">
        
        {/* 🟢 [수정] Round Styling 강화: overflow-hidden 필수 */}
        <div className="revenue-bg">
          
          {/* ⚡ Background Circuit Grid */}
          <div className="circuit-grid-bg">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="20%" cy="20%" r="200" fill="rgba(0, 113, 227, 0.15)" filter="blur(80px)" />
              <circle cx="80%" cy="80%" r="200" fill="rgba(175, 82, 222, 0.15)" filter="blur(80px)" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="dark-header">
              <SectionHeader
                title="Logic Flow: 24시간 멈추지 않는 매출 회로"
                lead={<span style={{color: '#a1a1a6'}}>고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다. <br/>이 흐름은 지금도 멈추지 않고 매출을 만들고 있습니다.</span>}
              />
            </div>

            <div className="circuit-board">
              {revenueLogic.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`circuit-node ${activeStep === idx ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <ScrollReveal delay={idx * 150}>
                    <div className="logic-card glass-card">
                      <div className="card-header-row">
                         <div className="status-dot-wrapper">
                           <div className="status-dot" />
                           <div className="status-ping" />
                         </div>
                         <div className="card-icon"><Icon name={item.icon} /></div>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-desc">{item.desc}</p>
                      
                      {idx < revenueLogic.length - 1 && (
                        <div className="connector-line flowing">
                          <div className="energy-beam" />
                          <div className="arrow-head">▶</div>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 🟢 Rounded Box Styling */
        .revenue-bg {
          position: relative;
          background: #0d1117; 
          background-image: linear-gradient(180deg, #0d1117 0%, #161b22 100%);
          color: #fff;
          /* 핵심: 둥근 모서리와 넘침 방지 */
          border-radius: 48px; 
          overflow: hidden; 
          padding: 80px 40px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3);
          margin: 40px 0;
        }

        .circuit-grid-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .dark-header :global(h2) { color: #fff !important; }
        
        .circuit-board { display: flex; gap: 40px; align-items: flex-start; padding: 20px 0; position: relative; }
        .circuit-node { flex: 1; position: relative; }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border-radius: 24px; padding: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative; z-index: 2;
        }

        .circuit-node.active .glass-card {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 113, 227, 0.25);
          border-color: rgba(0, 113, 227, 0.5);
        }

        .card-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
        
        .status-dot-wrapper { position: relative; width: 8px; height: 8px; }
        .status-dot { width: 100%; height: 100%; border-radius: 50%; background: #333; }
        .circuit-node.active .status-dot { background: #00ff41; box-shadow: 0 0 10px #00ff41; }
        .status-ping { position: absolute; inset: -4px; border-radius: 50%; border: 1px solid #00ff41; opacity: 0; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .circuit-node.active .status-ping { opacity: 1; }
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }

        .card-icon { width: 44px; height: 44px; background: rgba(255,255,255,0.1); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #fff; transition: 0.3s; }
        .circuit-node.active .card-icon { background: #0071e3; color: #fff; box-shadow: 0 0 20px rgba(0,113,227,0.4); }

        .card-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; color: #fff; }
        .card-desc { font-size: 14px; color: #a1a1a6; line-height: 1.6; }

        .connector-line { position: absolute; top: 50%; left: 100%; width: 40px; height: 4px; background: rgba(255,255,255,0.1); transform: translateY(-50%); z-index: 1; overflow: hidden; }
        .energy-beam { width: 50%; height: 100%; background: linear-gradient(90deg, transparent, #00e5ff, transparent); animation: beam-flow 1.5s infinite linear; filter: drop-shadow(0 0 5px #00e5ff); }
        .arrow-head { position: absolute; right: -6px; top: -7px; font-size: 12px; color: rgba(255,255,255,0.2); }
        .circuit-node.active + div .arrow-head { color: #00e5ff; }

        @keyframes beam-flow { 0% { transform: translateX(-150%); } 100% { transform: translateX(250%); } }

        @media (max-width: 900px) {
          .revenue-bg { padding: 40px 24px; border-radius: 32px; }
          .circuit-board { flex-direction: column; gap: 40px; }
          .connector-line { top: 100%; left: 50%; width: 4px; height: 40px; transform: translateX(-50%); }
          .energy-beam { width: 100%; height: 50%; background: linear-gradient(180deg, transparent, #00e5ff, transparent); animation: beam-flow-vert 1.5s infinite linear; }
          @keyframes beam-flow-vert { 0% { transform: translateY(-150%); } 100% { transform: translateY(250%); } }
          .arrow-head { right: -4px; top: auto; bottom: -10px; transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/AppleWalletSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/useLanguage`
* 🧩 **Component (Default):** `AppleWalletSection`
* ww **Hooks:** `useLanguage, useState`

        ```typescript
        "use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useLanguage } from "@/lib/useLanguage";

type Tier = "basic" | "fan" | "gold";

export default function AppleWalletSection() {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [tier, setTier] = useState<Tier>("fan"); 

  const tierConfig = {
    basic: { 
      name: "Basic Fan", 
      color: "#1d1d1f", 
      bgClass: "basic-bg", 
      points: "150",
      iconColor: "#86868b",
      particleColor: null
    },
    fan: { 
      name: "Platinum Fan", 
      color: "#ffffff", 
      bgClass: "fan-bg", 
      points: "850",
      iconColor: "rgba(255,255,255,0.7)",
      particleColor: "rgba(255,255,255,0.4)" // White Dust
    },
    gold: { 
      name: "Golden Fan", 
      color: "#1d1d1f", 
      bgClass: "gold-bg", 
      points: "2,400",
      iconColor: "rgba(0,0,0,0.6)",
      particleColor: "#FFD700" // 🟢 Golden Dust
    },
  };

  const currentTier = tierConfig[tier];

  return (
    <section className="section-wallet">
      <div className="container">
        <div className="layout-split">
          {/* Left: Text Context */}
          <div className="text-col">
            <ScrollReveal>
              <div className="badge-pill">{t("wallet.badge")}</div>
              <h2 className="h2-wallet">
                <span className="text-gradient-gold">{t("wallet.title")}</span>
              </h2>
              <p className="p-wallet">{t("wallet.desc")}</p>
              
              <div className="feature-list">
                <div className="f-item">
                  <div className="f-icon"><Icon name="spark" /></div>
                  <div className="f-text"><h4>{t("wallet.d1.title")}</h4><p>{t("wallet.d1.desc")}</p></div>
                </div>
                <div className="f-item">
                  <div className="f-icon"><Icon name="map" /></div>
                  <div className="f-text"><h4>{t("wallet.d2.title")}</h4><p>{t("wallet.d2.desc")}</p></div>
                </div>
                
                {/* Tier Switcher */}
                <div className="tier-switcher-box">
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
                    <span className="switcher-label">Design Preview:</span>
                    <span className="market-link">Visit Skin Market ›</span>
                  </div>
                  <div className="switcher-btns">
                    {(["basic", "fan", "gold"] as Tier[]).map((t) => (
                      <button 
                        key={t}
                        onClick={() => setTier(t)}
                        className={`tier-btn ${tier === t ? "active" : ""}`}
                      >
                        {t === 'fan' ? 'Platinum' : t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: 3D Card Visual */}
          <div className="visual-col">
            <ScrollReveal delay={200}>
              <div className="wallet-container" onClick={() => setIsFlipped(!isFlipped)}>
                <div className="wallet-card back-card-layer" />

                <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
                  
                  {/* [Front Side] */}
                  <div className="front">
                    <div className={`wallet-card main-pass ${currentTier.bgClass}`}>
                      
                      {/* 🟢 Particles (Gold or White) */}
                      {currentTier.particleColor && (
                        <div className="particles-container">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`particle p${i}`} 
                              style={{ background: currentTier.particleColor }}
                            />
                          ))}
                        </div>
                      )}

                      {/* 🟢 Restored Shine Overlay */}
                      {tier !== 'basic' && <div className="holo-shine" />}
                      
                      <div className="pass-header">
                        <div className="pass-logo" style={{ color: currentTier.color }}>
                          <span className="logo-dot" style={{ background: currentTier.color }} />
                          forFAN
                        </div>
                        <div className="live-status">
                          <span className="status-dot pulse" />
                          <span style={{ color: currentTier.color, opacity: 0.9 }}>Open Now</span>
                        </div>
                      </div>
                      
                      <div className="pass-body" style={{ color: currentTier.color }}>
                        <div className="pass-row">
                          <div className="pass-field">
                            <label style={{ color: currentTier.iconColor }}>GRADE</label>
                            <div className="value">{currentTier.name}</div>
                          </div>
                          
                          <div className="profile-avatar">
                            <div className="avatar-circle">😎</div>
                          </div>
                        </div>

                        <div className="pass-row">
                          <div className="pass-field">
                            <label style={{ color: currentTier.iconColor }}>LATEST MOMENT</label>
                            <div className="value">Hongdae Flagship</div>
                          </div>
                          <div className="pass-field right">
                            <label style={{ color: currentTier.iconColor }}>POINTS</label>
                            <div className="value">{currentTier.points}</div>
                          </div>
                        </div>
                      </div>

                      <div className="pass-barcode">
                        {[...Array(24)].map((_, i) => (
                          <div key={i} className="bar-line" style={{ height: i % 2 === 0 ? '100%' : '80%', width: i % 3 === 0 ? 3 : 1, opacity: 0.8 }} />
                        ))}
                      </div>
                      
                      <div className="skin-tag" style={{ color: currentTier.color }}>🎨 Customize Skin</div>
                    </div>
                  </div>

                  {/* [Back Side] */}
                  <div className="back">
                    <div className="wallet-card back-pass">
                      <div className="qr-section">
                        <div className="qr-box">
                          <div className="qr-pattern" />
                          <div className="qr-logo"><span className="logo-dot" /></div>
                        </div>
                        <div className="qr-label">{t("wallet.back.qr")}</div>
                      </div>
                      <div className="back-info">
                        <div className="info-row"><span className="label">{t("wallet.back.visit")}</span><span className="val">{t("wallet.back.visit_val")}</span></div>
                        <div className="divider" />
                        <div className="info-row"><span className="label">{t("wallet.back.next")}</span><span className="val highlight">{t("wallet.back.next_val")}</span></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="tap-hint">Tap to Flip ↻</div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ... Layout Styles ... */
        .section-wallet { padding: 100px 0; background: #000; color: #fff; border-radius: 40px; margin: 40px 0; overflow: hidden; position: relative; }
        .layout-split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .badge-pill { display: inline-block; font-size: 11px; font-weight: 700; color: #FFD700; border: 1px solid rgba(255, 215, 0, 0.3); padding: 6px 12px; border-radius: 99px; margin-bottom: 20px; letter-spacing: 0.05em; text-transform: uppercase; }
        .h2-wallet { font-size: 48px; font-weight: 700; line-height: 1.1; margin-bottom: 24px; }
        .text-gradient-gold { background: linear-gradient(135deg, #FFD700 0%, #FDB931 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p-wallet { font-size: 18px; color: #86868b; line-height: 1.6; margin-bottom: 40px; word-break: keep-all; }

        .feature-list { display: flex; flex-direction: column; gap: 24px; margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px; }
        .f-item { display: flex; gap: 16px; align-items: flex-start; }
        .f-icon { min-width: 36px; height: 36px; background: rgba(255,255,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #FFD700; }
        .f-text h4 { font-size: 16px; font-weight: 700; margin: 0 0 4px 0; color: #fff; }
        .f-text p { font-size: 14px; color: #a1a1a6; margin: 0; line-height: 1.5; word-break: keep-all; }

        .tier-switcher-box { margin-top: 20px; background: rgba(255,255,255,0.05); padding: 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
        .switcher-label { font-size: 11px; color: #86868b; font-weight: 700; text-transform: uppercase; }
        .market-link { font-size: 11px; color: #0071e3; cursor: pointer; font-weight: 600; }
        .switcher-btns { display: flex; gap: 8px; }
        .tier-btn { flex: 1; padding: 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #86868b; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .tier-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .tier-btn.active { background: #fff; color: #000; border-color: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }

        .visual-col { display: flex; flex-direction: column; align-items: center; position: relative; }
        .wallet-container { position: relative; width: 300px; height: 460px; perspective: 1000px; cursor: pointer; }
        .flipper { width: 100%; height: 100%; position: relative; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
        .flipper.flipped { transform: rotateY(180deg); }
        .front, .back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 20px; }
        .back { transform: rotateY(180deg); }
        .back-card-layer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #333; border-radius: 20px; transform: translateY(16px) scale(0.95); opacity: 0.5; z-index: 0; }
        .tap-hint { margin-top: 30px; color: #555; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

        /* 🟢 Card Styling */
        .wallet-card { 
          width: 100%; height: 100%; border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; 
          transform: translateZ(0); border: 1px solid rgba(255,255,255,0.1); 
        }

        .basic-bg { background: linear-gradient(135deg, #f5f5f7 0%, #d2d2d7 100%); }

        /* 🟢 Platinum: Metal Sheen (Restored) */
        .fan-bg { 
          background: linear-gradient(135deg, #3a3a3c 0%, #1c1c1e 100%);
          border: 1px solid rgba(255,255,255,0.2);
        }
        
        /* 🟢 Gold: Liquid Flow + Border Pulse */
        .gold-bg { 
          background: linear-gradient(45deg, #FFD700, #FDB931, #E5C100, #FFD700); 
          background-size: 300% 300%; 
          animation: liquid-flow 6s ease infinite, border-pulse 3s infinite alternate; 
          box-shadow: 0 20px 60px rgba(255,215,0,0.3); 
        }

        /* 🟢 Shine Restoration (No mix-blend-mode for better visibility) */
        .holo-shine { 
          position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; pointer-events: none; transform: rotate(30deg); 
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.1) 55%, transparent 70%);
          background-size: 200% 100%;
          animation: shine-move 4s infinite linear;
          z-index: 10;
        }

        @keyframes shine-move { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @keyframes liquid-flow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes border-pulse { from { border-color: rgba(255,215,0,0.3); } to { border-color: rgba(255,255,255,0.8); } }

        .pass-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 5; }
        .pass-logo { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 18px; transition: color 0.3s; }
        .logo-dot { width: 10px; height: 10px; border-radius: 50%; transition: background 0.3s; }
        
        .live-status { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; background: rgba(255,255,255,0.2); padding: 4px 8px; border-radius: 99px; backdrop-filter: blur(4px); }
        .status-dot { width: 6px; height: 6px; background: #34C759; border-radius: 50%; }
        .status-dot.pulse { animation: pulse-green 2s infinite; }
        @keyframes pulse-green { 0% { box-shadow: 0 0 0 0 rgba(52,199,89, 0.7); } 70% { box-shadow: 0 0 0 4px rgba(52,199,89, 0); } 100% { box-shadow: 0 0 0 0 rgba(52,199,89, 0); } }

        .pass-body { padding: 20px 24px; flex: 1; transition: color 0.3s; position: relative; z-index: 5; }
        .pass-row { display: flex; justify-content: space-between; margin-bottom: 20px; align-items: flex-end; }
        .pass-field label { display: block; font-size: 10px; margin-bottom: 4px; font-weight: 700; letter-spacing: 0.5px; }
        .pass-field .value { font-size: 17px; font-weight: 700; letter-spacing: -0.02em; }
        .pass-field.right { text-align: right; }

        .profile-avatar { width: 44px; height: 44px; background: rgba(255,255,255,0.3); border-radius: 50%; padding: 2px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        .avatar-circle { width: 100%; height: 100%; background: #f5f5f7; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; }

        /* 🟢 Particles */
        .particles-container { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }
        .particle { position: absolute; width: 4px; height: 4px; border-radius: 50%; opacity: 0.4; animation: float-particle 4s infinite linear; }
        .p0 { top: 20%; left: 20%; animation-duration: 6s; }
        .p1 { top: 80%; left: 80%; animation-duration: 5s; animation-delay: 1s; }
        .p2 { top: 40%; left: 60%; animation-duration: 7s; animation-delay: 2s; width: 2px; height: 2px; }
        .p3 { top: 70%; left: 10%; animation-duration: 4s; }
        .p4 { top: 10%; left: 90%; animation-duration: 8s; width: 3px; height: 3px; }
        .p5 { top: 50%; left: 50%; animation-duration: 9s; width: 2px; height: 2px; }
        @keyframes float-particle { 
          0% { transform: translateY(0) translateX(0); opacity: 0; } 
          50% { opacity: 0.8; } 
          100% { transform: translateY(-40px) translateX(20px); opacity: 0; } 
        }

        .pass-barcode { height: 50px; background: rgba(255,255,255,0.9); margin: 0 20px 16px; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 3px; padding: 0 10px; position: relative; z-index: 5; }
        .bar-line { background: #000; }
        
        .skin-tag { font-size: 10px; text-align: center; margin-bottom: 12px; opacity: 0.6; font-weight: 600; letter-spacing: 0.5px; position: relative; z-index: 5; }

        /* Back Styles */
        .back-pass { background: #1c1c1e; border: 1px solid rgba(255,255,255,0.1); padding: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .qr-section { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 40px; }
        .qr-box { width: 140px; height: 140px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative; }
        .qr-pattern { width: 120px; height: 120px; background-image: radial-gradient(#000 2px, transparent 2px); background-size: 10px 10px; opacity: 0.8; }
        .qr-logo { position: absolute; width: 30px; height: 30px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
        .qr-label { font-size: 12px; color: #86868b; font-weight: 500; letter-spacing: 0.5px; }
        .back-info { width: 100%; display: flex; flex-direction: column; gap: 16px; }
        .info-row { display: flex; justify-content: space-between; align-items: center; font-size: 14px; }
        .info-row .label { color: #86868b; }
        .info-row .val { color: #fff; font-weight: 600; }
        .info-row .val.highlight { color: #FFD700; }
        .divider { height: 1px; background: rgba(255,255,255,0.1); width: 100%; }

        @media (max-width: 900px) { .layout-split { grid-template-columns: 1fr; gap: 40px; } .visual-col { margin-top: 20px; } .h2-wallet { font-size: 36px; } }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/QuietRewardsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `QuietRewardsSection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import { quietRewardsCopy } from "@/content/data";
import Icon from "../Icon";
import ScrollReveal from "../ScrollReveal";

export default function QuietRewardsSection() {
  return (
    <section className="section" id="quiet">
      <div className="container">
        {/* 🟢 [적용] 화려한 골드 테마 (theme-gold) - 직접 div에 적용 */}
        <div className="section-island theme-gold">
          
          {/* 🪙 Background Giant Coin (섹션 내부로 이동) */}
          <div className="giant-coin-bg">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.15" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
              <text x="100" y="115" fontSize="60" fontWeight="bold" textAnchor="middle" fill="currentColor" opacity="0.1" style={{ fontFamily: 'serif' }}>4</text>
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <SectionHeader
              title="“Quiet Rewards” — 4CUT Coin"
              lead="발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요."
            />

            <div className="reveal-grid">
              {quietRewardsCopy.map((c, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="reveal-card">
                    <div className="blockchain-mesh" />
                    <div className="icon-header">
                      <div className={`coin-visual coin-${idx}`}>
                        <span className="coin-face">$</span>
                      </div>
                      <span className="card-title">{c.title}</span>
                    </div>
                    
                    <div className="frost-container">
                      <div className="hidden-content">
                        <div className="hash-code">
                          <span className="dot active"/>
                          0x7F...{300 + idx * 127}
                        </div>
                        <div className="text-lines">
                          {c.lines.map((line, i) => (
                            <p key={i} className="line-item">{line}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div className="frost-overlay">
                        <div className="lock-icon"><Icon name="lock" /></div>
                        <span className="hint-text">Hover to Decrypt</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .giant-coin-bg {
          position: absolute; top: -100px; right: -100px;
          width: 600px; height: 600px;
          color: #DAA520;
          animation: spin-slow 60s linear infinite;
          pointer-events: none; z-index: 0;
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ... 기존 스타일 유지 ... */
        .reveal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 900px) { .reveal-grid { grid-template-columns: 1fr; } }
        .reveal-card { background: #fff; border-radius: 28px; padding: 32px; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 10px 40px rgba(0,0,0,0.04); min-height: 360px; display: flex; flex-direction: column; position: relative; overflow: hidden; transition: transform 0.3s ease; }
        .reveal-card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(218, 165, 32, 0.15); border-color: rgba(218, 165, 32, 0.3); }
        .blockchain-mesh { position: absolute; inset: 0; background-image: radial-gradient(#DAA520 1px, transparent 1px); background-size: 24px 24px; opacity: 0.1; z-index: 0; }
        .icon-header { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 24px; position: relative; z-index: 1; }
        .coin-visual { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.5); }
        .coin-0 { background: linear-gradient(135deg, #FFD700, #FDB931); color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .coin-1 { background: linear-gradient(135deg, #E0E0E0, #BDBDBD); color: #fff; }
        .coin-2 { background: linear-gradient(135deg, #f6d365, #fda085); color: #fff; }
        .card-title { font-size: 20px; font-weight: 700; color: #1d1d1f; letter-spacing: -0.02em; }
        .frost-container { position: relative; flex: 1; border-radius: 20px; overflow: hidden; background: #fbfbfd; border: 1px solid rgba(0,0,0,0.03); z-index: 1; }
        .hidden-content { padding: 24px; height: 100%; display: flex; flex-direction: column; justify-content: center; }
        .hash-code { font-family: monospace; font-size: 11px; color: #86868b; background: rgba(0,0,0,0.05); padding: 4px 8px; border-radius: 6px; width: fit-content; margin: 0 auto 16px; display: flex; align-items: center; gap: 6px; }
        .dot { width: 6px; height: 6px; background: #34C759; border-radius: 50%; }
        .dot.active { animation: blink 2s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .text-lines { display: flex; flex-direction: column; gap: 10px; text-align: center; }
        .line-item { font-size: 15px; color: #1d1d1f; font-weight: 600; line-height: 1.5; margin: 0; }
        .line-item::before { content: "“"; color: #DAA520; margin-right: 4px; }
        .line-item::after { content: "”"; color: #DAA520; }
        .frost-overlay { position: absolute; inset: 0; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; transition: opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1); z-index: 10; }
        .reveal-card:hover .frost-overlay { opacity: 0; pointer-events: none; }
        .lock-icon { color: #86868b; opacity: 0.5; }
        .hint-text { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #86868b; border: 1px solid #d2d2d7; padding: 6px 14px; border-radius: 99px; background: rgba(255,255,255,0.9); }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/ExperienceSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, @/content/data, @/content/types`
* 🧩 **Component (Default):** `ExperienceSection`
* ww **Hooks:** `useEffect, useState, useMemo`

        ```typescript
        "use client";

import { useMemo, useState, useEffect } from "react";
import SectionHeader from "../SectionHeader";
import Icon from "../Icon";
import { experienceItems } from "@/content/data";
import { Phase } from "@/content/types";

// ScreenContent 컴포넌트는 이전과 동일하므로 생략하거나 기존 코드를 유지하세요.
const ScreenContent = ({ phase }: { phase: Phase }) => {
    // ... (이전 코드의 ScreenContent 내용 그대로 사용)
    if (phase === "Before") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-header">Today's Pick</div>
            <div className="mock-card big"><Icon name="spark" /><span>Romantic Mood</span></div>
            <div className="mock-row"><div className="mock-card small" /><div className="mock-card small" /></div>
            <div className="mock-msg">촬영 전, 설렘을 미리 확인하세요.</div>
          </div>
        );
      }
      if (phase === "During") {
        return (
          <div className="screen-inner fade-in">
            <div className="mock-cam-view">
              <div className="focus-ring" />
              <div className="pose-tip"><Icon name="hint" /><span>고개를 살짝 왼쪽으로 15°</span></div>
            </div>
            <div className="mock-controls"><div className="shutter-btn" /></div>
            <div className="mock-msg">망설임 없는 완벽한 포즈 가이드.</div>
          </div>
        );
      }
      return (
        <div className="screen-inner fade-in">
          <div className="mock-header">Your Memories</div>
          <div className="mock-list">
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '60%'}}/><span style={{width: '40%'}}/></div></div>
            <div className="mock-item"><div className="mock-thumb" /><div className="mock-text-lines"><span style={{width: '70%'}}/></div></div>
          </div>
          <div className="mock-toast"><Icon name="gift" /><span>Quiet Reward Arrived</span></div>
        </div>
      );
};

export default function ExperienceSection() {
  const phases: Phase[] = ["Before", "During", "After"];
  const [tab, setTab] = useState<Phase>("Before");
  const [isPaused, setIsPaused] = useState(false);
  
  const filtered = useMemo(() => experienceItems.filter((x) => x.phase === tab), [tab]);

  // 🔄 Auto-Play Logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTab((prev) => {
        const idx = phases.indexOf(prev);
        const nextIdx = (idx + 1) % phases.length;
        return phases[nextIdx];
      });
    }, 4000); // 4초마다 전환

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    // SectionShell은 page.tsx에서 감싸고 있으므로 여기선 div로 처리
    <div 
      className="experience-inner"
      onMouseEnter={() => setIsPaused(true)} // 마우스 올리면 일시정지
      onMouseLeave={() => setIsPaused(false)} // 떼면 다시 재생
    >
      <div className="container">
        <SectionHeader
          title="경험의 흐름: Before · During · After"
          lead="경험은 멈추지 않고 흐릅니다. 앱 화면 속에서 시간의 흐름에 따라 변화하는 가치를 확인하세요."
        />

        <div className="exp-layout">
          {/* Left: Controls with Progress */}
          <div className="exp-controls" style={{ minHeight: "420px" }}>
            <div className="tab-pills">
              {phases.map((p) => (
                <button
                  key={p}
                  onClick={() => setTab(p)}
                  className={`tab-pill ${tab === p ? "active" : ""}`}
                >
                  <span className="tab-text">{p}</span>
                  {/* ⏳ Progress Bar (Active일 때만 보임) */}
                  {tab === p && !isPaused && (
                    <div className="progress-track">
                      <div className="progress-bar" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="exp-detail-list">
              {filtered.map((item) => (
                <div key={item.id} className="exp-detail-card fade-in-card">
                  <div className="detail-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h4 className="detail-title">{item.title}</h4>
                    <p className="detail-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: iPhone Mockup */}
          <div className="exp-visual">
            <div className="iphone-frame">
              <div className="notch" />
              <div className="screen">
                <ScreenContent phase={tab} />
              </div>
            </div>
            
            {/* Background Glow */}
            <div className={`visual-glow ${tab.toLowerCase()}`} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-inner { width: 100%; position: relative; }

        .exp-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px;
          align-items: start; margin-top: 40px;
        }

        /* Tabs with Progress */
        .tab-pills {
          display: flex; gap: 8px; margin-bottom: 40px;
          background: rgba(0,0,0,0.05); padding: 4px; border-radius: 99px;
          width: fit-content;
        }
        .tab-pill {
          position: relative; overflow: hidden;
          padding: 10px 24px; border-radius: 99px; border: none; font-size: 14px; font-weight: 600; cursor: pointer;
          background: transparent; color: #86868b; transition: color 0.3s;
        }
        .tab-pill.active { background: #fff; color: #1d1d1f; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        
        .tab-text { position: relative; z-index: 2; }

        /* ⏳ Progress Animation */
        .progress-track {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 3px;
          background: transparent;
        }
        .progress-bar {
          height: 100%; background: #0071e3; width: 0;
          animation: progress 4s linear forwards;
        }
        @keyframes progress { from { width: 0; } to { width: 100%; } }

        /* Detail Cards Animation */
        .exp-detail-card {
          background: #fff; padding: 20px; border-radius: 20px;
          display: flex; gap: 16px; margin-bottom: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .fade-in-card { animation: fadeInUp 0.5s ease-out; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .detail-icon { min-width: 40px; height: 40px; background: #f5f5f7; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #1d1d1f; }
        .detail-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; }
        .detail-desc { margin: 0; font-size: 14px; color: #86868b; line-height: 1.5; }

        /* iPhone Visuals (Same as before) */
        .exp-visual { position: relative; display: flex; justify-content: center; }
        .iphone-frame {
          width: 280px; height: 560px; background: #000; border-radius: 40px; padding: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2); position: relative; z-index: 2; border: 4px solid #333;
        }
        .notch { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); width: 80px; height: 20px; background: #000; border-radius: 12px; z-index: 10; }
        .screen { width: 100%; height: 100%; background: #fff; border-radius: 28px; overflow: hidden; position: relative; display: flex; flex-direction: column; }
        
        .screen-inner { padding: 40px 20px; height: 100%; display: flex; flex-direction: column; }
        .fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .mock-header { font-size: 24px; font-weight: 800; margin-bottom: 20px; }
        .mock-card { background: #f5f5f7; border-radius: 16px; }
        .mock-card.big { height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; font-weight: 600; color: #555; margin-bottom: 12px; }
        .mock-row { display: flex; gap: 12px; margin-bottom: 20px; }
        .mock-card.small { height: 80px; flex: 1; }
        .mock-msg { margin-top: auto; font-size: 12px; color: #86868b; text-align: center; }

        .mock-cam-view { flex: 1; background: #333; border-radius: 16px; position: relative; margin-bottom: 20px; }
        .focus-ring { width: 80px; height: 80px; border: 1px solid #fff; border-radius: 50%; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); opacity: 0.5; }
        .pose-tip { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.6); color: #fff; padding: 8px 16px; border-radius: 99px; font-size: 12px; display: flex; gap: 6px; white-space: nowrap; }
        .shutter-btn { width: 60px; height: 60px; border-radius: 50%; border: 4px solid #ccc; margin: 0 auto; }

        .mock-item { display: flex; gap: 12px; margin-bottom: 16px; }
        .mock-thumb { width: 50px; height: 50px; background: #eee; border-radius: 12px; }
        .mock-text-lines { flex: 1; display: flex; flex-direction: column; gap: 6px; justify-content: center; }
        .mock-text-lines span { height: 8px; background: #f5f5f7; border-radius: 4px; display: block; }
        .mock-toast { background: #000; color: #fff; padding: 10px 16px; border-radius: 99px; display: flex; align-items: center; gap: 8px; font-size: 12px; margin-top: auto; width: fit-content; align-self: center; }

        .visual-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 350px; height: 600px; z-index: 1; filter: blur(60px); opacity: 0.6; transition: background 0.5s; }
        .visual-glow.before { background: radial-gradient(circle, #FFA500 0%, transparent 70%); }
        .visual-glow.during { background: radial-gradient(circle, #0071e3 0%, transparent 70%); }
        .visual-glow.after { background: radial-gradient(circle, #AF52DE 0%, transparent 70%); }

        @media (max-width: 900px) { .exp-layout { grid-template-columns: 1fr; } .exp-visual { margin-top: 40px; } }
      `}</style>
    </div>
  );
}
        ### 📄 components/sections/AppleIdentitySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `AppleIdentitySection`
* ww **Hooks:** `useState, useDynamicIsland`

        ```typescript
        "use client";

import { useState, useRef } from "react";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useDynamicIsland } from "../DynamicIsland";

export default function AppleIdentitySection() {
  const { triggerIsland } = useDynamicIsland();
  
  // 🔦 Spotlight & 3D Tilt Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  // 3D Tilt 상태
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const div = containerRef.current;
    const rect = div.getBoundingClientRect();
    
    // 마우스 좌표 (컨테이너 기준)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight 위치 업데이트
    setPosition({ x, y });
    setOpacity(1);

    // 3D Tilt 계산 (중앙을 0,0으로 기준)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 기울기 강도 조절 (너무 심하면 어지러우니 미세하게)
    const rotateX = ((y - centerY) / centerY) * -2; // 상하 (최대 2도)
    const rotateY = ((x - centerX) / centerX) * 2;  // 좌우 (최대 2도)

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTilt({ x: 0, y: 0 }); // 원위치
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-rounded-bg identity-bg">
        <ScrollReveal>
          <div className="header-group">
            <h2 className="title-grad">Beyond the Touch.</h2>
            <p className="lead-text">
              소프트웨어를 넘어, <b>Taptic Engine</b>과 <b>Dynamic Island</b>까지.<br />
              인생네컷 디바이스의 하드웨어 감각을 앱 경험으로 연결합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 🔦 Container: Spotlight + 3D Tilt Wrapper */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="grid-pro spotlight-group"
          style={{
            // 3D 변환을 위한 원근감 설정
            perspective: "1000px" 
          }}
        >
          {/* 🔦 Spotlight Overlay */}
          <div 
            className="spotlight-overlay"
            style={{
              opacity,
              background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
              // 조명은 기울어지지 않고 평면에 머물도록 설정 (선택사항)
              transform: `translateZ(0)`
            }}
          />

          {/* 🧊 3D Tilt 적용 그룹 */}
          <div 
            className="tilt-layer"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.1s ease-out" // 부드러우면서 즉각적인 반응
            }}
          >
            {/* Card 1 */}
            <ScrollReveal delay={100}>
              <div 
                className="card-pro card-large clickable"
                onClick={() => triggerIsland("Quiet Reward", "기분 좋은 햅틱과 함께 적립되었습니다.", "spark")}
              >
                <div className="card-border" />
                <div className="content">
                  <div className="icon-badge"><Icon name="spark" /></div>
                  <h3>Feel the Moment</h3>
                  <p>리워드가 쌓이는 순간, 기분 좋은 미세 진동으로 완성감을 전달합니다.</p>
                </div>
                
                {/* Waveform Logic (Fixed Hydration) */}
                <div className="waveform-viz">
                  {[...Array(20)].map((_, i) => {
                    const rawHeight = 15 + Math.abs(Math.sin((i + 1) * 12.5)) * 50;
                    const height = rawHeight.toFixed(1); 
                    const delay = (i * 0.05).toFixed(2);
                    return (
                      <div 
                        key={i} 
                        className="wave-bar" 
                        style={{ animationDelay: `${delay}s`, height: `${height}%` }} 
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <div className="sub-grid">
              {/* Card 2 */}
              <ScrollReveal delay={200}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Nearby Frame", "50m 앞, 홍대 매장이 있습니다.", "map")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="clock" /></div>
                    <h3>Always Glancable</h3>
                    <p>앱을 열지 않아도, 잠금 화면과 다이내믹 아일랜드에서 대기 순서를 확인합니다.</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal delay={300}>
                <div 
                  className="card-pro clickable"
                  onClick={() => triggerIsland("Data Protected", "얼굴 데이터는 서버에 전송되지 않습니다.", "lock")}
                >
                  <div className="card-border" />
                  <div className="content">
                    <div className="icon-badge"><Icon name="mood" /></div>
                    <h3>Privacy First</h3>
                    <p>얼굴 데이터는 저장되지 않습니다. 오직 취향 데이터만 기기에 남습니다.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      </div>

      <style jsx>{`
        .identity-bg {
          background: #000000;
          padding: 100px 0;
          position: relative;
          color: #f5f5f7;
          border-radius: 40px;
          margin: 60px 0;
          overflow: hidden;
        }
        
        .header-group { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        
        .title-grad {
          font-size: 56px; font-weight: 700;
          background: linear-gradient(135deg, #fff 40%, #6e6e73);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          margin: 0 0 20px; letter-spacing: -0.04em;
        }
        .lead-text { font-size: 22px; color: #86868b; font-weight: 400; line-height: 1.5; }
        .lead-text b { color: #f5f5f7; }

        .grid-pro {
          position: relative;
          /* 3D Context */
          transform-style: preserve-3d;
        }

        .tilt-layer {
          display: flex;
          flex-direction: column;
          gap: 20px;
          /* 3D Context 유지 */
          transform-style: preserve-3d;
        }

        .sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .spotlight-overlay {
          pointer-events: none;
          position: absolute;
          inset: -100px; /* 여유 있게 확장 */
          z-index: 0;
          transition: opacity 0.3s;
        }

        .card-pro {
          background: rgba(28,28,30, 0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: 40px;
          position: relative; 
          backdrop-filter: blur(20px);
          overflow: hidden; min-height: 320px;
          display: flex; flex-direction: column; justify-content: space-between;
          cursor: pointer;
          transition: background 0.3s ease, border-color 0.3s ease;
          /* 3D 깊이감 */
          transform: translateZ(20px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .card-border {
          position: absolute; inset: 0; border-radius: 24px; padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          pointer-events: none;
        }

        .card-pro:hover {
          background: rgba(44,44,46, 0.6);
          border-color: rgba(255,255,255,0.2);
        }
        .card-pro:active {
           transform: translateZ(10px) scale(0.98); /* 클릭 시 살짝 들어가는 느낌 */
        }

        .card-large { flex-direction: row; align-items: center; }

        .content { position: relative; z-index: 2; }
        .icon-badge {
          width: 52px; height: 52px; background: #fff; color: #000;
          border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(255,255,255,0.15);
        }
        .card-pro h3 { font-size: 26px; margin: 0 0 12px; color: #fff; letter-spacing: -0.01em; }
        .card-pro p { font-size: 17px; color: #a1a1a6; line-height: 1.6; margin: 0; max-width: 90%; }
        
        .waveform-viz { display: flex; align-items: center; gap: 6px; height: 80px; margin-left: auto; padding-left: 40px; opacity: 0.8; }
        .wave-bar { width: 6px; background: rgba(255,255,255,0.2); border-radius: 99px; animation: bar-dance 1.4s infinite ease-in-out; }
        
        @keyframes bar-dance {
          0%, 100% { height: 20%; background: rgba(255,255,255,0.2); }
          50% { height: 100%; background: #0071e3; box-shadow: 0 0 20px rgba(0,113,227,0.8); }
        }

        @media (max-width: 768px) {
          .sub-grid { grid-template-columns: 1fr; }
          .card-large { flex-direction: column; align-items: flex-start; }
          .waveform-viz { margin: 40px auto 0; padding: 0; width: 100%; justify-content: center; }
          .title-grad { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/PrincipleSection.tsx
        > **Context Summary**
        * 🧩 **Component (Default):** `PrincipleSection`

        ```typescript
        "use client";

import ScrollReveal from "../ScrollReveal";

export default function PrincipleSection() {
  return (
    <section className="section-principle" id="principle">
      <div className="container">
        <div className="manifesto-wrapper">
          <ScrollReveal>
            <div className="label-badge">The First Principle</div>
          </ScrollReveal>
          
          <div className="manifesto-text">
            <ScrollReveal delay={100}>
              <h2 className="line">우리는 기능을</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 className="line outline">팔지 않습니다.</h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <h2 className="line highlight">경험의 질을</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <h2 className="line">설계합니다.</h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <p className="manifesto-desc">
              고객이 앱을 열었을 때 느끼는 감정<br/>
              <b>설렘 → 확신 → 여운</b>을 연결하는 것.<br/>
              그것이 유일한 우리의 전략입니다.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .section-principle {
          padding: 120px 0;
          background: #111; /* Deep Black */
          color: #fff;
          border-radius: 40px; /* 섹션 자체를 둥글게 */
          margin: 40px 0;
          position: relative;
          overflow: hidden;
        }

        .manifesto-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 2; position: relative;
        }

        .label-badge {
          font-size: 12px; font-weight: 700; color: #86868b;
          text-transform: uppercase; letter-spacing: 2px;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 8px 16px; border-radius: 99px;
          margin-bottom: 40px;
        }

        .manifesto-text {
          display: flex; flex-direction: column; gap: 0;
          margin-bottom: 50px;
        }

        .line {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 900;
          line-height: 1.05;
          margin: 0;
          letter-spacing: -0.03em;
        }

        /* Outline Text Effect */
        .outline {
          color: transparent;
          -webkit-text-stroke: 2px rgba(255,255,255,0.4);
        }

        /* Highlight Gradient */
        .highlight {
          background: linear-gradient(90deg, #fff, #86868b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manifesto-desc {
          font-size: 20px;
          line-height: 1.6;
          color: #86868b;
          max-width: 480px;
        }
        .manifesto-desc b { color: #fff; }

        /* Background Glow Animation */
        .section-principle::before {
          content: "";
          position: absolute;
          top: 50%; left: 50%;
          width: 60%; height: 60%;
          background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/HeroSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react`
* 🧩 **Component (Default):** `HeroSection`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        "use client";

import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 섹션 전체 진행률 (0 ~ 1)
      let p = (windowHeight - top) / (windowHeight + height);
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    // 초기 로딩 시 강제 실행하여 텍스트 표시
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="hero-cinematic">
      <div className="sticky-wrapper">
        <div className="kicker">Brand Platform • Experience-first</div>
        
        {/* Scene 1: Technology doesn't sell. */}
        <div 
          className="msg-layer"
          style={{ 
            // 🟢 [수정] 0~20% 구간까지는 무조건 잘 보이게 유지
            opacity: progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) * 4), 
            transform: `translate(-50%, -50%) scale(${1 - progress * 0.3})`,
            // 블러도 천천히 먹임
            filter: `blur(${Math.max(0, (progress - 0.2) * 20)}px)`
          }}
        >
          <h1 className="hero-title">
            Technology<br />doesn’t sell.
          </h1>
        </div>

        {/* Scene 2: Experience does. */}
        <div 
          className="msg-layer"
          style={{ 
            // 40% 지점부터 나타나기 시작
            opacity: Math.min(1, Math.max(0, (progress - 0.4) * 3)),
            // 줌인 효과
            transform: `translate(-50%, -50%) scale(${1.8 - (Math.min(1, Math.max(0, (progress - 0.4) * 2)) * 0.8)})`,
            filter: `blur(${Math.max(0, (0.6 - progress) * 20)}px)`
          }}
        >
          <h1 className="hero-title accent">
            Experience<br />does.
          </h1>
        </div>

        <p className="sub-text" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.6) * 4)) }}>
          forFAN은 사진을 찍게 하지 않습니다.<br/>
          그 순간을 <b>‘의미 있게’</b> 남기게 합니다.
        </p>
      </div>

      <style jsx>{`
        .hero-cinematic {
          height: 200vh; /* 적절한 스크롤 길이 */
          position: relative;
          width: 100%;
        }
        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        .kicker { 
          position: absolute; top: 15%; left: 50%; transform: translateX(-50%);
          font-size: 13px; font-weight: 700; color: #86868b; 
          text-transform: uppercase; letter-spacing: 1px; z-index: 10;
        }
        
        .msg-layer {
          position: absolute;
          top: 50%; left: 50%;
          /* transform은 inline style이 제어 */
          width: 100%;
          text-align: center;
          pointer-events: none;
          will-change: opacity, transform, filter;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: clamp(50px, 9vw, 130px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #1d1d1f;
          margin: 0;
          white-space: nowrap;
        }
        .hero-title.accent {
          background: linear-gradient(135deg, #000 0%, #555 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-text {
          position: absolute;
          bottom: 15%; left: 50%; transform: translateX(-50%);
          font-size: 20px;
          line-height: 1.5;
          color: #86868b;
          text-align: center;
          width: 90%;
          max-width: 600px;
          transition: opacity 0.5s;
        }
        .sub-text b { color: #1d1d1f; }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/JourneySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `JourneySection`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import SectionGrid from "../SectionGrid";
import ItemCard from "../ItemCard";
import { journeyMap } from "@/content/data";

export default function JourneySection() {
  return (
    <div className="journey-inner">
      <SectionHeader
        title="forFAN 고객 여정 지도"
        lead={
          <>
            고객의 시간은 멈춰있지 않습니다.<br/>
            <b>Before(기대)</b>에서 <b>During(몰입)</b>을 거쳐 <b>After(여운)</b>까지, 끊김 없는 빛의 흐름을 설계합니다.
          </>
        }
      />

      <div className="journey-wrapper">
        
        {/* 🌟 The Active Pipeline (움직이는 경로) */}
        <div className="pipeline-container">
          {/* 1. Base Track (어두운 레일) */}
          <div className="track-rail" />

          {/* 2. Traveling Beam (이동하는 에너지) */}
          <div className="energy-packet">
            <div className="beam-head" />
            <div className="beam-tail" />
          </div>

          {/* 3. Nodes (정거장) - 색상 적용 */}
          <div className="node n-before">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-during">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
          <div className="node n-after">
            <div className="node-dot" />
            <div className="node-ripple" />
          </div>
        </div>

        {/* Cards Grid */}
        <SectionGrid>
          {journeyMap.map((j, idx) => (
            <ItemCard
              key={j.phase}
              span={4}
              delay={idx * 150} 
              item={{
                id: j.phase,
                tag: j.phase,
                title: j.title,
                desc: "단계별 핵심 목표를 달성합니다.",
                bullets: j.bullets,
                icon: j.icon,
              }}
            />
          ))}
        </SectionGrid>
      </div>

      <style jsx>{`
        .journey-inner { position: relative; width: 100%; }
        .journey-wrapper { position: relative; padding-top: 40px; }

        /* 🛤️ Pipeline System */
        .pipeline-container {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          margin-top: -20px; /* 카드 위쪽으로 배치 */
          z-index: 0;
        }

        /* 1. Track */
        .track-rail {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          background: rgba(0,0,0,0.06); border-radius: 4px;
        }

        /* 2. Traveling Beam Animation */
        .energy-packet {
          position: absolute; top: 0; left: 10%; right: 10%; height: 2px;
          overflow: hidden;
        }
        
        .beam-head {
          position: absolute; top: 0; width: 60px; height: 100%;
          background: #fff;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          filter: blur(1px);
          animation: travel-x 4s linear infinite;
        }
        
        .beam-tail {
          position: absolute; top: 0; width: 200px; height: 100%;
          /* 그라디언트: Orange -> Blue -> Purple 순으로 섞인 빛 */
          background: linear-gradient(90deg, transparent, #FF9500, #0071e3, #AF52DE, transparent);
          opacity: 0.8;
          animation: travel-x 4s linear infinite;
        }

        @keyframes travel-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); } /* 화면 밖으로 충분히 이동 */
        }

        /* 3. Nodes (Color Coded) */
        .node {
          position: absolute; top: -5px; width: 12px; height: 12px;
          display: flex; align-items: center; justify-content: center;
        }
        .node-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #fff;
          border: 2px solid #e5e5ea; z-index: 2; transition: all 0.3s;
        }
        .node-ripple {
          position: absolute; width: 20px; height: 20px; border-radius: 50%;
          opacity: 0; z-index: 1;
        }

        /* Positioning Nodes (Grid 중앙 정렬) */
        .n-before { left: 16.5%; }
        .n-during { left: 50%; transform: translateX(-50%); }
        .n-after  { left: 83.5%; }

        /* 🔥 Animations per Phase Color */
        /* Before: Orange */
        .n-before .node-dot { animation: hit-orange 4s infinite linear; animation-delay: 0.4s; }
        .n-before .node-ripple { border: 2px solid #FF9500; animation: ripple 4s infinite linear; animation-delay: 0.4s; }

        /* During: Blue */
        .n-during .node-dot { animation: hit-blue 4s infinite linear; animation-delay: 1.5s; }
        .n-during .node-ripple { border: 2px solid #0071e3; animation: ripple 4s infinite linear; animation-delay: 1.5s; }

        /* After: Purple */
        .n-after .node-dot { animation: hit-purple 4s infinite linear; animation-delay: 2.6s; }
        .n-after .node-ripple { border: 2px solid #AF52DE; animation: ripple 4s infinite linear; animation-delay: 2.6s; }

        @keyframes hit-orange { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #FF9500; background: #FF9500; } }
        @keyframes hit-blue   { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #0071e3; background: #0071e3; } }
        @keyframes hit-purple { 0%, 10% { transform: scale(1); border-color: #e5e5ea; background: #fff; } 5% { transform: scale(1.5); border-color: #AF52DE; background: #AF52DE; } }

        @keyframes ripple { 
          0% { transform: scale(1); opacity: 1; } 
          100% { transform: scale(3); opacity: 0; } 
        }

        @media (max-width: 900px) {
          .pipeline-container { width: 2px; height: 100%; left: 50%; top: 0; margin-top: 0; transform: translateX(-50%); }
          .track-rail { width: 2px; height: 100%; top: 0; left: 0; }
          .energy-packet { width: 2px; height: 100%; top: 0; left: 0; }
          .beam-head { width: 2px; height: 60px; animation: travel-y 4s linear infinite; }
          .beam-tail { width: 2px; height: 200px; background: linear-gradient(180deg, transparent, #FF9500, #0071e3, #AF52DE, transparent); animation: travel-y 4s linear infinite; }
          
          .node { left: -5px !important; transform: none !important; }
          .n-before { top: 16%; }
          .n-during { top: 50%; }
          .n-after  { top: 83%; }

          @keyframes travel-y { 0% { transform: translateY(-100%); } 100% { transform: translateY(500%); } }
        }
      `}</style>
    </div>
  );
}
        ### 📄 components/sections/CreatorEconomySection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/lib/useLanguage`
* 🧩 **Component (Default):** `CreatorEconomySection`
* ww **Hooks:** `useLanguage`

        ```typescript
        "use client";

import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Icon from "../Icon";
import { useLanguage } from "@/lib/useLanguage";

// 🟢 [Fix] Generate static positions ONCE outside the component
// This ensures Server and Client see the exact same values.
const dotPositions = [...Array(30)].map((_, i) => ({
  top: `${(i * 17) % 80 + 10}%`,
  left: `${(i * 23) % 90 + 5}%`,
  delay: `${(i * 0.5) % 3}s`
}));

export default function CreatorEconomySection() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div className="section-rounded-bg creator-bg">
          
          <ScrollReveal>
            <div className="creator-header">
              <div className="badge-pro">{t("creator.badge")}</div>
              <h2 className="h2-creator">
                Make it. Sell it.<br />
                <span className="text-gradient-creative">Global.</span>
              </h2>
              <p className="p-creator">{t("creator.lead")}</p>
            </div>
          </ScrollReveal>

          <div className="studio-visual">
            <div className="global-map-bg">
              {/* 🟢 Render using the static 'dotPositions' array */}
              {dotPositions.map((pos, i) => (
                <div 
                  key={i} 
                  className="map-dot"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    animationDelay: pos.delay
                  }}
                />
              ))}
              
              <svg className="network-arcs" viewBox="0 0 800 500" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                    <stop offset="50%" stopColor="#d4a5ff" />
                    <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                  </linearGradient>
                </defs>
                <path className="arc-path" d="M400,250 Q600,50 700,100" />
                <circle r="3" fill="#fff"><animateMotion dur="3s" repeatCount="indefinite" path="M400,250 Q600,50 700,100" /></circle>
                <path className="arc-path" d="M400,250 Q200,50 100,150" />
                <circle r="3" fill="#fff"><animateMotion dur="4s" repeatCount="indefinite" path="M400,250 Q200,50 100,150" /></circle>
                <path className="arc-path" d="M400,250 Q500,400 700,350" />
                <circle r="3" fill="#fff"><animateMotion dur="3.5s" repeatCount="indefinite" path="M400,250 Q500,400 700,350" /></circle>
              </svg>
            </div>

            {/* Glass Canvas & Revenue Stack */}
            <ScrollReveal delay={200}>
              <div className="glass-canvas-wrapper">
                <div className="layer glass-back" />
                <div className="layer art-layer">
                  <div className="art-gradient" />
                  <div className="art-symbol"><Icon name="spark" /></div>
                </div>
                <div className="layer ui-layer">
                  <div className="floating-tool t-left" />
                  <div className="floating-tool t-right" />
                  <div className="floating-btn">Publish</div>
                </div>
              </div>
            </ScrollReveal>

            <div className="revenue-stack">
              <div className="rev-card card-1">
                <div className="rev-icon blue">€</div>
                <div className="rev-info"><span className="rev-label">Paris, FR</span><span className="rev-val">+€3.50</span></div>
              </div>
              <div className="rev-card card-2">
                <div className="rev-icon purple">₩</div>
                <div className="rev-info"><span className="rev-label">Seoul, KR</span><span className="rev-val">+₩5,400</span></div>
              </div>
              <div className="rev-card card-3">
                <div className="rev-icon green">$</div>
                <div className="rev-info"><span className="rev-label">New York, US</span><span className="rev-val">+$4.20</span></div>
              </div>
            </div>
          </div>

          <div className="feature-grid">
            <ScrollReveal delay={300}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="spark" /></div>
                <h4>{t("creator.feat1")}</h4>
                <p>{t("creator.desc1")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="map" /></div>
                <h4>{t("creator.feat2")}</h4>
                <p>{t("creator.desc2")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="feature-item">
                <div className="f-icon"><Icon name="chart" /></div>
                <h4>{t("creator.feat3")}</h4>
                <p>{t("creator.desc3")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .creator-bg { background: #000; background-image: radial-gradient(circle at 50% 0%, #1a1a1a 0%, #000 80%); color: #fff; border-radius: 48px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
        .creator-header { text-align: center; margin-bottom: 60px; position: relative; z-index: 2; }
        .badge-pro { display: inline-block; font-size: 11px; font-weight: 700; color: #d4a5ff; border: 1px solid rgba(212, 165, 255, 0.3); padding: 6px 12px; border-radius: 99px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; background: rgba(212, 165, 255, 0.1); }
        .h2-creator { font-size: 48px; font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
        .text-gradient-creative { background: linear-gradient(135deg, #d4a5ff 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .p-creator { font-size: 18px; color: #888; line-height: 1.6; max-width: 600px; margin: 0 auto; }
        
        .studio-visual { position: relative; height: 500px; display: flex; justify-content: center; align-items: center; margin-bottom: 60px; perspective: 1000px; }
        .global-map-bg { position: absolute; inset: 0; opacity: 0.5; pointer-events: none; }
        
        .map-dot { position: absolute; width: 4px; height: 4px; background: #555; border-radius: 50%; animation: pulse-dot 4s infinite; }
        @keyframes pulse-dot { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); background: #d4a5ff; } }
        
        .network-arcs { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .arc-path { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 1; stroke-dasharray: 4; }
        
        .glass-canvas-wrapper { width: 400px; height: 280px; position: relative; transform: rotateX(10deg) rotateY(-10deg); transform-style: preserve-3d; animation: float-canvas 6s ease-in-out infinite; }
        @keyframes float-canvas { 0%, 100% { transform: rotateX(10deg) rotateY(-10deg) translateY(0); } 50% { transform: rotateX(5deg) rotateY(-5deg) translateY(-20px); } }
        .layer { position: absolute; inset: 0; border-radius: 24px; display: flex; align-items: center; justify-content: center; transition: transform 0.3s; }
        .glass-back { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); transform: translateZ(-20px); box-shadow: 0 40px 80px rgba(0,0,0,0.6); }
        .art-layer { transform: translateZ(0px); }
        .art-gradient { width: 200px; height: 200px; border-radius: 50%; background: linear-gradient(135deg, #d4a5ff, #0071e3); filter: blur(40px); opacity: 0.6; animation: breath-art 4s infinite alternate; }
        @keyframes breath-art { from { opacity: 0.4; transform: scale(0.9); } to { opacity: 0.8; transform: scale(1.1); } }
        .art-symbol { position: absolute; font-size: 40px; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.5); }
        .ui-layer { transform: translateZ(30px); }
        .floating-tool { position: absolute; width: 40px; height: 40px; border-radius: 12px; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        .t-left { left: -20px; top: 30%; }
        .t-right { right: -20px; top: 50%; width: 50px; height: 50px; border-radius: 50%; }
        .floating-btn { position: absolute; bottom: -20px; background: #fff; color: #000; padding: 8px 20px; border-radius: 99px; font-weight: 700; font-size: 12px; box-shadow: 0 0 20px rgba(255,255,255,0.4); }
        
        .revenue-stack { position: absolute; bottom: 40px; right: 5%; z-index: 5; display: flex; flex-direction: column; gap: 10px; perspective: 1000px; }
        .rev-card { background: rgba(30, 30, 30, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); padding: 10px 16px; border-radius: 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); animation: float-stack 4s ease-in-out infinite; width: 190px; }
        .card-1 { transform: scale(0.9) translateY(20px); opacity: 0.6; z-index: 1; animation-delay: 0s; }
        .card-2 { transform: scale(0.95) translateY(10px); opacity: 0.8; z-index: 2; animation-delay: 0.5s; }
        .card-3 { transform: scale(1) translateY(0); opacity: 1; z-index: 3; animation-delay: 1s; border-color: rgba(255,255,255,0.3); }
        .rev-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; }
        .blue { background: #0071e3; color: #fff; } .purple { background: #AF52DE; color: #fff; } .green { background: #34C759; color: #fff; }
        .rev-info { display: flex; flex-direction: column; }
        .rev-label { font-size: 9px; color: #888; text-transform: uppercase; }
        .rev-val { font-size: 14px; font-weight: 700; color: #fff; }
        @keyframes float-stack { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        
        .feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 60px; }
        .feature-item { text-align: center; padding: 20px; }
        .f-icon { width: 50px; height: 50px; background: rgba(255,255,255,0.1); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #d4a5ff; }
        .feature-item h4 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
        .feature-item p { font-size: 14px; color: #888; line-height: 1.5; }
        @media (max-width: 900px) { .h2-creator { font-size: 32px; } .studio-visual { height: 400px; } .feature-grid { grid-template-columns: 1fr; gap: 40px; } .revenue-stack { right: 50%; transform: translateX(50%); bottom: -20px; } }
      `}</style>
    </section>
  );
}
        ### 📄 components/sections/DosDontsSection.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@/content/data`
* 🧩 **Component (Default):** `DosDontsSection`

        ```typescript
        import SectionHeader from "../SectionHeader";
import { doList, dontList } from "@/content/data";

export default function DosDontsSection() {
  return (
    <section className="section" id="dosdonts">
      <SectionHeader title="DO / DON’T (브랜드를 지키는 룰)" lead="인생네컷식 브랜드 톤을 유지하려면 “추가하지 말아야 할 것”이 더 중요합니다." />

      <div className="split">
        <div className="doDont">
          <p className="listTitle">✅ DO</p>
          <ul className="bullets">
            {doList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="doDont">
          <p className="listTitle">⛔ DON’T</p>
          <ul className="bullets">
            {dontList.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

        ### 📄 lib/useLanguage.tsx
        > **Context Summary**
        * wf **Function:** `LanguageProvider`
* wf **Function:** `useLanguage`
* ww **Hooks:** `useLanguage, useContext`

        ```typescript
        "use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ko" | "en" | "zh-CN" | "zh-TW";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionary: Record<string, Record<Lang, string>> = {
  // ... (Hero ~ Principle 유지)
  "hero.kicker": { ko: "Brand Platform • Experience-first", en: "Brand Platform • Experience-first", "zh-CN": "品牌平台 • 体验至上", "zh-TW": "品牌平台 • 體驗至上" },
  "hero.title1": { ko: "Technology\ndoesn’t sell.", en: "Technology\ndoesn’t sell.", "zh-CN": "技术\n本身无法销售", "zh-TW": "技術\n本身無法銷售" },
  "hero.title2": { ko: "Experience\ndoes.", en: "Experience\ndoes.", "zh-CN": "体验\n才是关键", "zh-TW": "體驗\n才是關鍵" },
  "hero.sub": { ko: "forFAN은 사진을 찍게 하지 않습니다. 그 순간을 ‘의미 있게’ 남기게 합니다.", en: "forFAN doesn't just make you take photos. We make the moment 'meaningful'.", "zh-CN": "forFAN 不仅仅是让您拍照。我们让那个瞬间变得“有意义”。", "zh-TW": "forFAN 不僅僅是讓您拍照。我們讓那個瞬間變得「有意義」。" },
  
  "principle.badge": { ko: "The First Principle", en: "The First Principle", "zh-CN": "第一原则", "zh-TW": "第一原則" },
  "principle.line1": { ko: "우리는 기능을", en: "We don't sell", "zh-CN": "我们要销售的", "zh-TW": "我們要銷售的" },
  "principle.line2": { ko: "팔지 않습니다.", en: "Features.", "zh-CN": "不是功能。", "zh-TW": "不是功能。" },
  "principle.line3": { ko: "경험의 질을", en: "We design", "zh-CN": "而是设计", "zh-TW": "而是設計" },
  "principle.line4": { ko: "설계합니다.", en: "Quality of Experience.", "zh-CN": "体验的质量。", "zh-TW": "體驗的質量。" },
  "principle.desc": { ko: "고객이 앱을 열었을 때 느끼는 감정 설렘 → 확신 → 여운을 연결하는 것. 그것이 유일한 우리의 전략입니다.", en: "Connecting the emotions: Excitement → Confidence → Afterglow. That is our only strategy.", "zh-CN": "连接客户打开应用时的情感：心动 → 确信 → 回味。这是我们唯一的策略。", "zh-TW": "連接客戶打開應用時的情感：心動 → 確信 → 回味。這是我們唯一的策略。" },

  "journey.title": { ko: "forFAN 고객 여정 지도", en: "Customer Journey Map", "zh-CN": "forFAN 客户旅程地图", "zh-TW": "forFAN 客戶旅程地圖" },
  "journey.lead": { ko: "고객의 시간은 멈춰있지 않습니다. Before(기대)에서 After(여운)까지 끊김 없는 빛의 흐름을 설계합니다.", en: "Customer time never stops. We design a seamless flow from Before to After.", "zh-CN": "客户的时间从未停止。设计从 Before(期待) 到 After(回味) 的无缝流程。", "zh-TW": "客戶的時間從未停止。設計從 Before(期待) 到 After(回味) 的無縫流程。" },

  "exp.title": { ko: "경험의 흐름: Before · During · After", en: "Flow of Experience", "zh-CN": "体验流程", "zh-TW": "體驗流程" },
  "exp.lead": { ko: "경험은 멈추지 않고 흐릅니다. 시간의 흐름에 따라 변화하는 가치를 확인하세요.", en: "Experience flows continuously. Witness the value transforming over time.", "zh-CN": "体验川流不息。请见证价值随时间流逝而发生的转变。", "zh-TW": "體驗川流不息。請見證價值隨時間流逝而發生的轉變。" },

  // ============================================================
  // 🟢 5. Wallet Section (Updated Benefits)
  // ============================================================
  "wallet.badge": { ko: "The Best App is No App", en: "The Best App is No App", "zh-CN": "最好的应用是无感应用", "zh-TW": "最好的應用是無感應用" },
  "wallet.title": { ko: "지갑 속에 Golden Ticket을.", en: "Golden Ticket in your Wallet.", "zh-CN": "钱包里的金票", "zh-TW": "錢包裡的金票" },
  "wallet.desc": { ko: "앱을 켜지 않아도 됩니다. 매장 근처에 가면, 당신의 추억 티켓이 잠금 화면에 조용히 떠오릅니다.", en: "No need to open the app. Your memory ticket quietly appears on the lock screen.", "zh-CN": "无需打开应用程序。当您靠近商店时，您的回忆票据会静静地浮现在锁屏上。", "zh-TW": "無需打開應用程序。當您靠近商店時，您的回憶票據會靜靜地浮現在鎖屏上。" },
  
  "wallet.d1.title": { ko: "Dynamic Tiering Card", en: "Dynamic Tiering Card", "zh-CN": "动态等级卡", "zh-TW": "動態等級卡" },
  "wallet.d1.desc": { ko: "경험의 깊이에 따라 카드의 재질이 변합니다. (Matte White → Platinum → Liquid Gold)", en: "Card texture evolves with experience depth. (Matte White → Platinum → Liquid Gold)", "zh-CN": "卡片材质随体验深度而变化。（哑光白 → 铂金 → 液态金）", "zh-TW": "卡片材質隨體驗深度而變化。（啞光白 → 鉑金 → 液態金）" },

  // 🟢 [수정] Fast Track -> Secret Frame Unlock
  "wallet.d2.title": { ko: "Location-based Unlock", en: "Location-based Unlock", "zh-CN": "基于位置的解锁", "zh-TW": "基於位置的解鎖" },
  "wallet.d2.desc": { 
    ko: "매장 50m 진입 시, 해당 매장 한정 '시크릿 프레임'이 자동으로 잠금 해제됩니다.", 
    en: "Exclusive 'Secret Frames' unlock automatically when within 50m of the store.",
    "zh-CN": "进入50米范围内，自动解锁该门店限定的“秘密相框”。",
    "zh-TW": "進入50米範圍內，自動解鎖該門店限定的「秘密相框」。"
  },

  "wallet.d3.title": { ko: "The “Hidden” Ticket", en: "The “Hidden” Ticket", "zh-CN": "“隐藏”票据", "zh-TW": "“隱藏”票據" },
  "wallet.d3.desc": { ko: "비 오는 날, 생일 주간 등 특정 맥락에만 조용히 생성되는 선물.", en: "Contextual gifts generated only for specific moments like rainy days or birthdays.", "zh-CN": "仅在下雨天、生日周等特定情境下悄然生成的礼物。", "zh-TW": "僅在下雨天、生日周等特定情境下悄然生成的禮物。" },
  
  "wallet.back.qr": { ko: "멤버십 보안 QR", en: "Secure Membership QR", "zh-CN": "会员安全二维码", "zh-TW": "會員安全二維碼" },
  "wallet.back.visit": { ko: "마지막 방문", en: "Last Visit", "zh-CN": "上次访问", "zh-TW": "上次訪問" },
  "wallet.back.visit_val": { ko: "성수 플래그십 (2일 전)", en: "Seongsu Flagship (2d ago)", "zh-CN": "圣水旗舰店 (2天前)", "zh-TW": "聖水旗艦店 (2天前)" },
  "wallet.back.next": { ko: "다음 등급까지", en: "To Next Tier", "zh-CN": "距离下一等级", "zh-TW": "距離下一等級" },
  "wallet.back.next_val": { ko: "2회 남음", en: "2 visits left", "zh-CN": "还需 2 次", "zh-TW": "還需 2 次" },

  // ... (나머지 Rewards, Revenue, Partners, Creator, Footer 유지)
  "rewards.title": { ko: "“Quiet Rewards” — 4CUT Coin", en: "“Quiet Rewards” — 4CUT Coin", "zh-CN": "“静谧奖励” — 4CUT Coin", "zh-TW": "“靜謐獎勵” — 4CUT Coin" },
  "rewards.lead": { ko: "발견의 미학. 4CUT Coin은 전면에 드러나지 않습니다. 흐릿한 유리를 닦아내듯(Hover), 숨겨진 가치를 확인하세요.", en: "Aesthetics of discovery. Wipe the frosted glass (Hover) to reveal hidden value.", "zh-CN": "发现的美学。像擦拭磨砂玻璃一样（悬停），发现隐藏的价值。", "zh-TW": "發現的美學。像擦拭磨砂玻璃一樣（懸停），發現隱藏的價值。" },

  "revenue.title": { ko: "Logic Flow: 24시간 멈추지 않는 매출 회로", en: "Logic Flow: 24/7 Revenue Circuit", "zh-CN": "逻辑流：24小时不间断的营收回路", "zh-TW": "邏輯流：24小時不間斷的營收迴路" },
  "revenue.lead": { ko: "고객 경험은 감성이 아니라, 정교하게 설계된 KPI 회로입니다.", en: "CX is a precisely engineered KPI circuit.", "zh-CN": "客户体验是精心设计的 KPI 回路。", "zh-TW": "客戶體驗是精心設計的 KPI 迴路。" },

  "partners.title": { ko: "실질적 수익 극대화", en: "Maximize Real Revenue", "zh-CN": "最大化实际收益", "zh-TW": "最大化實際收益" },
  "partners.lead": { ko: "데이터로 증명하는 효과 — 로컬 비즈니스를 글로벌 수익 모델로 전환합니다.", en: "Data-proven effects — Transforming local business into a global revenue model.", "zh-CN": "数据证明的效果 — 将本地业务转化为全球盈利模式。", "zh-TW": "數據證明的效果 — 將本地業務轉化為全球盈利模式。" },
  "partners.sim.title": { ko: "Monthly Revenue Uplift Simulator", en: "Monthly Revenue Uplift Simulator", "zh-CN": "月收入增长模拟器", "zh-TW": "月收入增長模擬器" },
  "partners.sim.desc": { ko: "앱 도입 시, 재방문 유도로 인한 월 추가 예상 매출을 확인하세요.", en: "Estimated monthly revenue uplift driven by revisit retention.", "zh-CN": "查看引入应用后，因回头客增加而带来的月度额外收入预测。", "zh-TW": "查看引入應用後，因回頭客增加而帶來的月度額外收入預測。" },

  "creator.badge": { ko: "The Next Chapter", en: "The Next Chapter", "zh-CN": "下一章", "zh-TW": "下一章" },
  "creator.title": { ko: "Make it. Sell it. Global.", en: "Make it. Sell it. Global.", "zh-CN": "Make it. Sell it. Global.", "zh-TW": "Make it. Sell it. Global." },
  "creator.lead": { ko: "누구나 크리에이터가 됩니다. 당신의 감각이 담긴 프레임이 전 세계 forFAN 키오스크에서 판매됩니다.", en: "Everyone becomes a creator. Your designed frames are sold worldwide.", "zh-CN": "每个人都可以成为创作者。您设计的相框将在全球销售。", "zh-TW": "每個人都可以成為創作者。您設計的相框將在全球銷售。" },
  "creator.feat1": { ko: "Infinite Creativity", en: "Infinite Creativity", "zh-CN": "无限创意", "zh-TW": "無限創意" },
  "creator.desc1": { ko: "유저들이 매일 수천 개의 트렌디한 프레임을 쏟아냅니다.", en: "Users generate thousands of trendy frames daily.", "zh-CN": "用户每天生成数千个潮流相框。", "zh-TW": "用戶每天生成數千個潮流相框。" },
  "creator.feat2": { ko: "No Borders", en: "No Borders", "zh-CN": "无国界", "zh-TW": "無國界" },
  "creator.desc2": { ko: "한국에서 만든 프레임을 전 세계 어디서든 즉시 사용합니다.", en: "Frames made in Korea are instantly used globally.", "zh-CN": "在韩国制作的相框可在全球即时使用。", "zh-TW": "在韓國製作的相框可在全球即時使用。" },
  "creator.feat3": { ko: "Global Revenue", en: "Global Revenue", "zh-CN": "全球收益", "zh-TW": "全球收益" },
  "creator.desc3": { ko: "원화, 달러, 유로. 국경 없는 정산 시스템을 경험하세요.", en: "KRW, USD, EUR. Experience a borderless settlement.", "zh-CN": "韩元、美元、欧元。体验无国界的结算系统。", "zh-TW": "韓元、美元、歐元。體驗無國界的結算系統。" },

  "footer.brand": { ko: "forFAN · Experience-first Brief", en: "forFAN · Experience-first Brief", "zh-CN": "forFAN · 体验优先简报", "zh-TW": "forFAN · 體驗優先簡報" },
  "footer.credit": { ko: "Designed by Apple Aesthetic.", en: "Designed by Apple Aesthetic.", "zh-CN": "Designed by Apple Aesthetic.", "zh-TW": "Designed by Apple Aesthetic." },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ko");

  const toggleLang = () => {
    setLang((prev) => {
      if (prev === "ko") return "en";
      if (prev === "en") return "zh-CN";
      if (prev === "zh-CN") return "zh-TW";
      return "ko";
    });
  };
  
  const t = (key: string) => {
    return dictionary[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}