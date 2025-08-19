# Eleventy Migration Plan for 24ja.at

This plan outlines the steps to migrate the existing static HTML website (index.html, impressum.html, datenschutz.html) to an Eleventy-based structure using Markdown for primary content and Nunjucks for layouts.

**Goals:**

*   Improve content maintainability by separating content from layout.
*   Establish a scalable structure for potential future site growth.
*   Integrate seamlessly with the existing Tailwind CSS build process.

**Prerequisites:**

*   Node.js and npm installed.
*   Confirm understanding of basic Eleventy concepts (layouts, front matter, collections).

## Migration Stages

### Stage 1: Setup and Basic Structure

1.  **Install Eleventy:**
    *   Add Eleventy as a dev dependency: `npm install --save-dev @11ty/eleventy`
2.  **Create Initial Files/Folders:**
    *   Create `.eleventy.js` (Eleventy config file) in the project root.
    *   Create `src/` directory (this will be our input directory).
    *   Inside `src/`, create `_includes/` directory (for layouts/partials).
    *   Inside `src/`, create `_data/` directory (for global data).
3.  **Basic Eleventy Configuration (`.eleventy.js`):**
    *   Configure input (`src`) and output (`_site` - common default) directories.
    *   Set up passthrough copy for static assets:
        *   `assets/` directory (images, icons)
        *   `fonts/` directory
        *   `css/` directory (specifically the *compiled* `style.css` and `fonts.css`)
        *   `js/` directory (`script.js`, `process-steps.js`)
        *   Root files like `robots.txt`, `sitemap.xml`

### Stage 2: Create Base Layout

1.  **Create Base Layout File:**
    *   Create `src/_includes/base.njk`.
2.  **Extract Skeleton from `index.html`:**
    *   Copy the entire content of the current `index.html`.
    *   Paste it into `src/_includes/base.njk`.
3.  **Identify Reusable Sections:**
    *   Header/Navigation (`<nav>...</nav>`)
    *   Footer (`<footer>...</footer>`)
4.  **Parameterize Content Area:**
    *   Locate the main content area in `base.njk` (everything between the `</header>` and `<footer>`).
    *   Replace this entire block with `{{ content | safe }}`. The `safe` filter prevents Nunjucks from escaping HTML within the content.
5.  **Parameterize Head Elements:**
    *   Replace the `<title>` tag content with `{{ title or metadata.title }}`.
    *   Consider parameterizing meta descriptions if they vary per page (`{{ description or metadata.description }}`).
6.  **Create Global Data File:**
    *   Create `src/_data/metadata.json`.
    *   Add default site title and potentially description:
        ```json
        {
          "title": "24ja.at - Macht das Leben leichter",
          "description": "Professionelle Sozialarbeit von Zuzana Jancova..."
        }
        ```

### Stage 3: Migrate Content Pages

1.  **Create Content Files:**
    *   Create `src/index.md`.
    *   Create `src/impressum.md`.
    *   Create `src/datenschutz.md`.
2.  **Add Front Matter:**
    *   In each `.md` file, add YAML front matter at the top to specify the layout and page title:
        ```yaml
        ---
        layout: base.njk
        title: Home # Or Impressum, Datenschutz
        # Optional: Add specific description if needed
        # description: "This is the description for the homepage."
        ---
        ```
3.  **Copy Page-Specific Content:**
    *   For `index.md`: Copy the HTML content from the *original* `index.html` that was *between* the `</header>` and `<footer>` tags. Paste this below the front matter in `index.md`.
    *   For `impressum.md`: Copy the main content section from the *original* `impressum.html` (likely everything inside `<body>` except header/footer if they were planned to be shared) and paste below the front matter.
    *   For `datenschutz.md`: Do the same as for impressum.
    *   *Note: Eleventy processes Markdown files, but HTML within them is rendered directly. This allows gradual migration without converting everything to Markdown syntax immediately.*

### Stage 4: Integrate Build Process & Test

1.  **Update `package.json` Scripts:**
    *   Modify the `build` script to first run the CSS build, then run Eleventy.
    *   Add a `start` or `dev` script to run Tailwind watch and Eleventy serve concurrently (e.g., using `npm-run-all` or similar).
    *   Example `scripts` section:
        ```json
        "scripts": {
          "build:css": "npx tailwindcss -i ./css/input.css -o ./_site/css/style.css --minify", // Output to _site/css
          "build:11ty": "eleventy",
          "build": "npm run build:css && npm run build:11ty",
          "watch:css": "npx tailwindcss -i ./css/input.css -o ./_site/css/style.css --watch",
          "watch:11ty": "eleventy --serve",
          "start": "npm-run-all --parallel watch:*" // Requires: npm install --save-dev npm-run-all
        },
        ```
    *   *Important:* Adjust Tailwind output path (`-o`) to target the Eleventy output directory (e.g., `_site/css/style.css`). Also update the CSS link in `base.njk` accordingly (e.g., `<link rel="stylesheet" href="/css/style.css">`).
2.  **Update `netlify.toml`:**
    *   Change the `publish` directory to Eleventy's output directory (e.g., `publish = "_site"`).
    *   Ensure the `command` reflects the new build script (e.g., `command = "npm run build"`).
3.  **Local Build & Serve:**
    *   Run `npm run build` to test the production build. Inspect the `_site` folder.
    *   Run `npm start` (or `npm run dev`) to test local development server with watching. Access the site in your browser (usually `http://localhost:8080`).
4.  **Test Functionality:**
    *   Verify all pages render correctly.
    *   Test navigation links.
    *   Test mobile menu.
    *   Test "Process Steps" interactivity.
    *   Check console for errors.

### Stage 5: Refinement (Optional/Post-Initial Migration)

1.  **Extract Partials:** Move the header (`<nav>`) and footer (`<footer>`) code from `base.njk` into separate `src/_includes/header.njk` and `src/_includes/footer.njk` files. Use `{% include "header.njk" %}` and `{% include "footer.njk" %}` within `base.njk`.
2.  **Convert Content:** Gradually convert the HTML content within the `.md` files to actual Markdown syntax where appropriate for better readability.
3.  **Data Files:** Move any repeated data (e.g., contact details) into `src/_data/` files and reference them in templates (e.g., `{{ metadata.email }}`).
4.  **Clean Up:** Remove the original root `index.html`, `impressum.html`, `datenschutz.html` files once the migration is verified.

## Post-Migration Tasks

*   Thoroughly test the deployed site on Netlify.
*   Monitor Lighthouse scores after deployment.
*   Consider adding Eleventy plugins for image optimization or other enhancements if needed.

This plan provides a structured approach. We can tackle it stage by stage. 