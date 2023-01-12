const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const steps = {
        '.steps-wrapper': {
           position: 'relative',
           margin: '2rem 0',
           width: '100%',
           display: 'flex',
           flexDirection: 'column',
           flexWrap: 'wrap',
           justifyContent: 'flex-start',
           '.steps-item': {
               marginBottom: '2rem',
               width: '100%',
                '.steps-item-label': {
                    color: 'var(--steps-title-color)',
                    fontFamily: 'var(--steps-title-ff)',
                    fontWeight: 'var(--steps-title-fw)',
                    display: 'block',
                    lineHeight: '1',
                    fontSize: 'var(--steps-title-fs)',
                    marginBottom: '1rem',
                    textTransform: 'var(--steps-title-transform)',
                },
                '.steps-item-step': {
                    color: 'var(--steps-step-color)',
                    fontFamily: 'var(--steps-step-ff)',
                    fontWeight: 'var(--steps-step-fw)',
                    lineHeight: '1',
                    marginBottom: '1rem',
                    fontSize: 'var(--steps-step-fs)'
                },
                '.steps-item-buttons-wrapper > *': {
                    margin: '.25rem 0',
                },
                '&.text-white': {
                    '.steps-item-label, .steps-item-step': {
                        color: 'currentColor'
                    }
                }
           },
          '@screen md': {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start!important',
            marginLeft: '-1rem',
            marginRight: '-1rem',
            '.steps-item': {
                padding: '1rem'
            }
          },
          '@screen lg': {
            marginLeft: '-2rem',
            marginRight: '-2rem',
            '.steps-item': {
                padding: '2rem'
            }
          },
          '&.breakdown-columns': {
            '.steps-item': {
                textAlign: 'center',
                position: 'relative',
                '~ .steps-item::before': {
                    content: '"+"',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '-2.75rem',
                    fontSize: '2rem',
                    lineHeight: '1',
                },
                '&:last-child::before': {
                    content: '"="'
                },
                '.steps-item-step': {
                    background: 'var(--breakdown-item-bg, theme("colors.primary.DEFAULT"))',
                    borderRadius: '50%',
                    width: '12rem',
                    height: '12rem',
                    margin: '0 auto 1rem',
                    color: 'var(--breakdown-item-color, #fff)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    lineHeight: '.85',
                    fontFamily: 'var(--breakdown-item-ff, theme("fontFamily.sans"))',
                    fontWeight: 'var(--breakdown-item-fw, bold)',
                    fontSize: 'var(--breakdown-item-fs, 2rem)'
                },
                '@screen md': {
                    '~ .steps-item::before': {
                        left: '-1rem',
                        fontSize: '2.5rem',
                        top: '6rem'
                    }
                }
            }
          }
        },
      }

      addComponents(steps, ['responsive, hover'])
});