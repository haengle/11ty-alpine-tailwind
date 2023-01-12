const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const compareprograms = {
        '.program-compare-wrapper': {
            position: 'relative',
            '.program-compare-header':{
                padding: 'rfs(2rem)',
                background: 'var(--program-compare-header-bg)',
            },
            '.error': {
                display: 'block',
                textAlign: 'center',
                color: theme("colors.red.500"),
                margin: '1rem 0 0',
            },
            '.key-heading': {
                fontFamily: 'var(--program-title-ff)',
                fontSize: 'rfs(var(--program-title-fs))',
                fontWeight: 'var(--program-title-fw)',
                color: 'var(--program-title-color)',
                textTransform: 'var(--program-title-transform)',
            },
            '.program-compare-selects-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                justifyContent:'center',
                margin: '2rem 0 0',
                '.toggle-dropdown-select': {
                    maxWidth: 'none',
                    minWidth: '275px',
                    margin: '0',
                },
                '@screen md': {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    '.toggle-dropdown-wrapper': {
                        flex: '0 1 30%',
                    }
                }
            },
            '.comparison-chart-wrapper': {
                padding: 'rfs(3rem) 0',
                display: 'flex',
                alignItems: 'flex-end',
                '.comparison-chart-keys': {
                    flex: '0 1 25%',
                    '> *': {
                        padding: '1rem 0',
                        borderBottom: '1px solid var(--table-border-color)',
                        fontFamily: 'var(--table-head-ff)',
                        fontSize: 'rfs(var(--table-head-fs))',
                        fontWeight: 'var(--table-head-fw)',
                        color: 'var(--table-head-color)',
                    },
                    '@screen lg': {
                        flex: '0 1 35%',
                        minWidth: '220px',
                    }
                },
                '.chart-content': {
                    flex: '0 1 50%',
                    ' > *': {
                        borderBottom: '1px solid var(--table-border-color)',
                        padding: '1rem .5rem',
                        '@screen below-md': {
                            fontSize: theme("fontSize.sm"),
                        },
                    },
                }
            }
        },
        
    }

    addComponents(compareprograms)
});