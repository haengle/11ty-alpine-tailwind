const plugin = require('tailwindcss/plugin')
const svgToDataUri = require('mini-svg-data-uri')


module.exports = plugin(function({ addComponents, theme }) {

    const formSuccessSvg = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="circle-check" class="svg-inline--fa fa-circle-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="'+theme("colors.green.600")+'" d="M340.7 180.7L224 297.4L171.3 244.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l64 64C215.8 334.4 219.9 336 224 336s8.188-1.562 11.31-4.688l128-128c6.25-6.25 6.25-16.38 0-22.62S346.9 174.4 340.7 180.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"></path></svg>'
    const formErrorSvg = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="circle-xmark" class="svg-inline--fa fa-circle-xmark fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="'+theme("colors.red.500")+'" d="M331.3 180.7c-6.25-6.25-16.38-6.25-22.62 0L256 233.4L203.3 180.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L233.4 256L180.7 308.7c-6.25 6.25-6.25 16.38 0 22.62c6.246 6.246 16.37 6.254 22.62 0L256 278.6l52.69 52.69c6.246 6.246 16.37 6.254 22.62 0c6.25-6.25 6.25-16.38 0-22.62L278.6 256l52.69-52.69C337.6 197.1 337.6 186.9 331.3 180.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256S512 397.4 512 256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"></path></svg>';

    const forms = {
        '.form-item': {
            margin: '.5rem 0',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            '.form-input:not(.form-input-intl), .form-select, .form-textarea': {
                height: '3.5rem',
                lineHeight: '1.25',
                '&::placeholder': {
                    color: 'transparent',
                },
                '&:focus, &:not(:placeholder-shown), &.focus': {
                    paddingTop: '1.65rem',
                    paddingBottom: '.625rem',
                    '~ label': {
                        opacity: '.65',
                        transform: 'scale(.85) translateY(-.5rem) translateX(.15rem)',
                    },
                },
                '&:-webkit-autofill': {
                    paddingTop: '1.65rem',
                    paddingBottom: '.625rem',
                }
            },
            '.form-input-intl': {
                height: '3.5rem',
            },
            '.form-label': {
                position: 'absolute',
                top: '0',
                left: '0',
                height: '100%',
                padding: '.75rem .5rem .75rem calc(.5rem + 2px)',
                pointerEvents: 'none',
                border: '1px solid transparent',
                transformOrigin: '0 0',
                lineHeight: '1.75',
                color: 'var(--label-color)',
                '@media (prefers-reduced-motion: no-preference)': {
                    transition: 'opacity .1s ease-in-out, transform .1s ease-in-out',
                },
                '&.error': {
                    color: theme("colors.red.500"),
                },
                '&.form-intltel-label':{
                    position: 'static',
                    height: 'auto',
                    padding: '.25rem',

                }
            },
            '&.form-checkbox-item, &.form-radio-item': {
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
            },
            '[disabled]': {
                backgroundColor: 'var(--input-disabled-bg)',
                color: theme("colors.gray.600"),
                '+ label': {
                    opacity: '.65',
                    color: theme("colors.gray.600"),
                },
            },
            '.iti': {
                width: '100%',
                maxWidth: '300px',
            }
        },
        '.form-input, .form-textarea, .form-select, .form-multiselect': {
            borderRadius: 'var(--input-radius)',
            width: '100%',
            maxWidth: '300px',
            backgroundColor: 'var(--input-bg)',
            borderColor: 'var(--input-border-color)',
            boxShadow: 'var(--input-shadow)',
            color: 'var(--text-color)',
            '&:focus': {
                '--tw-ring-color': 'var(--input-focus-border-color)',
                borderColor: 'var(--input-focus-border-color)',
                backgroundColor: 'var(--input-focus-bg)',
            },
            '&.error': {
                borderColor: theme("colors.red.500"),
            },
        },
        '.form-input:not([type="date"]), .form-textarea, .form-select': {
            paddingRight: '2.5rem',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5em',
            backgroundPosition: 'right .5rem center',
            '&.valid': {
                backgroundImage: `url(${svgToDataUri(formSuccessSvg)})`,
            },
            '&.error': {
                backgroundImage: `url(${svgToDataUri(formErrorSvg)})`,
            }
        },
        '.form-textarea': {
            height: '5rem !important',
        },
        '.form-select': {
            height: '3.7rem !important',
        },
        '.form-multiselect': {
            '+ .form-label': {
                position: 'static',
                order: '-1',
                padding: '.25rem .5rem',
            },
        },
        '.form-checkbox': {
            borderRadius: '3px',
            color: 'var(--checkbox-color)',
            boxShadow: 'var(--input-shadow)',
            '&:focus': {
                '--tw-ring-color': 'var(--checkbox-color)',
                color: 'var(--checkbox-color)',
            },
        },
        '.form-radio': {
            boxShadow: 'var(--input-shadow)',
            color: 'var(--checkbox-color)',
            '&:focus': {
                '--tw-ring-color': 'var(--checkbox-color)',
                color: 'var(--checkbox-color)',
            },
        },
        '.form-checkbox-label, .form-radio-label': {
            paddingLeft: '.5rem', 
            '&.error': {
                color: theme("colors.red.500"),
            },
        },
        '.form-label, .form-checkbox-label, .form-radio-label': {
            fontFamily: 'var(--label-ff)',
            fontSize: 'var(--label-fs)',
        },
        '.form-label-large': {
            fontFamily: 'var(--label-large-ff)',
            fontSize: 'var(--label-large-fs)',
            fontWeight: 'var(--label-large-fw)',
            color: 'var(--label-large-color)',
        },
        '.form-fieldset': {
            marginBottom: 'calc(var(--whitespace) * 2)',
        },
        '.form-intro': {
            color: 'var(--text-color)',
            fontSize: 'var(--form-intro-fs, 1rem)',
        },
        '.form-legend': {
            fontWeight: 'bold',
            fontSize: theme("fontSize.lg"),
            marginBottom: 'calc(var(--whitespace) / 2)',
        },
        '.form-btn': {
            display: 'inline-block',
            textAlign: 'center',
            textDecoration: 'none',
            padding: 'calc(var(--whitespace) * .75) calc(var(--whitespace) * 2.25)',
            borderRadius: 'var(--btn-radius)',
            fontWeight: 'var(--btn-fw)',
            fontSize: 'var(--btn-fs)',
            fontFamily: 'var(--btn-ff)',
            textTransform: 'var(--btn-tt)',
            cursor: 'pointer',
            '&.form-btn--submit': {
                background: 'var(--btn-form-submit-bg)',
                color: 'var(--btn-form-submit-color)',
                boxShadow: 'var(--btn-form-submit-shadow)',
                border: 'var(--btn-form-submit-border-width) solid var(--btn-form-submit-border-color)',
                '&:hover, &:focus': {
                  background: 'var(--btn-form-submit-hover-bg)',
                  color: 'var(--btn-form-submit-hover-color)',
                  boxShadow: 'var(--btn-form-submit-hover-shadow)',
                  borderColor: 'var(--btn-form-submit-hover-border-color)',
                },
            },
            '&.form-btn--secondary': {
                background: 'var(--btn-form-secondary-bg)',
                color: 'var(--btn-form-secondary-color)',
                boxShadow: 'var(--btn-form-secondary-shadow)',
                border: 'var(--btn-form-secondary-border-width) solid var(--btn-form-secondary-border-color)',
                '&:hover, &:focus': {
                  background: 'var(--btn-form-secondary-hover-bg)',
                  color: 'var(--btn-form-secondary-hover-color)',
                  boxShadow: 'var(--btn-form-secondary-hover-shadow)',
                  borderColor: 'var(--btn-form-secondary-hover-border-color)',
                },
            },
            '&[disabled]': {
                cursor: 'default',
                opacity: '.65',
                pointerEvents: 'none',
            },
        },
        '.form-footer': {
            marginTop: 'calc(var(--whitespace) * 2)',
        },
        '.form-disclaimer': {
            fontSize: theme("fontSize.sm"),
            margin: 'var(--whitespace) 0',
            color: theme("colors.gray.500"),
        },
        '.form-notice': {
            color: 'var(--text-color)',
        },
        '.form-item-error, .form-error': {
            color: theme("colors.red.500"),
            fontSize: theme("fontSize.xs"),
            margin: '.125rem 0',
            display: 'block',
            flex: '1 1 100%',
            textAlign: 'left',
        },
        '.section-form-wrapper': {
            maxWidth: 'var(--section-max-width)',
            backgroundColor: 'var(--section-form-bg, #fff)',
            boxShadow: 'var(--section-form-shadow), none)',
            margin: '2em auto',
            padding: '2em 1em',
            'h2': {
                textAlign: 'center',
                fontSize: 'rfs(theme("fontSize.3xl"))',
                marginBottom: '2rem',
                color: 'var(--section-form-h2-color, var(--text-color))',
            },
            '.form-footer, .form-intro': {
                textAlign: 'center',
            },
            '&.two-cols': {
                '@screen md': {
                    '.form-fieldset': {
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        maxWidth: theme("screens.md"),
                        margin: 'auto',
                        '.form-item-wrapper': {
                            flex: '0 1 45%',
                            marginTop: '0',
                            '&.full': {
                                flex: '0 1 90%',
                            }
                        }
                    }
                }
               
            }
        }
      }

      addComponents(forms, ['responsive, hover'])
});