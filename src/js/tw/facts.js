const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const facts = {
        '.facts-wrapper': {
           position: 'relative',
           margin: '2rem 0',
           width: '100%',
           '.facts-item': {
                '.facts-item-wrapper': {
                    display: 'flex',
                    flexDirection: 'column',
                },
                '.facts-item-title': {
                    color: 'var(--facts-title-color)',
                    fontFamily: 'var(--facts-title-ff)',
                    fontWeight: 'var(--facts-title-fw)',
                    display: 'block',
                    lineHeight: '1',
                    fontSize: 'var(--facts-title-fs)',
                    marginBottom: '5px',
                },
                '.facts-item-stat': {
                    color: 'var(--facts-stat-color)',
                    fontFamily: 'var(--facts-stat-ff)',
                    fontWeight: 'var(--facts-stat-fw)',
                    lineHeight: '1',
                    marginBottom: '1rem',
                    fontSize: 'var(--facts-stat-fs)',
                    order: '-1',
                },
                '.facts-item-disclaimer': {
                    color: 'var(--facts-disclaimer-color)',
                    fontFamily: 'var(--facts-disclaimer-ff)',
                    fontWeight: 'var(--facts-disclaimer-fw)',
                    marginTop: '.5rem',
                    fontSize: 'var(--facts-disclaimer-fs)',
                    ' > *:last-child': {
                        marginBottom: '0',
                    },
                },
                '&.facts-item--card, &.facts-item--card-fill': {
                    justifyContent: 'center',
                    '.facts-item-wrapper': {
                        borderRadius: 'var(--card-radius)',
                        border: 'var(--card-outline-border-width) solid var(--card-outline-border-color)',
                        boxShadow: 'var(--card-shadow)',
                        background: '#fff',
                        height: '100%',
                        padding: 'rfs(1.5rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    },
                },
                '&.facts-item--fill': {
                    padding: '1rem',
                    '.facts-item-wrapper': {
                        padding: 'rfs(1.5rem)',
                    }
                },
                '&.facts-item--card-fill, &.facts-item--fill':{
                    '.facts-item-wrapper': {
                        background: 'var(--facts-fill-bg)',
                        height: '100%',
                    },
                },
           },
          '&.facts-wrapper--default': {
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              '.facts-item': { 
                 textAlign: 'center',
                 padding: 'rfs(2rem)',
                 '&.facts-item--card, &.facts-item--card-fill, &.facts-item--fill': {
                     padding: '1rem',
                 },
                 '&.white': {
                    '.facts-item-title, .facts-item-stat, .facts-item-disclaimer': {
                        color: "#fff",
                        '* ': {
                            color: '#fff',
                        },
                    },
                    '.facts-item-stat': {
                        opacity: '.85',
                    },
                },
              },
              '@screen md': {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'stretch',
               },
          },
          '&.facts-wrapper--stack': {
            display: 'flex',
            flexDirection: 'column',
            '.facts-item': {
                padding: 'rfs(1.5rem) 0',
                borderBottom: '1px solid theme("colors.gray.200")',
                '&.facts-item--card, &.facts-item--card-fill, &.facts-item--fill': {
                    borderBottom: 'none',
                    padding: '1rem 0',
                },
                '&.white': {
                    '.facts-item-title, .facts-item-stat, .facts-item-disclaimer': {
                        color: "#fff",
                    },
                    '.facts-item-stat': {
                        opacity: '.85',
                    },
                },
            }, 
          },
          '&.facts-wrapper--grid, &.facts-wrapper--table': {
             display: 'flex',
             flexDirection: 'row',
             flexWrap: 'wrap',
             justifyContent: 'center',
             maxWidth: '748px',
             margin: '2rem auto',
             '.facts-item': {
                 width: '90%',
                 '.facts-item-wrapper': {
                     flexDirection: 'row',
                     ' > *': {
                         margin: '5px',
                         background: 'var(--facts-fill-bg)',
                         flex: '0 1 50%',
                         display: 'flex',
                         alignItems: 'center',
                         padding: '1rem',
                         flexWrap: 'wrap',
                     },
                     '.facts-item-title': {
                         order: '-1',
                         '.facts-item-disclaimer': {
                             flex: '1 1 100%'
                         },
                     },
                     '.facts-item-stat': {
                         fontSize: 'rfs(2rem)',
                     },
                 },
             },
          },
          '&.facts-wrapper--table': {
            '.facts-item': {
                '.facts-item-wrapper': {
                    ' > *': {
                        margin: '0',
                        background: '#fff',
                        padding: '.75rem',
                        border: '1px solid theme("colors.gray.200")',
                        color: 'var(--text-color)',
                        fontSize: theme("fontSize.base"),
                        margin: '-1px 0',
                    },
                    '.facts-item-stat':{
                        fontWeight: '400',
                        fontSize: theme("fontSize.base"),
                    },
                },
            },
          },
          '&.facts-wrapper--overview': {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '400px',
            margin: 'auto',
            '.facts-item': {
                padding: '1rem 0',
                borderTop: '2px solid theme("colors.primary.DEFAULT")',
                '&.facts-item--card, &.facts-item--card-fill, &.facts-item--fill': {
                    borderBottom: 'none',
                    padding: '0',
                },
                '.facts-item-wrapper': {
                    '.facts-item-title': {
                        textTransform: 'none',
                        color: theme("colors.typography_secondary"),
                        fontFamily: theme("fontFamily.sans"),
                        fontWeight: '400'
                    },
                    '.facts-item-stat': {
                        order: '1',
                        color: 'var(--text-color)',
                        fontSize: theme("fontSize.lg"),
                    }
                },
                '&.white': {
                    '.facts-item-title, .facts-item-stat, .facts-item-disclaimer': {
                        color: "#fff",
                    },
                    '.facts-item-stat': {
                        opacity: '.85',
                    },
                },
            }
          }
        },
        '.quick-facts': {
            borderRadius: theme("borderRadius.md"),
            backgroundColor: 'var(--quickfacts-fill-bg)',
            maxWidth: '300px',
            margin: 'var(--whitespace) auto',
            padding: 'calc(var(--whitespace) * 1.5) 0',
            ' *': { 
                color: 'var(--quickfacts-text-color)'
            },
            'h3': {
                margin: '0 calc(var(--whitespace) * 2) var(--whitespace)',
            },
            '.quick-facts-featured': {
                padding: '0 calc(var(--whitespace) * 2) calc(var(--whitespace) * 2)',
                margin: 'var(--whitespace) 0',
                borderBottom: '1px solid #fff',
                '.featured-fact-text': {
                    color: 'var(--quickfacts-featured-color)',
                    fontFamily: 'var(--quickfacts-featured-ff)',
                    fontWeight: 'var(--quickfacts-featured-fw)',
                    display: 'block',
                    lineHeight: '1',
                    fontSize: 'var(--quickfacts-featured-fs)',
                    marginTop: 'calc(var(--whitespace) / 2)',
                }
            },
            '.quick-facts-label': {
                color: 'var(--quickfacts-label-color)',
                fontFamily: 'var(--quickfacts-label-ff)',
                fontWeight: 'var(--quickfacts-label-fw)',
                display: 'block',
                lineHeight: '1',
                fontSize: 'var(--quickfacts-label-fs)',
                textTransform: 'var(--quickfacts-label-transform)',
                marginBottom: 'calc(var(--whitespace) / 1.5)',
            },
            '.quick-facts-additional': {
                padding: '0 calc(var(--whitespace) * 2)',
                marginTop: 'calc(var(--whitespace) * 1.5)',
                'p, ul, ol': {
                    marginBottom: '0',
                },
                'ul': {
                    marginLeft: '0',
                    paddingLeft: '1em',
                }
            },
            '@screen md': {
                maxWidth: 'var(--quickfacts-max-width)',
            },
            '&.financial-aid': {
                backgroundColor: 'var(--finaid-fill-bg, theme("colors.gray.200"))',
                ' *': { 
                    color: 'var(--finaid-text-color, var(--text-color))'
                },
                'h3': {
                    margin: '0',
                    padding: '0 calc(var(--whitespace) * 2) var(--whitespace)',
                    borderBottom: '2px solid var(--finaid-border-color, #000)',
                    fontSize: 'var(--finaid-title-fs, theme("fontSize.lg"))',
                },
                'h4:empty': {
                    display: 'none'
                },
                '.quick-facts-featured': {
                    textAlign: 'center',
                    borderBottom: 'none',
                    padding: '1rem 0 0',
                    '.featured-fact-text': {
                        color: 'var(--finaid-text-color, var(--text-color))',
                        fontFamily: 'var(--finaid-featured-ff, theme("fontFamily.sans"))',
                        fontWeight: 'var(--finaid-featured-fw, bold)',
                        display: 'block',
                        lineHeight: '1',
                        fontSize: 'var(--finaid-featured-fs, 4rem)',
                        marginTop: 'calc(var(--whitespace) / 2)',
                    }
                }
            }
        }
      }

      addComponents(facts, ['responsive, hover'])
});