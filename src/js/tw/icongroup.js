const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const icongroup = {
        '.icon-group-wrapper': {
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--whitespace) !important',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            margin: 'var(--whitespace) 0',
            '@screen md': {
                flexDirection: 'row',
                gap: '0 !important',
            }
        },
        '.icon-group-item': {
           position: 'relative',
           maxWidth: '375px',
           width: '100%',
          '.icon-group-item-image': {
                width: '80px',
                height: '80px',
                overflow: 'hidden',
                margin: '0 auto 1rem',
            'img': {
                objectFit: 'cover',
                marginBottom: '0',
                width: '100%',
                height: '100%',
              },
              '@screen lg': {
                width: '160px',
                height: '160px',
              }
          },
          '.icon-group-item-content': {
            position: 'relative',
            textAlign: 'center',
            padding: '1rem',
            '.card-buttons-wrapper': {
                '> *': {
                    margin: '.5rem .5rem .5rem 0',
                },
            },
          },
        },
        
      }

      addComponents(icongroup, ['responsive, hover'])
});