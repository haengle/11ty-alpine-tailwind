const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const sections = {
        '.section': {
           padding: 'rfs(4rem) rfs(2rem)',
           display: 'flex',
           flexDirection: 'column',
           margin: 'auto',
           maxWidth: 'var(--section-max-width)',
           position: 'relative',
           '&:empty': {
             padding: '0',
           },
          '.section-image': {
              marginBottom: 'rfs(2rem)',
              '&:empty': {
                display: 'none',
              },
              'img': {
                objectFit: 'cover',
                marginBottom: '0',
                width: '100%',
                height: '100%',
              },
          },
          '.section-content': {
            position: 'relative',
            '.section-buttons-wrapper': {
              '> *': {
                  margin: '.5rem .5rem .5rem 0',
              },
            },
          },
          '> .full-bleed': {
             height: 'var(--section-image-height-sm)',
             top: 'rfs(-4rem)',
             '@screen md': {
               height: '100%',
               top: '0',
             }
          },
          '&.section--image-left, &.section--image-right': {
            '.section-image': {
              margin: '1rem auto',
            },
            '@screen md': {
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                '.section-image': {
                    flex: '0 1 50%',
                    width: '50%',
                    marginBottom: '0',
                },
                '.section-content': {
                    flex: '0 1 50%',
                    paddingLeft: '2rem',
                },
              },
          },
          '&.section--image-right': {
            '.section-image': {
               order: '10',
            },
            '@screen md': {
              '.section-content': {
                  paddingRight: '2rem',
                  paddingLeft: '0',
              },
            },
          },
          '&.section--image-bottom': {
            '.section-image':{
              order: '10',
              marginBottom: '0',
              marginTop: 'rfs(3rem)',
            },
            '.section-content': {
              order: '1',
            }
          },
          '&.section--image-flush-left, &.section--image-flush-right': {
            padding: '0',
            '.section-content': {
              padding: 'rfs(2rem)',
            },
            '@screen md': {
              flexDirection: 'row',
              alignItems: 'stretch',
              '.section-image': {
                width: '50%',
                flex: '0 1 50%',
                marginBottom: '0',
              },
              '.section-content': {
                flex: '0 1 50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              },
            },
          },
          '&.section--image-flush-right, &.section--image-flush-bottom': {
            '.section-image': {
              order: '2',
            },
          },
          '&.section--image-flush-top, &.section--image-flush-bottom': {
            padding: '0',
            justifyContent: 'stretch',
            '.section-image': {
              width: '100%',
              flex: '1 1 100%',
              marginBottom: '0',
            },
            '.section-content': {
              flex: '1 1 100%',
              padding: '2rem',
            }, 
          },
          '&.section--twocols': {
            '.section-content-wrapper': {
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              '@screen md': {
                  flexDirection: 'row',
                  gap: '4rem',
                  '> div':{
                    flex: '0 1 auto',
                    minWidth: '30%',
                  },
                },
              },
          },
          '&.section--threecols': {
            '.section-content-wrapper': {
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              '@screen md': {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              '@screen lg': {
                  gap: '4rem',
                  flexWrap: 'nowrap',
                  '> div':{
                    flex: '0 1 auto',
                    minWidth: '30%',
                  },
                },
              },
          },
        },
        
      }

      addComponents(sections, ['responsive, hover'])
});