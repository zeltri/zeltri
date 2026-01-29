---
name: tailwind-responsive-design
description: Guía completa para crear diseños responsive con Tailwind 4 que se adapten perfectamente a todos los dispositivos. Úsala cuando trabajes con Tailwind y necesites hacer que tu diseño sea responsive, adaptar layouts entre mobile y desktop, implementar breakpoints, crear grids responsivos, manejar tipografía adaptable, imágenes responsivas, o asegurar que tu interfaz se vea bien tanto en teléfonos como en computadoras.
---

# Diseño Responsive con Tailwind 4

Esta guía proporciona patrones y mejores prácticas para crear interfaces responsive con Tailwind 4 que funcionen perfectamente en cualquier dispositivo.

## Filosofía Mobile-First

Tailwind usa un enfoque **mobile-first**, lo que significa que las clases sin prefijo se aplican en todos los tamaños, y los breakpoints agregan estilos para pantallas más grandes.

```html
<!-- Diseño mobile por defecto, 2 columnas en tablet, 4 en desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- contenido -->
</div>
```

**Principio clave**: Diseña primero para móvil, luego agrega complejidad para pantallas más grandes.

## Breakpoints de Tailwind 4

Los breakpoints estándar son:

| Prefijo       | Tamaño mínimo | Dispositivo típico            |
| ------------- | ------------- | ----------------------------- |
| (sin prefijo) | 0px           | Móvil (todos)                 |
| `sm:`         | 640px         | Móvil grande / Tablet pequeña |
| `md:`         | 768px         | Tablet                        |
| `lg:`         | 1024px        | Desktop pequeño               |
| `xl:`         | 1280px        | Desktop                       |
| `2xl:`        | 1536px        | Desktop grande                |

```html
<!-- Texto pequeño en móvil, más grande en desktop -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">Título responsive</h1>
```

## Patrones Comunes de Layout

### 1. Grid Responsive

```html
<!-- 1 columna en móvil, 2 en tablet, 3 en desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4">Item 1</div>
  <div class="bg-white p-4">Item 2</div>
  <div class="bg-white p-4">Item 3</div>
</div>

<!-- Grid con auto-fit para columnas flexibles -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <div class="bg-white p-4">Item flexible</div>
</div>
```

### 2. Flexbox Responsive

```html
<!-- Vertical en móvil, horizontal en desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Sidebar</div>
  <div class="flex-[2]">Contenido principal</div>
</div>

<!-- Items apilados con wrap responsive -->
<div class="flex flex-wrap gap-4">
  <div class="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]">
    Item
  </div>
</div>
```

### 3. Contenedores y Anchos

```html
<!-- Contenedor centrado con anchos máximos responsive -->
<div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="max-w-prose"><!-- Texto limitado para legibilidad --></div>
</div>

<!-- Anchos porcentuales responsive -->
<div class="w-full md:w-2/3 lg:w-1/2">Contenido con ancho adaptable</div>
```

## Tipografía Responsive

### Escalas de Texto

```html
<!-- Escala completa desde móvil a desktop -->
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
  Título principal
</h1>

<p class="text-sm md:text-base lg:text-lg leading-relaxed">
  Párrafo con tamaño y altura de línea adaptables
</p>

<!-- Títulos de sección -->
<h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold">Subtítulo</h2>
```

### Line Height y Spacing

```html
<!-- Espaciado adaptable -->
<div class="space-y-4 md:space-y-6 lg:space-y-8">
  <p class="leading-relaxed md:leading-loose">
    Texto con line-height adaptable
  </p>
</div>

<!-- Padding responsive -->
<section class="py-8 md:py-12 lg:py-16 xl:py-20">
  Sección con padding vertical escalable
</section>
```

## Imágenes Responsive

### Imágenes Adaptables

```html
<!-- Imagen que se adapta al contenedor -->
<img src="imagen.jpg" alt="Descripción" class="w-full h-auto object-cover" />

<!-- Imagen con altura fija en móvil, adaptable en desktop -->
<div class="h-64 md:h-96 lg:h-[500px] overflow-hidden">
  <img src="imagen.jpg" alt="Descripción" class="w-full h-full object-cover" />
</div>

<!-- Grid de imágenes responsive -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
  <img src="1.jpg" class="w-full aspect-square object-cover" />
  <img src="2.jpg" class="w-full aspect-square object-cover" />
</div>
```

### Object Fit y Position

```html
<!-- Control de cómo se ajusta la imagen -->
<img class="w-full h-64 object-cover object-center" />
<img class="w-full h-64 object-contain" />
<img class="w-full h-64 object-cover object-top" />
```

## Navegación Responsive

### Menú de Navegación

```html
<!-- Navegación simple con hamburguesa en móvil -->
<nav class="flex items-center justify-between p-4">
  <div class="text-xl font-bold">Logo</div>

  <!-- Menú desktop -->
  <div class="hidden md:flex gap-6">
    <a href="#" class="hover:text-blue-600">Inicio</a>
    <a href="#" class="hover:text-blue-600">Servicios</a>
    <a href="#" class="hover:text-blue-600">Contacto</a>
  </div>

  <!-- Botón hamburguesa móvil -->
  <button class="md:hidden">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</nav>
```

## Espaciado Responsive

### Padding y Margin

```html
<!-- Padding que escala con el tamaño de pantalla -->
<div class="p-4 md:p-6 lg:p-8 xl:p-12">Contenido con padding escalable</div>

<!-- Margin vertical responsive -->
<section class="my-8 md:my-12 lg:my-16">Sección con margen vertical</section>

<!-- Gap en grids y flex -->
<div class="flex gap-2 md:gap-4 lg:gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Visibilidad Condicional

### Mostrar/Ocultar por Tamaño

```html
<!-- Visible solo en móvil -->
<div class="block md:hidden">Contenido solo para móvil</div>

<!-- Visible solo en desktop -->
<div class="hidden md:block">Contenido solo para desktop</div>

<!-- Visible en rangos específicos -->
<div class="hidden md:block lg:hidden">Solo visible en tablets</div>

<!-- Variante con flex -->
<div class="flex md:hidden">Móvil</div>
<div class="hidden md:flex">Desktop</div>
```

## Componentes Responsive Completos

### Card Adaptable

```html
<div
  class="bg-white rounded-lg shadow-lg overflow-hidden 
            flex flex-col md:flex-row"
>
  <!-- Imagen -->
  <div class="w-full md:w-1/3 h-48 md:h-auto">
    <img src="imagen.jpg" alt="Card" class="w-full h-full object-cover" />
  </div>

  <!-- Contenido -->
  <div class="p-4 md:p-6 lg:p-8 flex-1">
    <h3 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
      Título del Card
    </h3>
    <p class="text-sm md:text-base text-gray-600 mb-4">
      Descripción que se adapta al tamaño de pantalla.
    </p>
    <button
      class="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg"
    >
      Acción
    </button>
  </div>
</div>
```

### Hero Section Responsive

```html
<section
  class="relative h-screen min-h-[500px] md:min-h-[600px] lg:min-h-[800px]"
>
  <!-- Background -->
  <div class="absolute inset-0">
    <img src="hero.jpg" alt="Hero" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/50"></div>
  </div>

  <!-- Contenido -->
  <div class="relative h-full flex items-center justify-center px-4">
    <div class="text-center text-white max-w-4xl">
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
        Título Impactante
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12">
        Subtítulo descriptivo
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg">
          CTA Principal
        </button>
        <button
          class="px-8 py-3 border-2 border-white text-white rounded-lg text-lg"
        >
          CTA Secundario
        </button>
      </div>
    </div>
  </div>
</section>
```

### Formulario Responsive

```html
<form class="w-full max-w-4xl mx-auto p-4 md:p-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
    <!-- Campo de texto -->
    <div class="col-span-1">
      <label class="block text-sm md:text-base font-medium mb-2">
        Nombre
      </label>
      <input
        type="text"
        class="w-full px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Email -->
    <div class="col-span-1">
      <label class="block text-sm md:text-base font-medium mb-2"> Email </label>
      <input
        type="email"
        class="w-full px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Mensaje - ancho completo -->
    <div class="col-span-1 md:col-span-2">
      <label class="block text-sm md:text-base font-medium mb-2">
        Mensaje
      </label>
      <textarea
        rows="4"
        class="w-full px-4 py-2 md:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
  </div>

  <!-- Botón -->
  <button
    class="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg 
                 text-base md:text-lg font-medium hover:bg-blue-700 transition-colors"
  >
    Enviar
  </button>
</form>
```

## Mejores Prácticas

### 1. Testear en Múltiples Tamaños

Siempre verifica tu diseño en:

- Móvil pequeño (320px)
- Móvil grande (375px - 414px)
- Tablet (768px - 1024px)
- Desktop (1280px+)

### 2. Contenido Prioritario

En móvil, muestra primero el contenido más importante:

```html
<!-- Orden visual diferente al orden del DOM -->
<div class="flex flex-col-reverse md:flex-row">
  <div class="md:w-1/2">Sidebar (segundo en móvil)</div>
  <div class="md:w-1/2">Contenido principal (primero en móvil)</div>
</div>
```

### 3. Touch Targets

Asegura que los botones y enlaces sean fáciles de tocar en móvil:

```html
<!-- Tamaño mínimo recomendado: 44x44px -->
<button class="min-h-[44px] min-w-[44px] px-6 py-3">Botón táctil</button>

<!-- Espaciado entre elementos clicables -->
<div class="flex flex-col gap-4 md:flex-row md:gap-2">
  <button>Botón 1</button>
  <button>Botón 2</button>
</div>
```

### 4. Imágenes y Performance

```html
<!-- Usa srcset para imágenes responsive -->
<img
  src="imagen-small.jpg"
  srcset="
    imagen-small.jpg   640w,
    imagen-medium.jpg 1024w,
    imagen-large.jpg  1920w
  "
  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
  alt="Imagen responsive"
  class="w-full h-auto"
  loading="lazy"
/>
```

### 5. Evita Overflow Horizontal

```html
<!-- Previene scroll horizontal no deseado -->
<body class="overflow-x-hidden">
  <div class="w-full max-w-full">
    <!-- Contenido -->
  </div>
</body>

<!-- Asegura que las imágenes no excedan el contenedor -->
<img class="max-w-full h-auto" />
```

### 6. Tipografía Legible

```html
<!-- Line-height adecuado para lectura -->
<p class="text-base md:text-lg leading-relaxed md:leading-loose max-w-prose">
  Texto optimizado para legibilidad en todas las pantallas.
</p>
```

## Container Queries (Tailwind 4)

Tailwind 4 soporta container queries para diseño basado en el tamaño del contenedor:

```html
<!-- Define el contenedor -->
<div class="@container">
  <!-- Elementos que responden al tamaño del contenedor -->
  <div class="@sm:grid-cols-2 @lg:grid-cols-3 grid">
    <div>Item 1</div>
    <div>Item 2</div>
  </div>
</div>
```

Breakpoints de container:

- `@sm:` 384px
- `@md:` 448px
- `@lg:` 512px
- `@xl:` 576px
- `@2xl:` 672px

## Patrones Anti-responsive a Evitar

❌ **NO hacer:**

```html
<!-- Tamaños fijos que no escalan -->
<div class="w-[1200px]">Contenido</div>

<!-- Texto demasiado pequeño en móvil -->
<p class="text-xs">Difícil de leer en móvil</p>

<!-- Demasiados breakpoints (complejidad innecesaria) -->
<div
  class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
>
  Sobre-optimizado
</div>
```

✅ **SÍ hacer:**

```html
<!-- Anchos relativos -->
<div class="w-full max-w-7xl mx-auto">Contenido</div>

<!-- Texto legible desde el inicio -->
<p class="text-base md:text-lg">Fácil de leer en cualquier dispositivo</p>

<!-- Breakpoints solo donde son necesarios -->
<div class="text-base lg:text-lg">Optimización balanceada</div>
```

## Checklist de Diseño Responsive

Antes de considerar tu diseño completo, verifica:

- [ ] El diseño se ve bien en móvil (320px - 640px)
- [ ] El diseño se ve bien en tablet (768px - 1024px)
- [ ] El diseño se ve bien en desktop (1280px+)
- [ ] No hay scroll horizontal no deseado
- [ ] Las imágenes se cargan y escalan correctamente
- [ ] El texto es legible en todos los tamaños
- [ ] Los botones y enlaces son fáciles de tocar en móvil
- [ ] El contenido importante está visible sin scroll excesivo
- [ ] Las animaciones y transiciones funcionan bien
- [ ] Los formularios son fáciles de usar en móvil
- [ ] La navegación es accesible en todos los dispositivos

## Recursos Adicionales

Para Tailwind 4:

- Documentación oficial: https://tailwindcss.com/docs
- Breakpoints personalizados en `tailwind.config.js`
- Plugins para funcionalidad adicional

Recuerda: Un buen diseño responsive no es solo hacer que todo "encaje" en diferentes pantallas, sino optimizar la experiencia del usuario para cada dispositivo.
