# 🪄 Tailwind CSS 4 Theming – Skill Guide

## 📌 Overview

Tailwind CSS 4 usa un enfoque **CSS-first** para temas y personalización:  
👉 en vez de `tailwind.config.js`, definís **variables de tema directamente en tu CSS** usando `@theme`. Esto genera automáticamente utilidades relacionadas con esos tokens. :contentReference[oaicite:0]{index=0}

---

## 🏗️ What Tailwind CSS 4 Does

Tailwind CSS 4 convierte cada variable que definís con `@theme` en:

- variables CSS
- clases utilitarias con ese valor  
  por ejemplo:  
  `--color-brand-500: #fb923c` → `bg-brand-500`, `text-brand-500`, etc. :contentReference[oaicite:1]{index=1}

---

## 🎨 Basic Theming Syntax

### 1. Import Tailwind

```css
@import "tailwindcss";
```

### 2. Define theme tokens

```css
@theme {
  /* Colors */
  --color-primary: oklch(0.6 0.2 250);
  --color-secondary: #ff6363;

  /* Typography */
  --font-heading: "Inter", sans-serif;
  --font-body: "Open Sans", sans-serif;

  /* Spacing & radius */
  --spacing-xl: 2.5rem;
  --radius-lg: 1rem;
}
```

👉 Cada nombre de variable genera utilidades como:

- `bg-primary`
- `text-secondary`
- `font-heading`
- `p-xl`, `rounded-lg`

---

## 🌓 Multi-Theme Support (Light / Dark)

### 1. Default theme

```css
:root {
  --color-bg: white;
  --color-text: black;
}
```

### 2. Dark theme

```css
[data-theme="dark"] {
  --color-bg: #111;
  --color-text: #eee;
}
```

💡 Podés alternar temas cambiando el atributo `data-theme` en `<html>` o `<body>` desde JS o UI. ([vault.llbbl.com][1])

---

## 🔄 Switching Themes

```js
document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
});
```

---

## 🍭 Example Usage in HTML

```html
<body class="bg-bg text-text">
  <h1 class="text-primary font-heading text-3xl">Hola con tema custom!</h1>
</body>
```

---

## 🧩 Notes & Tips

- Tailwind 4 no necesita `tailwind.config.js` si definís todo desde CSS. ([tailwindcss.com][2])
- Si querés mantener un config JS (legacy), podés usar `@config` en tu CSS. ([Reddit][3])
- Usá `@theme` para declarar tokens; eso permite generar utilidades y variables CSS listas para tu diseño.
