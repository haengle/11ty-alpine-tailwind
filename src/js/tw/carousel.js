const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const carousel = {
        '.carousel-outer': {
          margin: '2rem auto',
        },
        '.carousel': {
           padding: '40px 0',
           width: '90%',
           '.swiper-slide': {
             height: 'auto',
             '.card': {
               height: '100%',
             },
             '.caption': {
               color: theme("colors.gray.500"),
               fontStyle: 'italic',
               marginTop: '1rem',
               display: 'block',
             },
           },
           '@screen md': {
               padding: '58px 0',
           },
           '&.testimonial': {
             '.testimonial': {
               padding: 'rfs(3rem)',
               textAlign: 'center',
               '.testimonial-content': {
                 fontSize: 'rfs(var(--carousel-testimonial-fs))',
                 fontFamily: 'var(--carousel-testimonial-ff)',
               },
               '.byline': {
                 fontSize: 'var(--carousel-testimonial-byline-fs, .95rem)',
                 fontWeight: 'var(--carousel-testimonial-byline-fw, bold)',
                 fontFamily: 'var(--carousel-testimonial-byline-ff)',
                 transform: 'var(--carousel-testimonial-byline-transform)',
               },
               '.byline-text': {
                fontSize: 'var(--carousel-testimonial-bylinetext-fs, .95rem)',
                fontWeight: 'var(--carousel-testimonial-bylinetext-fw, bold)',
                fontFamily: 'var(--carousel-testimonial-bylinetext-ff)',
                transform: 'var(--carousel-testimonial-bylinetext-transform)',
              },
               '&.with-image': {
                 padding: '0',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 flexWrap: 'wrap',
                 '.testimonial-content': {
                   flex: '1 1 100%',
                   padding: '2rem',
                 },
                 '.testimonial-image': {
                   order: '-1',
                   maxWidth: '260px',
                 },
                 '@screen md': {
                   flexWrap: 'nowrap',
                    '.testimonial-content': {
                      flex: '0 1 60%',
                      padding: 'rfs(3rem)',
                    },
                    '.testimonial-image': {
                        flex: '0 1 320px',
                        order: '2',
                        '&.left': {
                          order: '-1',
                        }
                    }
                 },
                 
               }
             }
           }
        },
        '.swiper-pagination': {
          bottom: '0',
          left: '0',
          width: '100%',
          position: 'absolute',
          textAlign: 'center',
          transform: 'translateZ(0)',
          zIndex: '10',
          '.swiper-pagination-bullet': {
              cursor: 'pointer',
              width: '12px',
              height: '12px',
              display: 'inline-block',
              borderRadius: '50%',
              background: 'var(--carousel-pagination-color)',
              opacity: '1',
              margin: '0 5px',
              '&:only-child': {
                  display: 'none',
              },
              '&:hover, &:focus': {
                  background: 'var(--carousel-pagination-hover-color)',
              },
          },
          '.swiper-pagination-bullet-active': {
              background: 'var(--carousel-pagination-active-color)',
          },
     },
     '.swiper-navigation-wrapper': {
        position: 'absolute',
        width: '100%',
        top: '0',
        left: '0',
        textAlign: 'center',
        display: 'flex',
        '.swiper-button-prev, .swiper-button-next': {
          margin: '0 5px',
          width: '28px',
          height: '28px',
          fontSize: '14px',
          borderRadius: '50%',
          background: '#fff',
          border: '1px solid theme(colors.gray.100)',
          zIndex: '10',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--carousel-navigation-color)',
          '&:not([aria-disabled=true]):hover, &:not([aria-disabled=true]):focus': {
              color: 'var(--carousel-navigation-hover-color)',
          },
          '&[aria-disabled=true]': {
              cursor: 'default',
              color: '#666',
              background: theme("colors.gray.100"),
              opacity: '.5',
          },
          '&.swiper-button-lock': {
            display: 'none',
          },
        },
        '&.swiper-navigation--default': {
          justifyContent: 'flex-end',
        },
        '&.swiper-navigation--center': {
          justifyContent: 'center',
        },
        '&.swiper-navigation--bottom, &.swiper-navigation--bottom-center': {
          top: 'auto',
          bottom: '0',
          justifyContent: 'flex-end',
        },
        '&.swiper-navigation--bottom-center': {
          justifyContent: 'center',
        },
        '@screen md': {
          '.swiper-button-prev, .swiper-button-next': {
              fontSize: '20px',
              width: '48px',
              height: '48px',
          }
        }
     },
      }

      addComponents(carousel, ['responsive, hover'])
});