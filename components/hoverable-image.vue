<template lang='pug'>
    .container(@mouseover="selected()" @mouseleave="unSelected()")
        template(v-if="hovered")
            img(:src="mouseOn")
        template(v-else)
            img(:src="mouseOff")
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
    }

}
</script>

<style>
.container {
    margin:0px;
    z-index: 9999999;
}
</style>