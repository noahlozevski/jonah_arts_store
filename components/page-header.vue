<template lang='pug'>
  div
    nuxt-link(to="/")
      hoverable-image.logo(:mouseOn="'svg/logo-selected.svg'", :mouseOff="'svg/logo.svg'")
    button-row.button-row


</template>

<script>
import HoverableImage from '~/components/hoverable-image';
import WindowDimensions from '~/components/mixins/dist/window-dimensions'
import ButtonRow from '~/components/button-row';

export default {
  components: {
    HoverableImage,
    ButtonRow
  },

  mixins: [WindowDimensions],

  data () {
    return { 

    };
  },

}
</script>

<style scoped>
.logo {
  width: 22vw;
  left: 8vw;
  top: 5vh;
}
.button-row {
  left: 66vw;
  top: 9.5vh;
  height: 20vh;
}

</style>