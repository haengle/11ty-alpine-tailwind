const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const buttons = {
        '.btn': {
          display: 'inline-block',
          textAlign: 'center',
          textDecoration: 'none',
          padding: 'var(--btn-padding, .75rem 2.2rem)',
          borderRadius: 'var(--btn-radius)',
          fontWeight: 'var(--btn-fw)',
          fontSize: 'var(--btn-fs)',
          textTransform: 'var(--btn-tt)',
          fontFamily: 'var(--btn-ff)',
          '&.btn--default': {
            backgroundColor: theme("colors.gray.300"),
            color: 'var(--text-color)',
            '&:hover, &:focus': {
              backgroundColor: theme("colors.gray.400"),
            },
          },
          '&.btn--primary': {
            background: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-color)',
            boxShadow: 'var(--btn-primary-shadow)',
            border: 'var(--btn-primary-border-width) solid var(--btn-primary-border-color)',
            '&:hover, &:focus': {
              background: 'var(--btn-primary-hover-bg)',
              color: 'var(--btn-primary-hover-color)',
              boxShadow: 'var(--btn-primary-hover-shadow)',
              borderColor: 'var(--btn-primary-hover-border-color)',
            },
            '&.white': {
              background: '#fff',
              color: 'var(--btn-primary-bg)',
            },
            '&.white:hover, &.white:focus': {
              background: 'rgba(255,255,255,.85)',
              color: 'var(--btn-primary-hover-bg)',
            },
          },
          '&.btn--secondary': {
              background: 'var(--btn-secondary-bg)',
              color: 'var(--btn-secondary-color)',
              boxShadow: 'var(--btn-secondary-shadow)',
              border: 'var(--btn-secondary-border-width) solid var(--btn-secondary-border-color)',
              '&:hover, &:focus': {
                background: 'var(--btn-secondary-hover-bg)',
                color: 'var(--btn-secondary-hover-color)',
                boxShadow: 'var(--btn-secondary-hover-shadow)',
                borderColor: 'var(--btn-secondary-hover-border-color)',
              },
              '&.white': {
                borderColor: '#fff',
                color: '#fff',
              },
              '&.white:hover, &.white:focus': {
                background: 'rgba(255,255,255,.25)',
                color: '#fff',
              },
            },
            '&.btn--tertiary': {
              background: 'transparent',
              color: 'var(--btn-tertiary-color)',
              boxShadow: 'none',
              border: '1px solid transparent',
              borderRadius: '0',
              padding: 'calc(var(--whitespace) * .5) 0',
              '&:hover, &:focus': {
                background: 'transparent',
                color: 'var(--btn-tertiary-hover-color)',
                borderBottomColor: 'var(--btn-tertiary-hover-color)',
              },
              '&.white': {
                border: '1px solid transparent',
                color: '#fff',
                },
              '&.white:hover, &.white:focus': {
                borderBottomColor: '#fff',
              },
            },
        },
        
      }

      addComponents(buttons, ['responsive, hover'])
});