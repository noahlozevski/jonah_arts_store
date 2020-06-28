<template lang='pug'>
  .rowcontainer
    nuxt-link(to="/gallery")
      figure.fcontainer1
        hoverable-image.container_image.gallery(:mouseOn="'svg/gallery-icon-selected.svg'", :mouseOff="'svg/gallery-icon.svg'")
    nuxt-link(to="/bio")
      figure.fcontainer2
        hoverable-image.container_image.inkwell(:mouseOn="'svg/inkwell-selected.svg'", :mouseOff="'svg/inkwell.svg'")
    nuxt-link(to="/shop")
      figure.fcontainer3
        hoverable-image.container_image.goodies(:mouseOn="'svg/goodies-selected.svg'", :mouseOff="'svg/goodies.svg'")
    nuxt-link(to="/cart")
      figure.fcontainer4
        hoverable-image.container_image.cart(:mouseOn="'svg/cart-selected.svg'", :mouseOff="'svg/cart.svg'")
    nuxt-link(to="/contact")
      figure.fcontainer5
        hoverable-image.container_image.message(:mouseOn="'svg/message-selected.svg'", :mouseOff="'svg/message.svg'")
</template>

<script>
import HoverableImage from '~/components/hoverable-image';

export default {
  components: {
    HoverableImage,
  },

  data () {
    return { 

    };
  },

}
</script>

<style scoped>
/* .logo {
  width: 15vw;
  left: 10vw;
  top: 7vh;
} */
.rowcontainer {
  position: absolute;
}
.imagecontainer {
  position: absolute;
  /* min-height: 4vh; */
  /* width: 4vw; */
  /* min-height: 4vh;
  width: auto;
  position: absolute; */
  
}
figure {
  margin: 0;
  position: absolute;
}
.fcontainer1 {
  display: table-cell;
  vertical-align: middle;
  width: 5vw;
  /* height: 5vh; */
}
.fcontainer2 {
  display: table-cell;
  vertical-align: middle;
  width: 3.8vw;
  /* height: 4vh; */
}
.fcontainer3 {
  display: table-cell;
  vertical-align: middle;
  width: 4vw;
  /* height: 4vh; */
}
.fcontainer4 {
  display: table-cell;
  vertical-align: middle;
  width: 5.1vw;
  /* height: 6vh; */
}
.fcontainer5 {
  display: table-cell;
  vertical-align: middle;
  width: 5.2vw;
  /* height: 5.5vh; */
}
.container_image {
  display: block;
  /* max-width: 100%; */
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  justify-content: center;
  
} 
.gallery {
  top: 0vh;
  left: 0vw;
}
.inkwell {
  top: 0vh;
  left: 5.5vw;
}
.goodies {
  top: 0vh;
  left: 10vw;
}
.cart {
  top: 1.5vh;
  left: 14.4vw;
}
.message {
  top: 1vh;
  left: 19.75vw;
}
</style>