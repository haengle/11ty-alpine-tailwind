export default () => ({

    watchScroll() {
        this.$nextTick(() => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    const navitem = document.querySelector(`a[href="#${id}"]`);
                    if (navitem) {
                        if (entry.intersectionRatio > 0.25) {
                            navitem.classList.add('active');
                        } else {
                            navitem.classList.remove('active');
                        }
                    }

                });
            });

            // Track all sections that have an `id` applied
            document.querySelectorAll('main h2[id]').forEach((section) => {
                observer.observe(section);
            });
        });
    },
    
    
    nav: {
        ['@click.prevent']() {
            var ref = this.$el.href.split('#');
            var checkEl = document.getElementById(ref[1]);
            this.isVisible = false; 
            if (checkEl) {
                this.$scroll(checkEl, {offset: this.$refs.navbar.offsetHeight + this.$refs.overview.offsetHeight})
            } else {
                this.$scroll(0, {offset: this.$refs.navbar.offsetHeight + this.$refs.overview.offsetHeight})
            }
        }
    }    
  
});