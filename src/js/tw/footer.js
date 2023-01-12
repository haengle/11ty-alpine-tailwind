const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const footer = {
        '.footer': {
            position: 'relative',
            background: 'var(--footer-bg)',
            padding: 'var(--footer-padding)',
            color: 'var(--footer-text-color)',
            'nav ul': {
                listStyle: 'none',
                margin: '0',
                padding: '0',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexWrap: 'wrap',
            },
            '.footer-logo': {
                gridArea: 'logo',
                textAlign: 'center',
                '.footer-logo-link': {
                    display: 'inline-block',
                    '&[target="_blank"] > svg[data-icon*="up-right"]': {
                        display: 'none',
                    },
                },
                '.footer-logo-img': {
                    display: 'inline-block',
                },
                '&.footer-logo--default img': {
                    width: '220px',
                },
                '&.footer-logo--lg img': {
                    width: '320px',
                },
            },
            '.nav-footer': {
                gridArea: 'nav',
                'ul': {
                    flexWrap: 'wrap',
                    margin: '1rem 0',
                },
                '.nav-footer_nav_item': {
                    padding: '0 rfs(1.5rem)',
                    flex: '1 1 100%',
                    marginBottom: '1rem',
                },
                '.nav-footer_nav_link': {
                    fontFamily: 'var(--footer-nav-ff)',
                    fontSize: 'var(--footer-nav-fs)',
                    color: 'var(--footer-nav-color)',
                    textDecoration: 'none',
                    display: 'block',
                    lineHeight: '1.25',
                    '*': {
                        color: 'var(--footer-nav-color)',
                    },
                    '&:hover, &:focus': {
                        color: 'var(--footer-nav-hover-color)',
                        textDecoration: 'underline',
                        '*': {
                            color: 'var(--footer-nav-hover-color)',
                        },
                    },
                },
            },
            '.nav-legal': {
                gridArea: 'legal',
                'ul': {
                    flexWrap: 'wrap',
                    margin: '1rem 0',
                },
                '.nav-legal_nav_item': {
                    padding: '0 .5rem',
                    flex: '1 1 100%',
                    marginBottom: '10px',
                },
                '.nav-legal_nav_link': {
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: '.9',
                    fontSize: theme("fontSize.sm"),
                    '&:hover, &:focus': {
                        textDecoration: 'underline',
                    },
                },
            },
            '.footer-address, .footer-contact-info': {
                gridArea: 'address',
                textAlign: 'center',
                fontFamily: 'var(--footer-address-ff)',
                fontSize: 'var(--footer-address-fs)',
                color: 'var(--footer-address-color)',
                '&:empty': {
                    display: 'none',
                },
            },
            '.footer-contact-info': {
                gridArea: 'contact',
                fontFamily: 'var(--footer-contact-ff)',
                fontSize: 'var(--footer-contact-fs)',
                color: 'var(--footer-contact-color)',
            },
            '.footer-copyright': {
                gridArea: 'copyright',
                fontSize: theme("fontSize.sm"),
                marginTop: '1rem',
                textAlign: 'center',
            },
            '.footer-buttons': {
                gridArea: 'buttons',
                textAlign: 'center',
                '&:empty': {
                    display: 'none'
                },
                '> *': {
                    margin: '.5rem',
                }
            },
            '@screen md': {
                '.nav-footer ul, .nav-legal ul': {
                    margin: '0',
                },
                '.nav-footer .nav-footer_nav_item, .nav-legal .nav-legal_nav_item': {
                    flex: '0 1 auto',
                },
            },
            '@screen lg': {
                '.footer-address, .footer-contact-info, .footer-copyright': {
                    textAlign: 'left',
                },
            },
          '&.footer--default': {
            '@screen md': {
                '.row': {
                    gridTemplateAreas: `
                    'logo logo'
                    'nav nav'
                    'address contact'
                    'buttons buttons'
                    'social social'
                    'copyright copyright'
                    'legal legal'
                  `,
                  ' > *': {
                      marginBottom: 'rfs(1.5rem)',
                      textAlign: 'center',
                  },
                },
            },
            '@screen lg': {
                '.row': {
                    gridTemplateAreas: `
                    'logo nav nav nav'
                    'address contact social social'
                    'copyright copyright legal legal'
                  `,
                  '&.has-buttons': {
                    gridTemplateAreas: `
                    'logo nav nav buttons'
                    'address contact social social'
                    'copyright copyright legal legal'
                  `,
                  },
                  ' > *': {
                        textAlign: 'left',
                    },
                    '.footer-buttons': {
                        textAlign: 'right',
                    },
                },
                'nav ul': {
                    justifyContent: 'flex-end',
                },
                '.nav-social .nav-social_nav_item': {
                    paddingRight: '0',
                },
                '.nav-footer .nav-footer_nav_item, .nav-legal .nav-legal_nav_item': {
                    paddingRight: '0',
                    paddingLeft: '2.5rem',
                },
                '.footer-logo img': {
                    marginLeft: '0',
                },
            },
          },
          '&.footer--stacked': {
            '.row': {
                gap: '0',
                gridTemplateAreas: `
                'logo'
                'nav'
                'social'
                'address'
                'contact'
                'copyright'
                'legal'
              `,
              '&.has-buttons': {
                gridTemplateAreas: `
                'logo'
                'nav'
                'buttons'
                'social'
                'address'
                'contact'
                'copyright'
                'legal'
              `,
              },
              ' > *': {
                  marginBottom: 'rfs(1.5rem)',
                  textAlign: 'center',
              },
            },
            '@screen md': {
                '.nav-footer': {
                    marginBottom: '2.5rem',
                },
            },
          },
          '&.footer--expanded-nav': {
            '@screen md': {
                '.row': {
                    gap: '0',
                    gridTemplateAreas: `
                    'logo'
                    'nav'
                    'address'
                    'contact'
                    'social'
                    'copyright'
                    'legal'
                  `,
                  '&.has-buttons': {
                    gridTemplateAreas: `
                    'logo'
                    'nav'
                    'buttons'
                    'social'
                    'address'
                    'contact'
                    'copyright'
                    'legal'
                  `,
                  },
                  ' > *': {
                      marginBottom: 'rfs(1.5rem)',
                      textAlign: 'center',
                  },
                },
                '.nav-footer ul': {
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    '.nav-footer_nav_item': {
                        flex: '0 1 50%',
                        marginBottom: '1rem',
                        textAlign: 'left',
                    }
                },
                
            },
            '@screen lg': {
                '.row': {
                    gridTemplateAreas: `
                    'logo nav nav'
                    'address nav nav'
                    'contact nav nav'
                    'social nav nav'
                    'copyright nav nav'
                    'legal nav nav'
                  `,
                  '&.has-buttons': {
                    gridTemplateAreas: `
                    'logo nav nav'
                    'buttons nav nav'
                    'address nav nav'
                    'contact nav nav'
                    'social nav nav'
                    'copyright nav nav'
                    'legal nav nav'
                  `,
                  },
                  ' > *': {
                        textAlign: 'left',
                    },
                },
                '.nav-footer ul': {
                    justifyContent: 'flex-end',
                    '.nav-footer_nav_item': {
                        flex: '0 1 33%',
                    },
                },
                '.nav-social ul, .nav-legal ul': {
                    justifyContent: 'flex-start',
                    'li:first-of-type': {
                        marginLeft: '0',
                        paddingLeft: '0',
                    },
                },
                '.footer-logo img': {
                    marginLeft: '0',
                },
            },
            '@screen 2xl': {
                '.nav-footer ul': {
                    '.nav-footer_nav_item': {
                        flex: '0 1 20%',
                    }
                }
            },
          },
        },
        '.nav-social': {
            gridArea: 'social',
            'ul': {
                '.nav-social_nav_item': {
                    padding: '0 .65rem',
                    '@screen md': {
                        padding: '0 1.5rem',
                    },
                },
                '.nav-social_nav_link': {
                    textDecoration: 'none',
                    color: 'var(--social-nav-color)',
                    fontSize: 'var(--social-nav-fs)',
                    'svg path': {
                        fill: 'var(--social-nav-color)',
                    },
                },
            },
            '&.nav-social--default': {
                '.nav-social_nav_link': {
                    borderRadius: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'var(--social-nav-bg)',
                    width: 'calc(var(--social-nav-fs) + 20px',
                    height: 'calc(var(--social-nav-fs) + 20px',
                    '&:hover, &:focus': {
                        background: 'var(--social-nav-hover-bg)',
                        'svg path': {
                            fill: 'var(--social-nav-hover-color)',
                        },
                    }
                }
            },
            '&.nav-social--share': {
                'ul': {
                    listStyle: 'none',
                    margin: '0',
                    padding: '0',
                    display: 'flex',
                },
                '.nav-social_nav_item': {
                    '@screen md': {
                        padding: '0 .5rem',
                    },
                },
                '.nav-social_nav_link': {
                    '--social-nav-fs': '16px',
                    '--social-nav-bg': theme("colors.primary.DEFAULT"),
                    '--social-nav-color': '#fff',
                    '--social-nav-hover-bg': theme("colors.primary.dark"),
                    '--social-nav-hover-color': "#fff",
                    borderRadius: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'var(--social-nav-bg)',
                    width: 'calc(var(--social-nav-fs) + 20px',
                    height: 'calc(var(--social-nav-fs) + 20px',
                    '&:hover, &:focus': {
                        background: 'var(--social-nav-hover-bg)',
                        'svg path': {
                            fill: 'var(--social-nav-hover-color)',
                        },
                    }
                }
            }
        },
    }

      addComponents(footer)
});