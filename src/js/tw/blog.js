const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const blog = {
        '.blog-wrapper': {
           padding: 'rfs(2rem) 0',
           display: 'flex',
           flexDirection: 'column',
           position: 'relative',
           
           '&.blog-display--list': {
                '@screen md': {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                },
                
                '&.blog--default': {
                    '@screen md': {
                        '.blog-list-item': {
                            flex: '0 1 50%',
                        },
                    },
                    '@screen lg': {
                        '.blog-list-item': {
                            flex: '0 1 33%',
                        },
                    },
                },
                '&.blog--large': {
                    '@screen md': {
                        '.blog-list-item': {
                            flex: '0 1 50%',
                        },
                    },
                },
                '&.blog--horizontal': {
                    '.blog-list-item': {
                        flex: '1 1 100%',
                    },
                    '@screen md': {
                        '.blog-list-item-wrapper': {
                            padding: '0 1rem',
                            marginBottom: '2rem',
                            alignItems: 'start',
                            flexDirection: 'row',
                        },
                        '.blog-list-item-content': {
                            padding: '0 2rem',
                            flex: '0 1 70%',
                        },
                        '.blog-list-item-image': {
                            minWidth: '220px',
                            maxWidth: '400px',
                            marginBottom: '0',
                            flex: '0 1 30%',
                        },
                        '.blog-list-item-meta': {
                            gridArea: 'meta',
                            alignSelf: 'end',
                            padding: '0',
                        },
                    },
                },
           },
           '.blog-list-item-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                '.blog-list-item-date': {
                    color: theme("colors.typography_secondary"),
                    marginBottom: 'calc(var(--whitespace) / 2)',
                },
                '.blog-list-item-meta': {
                    display: 'flex',
                    flexDirection: 'row',
                },
                
               '.blog-list-item-image': {
                   margin: '0 0 rfs(2rem)',
                   maxWidth: '300px',
                   'img': {
                     objectFit: 'cover',
                     width: '100%',
                     height: '100%',
                     borderRadius: 'var(--card-radius)',
                   },
                   '@screen md': {
                       maxWidth: 'none',
                   },
               },
               '.blog-list-item-content': {
                   position: 'relative',
                   'h3': {
                       color: 'var(--blog-list-title-color)',
                       'a': {
                           color: 'inherit',
                           textDecoration: 'none',
                           borderBottom: '1px solid transparent',
                           '&:hover, &:focus': {
                              color: 'var(--blog-list-title-hover-color)',
                              borderBottomColor: 'var(--blog-list-title-hover-color)',
                           },
                           '&::after': {
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                bottom: '0',
                                left: '0',
                                zIndex: '1',
                                content: '""',
                           },
                       },
                   },
               },
           },
           
          '&.blog-display--detail': {
              '.blog-article': {
                '.blog-article-heading, .section':{
                    lineHeight: '1.75',
                    maxWidth: '65ch',
                    margin: 'auto',
                },
                '.blog-article-heading': {
                    padding: 'rfs(4rem 1rem)',
                    '.blog-article-meta': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        marginTop: '2rem',
                        alignItems: 'center',
                        '.blog-article-date, .blog-article-author': {
                            marginBottom: '1rem',
                        },
                        '.blog-article-category': {
                            order: '3',
                            flex: '1 1 100%',
                            marginTop: '1rem',
                            '&.long': {
                                'span': {
                                    display: 'block',
                                },
                            },
                        },
                        '@screen md': {
                            flexDirection: 'row',
                            '.blog-article-date, .blog-article-author': {
                                marginBottom: '0',
                            }
                        },
                    },
                },
                '.blog-h1': {
                    fontSize: 'var(--blog-article-h1-fs)',
                },
                '.section': {
                    '--whitespace': '1.5rem',
                    'h2, h3, h4': {
                        marginTop: 'rfs(2.5rem)',
                    },
                    '@screen md': {
                        fontSize: 'calc(theme("fontSize.base") + .1rem)',
                    }
                },
                'table': {
                    border: '1px solid var(--table-border-color)',
                    width: '100%',
                    maxWidth: 'fit-content',
                    overflowX: 'auto',
                    margin: '0 auto 2rem',
                    display: 'block',
                    whiteSpace: 'nowrap',
                    'th, td': {
                        padding: '.5rem',
                        border: '1px solid var(--table-border-color)',
                        fontSize: theme("fontSize.sm"),
                        'p': {
                            marginBottom: '0',
                        },
                    },
                    'thead td, th': {
                        color: 'var(--table-head-color)',
                        backgroundColor: 'var(--table-head-bg)',
                    },
                },
                '.blog-article-sidebar': {
                    maxWidth: 'var(--blog-sidebar-width)',
                    background: 'var(--blog-sidebar-bg)',
                    borderRadius: 'var(--blog-sidebar-radius)',
                    padding: '1em',
                    margin: 'auto',

                    'h2, h3': {
                        marginTop: '0',
                        fontSize: 'theme("fontSize.xl")',
                    },
                    '.btn': {
                        padding: '.5rem',
                        display: 'block',
                    },

                    '@screen md': {
                        margin: '0',
                        position: 'var(--blog-sidebar-position)',
                        top: 'var(--header-height)',
                    }
                },
              },
             '.blog-article--default': {
                '.blog-article-heading': {
                    'h1, .blog-breadcrumbs': {
                        textAlign: 'left',
                    }
                },
             },
             '.blog-article--center': {
                '.blog-article-heading': {
                    'h1, .blog-breadcrumbs': {
                        textAlign: 'center',
                    }
                },
             },
             '.blog-article--stacked': {
                '.blog-article-heading': {
                    'h1, .blog-breadcrumbs': {
                        textAlign: 'center',
                    },
                    '.blog-article-meta': {
                        flexDirection: 'column',
                        '.blog-article-date, .blog-article-author': {
                            marginBottom: '1rem',
                        },
                    },
                },
               
             },
             '.blog-breadcrumbs': {
                 margin: '0 0 2rem',
                 color: 'var(--blog-breadcrumb-color)',
                 fontSize: theme("fontSize.sm"),
                 'a, span': {
                     display: 'inline-block',
                     verticalAlign: 'top',
                     textDecoration: 'none',
                 },
                 'a': {
                    color: 'var(--blog-breadcrumb-link-color)',
                    '&:hover, &:focus': {
                        textDecoration: 'underline',
                    },
                 },
             },
          },
          '.blog-article-image': {
            margin: 'rfs(2rem auto)',
            'img': {
                objectFit: 'cover',
                width: '100%',
                height: '100%',
            },
            '&.blog-article-image--default': {
                width: '85%',
                maxWidth: '825px',
            },
            '&.blog-article-image--full': {
                width: 'calc(100% + 30px)',
                marginLeft: '-15px',
            },
            '&.blog-article-image--small': {
                width: '50%',
                maxWidth: theme("screens.sm"),
            }
         },
         '.blog-list-item-category, .blog-article-category': {
            color: 'var(--card-category-color)',
            'span': {
                display: 'inline-block',
                margin: '5px 10px 5px 0',
                fontSize: theme("fontSize.sm"),
                textTransform: 'capitalize'
            },
            'a': {
                color: 'inherit',
                textDecoration: 'none',
                display: 'block',
                lineHeight: '1',
                '&:hover, &:focus': {
                    textDecoration: 'underline',
                },
            },
        },
        '.blog-header': {
            padding: '2rem 1rem',
        },
        '.blog-filter-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '0 1rem',
            '.blog-filter': {
                marginTop:'0',
                '.toggle-dropdown-select': {
                    marginTop: '1rem',
                    marginBottom: '0',
                    minWidth: '325px',
                }
            }
        },
        '.related-posts-wrapper': {
            '.related-posts-title': {
                flex: '1 1 100%',
                textAlign: 'center',
            }
        },
        '.featured-posts-wrapper': {
            padding: '1rem',
            background: theme("colors.gray.100"),
            '@screen md': {
                background: 'transparent',
               '.blog-list-item-wrapper': {
                    flexDirection: 'row-reverse',
                    gap: '1rem',
                    alignItems: 'center',
                    '> *': {
                        flex: '0 1 50%'
                    },
                    '.blog-list-item-content': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingRight: '2rem',
                        'h3': {
                            order: '-1',
                            fontSize: 'var(--blog-featured-title-fs, theme("fontSize.4xl"))'
                        }
                    }
                } 
            }
            
        }
    },  
}

      addComponents(blog, ['responsive, hover'])
});