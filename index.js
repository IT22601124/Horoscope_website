const path = require('path');

module.exports = function override(config, env) {
  // Modify entry to point to your Horoscope_website/index.js
  config.entry = path.resolve(__dirname, '../Horoscope_website/index.js');
  return config;
};
