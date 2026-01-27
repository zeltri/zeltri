# 🐰 Bunny-JS Documentation

> A lightweight library for simplified DOM manipulation.

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/CROBF-tech/bunny-js)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Bunny-JS is a lightweight and easy-to-use library that simplifies DOM manipulation in JavaScript. With a fluent and intuitive API, you can create HTML elements, select existing ones, and apply changes in a chained manner.

## 🚀 Installation

```bash
npm install @crobf/bunny-js
```

Or using yarn:

```bash
yarn add @crobf/bunny-js
```

## 📖 Quick Start

```javascript
import { BunnyJS } from "@crobf/bunny-js/src/bunny";

// Create an element
const div = BunnyJS.div({ class: "my-class" });
div.text("Hello World!").bg("lightblue").insertIn(document.body);

// Select existing elements
const button = BunnyJS.select("#my-button");
button.on("click", () => alert("Click!"));
```

## 🎯 API Reference

### The Main Proxy

Bunny-JS uses a JavaScript `Proxy` to dynamically intercept calls to properties and convert them into HTML elements. This allows an intuitive syntax where any valid HTML tag automatically becomes a method.

```javascript
import { BunnyJS } from "@crobf/bunny-js/src/bunny";

// When you call BunnyJS.div(), the proxy:
// 1. Intercepts the 'div' property
// 2. Verifies it's a valid HTML tag
// 3. Creates a <div> element using document.createElement()
// 4. Applies the provided attributes
// 5. Enhances the element with additional methods
// 6. Returns the enhanced element

const div = BunnyJS.div({ class: "container", id: "main" });
// Internally: document.createElement("div")
// + setAttribute("class", "container")
// + setAttribute("id", "main")
// + enhanceElement(element)
```

### Selection Methods

The special methods `select()` and `selectAll()` allow working with existing DOM elements.

```javascript
import { BunnyJS } from "@crobf/bunny-js/src/bunny";

// BunnyJS.select(selector: string)
// Selects an element from the DOM and enhances it with Bunny methods

const header = BunnyJS.select(".header");
// Internally:
// 1. document.querySelector(".header")
// 2. If it exists, enhanceElement(element)
// 3. Returns the enhanced element or null

if (header) {
  header.text("New title").bg("#f0f0f0");
}

// BunnyJS.selectAll(selector: string)
// Selects multiple elements and enhances them

const items = BunnyJS.selectAll(".item");
// Internally:
// 1. Array.from(document.querySelectorAll(".item"))
// 2. Maps each element applying enhanceElement()
// 3. Returns array of enhanced elements

items.forEach((item) => {
  item.toggle("active");
});
```

### Element Enhancement Process

Each created or selected element passes through an "enhancement" (enhancement) process that adds additional methods without modifying the global HTMLElement prototype.

**Enhancement process:**

1. `withActions`: Adds show(), hide(), toggle(), insertIn()
2. `withHelpers`: Adds on(), text(), link(), item(), attr()
3. `withStyles`: Adds bg(), color(), font(), spacing()

The resulting element maintains all properties and methods of the native HTMLElement, plus the Bunny-JS methods.

```javascript
const element = document.createElement("div");
// element is a standard HTMLDivElement

const enhanced = enhanceElement(element);
// enhanced has: all HTMLDivElement properties
// + Bunny-JS methods (text, bg, on, etc.)
```

### Action Methods

Action methods control the visibility and position of elements in the DOM.

```javascript
import { BunnyJS } from "@crobf/bunny-js/src/bunny";

// show(mode?: string): void
// Shows the element by setting display
const modal = BunnyJS.div({ class: "modal" });
modal.show(); // display: ""
modal.show("flex"); // display: "flex"

// hide(): void
// Hides the element
modal.hide(); // display: "none"

// toggle(className: string | string[]): void
// Toggles CSS classes
modal.toggle("active"); // One class
modal.toggle(["active", "visible"]); // Multiple classes

// insertIn(query: string | HTMLElement): void
// Inserts the element into a container
modal.insertIn(document.body); // Direct element
modal.insertIn(".container"); // CSS selector
```

### Helper Methods

Helper methods facilitate common element manipulation and event management.

```javascript
import { BunnyJS } from "@crobf/bunny-js/src/bunny";

// on(event: keyof HTMLElementEventMap, handler: EventListener): BunnyExtendedElement
// Adds an event listener (returns the element for chaining)
const btn = BunnyJS.button({ class: "btn" });
btn.on("click", (e) => console.log("Click!"));

// text(value: string): BunnyExtendedElement
// Sets the text content
btn.text("Click here");

// link(value: string, href: string, attrs: Record<string, string>): BunnyExtendedElement
// Creates a link inside the element
const div = BunnyJS.div();
div.link("Visit", "https://example.com", { target: "_blank" });

// item(value: string, attrs: Record<string, string>): BunnyExtendedElement
// Adds a list item (for ul/ol)
const ul = BunnyJS.ul();
ul.item("Item 1", { class: "list-item" });
ul.item("Item 2", { class: "list-item" });

// attr(key: string, value?: string): string | null
// Gets or sets an attribute
const img = BunnyJS.img();
img.attr("src", "image.jpg"); // Sets
const src = img.attr("src"); // Gets: "image.jpg"
```

### Style Methods

Style methods provide a fluent way to apply CSS to elements.

```javascript
import { BunnyJS } from "@crobf/bunny-js/src/bunny";

// bg(color: string): BunnyExtendedElement
// Sets the background color
const card = BunnyJS.div();
card.bg("#ffffff");
card.bg("rgb(255, 255, 255)");
card.bg("hsl(0, 0%, 100%)");

// color(color: string): BunnyExtendedElement
// Sets the text color
card.color("#333333");

// font(font: string): BunnyExtendedElement
// Sets the font (complete CSS font property)
card.font("16px Arial, sans-serif");
card.font("bold 14px/1.5 'Helvetica Neue'");

// spacing(margin?, padding?): BunnyExtendedElement
// Sets margin and padding with flexible syntax

// Only margin (string)
card.spacing("20px");

// Margin and padding
card.spacing("10px", "20px");

// Margin with 2 values [vertical, horizontal]
card.spacing(["10px", "20px"], ["15px", "25px"]);

// Margin with 4 values [top, right, bottom, left]
card.spacing(["10px", "20px", "30px", "40px"]);
```

### Method Chaining

Most methods that return `BunnyExtendedElement` can be chained to create fluent code.

```javascript
import { BunnyJS } from "@crobf/bunny-js/src/bunny";

const card = BunnyJS.div({ class: "card" })
  .text("Card title")
  .bg("#ffffff")
  .color("#333333")
  .font("16px Arial")
  .spacing("20px", "15px")
  .on("click", () => console.log("Click!"))
  .on("mouseenter", (e) => (e.target.style.opacity = "0.8"))
  .on("mouseleave", (e) => (e.target.style.opacity = "1"))
  .insertIn(document.body);

// The 'card' element is fully configured
// and already inserted into the DOM in one expression
```

## ✨ Features

- 🪶 **Lightweight**: No external dependencies
- 🔗 **Fluent**: Chainable API for more readable code
- 🛡️ **TypeScript**: Full type support
- 🌐 **Universal**: Works in all modern browsers
- 🎨 **Intuitive**: Simple methods for common tasks
- 🚀 **Fast**: Optimized for performance

## 📚 Advanced Examples

### Todo List

```javascript
const todoList = BunnyJS.ul({ class: "todo-list" });

const tasks = ["Buy milk", "Call doctor", "Exercise"];

tasks.forEach((task) => {
  const li = BunnyJS.li().text(task);
  li.on("click", () => li.toggle("completed"));
  li.insertIn(todoList); // Equivalent to: todoList.appendChild(li);
});

todoList.insertIn(document.body);
```

### Interactive Form

```javascript
const form = BunnyJS.form({ class: "contact-form" });

const nameInput = BunnyJS.input({
  type: "text",
  placeholder: "Your name",
  required: true,
});

const emailInput = BunnyJS.input({
  type: "email",
  placeholder: "your@email.com",
  required: true,
});

const submitBtn = BunnyJS.button({
  type: "submit",
  class: "btn-submit",
});
submitBtn.text("Send");

form.on("submit", (e) => {
  e.preventDefault();
  alert("Form submitted!");
});

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitBtn);
form.insertIn(document.body);
```

## 🤝 Contributing

Contributions are welcome! If you find a bug or have an idea to improve Bunny-JS, please open an issue or send a pull request on [GitHub](https://github.com/CROBF-tech/bunny-js).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [CROBF](https://crobf.tech)
