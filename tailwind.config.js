const deepAssign = require('./src/modules/deep-assign.js');
const presetConfig = require('./tailwind.preset.config.js');
const themeConfig = require('./tailwind.theme.config.js');

const config = {
  presets: [
    presetConfig
  ],
  content: [
    './src/**/*.js',
    './src/**/*.njk'
  ],
  safelist: [
    'pb-0'
  ]
};

module.exports = deepAssign(config, themeConfig);