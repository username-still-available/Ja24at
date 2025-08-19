module.exports = function() {
  const isProduction = process.env.NODE_ENV === 'production' || process.env.ELEVENTY_ENV === 'production';
  const cdnUrl = 'https://zuzannajancovaja24at.netlify.app';
  const imagePrefix = isProduction ? cdnUrl : '';
  return {
    environment: process.env.NODE_ENV || process.env.ELEVENTY_ENV || 'development',
    imagePrefix: imagePrefix,
  };
}; 