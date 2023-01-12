const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const hero = {
        '.hero': {
          position: 'relative',
          zIndex: '50',
          minHeight: 'var(--hero-height-sm)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '.hero-content': {
            position: 'relative',
            zIndex: '10',
            padding: 'rfs(3rem)',
            maxWidth: theme("screens.md"),
            margin: 'auto',
            width: '100%',
            '.hero-content-wrapper': {
              display: 'flex',
              flexDirection: 'column',
              alignItems:'center',
              justifyContent: 'center',
            },
            'h1': {
                fontSize: 'var(--hero-h1-fs)',
                lineHeight: '1.1',
                fontFamily: 'var(--hero-h1-ff)',
                fontWeight: 'var(--hero-h1-fw)',
                textTransform: 'var(--hero-h1-transform)',
                color: 'var(--hero-h1-color)',
            },
            'h2': {
               order: '-1',
               fontSize: 'var(--hero-subtitle-fs)',
               lineHeight: '1.1',
               fontFamily: 'var(--hero-subtitle-ff)',
               fontWeight: 'var(--hero-subtitle-fw)',
               textTransform: 'var(--hero-subtitle-transform)',
               color: 'var(--hero-subtitle-color)',
               marginBottom: 'calc(var(--whitespace) / 2)',
            },
            'p': {
              fontSize: 'var(--hero-desc-fs)',
              fontFamily: 'var(--hero-desc-ff)',
              fontWeight: 'var(--hero-desc-fw)',
              textTransform: 'var(--hero-desc-transform)',
              color: 'var(--hero-desc-color)',
            },
            '.hero-buttons': {
              marginTop: 'var(--whitespace)',
              '> button, > a': {
                minWidth: '180px',
                margin: '0 10px 10px 0',
              },
            },
          },
          '.hero-img-wrapper': {
            height: 'var(--hero-img-height, 100%)',
            '&::before': {
              opacity: 'var(--hero-overlay-opacity)',
            },
            '.bg-image img': {
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }
          },
          '&.hero--image-default': {
            '&.downstream': {
              '.hero-img-wrapper': {
                height: 'var(--hero-img-height, 100%)',
              },
            }
          },
          '&.content-left, &.content-right': {
            '.hero-content': {
              '@screen md': {
                marginLeft: '0',
                width: '50%',
                '.hero-content-wrapper[class*="text-left"]': {
                  alignItems: 'flex-start',
                },
                '.hero-content-wrapper[class*="text-right"]': {
                  alignItems: 'flex-end',
                },
                '.hero-buttons *': {
                  display: 'block',
                  '~ *': {
                    marginLeft: '0',
                  },
                },
              },
              '@screen lg': {
                '.hero-buttons *': {
                  display: 'inline-block',
                  '~ *': {
                    marginLeft: '10px',
                  },
                },
              },
            },
          },
          '&.content-right': {
            '.hero-content': {
              marginLeft: 'auto',
              marginRight: '0',
              '@screen md': {
                paddingRight: '1rem',
              },
              '@screen lg': {
                paddingRight: 'rfs(3rem)',
              },
            },
          },
          '&.content-v-top': {
            '.hero-content': {
              marginTop: '0',
            },
          },
          '&.content-v-bottom': {
            '.hero-content': {
              marginBottom: '0',
            },
          },
          '&.hero--image-half-left, &.hero--image-half-right, &.hero--image-twothirds-left, &.hero--image-twothirds-right': {
            '.hero-content': {
              '@screen md': {
                marginRight: '0',
                width: '50%',
                '&.hero-content--left, &.hero-content--right': {
                  marginLeft: 'auto',
                },
              },
            }
          },
          '&.hero--image-half-right, &.hero--image-twothirds-right': {
            '.hero-content': {
              marginLeft: '0 !important',
              marginRight: 'auto',
            }
          },
          '&.hero--image-twothirds-left, &.hero--image-twothirds-right': {
            '.hero-content': {
              '@screen lg': {
                width: '33%',
                '.hero-buttons *': {
                  display: 'block',
                  '~ *': {
                    marginLeft: '0',
                  },
                },
              },
            }
          },
          '&.hero--image-behind-header': {
            '.hero-img-wrapper': {
              top: 'auto',
              bottom: '0',
              height: 'calc(100% + var(--header-height))',
            },
          },
          '&.hero--image-stacked, &.hero--image-stacked-bottom': {
            '.hero-img-wrapper': {
              margin: '2rem 0',
              height: '180px',
              width: '100%',
              position: 'relative',
              '&.fluid': {
                width: '100vw',
                left: '50%',
                transform: 'translateX(-50%)',
              }
            },
          },
          '&.hero--image-stacked-bottom': {
            '.hero-content': {
              display: 'flex',
              flexDirection: 'column',
            },
            '.hero-img-wrapper': {
              order: '10',
            },
          },
          '&.has-sidebar': {
            '.hero-sidebar': {
              position: 'static',
              background: 'var(--hero-sidebar-bg)',
              padding: 'rfs(2rem)',
              width: '90%',
              zIndex: '3',  
              'h2': {
                color: 'var(--hero-sidebar-h2-color, var(--h2-color))',
                fontSize: 'theme("fontSize.2xl")',
              },
              '.hero-sidebar-content': {
                position: 'relative',
                zIndex: '2',
                '.form-btn.form-btn--submit': {
                  display: 'block',
                  width: '100%',
                  maxWidth: '300px',
                }
              },
              '&.sidebar-brand': {
                background: theme("colors.primary.DEFAULT"),
                '.hero-sidebar-content, .form-disclaimer': {
                  color: '#fff',
                },
              },
              '&.sidebar-box, &.sidebar-box-overhang, &.sidebar-stacked': {
                margin: 'rfs(2rem)',
                marginTop: '0',
                borderRadius: theme("borderRadius.md"),
                boxShadow: 'var(--hero-sidebar-box-shadow)',
                '&::before': {
                  display: 'none',
                },
                '&.sidebar-box-overhang': {
                  '@screen below-md': {
                    boxShadow: 'none',
                    width: '100%',
                  }
                }
              },
            },
            '&.hero--image-default': {
              '@screen below-md': {
                '.hero-img-wrapper': {
                  height: 'var(--hero-img-height-sm, 100%)',
                },
              },              
            },
            '@screen md': {
              flexDirection: 'row',
              alignItems: 'stretch',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '0',
                width: '100vw',
                height: '100%',
                backgroundColor: 'var(--hero-sidebar-bg)',
                zIndex: '0',
              },
              '&.sidebar-brand::before': {
                background: theme("colors.primary.DEFAULT"),
              },
              '.hero-img-wrapper .bg-image, .hero-img-wrapper::before': {
                width: '60%',
              },
              '&.hero--image-default': {
                '.hero-img-wrapper': {
                  height: 'var(--hero-img-height, 100%)',
                },
              },
              '&.sidebar-box, &.sidebar-square, &.sidebar-box-overhang, &.sidebar-stacked': {
                '.hero-sidebar': {
                  marginLeft: '0',
                  marginTop: 'rfs(2rem)',
                },
                '.hero-img-wrapper .bg-image, .hero-img-wrapper::before': {
                  width: '100%',
                }
              },
              '.hero-content': {
                maxWidth: '60%',
              },
              '.hero-sidebar': {
                flex: '0 1 40%',
                '&.sidebar-square': {
                  alignSelf: 'flex-end',
                  minHeight: '390px',
                },
                '&.sidebar-box-overhang': {
                  top: '6rem',
                  marginTop: '0',
                  position: 'relative',
                },
                '&.sidebar-stacked': {
                  flex: '0 1 90%',
                  textAlign: 'center',
                  margin: '2rem auto',
                  maxWidth: 'var(--hero-sidebar-stacked-width, 100%)',
                  '.form-btn': {
                    margin: 'auto',
                  }
                },
                '.hero-sidebar-content.two-cols': {
                    '.form-fieldset': {
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        justifyContent: 'space-around',
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
              },
            },
            '@screen xl': {
              '.hero-img-wrapper .bg-image, .hero-img-wrapper::before': {
                width: 'calc(100% - var(--hero-sidebar-max-width))',
              },
              '.hero-content': {
                maxWidth: 'calc(100% - var(--hero-sidebar-max-width))',
              },
              '.hero-sidebar': {
                flex: '0 1 var(--hero-sidebar-max-width)',
              },
            },
          },
          '&.downstream': {
            minHeight: 'var(--hero-downstream-height-sm)',
            '&.hero--image-default .hero-img-wrapper': {
              height: 'var(--hero-downstream-img-height-sm, 100%)',
            }
          },

       '@screen md': {
            minHeight: 'var(--hero-height)',
            '&.hero--image-default': {
              '.hero-img-wrapper': {
                height: 'var(--hero-img-height, 100%)',
              },
            },
            '&.hero--image-stacked, &.hero--image-stacked-bottom': {
               minHeight: '0',
               height: 'auto',
               '.hero-img-wrapper': {
                 position: 'relative',
                 height: 'var(--hero-stacked-image-height)',
               },
               '.hero-content': {
                 maxWidth: 'none',
                 width: '90%',
                 '.hero-content-wrapper': {
                  maxWidth: theme("screens.md"),
                  margin: 'auto',
                 },
                 '&.hero-content--right .hero-content-wrapper': {
                   marginRight: '0',
                 },
                 '&.hero-content--left .hero-content-wrapper': {
                   marginLeft: '0',
                 },
                 '.hero-content-wrapper[class*="text-left"]': {
                   alignItems: 'flex-start',
                 },
                 '.hero-content-wrapper[class*="text-right"]': {
                  alignItems: 'flex-end',
                },
               },
            },
            '&.sidebar-box-overhang': {
               marginBottom: '6rem',
               alignItems: 'flex-start',
               height: 'auto',
            },
            '&.downstream:not([class*="stacked"])': {
              height: 'var(--hero-downstream-height)',
              '&.hero--image-default .hero-img-wrapper': {
                height: 'var(--hero-downstream-img-height, 100%)',
              }
            },
        },
       '@screen lg': {
         '&.hero--image-stacked, &.hero--image-stacked-bottom': {
            '.hero-content': {
              maxWidth: 'none',
              width: '100%',
            }
         },
         '&.has-sidebar .hero-sidebar .hero-sidebar-content.two-cols .form-fieldset': {
          justifyContent: 'center',
         }
       },          
      },
      '.hero-slider': {
        width: '100vw',
        marginLeft: '-1rem',
        '.swiper-pagination, .swiper-navigation-wrapper': {
          zIndex: '60',
          bottom: 'auto',
          top: 'calc(var(--hero-img-height-sm, 100%) - 1.5rem)',
          '@screen md': {
            bottom: '1rem',
            top: 'auto',
          },
        },
        '.swiper-navigation-wrapper': {
          top: '1rem',
          bottom: 'auto',
          padding: '0 1rem',
        },
        '.hero': {
          '.swiper': {
            height: 'var(--hero-img-height-sm, 100%)',
            width: '100vw',
            '@screen md': {
              height: 'var(--hero-height)',
            }
          },
          '.swiper-slide': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          '.fw-wrapper': {
            transform: 'none',
            left: '0',
            width: '100%'
          },
          '&.has-sidebar': {
            '.swiper-pagination, .swiper-navigation-wrapper': {
              '@screen md': {
                width: '60%',
                bottom: '1rem',
                top: 'auto',
              },
              '@screen xl': {
                width: 'calc(100% - var(--hero-sidebar-max-width))',
              }
            },
            '.swiper': {
              '@screen md':{
                height: 'auto',
                width: '60%',
              },
              '@screen xl': {
                width: 'calc(100% - var(--hero-sidebar-max-width))',
              }
            },
            '.hero-img-wrapper .bg-image, .hero-img-wrapper::before': {
              '@screen md': {
                width: '100%',
              }
            },
            
          }
        }
      }
    }

      addComponents(hero)
});