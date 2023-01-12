const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const utilities = {
        '.center': {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        '.wide': {
            maxWidth: 'none',
        },
        '.past': {
            textDecoration: 'line-through',
            opacity: '.8',
        },
        '.cols-1, .cols-2, .cols-3, .cols-4': {
            display: 'flex',
            gap: '0',
            '@screen below-md': {
                '> *': {
                    flex: '0 1 100%',
                },
            },
        },
        '.cols-1': {
            '> .section ~ .section': {
                paddingTop: '0',
            }
        },
        '.cols-2': {
            '@screen md': {
                '> *': {
                    flex: '0 1 50%',
                },
            },
        },
        '.cols-3': {
            '@screen md': {
                '> *': {
                    flex: '0 1 33%',
                },
            },
        },
        '.cols-4':{
            '@screen md': {
                ' > *': {
                    flex: '0 1 25%',
                },
            }
        },
        '.display-text': {
            '@screen md': {
                'p, li': {
                    fontSize: 'rfs(1.25rem)',
                }
            },
        },
        '.display-heading': {
            '@screen lg': {
                'h2': {
                    fontSize: 'rfs(3rem)',
                },
            },
        },
        '.brand-heading': {
            'h1, h2, h3, h4, h5': {
                color: theme("colors.primary.DEFAULT"),
            },
        },
        '.secondary-heading': {
            'h1, h2, h3, h4, h5': {
                color: theme("colors.secondary.DEFAULT"),
            },
        },
        '.text-default': {
            color: 'var(--text-color)',
        },
        '.text-white *': {
            color: 'currentColor',
        },
        '.text-white a:not(.btn):hover, .text-white a:not(.btn):focus': {
            opacity: '.8',
            color: 'currentColor',
        },
        '.sticky-intro': {
            marginTop: '0',
            height: 'auto',
            '@screen md': {
                top: 'var(--header-height)',
                position: 'sticky',
            }
        },
        '.fw-wrapper': {
            position: 'absolute',
            height: '100%',
            width: '100vw',
            top: '0',
            zIndex: '0',
            left: '50%',
            transform: 'translateX(-50%)',
        },
        '.fw-before': {
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                height: '100%',
                width: '100vw',
                top: '0',
                zIndex: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: '-1',
            }
        },
        '.bg-image': {
            width: '100%',
            height: '100%',
            backgroundColor: "#222",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
        '.bg-image_fw': {
            position: 'absolute',
            left: '0',
            top: '0',
        },
        '.bg-image_50vw_left, .bg-image_66vw_left': {
            position: 'absolute',
            width: '50vw',
            left: '0', 
            top: '0',
            backgroundPosition: 'center',
        },
        '.bg-image_50vw_right, .bg-image_66vw_right': {
            position: 'absolute',
            width: '50vw',
            right: '0',
            top: '0',
            backgroundPosition: 'center',
        },
        '.bg-image_66vw_left, .bg-image_66vw_right': {
            width: '66vw',
        },
        '.overlay': {
            '&::before': {
                content: '""',
                width: '100%',
                height: '100%',
                position: 'absolute',
            }
        },
        '.overlay-black_25': {
            '&::before': {
                background: '#222',
                opacity: '.25',
            }
        },
        '.overlay-black_50': {
            '&::before': {
                background: '#222',
                opacity: '.5',
            }
        },
        '.overlay-black_75': {
            '&::before': {
                background: '#222',
                opacity: '.75',
            }
        },
        '.overlay-gradient_left-black_transparent': {
            '&::before': {
                background: 'linear-gradient(to right, rgba(0,0,0,.95) 20%, rgba(0,0,0,.1) 100%)',
            }
        },
        '.overlay-gradient_right-black_transparent': {
            '&::before': {
                background: 'linear-gradient(to right, rgba(0,0,0,.1) 0%, rgba(0,0,0,.95) 80%)',
            }
        },
        '.bg-gradient_right-primary_white': {
            background: 'linear-gradient(to right, theme("colors.primary.DEFAULT") 0%, theme("colors.primary.DEFAULT") 50%, #fff 50%, #fff 100%)',
        },
        '.bg-gradient_top-primary_white': {
            background: 'linear-gradient(to bottom, theme("colors.primary.DEFAULT") 0%, theme("colors.primary.DEFAULT") 50%, #fff 50%, #fff 100%)',
        },
        '.bg-gradient_bottom-primary_white': {
            background: 'linear-gradient(to bottom, #fff 0%, #fff 50%, theme("colors.primary.DEFAULT") 50%, theme("colors.primary.DEFAULT") 100%)',
        },
        '.figure': {
            display: 'inline-block',
            marginBottom: 'calc(var(--whitespace) * 2)',
            'img': {
                marginBottom: 'var(--whitespace)',
                borderRadius: '6px',
                boxShadow: theme("boxShadow.md"),
            },
            'figcaption': {
                fontSize: theme("fontSize.sm"),
                color: theme("colors.muted")
            }
        },
        '.img--small-circle, .img--small-square': {
            width: 'var(--small-image-w)',
            height: 'var(--small-image-w)',
            borderRadius: '100%',
        },
        '.img--small-square': {
            borderRadius: '0',
        },
        '.img--portrait': {
            aspectRatio: '7 / 8',
        },
        '.img--fit': {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
        },
        '.single-image-wrapper': {
            'img': {
                display: 'inline-block',
            },
        },
        '.video-embed-wrapper':{
            '.ratio':{
                position: 'relative',
                width: '100%',
                '&::before': {
                    content: '""',
                    display: 'block',
                    paddingTop: '100%',
                },
                '> * ': {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                },
                '&.ratio-16x9::before': {
                    paddingTop: 'calc(9 / 16 * 100%)',
                },
                '&.ratio-4x3::before': {
                    paddingTop: 'calc(3 / 4 * 100%)',
                },
            },
        },
        '.btn-scroll-down': {
            display: 'block',
            marginTop: 'calc(var(--whitespace) * 2)',
            borderRadius: '100%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--hero-arrow-color)',
            border: '2px solid var(--hero-arrow-color)',
            opacity: '.75',
            'svg path': {
                fill: 'var(--hero-arrow-color)',
            },
            '&:hover, &:focus': {
                opacity: '.45',
            },
            '@screen md': {
                width: '60px',
                height: '60px',
                fontSize: '25px',
            }
        },
        '.btn-scroll-top': {
            position: 'fixed',
            bottom: '1rem',
            right: '0',
            zIndex: '999',
            width: '40px',
            height: '40px',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme("colors.gray.100"),
            color: theme("colors.gray.900"),
            border: '1px solid theme("colors.gray.200")',
            opacity: '0',
            fontSize: '.625rem',
            boxShadow: theme("boxShadow.sm"),
            padding: '0 5px',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            '&.show': {
                opacity: '.45',
            },
            'svg': {
                fontSize: '1.15rem',
                'path': {
                    fill: theme("colors.gray.900"),
                },
            },
            '&:hover, &:focus': {
                opacity: '.75',
            },
            '&.anchored': {
                position: 'absolute',
                top: 'calc(-40px + -1rem)',
                marginLeft: 'auto',
                zIndex: '75',
            },
            '@screen md': {
                width: '50px',
                height: '60px',
                'svg': {
                    marginBottom: '5px',
                },
                '&.anchored': {
                    top: 'calc(-60px + -1rem)', 
                }
            }
        },
        '.toggle-dropdown-wrapper': {
            '.toggle-dropdown-label': {
                fontFamily: 'var(--label-ff)',
                fontSize: 'var(--label-fs)',
                marginBottom: '.5rem',
            },
            '.toggle-dropdown-select': {
                position: 'relative',
                maxWidth: '250px',
                marginTop: '2rem',
                marginBottom: '2rem',
                '.toggle-dropdown-listbox-button': {
                    position: 'relative',
                    width: '100%',
                    height: '50px',
                    border: '1px solid var(--input-border-color)',
                    textAlign: 'left',
                    borderRadius: 'var(--input-radius)',
                    backgroundColor: 'var(--input-bg)',
                    boxShadow: 'var(--input-shadow)',
                    padding: '.5rem .75rem',
                    paddingRight: '30px',
                    'svg': {
                        position: 'absolute',
                        right: '.75rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                    },
                    '&.active, &:hover, &:focus': {
                        borderColor: 'var(--input-focus-border-color)',
                        backgroundColor: 'var(--input-focus-bg)',
                    },
                },
            },
            '.toggle-dropdown-listbox': {
                position: 'absolute',
                width: '100%',
                top: 'calc(100% + 2px)',
                margin: '0',
                padding: '0',
                listStyle: 'none',
                zIndex: '5',
                backgroundColor: 'var(--input-bg)',
                boxShadow: theme("boxShadow.md"),
                borderRadius: 'var(--input-radius)',
            },
            '.toggle-dropdown-option': {
                '&:first-child button, &:first-child a': {
                    borderTopRightRadius: 'var(--input-radius)',
                    borderTopLeftRadius: 'var(--input-radius)',
                },
                '&:last-child button, &:last-child a': {
                    borderBottomRightRadius: 'var(--input-radius)',
                    borderBottomLeftRadius: 'var(--input-radius)',
                },
                'button, a': {
                    display: 'block',
                    width: '100%',
                    padding: '.5rem 1rem',
                    textAlign: 'left',
                    borderBottom: '1px solid var(--input-border-color)',
                    lineHeight: '1.25',
                    textDecoration: 'none',
                    color: 'var(--text-color)',
                    '&:hover, &:focus': {
                        color: theme("colors.primary.dark"),
                        backgroundColor: 'var(--input-focus-bg)',
                    },
                    '&.toggle-dropdown-option_checkbox-btn': {
                        position: 'relative',

                    }
                }
            },
            '&.toggle-dropdown-wrapper--large': {
                '.toggle-dropdown-label, .toggle-dropdown-listbox-button, .toggle-dropdown-option button': {
                    fontSize: theme("fontSize.lg"),
                },
                '.toggle-dropdown-select': {
                    maxWidth: '400px',
                    '.toggle-dropdown-listbox-button': {
                        minHeight: '65px',
                    }
                },
            },
            '&.toggle-dropdown-wrapper--small': {
                '.toggle-dropdown-label, .toggle-dropdown-listbox-button, .toggle-dropdown-option button': {
                    fontSize: theme("fontSize.sm"),
                },
                '.toggle-dropdown-select': {
                    maxWidth: '175px',
                    '.toggle-dropdown-listbox-button': {
                        height: 'auto',
                    }
                },
            },
            '&.brand': {
                '.toggle-dropdown-select': {
                    '.toggle-dropdown-listbox-button': {
                        backgroundColor: theme("colors.primary.DEFAULT"),
                        color: '#fff',
                        borderColor: 'transparent',
                        '&.active, &:hover, &:focus': {
                            borderColor: 'transparent',
                            backgroundColor: theme("colors.primary.dark"),
                        },
                    },
                    '.toggle-dropdown-listbox': {
                        backgroundColor: theme("colors.primary.DEFAULT"),
                        color: '#fff',
                    },
                    '.toggle-dropdown-option': {
                        'button': {
                            backgroundColor: theme("colors.primary.DEFAULT"),
                            '&:hover, &:focus': {
                                color: '#fff',
                                backgroundColor: theme("colors.primary.light"),
                            },
                        }
                    }
                }
            },
            '&.white': {
                '.toggle-dropdown-select .toggle-dropdown-listbox-button': {
                    backgroundColor: 'transparent',
                    borderColor: '#fff',
                    '&.active, &:hover, &:focus': {
                        borderColor: '#fff',
                        backgroundColor: 'rgba(255,255,255,.25)',
                    },
                }
            },
            '.toggle-dropdown-content-wrapper': {
                marginTop: 'calc(var(--whitespace) * 2)',
            }
        },
        '.tab-filter-wrapper': {
            '.tablist-filter': {
                listStyle: 'none',
                margin: '0',
                padding: '0',
                display: 'flex',
                justifyContent: 'center',
            },
            '.tablist-filter-option': {
                margin: '.5rem 0',
                'button': {
                    borderRadius: '0',
                },
                '&:first-child button': {
                    borderTopLeftRadius: 'var(--tab-bubble-radius)',
                    borderBottomLeftRadius: 'var(--tab-bubble-radius)',
                },
                '&:last-child button': {
                    borderTopRightRadius: 'var(--tab-bubble-radius)',
                    borderBottomRightRadius: 'var(--tab-bubble-radius)',
                }
            },
            '.tablist-filter-option_btn': {
                padding: '.75rem 1.25rem',
                fontSize: theme("fontSize.sm"),
                fontFamily: 'var(--tab-bubble-ff)',
                fontWeight: 'var(--tab-bubble-fw)',
                color: 'var(--tab-bubble-color)',
                textTransform: 'var(--tab-bubble-transform)',
                border: 'var(--tab-bubble-border)',
                background: 'var(--tab-bubble-bg)',
                '&:hover, &:focus': {
                    color: 'var(--tab-bubble-hover-color)',
                    borderColor: 'var(--tab-bubble-hover-border-color)',
                    background: 'var(--tab-bubble-hover-bg)',
                },
                '&.active': {
                    color: 'var(--tab-bubble-active-color)',
                    borderColor: 'var(--tab-bubble-active-border-color)',
                    background: 'var(--tab-bubble-active-bg)',
                },
                '@screen lg': {
                    padding: 'var(--whitespace) calc(var(--whitespace) * 2)',
                    fontSize: 'var(--tab-bubble-fs)',
                }
            },
        },
        '.nav-overview-outer': {
            position: 'sticky',
            top: 'var(--header-height)',
            zIndex: '79',
            '&.below-nav': {
                order: '-10',
            },
            '&.below-hero': {
                order: '-1',
            },
        },
        '.nav-overview': {
            position: 'relative',
            background: 'var(--nav-overview-bg)',
            boxShadow: 'var(--nav-overview-shadow)',
            '.overview-toggler': {
                padding: '.75rem 1rem',
                fontFamily: 'var(--nav-overview-toggle-ff)',
                fontSize: 'var(--nav-overview-toggle-fs)',
                textTransform: 'var(--nav-overview-toggle-transform)',
                color: 'var(--nav-overview-toggle-color)',
                background: 'var(--nav-overview-toggle-bg)',
                display: 'block',
                width: '100%',
                textAlign: 'left',
                '&:hover, &:focus': {
                    color: 'var(--nav-overview-toggle-hover-color)',
                    background: 'var(--nav-overview-toggle-hover-bg)',
                },
                '&.active': {
                    color: 'var(--nav-overview-toggle-active-color)',
                    background: 'var(--nav-overview-toggle-active-bg)',
                }
            },
            'ul': {
                position: 'absolute',
                left: '0',
                top: '100%',
                display: 'flex',
                flexDirection: 'column',
                zIndex: '999',
                maxWidth: '300px',
                width: '100%',
                background: 'var(--nav-overview-bg)',
                listStyle: 'none',
                margin: '0',
                padding: '0',
                '&:empty': {
                    padding: '0',
                },
                'li': {
                    margin: '0 1rem',
                    'a': {
                        fontFamily: 'var(--nav-overview-link-ff)',
                        fontSize: 'var(--nav-overview-link-fs)',
                        fontWeight: 'var(--nav-overview-link-fw)',
                        textTransform: 'var(--nav-overview-link-transform)',
                        color: 'var(--nav-overview-link-color)',
                        textDecoration: 'none',
                        padding: '1rem',
                        display: 'block',
                        position: 'relative',
                        'span': {
                            color: 'var(--nav-overview-link-color)',
                        },
                        '&:hover, &:focus': {
                            color: 'var(--nav-overview-link-hover-color)',
                            'span': {
                                color: 'var(--nav-overview-link-hover-color)',
                            },
                        },
                        '&.active': {
                            color: 'var(--nav-overview-link-active-color)',
                            'span': {
                                color: 'var(--nav-overview-link-active-color)',
                            },
                        }
                    }
                },
                '@screen overview-expanded': {
                    padding: '0 2rem',
                    background: 'var(--nav-overview-bg)',
                    boxShadow: 'var(--nav-overview-shadow)',
                    maxWidth: 'none',
                    position: 'relative',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    'li:first-child': {
                        marginLeft: '0',
                    },
                    'li a': {
                        padding: '1rem 0',
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
                                backgroundColor: 'var(--nav-overview-link-hover-color)',
                            },
                        },
                    }
                }
            }
        },

        '.nav-pagination': {
            flex: '1 1 100%',
            margin: '2rem 0',
            'ul': {
                margin: '0',
                padding: '0',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            '.nav-pagination_item': {
                margin: '0 .25rem',
                '.inactive': {
                    display: 'block',
                    padding: '.5rem',
                    opacity: '.65',
                }
            },
            '.nav-pagination_link': {
                display: 'block',
                padding: '.5rem',
                textDecoration: 'none',
                color: 'var(--pagination-link-color)',
                backgroundColor: 'var(--pagination-link-bg)',
                borderRadius: 'var(--pagination-link-radius)',
                '&:hover, &:focus': {
                    color: 'var(--pagination-link-hover-color)',
                    backgroundColor: 'var(--pagination-link-hover-bg)',
                },
                '&.active': {
                    color: 'var(--pagination-link-active-color)',
                    backgroundColor: 'var(--pagination-link-active-bg)',
                },
                '&.arrow': {
                    padding: '.5rem',
                }
            },
            '&.nav-pagination--left ul': {
                justifyContent: 'flex-start',
            },

        },
      }

      addComponents(utilities, ['responsive, hover'])
});