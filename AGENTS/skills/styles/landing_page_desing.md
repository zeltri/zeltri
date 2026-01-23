# Zeltri Landing Page Visual Identity Skill

**Skill Type:** Project-Specific Visual Identity  
**Scope:** zeltri.crobf.tech main landing page only  
**Extends:** Zeltri Design System Base Skill  
**Technology Stack:** Astro + Tailwind CSS 4  
**Version:** 1.0.0  
**Priority:** Project-level skill (loads after base system)

---

## Skill Purpose and Scope

This skill defines the specific visual identity for the Zeltri landing page at zeltri.crobf.tech. It provides concrete color values, typography choices, and visual guidelines built on top of the base system.

**Critical:** This applies ONLY to the main landing page. Projects under zeltri.crobf.tech/<project> define their own identities.

---

## Visual Personality

The Zeltri landing communicates technical professionalism with approachable warmth. Dark backgrounds reduce eye strain, warm orange accents provide energy without overwhelming, and generous spacing creates a calm, premium feel. The aesthetic targets developers and technical users who value clarity and substance.

**Core Principles:**

- Darkness as foundation (nearly black backgrounds)
- Warm orange accents for visual interest
- Calmness over excitement (generous spacing, subtle transitions)
- Every element serves clear communication

---

## Color Palette

### Primary Colors: Warm Orange

```css
@theme {
  --color-primary-50: #fff7ed;
  --color-primary-100: #ffedd5;
  --color-primary-200: #fed7aa;
  --color-primary-300: #fdba74;
  --color-primary-400: #fb923c; /* links, interactive elements */
  --color-primary-500: #f97316; /* base orange accent */
  --color-primary-600: #ea580c; /* hover states */
  --color-primary-700: #c2410c;
  --color-primary-800: #9a3412;
  --color-primary-900: #7c2d12;
  --color-primary-950: #431407;
}
```

### Surface Colors: Dark Foundation

```css
@theme {
  --color-surface-base: #0a0a0a; /* main background */
  --color-surface-elevated: #171717; /* cards, panels */
  --color-surface-sunken: #000000; /* inputs, code blocks */
  --color-surface-overlay: #262626; /* modals, dropdowns */
  --color-surface-subtle: #1a1a1a; /* alternate sections */
}
```

### Text Colors

```css
@theme {
  --color-text-primary: #fafafa; /* main text, headings */
  --color-text-secondary: #a3a3a3; /* descriptions, supporting text */
  --color-text-tertiary: #737373; /* timestamps, captions */
  --color-text-accent: var(--color-primary-400); /* links */
  --color-text-on-accent: #171717; /* text on orange backgrounds */
}
```

### Borders & States

```css
@theme {
  /* Borders */
  --color-border-subtle: #262626;
  --color-border-default: #404040;
  --color-border-strong: #525252;
  --color-border-accent: var(--color-primary-600);

  /* Semantic States */
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}
```

---

## Typography

### Font Families

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;
  --font-display: var(--font-sans);
}
```

**Usage:**

- Inter for all UI and body text (load Regular 400 & SemiBold 600)
- JetBrains Mono for code blocks (Regular 400)

### Type Scale Application

- **Hero headings:** `--text-5xl` (48px) + `--leading-tight` + SemiBold
- **Section headings:** `--text-4xl` (36px) + `--leading-tight` + SemiBold
- **Subsection headings:** `--text-3xl` (30px) + SemiBold
- **Card titles:** `--text-2xl` (24px) + SemiBold
- **Body text:** `--text-base` (16px) + `--leading-relaxed` + Regular
- **Secondary text:** `--text-sm` (14px) + Regular
- **Captions:** `--text-xs` (12px) + Regular

---

## UI Component Tokens

### Cards

```css
@theme {
  --ui-card-bg: var(--color-surface-elevated);
  --ui-card-border: var(--color-border-subtle);
  --ui-card-hover-bg: #1f1f1f;
  --ui-card-hover-border: var(--color-border-default);
  --ui-card-radius: var(--radius-lg);
  --ui-card-padding: var(--space-6);
}
```

### Links

```css
@theme {
  --ui-link-default: var(--color-primary-400);
  --ui-link-hover: var(--color-primary-300);
  --ui-link-visited: var(--color-primary-500);
}
```

### Buttons

```css
@theme {
  /* Primary Buttons */
  --ui-button-primary-bg: var(--color-primary-500);
  --ui-button-primary-hover-bg: var(--color-primary-600);
  --ui-button-primary-text: var(--color-text-on-accent);
  --ui-button-primary-radius: var(--radius-base);
  --ui-button-primary-padding-x: var(--space-6);
  --ui-button-primary-padding-y: var(--space-3);

  /* Secondary Buttons */
  --ui-button-secondary-bg: transparent;
  --ui-button-secondary-hover-bg: var(--color-surface-elevated);
  --ui-button-secondary-border: var(--color-border-default);
  --ui-button-secondary-hover-border: var(--color-primary-400);
  --ui-button-secondary-text: var(--color-text-primary);
  --ui-button-secondary-hover-text: var(--color-primary-400);
}
```

### Code Blocks

```css
@theme {
  /* Inline code */
  --ui-code-inline-bg: var(--color-surface-sunken);
  --ui-code-inline-text: var(--color-primary-200);
  --ui-code-inline-radius: var(--radius-sm);

  /* Code blocks */
  --ui-code-block-bg: var(--color-surface-sunken);
  --ui-code-block-border: var(--color-border-subtle);
  --ui-code-block-padding: var(--space-4);
  --ui-code-block-radius: var(--radius-base);
}
```

---

## Layout & Spacing

**Section spacing:** `--space-16` (64px) between major sections  
**Content blocks:** `--space-8` (32px) between distinct blocks  
**Element gaps:** `--space-4` (16px) between related elements  
**Container max-width:** 1280px  
**Horizontal padding:** `--space-4` mobile → `--space-8` desktop

---

## Shadows & Elevation

Use shadows conservatively. Elevation primarily through surface color changes.

- **Resting state:** No shadow or `--shadow-sm`
- **Hover state:** `--shadow-base`
- **Floating elements:** `--shadow-lg` (modals, dropdowns)
- **Shadow tint:** Slightly warm (subtle orange) vs pure black/gray

---

## Component Implementation Guide

### Header

- Background: `--color-surface-base`
- Border bottom: `--color-border-subtle`
- Logo: `--color-primary-400`
- Nav links: `--color-text-secondary` → `--color-primary-400` on hover
- Padding: `--space-4` mobile → `--space-6` desktop

### Hero Section

- Heading: `--text-5xl`, `--color-text-primary`, SemiBold
- Description: `--text-xl`, `--color-text-secondary`, `--leading-relaxed`
- CTA buttons: Primary + Secondary styling
- Vertical padding: `--space-16` or `--space-20`

### Project Cards

- Use card tokens defined above
- Project name: `--text-2xl`, `--color-text-primary`
- Description: `--text-base`, `--color-text-secondary`
- Link: `--ui-link-default` with arrow icon
- Grid gap: `--space-6`, responsive columns (1→2→3)

### Footer

- Background: `--color-surface-elevated`
- Border top: `--color-border-subtle`
- Links: `--color-text-tertiary` → `--color-primary-400` on hover
- Legal text: `--text-xs`, `--color-text-tertiary`
- Padding: `--space-8` mobile → `--space-12` desktop

---

## Animations

**Durations:**

- Color/background changes: 200-250ms
- Transforms: 200ms
- Large movements (modals): 300-400ms

**Easing:** `ease-out` for most transitions

**Critical:** Always respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: no-preference) {
  .element {
    transition: property duration ease-out;
  }
}
@media (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
```

---

## Responsive Breakpoints

**Mobile-first approach:**

- `<640px`: Single column, reduced spacing, touch targets 44x44px minimum
- `640px+`: 2-column grids possible
- `768px+`: Enhanced multi-column layouts
- `1024px+`: Full desktop experience, 3-4 column grids
- `1280px+`: Max content width, full spacing/typography scale

---

## Accessibility Requirements

✓ **Contrast:** All text meets WCAG AA (4.5:1 normal, 3:1 large)  
✓ **Keyboard nav:** All interactive elements reachable via tab  
✓ **Focus indicators:** Visible on all elements, 3:1 contrast  
✓ **Screen readers:** Semantic HTML, descriptive alt text, proper heading hierarchy  
✓ **Skip links:** Allow bypassing repetitive navigation

---

## AI Agent Instructions

### Scope Enforcement

Apply this skill ONLY to zeltri.crobf.tech landing page. Do NOT apply to project pages unless explicitly told.

### Implementation Priority

1. Check for UI component token (e.g., `--ui-card-bg`)
2. Use semantic color token (e.g., `--color-text-primary`)
3. Use palette value directly (e.g., `--color-primary-500`)
4. Only create new tokens if absolutely necessary

### Inheritance

This skill overrides base system where defined. Undefined variables inherit from base (e.g., spacing scale).

### Verification

Before completing, check:

- Responsive behavior at 375px, 768px, 1280px
- Hover/focus states work correctly
- Color contrast meets WCAG AA
- Keyboard navigation flows logically
- Respects `prefers-reduced-motion`
