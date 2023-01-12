module.exports = {
  theme: {
    container: {
      center: true,
    },  
    extend: {
      screens: {
        'offcanvas-disabled': '1280px',
        'offcanvas-enabled': {'max': '1279.9px'},
        'below-md': {'max': '767.9px'},
        'overview-expanded': '1024px',
      },
      maxWidth: {
        '220px': '220px',
        '320px': '320px',
      },
      spacing: {
        'default': '1rem',
        'compact': '.5rem',
        'extra': '1.5rem'
      },
      flex: {
        '50': '0 1 50%',
        '100': '1 1 100%'
      },
      gridTemplateColumns: {
        'auto': 'auto'
      },
      width: {
        '50vw': '50vw',
        '66vw': '66vw',
      },
      height: {
        '700': '700px',
        '160': '160px',
      },
      zIndex: {
        'neg1': '-1'
      },
      fontSize: {
        'md': '.95rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('./src/js/tw/grid.js'),
    require('./src/js/tw/buttons.js'),
    require('./src/js/tw/typography.js'),
    require('./src/js/tw/navbar.js'),
    require('./src/js/tw/footer.js'),
    require('./src/js/tw/hero.js'),
    require('./src/js/tw/accordion.js'),
    require('./src/js/tw/tabs.js'),
    require('./src/js/tw/modal.js'),
    require('./src/js/tw/sections.js'),
    require('./src/js/tw/cards.js'),
    require('./src/js/tw/utilities.js'),
    require('./src/js/tw/carousel.js'),
    require('./src/js/tw/dates.js'),
    require('./src/js/tw/faculty.js'),
    require('./src/js/tw/checklists.js'),
    require('./src/js/tw/facts.js'),
    require('./src/js/tw/forms.js'),
    require('./src/js/tw/blog.js'),
    require('./src/js/tw/icongroup.js'),
    require('./src/js/tw/steps.js'),
    require('./src/js/tw/tables.js'),
    require('./src/js/tw/compareprograms.js')
  ]
};