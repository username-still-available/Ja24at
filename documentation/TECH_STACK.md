# Technology Stack for 24ja.at

This document outlines the core technologies chosen for the development of the static landing page for 24ja.at.

## Core Technologies

1.  **HTML5 (HyperText Markup Language 5)**
    *   **Purpose:** Used for structuring the content of the website. Provides the semantic foundation for all text, images, sections, and forms.
    *   **Version:** HTML5 (Latest standard)

2.  **CSS3 (Cascading Style Sheets 3)**
    *   **Purpose:** Used for styling the visual presentation of the HTML content, including layout, colors, fonts, and responsiveness.
    *   **Framework:** **Tailwind CSS** (v4.x installed) - A utility-first CSS framework chosen to accelerate development, ensure consistency, and simplify responsive design implementation, aligning with the "modern" requirement and facilitating design based on the reference site. The generated CSS will be in `css/style.css`.
    *   **Custom CSS:** Minimal custom CSS might be added if needed via `css/input.css`.

3.  **JavaScript (ECMAScript)**
    *   **Purpose:** Optional, intended for client-side interactivity. Potential uses include:
        *   Contact form validation before submission.
        *   Implementing the WhatsApp button functionality (opening the WhatsApp link).
        *   Minor UI enhancements or animations, if desired later.
    *   **Usage:** Will be placed in `js/script.js`. No complex frameworks (like React, Vue, Angular) are planned, only vanilla JavaScript as needed.

## Development Tools & Environment

*   **Node.js / npm:** Used for managing development dependencies (specifically Tailwind CSS) and running build scripts (like compiling Tailwind CSS).
*   **Text Editor / IDE:** (User's choice, e.g., VS Code, Sublime Text, etc.)
*   **Git (Recommended):** For version control (although currently facing issues on specific filesystems).
*   **Web Browser:** For testing and previewing (e.g., Chrome, Firefox, Safari).

## Hosting (Post-Development)

*   **Static Site Hosting:** The final website consists only of static files (HTML, CSS, JS, images). It can be deployed on any static hosting provider (e.g., Netlify, Vercel, GitHub Pages, traditional web hosting). The specific provider is not determined at this stage. 