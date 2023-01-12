const Link = require('@tiptap/extension-link').default;


const CustomLink = Link.extend({
    addOptions() {
      return {
        ...this.parent?.(),
        HTMLAttributes: {
            rel: 'noopener'
        },
      }
    },
  })


module.exports = CustomLink;