const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase, theme }) {

    addBase({
        ':root': {
            'overflow-x': 'hidden',
        },
        '[x-cloak]': {
            display: 'none !important',
        },
        'body': {
            '-webkit-text-size-adjust': '100%',
            fontSize: theme("fontSize.base"),
            fontFamily: 'var(--body-ff)',
            fontWeight: 'var(--body-fw)',
            color: 'var(--text-color)',
        },
        'h1, h2, h3, h4, h5, h6': {
            marginBottom: 'var(--whitespace)',
            fontWeight: 'var(--heading-fw)',
            fontFamily: 'var(--heading-ff)',
            lineHeight: '1.25'
        },
        'h1': {
            fontSize: 'var(--h1-fs)',
            color: 'var(--h1-color)',
            textTransform: 'var(--h1-transform)',
        },
        'h2': {
            fontSize: 'var(--h2-fs)',
            color: 'var(--h2-color)',
            textTransform: 'var(--h2-transform)',
        },      
        'h3': {
            fontSize: 'var(--h3-fs)',
            color: 'var(--h3-color)',
            textTransform: 'var(--h3-transform)',
        },
        'h4': {
            fontSize: 'rfs(theme("fontSize.xl"))',
        },      
        'h5': {
            fontSize: 'rfs(theme("fontSize.lg"))',
        },
        'h6': {
            fontSize: 'rfs(theme("fontSize.sm"))',
            fontWeight: 'normal'
        },
        'b, strong, dt': {
            fontWeight: '700',
        },
        'p, ul, ol, dl, figure, pre, table': {
            marginBottom: 'var(--whitespace)'
        },
        'a': {
            textDecoration: 'underline',
            color: 'var(--link-color)',
            '&:hover, &:focus': {
                color: 'var(--link-hover-color)'
            },
            '&[href]': {
                cursor: 'pointer',
            },
            '> svg[data-icon*="up-right"]': {
                width: '12px',
                height: '12px',
                display: 'inline-block',
                verticalAlign: 'baseline',
                marginLeft: '3px',
                transition: 'none',
                'path': {
                    transition: 'none',
                }
            }
        },
        'a, button': {
            '&:focus': {
                outline: 'thin dotted',
            },
        },
        'ol': {
            listStyleType: 'decimal',
            paddingLeft: 'calc(var(--whitespace) * 2)'
        },
        'ul': {
            listStyleType: 'disc',
            paddingLeft: 'calc(var(--whitespace) * 2)',
        },
        'ol ol, ul ul, ol ul, ul ol, blockquote *, li p': {
            marginBottom: '0'
        },
        'dd': {
            marginBottom: 'calc(var(--whitespace) * .5)'
        },
        'hr': {
            margin: 'var(--whitespace) 0',
            color: theme("colors.gray.200")
        },
        'abbr': {
            textDecoration: 'underline dotted',
            cursor: 'help',
        },
        'blockquote': {
            fontSize: theme("fontSize.xl"),
            padding: 'calc(var(--whitespace) * .5) calc(var(--whitespace) * 1.25)',
            borderLeftWidth: '4px',
            borderLeftColor: theme("colors.primary.DEFAULT"),
            marginBottom: 'var(--whitespace)',
        },
        'blockquote + figcaption': {
            padding: '0 calc(var(--whitespace) * 1.25 + 4px)',
            color: theme("colors.muted"),
            fontSize: theme("fontSize.sm")
        },
        

      })
});