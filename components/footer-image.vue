<template lang='pug'>
  .footer(:style="{ animationDelay: delay, animation: timeToAppear }")
    img(src="~/assets/svg/footerImg.svg")
</template>

<script>
export default {
  props: {
    animationDelay: { type: Number, default: 0 },
    timeToShow: { type: Number, default: 0 }
  },
  computed: {
    delay () {
      return (this.animationDelay <= 0) ? `0s` : `${this.animationDelay}s`;
    },
    timeToAppear () {
      return (this.timeToShow <= 0) ? `0s` : `${this.timeToShow}s appear`;
    }
  }  
}
</script>

<style>
.footer {
  /* animation-delay: 1s; */
  /* animation: 3s appear; */
  /* animation-fill-mode: backwards; */
  position: absolute;
  bottom:0;
  /* width:100%; */
  /* height:35%; */
  padding:0;
  z-index: 0;
  width: 65vw;
  /* animation-duration: 3s; */
  /* min-width: 45vw; */
} 
</style>