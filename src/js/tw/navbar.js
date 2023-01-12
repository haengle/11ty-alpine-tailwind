const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const navbar = {
        '.header': {
          position: 'relative',
          zIndex: '80',
          background: 'var(--header-bg)',
          boxShadow: 'var(--header-shadow)',
          '@screen offcanvas-disabled': {
            '.offcanvas-wrapper': {
                display: 'grid',
                '.navbar-logo': {
                   gridArea: 'logo',
                },
                '.navbar-brand-name': {
                    gridArea: 'brand',
                },
                '.navbar-wrapper': {
                    gridArea: 'nav',
                },
                '.navbar-cta': {
                    gridArea: 'buttons',
                },
            },
        },
         
          '&.header--default': {
            '@screen offcanvas-disabled': {
                '.offcanvas-wrapper': {
                    justifyContent: 'space-between',
                    gridTemplateAreas: `
                        'logo brand nav nav nav buttons'
                    `,
                    '.navbar-wrapper': {
                        paddingLeft: 'var(--whitespace)',
                    },
                },
            },
          },
          '&.header--sticky': {
              position: 'sticky',
              top: '0',
              width: '100%',
              '&.scrolled': {
                background: 'var(--header-scroll-bg)',
                boxShadow: 'var(--header-scroll-shadow)',
              },
          },
          '&.header--stacked': {
            '@screen offcanvas-disabled': {
                '.offcanvas-wrapper': {
                    display: 'grid',
                    gridTemplateAreas: `
                        'logo brand buttons'
                        'nav nav nav'
                    `,
                    '.navbar-cta': {
                        marginLeft: 'auto',
                    }
                },
                '.navbar-primary_nav': {
                    flex: '1 1 100%',
                    justifyContent: 'flex-start',
                    padding: 'var(--whitespace) 0 0',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        width: '100vw',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bottom: '0',
                        height: '100%',
                        backgroundColor: 'var(--navbar-stacked-bg)',
                        zIndex: '-1',
                    },
                    '.navbar-primary_nav_link': {
                        paddingBottom: 'var(--whitespace)',
                    },
                },
            },
          },
          '&.header--logo-stacked': {
            '@screen offcanvas-disabled': {
                '.navbar': {
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        width: '100vw',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bottom: '0',
                        height: 'var(--primarynav-height)',
                        backgroundColor: 'var(--navbar-stacked-bg)',
                        zIndex: '-1',
                    },
                },
                '.offcanvas-wrapper': {
                    display: 'grid',
                    gridTemplateAreas: `
                        'logo brand brand'
                        'nav nav buttons'
                    `,
                    '.navbar-cta': {
                        marginLeft: 'auto',
                        padding: 'calc(var(--whitespace) / 2) 0',
                    },
                    '.navbar-wrapper .navbar-primary_nav': {
                        justifyContent: 'flex-start',
                    },
                },
            },
          },
        },
        '.navbar': {
            display: 'flex',
            flexWrap: 'wrap',
            '@screen offcanvas-disabled': {
                justifyContent: 'space-between',
            },
            '.navbar-logo': {
                padding: 'var(--whitespace) 0',
                display: 'flex',
                alignItems: 'center',
                width: 'var(--header-logo-width)',
                'svg[class*="up-right"]': {
                    display: 'none',
                },
                '@screen offcanvas-enabled': {
                    maxWidth: 'var(--header-logo-width)',
                    width: 'auto',
                },
            },
            '.navbar-brand-name': {
                alignSelf: 'center',
                fontFamily: 'var(--navbar-brand-name-ff)',
                fontWeight: 'var(--navbar-brand-name-fw)',
                fontSize: 'var(--navbar-brand-name-fs)',
                color: 'var(--navbar-brand-name-color)',
                textDecoration: 'none',
            },
            '.offcanvas-backdrop': {
                position: 'fixed',
                top: '0',
                right: '0',
                left: '0',
                bottom: '0',
                zIndex: '998',
            },
            '.offcanvas-wrapper': {
                display: 'flex',
                flex: '1 1 auto',
                '.navbar-wrapper': {
                    '@screen offcanvas-enabled': {
                        background: 'var(--navbar-offcanvas-bg)',
                        left: '0',
                        position: 'fixed',
                        top: 'var(--header-height)',
                        bottom: '0',
                        zIndex: '999',
                        width: '50vw',
                        minWidth: '320px',
                        paddingLeft: '1em',
                        overflowY: 'auto',
                        transform: 'translateX(-105%)',
                    },
                    '@screen offcanvas-disabled': {
                        position: 'static',
                        display: 'flex',
                        flex: '1 1 auto',
                        justifyContent: 'space-between',
                        background: 'transparent'
                    },
                    '&.navbar-wrapper--right': {
                        '.navbar-primary_nav': {
                            justifyContent: 'flex-end',
                        },
                    },
                    '&.navbar-wrapper--center': {
                        '.navbar-primary_nav': {
                            justifyContent: 'center',
                        },
                    },
                },
                '&.active': {
                    '.navbar-wrapper': {
                        transform: 'translateX(0)',
                    }
                }
            },
            '.navbar-primary_nav': {
                listStyle: 'none',
                padding: 'var(--whitespace)',
                margin: '0',
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                justifyContent: 'center',
                '@screen offcanvas-disabled': {
                    padding: '0',
                    flexDirection: 'row',
                    '.navbar-primary_nav_item': {
                        padding: '0 var(--whitespace)'
                    }
                },
            },
            '.navbar-primary_nav_link': {
                position: 'relative',
                textDecoration: 'none',
                padding: 'var(--whitespace)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: '100%',
                fontFamily: 'var(--navbar-ff)',
                fontWeight: 'var(--navbar-fw)',
                fontSize: 'var(--navbar-fs)',
                color: 'var(--navbar-link-color)',
                textTransform: 'var(--navbar-link-transform, none)',
                width: '100%',
                textAlign: 'left',
                'span': {
                    color: 'var(--navbar-link-color)',
                },
                '.navbar-primary_nav_link__icon': {
                    marginLeft: 'auto',
                    'svg': {
                        verticalAlign: 'inherit',
                    },
                    'svg path': {
                        fill: 'var(--navbar-link-icon-color)',
                    },
                },
                '&:hover, &:focus': {
                    color: 'var(--navbar-link-hover-color)',
                    'span': {
                        color: 'var(--navbar-link-hover-color)',
                    },
                    '.navbar-primary_nav_link__icon': {
                        'svg path': {
                            fill: 'var(--navbar-link-icon-hover-color)',
                        },
                    },
                },
                '&.active': {
                    color: 'var(--navbar-link-active-color)',
                    '.navbar-primary_nav_link__icon': {
                        'svg path': {
                            fill: 'var(--navbar-link-icon-active-color)',
                        },
                    },
                },
                ' > span': {
                    color: 'inherit',
                    display: 'flex',
                    width: '100%',
                },
                '@screen offcanvas-enabled': {
                    color: 'var(--offcanvas-link-color)',
                    'span': {
                        color: 'var(--offcanvas-link-color)',
                    },
                    '.navbar-primary_nav_link__icon': {
                        'svg path': {
                            fill: 'var(--offcanvas-link-icon-color)',
                        },
                    },
                    '&:hover, &:focus': {
                        color: 'var(--offcanvas-link-hover-color)',
                        'span': {
                            color: 'var(--offcanvas-link-hover-color)',
                        },
                        '.navbar-primary_nav_link__icon': {
                            'svg path': {
                                fill: 'var(--offcanvas-link-icon-hover-color)',
                            },
                        },
                    },
                    '&.active': {
                        color: 'var(--offcanvas-link-hover-color)',
                        '.navbar-primary_nav_link__icon': {
                            'svg path': {
                                fill: 'var(--offcanvas-link-icon-hover-color)',
                            },
                        },
                    },
                },
                '@screen offcanvas-disabled':{
                    padding: '0',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    ' > span': {
                        display: 'inline-block',
                    },
                    '.navbar-primary_nav_link__icon': {
                        marginLeft: '3px',
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '0',
                        height: '3px',
                    },
                    '&:hover, &:focus, &.active': {
                        '&::before': {
                            width: '100%',
                            backgroundColor: 'var(--navbar-link-underline-color)',
                        },
                    },
                },
            },
            '.navbar-cta': {
                alignSelf: 'center',
                padding: 'var(--whitespace) 0',
                '> *': {
                    display: 'block',
                    width: '100%',
                    maxWidth: '220px',
                    marginBottom: 'var(--whitespace)',
                    marginLeft: 'var(--whitespace)',
                    '@screen offcanvas-disabled':{
                        display: 'inline-block',
                        width: 'auto',
                        marginBottom: '0',
                        marginLeft: theme("spacing.2"),
                    },
                },
                'button, a':{
                    display: 'block',
                    width: '100%',
                    '@screen offcanvas-disabled':{
                        display: 'inline-block',
                        width: 'auto',
                    }
                }
            },
            '.navbar-primary_nav_menu': {
                '.program-item h3 > a': {
                    textDecoration: 'none',
                    color: 'inherit',
                    '@screen offcanvas-enabled': {
                        fontFamily: 'var(--navbar-menu-link-ff)',
                        fontSize: 'var(--navbar-menu-link-fs)',
                        color: 'var(--offcanvas-menu-nestedlink-color)',
                        '&:hover': {
                            color: 'var(--offcanvas-menu-link-hover-color)',
                        },
                    },
                },
                '.navbar-primary_nav_menu__item': {
                    padding: '0 calc(var(--whitespace) * 2)',
                },
                '@screen offcanvas-disabled': {
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    width: '100%',
                    padding: 'rfs(3rem)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '100vw',
                        height: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '0',
                        zIndex: '-1',
                        background: 'var(--navbar-menu-bg)',
                        boxShadow: 'var(--navbar-menu-shadow)',
                        borderTop: 'var(--navbar-menu-top-border)',
                    },
                    '.navbar-primary_nav_menu__wrapper': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        '.navbar-primary_nav_menu__item': {
                            paddingLeft: 'rfs(4rem)',
                            paddingRight: '0',
                            flex: '0 1 30%',
                            'p': {
                                fontSize: theme("fontSize.md"),
                                color: theme("colors.typography_secondary"),
                            },
                            '~ .navbar-primary_nav_menu__item': {
                                flex: '1 1 auto',
                                borderLeft: '1px solid var(--navbar-menu-item-border-color)',
                            },
                            '&.program-item': {
                                flex: '0 1 50%',
                                paddingRight: 'rfs(4rem)',
                                'h3 > a': {
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }
                            }
                        },
                        ' > *:only-child': {
                            flex: '1 1 100%',
                        },
                    }
                }
                
            },
            '.navbar-primary_nav_menu__item--list': {
                listStyle: 'none',
                padding: '0',
                margin: '0',
                display: 'flex',
                flexWrap: 'wrap',
                '.navbar-primary_nav_menu__item--listitem': {
                    marginBottom: 'var(--whitespace)',
                    flex: '1 1 100%',
                },
                '@screen offcanvas-disabled': {
                    padding: 'var(--whitespace)',
                    '.navbar-primary_nav_menu__item--listitem': {
                        flex: '0 1 33%',
                        paddingRight: '1rem',
                    },
                },
            },
            '.navbar-primary_nav_menu__item--link': {
                display: 'block',
                textDecoration: 'none',
                fontFamily: 'var(--navbar-menu-link-ff)',
                fontWeight: 'var(--navbar-menu-link-fw)',
                fontSize: 'var(--navbar-menu-link-fs)',
                textTransform: 'var(--navbar-menu-link-transform, none)',
                color: 'var(--navbar-menu-link-color)',
                lineHeight: '1.25',
                'span': {
                    color: 'var(--navbar-menu-link-color)',
                },
                '&:hover, &:focus': {
                    color: 'var(--navbar-menu-link-hover-color)',
                    'span': {
                        color: 'var(--navbar-menu-link-hover-color)',
                    },
                },
                '&.active': {
                    color: 'var(--navbar-menu-link-hover-color)',
                },
                '@screen offcanvas-enabled': {
                    color: 'var(--offcanvas-menu-link-color)',
                    'span': {
                        color: 'var(--offcanvas-menu-link-color)',
                    },
                    '&:hover, &:focus': {
                        color: 'var(--offcanvas-menu-link-hover-color)',
                        'span': {
                            color: 'var(--offcanvas-menu-link-hover-color)',
                        },
                    },
                }
            },
            '.navbar-primary_nav_menu__item--nestedlist': {
                listStyle: 'none',
                padding: '0',
                margin: 'calc(var(--whitespace) * .5) 0 0',
                '.navbar-primary_nav_menu__item--nestedlistitem': {
                    marginBottom: 'calc(var(--whitespace) * .5)',
                    flex: '1 1 100%',
                },
            },
            '.navbar-primary_nav_menu__item--nestedlink': {
                display: 'block',
                textDecoration: 'none',
                fontFamily: 'var(--navbar-menu-nestedlink-ff)',
                fontWeight: 'var(--navbar-menu-nestedlink-fw)',
                fontSize: 'var(--navbar-menu-nestedlink-fs)',
                color: 'var(--navbar-menu-nestedlink-color)',
                textTransform: 'var(--navbar-menu-nestedlink-transform, none)',
                'span': {
                    color: 'var(--navbar-menu-nestedlink-color)',
                },
                '&:hover, &:focus': {
                    textDecoration: 'underline',
                    color: 'var(--navbar-menu-nestedlink-hover-color)',
                    'span': {
                        color: 'var(--navbar-menu-nestedlink-hover-color)',
                    },
                },
                '&.active': {
                    textDecoration: 'underline',
                },
                '@screen offcanvas-enabled': {
                    color: 'var(--offcanvas-menu-nestedlink-color)',
                    'span': {
                        color: 'var(--offcanvas-menu-nestedlink-hover-color)',
                    },
                    '&:hover, &:focus': {
                        color: 'var(--offcanvas-menu-nestedlink-hover-color)',
                        'span': {
                            color: 'var(--offcanvas-menu-nestedlink-hover-color)',
                        },
                    },
                }
            },
            '.navbar-primary_nav--single': {
                '@screen offcanvas-disabled': {
                    '.navbar-primary_nav_item': {
                        position: 'relative',
                    },
                    '.navbar-primary_nav_menu': {
                        padding: '0',
                        width: '260px',
                        background: 'var(--navbar-menu-bg)',
                        boxShadow: 'var(--navbar-menu-shadow)',
                        borderTop: 'var(--navbar-menu-top-border)',
                        '&::before, .navbar-primary_nav_menu__item--nestedlist': {
                            display: 'none',
                        },
                        '.navbar-primary_nav_menu__wrapper': {
                            flexDirection: 'column',
                        },
                        '.navbar-primary_nav_menu__item': {
                            padding: '0',
                            '&.program-item h3': {
                                margin: '0',
                            },
                            '&.program-item h3 > a': {
                                textDecoration: 'none',
                                color: 'inherit',
                                fontSize: 'var(--navbar-menu-link-fs)',
                                display: 'block',
                                lineHeight: '1.25',
                                '&:hover': {
                                    color: 'var(--navbar-menu-link-hover-color)',
                                },
                            },
                            '~ .navbar-primary_nav_menu__item': {
                                borderLeft: 'none',
                                '&.program-item': {
                                    borderTop: 'var(--navbar-menu-top-border)',
                                }
                            },
                        },
                        '.navbar-primary_nav_menu__item--list': {
                            display: 'block',
                            padding: '0',
                            '.navbar-primary_nav_menu__item--listitem': {
                                marginBottom: '0',
                                ' ~ li': { 
                                    marginLeft: '0', 
                                    borderTop: 'var(--navbar-menu-top-border)',
                                }
                            }
                        },
                        '.navbar-primary_nav_menu__item--link, .program-item h3 > a': {
                            padding: 'calc(var(--whitespace) * .75) var(--whitespace)',
                            '&:hover': {
                                backgroundColor: 'var(--navbar-menu-item-border-color)',
                            }
                        }
                    }
                }
            }
        },
        '.navbar-toggler': {
            display: 'inline-block',
            fontWeight: 'bold',
            fontSize: theme("fontSize.xs"),
            textTransform: 'uppercase',
            marginRight: 'rfs(3rem)',
            padding: '0 .5rem',
            fontFamily: 'var(--navbar-toggler-ff)',
            background: 'var(--navbar-toggler-bg)',
            color: 'var(--navbar-toggler-color)',
            '.navbar-toggler-icon': {
                display: 'block',
                margin: 'auto',
                width: '20px',
                fontSize: '1.25rem',
                'svg path': {
                    fill: 'var(--navbar-toggler-icon-fill)',
                },
            },
            '&:hover': {
                color: 'var(--navbar-toggler-hover-color)',
                '.navbar-toggler-icon svg path': {
                    fill: 'var(--navbar-toggler-icon-hover-fill)',
                },
            },
            '@screen offcanvas-disabled': {
                display: 'none',
            },
            '&[aria-expanded="true"]': {
                background: 'var(--navbar-toggler-active-bg)',
                color: 'var(--navbar-toggler-active-color)',
                '.navbar-toggler-icon svg path': {
                    fill: 'var(--navbar-toggler-icon-active-fill)',
                },
            },
            
        },
        '.action-bar': {
            color: 'var(--action-bar-color)',
            padding: 'calc(var(--whitespace) / 2) 0',
            position: 'relative',
            background: 'var(--action-bar-bg)',
            
            '.action-bar-content': {
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            },
            '.action-bar-link': {
                textDecoration: 'none',
                color: 'var(--action-bar-link-color)',
                fontFamily: 'var(--action-bar-link-ff)',
                fontSize: 'var(--action-bar-link-fs)',
                fontWeight: 'var(--action-bar-link-fw)',
                borderBottom: '1px solid transparent',
                '&:hover, &:focus': {
                    borderBottomColor: 'var(--action-bar-link-color)',
                },
            },
            '.action-bar-message': {
                fontFamily: 'var(--action-bar-message-ff)',
                fontSize: 'var(--action-bar-message-fs)',
                fontWeight: 'var(--action-bar-message-fw)',
               '*': {
                   margin: '0',
                   fontFamily: 'inherit',
                   fontSize: 'inherit',
                   fontWeight: 'inherit',
                   color: 'inherit',
               },
            },
            '.action-bar-buttons': {
                '@screen offcanvas-disabled': {
                    display: 'flex',
                    '> *': {
                        maxWidth: '220px',
                        display: 'inline-block',
                        width: 'auto',
                        marginBottom: '0',
                        marginLeft: theme("spacing.2"),
                    },
                    'button, a':{
                        display: 'inline-block',
                        width: 'auto',
                    },
                },
                
            },
            '&.action-bar--default': {
                '.action-bar-content': {
                    justifyContent: 'space-between',
                },
            },
            '&.action-bar--right': {
                '.action-bar-content': {
                    justifyContent: 'flex-end',
                },
            },
            '&.action-bar--center': {
                '.action-bar-content': {
                    justifyContent: 'center',
                },
            },
        },
    }

      addComponents(navbar)
});