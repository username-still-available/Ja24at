---
layout: base.njk
title: Image Optimization Guide
---

# Image Optimization Guide for 24ja.at

This guide explains how to use the Eleventy Image plugin to optimize images throughout the site.

## Basic Usage

To optimize an image and make it responsive, use the `image` or `picture` shortcodes:

### Using the `image` shortcode

```njk
{% raw %}
{% image "/assets/images/original/kinderbetreuung/suzanna-kind-1.jpg", "Kinderbetreuung: Suzana mit Kind", "(min-width: 768px) 50vw, 100vw", "your-css-class" %}
{% endraw %}
```

### Using the `picture` shortcode (more control)

```njk
{% raw %}
{% picture "/assets/images/original/kinderbetreuung/suzanna-kind-1.jpg", "Kinderbetreuung: Suzana mit Kind", "(min-width: 768px) 50vw, 100vw", "your-css-class" %}
{% endraw %}
```

## Parameters Explained

1. **src**: Path to the original image (relative to the `src` directory)
2. **alt**: Alt text for the image (required for accessibility)
3. **sizes**: Sizes attribute (how big the image will be displayed at different viewports)
4. **className**: CSS class to apply to the image (optional)
5. **loading**: Loading attribute (defaults to "lazy")

## Examples

### Example with Actual Images

```njk
{% raw %}
{% picture "/assets/images/original/kinderbetreuung/suzanna-kind-1.jpg", "Suzana mit Kind", "100vw", "w-full h-full object-cover" %}
{% endraw %}
```

### Content Image (Half Width on Desktop)

```njk
{% raw %}
{% picture "/assets/images/original/erwachsenenbetreuung/20250420_132453.jpg", "Personenbetreuung", "(min-width: 768px) 50vw, 100vw", "rounded-lg shadow-md" %}
{% endraw %}
```

### Thumbnail (Small Image)

```njk
{% raw %}
{% image "/assets/images/original/erwachsenenbetreuung/Grillhendl/20250420_144108.webp", "Grillhendl", "150px", "rounded-full" %}
{% endraw %}
```

## How It Works

The Eleventy Image plugin:

1. Generates multiple sizes of each image (320px, 640px, 960px, 1280px)
2. Creates versions in multiple formats (AVIF, WebP, JPEG)
3. Automatically adds the appropriate HTML for responsive images
4. Caches processed images to speed up builds

## For JavaScript-Generated Content

When working with image paths in JavaScript (like in the recipe gallery):

1. Use the optimized image paths in `/img/` directory
2. Name format will be: `original-filename-width.format` (e.g., `suzanna-kind-1-640w.webp`)

## Benefits

- Faster page loads (smaller file sizes)
- Better performance scores
- Reduced bandwidth usage
- Appropriate image sizes for different devices
- Modern formats with fallbacks for all browsers

## Implementation Process

To gradually update all images on the site:

1. Start with the most visible images (hero, section headers)
2. Update slideshow images
3. Replace content images
4. Update image paths in JavaScript files 