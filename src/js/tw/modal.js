const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const modal = {
        '.modal-open': {
            overflow: 'hidden',
            height: '100vh',
            minHeight: '-webkit-fill-available',
            '.header--sticky': {
                position: 'static',
            },
            '@screen lg': {
                paddingRight: '15px',
            },
        },
        '.modal-dialog': {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            zIndex: '999999',
            alignItems: 'flex-start',
            '&.modal-dialog--default': {
                '@screen md': {
                    alignItems: 'center',
                    '.modal-body': {
                        marginTop: '0',
                    },
                },
            },
            '.modal-body': {
                zIndex: '999999',
                width: '95%',
                height: '80%',
                overflowY: 'scroll',
                marginTop: 'var(--whitespace)',
                '.modal-header': {
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: 'var(--whitespace) calc(var(--whitespace) * 1.5)',
                    '.modal-header_title': {
                        margin: '0',
                        color: 'var(--text-color)',
                        fontSize: theme("fontSize.3xl"),
                    },
                    '.modal-close': {
                        marginLeft: 'auto',
                        paddingLeft: '1rem',
                        width: 'auto',
                        fontSize: theme("fontSize.2xl"),
                        '&:hover, &:focus': {
                            opacity: '.5',
                        },
                    },
                },
                '.modal-body_content': {
                    padding: '0 calc(var(--whitespace) * 1.5) var(--whitespace)',
                    color: 'var(--text-color)',
                    'div[x-data] > h2': {
                        display: 'none',
                    }
                },
                '&.modal-body--default': {
                    backgroundColor: 'var(--modal-default-body-bg)',
                    borderRadius: 'var(--modal-default-radius)',
                    boxShadow: 'var(--modal-default-shadow)',
                    maxWidth: 'var(--modal-default-max-width)',
                    maxHeight: 'var(--modal-default-max-height)',
                },
                '&.modal-body--small': {
                    backgroundColor: 'var(--modal-small-body-bg)',
                    borderRadius: 'var(--modal-small-radius)',
                    boxShadow: 'var(--modal-small-shadow)',
                    maxWidth: 'var(--modal-small-max-width)',
                    maxHeight: 'var(--modal-small-max-height)',
                }
                  
            },
        },
        '.modal-backdrop': {
            backgroundColor: 'var(--modal-backdrop-bg)',
            opacity: 'var(--modal-backdrop-opacity)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            zIndex: '999999',
        }

    }

    addComponents(modal, ['responsive'])
});