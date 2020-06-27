import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  mixins: [vueWindowSizeMixin],

  computed: {
    isMobile() {
      alert(value);
    }
  }
};