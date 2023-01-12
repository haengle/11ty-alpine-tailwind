const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const card = {
        '.card-group-wrapper': {
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--whitespace) !important',
            flexWrap: 'wrap',
            alignItems: 'stretch !important',
            margin: 'var(--whitespace) 0',
            '@screen md': {
                flexDirection: 'row',
                gap: '0 !important',
            }
        },
        '.card': {
           margin: 'auto',
           position: 'relative',
           maxWidth: '375px',
           width: '100%',
           '.card-wrapper': {
            display: 'flex',
            flexDirection: 'column',
           },
          '.card-image': {
            marginBottom: 'rfs(2rem)',
            'img': {
                objectFit: 'cover',
                marginBottom: '0',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--card-radius)',
              },
            '&.card-image--small': {
                width: '150px',
                height: '150px',
                borderRadius: '100%',
                overflow: 'hidden',
                margin: '0 auto 1rem',
            },
          },
          '.card-content': {
            position: 'relative',
            color: 'var(--text-color)',
            '.card-buttons-wrapper': {
                '> *': {
                    margin: '.5rem .5rem .5rem 0',
                },
            },
          },
          '.card-catdate-wrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1rem',
            '&:empty': {
                display: 'none'
            },
            '.card-cat': {
                'span': {
                    display: 'block',
                    color: 'var(--card-category-color)',
                },
            },
          },
          '&.card--default': {
            '.card-wrapper': {
                padding: '1rem',
            },
            '.card-content': {
                color: 'inherit',
            },
          },
          '&.card--horizontal': {
              marginBottom: 'rfs(2rem)',
          },
          '&.card--outline, &.card--fill, &.card--brand': {
              padding: '.5rem',
              '.card-wrapper': {
                  borderRadius: 'var(--card-radius)',
                  border: 'var(--card-outline-border-width) solid var(--card-outline-border-color)',
                  height: '100%',
                  boxShadow: 'var(--card-shadow)',
                  background: '#fff',
                  padding: '0',
             },
             '.card-image': {
                 marginBottom: '1rem',
                 'img': {
                     borderBottomLeftRadius: '0',
                     borderBottomRightRadius: '0',
                 },
                 '&.card-image--small': {
                    marginTop: '1rem',
                    marginBottom: '1rem',
                 },
             },
             '.card-content': {
                 padding: '1rem',
             }
          },
          '&.card--fill': {
              '.card-wrapper': {
                  border: 'none',
                  background: 'var(--card-fill-bg)',
              },
          },
          '&.card--brand': {
            '.card-wrapper': {
                border: 'none',
                background: theme("colors.primary.DEFAULT"),
            },
           },
          '&.card--event': {
            '.card-content': {
                display: 'flex',
                flexDirection: 'column',
                'h3': {
                    order: '-1',
                },
            },
            '.card-catdate-wrapper': {
                flexDirection: 'column',
                'div': {
                    marginBottom: '.25rem',
                },
                '.card-cat span': {
                    display: 'inline-block',
                },
                'span': {
                    color: theme("colors.typography_secondary"),
                    ' ~ span': {
                        display: 'block',
                        marginLeft: 'calc(1.25em + 2px)',
                    },
                },
                'svg': {
                    '.fa-primary': {
                        fill: theme("colors.primary.dark"),
                    },
                    '.fa-secondary': {
                        fill: theme("colors.primary.light"),
                    },
                },
            },
            '&.card--brand': {
                '.card-catdate-wrapper': {
                    'span': {
                        color: '#fff',
                    },
                    'svg': {
                        '.fa-primary': {
                            fill: '#fff',
                        },
                        '.fa-secondary': {
                            fill: '#fff',
                        },
                    },
                },
            },
          },
          '@screen md': {
              maxWidth: 'none',
              margin: '0',
              '&.card--horizontal': {
                '.card-wrapper': {
                    flexDirection: 'row',
                    padding: '0 1rem',
                    '.card-content': {
                        padding: '1rem 2rem',
                    },
                    '.card-catdate-wrapper': {
                        flexDirection: 'column',
                    },
                },
                '.card-image': {
                    width: '25%',
                    minWidth: '220px',
                    marginBottom: '0',
                    '&.card-image--small': {
                        minWidth: '150px',
                        width: '150px',
                        marginLeft: '1rem',
                    },
                },
                '&.card--outline, &.card--fill, &.card--brand': {
                    padding: '0',
                   '.card-wrapper': {
                       padding: '0',
                   },
                   '.card-image img': {
                       borderRadius: 'var(--card-radius) 0 0 var(--card-radius)',
                   },
                },
            },
            '&.card--outline': {
                padding: '1rem',
            },
          },
          '@screen lg': {
              '&.card--horizontal': {
                  '.card-image': {
                      minWidth: '270px',
                  },
              },
          },
          
        },
        
      }

      addComponents(card, ['responsive, hover'])
});