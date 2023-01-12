const { dest, series, src, watch } = require('gulp');
const del = require('del');
const { rollup } = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const json = require('@rollup/plugin-json');
const copy = require('rollup-plugin-copy');

const srcDir = './src';
const outputDir = './dist';

const deleteOutputDirectory = async () => {
  await del([
    outputDir
  ]);
};

const bundleCss = async () => {
  await src(`${srcDir}/css/default/main.css`)
    .pipe(postcss())
    .pipe(rename('styles.css'))
    .pipe(dest(`${outputDir}/css/`));
};

const bundleJavaScript = async () => {
  const bundle = await rollup({
    input: `${srcDir}/js/main.js`,
    plugins: [
      nodeResolve(),
      json(),
      copy({
        targets: [
          { src: [`${srcDir}/js/custom/browserWarn.js`, `${srcDir}/js/custom/intlTelInput.min.js`, `${srcDir}/js/custom/intlTelInput.utilities.js`], dest: `${outputDir}/js/custom` }
        ],
      })
    ]
  });

  await bundle.write({
    file: `${outputDir}/js/bundle.js`,
    format: 'iife',
    plugins: [
      terser()
    ]
  });
};

const watchDevTasks = () => {
  watch([
    `${srcDir}/**/*.css`,
    `${srcDir}/**/*.js`,
    `${srcDir}/**/*.njk`
  ], bundleCss);
  watch([
    `${srcDir}/**/*.js`
  ], bundleJavaScript);
};

exports.devTasks = series(
  deleteOutputDirectory,
  bundleCss,
  bundleJavaScript,
  watchDevTasks
);

exports.buildTasks = series(
  deleteOutputDirectory,
  bundleCss,
  bundleJavaScript
);