// Eleventy configuration file
const Image = require("@11ty/eleventy-img");
const path = require("path");

// Image shortcode function
async function imageShortcode(src, alt, sizes, className = "", loading = "lazy") {
  if (!src) {
    throw new Error(`Missing image source for image with alt: "${alt}"`);
  }

  if (!alt) {
    throw new Error(`Missing alt text for image: ${src}`);
  }

  // Resolve the image path
  let inputPath = src;
  if (!src.startsWith("http")) {
    inputPath = path.join("src", src);
  }

  // Default image widths
  const widths = [320, 640, 960, 1280];
  
  // Generate optimized images
  let metadata = await Image(inputPath, {
    widths: widths,
    formats: ["webp", "jpeg"],
    outputDir: "_site/img/", // Where optimized images will be output
    urlPath: "/img/",        // URL path for the optimized images
    sharpJpegOptions: {
      quality: 80,
      progressive: true
    },
    sharpWebpOptions: {
      quality: 75
    },
    filenameFormat: function(id, src, width, format) {
      const extension = path.extname(src);
      const basename = path.basename(src, extension);
      return `${basename}-${width}w.${format}`;
    }
  });

  // Generate the HTML markup
  let imageAttributes = {
    alt,
    sizes,
    loading,
    decoding: "async",
  };

  // Add class if provided
  if (className) {
    imageAttributes.class = className;
  }

  // Generate the responsive image HTML
  return Image.generateHTML(metadata, imageAttributes);
}

// Picture shortcode function for more control
async function pictureShortcode(src, alt, sizes, className = "", loading = "lazy") {
  if (!src || !alt) {
    throw new Error(`Missing src or alt for picture: ${src}`);
  }
  
  // Resolve the image path
  let inputPath = src;
  if (!src.startsWith("http")) {
    inputPath = path.join("src", src);
  }

  // Generate optimized images
  const metadata = await Image(inputPath, {
    widths: [320, 640, 960, 1280],
    formats: ["webp", "jpeg"],
    outputDir: "_site/img/",
    urlPath: "/img/",
    sharpJpegOptions: {
      quality: 80,
      progressive: true
    },
    sharpWebpOptions: {
      quality: 75
    }
  });

  // Generate picture HTML
  const pictureClass = className ? `class="${className}"` : '';
  let pictureHtml = `<picture ${pictureClass}>`;
  
  // WebP format
  if (metadata.webp) {
    pictureHtml += `<source type="image/webp" srcset="${metadata.webp.map(img => `${img.url} ${img.width}w`).join(", ")}" sizes="${sizes}">`;
  }
  
  // JPEG fallback
  const jpeg = metadata.jpeg;
  if (!jpeg || jpeg.length === 0) {
    throw new Error(`No JPEG format generated for ${src}`);
  }
  
  const imgClass = className ? `class="${className}"` : '';
  pictureHtml += `<img src="${jpeg[0].url}" srcset="${jpeg.map(img => `${img.url} ${img.width}w`).join(", ")}" 
                      sizes="${sizes}" alt="${alt}" ${imgClass} loading="${loading}" decoding="async">`;
  pictureHtml += `</picture>`;
  
  return pictureHtml;
}

module.exports = function(eleventyConfig) {
  // Add image shortcodes
  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  eleventyConfig.addAsyncShortcode("picture", pictureShortcode);

  // Passthrough Copy: Copy static assets directly to output
  // Remove the general src/assets rule
  // eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Explicitly copy subdirectories within assets to preserve structure
  eleventyConfig.addPassthroughCopy({"src/assets/icons": "assets/icons"});
  eleventyConfig.addPassthroughCopy({"src/assets/logo": "assets/logo"});
  eleventyConfig.addPassthroughCopy({"src/assets/review": "assets/review"});
  

  eleventyConfig.addPassthroughCopy("src/fonts");  // Copy content of src/fonts to _site/fonts
  eleventyConfig.addPassthroughCopy("src/css");    // Copy content of src/css to _site/css
  

  eleventyConfig.addPassthroughCopy("src/js");     // Copy content of src/js to _site/js
  eleventyConfig.addPassthroughCopy("robots.txt"); // Copy robots.txt to _site/robots.txt
  eleventyConfig.addPassthroughCopy("sitemap.xml"); // Copy sitemap.xml to _site/sitemap.xml

  // Explicitly copy subdirectories within assets to preserve structure
  eleventyConfig.addPassthroughCopy({"src/assets/icons": "assets/icons"});
  eleventyConfig.addPassthroughCopy({"src/assets/logo": "assets/logo"});
  eleventyConfig.addPassthroughCopy({"src/assets/review": "assets/review"});
  eleventyConfig.addPassthroughCopy({"src/assets/favicon": "assets/favicon"});
  

  // Tell Eleventy to watch the CSS source directory for changes
  eleventyConfig.addWatchTarget("./src/css/");

  // Shortcodes
  eleventyConfig.addShortcode("year", function() {
    return new Date().getFullYear().toString();
  });

  // Server Options (for BrowserSync)
  eleventyConfig.setServerOptions({
    // Default Browsersync options shown:
    // https://github.com/11ty/eleventy-dev-server
    // https://www.11ty.dev/docs/dev-server/
    // Override Built-in Options (Optional)
    // Show the server version number on the command line
    showVersion: false,
    // Change the default file path for the browser page
    startPath: "/",
    // Opt-out of the Browsersync snippet
    snippet: true,
    // Run as asynchronous task
    async: false,
    // Additional files to watch that will trigger server updates
    // (Does not) trigger a build
    // watch: [],
    // Show local network IP addresses for device testing
    showAllHosts: false,

    // --- Base options for Browsersync server --- 
    // https://browsersync.io/docs/options#option-server
    // server: {},

    // --- Explicitly disable SPA routing --- 
    // This might be the key fix
    // https://browsersync.io/docs/options#option-single
    single: false,
  });

  // Browsersync configuration to watch output CSS/JS files
  eleventyConfig.setBrowserSyncConfig({
    files: [
      './_site/css/**/*.css', // Watch for CSS changes in the output dir
      './_site/js/**/*.js'    // Watch for JS changes in the output dir
    ]
  });

  // Return the configuration object
  return {
    dir: {
      input: "src",       // Source directory
      output: "_site",     // Output directory
      includes: "_includes", // Relative to input directory
      data: "_data"        // Relative to input directory
    },
    templateFormats: ["md", "njk", "html"], // Process these file types as templates
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk",    // Use Nunjucks for HTML files
    passthroughFileCopy: true     // Enable passthrough file copy
  };
}; 