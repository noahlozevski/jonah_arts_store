<template>
	<section class="gallery-container" ref="stage">
		<div class="gallery-box">
			<template v-for="(position, index) in positions">
				<image-figure ref="imageFigure"
					:index="index"
					:data="pictureDatas[index]"
					:position="position"
					@center="center"
					@inverse="inverse"
				/>
			</template>		
		</div>
		<nav class="gallery-controller">
			<template v-for="(position, index) in positions">
				<image-controller 
					:index="index"
					:position="position"
					@center="center"
					@inverse="inverse"
				/>
			</template>
		</nav>
	</section>
</template>

<script>
import data from "../data/picture.json"
import ImageFigure from "./ImageFigure.vue"
import ImageController from "./ImageController.vue"

let pictureDatas = [];
(function createPictures(pictureDatas){
data.forEach(value => {
	value.src = require("../images/" + value.name);
	pictureDatas.push(value);
});
})(pictureDatas);

function randomPosition(start, end){
	return Math.floor(Math.random() * (end - start)) + start;
}

function randomRotate(deg){
	let randomDeg = Math.ceil(Math.random() * deg);
	return (Math.floor(Math.random() * 2) === 0 ? "-" : "") + randomDeg;
}

export default {
	name: "gallery",
	data: function(){
		return {
			pictureDatas,
			positions: []
		}
	},
	components: {
		ImageFigure,
		ImageController
	},
	methods: {
		initPosition,
		allocationPosition,
		inverse(index) {
			let position = this.positions[index];
			position.inverse = !position.inverse;
			this.positions.splice(index, 1, position);
		},
		center(index) {
			this.allocationPosition(index);
		}
	},
	created: function(){
		this.position = {
			centerPosition: { 
				left: 0,
				top: 0,
			},
			horizontalPosition: {  
				left: [0, 0],
				right: [0, 0],
				center: [0, 0] 
			},
			verticalPosition: { 
				y: [0, 0], 
				center: [0, 0] 
			}
		}

		pictureDatas.forEach((value, index) => {
			this.positions[index] = {
				left: 0,
				top: 0,
				rotate: 0,
				center: false,
				inverse: false
			};
		});
	},
	mounted: function(){
	    this.initPosition();
		this.allocationPosition(0);
	}
}
function initPosition(){
	let stageDOM = this.$refs.stage,
	stageW = stageDOM.offsetWidth,
	stageH = stageDOM.offsetHeight;

	let imageFigureDOM = this.$refs.imageFigure[0].$el,
	imageFigureW = imageFigureDOM.offsetWidth,
	imageFigureH = imageFigureDOM.offsetHeight;

	// add or subtract from these variables to change center offset
	this.position.centerPosition.left = (stageW - imageFigureW) / 2;
	this.position.centerPosition.top = (stageH - imageFigureH) / 2 + 120;

	this.position.horizontalPosition.left[0] = - imageFigureW / 2;
	this.position.horizontalPosition.left[1] = stageW / 2 - imageFigureW / 2 * 3;
	this.position.horizontalPosition.right[0] = stageW / 2 + imageFigureW;
	this.position.horizontalPosition.right[1] = stageW - imageFigureW / 2;
	this.position.verticalPosition.y[0] = - imageFigureH / 2;
	this.position.verticalPosition.y[1] = stageH - imageFigureH;

	this.position.horizontalPosition.center[0] = stageW / 2 - imageFigureW;
	this.position.horizontalPosition.center[1] = stageW / 2;
	this.position.verticalPosition.center[0] = - imageFigureH / 2;
	this.position.verticalPosition.center[1] = stageH / 2 - imageFigureH / 2 * 3;
}
function allocationPosition(index) {
	let centerPosition = this.position.centerPosition,
		horizontalPosition = this.position.horizontalPosition,
		verticalPosition = this.position.verticalPosition;

	let positions = this.positions;

	let centerImageFigures = positions.splice(index, 1);
	
	centerImageFigures[0] = {
		left: centerPosition.left,
		top: centerPosition.top,
		rotate: Math.random() >=.5 ? Math.random()*10 : Math.random()*-10,
		center: true,
		inverse: false
	}

	let topIndex = 0, topSize = Math.floor(Math.random() * 2),
	topImageFigures = [];  
	if(topSize > 0){
		topIndex = Math.floor(Math.random() * positions.length - 1);
		topImageFigures = positions.splice(topIndex, 1);
		topImageFigures[0] = {
			left: randomPosition(
				horizontalPosition.center[0], 
				horizontalPosition.center[1]),
			top: randomPosition(
				verticalPosition.center[0],
				verticalPosition.center[1]),
			rotate: randomRotate(30),
			center: false,
			inverse: false
		}
	}

	for(let i = 0, len = positions.length, f = Math.floor(len / 2); i < len; i++){
		let p = {};
		if(i < f){
			p.left = randomPosition(
				horizontalPosition.left[0],
				horizontalPosition.left[1]
				);
		}else{
			p.left = randomPosition(
				horizontalPosition.right[0],
				horizontalPosition.right[1]
				);
		}
		p.top = randomPosition(verticalPosition.y[0], verticalPosition.y[1]);
		p.rotate = randomRotate(30);
		p.center = false;
		p.inverse = false;

		positions[i] = p;
	}

	topImageFigures.forEach(v => {
		positions.splice(topIndex, 0, v);
	});

	positions.splice(index, 0, centerImageFigures[0]);
}
</script>

<style scoped>
.gallery-container{
	position: absolute;
	/* width: 50%;
	height: 50%; */
	/* background: #EEEEEE; */
	background-image: none !important;
}
.gallery-box{
	position: relative;
	height: 100%;
	left: 0vw;
	top: 0vh;
	overflow: hidden;
	-webkit-perspective: 1000px;
	perspective: 1000px;
}
.gallery-controller{
	position: absolute;
	z-index: 999;
	bottom: -5vh;
	width: 100%;
	text-align: center;
}
</style>