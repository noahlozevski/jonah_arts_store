import { vueWindowSizeMixin } from 'vue-window-size';

class deviceType { // class to hold computed window status
  constructor(type='', width=0, height=0, orientation='') {
    this.type = type;
    this.w = width;
    this.h = height;
    this.orientation = orientation;
  }
}

export default {
  mixins: [vueWindowSizeMixin],

  computed: {
    deviceStatus() { // holds a computed property of the dimensions of the window, device type, and orientation (if applicable)
      return new deviceType(this.$device.isMobile ? 'mobile':'desktop', this.windowWidth, this.windowHeight, (this.windowHeight>this.windowWidth) ? 'portrait' : 'landscape'); 
    }
  }
};