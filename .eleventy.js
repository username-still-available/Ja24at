// Eleventy configuration file

module.exports = function(eleventyConfig) {
  // Passthrough Copy: Copy static assets directly to output
  eleventyConfig.addPassthroughCopy("src/assets"); // Copy content of src/assets to _site/assets
  eleventyConfig.addPassthroughCopy("src/fonts");  // Copy content of src/fonts to _site/fonts
  eleventyConfig.addPassthroughCopy("src/css");    // Copy content of src/css to _site/css
  eleventyConfig.addPassthroughCopy("src/js");     // Copy content of src/js to _site/js
  eleventyConfig.addPassthroughCopy("robots.txt"); // Copy robots.txt to _site/robots.txt
  eleventyConfig.addPassthroughCopy("sitemap.xml"); // Copy sitemap.xml to _site/sitemap.xml

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