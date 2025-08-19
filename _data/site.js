module.exports = function() {
  // Determine if running in a production environment
  // Netlify sets NODE_ENV to 'production' by default during builds.
  // Alternatively, you can set a custom ELEVENTY_ENV variable in your Netlify build settings
  // and in your local package.json scripts (e.g., "build": "ELEVENTY_ENV=production eleventy").
  const isProduction = process.env.NODE_ENV === 'production' || process.env.ELEVENTY_ENV === 'production';

  // Define the CDN URL for production. For local development, it will be an empty string.
  const cdnUrl = 'https://zuzannajancovaja24at.netlify.app';
  const imagePrefix = isProduction ? cdnUrl : '';

  return {
    environment: process.env.NODE_ENV || process.env.ELEVENTY_ENV || 'development',
    imagePrefix: imagePrefix, // Use this to prefix image paths
    // You can add other global site data here, for example:
    // name: "24ja.at",
    // authorName: "Zuzana Jancova",
    // currentYear: new Date().getFullYear()
  };
}; 