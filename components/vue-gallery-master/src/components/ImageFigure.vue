<template>
	<figure :class="className" :style="styleObject" @click="handleClick">
		<img :src="imageData.src" class="gallery-image" :alt="imageData.name"/>
		<figcaption class="image-title">
			{{imageData.title}}
		</figcaption>
		<div class="image-description">
			{{imageData.description}}
		</div>
	</figure>
</template>

<script>
export default {
	name: "imageFigure",
	props: ["index", "data", "position", "center", "inverse"],
	data: function(){
		return {
			className: "gallery-figure",
			imageData: this.data 
		}
	},
	computed: {
		styleObject: function(){   
			let position = this.position;
			let styleObject = {
				left: position.left + "px",
				top: position.top + "px"
			};
			if(position.rotate !== 0){
				styleObject["WebkitTransform"] = "rotate(" + position.rotate + "deg)";
				styleObject["transform"] = "rotate(" + position.rotate + "deg)";
			}
			if(position.center === true) styleObject.zIndex = 101;

			this.className = "gallery-figure" + (position.inverse == true ? " inverse" : "");
			return styleObject;
		}
	},
	methods: {
		handleClick: function(e){
			e.preventDefault();
			e.stopPropagation();
			
			if(this.position.center !== true){
				this.$emit("center", this.index)
			}else{
			
				this.$emit("inverse", this.index);
			}
		}
	}
}
</script>

<style scoped>
.gallery-figure{
	position: absolute;
	z-index: 100;
	width: 320px;
	height: 360px;
	padding: 40px;
	margin: 0;
	background-color: #FFFFFF;
	box-sizing: border-box;
	color: #555555;
	/* cursor: pointer; */
	-webkit-transition: transform .6s ease-in-out,
	left .6s ease-in-out, top .6s ease-in-out;
	transition: transform .6s ease-in-out,
	left .6s ease-in-out, top .6s ease-in-out;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
}
.gallery-image{
	width: 240px;
	height: 250px;
}
.image-title{
	font-size: 16px;
	margin-top: 10px;
	height: 60px;
	text-align: center;
}
.image-description{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 40px;
	box-sizing: border-box;
	background-color: #FFFFFF;
	-webkit-transform: rotateY(180deg) translateZ(1px);
	transform: rotateY(180deg) translateZ(1px);
}
.gallery-figure.inverse{
	-webkit-transform: rotateY(180deg);
	transform: rotateY(180deg);
}
@media screen and (max-width: 768px){ 
	.gallery-figure{
		/* cursor: default; */
	}
}
</style>