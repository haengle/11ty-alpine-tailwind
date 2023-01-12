const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const checklist = {
        '.checklist': {
           position: 'relative',
           margin: '2rem auto',
           maxWidth: 'var(--section-max-width)',
           'h2': {
             marginBottom: 'rfs(3rem)',
           },
           '> ul': {
             listStyle: 'none',
             margin: '0',
             padding: '0',
             '.checklist-item': {
                position: 'relative',
                paddingLeft: 'calc(var(--checklist-title-fs) + .75rem)',
                marginBottom: 'rfs(2rem)',
                '> svg': {
                    fontSize: 'var(--checklist-title-fs)',
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    'path': {
                        color: 'var(--checklist-icon-color)',
                    },
                },
                '.checklist-item-title': {
                    fontSize: 'var(--checklist-title-fs)',
                    color: 'var(--checklist-title-color)',
                    fontFamily: 'var(--checklist-title-ff)',
                    fontWeight: 'var(--checklist-title-fw)',
                    display: 'block',
                    lineHeight: '1.1',
                    ' + .checklist-item-details': {
                        marginTop: '.5rem',
                    }
                },
                '.checklist-item-details': {
                    fontSize: 'var(--checklist-details-fs)',
                    color: 'var(--checklist-details-color)',
                    fontFamily: 'var(--checklist-details-ff)',
                    fontWeight: 'var(--checklist-details-fw)',
                    ' > *:last-child': {
                        marginBottom: '0',
                    },
                },
             }
           },
          '&.checklist--default': {
            '.checklist-item': {
                paddingBottom: '2rem',
                borderBottom: '1px solid var(--checklist-border-color)',
            },
          },
          '&.checklist--twocolumns': {
            '@screen md': {
              '> ul': {
                display: 'flex',
                flexDirection: 'row', 
                flexWrap: 'wrap',
                '.checklist-item': {
                    flex: '0 1 50%',
                    paddingRight: '1rem',
                },
              },
            },
          },
          '&.white': {
            '> ul': {
                '.checklist-item': {
                    'svg path': {
                        fill: '#fff',
                        opacity: '.85',
                    },
                    '.checklist-item-title, .checklist-item-details, a': {
                        color: '#fff',
                    },
                },
            },
          },
        },
        
      }

      addComponents(checklist, ['responsive, hover'])
});