<template lang='pug'>
  .footer
    img.image(src="~/assets/svg/footerImg.svg" :style="imgStyle")
</template>

<script>
export default {
  data () {
    return {
      defaultImageStyles: { 'position': 'absolute', 'bottom': '0', 
                            'left': '50%', '-ms-transform': 'translateX(-50%)',
                            'transform': 'translateX(-50%)' }
    }
  },
  props: {
    animationDelay: { type: Number, default: 0 },
    timeToShow: { type: Number, default: 0 },
    bigger: { type: Boolean, default: false }
  },
  computed: {
    delay () {
      return (this.animationDelay <= 0) ? `0s` : `${this.animationDelay}s`;
    },
    timeToAppear () {
      return (this.timeToShow <= 0) ? `0s` : `${this.timeToShow}s appear`;
    },
    imgStyle () {
      if (this.bigger) {
        return Object.assign(this.defaultImageStyles,{width: `100%` });
      } else return Object.assign(this.defaultImageStyles,{ width: `65vw` });
    }
  }  
}
</script>

<style scoped>
.footer {
  /* animation-delay: 1s; */
  /* animation: 3s appear; */
  /* animation-fill-mode: backwards; */
  position: relative;
  bottom:0vh;
  left: 0;
  height: 100vh;
  
  /* width:100%; */
  /* height:35%; */
  padding:0;
  width: 100vw;
  /* z-index: 0; */
  /* align-content: center; */
  /* text-align: center; */
  /* animation-duration: 3s; */
  /* min-width: 45vw; */
} 
image {
  position: absolute;
  bottom: 0;
  left: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

</style>