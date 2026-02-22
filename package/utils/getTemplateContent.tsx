import { JSONContent } from '@tiptap/react';

export const getTemplateContent = (
  templateQuery: string,
): JSONContent | null => {
  switch (templateQuery) {
    case 'meeting-notes':
      return {
        type: 'doc',
        content: [
          {
            type: 'dBlock',
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 1,
                },
                content: [
                  {
                    type: 'text',
                    text: '[Date] | [Event]',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 3,
                },
                content: [
                  {
                    type: 'text',
                    text: 'Notes',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'bulletList',
                attrs: {
                  tight: true,
                },
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Add note item',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Add note item',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 3,
                },
                content: [
                  {
                    type: 'text',
                    text: 'Action items',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'taskList',
                content: [
                  {
                    type: 'taskItem',
                    attrs: {
                      checked: false,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Add action item',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'taskItem',
                    attrs: {
                      checked: false,
                    },
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Add action item',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        title: 'Meeting Notes',
      };
    case 'todo-list':
      return {
        type: 'doc',
        content: [
          {
            type: 'dBlock',
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 1,
                },
                content: [
                  {
                    type: 'text',
                    text: '📋 To-do List',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'table',
                content: [
                  {
                    type: 'tableRow',
                    content: [
                      {
                        type: 'tableHeader',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                text: 'Action item',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'tableHeader',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                text: 'Deadline',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableRow',
                    content: [
                      {
                        type: 'tableCell',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'taskList',
                            content: [
                              {
                                type: 'taskItem',
                                attrs: {
                                  checked: false,
                                },
                                content: [
                                  {
                                    type: 'paragraph',
                                    attrs: {
                                      textAlign: 'left',
                                    },
                                    content: [
                                      {
                                        type: 'text',
                                        text: 'Add action item',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'tableCell',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                text: 'DD.MM.YYYY',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableRow',
                    content: [
                      {
                        type: 'tableCell',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'taskList',
                            content: [
                              {
                                type: 'taskItem',
                                attrs: {
                                  checked: false,
                                },
                                content: [
                                  {
                                    type: 'paragraph',
                                    attrs: {
                                      textAlign: 'left',
                                    },
                                    content: [
                                      {
                                        type: 'text',
                                        text: 'Add action item',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'tableCell',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                text: 'DD.MM.YYYY',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'tableRow',
                    content: [
                      {
                        type: 'tableCell',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'taskList',
                            content: [
                              {
                                type: 'taskItem',
                                attrs: {
                                  checked: false,
                                },
                                content: [
                                  {
                                    type: 'paragraph',
                                    attrs: {
                                      textAlign: 'left',
                                    },
                                    content: [
                                      {
                                        type: 'text',
                                        text: 'Add action item',
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'tableCell',
                        attrs: {
                          colspan: 1,
                          rowspan: 1,
                          colwidth: null,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                text: 'DD.MM.YYYY',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        title: 'To-do List',
      };
    case 'brainstorm':
      return {
        type: 'doc',
        content: [
          {
            type: 'dBlock',
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 1,
                },
                content: [
                  {
                    type: 'text',
                    text: '💡 Brainstorming',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 2,
                },
                content: [
                  {
                    type: 'text',
                    text: '[Issues & Goals]',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'bulletList',
                attrs: {
                  tight: true,
                },
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'First idea',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Second idea',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Third idea',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 2,
                },
                content: [
                  {
                    type: 'text',
                    text: 'Summaries:',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            content: [
              {
                type: 'bulletList',
                attrs: {
                  tight: true,
                },
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Summary 1',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            text: 'Summary 2',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        title: 'Brainstorming',
      };
    case 'resume':
      return {
        type: 'doc',
        content: [
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'center',
                  level: 1,
                },
                content: [
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: 'John Doe',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'paragraph',
                attrs: {
                  class: null,
                  textAlign: 'left',
                },
                content: [
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: '(123) 456-7890 | ',
                  },
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'link',
                        attrs: {
                          href: 'mailto:john.doe@example.com',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          class: 'custom-text-link',
                        },
                      },
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: 'john.doe@example.com',
                  },
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: ' | ',
                  },
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'link',
                        attrs: {
                          href: 'https://linkedin.com/in/johndoe',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          class: 'custom-text-link',
                        },
                      },
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: 'linkedin.com/in/johndoe',
                  },
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: ' | 123 Main St, Cityville',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'horizontalRule',
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 3,
                },
                content: [
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: 'Education',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'columns',
                attrs: {
                  layout: 'align-center',
                },
                content: [
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: 'Bachelor of [Field of Study]',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: '',
                                      fontSize: '16px',
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'University of Cityville',
                              },
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: '',
                                      fontSize: '16px',
                                      color: '',
                                    },
                                  },
                                ],
                                text: ' Relevant Coursework',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: 'Cambridge, MA',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'Graduation Date',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'columns',
                attrs: {
                  layout: 'align-center',
                },
                content: [
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: 'Study Abroad',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: 'select-text pointer-events-auto',
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                ],
                                text: 'Relevant Coursework',
                              },
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: ' ',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: 'Tokyo, Japan',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'month/year - month/year',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'horizontalRule',
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 3,
                },
                content: [
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: 'Work Experience',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'columns',
                attrs: {
                  layout: 'align-center',
                },
                content: [
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: 'select-text pointer-events-auto',
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: 'Senior [Job Title]',
                              },
                              {
                                type: 'hardBreak',
                              },
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'ABC Corporation, Cityville',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'Jan 2021 – Present',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'bulletList',
                attrs: {
                  tight: false,
                },
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Lead a team of 10+ to achieve a 25% increase in departmental efficiency.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Spearheaded [Project Name], resulting in $500K annual cost savings.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Collaborate cross-functionally to streamline workflows and improve client satisfaction.',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'columns',
                attrs: {
                  layout: 'align-center',
                },
                content: [
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: 'Senior [Job Title]',
                              },
                              {
                                type: 'hardBreak',
                              },
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'XYZ Solutions, Townsville',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'Jun 2015 – Feb 2018',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'bulletList',
                attrs: {
                  tight: false,
                },
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Developed [Initiative Name], boosting customer retention by 15%.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Analyzed data trends to provide actionable insights for senior leadership.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Coordinated with vendors to reduce supply chain delays by 20%.',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'columns',
                attrs: {
                  layout: 'align-center',
                },
                content: [
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'bold',
                                  },
                                ],
                                text: 'Junior [Job Title] ',
                              },
                              {
                                type: 'hardBreak',
                              },
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'Starter Company, Hamlet City ',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'Aug 2013 – May 2015',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'bulletList',
                attrs: {
                  tight: false,
                },
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Assisted in [Core Task], supporting team goals and deadlines.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Maintained detailed records with 99% accuracy.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Earned promotion within 18 months for exceeding KPIs.',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'horizontalRule',
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 3,
                },
                content: [
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: 'Skills',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'bulletList',
                attrs: {
                  tight: false,
                },
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: 'Project Management | - Data Analysis | - Team Leadership',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        attrs: {
                          class: 'select-text pointer-events-auto',
                          textAlign: 'left',
                        },
                        content: [
                          {
                            type: 'text',
                            marks: [
                              {
                                type: 'textStyle',
                                attrs: {
                                  fontFamily: null,
                                  fontSize: null,
                                  color: '',
                                },
                              },
                            ],
                            text: '[Software/Tool 1] | - [Software/Tool 2] | - Fluent in [Language]',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'heading',
                attrs: {
                  textAlign: 'left',
                  level: 3,
                },
                content: [
                  {
                    type: 'text',
                    marks: [
                      {
                        type: 'textStyle',
                        attrs: {
                          fontFamily: null,
                          fontSize: null,
                          color: '',
                        },
                      },
                    ],
                    text: 'Certifications',
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'columns',
                attrs: {
                  layout: 'align-center',
                },
                content: [
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                ],
                                text: '[Certification Name]',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'left',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                ],
                                text: '[Certification Name]',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'column',
                    attrs: {
                      position: '',
                    },
                    content: [
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'Issuer',
                              },
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                ],
                                text: ' (Year)',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        type: 'dBlock',
                        attrs: {
                          isCorrupted: false,
                        },
                        content: [
                          {
                            type: 'paragraph',
                            attrs: {
                              class: null,
                              textAlign: 'right',
                            },
                            content: [
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                  {
                                    type: 'italic',
                                  },
                                ],
                                text: 'Issuer',
                              },
                              {
                                type: 'text',
                                marks: [
                                  {
                                    type: 'textStyle',
                                    attrs: {
                                      fontFamily: null,
                                      fontSize: null,
                                      color: '',
                                    },
                                  },
                                ],
                                text: ' (Year)',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'dBlock',
            attrs: {
              isCorrupted: false,
            },
            content: [
              {
                type: 'paragraph',
                attrs: {
                  class: null,
                  textAlign: 'left',
                },
              },
            ],
          },
        ],
        title: 'Resume',
      };
    default:
      return null;
  }
};
