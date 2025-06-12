# Recipe System Documentation

## Overview

The 24ja.at website now includes a comprehensive recipe system that allows for structured recipe content with SEO optimization, filtering capabilities, and an admin interface for easy recipe creation.

## System Components

### 1. Recipe Collection (.eleventy.js)
- Configured as an Eleventy collection that processes markdown files in `src/rezepte/`
- Automatically sorts recipes by date (newest first)
- Includes date filter for proper formatting

### 2. Recipe Layout (src/_includes/recipe.njk)
- Individual recipe page template inspired by the Roland Mehes design
- Features the 24ja.at branding (green colors, logo, Fira Sans font)
- Includes Schema.org structured data for SEO
- Interactive features: ingredient checkboxes, print button, sharing, rating system
- Print-friendly styling

### 3. Recipe Index (src/_includes/recipe-index.njk & src/recipes.md)
- Main recipe listing page accessible at `/rezepte/`
- Grid layout with recipe cards
- Search functionality and category/difficulty filtering
- Responsive design with hover effects

### 4. Admin Interface (src/recipe-admin.html)
- Form-based recipe creation tool accessible at `/rezept-verwaltung/`
- Generates properly formatted markdown files for download
- Includes example data and validation
- Not linked from main site (separate system as requested)

## Recipe Data Structure

Each recipe markdown file contains YAML frontmatter with the following fields:

### Required Fields
- `layout: recipe.njk` - Template to use
- `title` - Recipe name
- `date` - Publication date (YYYY-MM-DD format)

### Optional Fields
- `description` - SEO description and recipe summary
- `image` - Path to recipe image
- `prepTime` - Preparation time in minutes
- `cookTime` - Cooking time in minutes  
- `totalTime` - Total time in minutes
- `servings` - Number of servings
- `difficulty` - Einfach, Mittel, or Schwer
- `category` - Vorspeise, Hauptgericht, Nachspeise, etc.
- `tags` - Array of tags for filtering
- `ingredients` - Array of ingredient strings
- `instructions` - Array of instruction steps

### Content
- Additional markdown content can be added after the frontmatter
- Supports full markdown syntax including headings, lists, and formatting

## Adding New Recipes

### Method 1: Using the Admin Interface
1. Navigate to `/rezept-verwaltung/` (not linked from main site)
2. Fill out the recipe form with all details
3. Click "Rezept generieren" to generate the markdown file
4. Download or copy the generated content
5. Save as `.md` file in `src/rezepte/` directory
6. Rebuild the site with `npm run build`

### Method 2: Manual Creation
1. Create a new `.md` file in `src/rezepte/`
2. Use the filename format: `rezept-name.md` (lowercase, hyphens)
3. Add YAML frontmatter with recipe data
4. Add any additional content in markdown format
5. Rebuild the site

### Example Recipe File
```markdown
---
layout: recipe.njk
title: Beispiel Rezept
description: Eine kurze Beschreibung des Rezepts
date: 2025-01-20
image: /assets/images/beispiel.jpg
prepTime: 15
cookTime: 30
totalTime: 45
servings: 4
difficulty: Mittel
category: Hauptgericht
tags:
  - Tag1
  - Tag2
ingredients:
  - 500g Zutat 1
  - 2 EL Zutat 2
instructions:
  - Erster Schritt
  - Zweiter Schritt
---

Zusätzlicher Inhalt in Markdown-Format.
```

## SEO Features

### Schema.org Structured Data
- Complete Recipe markup for rich snippets in search results
- Includes ingredients, instructions, cooking times, ratings
- Improves search visibility and click-through rates

### Meta Tags
- Open Graph tags for social media sharing
- Twitter Card support
- Proper canonical URLs
- Optimized titles and descriptions

## Design Features

### Visual Elements
- Maintains 24ja.at branding (green color scheme, logo)
- Uses Fira Sans font consistently
- Clean, modern card-based layout
- Responsive design for all devices

### Interactive Features
- Ingredient checkboxes for cooking assistance
- Recipe search and filtering
- Print functionality
- Social sharing capabilities
- Recipe rating system (stored locally)

### Inspired Design Elements
Based on the Roland Mehes recipe layout:
- Clear recipe metadata display (time, servings, difficulty)
- Structured ingredient and instruction lists
- Professional photography layout
- Easy navigation between recipes

## File Structure
```
src/
├── rezepte/                    # Recipe markdown files
│   ├── wiener-schnitzel.md
│   ├── sachertorte.md
│   └── gemischter-salat.md
├── _includes/
│   ├── recipe.njk             # Individual recipe template
│   └── recipe-index.njk       # Recipe listing template
├── recipes.md                 # Recipe index page
└── rezept-verwaltung.html     # Admin interface
```

## Integration with Existing Site

### Separation from Main Site
- Recipe system is completely separate from main landing page
- No navigation links added to main site
- Accessible via direct URLs only:
  - `/rezepte/` - Recipe index
  - `/rezepte/rezept-name/` - Individual recipes
  - `/rezept-verwaltung/` - Admin interface

### Build Integration
- Recipes build automatically with `npm run build`
- Uses existing Tailwind CSS and font setup
- Follows same deployment process as main site

## Maintenance

### Adding Images
1. Add recipe images to `src/assets/images/`
2. Reference them in recipe frontmatter as `/assets/images/filename.jpg`
3. Images are automatically processed by Eleventy's image optimization

### Updating Templates
- Recipe layout: Edit `src/_includes/recipe.njk`
- Recipe index: Edit `src/_includes/recipe-index.njk`
- Admin interface: Edit `src/recipe-admin.html`

### Backup
Regular backups should include:
- All markdown files in `src/rezepte/`
- Template files in `src/_includes/`
- Any custom images in `src/assets/images/`

## Future Enhancements

Potential additions could include:
- Recipe categories with dedicated pages
- Advanced search with ingredient filtering
- Recipe collections/meal plans
- Nutritional information display
- User comments system
- Recipe import/export functionality 