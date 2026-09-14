# EPIC-1: Psychologist finder clickable UI

**Goal:** Deliver a responsive React clickable flow for browsing psychologists, describing an issue to Mooka, waiting for a match, and viewing recommended counselors, using a shared teal/mint design system.

---

## US-1.1: Design system consistency

**As a** user  
**I want** consistent teal/mint visuals and typography  
**So that** screens feel like one product

### TASK-1.1.1: Design tokens + global shell

- **Detail:** Define CSS custom properties (primary teal, mint backgrounds, text colors, radii, shadows, spacing). Load bilingual fonts: Gotham Rounded (local) for English Latin, Prompt (Google Fonts) for Thai via glyph fallback. Build AppShell as a real mobile web shell: `viewport-fit=cover` plus `env(safe-area-inset-*)` padding (no painted iOS status bar / Dynamic Island). Responsive: full-bleed on mobile; centered ~430px column from 768px up.
- **Deliverable:** `src/design-system/tokens.css`, `src/design-system/fonts.css`, `src/shell/AppShell.tsx`
- **Status:** done

### TASK-1.1.2: Shared primitives

- **Detail:** Reusable Button (pill, primary), Chip, Card, BottomNav (5 tabs, tab 2 active), Price, Tag, Avatar components styled from tokens.
- **Deliverable:** Components under `src/design-system/`
- **Status:** done

---

## US-1.2: Browse psychologists

**As a** user  
**I want** to browse psychologists with search/filters/promo  
**So that** I can start matching

### TASK-1.2.1: Psychologist list screen

- **Detail:** Search bar with language control, filter chips, promo banner with CTA to inquiry, vertical list of psychologist cards (avatar, name, role, tags, price), BottomNav.
- **Deliverable:** `src/screens/PsychologistListScreen.tsx`, mock data in `src/domain/`
- **Status:** done

---

## US-1.3: Describe issue to Mooka

**As a** user  
**I want** to describe my issue to Mooka  
**So that** matching can run

### TASK-1.3.1: Inquiry screen + real typing

- **Detail:** Teal back chevron to list, chat bubble prompt, controlled textarea (device keyboard on any Android/iOS), floating “อธิบายเสร็จแล้ว” CTA enabled when trimmed text is non-empty (advances to loading).
- **Deliverable:** `src/screens/InquiryScreen.tsx`
- **Status:** done

---

## US-1.4: Loading and matched results

**As a** user  
**I want** loading then matched results  
**So that** I can pick a counselor

### TASK-1.4.1: Loading screen + auto-advance

- **Detail:** Mint full-screen background, mascot illustration, iOS-style spinner, copy “มูก้ากำลังหาให้อยู่นะ...”. Auto-advance to results after ~2s; clear timer on unmount.
- **Deliverable:** `src/screens/LoadingScreen.tsx`
- **Status:** done

### TASK-1.4.2: Results screen + FAB

- **Detail:** Mint header with mascot/sun illustration and copy, back to list, result cards (avatar, name, role, rating, price), floating teal FAB “หาผู้ให้คำปรึกษาคนอื่น” back to list, BottomNav.
- **Deliverable:** `src/screens/ResultsScreen.tsx`
- **Status:** done

### TASK-1.4.3: Screen flow wiring + responsive polish

- **Detail:** Screen state machine: List → Inquiry → Loading → Results; back and FAB paths. Touch targets ≥44px; chip scroll; short-viewport keyboard handling.
- **Deliverable:** `src/shell/ScreenRouter.tsx`, wired `App.tsx`
- **Status:** done

---

## US-1.5: Screen transition motion

**As a** user  
**I want** smooth transitions when moving between matching screens  
**So that** the flow feels intentional and polished

### TASK-1.5.1: Transition map + animated router layer

- **Detail:** List → Inquiry: move-in ease-out (slide from right). Inquiry → Loading and Loading → Results: dissolve ease-out (opacity crossfade). Back/FAB to List: move-out ease-out (slide to right). Duration 300ms. Dual-render outgoing/incoming in ScreenRouter; shell background follows destination.
- **Deliverable:** `src/shell/transitions/`, updated `src/shell/ScreenRouter.tsx`
- **Status:** done
