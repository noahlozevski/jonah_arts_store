<template lang='pug'>
  .rowcontainer
    nuxt-link(to="/gallery")
      figure.fcontainer1
        hoverable-image(:mouseOn="'svg/gallery-icon-selected.svg'", :mouseOff="'svg/gallery-icon.svg'")
    nuxt-link(to="/bio")
      figure.fcontainer2
        hoverable-image(:mouseOn="'svg/inkwell-selected.svg'", :mouseOff="'svg/inkwell.svg'")
    nuxt-link(to="/shop")
      figure.fcontainer3
        hoverable-image(:mouseOn="'svg/goodies-selected.svg'", :mouseOff="'svg/goodies.svg'")
    nuxt-link(to="/cart")
      figure.fcontainer4
        hoverable-image(:mouseOn="'svg/cart-selected.svg'", :mouseOff="'svg/cart.svg'")
    nuxt-link(to="/contact")
      figure.fcontainer5
        hoverable-image(:mouseOn="'svg/message-selected.svg'", :mouseOff="'svg/message.svg'")
</template>

<script>
import HoverableImage from '~/components/hoverable-image';

export default {
  components: {
    HoverableImage,
  },

  data () {
    return { 
      images: [{ hovered: 'svg/gallery-icon-selected.svg', unhovered: 'svg/gallery-icon.svg' },
               { hovered: 'svg/inkwell-selected.svg', unhovered: 'svg/inkwell.svg' },
               { hovered: 'svg/goodies-selected.svg', unhovered: 'svg/goodies.svg' },
               { hovered: 'svg/cart-selected.svg', unhovered: 'svg/cart.svg' },
               { hovered: 'svg/message-selected.svg', unhovered: 'svg/message.svg' }]
    };
  },

}
</script>

<style>
/* .logo {
  width: 15vw;
  left: 10vw;
  top: 7vh;
} */
.rowcontainer {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 100%;
}

figure {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 20%; 
  height: 100%;
  
}
.fcontainer1 {
  display: table-cell;
  /* vertical-align: middle; */
  /* top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%); */
  left: 0;
  height:100%;
  /* height: 5vh; */
}
.fcontainer2 {
  display: table-cell;
  vertical-align: middle;
  left: 20%;
  /* height: 4vh; */
}
.fcontainer3 {
  display: table-cell;
  vertical-align: middle;
  left: 40%;
  /* height: 4vh; */
}
.fcontainer4 {
  display: table-cell;
  vertical-align: middle;
  left: 60%;
  /* height: 6vh; */
}
.fcontainer5 {
  display: table-cell;
  /* vertical-align: middle; */
  left: 83%;
  top: -4px;
  
  /* height: 5.5vh; */
}
/* 
.gallery {

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
} */
</style>