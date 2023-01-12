const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents }) {
    const accordion = {
        '.accordion': {
            padding: 'rfs(2rem) 0',
            '~ * ': {
                marginTop: 'calc(var(--whitespace) * 2)',
            }
        },
        '.accordion-item': {
            marginBottom: 'var(--accordion-title-bottom-margin)',
            '&.accordion-item--underline': {
                marginBottom: '0',
            }
        },
        '.accordion-header': {
            '.accordion-btn': {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'left',
                padding: 'var(--whitespace) 0',
                fontFamily: 'var(--accordion-title-ff)',
                fontSize: 'var(--accordion-title-fs)',
                fontWeight: 'var(--accordion-title-fw)',
                textTransform: 'var(--accordion-title-transform)',
                '> svg': {
                    flexShrink: '0',
                    width: '1.25rem',
                    height: '1.25rem',
                    marginLeft: 'auto',
                }
            },
            '&.accordion-header--default': {
                '.accordion-btn': {
                    border: 'var(--accordion-title-default-border)',
                    borderRadius: 'var(--accordion-title-default-radius)',
                    background: 'var(--accordion-title-default-bg)',
                    color: 'var(--accordion-title-default-color)',
                    padding: 'var(--accordion-title-padding)',
                    '> svg path': {
                        fill: 'var(--accordion-title-default-icon-color)',
                    },
                    '&:hover, &:focus': {
                        border: 'var(--accordion-title-default-hover-border)',
                        background: 'var(--accordion-title-default-hover-bg)',
                        color: 'var(--accordion-title-default-hover-color)',
                        '> svg path': {
                            fill: 'var(--accordion-title-default-icon-hover-color)',
                        },
                    },
                    '&.active': {
                        border: 'var(--accordion-title-default-active-border)',
                        background: 'var(--accordion-title-default-active-bg)',
                        color: 'var(--accordion-title-default-active-color)',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        '> svg path': {
                            fill: 'var(--accordion-title-default-icon-active-color)',
                        },
                    }
                },
                '&.white': {
                    '.accordion-btn': {
                        color: 'var(--text-color)',
                        background: '#fff',
                        border: 'none',
                        '&:hover, &:focus': {
                            background: 'rgba(255,255,255,.75)',
                            color: 'var(--text-color)',
                            '> svg path': {
                                fill: 'var(--text-color)',
                            },
                        },
                        '&.active': {
                            background: '#fff',
                            color: 'var(--text-color)',
                            '> svg path': {
                                fill: 'var(--text-color)',
                            },
                        }
                    }
                }
            },
            '&.accordion-header--underline': {
                '.accordion-btn': {
                    color: 'var(--accordion-title-underline-color)',
                    borderBottom: 'var(--accordion-title-underline-border-width) solid var(--accordion-title-underline-border-color)',
                    '> svg path': {
                        fill: 'var(--accordion-title-underline-icon-color)',
                    },
                    '&:hover, &:focus': {
                        borderBottomColor: 'var(--accordion-title-underline-hover-border)',
                        color: 'var(--accordion-title-underline-hover-color)',
                        '> svg path': {
                            fill: 'var(--accordion-title-underline-icon-hover-color)',
                        },
                    },
                    '&.active': {
                        borderBottomColor: 'transparent',
                        color: 'var(--accordion-title-underline-active-color)',
                        '> svg path': {
                            fill: 'var(--accordion-title-underline-icon-active-color)',
                        },
                    }
                },
                '&.white': {
                    '.accordion-btn': {
                        color: '#fff',
                        borderBottom: '1px solid rgba(255,255,255,.2)',
                        '> svg path': {
                            fill: '#fff',
                        },
                        '&:hover, &:focus': {
                            borderBottomColor: 'rgba(255,255,255,.75)',
                            color: 'rgba(255,255,255,.75)',
                            '> svg path': {
                                fill: 'rgba(255,255,255,.75)',
                            },
                        },
                        '&.active': {
                            borderBottomColor: 'transparent',
                            color: '#fff',
                            '> svg path': {
                                fill: '#fff',
                            },
                        }
                    }
                }
            },
        },
        
        '.accordion-content': {
            '&.accordion-content--default': {
                '.accordion-body': {
                    padding: 'var(--whitespace)',
                    borderRadius: 'var(--accordion-body-default-radius)',
                    background: 'var(--accordion-body-default-bg)',
                },
                '&.white': {
                    '.accordion-body': {
                        background: '#fff',
                        color: 'var(--text-color)',
                        ' *:not(a)': {
                            color: 'var(--text-color)',
                        }
                    }
                }
            },
            '&.active': {
                '.accordion-body': {
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                }
            },
            '&.accordion-content--underline': {
                '.accordion-body': {
                    padding: '0 0 var(--whitespace)',
                    borderBottom: 'var(--accordion-body-underline-border-width) solid var(--accordion-body-underline-border-color)',
                },
                '&.white': {
                    '.accordion-body': {
                        padding: '0 0 var(--whitespace)',
                        borderBottom: '1px solid rgba(255,255,255,.2)',
                        ' *': {
                            color: '#fff',
                        }
                    }
                }
            },
            
        },
        
    }

    addComponents(accordion, ['responsive', 'hover'])
});