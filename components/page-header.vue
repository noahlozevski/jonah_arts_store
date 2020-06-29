<template lang='pug'>
  div.myspecialcontainer
    nuxt-link.mainlogo(to="/")
      hoverable-image(:mouseOn="'svg/logo-selected.svg'", :mouseOff="'svg/logo.svg'")
    .button-row
      button-row


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

<style>
.myspecialcontainer {
  /* width: 100%; */
  width: 100vw;
  min-width: 850px;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  /* min-height: 120px;
  max-height: 130px; */
}

.mainlogo {
  position: absolute;
  width: 22%;
  left: 7vw;
  /* height: 10px; */
  /* top: 0vh; */
  top: 60%;
  height: 100%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  /* bottom: 0vh; */
  /* max-height: 20vh; */
}

.button-row {
  position: absolute;
  right: 5vw;
  height: 100%;
  width: 35vw;
  min-width: 435px;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  /* height: 20vh;
  min-height: 120px; */
  
  /* height: 20vh; */
}

</style>