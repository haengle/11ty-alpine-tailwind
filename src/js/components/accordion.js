export default () => ({

    isActive: false,

    button: {
      ['@click']() {
        this.isActive = !this.isActive;
      },
      [':aria-expanded']() {
        return this.isActive ? 'true' : 'false';
      },
      [':class']() {
        return this.isActive ? 'active' : '';
      },
    },
    
    content: {
      ['x-show']() {
        return this.isActive
      },
      [':class']() {
        return this.isActive ? 'active' : '';
      },
    }
  
});
