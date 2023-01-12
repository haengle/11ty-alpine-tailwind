export default () => ({
 
  toggleNavbar: false,
  root: {
    [':class']() {
        return this.toggleNavbar ? 'active' : '';
    },
    ['@click.outside']() {
      this.toggleNavbar = false;
      this.$refs.navbartoggler.focus();
    },
    ['@keyup.escape']() {
       this.toggleNavbar = false;
       this.$refs.navbartoggler.focus();
    }
  },
  toggle: {
    ['@click']() {
      this.toggleNavbar = !this.toggleNavbar;
    },
    [':aria-expanded']() {
        return this.toggleNavbar ? 'true' : 'false';
    }
  },
  offcanvas: {
    [':class']() {
        return this.toggleNavbar ? 'active' : 'hidden';
    },
    ['x-init']() {
       this.toggleNavbar ? this.$refs.first.focus() : '';
       this.$el.querySelectorAll('a').forEach(el => el.addEventListener('click',(e)=> this.toggleNavbar = false))
    },
    ['@keyup.escape']() {
      this.toggleNavbar = false;
      this.$refs.navbartoggler.focus();
    }
  },
  backdrop: {
    ['x-show']() {
        return this.toggleNavbar
    },
    ['@click']() {
        this.toggleNavbar = false;
        this.$refs.navbartoggler.focus();
    },
  }
  
});
