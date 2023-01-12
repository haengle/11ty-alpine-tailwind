const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const tabs = {
        '.tablist-wrapper': {
            marginTop: 'var(--whitespace)',
            marginBottom: 'var(--whitespace)',
            position: 'relative',
            '.tablist-nav': {
                padding: '0',
                listStyle: 'none',
                marginBottom: 'var(--whitespace)',
                display: 'flex',
                flexWrap: 'wrap',
                '.tablist-nav-item': {
                    padding: '0 .5rem',
                    '.tablist-nav-item-btn': {
                        lineHeight: '1.2',
                    }
                },
                '&.tablist-nav--center': {
                    justifyContent: 'center',
                },
            },
            '&.tablist--default': {
                '.tablist-nav': {
                    borderBottom: '1px solid theme("colors.gray.200")',
                    '.tablist-nav-item-btn': {
                        padding: '0 .25rem var(--whitespace)',
                        fontFamily: 'var(--tab-default-ff)',
                        fontSize: 'var(--tab-default-fs)',
                        fontWeight: 'var(--tab-default-fw)',
                        color: 'var(--tab-default-color)',
                        textTransform: 'var(--tab-default-transform)',
                        '&:hover, &:focus': {
                            color: 'var(--tab-default-hover-color)',
                            borderBottomColor: 'var(--tab-default-hover-border-color)',
                        },
                        '&.active': {
                            color: 'var(--tab-default-active-color)',
                            borderBottomColor: 'var(--tab-default-active-border-color)',
                        }
                    },
                },
                '&.white': {
                    '.tablist-nav-item-btn': {
                        color: '#fff',
                        '&:hover, &:focus': {
                            color: '#fff',
                            borderBottomColor: '#fff',
                            textDecoration: 'underline',
                        },
                        '&.active': {
                            color: '#fff',
                            borderColor: '#fff',
                            textDecoration: 'underline',
                        },
                    }
                },
            },
            '&.tablist--bubble': {
                '.tablist-nav': {
                    '.tablist-nav-item': {
                        margin: '.5rem',
                        padding: '0',
                    },                
                    '.tablist-nav-item-btn': {
                        padding: '.75rem 1.25rem',
                        fontSize: theme("fontSize.sm"),
                        fontFamily: 'var(--tab-bubble-ff)',
                        fontWeight: 'var(--tab-bubble-fw)',
                        color: 'var(--tab-bubble-color)',
                        textTransform: 'var(--tab-bubble-transform)',
                        border: 'var(--tab-bubble-border)',
                        borderRadius: 'var(--tab-bubble-radius)',
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
                '&.white': {
                    '.tablist-nav-item-btn': {
                        color: '#fff',
                        borderColor: '#fff',
                        background: 'transparent',
                        '&:hover, &:focus': {
                            color: '#fff',
                            borderColor: '#fff',
                            background: 'rgba(255,255,255,.25)',
                        },
                        '&.active': {
                            color: 'var(--text-color)',
                            borderColor: '#fff',
                            background: '#fff',
                        },
                    },
                },
            },
            '@screen md': {
                '.tablist-nav': {
                    '.tablist-nav-item': {
                        padding: '0 var(--whitespace)',
                        marginBottom: '0',
                        '&:first-child': {
                            paddingLeft: '0',
                        },
                        '&:last-child': {
                            paddingRight: '0',
                        },
                    },
                },
                
                '&.tablist--default': {
                    '.tablist-nav': {
                        '.tablist-nav-item-btn': {
                            borderBottom: '1px solid var(--tab-default-border-color)',
                            marginBottom: '-1px',
                        },
                    },
                },
                '&.tablist--bubble': {
                    '.tablist-nav': {
                        '.tablist-nav-item': {
                            margin: '0',
                            '~ .tablist-nav-item': {
                                marginLeft: 'var(--whitespace)',
                            },
                        },
                    },
                },
            },
            '.tablist-content-wrapper.white .tablist-pane > *': {
                color: "#fff",
            },
            '&.tablist--vertical': {
                display: 'flex',
                flexWrap: 'wrap',
                '.tablist-nav--vertical': {
                    flexDirection: 'column',
                    flex: '1 1 100%',
                    '.tablist-nav-item': {
                        padding: '0 !important',
                        marginBottom: '.5rem',
                        '.tablist-nav-item-btn': {
                            textAlign: 'left',
                            padding: '.75rem',
                            width: '100%',
                            display: 'block',
                            fontFamily: 'var(--tab-vertical-ff)',
                            fontSize: 'var(--tab-vertical-fs)',
                            fontWeight: 'var(--tab-vertical-fw)',
                            color: 'var(--tab-vertical-color)',
                            textTransform: 'var(--tab-vertical-transform)',
                            background: 'var(--tab-vertical-bg)',
                            '&:hover, &:focus': {
                                color: 'var(--tab-vertical-hover-color)',
                                borderBottomColor: 'var(--tab-vertical-hover-border-color)',
                                background: 'var(--tab-vertical-hover-bg)',
                                'svg path': {
                                    fill: 'var(--tab-vertical-hover-color)',
                                },
                            },
                            '&.active': {
                                color: 'var(--tab-vertical-active-color)',
                                borderBottomColor: 'var(--tab-vertical-active-border-color)',
                                background: 'var(--tab-vertical-active-bg)',
                                'svg path': {
                                    fill: 'var(--tab-vertical-active-color)',
                                },
                            }
                        },
                    }
                },
                '@screen md': {
                    flexWrap: 'nowrap',
                    alignItems: 'flex-start',
                    '.tablist-nav--vertical': {
                        flex: '0 1 220px',
                        '.tablist-nav-item': {
                            width: '90%',
                        },
                    },
                    '.tablist-content-wrapper': {
                        flex: '0 1 calc(100% - 220px)',
                    },
                },
                '@screen lg': {
                    '.tablist-nav--vertical': {
                        flex: '0 1 320px',
                    },
                    '.tablist-content-wrapper': {
                        flex: '0 1 calc(100% - 320px)',
                    },
                },
            }
        },
        


    }

    addComponents(tabs, ['responsive', 'hover'])
});