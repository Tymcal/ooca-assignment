# EPIC-2: Tailwind adoption for growth

**Goal:** Add Tailwind CSS as a hybrid styling layer so new and touched screens scale with utilities, while tokens and `ds-*` primitives remain the brand source of truth.

---

## US-2.1: Install Tailwind and bridge tokens

**As a** developer  
**I want** Tailwind wired into Vite with theme values mapped to existing CSS tokens  
**So that** utilities stay aligned with the teal/mint design system

### TASK-2.1.1: Vite plugin + CSS entry

- **Detail:** Install `tailwindcss` and `@tailwindcss/vite`. Register the Vite plugin. Import Tailwind theme and utilities in `src/index.css` after fonts/tokens (skip Preflight to avoid resetting existing screens). Map colors, spacing, and radii in `@theme inline` to `var(--color-*)`, `var(--space-*)`, and `var(--radius-*)`.
- **Deliverable:** Updated `package.json`, `vite.config.ts`, `src/index.css`
- **Status:** done

---

## US-2.2: Hybrid styling conventions

**As a** developer  
**I want** clear rules for when to use Tailwind vs `ds-*` CSS  
**So that** new UI stays consistent as the app grows

### TASK-2.2.1: Document conventions

- **Detail:** Prefer Tailwind for page layout, flex/grid, margins, and responsive shell tweaks. Keep interaction chrome in `ds-*` components. One style surface per element (do not mix utilities and custom CSS classes on the same element for the same concerns). Add `clsx` only when class composition becomes noisy.
- **Deliverable:** This epic section (conventions above)
- **Status:** done

---

## US-2.3: Pilot screen migration

**As a** developer  
**I want** one screen migrated to the hybrid pattern  
**So that** the team has a reference before migrating others opportunistically

### TASK-2.3.1: Migrate LoadingScreen

- **Detail:** Convert `LoadingScreen` layout and spinner to Tailwind utilities. Remove `LoadingScreen.css` if nothing remains. Leave other screens and all `ds-*` component CSS unchanged.
- **Deliverable:** Updated `src/screens/LoadingScreen.tsx`; remove `LoadingScreen.css` when empty
- **Status:** done

### TASK-2.3.2: Follow-on migrations (later)

- **Detail:** Migrate other screens (Inquiry, Results, Psychologist list) and shell CSS only when those files are next touched for product work. Do not mass-rewrite.
- **Deliverable:** Per-screen PRs as needed
- **Status:** todo
