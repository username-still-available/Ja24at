// Custom Netlify plugin to handle caching issues
module.exports = {
  onPostBuild: async ({ utils }) => {
    console.log('🧹 Running cache control plugin');
    
    // Find and modify all HTML files to add cache control meta tags if they don't exist
    const htmlFiles = await utils.glob('_site/**/*.html');
    for (const htmlFile of htmlFiles) {
      console.log(`Processing ${htmlFile} for cache control`);
      
      let content = await utils.cache.restore(htmlFile);
      if (!content) {
        content = await utils.run.command(`cat ${htmlFile}`);
      }
      
      // Only add cache tags if they don't already exist
      if (!content.includes('http-equiv="Cache-Control"')) {
        content = content.replace(
          '<head>',
          `<head>
    <!-- Added by netlify-cache-plugin -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">`
        );
        
        await utils.run.command(`echo '${content}' > ${htmlFile}`);
      }
    }
    
    // Find and modify all CSS links to add cache busting
    console.log('Adding cache busting parameters to CSS references');
    const timestamp = Date.now();
    
    // Find all CSS files and add a timestamp to their references
    const cssFiles = await utils.glob('_site/css/*.css');
    for (const cssFile of cssFiles) {
      // Create a backup copy with timestamp
      const baseName = cssFile.replace('_site/css/', '');
      const timestampedCopy = `_site/css/${baseName.replace('.css', '')}-${timestamp}.css`;
      await utils.run.command(`cp ${cssFile} ${timestampedCopy}`);
      console.log(`Created timestamped copy: ${timestampedCopy}`);
    }

    console.log('✅ Cache control plugin completed');
  }
}; 