<template lang='pug'>
  div
    page-header.header
    //- gallery.gallery

    //- row.gallery
    //-   v-gallery(:images="list")
</template>

<script>
import PageHeader from '~/components/page-header';
import Gallery from '~/components/vue-gallery-master/src/components/Gallery'

export default {
  components: {
    PageHeader,
    Gallery
  },

  data () {
    return { 
      list: [
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
        {title:'Image1',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'},
        {title:'Image2',url:'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'},
      ]
    };
  },

  methods: {

  },

  mounted () {
  },
  computed: {
  }
};

</script>

<style>
.div {
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh; /* div is full page */
  position: relative
}
.header {
  position: absolute;
  top: 0; /* make this have a maximum height and a min */
  left: 0;
  height: 120px;
  width: 100%;
  /* text-align: center; */
}


.gallery {
  position:absolute;
  /* z-index:99999999; */
  width: 76vw;
  left: 12vw;
  height: 65vh;
  top: 20%;
  background-color:#FF73A7;
  border-width: 5px;
  border-color: black;
  border-style: solid;
}


</style>
