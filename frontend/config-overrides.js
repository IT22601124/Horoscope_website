const path = require('path');

module.exports = function override(config, env) {
  // Set the correct entry point to Horoscope_website/index.js
  config.entry = path.resolve(__dirname, '../Horoscope_website/index.js');
  return config;
};
