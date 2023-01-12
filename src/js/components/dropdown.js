export default () => ({

    isVisible: false,

    button: {
      ['@click']() {
        this.isVisible = !this.isVisible;
      },
      [':aria-expanded']() {
        return this.isVisible ? 'true' : 'false';
      },
      [':class']() {
        return this.isVisible ? 'active' : '';
      },
      ['@keyup.escape']() {
        this.isVisible = false;
      }
    },
    content: {
      ['x-show']() {
        return this.isVisible
      },
      [':class']() {
        return this.isVisible ? 'active' : '';
      },
      ['@click.outside']() {
        this.isVisible = false;
      },
      ['@keyup.escape']() {
        this.isVisible = false;
      },
      ['x-init']() {
        this.$el.querySelectorAll('a').forEach(el => el.addEventListener('click',(e)=> this.isVisible = false))
      }
    }
  
});
