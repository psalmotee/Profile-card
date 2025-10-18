# Profile Card (HTML/CSS/Vanilla JS)

## Overview

A responsive, accessible **Profile Card** built with semantic HTML, CSS, and JavaScript.  
Includes all `data-testid` attributes for automated testing.

--

### The card displays:

A profile photo
Name and profession
Biography
Current time in milliseconds
Social links (LinkedIn, GitHub, Twitter)
Hobbies and Dislikes lists with clear icons

![Profile Card Preview](https://app.netlify.com/projects/profile-card-samson-moradeyo/overview)

---

## Features

**Semantic HTML5 structure** – uses `<article>`, `<section>`, `<nav>`, `<ul>`, etc.  
**Accessibility-first** – all elements include `aria-label` and `alt` attributes.  
**Testable** – every key element includes a `data-testid`.  
**Dynamic current time** – displays `Date.now()` in milliseconds.  
**Responsive layout** – optimized for **360px → 1440px+**.  
**Lightweight** – built with no frameworks or dependencies.  

---

## Folder Structure
project/
│
├── index.html        # Main structure
├── styles.css        # All styling & responsiveness
├── script.js         # Dynamic time functionality
└── README.md         # Documentation


---

## Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/profile-card.git
cd profile-card
```

### Run locally

Just open index.html in your browser — no build steps needed.

---

## Test IDs Reference

| Element | Data Test ID |
|----------|---------------|
| Profile Card | `test-profile-card` |
| Name | `test-user-name` |
| Biography | `test-user-bio` |
| Current Time | `test-user-time` |
| Avatar | `test-user-avatar` |
| Social Links Container | `test-user-social-links` |
| LinkedIn | `test-user-social-linkedin` |
| GitHub | `test-user-social-github` |
| Twitter | `test-user-social-twitter` |
| Hobbies | `test-user-hobbies` |
| Dislikes | `test-user-dislikes` |

---

## Responsiveness

The layout adapts fluidly:
360–480px: Stacked mobile layout
768px: Two-column structure
1024px: Balanced desktop layout
1440px+: Expanded spacing and typography

Notes

For automated tests, Date.now() is updated every second for accuracy.

Fully keyboard-accessible: links and sections are navigable with Tab.

Built with Love by Moradeyo Samson Tolulope