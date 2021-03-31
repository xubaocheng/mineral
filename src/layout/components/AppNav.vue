<!-- 导航 -->
<template>
	<div class="app-nav">
		<ul class="app-nav-list clearFix">
			<li v-for="(item,index) in navList" :key="`navList_item_${index}`" class="app-nav-list-item left">
				<span :class="{active: currentIndex === index}" @click="handlerNav(index,item.pathName)">{{ item.name }}</span>
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
					name: '首页',
					pathName: 'home'
				},
				{
					name: '志书概况',
					pathName: 'annalsIndex'
				},
				{
					name: '新闻资讯',
					pathName: 'newsIndex'
				},
				{
					name: '书记天下矿产',
					pathName: 'mineralProductsIndex'
				},
				{
					name: '图示古今资源',
					pathName: 'resourcesIndex'
				},
				{
					name: '库存海量信息',
					pathName: 'informationIndex'
				},
				{
					name: '普及地学文明',
					pathName: 'civilizationIndex'
				}
			],
			currentIndex: 0
		}
	},

	computed: {},

	mounted() {},

	methods: {
		handlerNav(index, pathName) {
			this.currentIndex = index
			this.$router.push({
				name: pathName
			})
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
		width: 1170px;
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
