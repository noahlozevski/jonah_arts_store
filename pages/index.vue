<template lang='pug'>
  div(id="page")
    .logo(:style="logoStyles")
      nuxt-link(id="logo" to="/gallery")
        template(v-if="$device.isMobile || bigger")
          hoverable-image.image(:v="true" :mouseOn="'svg/logo-selected.svg'", :mouseOff="'svg/logo.svg'")
        template(v-else)
          hoverable-image.image(:mouseOn="'svg/logo-selected.svg'", :mouseOff="'svg/logo.svg'")
    footer-image.footer(:bigger="bigger" :animationDelay="1" :timeToShow="2")

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
      defaultImageStyle: {'width': '80vw',
                          'height': '33vh',
                          'position': 'absolute',
                          'top': '22vh',
                          'left': '50%',
                          // '-ms-transform': 'translateX(-50%)',
                          'transform': 'translate(-50%,-50%)',
                          'z-index': '999999999999',
                          'top': '50%', 'transform': 'translate(-50%,-80%)'}
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
    // let vh = window.innerHeight * 0.01;
    //   // Then we set the value in the --vh custom property to the root of the document
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
    // window.addEventListener('resize', () => {
    //   // We execute the same script as before
    //   let vh = window.innerHeight * 0.01;
    //   document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });
  },
  computed: {
    logoPosition() {
      return this.$device.isMobile ? `50vh` : `25vh`;
    },
    bigger () {
      console.log("updating page");
      console.log(this.windowWidth);
      console.log(this.windowWidth<=1000);
      return (this.windowWidth/this.windowHeight) <= 1.40;
    },
    logoStyles () {
      if (this.bigger) { return Object.assign(this.defaultImageStyle, {'top': '50%', 'transform': 'translate(-50%,-80%)' }); }
      else return this.defaultImageStyle;
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

.div {
  height: 100vh;
  /* height: calc(var(--vh, 1vh) * 100); */
  width: 100vw;
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
  /* left: 17.5vw; */
  width: 100vw;
  z-index:9999;
}
</style>
