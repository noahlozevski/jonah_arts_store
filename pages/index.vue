<template lang='pug'>
  .container-fluid
    .logo(:style="{ top: logoPosition }")
      hoverable-image(:mouseOn="'svg/logo-selected.svg'", :mouseOff="'svg/logo.svg'")
    footer-image

</template>

<script>
import HoverableImage from '~/components/hoverable-image';
import FooterImage from '~/components/footer-image';
// import { vueWindowSizeMixin } from 'vue-window-size';
import WindowDimensions from '~/components/mixins/dist/window-dimensions'

export default {
  components: {
    HoverableImage,
    FooterImage
  },

  mixins: [WindowDimensions],

  data () {
    return { 
      hovered: { type: Boolean, default: false },
    };
  },
  methods: {
    selected () { this.hovered = true; },
    unSelected () { this.hovered = false; }
  },
  computed: {
    logoPosition() {
      return this.$device.isMobile ? `50vh` : `25vh`;
    }
  }
};

</script>

<style>
.div {
  height: 100vh;
  width: 100vw;
}
.container-fluid {
  margin: 0 auto;
  height: 100vh;
  height: 100%;
  width: 100vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffa3ff;

}

.logo {
  animation: 3s appear;
  min-width: 30%;
  min-width: 45vw;
  position: relative;
  top: 25vh;
  z-index: 99999999;
}


.title {
  font-family: 'Cooper Std', 'Arial Rounded MT Bold', 'Comic Sans', Helvetica, Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.wide {
  width: 100%;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.sticky-image-wrapper{
        position: fixed;
        bottom: 0;
        width: 100%;
    }

.sticky-image-wrapper--image{
        display: table;
        position: relative;
        margin: auto;
}
</style>
