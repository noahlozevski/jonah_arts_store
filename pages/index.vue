<template lang='pug'>
  .container-fluid
    div
      .logo
        hoverable-image(:mouseOn="'svg/logo-selected.svg'", :mouseOff="'svg/logo.svg'")
    
    footer-image
    //- img.footer(src="~/assets/svg/footerImg.svg")
      //- nuxt-link(to="/about")
      //- .logo(@mouseover="selected()" @mouseleave="unSelected()")
        template(v-if="hovered")
          img(src="~/assets/svg/logo-selected.svg")
        template(v-else)
          img(src="~/assets/svg/logo.svg")
      //- h1.title
      //-   | Jonah Arts
      //- h2.subtitle
      //-   | Jonah Arts Store
      //- .links
      //-   a.button--green(href='https://nuxtjs.org/' target='_blank')
      //-     | Documentation
      //-   a.button--grey(href='https://github.com/nuxt/nuxt.js' target='_blank')
      //-     | GitHub
      //- p some text
      

      //- div(v-html="rawLogo")
      //- b-button(variant='danger')
      //- bottom-bar.bottom-image
      //- .vertical-center

</template>

<script>
// import Logo from '~/components/Logo.vue';
// import BottomBar from '~/assets/svg/landing-page-bottom.svg';
// import rawLogo from "~/assets/svg/landing-page-bottom.svg?raw";



import HoverableImage from '~/components/hoverable-image';
import FooterImage from '~/components/footer-image';

export default {
  components: {
    // Logo,
    // BottomBar
    HoverableImage,
    FooterImage
  },
  data () {
    return { 
      hovered: { type: Boolean, default: false },
      // rawLogo,
    };
  },
  methods: {
    selected () { this.hovered = true; },
    unSelected () { this.hovered = false; }
  }
};

</script>

<style>
/* .container-fluid {
  background-color: #ffa3ff;
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
.avoid-clicks {
  pointer-events: none;
}
.logo {
  animation: 3s appear;
  min-width: 30%;
  min-width: 45vw;
  position: relative;
  top: 25vh;
  cursor: selectedCursor;

}
.vertical-center {
  min-height: 100%;
  min-height: 100vh; 
  display: flex;
  align-items: center;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex; 
  -webkit-box-align : center;
  -webkit-align-items : center;
  -moz-box-align : center;
  -ms-flex-align : center;
  align-items : center;
  width: 100%;

}

.div {
  height: 100vh;
  width: 100vw;
  cursor: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24pt' height='24pt' viewBox='0 0 24 24' version='1.1'%3E%3Cg id='surface1'%3E%3Cpath style='fill-rule:evenodd;fill:rgb(100%25,100%25,100%25);fill-opacity:1;stroke-width:7.94;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(13.72549%25,12.156863%25,12.54902%25);stroke-opacity:1;stroke-miterlimit:10;' d='M 73.093906 23.936016 L 5.644072 5.642451 L 24.456797 75.045967 L 41.766689 56.861699 L 63.216201 78.324873 L 78.053252 63.47416 L 56.234863 41.655771 Z M 73.093906 23.936016 ' transform='matrix(0.285919,0,0,0.285919,0.038599,0)'/%3E%3C/g%3E%3C/svg%3E"), auto;
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
