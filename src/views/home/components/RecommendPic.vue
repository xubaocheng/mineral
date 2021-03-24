<!-- 图片推荐 -->
<template>
	<div class="recommendPic">
		<div class="recommendPic-header">
			<i class="el-icon-picture" style="font-size:24px" /> 图片推荐
		</div>
		<div class="recommendPic-list">
			<div
				v-for="(item,index) in list"
				:key="`recommendPic-list-item_${index}`"
				class="recommendPic-list-item"
				:class="{active: currentIndex === index}"
				@click="handleClick(index)"
				>
				<p class="recommendPic-list-item-title">{{ item.text }}</p>
				<img :src="item.img" alt="">
			</div>
			<div class="recommendPic-list-btn">
				<span>MORE</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendPic',

	components: {},

	data() {
		return {
			list: [
				{
					text: '地球化学化学景观图',
					img: require('../../../assets/img/pic.png')
				},
				{
					text: '航磁工作流程图',
					img: require('../../../assets/img/pic.png')
				},
				{
					text: '火山岩大帝构造图',
					img: require('../../../assets/img/pic.png')
				},
				{
					text: '金矿区域成矿规律图',
					img: require('../../../assets/img/pic.png')
				},
				{
					text: '矿产专题图',
					img: require('../../../assets/img/pic.png')
				}
			],
			currentIndex: 0
		}
	},

	computed: {},

	mounted() {},

	methods: {
		handleClick(index) {
			this.currentIndex = index
		}
	}
}

</script>
<style lang='scss' scoped>
.recommendPic{
	width: 100%;
	&-header{
		width: 100%;
		height:54px;
		background-color: #07315b;
		font-size: 22px;
		color: #fff;
		text-align: center;
		line-height: 54px;
		font-weight: bold;
	}
	&-list{
		width: 100%;
		border: 1px solid #e4e6e5;
		&-item{
			padding: 0 15px;
			p{
				line-height: 45px;
				font-size: 16px;
				cursor: pointer;
			}
			img{
				width: 100%;
				height: 0;
			}
			&.active{
				background-color: #f3f3f3;
				p{
					color: #1968ab;
				}
				img{
					height: 100%;
					padding-bottom: 20px;
				}
			}
		}
		&-btn{
			width: 100%;
			text-align: right;
			padding: 0px 15px 10px;
			span{
				width: 60px;
				height: 20px;
				display: inline-block;
				background-color: #c48810;
				color: #fff;
				font-weight: bold;
				text-align: center;
				line-height: 20px;
				cursor: pointer;
			}
		}

	}
}
</style>
