# Zeltri Design System Base Skill

**Skill Type:** Design System Foundation  
**Scope:** All projects within zeltri.crobf.tech ecosystem  
**Technology Stack:** Astro + Tailwind CSS 4 (CSS-first approach)  
**Version:** 1.0.0  
**Priority:** Base-level skill (loaded before project-specific skills)

---

## Skill Purpose

Defines the foundational design system architecture for the Zeltri ecosystem. Completely brand-agnostic and serves as the structural foundation for all projects. This does NOT define concrete visual identity—it defines structure, conventions, and technical architecture.

---

## Core Design Philosophy

Apply these principles in order of priority:

### 1. Functional Clarity Over Decoration

Every visual element must serve a clear functional purpose. Ask: "Does this help the user understand or accomplish their goal?" If no, reconsider inclusion.

### 2. Systematic Consistency Through Tokens

Design decisions at system level through reusable tokens, not component-level one-off values. Always reference CSS variables. Never use arbitrary values like `#ff0000` or `24px` directly.

### 3. Controlled Flexibility for Identity

Projects inherit all base variables by default but can override any subset to establish unique identity. Override mechanism is the primary tool for diverse visual identities within unified technical foundation.

---

## Technical Architecture

All customization uses native CSS variables + Tailwind CSS 4's `@theme` directive.

```css
@theme {
  --color-primary-500: #your-color;
  --space-base: 1rem;
  --font-sans: "YourFont", system-ui, sans-serif;
}
```

Tailwind auto-generates utilities: `bg-primary-500`, `p-base`, `font-sans`

### Naming Convention

**Pattern:** `namespace-category-variant-state`

```css
--color-primary-500        /* namespace: color, category: primary, variant: 500 */
--color-surface-elevated   /* namespace: color, category: surface, variant: elevated */
--space-content-block      /* namespace: space, category: content, variant: block */
--text-lg                  /* namespace: text, variant: lg */
--radius-base              /* namespace: radius, variant: base */
--shadow-md                /* namespace: shadow, variant: md */
```

**Namespaces:** `color`, `space`, `font`, `text`, `radius`, `shadow`

---

## Color System

### Numeric Scale (50-950)

Lower numbers = lighter, higher = darker. 500 is base color.

```css
@theme {
  --color-primary-50: /* lightest tint */;
  --color-primary-100: /* very light */;
  --color-primary-200: /* light */;
  --color-primary-300: /* medium-light */;
  --color-primary-400: /* slightly light */;
  --color-primary-500: /* base color - main hue */;
  --color-primary-600: /* slightly dark */;
  --color-primary-700: /* medium-dark */;
  --color-primary-800: /* dark */;
  --color-primary-900: /* very dark */;
  --color-primary-950: /* darkest shade */;
}
```

**Usage:** 50-400 for backgrounds/light themes, 600-950 for text/dark themes

### Surface Colors

```css
@theme {
  --color-surface-base: /* main background */;
  --color-surface-elevated: /* cards, panels above base */;
  --color-surface-sunken: /* recessed areas, inputs */;
  --color-surface-overlay: /* modals, dropdowns, highest layer */;
}
```

### Semantic Text Colors

```css
@theme {
  --color-text-primary: /* main content, high contrast */;
  --color-text-secondary: /* supporting text, medium contrast */;
  --color-text-tertiary: /* subtle text, low contrast */;
  --color-text-accent: /* links, interactive text */;
  --color-text-on-accent: /* text on accent backgrounds */;
}
```

### Border Colors

```css
@theme {
  --color-border-subtle: /* barely visible */;
  --color-border-default: /* standard borders */;
  --color-border-strong: /* emphasized divisions */;
  --color-border-accent: /* active/selected states */;
}
```

### Semantic States

```css
@theme {
  --color-success: /* typically green */;
  --color-warning: /* typically yellow/orange */;
  --color-error: /* typically red */;
  --color-info: /* typically blue */;
}
```

---

## Typography System

### Font Families

Always include complete fallback chains:

```css
@theme {
  --font-sans:
    "PrimaryFont", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono:
    "MonoFont", ui-monospace, "Cascadia Code", Menlo, Consolas, monospace;
  --font-display: "DisplayFont", var(--font-sans);
}
```

### Type Scale (REM units)

```css
@theme {
  --text-xs: 0.75rem; /* 12px - captions, labels */
  --text-sm: 0.875rem; /* 14px - secondary text */
  --text-base: 1rem; /* 16px - body text */
  --text-lg: 1.125rem; /* 18px - emphasized body */
  --text-xl: 1.25rem; /* 20px - small headings */
  --text-2xl: 1.5rem; /* 24px - section headings */
  --text-3xl: 1.875rem; /* 30px - page headings */
  --text-4xl: 2.25rem; /* 36px - hero headings */
  --text-5xl: 3rem; /* 48px - large display */
}
```

### Line Height

```css
@theme {
  --leading-tight: 1.25; /* large headings */
  --leading-normal: 1.5; /* body text */
  --leading-relaxed: 1.75; /* dense text, documentation */
}
```

---

## Spacing System

Base unit: 4px (0.25rem). All values are multiples.

```css
@theme {
  --space-0: 0;
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px - base unit */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
}
```

### Semantic Spacing

```css
@theme {
  --space-section-gap: var(--space-16); /* between major sections */
  --space-content-block: var(--space-8); /* between content blocks */
  --space-element-gap: var(--space-4); /* between related elements */
  --space-inline-gap: var(--space-2); /* between inline elements */
}
```

---

## Border Radius System

```css
@theme {
  --radius-none: 0;
  --radius-sm: 0.25rem; /* 4px - subtle */
  --radius-base: 0.5rem; /* 8px - standard */
  --radius-lg: 0.75rem; /* 12px - prominent */
  --radius-xl: 1rem; /* 16px - very rounded */
  --radius-2xl: 1.5rem; /* 24px - extremely rounded */
  --radius-full: 9999px; /* circular/pill */
}
```

**Usage:**

- Small UI (badges, tags): `radius-sm` or `radius-base`
- Cards, panels: `radius-base` or `radius-lg`
- Buttons: `radius-base` (modern) or `radius-full` (pill)
- Avatars: `radius-full`

---

## Shadow System

```css
@theme {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg:
    0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl:
    0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

**Usage:**

- Base layer: No shadow
- Slightly elevated (cards): `shadow-sm` or `shadow-base`
- Floating (dropdowns, tooltips): `shadow-md`
- Modals, overlays: `shadow-lg` or `shadow-xl`

---

## Project Override Mechanism

Projects override base values by loading their own `@theme` after the base system:

```css
/* Project-specific file loads AFTER base system */
@theme {
  /* Override only what's unique */
  --color-primary-500: #project-color;
  --font-sans: "ProjectFont", var(--font-sans);
  --radius-base: 0.75rem;

  /* All other variables inherit automatically */
}
```

**Guidelines:**

- Override only values defining unique identity
- Reference base variables when building derived values
- Document why overrides exist
- Test accessibility (especially color contrast)

---

## Accessibility Requirements

**Non-negotiable. WCAG 2.1 Level AA minimum.**

### Contrast Ratios

- Normal text: 4.5:1 minimum
- Large text (18pt+ or 14pt+ bold): 3:1 minimum
- Test all combinations before committing

### Focus States

- All interactive elements must have visible focus indicators
- Focus indicator: 3:1 contrast vs element background AND adjacent content
- Never remove focus outlines without equally visible alternative

```css
@theme {
  --color-focus-ring: /* typically primary color */;
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
}
```

### Color as Information

Never use color alone to convey information. Always pair with:

- Icons
- Text labels
- Pattern/texture differences

---

## Documentation Standards

### Prioritize Scannability

- Clear hierarchical headings
- Important info at section start
- Minimal formatting (avoid over-formatting)

### Explain Reasoning

Document WHY, not just WHAT:
❌ "Use --space-4 for card padding"
✅ "Cards use --space-4 padding to balance density with breathing room"

### Provide Examples

Every significant guideline needs code example or visual reference. Show both correct implementations and common mistakes.

### Keep Examples Current

Update examples immediately when variables change. Outdated examples erode trust.

---

## AI Agent Application Instructions

### Loading Priority

Always load this base skill BEFORE project-specific skills. Base establishes defaults; projects override selectively.

### Decision Framework

1. Does a system variable exist for this use case? → Use it
2. No variable exists → Is this one-time or recurring?
   - One-time: Use closest available or document exception
   - Recurring: Propose new variable following naming convention

### Override Detection

Respect project overrides completely. If project defines `--color-primary-500: #custom`, use that for ALL primary references. If project doesn't override `--space-4`, use base value.

### Consistency Enforcement

Flag violations proactively:

- Hard-coded values (`#ff0000`, `24px`) → Suggest variables
- Duplicate definitions → Suggest consolidation
- Accessibility failures → Require corrections

### Contextual Application

Adapt to project needs while maintaining principles:

- Documentation projects: More generous spacing/line-height
- Interactive apps: Prominent focus states
- Dashboards: Subtle elevation vs heavy shadows

---

## Version Control

**Current:** 1.0.0 (major.minor.patch)

**Semantic Versioning:**

- Major: Breaking changes requiring project updates
- Minor: New variables/capabilities (backwards compatible)
- Patch: Bug fixes, docs, clarifications

**Change Communication:**

- Document all changes with migration guidance
- Breaking changes need before/after examples

**Deprecation Process:**

1. Mark as deprecated (maintain functionality)
2. Provide alternative variable
3. After one major version: Remove with clear error messages

---

## Quick Reference

**Common Patterns:**

```css
/* Card component example */
.card {
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-base);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
}

/* Button component example */
.button-primary {
  background: var(--color-primary-500);
  color: var(--color-text-on-accent);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-base);
  transition: background-color 250ms ease-out;
}

.button-primary:hover {
  background: var(--color-primary-600);
}

/* Text hierarchy example */
.heading-1 {
  font-size: var(--text-4xl);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
}

.body-text {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);
}

.caption {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}
```
