# Zeltri Web Platform - Contexto Técnico para Agentes AI

## Información Técnica General del Proyecto

### Descripción del Proyecto

Zeltri es el ecosistema open source de CROBF. Este proyecto contiene la web principal completa bajo un solo proyecto de Astro, incluyendo:

- Landing page institucional
- Sistema de documentación
- Proyectos open source
- Navegación por subproyectos

Todo se organiza por rutas dentro de un único proyecto Astro (no monorepo).

### Stack Tecnológico

- **Framework Principal**: Astro
- **Estilos**: Tailwind CSS 4
- **Lenguaje**: TypeScript
- **Contenido**: Markdown / MDX
- **Build Tool**: Vite

### Arquitectura

- **Tipo**: Proyecto único Astro (no monorepo)
- **Organización**: Por rutas en `src/pages/`
- **Estructura de URLs**:
  - `zeltri.crobf.tech/` → Landing principal
  - `zeltri.crobf.tech/docs` → Documentación general
  - `zeltri.crobf.tech/<project>` → Proyecto específico
  - `zeltri.crobf.tech/<project>/docs` → Docs del proyecto
  - `zeltri.crobf.tech/<project>/<section>` → Secciones específicas

### Sistema de Estilos

- **Nivel 1 - Sistema Base**: Neutro, reutilizable (tokens, variables, tipografías, spacing, layout)
- **Nivel 2 - Identidad Visual**: Temas específicos por proyecto (cada proyecto puede tener su propia identidad)

### Organización del Código

```
src/
├─ pages/
│  ├─ index.astro                 → Landing
│  ├─ docs/                       → Docs generales
│  ├─ [project]/                  → Proyectos dinámicos
│  │   ├─ index.astro             → Landing del proyecto
│  │   ├─ docs/                   → Docs del proyecto
│  │   └─ [...section].astro      → Secciones dinámicas
├─ layouts/
│  ├─ MainLayout.astro
│  ├─ DocsLayout.astro
├─ styles/
│  ├─ global.css                  → Sistema base
│  ├─ landing.css                 → Estilo exclusivo landing
│  ├─ projects.css                → Overrides por proyecto
├─ components/
│  ├─ ui/
│  ├─ docs/
│  ├─ layout/
└─ content/
   ├─ docs/
   ├─ projects/
```

### Cómo Agregar Nuevos Proyectos

1. Crear carpeta en `src/pages/` con nombre del proyecto (kebab-case)
2. Crear `index.astro` para landing del proyecto
3. Crear carpeta `docs/` con `index.astro` y secciones (.md, .mdx, .astro)
4. Crear `[...section].astro` para routing dinámico
5. Definir estilos propios si es necesario (usando variables @theme)

## Skills Específicas del Proyecto

Para tareas específicas relacionadas con el diseño y desarrollo en Zeltri, consulta los archivos en la carpeta `AGENTS/skills/`:

- **`base_system_desing.md`**: Contiene el sistema de diseño base, incluyendo tokens, variables, convenciones de layout y principios de diseño reutilizables.
- **`landing_page_desing.md`**: Detalles específicos del diseño de la landing page, incluyendo estética minimalista, tema oscuro, tonos naranjas y identidad visual técnica.
- **`tailwind4_themes.md`**: Información sobre el uso de Tailwind CSS 4, temas personalizados, variables @theme y cómo aplicar estilos específicos por proyecto.

Estos archivos proporcionan conocimientos detallados para realizar tareas como:

- Diseñar nuevas páginas siguiendo la identidad de Zeltri
- Implementar estilos consistentes con el sistema base
- Crear temas personalizados para proyectos individuales
- Mantener la coherencia visual en la documentación y landings

Si necesitas realizar una tarea específica en el proyecto, revisa primero estos archivos de skills para obtener las mejores prácticas y convenciones aplicables.
