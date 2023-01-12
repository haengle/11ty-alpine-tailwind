const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const grid = {
        '.main': {
          display: 'flex',
          flexDirection: 'column',
          '> section:first-child': {
            order: '-5',
          },
        },
        '.container': {
          position: 'relative',
          paddingLeft: 'var(--whitespace)',
          paddingRight: 'var(--whitespace)',
          '&.container--fluid':{
              'maxWidth': 'none',
          },
        },
        '.row': {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--whitespace)',
          '@screen md': {
            display: 'grid',
            gridAutoColumns: 'minmax(0, 1fr)',
            gridAutoFlow: 'column'
          },
          '> *': {
            width: '100%',
            height: '100%',
          },
          '&.grid-flow-row':{
            ' > *': {
              height: 'auto',
            },
          },
        },

      }

      addComponents(grid)
});