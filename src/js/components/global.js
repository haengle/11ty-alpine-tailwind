export default () => ({
 
  atTop: true,
  atBottom: false,
  headerHeight: '',

  navbar: {
    ['@scroll.window']() {
        this.atTop = (window.pageYOffset > 1) ? false : true;
        if (this.$refs.scrollTop) {
          window.pageYOffset > 400 ? this.$refs.scrollTop.classList.add('show') : this.$refs.scrollTop.classList.remove('show');
        }
    },
    [':class']() {
      return this.atTop ? '' : 'scrolled';
    },
    ['x-init']() {
      return this.$nextTick( () => {
        if (this.$refs.scrollTop) {
          this.$refs.scrollTop.classList.remove('show');
        }
        document.documentElement.style.setProperty('--header-height', this.$el.offsetHeight+'px');
        this.headerHeight = this.$el.offsetHeight;
      });
   }
  },

  logo: {
    ['x-init']() {
      return this.$nextTick( () => {
        document.documentElement.style.setProperty('--logo-width', this.$el.offsetWidth+'px')
      });
    }
  },

  primarynav: {
    ['x-init']() {
      return this.$nextTick( () => {
        document.documentElement.style.setProperty('--primarynav-height', this.$el.offsetHeight+'px')
      });
    }
  },

  main: {
    ['x-init']() {
      
      // generate readable anchors for h1-h3 on each page
      const headings = ['#main h1','#main h2','#main h3'];
      headings.forEach((heading) => {
        var heading = document.querySelectorAll(heading);
        [...heading].forEach( h => {
          var headingId = h.textContent.replace(/[&,+()$~%.'":*?!<>{}]/g, "").replaceAll('  ',' ').replaceAll(' ','-').toLowerCase();
          const existingId = h.hasAttribute('id');
          if (!existingId) {
            h.setAttribute('id', headingId);
          }
          h.style.scrollMarginTop = 'calc(var(--header-height) + 2em)';
        });
      });

      // append FA to external links
      const externalLinks = document.querySelectorAll('a:not(.nav-social_nav_link)[target="_blank"]');
      const externalIcon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="up-right-from-square" class="svg-inline--fa fa-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"></path></svg>';
      externalLinks.forEach((link) => {
        link.innerHTML += externalIcon;
      })
    }
  },

  footer: {
    ['x-intersect:enter']() {
       this.atBottom = true;
       if (this.$refs.scrollTop) {
        this.$refs.scrollTop.classList.add('anchored')
       }
    },
    ['x-intersect:leave']() {
      this.atBottom = false;
      if (this.$refs.scrollTop) {
        this.$refs.scrollTop.classList.remove('anchored')
      }
    }
  }
  
});
