export default () => ({

    modalOpen: false,
    triggerEl: '',

    dialog: {
        ['x-show']() {
          return this.modalOpen
        },
        ['@click']() {
            this.closeModal();        
        },
        ['@keyup.escape']() {
            this.closeModal();        
        }
    },
    backdrop: {
        ['x-show']() {
          return this.modalOpen
        },
    },
    modalbody: {
        ['x-show']() {
          return this.modalOpen
        },
    },
    closebtn: {
        ['@click']() {
            this.closeModal();        
        },
        ['@keyup.escape']() {
            this.closeModal();        
        }
    },

    showModal() {
        this.$nextTick(() => {
            document.body.classList.add('modal-open');
            this.$refs.dialog.setAttribute('x-trapfocus','');
            setTimeout(() => {
                this.$refs.btnClose.focus();
            },100)
        });
    },

    closeModal() {
        this.modalOpen = false;
        var triggerEl = document.getElementById(this.triggerEl);

        this.$nextTick(() => {
            document.body.classList.remove('modal-open');
            this.$refs.dialog.removeAttribute('x-trapfocus');
            setTimeout(() => {
                if (triggerEl) {
                    triggerEl.focus();
                }
            },100)
        });
    }
  
});
