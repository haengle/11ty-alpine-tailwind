const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const faculty = {
        '.faculty-group-wrapper': {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            '@screen md': {
                flexDirection: 'row',
                alignItems: 'flex-start !important',
            },
            '&.faculty-group-wrapper--default:not(.cols-1)': {
                '.faculty--horizontal': {
                    paddingLeft: '0',
                    paddingRight: '0',
                    '.faculty-content-wrapper': {
                        paddingLeft: '0',
                        paddingRight: '0',
                        flexDirection: 'column',
                        '.faculty-content': {
                            padding: '1rem',
                        },
                        '@screen lg': {
                            flexDirection: 'row',
                            '.faculty-content': {
                                padding: '0 1rem',
                            },
                        }
                    }
                }
            },
            '&.faculty-group-wrapper--expose': {
                '.faculty': {
                    '.faculty-content-wrapper':{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 'rfs(2rem)',
                        background: 'var(--faculty-expose-bg)',
                        '@screen md': {
                            flexDirection: 'row',
                            '.faculty-image': {
                                marginBottom: '0',
                                marginRight: 'rfs(2rem)',
                            },
                        },
                    },
                },
            },
            '.faculty': {
                margin: '1rem 0',
                padding: '1rem',
                position: 'relative',
               '.faculty-image': {
                 marginBottom: 'rfs(2rem)',
                 overflow: 'hidden',
                 maxWidth: '280px',
                 '> a > svg[data-icon*="up-right"]': {
                    display: 'none',
                 },
                 'img': {
                    objectFit: 'cover',
                    margin: 'auto',
                 },
               },
               '.faculty-content': {
                 position: 'relative',
                 '> a > svg[data-icon*="up-right"]': {
                    display: 'none',
                 },
                 '.faculty-name': {
                     marginBottom: '.5rem',
                     fontSize: 'var(--faculty-name-fs)',
                     color: 'var(--faculty-name-color)',
                     fontFamily: 'var(--faculty-name-ff)',
                     fontWeight: 'var(--faculty-name-fw)',
                     textTransform: 'var(--faculty-name-transform)',
                 },
                 '.faculty-position': {
                     fontSize: 'var(--faculty-position-fs)',
                     color: 'var(--faculty-position-color)',
                     fontFamily: 'var(--faculty-position-ff)',
                     fontWeight: 'var(--faculty-position-fw)',
                     textTransform: 'var(--faculty-position-transform)',
                 },
                 '.faculty-summary': {
                     marginBottom: 'var(--whitespace)',
                     '&.text-white a': {
                         color: "#fff",
                     },
                 },
               },
               '&.card': {
                 '.faculty-image': {
                     marginBottom: '1rem',
                     maxWidth: 'none',
                     '&.img--default, &.img--portrait': {
                         borderRadius: 'var(--card-radius) var(--card-radius) 0 0',
                     },
                     '&.img--small-circle, &.img--small-square': {
                         marginTop: '1rem',
                     },
                 },
                 '.faculty-content': {
                     padding: '1rem',
                 }
               },
               '&.faculty--horizontal': {
                   marginBottom: 'rfs(2rem)',
               },
               '@screen md': {
                   margin: '0',
                   '.faculty-image': {
                       maxWidth: 'none',
                   },
                   '&.faculty--horizontal': {
                     '.faculty-content-wrapper': {
                         display: 'flex',
                         flexDirection: 'row',
                         padding: '0 1rem',
                         '.faculty-content': {
                             padding: '0 2rem',
                             flex: '1 1 auto',
                         },
                     },
                     '.faculty-image': {
                         width: '25%',
                         minWidth: '220px',
                         marginBottom: '0',
                         '&.img--small-circle, &.img--small-square': {
                             minWidth: 'var(--small-image-w)',
                             width: 'var(--small-image-w)',
                             marginLeft: '1rem',
                         },
                     },
                 },
               
               },
               '@screen 2xl': {
                   '&.faculty--horizontal': {
                       '.faculty-image': {
                           minWidth: '270px',
                       },
                   },
               },
               
             },
        },
       '.profile-wrapper': {
           '> h2': {
               marginBottom: '2rem',
           },
           '.profile-item':{
               display: 'flex',
               flexWrap: 'wrap',
               flexDirection: 'column',
               '@screen md': {
                   flexDirection: 'row',
               }
           },
           '.profile-item-summary': {
               'strong': {
                   display: 'block',
               }
           },
           '.profile-item-image': {
               padding: '0 1.5rem',
               maxWidth: '400px',
               '@screen below-md': {
                   order: '-1',
                   marginBottom: '2rem',
                   padding: '0',
               }
           },
           '.profile-item-details': {
               '@screen md': {
                   marginLeft: 'auto',
                   flex: '1 1 100%',
               },
               '@screen lg': {
                   flex: '0 1 33%'
               }
           }
       }
        
      }

      addComponents(faculty)
});