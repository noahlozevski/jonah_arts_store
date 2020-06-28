<template lang='pug'>
  div
    page-header.header
    
</template>

<script>
import PageHeader from '~/components/page-header';

export default {
  components: {
    PageHeader
  },

  data () {
    return { 
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

<style scoped>
.div {
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
}
.header {
  position: relative;
  top: 0vh;
}


</style>
