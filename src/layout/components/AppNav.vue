<!-- 导航 -->
<template>
	<div class="app-nav">
		<ul class="app-nav-list clearFix">
			<li v-for="(item,index) in navList" :key="`navList_item_${index}`" class="app-nav-list-item left">
				<span :class="{active: currentIndex === index}" @click="handlerNav(index)">{{ item.name }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'AppNav',

	components: {},

	data() {
		return {
			navList: [
				{
					name: '首页'
				},
				{
					name: '志书概况'
				},
				{
					name: '新闻资讯'
				},
				{
					name: '书记天下矿产'
				},
				{
					name: '图示古今资源'
				},
				{
					name: '库存海量信息'
				},
				{
					name: '普及地学文明'
				}
			],
			currentIndex: 0
		}
	},

	computed: {},

	mounted() {},

	methods: {
		handlerNav(index) {
			this.currentIndex = index
		}
	}
}

</script>
<style lang='scss' scoped>
@import '~@/styles/home.scss';
.app-nav{
	width: 100%;
	background-color: $main-tone-color;
	&-list{
		width: 1270px;
		margin: 0 auto;
		&-item{
			span{
				display: block;
				padding: 20px 25px;
				color: #f4ce01;
				font-size: 20px;
				font-weight: bolder;
				cursor: pointer;
				&.active{
					background-color: #c69306;
					color: #fff;
				}
			}
		}
	}
}
</style>
