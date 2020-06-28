<template lang='pug'>
  div.text-center
    div.logo
      nuxt-link(id="logo" to="/gallery")
        hoverable-image.image(:mouseOn="'svg/logo-selected.svg'", :mouseOff="'svg/logo.svg'")
    footer-image.footer(:animationDelay="1" :timeToShow="2")

</template>

<script>
import HoverableImage from '~/components/hoverable-image';
import FooterImage from '~/components/footer-image';
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
      isLoading: { type: Boolean, default: false },
      bullshit: {}
    };
  },

  methods: {
    selected () { this.hovered = true; },

    unSelected () { this.hovered = false; },

    getBox () {
      var rect = document.getElementById('logo').getBoundingClientRect();
      return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y
      };
    }
  },

  mounted () {
    this.isLoading = false;
    this.bullshit = this.getBox();
  },
  computed: {
    logoPosition() {
      return this.$device.isMobile ? `50vh` : `25vh`;
    }
  }
};

</script>

<style>

.mycontainer {
  /* height: 100vh;
  height: 100%;
  width: 100vw;
  width: 100%; */
}
/* .div {
  height: 100vh;
  height: 100%;
  width: 1200px;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

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
.welcome {
  
}

.logo {
  animation: 3s appear;
  /* min-width: 30%; */
  width: 45vw;
  position: absolute;
  top: 25vh;
  left: 27.5vw;
  /* left: 0vw; */
  z-index: 999;
  background-color:#ffa3ff;

}
/* .logo {
  animation: 3s appear;
  min-width: 30%;
  width: 45vw;
  position: relative;
  top: 25vh;
  left: 27.5vw;
  left: 0vw;
  z-index: 999;
  background-color:#ffa3ff;

} */
.footer {
  left: 17.5vw;
  z-index:9999;
}
</style>
