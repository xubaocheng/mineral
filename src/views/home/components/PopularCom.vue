<!-- 科普列表 -->
<template>
	<div class="popular-warpper">
		<div v-for="(item,index) in list" :key="`list_item_${index}`" class="popular-warpper-item clearFix">
			<div class="popular-warpper-item-img left">
				<img :src="item.img" alt="">
			</div>
			<div class="popular-warpper-item-contant right">
				<p class="popular-warpper-item-contant-text">{{ item.content }}</p>
				<div class="popular-warpper-item-contant-cump clearFix">
					<span class="left">{{ item.author }}</span>
					<span class="left">{{ item.date }}</span>
					<span class="left">{{ item.time }}</span>
					<div class="popular-warpper-item-contant-cump-btn right">
						<strong class="active"> <i class="el-icon-picture-outline-round" /> 收藏</strong>
						<strong><i class="el-icon-picture-outline-round" />分享</strong>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PopularWarpper',

	components: {},

	data() {
		return {
			list: [
				{
					img: require('../../../assets/img/item.png'),
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				},
				{
					img: require('../../../assets/img/item.png'),
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				},
				{
					img: require('../../../assets/img/item.png'),
					content: '新华社北京12月3日电()由中国工商出版社主办的首届市场监管领域社会共治高峰论坛2日在北京举行。论坛发布了市场监管领域撒大声地撒大声地是滴是滴是滴',
					author: '张宏伟',
					date: '2019/03/22',
					time: '时长10分钟'
				}
			]
		}
	},

	computed: {},

	mounted() {},

	methods: {}
}

</script>
<style lang='scss' scoped>
.popular-warpper{
	width: 100%;
	&-item{
		width: 100%;
		margin-bottom: 50px;
		&-img{
			width: 188px;
			height: 115px;
			img{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		&-contant{
			width: 605px;
			&-text{
				color: #262626;
				width: 550px;
				line-height: 30px;
				margin-bottom: 20px;
			}
			&-cump{
				border-top: 1px solid #ddd;
				padding-top: 10px;
				width: 100%;
				span{
					padding: 0 15px;
					color: #949494;
				}
				&-btn{
					strong{
						color: #727272;
						padding: 0 5px;
						cursor: pointer;
						position: relative;
					}
					strong:nth-child(1):after {
						content: '';
						height: 14px;
						border-left: 2px solid #000;
						position: absolute;
						top: 3px;
						right: -1px;
					}
					.active{
						color:#1768aa;
					}
				}
			}
		}
	}
}
</style>
