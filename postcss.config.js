module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('rfs')({
      baseValue: '1rem'
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
};
