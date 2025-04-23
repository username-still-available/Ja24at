// Eleventy configuration file

module.exports = function(eleventyConfig) {
  // Passthrough Copy: Copy static assets directly to output
  eleventyConfig.addPassthroughCopy("src/assets"); // Copy content of src/assets to _site/assets
  eleventyConfig.addPassthroughCopy("src/fonts");  // Copy content of src/fonts to _site/fonts
  eleventyConfig.addPassthroughCopy("src/css");    // Copy content of src/css to _site/css
  eleventyConfig.addPassthroughCopy("src/js");     // Copy content of src/js to _site/js
  eleventyConfig.addPassthroughCopy("robots.txt"); // Copy robots.txt to _site/robots.txt
  eleventyConfig.addPassthroughCopy("sitemap.xml"); // Copy sitemap.xml to _site/sitemap.xml

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