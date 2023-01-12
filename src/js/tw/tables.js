const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const tables = {
        '.table-wrapper': {
            position: 'relative',
            margin: 'var(--whitespace) 0',
            'table': {
                width: '100%',
                maxWidth: '100%',
                textAlign: 'left',
                'caption': {
                    textAlign: 'left',
                    marginBottom: 'var(--whitespace)',
                    fontFamily: 'var(--table-caption-ff)',
                    fontSize: 'rfs(var(--table-caption-fs))',
                    fontWeight: 'var(--table-caption-fw)',
                    color: 'var(--table-caption-color)',
                },
                'thead td, th': {
                    fontFamily: 'var(--table-head-ff)',
                    fontSize: 'rfs(var(--table-head-fs))',
                    fontWeight: 'var(--table-head-fw)',
                    color: 'var(--table-head-color)',
                    backgroundColor: 'var(--table-head-bg)',
                },
                'th, td':{
                    lineHeight: '1.25',
                    padding: '.75rem',
                    border: '1px solid var(--table-border-color)',
                    'p': {
                        margin: '0',
                    },
                    '@screen md': {
                        padding: 'calc(var(--whitespace) * .75) calc(var(--whitespace) * 1.25)',
                    },
                },
                'td': {
                    fontSize: theme("fontSize.sm"),
                    color: 'var(--table-cell-color, var(--text-color))',
                    background: 'var(--table-cell-bg)',
                    '@screen md': {
                        fontSize: 'var(--table-cell-fs)',
                    },
                },
                '@screen lg': {
                    maxWidth: theme("screens.lg"),
                }
            },
            '&.table--data': {
                'table': {
                    tableLayout: 'fixed',
                    marginBottom: '2rem',
                },
            },
            '&.table--center': {
                textAlign: 'center',
                'table': {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    'caption, th, td': {
                        textAlign: 'center',
                    }
                }
            },
            '&.table--outline': {
                'table': {
                    borderCollapse: 'collapse',
                    border: '1px solid var(--table-border-color)',
                    'thead td, tr th': {
                        background: 'transparent',
                        color: 'var(--text-color)',
                    },
                }
            },
            '&.table--underline': {
                'table': {
                    border: 'none',
                    'td, th': {
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--table-border-color)',
                        color: 'var(--text-color)',
                    },
                    'tr > *:first-child': {
                        paddingLeft: '0',
                    },
                }
            },
            '&.table--striped': {
                'table': {
                    'tr:nth-child(even) > *': {
                        backgroundColor: 'var(--table-stripe-bg)',
                    }
                },
                '&.white': {
                    'table': {
                        'tr:nth-child(even) > *': {
                            backgroundColor: 'rgba(255,255,255,.25)',
                        }
                    },
                }
            },
            '&.table--complex': {
                'table': {
                    maxWidth: 'none',
                    'th[scope="row"]': {
                        background: 'var(--table-cell-bg)',
                        width: '35%',
                    },
                }
            },
            '&.table--mobile': {
                'table': {
                    '@screen below-md': {
                        'thead, tr:first-child': { 
                            display: 'none',
                        },
                        'tr': { 
                            padding: '0',
                            background: 'none',
                        },
                        'tr, td': { 
                            display: 'block',
                            textAlign: 'left',
                        },
                        'tr > *': { 
                            display: 'flex',
                            padding: '.75rem',
                        },
                        'tr td:first-child, th[scope="row"]': {
                            background: 'var(--table-head-bg)',
                            color: 'var(--table-head-color)',
                            width: '100%',
                        },
                        'td:before, th[scope="row"]:before': {
                            content: 'attr(data-label)',
                            display: 'block',
                            fontWeight: 'bold',
                            flex: '0 0 50%',
                            paddingRight: '5px',
                        },
                    },
                },
                '&.white': {
                    '@screen below-md': {
                        'tr td:first-child, th[scope="row"]': {
                            color: '#fff',
                        }
                    }
                }
            },
            '&.table--demand': {
                'table': {
                    'td, th': {
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--table-border-color)',
                    },
                },
                '.low, .medium, .high': {
                    textTransform: 'uppercase',
                    letterSpacing: '.025rem',
                    borderRadius: '.5rem',
                    padding: '.5rem',
                    fontSize: theme("fontSize.md"),
                    maxWidth: '160px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: 'bold',
                },
                '.high': {
                    backgroundColor: theme("colors.green.50"),
                    color: theme("colors.green.900"),
                    'svg': {
                        margin: '0 .5rem',
                        fontSize: theme("fontSize.xl"),
                        'path': {
                            fill: theme("colors.green.500"),
                        },
                    }
                },
                '.medium': {
                    backgroundColor: theme("colors.yellow.50"),
                    color: theme("colors.yellow.900"),
                    'svg': {
                        margin: '0 .5rem',
                        fontSize: theme("fontSize.xl"),
                        'path': {
                            fill: theme("colors.yellow.500"),
                        },
                    }
                },
                '.low': {
                    backgroundColor: theme("colors.gray.100"),
                    color: theme("colors.gray.700"),
                    'svg': {
                        margin: '0 .5rem',
                        fontSize: theme("fontSize.xl"),
                        'path': {
                            fill: theme("colors.gray.500"),
                        },
                    }
                }
            },
            '&.table--earnings': {
                'table': {
                    maxWidth: 'none',
                },
                '.bar': {
                    display: 'none',
                    height: '10px',
                    margin: '.25rem 0',
                    backgroundColor: 'var(--table-bar-color)',
                    '@screen md': {
                        display: 'block',
                    }
                },
            },
            '&.table--compare': {
                'table': {
                    maxWidth: 'none',
                    'tr:first-child > th': {
                        position: 'sticky',
                        top: 'var(--header-height)',
                        borderTop: 'none',
                        '&:first-of-type': {
                            width: '20%',
                            fontSize: theme("fontSize.lg"),
                        },
                        '&:not(:first-of-type)': {
                            width: '40%',
                        },
                    },                    
                    'tr:not(:first-child) > th': {
                        backgroundColor: 'var(--table-cell-bg)',
                    },
                    'th, td': {
                        borderLeft: 'none',
                        borderRight: 'none',
                        '@screen md': {
                            padding: theme("spacing.extra")
                        },                        
                    },
                },
            },
            '&.white': {
                '> *:not(table)': {
                    color: "#fff",
                },
                'table': {
                    'thead td, th, td': {
                        color: '#fff !important',
                        backgroundColor: 'transparent',
                    },
                    'th, td': {
                        borderColor: 'rgba(255,255,255,.25)',
                    },
                    '.bar': {
                        backgroundColor: "#fff",
                    },
                }
            }
        },
        
    }

    addComponents(tables, ['responsive', 'hover'])
});