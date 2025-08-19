# Project Plan: 24ja.at Static Landing Page

**Project Goal:**
Create a modern, responsive, single-page static website for "24ja.at - Macht das Leben leichter e.U." to introduce the owner, Zuzana Jancova, detail her services, and provide contact information.

**Scope:**
The landing page (`index.html`) will include:

1.  **Hero Section:** Introduction using branding elements (logo colors, fonts) and core value proposition.
2.  **About Section:** Introducing Zuzana Jancova (content from `documentation/24ja.at/susanna-description.md`, placeholder image).
3.  **Services Section:** Detailing the three core services (content from `documentation/24ja.at/services.md`, placeholder images for target groups).
4.  **Contact Section:** Displaying contact information (Address, Phone - from `documentation/24ja.at/services.md`, placeholder Email), a functional contact form (submissions TBD), and a WhatsApp button (placeholder number).
5.  **Ethical Disclaimer Section:** Including the disclaimer (content from `documentation/24ja.at/susanna-description.md`).
6.  **Footer:** Standard footer content (e.g., copyright, link to Impressum).

A separate `impressum.html` page will be created (placeholder content initially).

**Design & Branding:**

*   **Inspiration:** The design will draw inspiration from `https://petertreichl.at/`.
*   **Color Palette:** Primarily use the dark green background (`#1E4D3B` - extracted from the logo) and white, potentially alternating between sections. Text color will be white/light on the green background and dark on the white background.
*   **Fonts:** Use clean, modern sans-serif fonts similar to the logo and reference site. (We can select specific web fonts later, e.g., from Google Fonts).
*   **Imagery:** Use placeholders for all images initially.

**Assumptions:**

*   The website will consist of a main landing page (`index.html`) and a separate legal page (`impressum.html`).
*   The primary language is German.
*   "Modern" implies a clean, responsive design inspired by the reference site and incorporating the provided branding elements.

**Proposed Technology Stack:**

*   **HTML5:** For structure.
*   **CSS3:** For styling. Using **Tailwind CSS** is recommended here to efficiently achieve the modern, responsive design based on the reference site and branding.
*   **JavaScript (Optional):** For contact form validation/submission logic and potentially the WhatsApp button functionality.
*   **Static Site Hosting:** (Not needed for development phase).

**Development Stages (Progressive Implementation):**

1.  **Stage 1: Foundational Setup (Small Impact)**
    *   **Action:** Create the basic project structure: `index.html`, `impressum.html`, a CSS directory with a main file (e.g., `css/style.css` or configured for Tailwind), an `images` directory (for placeholders), and potentially a JS file (`js/script.js`). Set up Tailwind CSS if agreed. Initialize a Git repository.
    *   **Check-in:** Confirm file structure and Tailwind setup (if used).
2.  **Stage 2: Core Content Implementation (Medium Impact)**
    *   **Action:** Populate `index.html` with the semantic HTML structure for the Hero, About, and Services sections using content from the markdown files. Add placeholder image tags. Apply minimal structural layout (e.g., using Tailwind classes if applicable).
    *   **Check-in:** Review the HTML structure and integrated content for accuracy. Confirm basic layout approach.
3.  **Stage 3: Supporting Content & Structure (Medium Impact)**
    *   **Action:** Add HTML structure for the Contact section (including form elements and WhatsApp button structure), Ethical Disclaimer, and Footer (with link to `impressum.html`). Add placeholder content to `impressum.html`.
    *   **Check-in:** Verify all required sections and elements are present in the HTML.
4.  **Stage 4: Styling and Responsiveness (Large Impact)**
    *   **Action:** Apply comprehensive Tailwind CSS (or custom CSS) styling, drawing inspiration from `petertreichl.at` and using the brand colors/fonts. Ensure responsiveness across devices. Style `impressum.html` minimally. Alternate section backgrounds (green/white) as discussed.
    *   **Check-in:** Review visual design, color application, font usage, and responsiveness. Gather feedback.
5.  **Stage 5: Interactivity & Finalization (Medium Impact)**
    *   **Action:** Implement JavaScript for contact form validation and the WhatsApp button click action (linking to `wa.me/...`). Connect contact form to a backend service (e.g., Formspree, Netlify Forms - requires setup). **Implement basic SEO:** Add relevant meta tags (`description`, Open Graph) to `<head>`, ensure images have descriptive `alt` tags, review semantic HTML structure. Optimize assets (images, code). Final content review and testing (cross-browser, cross-device). Add actual Impressum content when provided.
    *   **Check-in:** Demonstrate form and button functionality. Review meta tags and SEO elements. Confirm readiness for deployment.
6.  **Stage 6: Deployment (Small Impact)**
    *   **Action:** Configure and deploy the static site.
    *   **Check-in:** Verify the live site.

**Information Needed (Addressed):**

*   Design/Branding: Logo provided, reference site `https://petertreichl.at/`. Colors: `#1E4D3B` and white. Modern sans-serif fonts.
*   Imagery: Placeholders for Zuzana and target groups.
*   References: `https://petertreichl.at/` is a design reference, not content.
*   Contact: Placeholder email, include contact form, include WhatsApp button (placeholder number).
*   Legal: Impressum page needed (placeholder content).
*   Domain/Hosting: Not in scope for development. 