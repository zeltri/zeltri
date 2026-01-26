# 🐰 Bunny-JS

> Una librería ligera, sin dependencias y totalmente type-safe para manipular el DOM de manera sencilla, elegante y fluida.

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/CROBF-tech/bunny-js)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Bundle Size](https://img.shields.io/badge/Bundle%20Size-~2kb%20gzip-brightgreen.svg)](https://github.com/CROBF-tech/bunny-js)
[![No Dependencies](https://img.shields.io/badge/Dependencies-0-green.svg)](https://github.com/CROBF-tech/bunny-js)

---

## 📋 Tabla de Contenidos

- [¿Qué es Bunny-JS?](#qué-es-bunny-js)
- [Características](#características)
- [Instalación](#instalación)
- [Inicio Rápido](#inicio-rápido)
- [Ejemplos](#ejemplos)
- [Documentación](#documentación)
- [API Rápida](#api-rápida)
- [Comparativa](#comparativa)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## ¿Qué es Bunny-JS?

Bunny-JS es una librería minimalista que simplifica la manipulación del DOM en JavaScript. Aunque existen alternativas como jQuery, Bunny-JS ofrece:

- **Sin dependencias**: Bundle de solo ~2kb gzip
- **Moderna**: Usa APIs nativas del navegador (Proxies, Decoradores)
- **Type-safe**: Soporte completo para TypeScript
- **Fluida**: API encadenable para código limpio y legible
- **No invasiva**: No modifica prototipos globales

### ¿Cuándo usar Bunny-JS?

✅ **Ideal para:**

- Manipulación directa del DOM en proyectos pequeños y medianos
- Integración con Astro Islands para interactividad
- Proyectos vanilla JavaScript/TypeScript
- Cuando necesitas algo más robusto que vanilla pero sin framework

❌ **No es ideal para:**

- Aplicaciones grandes con React/Vue (usa esos frameworks en su lugar)
- SSR/Backend (solo funciona en el navegador)
- Actualizaciones frecuentes de estado (considera frameworks reactivos)

---

## ✨ Características

| Característica         | Descripción                                |
| ---------------------- | ------------------------------------------ |
| 🪶 **Ultralighweight** | Solo ~2kb gzip, sin dependencias           |
| 🔗 **API Fluida**      | Métodos encadenables para código elegante  |
| 🛡️ **Type-Safe**       | TypeScript con autocompletado perfecto     |
| 🌐 **Universal**       | Funciona en todos los navegadores modernos |
| 🎨 **Intuitivo**       | Métodos simples y predecibles              |
| 🚀 **Rápido**          | Optimizado para máximo rendimiento         |
| ♿ **A11y Ready**      | Fácil implementar accesibilidad            |
| 📚 **140+ Etiquetas**  | Soporta todas las etiquetas HTML5          |

---

## 🚀 Instalación

### npm

```bash
npm install @crobf/bunny-js
```

### yarn

```bash
yarn add @crobf/bunny-js
```

### pnpm

```bash
pnpm add @crobf/bunny-js
```

---

## 📖 Inicio Rápido

### Crear Elementos

```typescript
import { BunnyJS } from "@crobf/bunny-js";

// Crear un botón
const btn = BunnyJS.button().text("Comprar").bg("#007bff").color("#fff");

// Insertar en el DOM
btn.insertIn(document.body);
```

### Seleccionar Elementos

```typescript
// Seleccionar un elemento
const header = BunnyJS.select(".header");
header?.text("Nuevo título");

// Seleccionar múltiples
const items = BunnyJS.selectAll(".item");
items.forEach((item) => item.toggle("active"));
```

### Encadenamiento Fluido

```typescript
const card = BunnyJS.div({ class: "card" })
  .text("Tarjeta")
  .bg("#ffffff")
  .color("#333")
  .font("14px Arial, sans-serif")
  .spacing(["20px", "0"], "20px")
  .on("mouseenter", (e) => {
    (e.target as HTMLElement).bg("#f5f5f5");
  })
  .insertIn(document.body);
```

### Formularios Interactivos

```typescript
const form = BunnyJS.form().on("submit", (e) => {
  e.preventDefault();
  console.log("Formulario enviado");
});

BunnyJS.input({
  type: "email",
  placeholder: "tu@email.com",
}).insertIn(form);

BunnyJS.button({ type: "submit" }).text("Enviar").insertIn(form);

form.insertIn(document.body);
```

---

## 💡 Ejemplos

### Todo List

```typescript
import { BunnyJS } from "@crobf/bunny-js";

const app = BunnyJS.div({ class: "app" });
const input = BunnyJS.input({ placeholder: "Nueva tarea..." });
const list = BunnyJS.ul();

const addBtn = BunnyJS.button()
  .text("Añadir")
  .on("click", () => {
    if ((input as any).value.trim()) {
      BunnyJS.li()
        .text((input as any).value)
        .insertIn(list);
      (input as any).value = "";
    }
  });

app
  .appendChild(BunnyJS.h1().text("Mis Tareas"))
  .appendChild(input)
  .appendChild(addBtn)
  .appendChild(list);

app.insertIn(document.body);
```

### Galería Interactiva

```typescript
const gallery = BunnyJS.div({ class: "gallery" }).spacing(
  ["20px", "0"],
  "20px",
);

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

images.forEach((src) => {
  const imgWrapper = BunnyJS.div({ class: "img-wrapper" }).on("click", () => {
    imgWrapper.toggle("full-screen");
  });

  BunnyJS.img()
    .attr("src", src)
    .attr("alt", "Foto de galería")
    .insertIn(imgWrapper);

  imgWrapper.insertIn(gallery);
});

gallery.insertIn(document.body);
```

### Modal Reutilizable

```typescript
function createModal(title: string, content: string) {
  const modal = BunnyJS.div({ class: "modal" }).bg("rgba(0,0,0,0.5)").hide();

  const dialog = BunnyJS.div({ class: "modal-dialog" })
    .bg("#fff")
    .spacing(["30px", "0"], "20px");

  const closeBtn = BunnyJS.button()
    .text("Cerrar")
    .on("click", () => modal.hide());

  dialog
    .appendChild(BunnyJS.h2().text(title))
    .appendChild(BunnyJS.p().text(content))
    .appendChild(closeBtn);

  modal.appendChild(dialog).insertIn(document.body);

  return modal;
}

const modal = createModal("Bienvenido", "¡Hola!");
modal.show();
```

---

## 📚 Documentación

Documentación completa en:

- **[API Referencia](./docs/api-referencia.md)** - Referencia exhaustiva de todos los métodos
- **[Arquitectura](./docs/arquitectura.md)** - Cómo funciona Bunny-JS internamente
- **[Patrones de Uso](./docs/patrones-uso.md)** - Mejores prácticas y patrones comunes
- **[Troubleshooting](./docs/troubleshooting.md)** - Solución a problemas frecuentes
- **[Ejemplos Interactivos](./examples)** - Componentes Astro demostrando Bunny-JS

---

## ⚡ API Rápida

### Creación

```typescript
BunnyJS.<tagname>({ atributos })  // Crear elemento
BunnyJS.select(selector)          // Seleccionar uno
BunnyJS.selectAll(selector)       // Seleccionar múltiples
```

### Contenido

```typescript
.text(valor)                      // Establecer texto
.link(texto, href, attrs)         // Crear enlace
.item(texto, attrs)               // Agregar elemento de lista
```

### Eventos

```typescript
.on(evento, handler)              // Agregar event listener
```

### Estilos

```typescript
.bg(color)                        // Color de fondo
.color(color)                     // Color de texto
.font(font)                       // Fuente
.spacing(margin, padding)         // Márgenes y padding
```

### DOM

```typescript
.show(mode?)                      // Mostrar elemento
.hide()                           // Ocultar elemento
.toggle(className)                // Alternar clase(s)
.insertIn(query)                  // Insertar en el DOM
```

### Atributos

```typescript
.attr(key, value?)                // Obtener/establecer atributo
```

---

## 🔍 Comparativa

### Bunny-JS vs jQuery vs Vanilla JavaScript

| Feature               | Bunny-JS         | jQuery            | Vanilla        |
| --------------------- | ---------------- | ----------------- | -------------- |
| **Tamaño**            | ~2kb             | ~30kb             | 0kb            |
| **API Moderna**       | ✅               | ❌                | ✅             |
| **Type-Safe**         | ✅               | ❌                | ✅             |
| **Encadenable**       | ✅               | ✅                | ❌             |
| **Curva Aprendizaje** | Baja             | Baja              | Media          |
| **Casos de Uso**      | Manipulación DOM | jQuery específico | Máximo control |

### Ejemplo Comparativo

**Vanilla JavaScript**

```javascript
const btn = document.createElement("button");
btn.textContent = "Comprar";
btn.style.backgroundColor = "#007bff";
btn.style.color = "#fff";
btn.addEventListener("click", handleClick);
document.body.appendChild(btn);
```

**Bunny-JS**

```typescript
BunnyJS.button()
  .text("Comprar")
  .bg("#007bff")
  .color("#fff")
  .on("click", handleClick)
  .insertIn(document.body);
```

---

## 🏗️ Arquitectura

Bunny-JS utiliza un diseño moderno basado en:

1. **Proxy Dinámico** - Intercepta etiquetas HTML y las convierte en métodos
2. **Decoradores** - Sistemas modulares para actions, helpers y estilos
3. **Type System** - TypeScript para máxima seguridad de tipos

Más detalles en [Documentación de Arquitectura](./docs/arquitectura.md).

---

## 🐰 ¿Por qué "Bunny"?

- **Rápido**: Los conejos saltan rápido, Bunny-JS es ultra ligero
- **Pequeño**: Los conejos son pequeños, Bunny-JS es ~2kb
- **Fluido**: Los conejos se mueven de forma fluida, la API de Bunny-JS es encadenable
- **Cute**: ¡Es monísimo! 🐰

---

## 🛠️ Desarrollo

### Clonar el repositorio

```bash
git clone https://github.com/CROBF-tech/bunny-js.git
cd bunny-js
```

### Instalar dependencias

```bash
pnpm install
```

### Compilar

```bash
pnpm build
```

### Testear

```bash
pnpm test
```

---

## 🤝 Contribuyendo

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mi-feature`)
3. Commit tus cambios (`git commit -am 'Agregar nueva feature'`)
4. Push a la rama (`git push origin feature/mi-feature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE](LICENSE) para más detalles.

---

## 🔗 Enlaces

- **[GitHub](https://github.com/CROBF-tech/bunny-js)** - Código fuente
- **[npm](https://www.npmjs.com/package/@crobf/bunny-js)** - Paquete npm
- **[CROBF](https://crobf.tech)** - Organización
- **[Documentación Completa](./docs)** - Documentación exhaustiva

---

## 💬 Preguntas?

- 📖 Consulta la [documentación](./docs)
- 🐛 Abre un [issue](https://github.com/CROBF-tech/bunny-js/issues)
- 💬 Participa en [discussions](https://github.com/CROBF-tech/bunny-js/discussions)

---

Hecho con ❤️ y 🐰 por [CROBF](https://crobf.tech)
