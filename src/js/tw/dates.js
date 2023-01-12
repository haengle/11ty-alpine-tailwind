const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const dates = {
        '.date-tag': {
            position: 'relative',
            margin: '1rem 0 .5rem',
            '&::before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '1px',
                top: '50%',
                borderTop: '1px solid theme("colors.gray.200")',
            },
            'span': {
                borderRadius: theme("borderRadius.md"),
                padding: '.5rem',
                background: 'var(--date-tag-bg)',
                color: "#fff",
                position: 'relative',
                zIndex: '2',
            },
        },
        '.date': {
            '.date-string': {
                fontSize: 'var(--date-string-fs)',
                color: 'var(--date-string-color)',
                fontFamily: 'var(--date-string-ff)',
                fontWeight: 'var(--date-string-fw)',
              },
              '.date-title': {
                fontSize: 'var(--date-title-fs)',
                color: 'var(--date-title-color)',
                fontFamily: 'var(--date-title-ff)',
                fontWeight: 'var(--date-title-fw)',
              },
              '.date-desc': {
                margin: '.25rem 0',
                fontSize: 'var(--date-desc-fs)',
                color: 'var(--date-desc-color)',
                fontFamily: 'var(--date-desc-ff)',
                fontWeight: 'var(--date-desc-fw)',
              },
              '&.date--card, &.date--card--fill, &.date--card--outline': {
                '.date-content-wrapper': {
                    padding: 'rfs(1.5rem)',
                },            
              },
              '&.white': {
                  '.date-title, .date-string, .date-desc': {
                      color: '#fff',
                  },
                  '.date-string': {
                      opacity: '.85',
                  },
              },
        },
        '.date-wrapper': {
            display: 'flex',
            flexDirection: 'column',
            '&.date-wrapper--stack': {
                paddingLeft: '0',
                paddingRight: '0',
                '.date ~ .date': {
                  borderTop: '1px solid theme("colors.gray.200")',
                },
              },
            '&.date-wrapper--table': {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                maxWidth: '748px',
                margin: '2rem auto',
                '.date': {
                    width: '90%',
                    padding: '0',
                    '.date-content-wrapper': {
                        display: 'flex',
                        ' > *': {
                            background: '#fff',
                            padding: '.75rem',
                            border: '1px solid theme("colors.gray.200")',
                            color: 'var(--text-color)',
                            fontSize: theme("fontSize.base"),
                            margin: '-1px 0',
                            flex: '0 1 50%',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        },
                        '.date-title': {
                            order: '-1',
                            fontFamily: 'var(--table-head-ff)',
                            fontSize: 'rfs(var(--table-head-fs))',
                            fontWeight: 'var(--table-head-fw)',
                            '&.past': {
                                opacity: '1',
                            }
                        },
                        '.date-string': {
                            fontWeight: '400',
                            fontSize: theme("fontSize.base"),
                            opacity: '1',
                        },
                    },
                },
                '.date--table-header': {
                    padding: '.75rem',
                    border: '1px solid theme("colors.gray.200")',
                    fontFamily: 'var(--table-head-ff)',
                    fontSize: 'rfs(var(--table-head-fs))',
                    fontWeight: 'var(--table-head-fw)',
                    color: 'var(--table-head-color)',
                    backgroundColor: 'var(--table-head-bg)',
                    margin: '-1px 0',
                    flex: '0 1 100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    '@screen md': {
                        flex: '0 1 90%',
                    }
                }
             },
            '.date': {
                position: 'relative',
                padding: 'rfs(1.5rem)',
                minWidth: '280px',
             },
             '&.date-wrapper .card': {
                maxWidth: 'none',
                margin: '0',
             },
           '@screen md': {
              flexDirection: 'row',
              flexWrap: 'wrap',
              '&:not([class*="cols"]) .date': {
                  flex: '0 1 50%',
              },
              '&.date-wrapper--stack': {
                  flexDirection: 'column',
              },
              '&.date-wrapper--horizontal': {
                  '.date': {
                      flex: '1 1 100%',
                      '.date-content-wrapper': {
                          display: 'flex',
                          flexWrap: 'wrap',
                          flexDirection: 'row',
                          '.date-string, .date-title': {
                              flex: '0 1 50%',
                          },
                          '.date-title': {
                              textAlign: 'right',
                          },
                          '.date-desc': {
                              marginLeft: 'auto',
                          },
                      },
                      '~ .date': {
                        borderTop: '1px solid theme("colors.gray.200")',
                      },
                      '&.card': {
                          padding: '0',
                          '&.card--outline, &.card--fill': {
                              margin: '1rem 0',
                            '.card-wrapper': {
                                padding: '1.5rem'
                            }
                          } 
                      },
                  },
              },
           },
           '@screen lg': {
                '&:not([class*="cols"]) .date': {
                    flex: '0 1 33%',
                },
                '&.date-wrapper--horizontal': {
                    '.date': {
                        flex: '1 1 100%',
                        '.date-content-wrapper': {
                            display: 'flex',
                            '.date-string': {
                                flex: '0 1 33%',
                            },
                            '.date-title': {
                                flex: '0 1 auto',
                                textAlign: 'left',
                            },
                            '.date-desc': {
                                marginLeft: 'auto',
                            },
                        },
                    },
                },
           },
        },
        '.date-group-wrapper': {
            margin: 'rfs(2rem) 0',
            '&.white': {
                '.date-tag span': {
                    background: '#fff',
                    color: 'var(--text-color)',
                },
            },
            '.date': {
                '.date-string': {
                    marginBottom: '.75rem',
                }
            }
        },
        '.timeline-outer': {
            marginBottom: 'rfs(4rem)',
        },
        '.timeline': {
            paddingBottom: '120px',
            paddingTop: '75px',
            marginBottom: 'rfs(4rem)',
            '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '0',
                borderBottom: '10px solid var(--timeline-border-color)',
                left: '1px',
                bottom: '100px',
                borderRadius: '10px',
            },
            '.timeline-wrapper': {
                paddingBottom: '50px',
                '.swiper-slide': {
                    paddingLeft: '20px',
                    height: 'auto',
                    '&::before': {
                        borderWidth: '8px',
                        borderRadius: '100%',
                        height: '36px',
                        width: '36px',
                        position: 'absolute',
                        left: '0',
                        bottom: '-80px',
                        content: '""',
                        background: '#fff',
                        borderColor: 'var(--timeline-border-color)',
                    },
                    '&::after': {
                        content: '""',
                        width: '8px',
                        height: '30px',
                        position: 'absolute',
                        left: '14px',
                        bottom: '-50px',
                        borderRadius: '8px',
                        background: 'var(--timeline-border-color)',
                    },
                    '&.date-tag': {
                        margin: '0',
                        '&::before, &::after': {
                            display: 'none',
                        }
                    }
                },
            },
            '.date': {
                flex: 'auto',
                '.date-content-wrapper': {
                    display: 'flex',
                    flexDirection: 'column',
                    '.date-title': {
                        order: '-1',
                        marginBottom: '.25rem',
                    },
                    '.date-string': {
                        marginBottom: '.5rem',
                    },
                    
                }
            },
            '&.timeline.white': {
                '&::after': {
                    borderBottomColor: theme("colors.gray.200"),
                },
                '.timeline-wrapper': {
                    '.swiper-slide': {
                        '&::before': {
                            borderColor: theme("colors.gray.200"),
                            background: theme("colors.primary.DEFAULT"),
                        },
                        '&::after': {
                            background: theme('colors.gray.200'),
                        }
                    }
                }
            },
            '&.swiper-vertical': {
                maxHeight: '300px',
                maxWidth: theme("screens.md"),
                paddingBottom: '0',
                paddingTop: '0',
                marginBottom: '0',
                '@screen md': {
                    maxHeight: theme("screens.sm"),
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '100%',
                    borderBottom: 'none',
                    borderLeft: '10px solid var(--timeline-border-color)',
                    left: '13px',
                    bottom: '0',
                    top: '75px',
                    borderRadius: '10px',
                },
                '.timeline-wrapper': {
                    paddingBottom: '0',
                    '.swiper-slide': {
                        paddingLeft: 'calc(4rem + 30px)',
                        '&::after': {
                            top: '74px',
                            bottom: 'auto',
                            height: '8px',
                            width: '30px',
                            left: '32px',
                        },
                        '&::before': {
                            bottom: 'auto',
                            top: '60px',
                        }
                    }
                },
                '.date': {
                    paddingTop: '3rem',
                    paddingRight: '30px',
                },
                '.swiper-pagination': {
                    bottom: '50%',
                    left: 'auto',
                    right: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: 'flex-end',
                },
                '.swiper-navigation-wrapper': {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '1rem',
                    '.swiper-button-next, .swiper-button-prev': {
                        transform: 'rotate(90deg)'
                    }
                }
            }
        },
      }

      addComponents(dates, ['responsive, hover'])
});