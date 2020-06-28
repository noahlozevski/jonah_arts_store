<template lang='pug'>
    .container(@mouseover="selected()" @mouseleave="unSelected()" :style="{ cursor: selectedCursor }")
        //- template(v-if="!hovered")
        transition(name='fade')
            img.unhovered(:src="mouseOff" v-if="!hovered")
        transition(name='fade')
            img.hovered(:src="mouseOn" v-if="hovered")
</template>

<script>
// this takes in a hovered and/or nonhovered image location (svg) as props, override with the mouseOver variable with v-model
export default {
    data () {
        return {
            hovered: false
        }
    },
    props: {
        mouseOn: {type: String, default: null },
        mouseOff: {type: String, default: null }
    },
    methods: {
        selected () { this.hovered = true; },
        unSelected () { this.hovered = false; }
    },
    computed: {
        selectedCursor () {
            return this.hovered ? `url(data:image/png;base64,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), auto` : `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24pt' height='24pt' viewBox='0 0 24 24' version='1.1'%3E%3Cg id='surface1'%3E%3Cpath style='fill-rule:evenodd;fill:rgb(100%25,100%25,100%25);fill-opacity:1;stroke-width:7.94;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(13.72549%25,12.156863%25,12.54902%25);stroke-opacity:1;stroke-miterlimit:10;' d='M 73.093906 23.936016 L 5.644072 5.642451 L 24.456797 75.045967 L 41.766689 56.861699 L 63.216201 78.324873 L 78.053252 63.47416 L 56.234863 41.655771 Z M 73.093906 23.936016 ' transform='matrix(0.285919,0,0,0.285919,0.038599,0)'/%3E%3C/g%3E%3C/svg%3E"), auto`;
        }
    }

}
</script>

<style>
.container {
    /* z-index: ; */
    /* margin: 0 auto; */
    padding: 0;
    /* position: relative; */
}
.unhovered {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
.hovered {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>